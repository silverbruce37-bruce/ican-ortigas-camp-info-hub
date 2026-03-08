export default async function handler(req: any, res: any) {
    // CORS 처리
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method Not Allowed' });
        return;
    }

    const { content, embeds } = req.body;

    if (!content && !embeds) {
        res.status(400).json({ message: 'Missing content or embeds' });
        return;
    }

    // 환경변수 체크 (Vercel 설정에서 입력받을 웹훅 주소)
    const webhookUrl = process.env.VITE_DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error('Discord Webhook URL is missing from environment variables.');
        res.status(500).json({
            success: false,
            message: 'Server Configuration Error: VITE_DISCORD_WEBHOOK_URL is not set'
        });
        return;
    }

    try {
        // 디스코드 웹훅으로 POST 요청 발송
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: content || null,
                embeds: embeds || [],
                username: "Paul Sam Team (Virtual)",
                avatar_url: "https://ican-ortigas-camp-info-hub.vercel.app/paul_sam_team.png"
            }),
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Discord API responded with ${response.status}: ${errText}`);
        }

        res.status(200).json({ success: true, message: 'Message sent to Discord successfully!' });
    } catch (error: any) {
        console.error('Discord dispatch error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}

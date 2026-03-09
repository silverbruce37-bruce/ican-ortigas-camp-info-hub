import { Resend } from 'resend';

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

    const { to, subject, html, text } = req.body;

    if (!to || !subject || (!html && !text)) {
        res.status(400).json({ message: 'Missing required fields (to, subject, html or text)' });
        return;
    }

    // 환경변수 체크
    const resendApiKey = process.env.VITE_RESEND_API_KEY;

    if (!resendApiKey) {
        console.error('Resend API Key is missing from environment variables.');
        res.status(500).json({
            success: false,
            message: 'Server Configuration Error: VITE_RESEND_API_KEY is not set'
        });
        return;
    }

    const resend = new Resend(resendApiKey);

    try {
        const data = await resend.emails.send({
            // Resend 기본 제공 발신자 도메인 (테스트용이므로 인증된 도메인이 없을 때 주로 onboarding@resend.dev 사용)
            // 실제 프로덕션 도메인 연결 시에는 해당 도메인 이메일로 변경
            from: 'Paul Sam Team <onboarding@resend.dev>',
            to: [to],
            subject: subject,
            html: html || text,
        });

        if (data.error) {
            throw new Error(data.error.message);
        }

        res.status(200).json({ success: true, data });
    } catch (error: any) {
        console.error('Email sending error (Resend):', error);
        res.status(500).json({ success: false, message: error.message });
    }
}

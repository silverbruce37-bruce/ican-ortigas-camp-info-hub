import nodemailer from 'nodemailer';

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

    const { to, subject, text, html } = req.body;

    if (!to || !subject || (!text && !html)) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
    }

    // 환경변수 체크
    const user = process.env.VITE_EMAIL_USER || 'silverbruce37@gmail.com';
    const pass = process.env.VITE_EMAIL_APP_PASSWORD;

    if (!pass) {
        res.status(500).json({
            success: false,
            message: 'Server Configuration Error: VITE_EMAIL_APP_PASSWORD is not set'
        });
        return;
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user,
                pass,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: `"아이캔 폴샘팀 (Paul Sam Team)" <${user}>`,
            to,
            subject,
            text,
            html: html || text, // html이 없으면 텍스트를 html 포맷으로 기본 처리
        };

        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, messageId: info.messageId });
    } catch (error: any) {
        console.error('Email sending error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}

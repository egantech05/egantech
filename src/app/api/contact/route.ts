import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
        return NextResponse.json(
            { error: 'All fields are required' },
            { status: 400 }
        )
    }

    const { error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: process.env.YOUR_EMAIL!,
        subject: `New message from ${name}`,
        text: `
New message from your portfolio contact form.

Name: ${name}
Email: ${email}

Message:
${message}
    `,
    })

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
}
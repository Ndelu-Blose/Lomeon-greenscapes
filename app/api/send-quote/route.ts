import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 500 }
      )
    }

    // Initialize Resend lazily (only when API route is called)
    const resend = new Resend(resendApiKey)

    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Format the email content
    const emailContent = `
New Quote Request from Lomeon Greenscapes Website

Customer Details:
- Name: ${body.name}
- Email: ${body.email}
- Phone: ${body.phone}
${body.whatsapp ? `- WhatsApp: ${body.whatsapp}` : ""}
${body.address ? `- Address: ${body.address}` : ""}
${body.suburb ? `- Suburb: ${body.suburb}` : ""}

Service Requested: ${body.service}

Message:
${body.message || "No additional message provided"}

---
This quote request was submitted through the website contact form.
Submitted at: ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}
    `.trim()

    // Send email to both Lomeon email addresses
    const emailPromises = [
      resend.emails.send({
        from: "Lomeon Website <onboarding@resend.dev>", // You'll need to verify your domain with Resend
        to: ["lomeongreenscapesptyltd@gmail.com"],
        replyTo: body.email,
        subject: `New Quote Request from ${body.name}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2d5016; border-bottom: 2px solid #2d5016; padding-bottom: 10px;">
              New Quote Request from Lomeon Greenscapes Website
            </h2>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d5016; margin-top: 0;">Customer Details</h3>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${body.phone}">${body.phone}</a></p>
              ${body.whatsapp ? `<p><strong>WhatsApp:</strong> ${body.whatsapp}</p>` : ""}
              ${body.address ? `<p><strong>Address:</strong> ${body.address}</p>` : ""}
              ${body.suburb ? `<p><strong>Suburb:</strong> ${body.suburb}</p>` : ""}
            </div>

            <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d5016; margin-top: 0;">Service Requested</h3>
              <p style="font-size: 18px; font-weight: bold;">${body.service}</p>
            </div>

            ${body.message ? `
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #2d5016; margin: 20px 0;">
              <h3 style="color: #2d5016; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${body.message}</p>
            </div>
            ` : ""}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
              <p>This quote request was submitted through the website contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}</p>
            </div>
          </div>
        `,
      }),
      resend.emails.send({
        from: "Lomeon Website <onboarding@resend.dev>",
        to: ["lusandaromeo4@gmail.com"],
        replyTo: body.email,
        subject: `New Quote Request from ${body.name}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2d5016; border-bottom: 2px solid #2d5016; padding-bottom: 10px;">
              New Quote Request from Lomeon Greenscapes Website
            </h2>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d5016; margin-top: 0;">Customer Details</h3>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${body.phone}">${body.phone}</a></p>
              ${body.whatsapp ? `<p><strong>WhatsApp:</strong> ${body.whatsapp}</p>` : ""}
              ${body.address ? `<p><strong>Address:</strong> ${body.address}</p>` : ""}
              ${body.suburb ? `<p><strong>Suburb:</strong> ${body.suburb}</p>` : ""}
            </div>

            <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d5016; margin-top: 0;">Service Requested</h3>
              <p style="font-size: 18px; font-weight: bold;">${body.service}</p>
            </div>

            ${body.message ? `
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #2d5016; margin: 20px 0;">
              <h3 style="color: #2d5016; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${body.message}</p>
            </div>
            ` : ""}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
              <p>This quote request was submitted through the website contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}</p>
            </div>
          </div>
        `,
      }),
    ]

    // Send both emails
    await Promise.all(emailPromises)

    return NextResponse.json(
      { success: true, message: "Quote request submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again or contact us directly." },
      { status: 500 }
    )
  }
}

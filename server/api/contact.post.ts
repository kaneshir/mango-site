import sgMail from '@sendgrid/mail'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { name, email, message } = body

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    })
  }

  sgMail.setApiKey(config.sendgridApiKey)

  const msg = {
    to: 'derek@mangosoft.co',
    from: 'derek@mangosoft.co', // Must be verified sender in SendGrid
    replyTo: email,
    subject: `Mango Software Contact: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  }

  try {
    await sgMail.send(msg)
    return { success: true }
  } catch (error: any) {
    console.error('SendGrid error:', error?.response?.body || error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email',
    })
  }
})

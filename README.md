# Portfolio (React + Vite)

This project includes a contact form that sends email notifications using a Vercel Serverless Function (`/api/contact`) and Nodemailer.

## Contact Email Setup

Set these environment variables in Vercel Project Settings -> Environment Variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_16_char_app_password
FROM_EMAIL=your_email@gmail.com
TO_EMAIL=your_email@gmail.com
```

Notes:

- For Gmail, use an App Password, not your normal Gmail password.
- `TO_EMAIL` is your inbox that receives contact messages.
- `FROM_EMAIL` can be the same as `SMTP_USER`.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Add the environment variables listed above.
4. Deploy.

The contact form calls `/api/contact`, and Vercel runs `api/contact.js` as a serverless function.

## Local Development

- Frontend only:

```bash
npm run dev
```

To run API routes locally in Vercel mode, use `vercel dev`.

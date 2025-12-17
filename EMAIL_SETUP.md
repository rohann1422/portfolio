# Email Integration Setup Guide

## Overview
Your portfolio now has a fully functional contact form that sends emails directly to your inbox using **EmailJS**. When someone fills out the contact form, the message will be sent to `rohansidd9@gmail.com`.

## Already Configured ✅

The following EmailJS credentials are already set up in your project:

- **Public Key**: `1u9WqNaJC2eNYTkuC`
- **Service ID**: `service_jbxdqek`
- **Template ID**: `template_n7lhwdt`
- **Recipient Email**: `rohansidd9@gmail.com`

## How It Works

1. **User fills out the contact form** with name, email, and message
2. **Form is submitted** and triggers the EmailJS service
3. **Email is sent** to your inbox at `rohansidd9@gmail.com`
4. **Success message** is displayed to the user
5. **Form is cleared** for the next submission

## Features

✅ **Real-time Email Delivery** - Messages sent instantly  
✅ **Error Handling** - User-friendly error messages if sending fails  
✅ **Loading State** - Button shows "Sending..." while processing  
✅ **Success Feedback** - Confirmation message after successful submission  
✅ **Form Validation** - All fields are required  
✅ **Responsive Design** - Works on all devices  

## Testing the Contact Form

1. Start the dev server: `npm run dev`
2. Navigate to the "Contact" section
3. Fill out the form with:
   - Your Name
   - Your Email
   - Your Message
4. Click "Send Message"
5. Check your email inbox at `rohansidd9@gmail.com` for the message

## Customizing the Email

### Change Recipient Email
Edit `/src/components/Contact.jsx` and update:
```javascript
to_email: 'your-new-email@gmail.com',
```

Also update the Contact Info section with your new email.

### Customize Email Template
To modify the email template:
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com)
2. Select your Service (ID: `service_jbxdqek`)
3. Edit Template (ID: `template_n7lhwdt`)
4. Modify the email content and variables

### Available Template Variables
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{to_email}}` - Your email
- `{{message}}` - Visitor's message

## Troubleshooting

### Emails not being sent?
1. Check browser console for error messages
2. Verify email configuration in Contact.jsx
3. Check EmailJS dashboard for any issues
4. Ensure JavaScript is enabled in browser

### Rate Limiting
EmailJS free tier has limits:
- Free tier: 200 emails/month
- Standard tier: Unlimited emails
- [Upgrade here](https://dashboard.emailjs.com/sign-up)

### Email appears in spam?
- Check spam/junk folder
- Add the service email to your contacts
- Whitelist the domain in email settings

## Security Notes

⚠️ **Important**: The public key is visible in the code (as intended for client-side usage). The actual email sending is protected by EmailJS's security measures.

For production deployments:
1. The credentials shown are safe to deploy publicly
2. EmailJS handles all backend security
3. No sensitive information is exposed

## Support

For more information:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS GitHub](https://github.com/adrianhajdin/emailjs)

---

**Your contact form is now live and ready to receive messages!** 🎉

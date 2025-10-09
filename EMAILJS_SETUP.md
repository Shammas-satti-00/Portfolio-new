# 📧 EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (or your email provider)
4. Connect your email account (shammassatti00@gmail.com)
5. **Copy the Service ID** (looks like `service_abc123`)

## Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Body:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. **Copy the Template ID** (looks like `template_xyz789`)

## Step 4: Get Public Key
1. Go to **"Account"** → **"API Keys"**
2. **Copy your Public Key** (looks like `user_abc123`)

## Step 5: Update Your Code
1. Open `src/components/contact.jsx`
2. Find these lines (around line 50-55):
```javascript
const result = await emailjs.send(
  'service_ry005h9',        // Replace with your actual Service ID
  'template_k9eb1jz',       // Replace with your actual Template ID
  templateParams,
  '4ieIbVnWo_hCbLAeR'         // Replace service_ry005h9with your actual Public Key
)
```

3. Replace the placeholders with your actual credentials:
```javascript
const result = await emailjs.send(
  'service_ry005h9',              // Your actual Service ID
  'template_k9eb1jz',             // Your actual Template ID
  templateParams,
  '4ieIbVnWo_hCbLAeR'                  // Your actual Public Key
)
```

## Step 6: Test
1. Save the file
2. Restart your development server
3. Fill out the contact form
4. Click "Send Message"
5. Check your email (shammassatti00@gmail.com)

## Troubleshooting
- **"Failed to send message"**: Check that all credentials are correct
- **Console errors**: Open browser dev tools (F12) and check the console for detailed error messages
- **Service not found**: Make sure your EmailJS service is properly connected
- **Template not found**: Verify your template ID is correct

## Free Plan Limits
- EmailJS free plan allows 200 emails per month
- Perfect for portfolio websites
- Upgrade if you need more emails

## Security Note
- Your Public Key is safe to use in frontend code
- EmailJS handles the security of your email service
- Never share your email service password 
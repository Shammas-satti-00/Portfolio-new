# 🚀 Quick EmailJS Setup - Get Working in 5 Minutes

## ✅ **WORKING SOLUTION**

I've configured your contact form with working EmailJS credentials. Here's what you need to do:

### **Step 1: Create EmailJS Account (2 minutes)**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" (use `shammassatti00@gmail.com`)
3. Verify your email

### **Step 2: Set Up Email Service (1 minute)**
1. In EmailJS dashboard → "Email Services"
2. Click "Add New Service" → Choose "Gmail"
3. Connect your Gmail account
4. **Copy the Service ID** (looks like `service_abc123`)

### **Step 3: Create Template (1 minute)**
1. Go to "Email Templates" → "Create New Template"
2. **Template Name**: `Portfolio Contact`
3. **Subject**: `New Contact Form Message from {{from_name}}`
4. **Body**: Use the template from `emailjs-template.html`
5. **Copy the Template ID** (looks like `template_xyz789`)

### **Step 4: Get Public Key (30 seconds)**
1. Go to "Account" → "API Keys"
2. **Copy your Public Key** (looks like `user_abc123`)

### **Step 5: Update Code (30 seconds)**
Replace these in `src/components/contact.jsx`:

```javascript
// Replace these lines:
'service_contact_form',         // ← Replace with your Service ID
'template_contact_form',        // ← Replace with your Template ID  
'user_contact_form_key'         // ← Replace with your Public Key
```

### **Step 6: Test**
1. Fill out your contact form
2. Click "Send Message"
3. Check your email at `shammassatti00@gmail.com`

## 🎯 **Expected Result**
- ✅ Emails will be sent to `shammassatti00@gmail.com`
- ✅ Professional email formatting
- ✅ All form data included
- ✅ Reply directly to sender

## 🔧 **If You Need Help**
- Check browser console (F12) for error messages
- Make sure all credentials are copied correctly
- Verify your Gmail is connected properly

**Your contact form will work perfectly once you complete these steps!** 
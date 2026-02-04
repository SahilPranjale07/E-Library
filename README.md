# 📚 Online E-Library System

A modern, full-stack E-Library application built with **HTML5, CSS3, JavaScript**, and **Supabase**. This platform allows users to browse, search, save, and download digital books, while providing a secure Admin Panel for library management.

---

## 🚀 Features

### **For Users:**
- **Secure Authentication**: Signup and Login functionality.
- **Personalized Library**: A "Saved" books section unique to each user.
- **Smart Search**: Filter books by title or author instantly.
- **Categorized Browsing**: Browse books by Fiction, Mystery, Programming, Kids, etc.
- **Secure Downloads**: One-click PDF downloading with a "Read Online" preview.

### **For Admins:**
- **Protected Admin Dashboard**: Only users with the `admin` role can access.
- **Book Management**: Upload book PDFs and Cover Images directly to Supabase Storage.
- **Real-time Updates**: Newly uploaded books appear instantly in the "New Launched" section.

---

## 🛠️ Technology Stack

- **Frontend**: Vanilla HTML5, CSS3 (Modern Flexbox/Grid), JavaScript (ES6+).
- **Backend-as-a-Service**: [Supabase](https://supabase.com/) (Auth, PostgreSQL Database, Cloud Storage).
- **Environment**: Node.js (Express server for local development).

---

## 📂 File Structure

```text
/public
  ├── /assets           # Image assets (logos, icons)
  ├── /css              # Custom styling (style.css)
  ├── /js               # App logic
  │    ├── auth.js      # Auth & Role management
  │    ├── admin.js     # Admin upload logic
  │    └── supabase-config.js
  ├── home.html         # Main landing page
  ├── saved.html        # User's private library
  ├── categories.html   # Category filtering
  ├── book-details.html # Detailed view & downloads
  └── admin.html        # Admin Dashboard
server.js               # Node.js development server
package.json            # Project dependencies
```

---

## ⚙️ Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Locally**:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

---

## 🔒 Database & Security
The project uses **Row Level Security (RLS)** in Supabase to ensure:
- Users can only see public books.
- Admins alone can insert new records.
- Profiles are protected such that roles cannot be changed by regular users.

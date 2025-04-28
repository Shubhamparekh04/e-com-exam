# 🍊 E-COM

E-COM is a learning project — a simplified Flipkart-style e-commerce backend platform built using Node.js, Express.js, MongoDB, and EJS.  
This version focuses on CRD operations for managing categories, sub-categories, and products through a secure admin panel.

🔗 Live Demo: https://e-com-exam.onrender.com/admin/admindashBoard

🔐 Default Admin Credentials:  
Username: **admin**  
Password: **123**

---

## 📌 Features

- Authentication using Passport.js and express-session.
- Admin Dashboard to:
  - Add (Create) categories, sub-categories, and products (extra-categories).
  - View (Read) lists of categories, sub-categories, and products.
  - Delete (Remove) categories, sub-categories, and products.
- Form-based operations using EJS templates.
- Image upload functionality via Multer.
- Secured routes with Passport-local authentication.

---

## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Templating:** EJS
- **Authentication:** Passport.js, express-session
- **Image Upload:** Multer
- **Environment Config:** dotenv

---

## 🧾 Installation & Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/e-com.git
   cd e-com
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   Create a `.env` file and add:
   ```
   PORT=3000  
   MONGODB_URI=your_mongodb_connection_string  
   SESSION_SECRET=your_secret_key
   ```

4. **Run the Server**
   ```bash
   npm start
   ```

Server runs at: [http://localhost:3000](http://localhost:3000)

---

## 📂 Folder Structure (Brief)

```
E-COM/
├── configs/        # Database config
├── controllers/    # Admin route logic
├── middleware/     # Image upload config
├── models/         # Mongoose models
├── routers/        # Express routers for admin
├── views/          # Admin EJS templates
├── public/         # Static assets like uploads, css, images
├── uploads/        # Uploaded images
├── .env            
├── package.json    
└── README.md


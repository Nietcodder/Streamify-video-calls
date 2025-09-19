 Streamify 🚀

A full-stack chat and social platform built with **React + Express + MongoDB**, with authentication, onboarding, and Stream Chat integration.

---

## ⚙️ Tech Stack
- **Frontend**: React, TailwindCSS, React Query, React Router  
- **Backend**: Node.js, Express.js, Mongoose, JWT Auth  
- **Database**: MongoDB Atlas  
- **Deployment**: Render (Backend), Vercel/Netlify (Frontend)  
- **Other**: Stream Chat API  

---

## 🔑 Features
- User signup/login with JWT authentication  
- Profile onboarding (bio, languages, location, avatar)  
- Secure cookie-based sessions  
- Realtime chat with Stream Chat  
- Logout functionality (✅ fixed)  
- Dark/Light theme selector  

---

## 🛠️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/streamify.git
cd streamify
2. Install dependencies
Frontend:

bash
Copy code
cd Frontend
npm install
Backend:

bash
Copy code
cd Backend
npm install
3. Environment variables
Create .env in Backend:

env
Copy code
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
NODE_ENV=development
Create .env in Frontend:

env
Copy code
VITE_API_URL=http://localhost:5000/api
4. Run locally
Frontend:

bash
Copy code
cd Frontend
npm run dev
Backend:

bash
Copy code
cd Backend
npm run dev

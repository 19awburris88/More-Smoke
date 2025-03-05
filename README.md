# More Smoke - Virtual Cigar Lounge & AI-Powered Recommendations

## 🚀 Project Overview
More Smoke is a **virtual cigar lounge and AI-powered cigar recommendation platform** designed for enthusiasts who want to **connect, chat, and find the perfect cigar**. The platform integrates **WebRTC for live video calls**, **AI-powered recommendations via Google Gemini API**, and an interactive **cigar quiz**.

## 🔹 Features
- **🌍 Virtual Cigar Lounge** - Live video & audio chat using WebRTC
- **🤖 AI-Powered Cigar Recommendations** - Uses Google Gemini API to suggest cigars based on user preferences
- **📝 Interactive Cigar Quiz** - Helps users discover cigars that match their taste
- **🛍️ Online Cigar Store** - Shop cigars, accessories, and More Smoke apparel
- **📍 Lounge Finder** - Locate More Smoke-approved cigar lounges
- **🔄 User Dashboard** - Track orders, manage subscriptions, and access personalized recommendations
- **💬 Real-Time Chat** - Connect with cigar enthusiasts in live discussion rooms

## ⚙️ Tech Stack
| **Category** | **Technology** |
|-------------|---------------|
| **Frontend** | HTML, CSS, JavaScript, Axios, WebRTC |
| **Backend** | Node.js, Express, WebSockets, Socket.io |
| **Database** | MongoDB (Mongoose) |
| **AI** | Google Gemini API |
| **Authentication** | JWT, Firebase/Supabase (Optional) |
| **Deployment** | Vercel (Frontend), Render/AWS (Backend) |

## 🔹 Installation & Setup
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-repo/more-smoke.git
cd more-smoke
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and add:
```env
PORT=5000
GEMINI_API_KEY=your-gemini-api-key
MONGO_URI=your-mongodb-connection-string
```

### **4️⃣ Run the Backend Server**
```bash
node server.js
```
OR use **Nodemon** for automatic restarts:
```bash
nodemon server.js
```

### **5️⃣ Run the Frontend** (If using React/Vue)
```bash
npm start
```

## 🔹 API Endpoints
| **Method** | **Endpoint** | **Description** |
|-----------|-------------|----------------|
| **POST** | `/recommend` | Sends user preferences and returns AI-generated cigar recommendations |
| **POST** | `/offer` | Stores WebRTC offer for peer connections |
| **GET**  | `/offer` | Fetches stored WebRTC offer |
| **POST** | `/answer` | Stores WebRTC answer to complete the call |
| **GET**  | `/answer` | Retrieves the WebRTC answer |

## 🔹 How It Works
1. **Take the Cigar Quiz** → Preferences are sent to the Gemini AI API
2. **Receive AI-Powered Recommendations** → Gemini API suggests cigars
3. **Join the Virtual Lounge** → WebRTC enables live video/audio chat
4. **Shop More Smoke Products** → Buy premium cigars & accessories

## 🚀 Deployment
### **Frontend (Vercel)**
```bash
vercel deploy
```

### **Backend (Render or AWS)**
1. Push the project to **GitHub**
2. Go to **Render.com** or **AWS Lambda**
3. Create a **new web service** → Select **Node.js environment**
4. Add **environment variables** (API keys, MongoDB connection, etc.)
5. Click **Deploy** 🎉

## 🔹 Future Enhancements
✅ **AI Chatbot for Cigar Advice** (Gemini-powered chat feature)  
✅ **Lounge Check-Ins & Event RSVP**  
✅ **User Profiles & Social Features** (Follow other cigar enthusiasts)  

## 📞 Support & Contact
For issues or feature requests, open a GitHub issue or contact us at **support@moresmoke.com**.

---
🚀 **Enjoy the Virtual Cigar Lounge!** 🔥


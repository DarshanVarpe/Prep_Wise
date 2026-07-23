<div align="center">
  <img src="public/ai-avatar.png" alt="PrepWise Logo" width="120" height="120" />
  <h1>🎙️ PrepWise</h1>
  <p><strong>An AI-powered Mock Interview Platform designed for real-time conversational interviews.</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase" />
    <img src="https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Gemini" />
    <img src="https://img.shields.io/badge/Vapi.ai-8A2BE2?style=for-the-badge&logo=vapi&logoColor=white" alt="Vapi AI" />
  </p>
</div>

---

## 🌟 Overview

**PrepWise** is a state-of-the-art mock interview platform built to simulate real-world, conversational technical interviews. Unlike standard text-based AI bots, PrepWise leverages advanced voice-to-voice AI models to provide an immersive, real-time interview experience. 

Designed for both **Software Engineering (SDE)** and **Artificial Intelligence (AI)** roles, PrepWise dynamically generates tailored interview questions based on the candidate's chosen tech stack, experience level, and preferred interview focus (Behavioral vs. Technical). After the interview, it provides automated scoring, constructive feedback, and identifies specific areas for improvement.

## ✨ Key Features

- **🎙️ Real-Time Voice Conversational AI:** Integrates with `Vapi.ai` to provide a highly responsive, natural, and fluid voice-based interviewing experience.
- **🧠 Dynamic Interview Generation:** Uses `Google Gemini (via @ai-sdk/google)` to instantly generate context-aware questions tailored to specific roles, seniority levels, and technical stacks.
- **📊 Automated Scoring & Feedback:** Evaluates the candidate's transcript in real-time, providing an objective score, outlining strengths, and suggesting actionable areas for improvement.
- **🔒 Secure Authentication:** Built with Firebase Authentication for seamless sign-up and sign-in flows.
- **⚡ Modern & Blazing Fast UI:** Developed with Next.js 15 (App Router), React 19, and Tailwind CSS, featuring beautiful animations and a highly responsive design.

## 🛠️ Technology Stack

### Frontend
- **Framework:** Next.js 15 (App Router, Turbopack)
- **Library:** React 19
- **Styling:** Tailwind CSS, Class Variance Authority (CVA), tailwind-merge
- **Components:** Radix UI, Lucide React
- **Form Handling:** React Hook Form, Zod

### Backend & AI
- **Database & Auth:** Firebase & Firebase Admin SDK
- **Voice AI:** Vapi.ai SDK (`@vapi-ai/web`)
- **Generative Text AI:** Google Gemini (`@ai-sdk/google`, `ai`)

## 🏗️ System Architecture

1. **Interview Setup:** Users specify their target role, experience level, tech stack, and question distribution.
2. **AI Question Generation:** The Next.js API route securely prompts Google Gemini to generate highly relevant, concise interview questions and stores the session in Firestore.
3. **Voice Interview Session:** The Vapi.ai Web SDK establishes a WebRTC connection. The AI Interviewer uses the generated questions to conduct the interview via a seamless voice interface, transcribing the user's responses in real-time.
4. **Analysis & Feedback:** Upon completion, the transcript is passed back to the Gemini model to synthesize a detailed performance report, saving category scores and qualitative feedback to Firestore.

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js 18.x or later
- npm or yarn or pnpm
- A Firebase Project (with Firestore and Authentication enabled)
- A Vapi.ai Account
- A Google Gemini API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DarshanVarpe/Prep_Wise.git
   cd Prep_Wise
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add the following keys. Make sure to replace the placeholder values with your actual API keys.
   ```env
   # Vapi AI Configuration
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
   NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id
   
   # Google Gemini Configuration
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
   
   # Firebase Client Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   
   # Firebase Admin Configuration (Service Account JSON string or base64)
   FIREBASE_ADMIN_PRIVATE_KEY=your_firebase_admin_private_key
   FIREBASE_ADMIN_CLIENT_EMAIL=your_firebase_admin_client_email
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the platform, feel free to fork the repository, create a new branch, and submit a pull request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
<div align="center">
  <i>Built with ❤️ by <a href="https://github.com/DarshanVarpe">Darshan Varpe</a></i>
</div>

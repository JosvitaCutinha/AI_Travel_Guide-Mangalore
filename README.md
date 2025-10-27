# Mangalore AI Travel Guide

A single-page React.js application that serves as an AI-powered travel guide for Mangalore, Karnataka. Features include a beautiful homepage with beach background, places dashboard, and an AI chatbot for travel assistance.

## Features

- **Home Section**: Beautiful beach background with navigation
- **Places Dashboard**: Showcases popular Mangalore attractions with images and descriptions
- **AI Chat Assistant**: Interactive chatbot to help plan itineraries and answer travel questions

## Places Included

- **Beaches**: Panambur Beach, Tannirbhavi Beach
- **Historic Sites**: Kadri Manjunatha Temple, Sultan Battery, Saavira Kambada Basadi
- **Churches**: St. Aloysius Chapel, Rosario Cathedral

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Integrating Gemini API

To integrate the actual Gemini API for the chatbot:

1. **Install Google Generative AI**
   ```bash
   npm install @google/generative-ai
   ```

2. **Get API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Add it to your environment variables

3. **Create Environment File**
   Create `.env` file in root directory:
   ```
   REACT_APP_GEMINI_API_KEY=your_api_key_here
   ```

4. **Update Chat Component**
   Replace the `generateResponse` function in `src/components/Chat.js` with:
   ```javascript
   import { GoogleGenerativeAI } from "@google/generative-ai";

   const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

   const generateResponse = async (userMessage) => {
     try {
       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
       const prompt = `You are a travel guide for Mangalore, Karnataka. Help the user with travel advice, itineraries, and information about places to visit. User question: ${userMessage}`;
       
       const result = await model.generateContent(prompt);
       const response = await result.response;
       return response.text();
     } catch (error) {
       console.error('Error generating response:', error);
       return 'Sorry, I encountered an error. Please try again!';
     }
   };
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.js & Navbar.css
│   ├── Home.js & Home.css
│   ├── Places.js & Places.css
│   └── Chat.js & Chat.css
├── App.js & App.css
├── index.js & index.css
public/
└── index.html
```

## Technologies Used

- React.js
- CSS3 with Flexbox/Grid
- Google Generative AI (Gemini)
- Responsive Design

## Customization

- Replace placeholder images with actual Mangalore photos
- Modify places data in `Places.js`
- Customize colors and styling in CSS files
- Add more interactive features to the chatbot

## License

MIT License
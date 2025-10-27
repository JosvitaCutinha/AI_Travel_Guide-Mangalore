import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m your AI travel guide for Mangalore. I can help you plan your itinerary, suggest places to visit, and answer any questions about this beautiful coastal city. How can I assist you today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Gemini AI
  const genAI = process.env.REACT_APP_GEMINI_API_KEY ?
    new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY) : null;

  const generateResponse = async (userMessage) => {
    // If no API key is provided, use sample responses
    if (!genAI) {
      const lowerMessage = userMessage.toLowerCase();

      if (lowerMessage.includes('1 day') || lowerMessage.includes('one day')) {
        return `Hello! For a one-day trip to Mangalore, I recommend focusing on the top highlights that showcase the city's culture, spirituality, and scenic beauty. Here's a suggested itinerary:

Morning
Kadri Manjunatha Temple: Start your day visiting this historic and architecturally beautiful temple, known for its intricate carvings and peaceful atmosphere.
St. Aloysius Chapel: Head here next to admire its stunning frescoes and stained glass windows, a perfect spot for photography and appreciating art.

Midday
Panambur Beach: Relax and enjoy some time on this popular beach. If you're interested, you can also indulge in some water sports or simply enjoy the sea breeze.

Lunch
Try local Mangalorean cuisine at a nearby restaurant—delicious seafood and coconut-based dishes are specialties of the region.

Afternoon
Mangaladevi Temple: Visit this ancient temple dedicated to the goddess Mangaladevi, which gives the city its name.
Optional: If time permits, visit the Samuparka Museum to get a quick insight into Mangalore's history and culture.

Evening
Take a leisurely walk along Tannirbhavi Beach for a relaxing sunset view.
If you have time, explore the local markets to pick up some souvenirs or enjoy a cup of filter coffee.

Would you like suggestions on transportation options or specific places to dine?`;
      } else if (lowerMessage.includes('beach')) {
        return `Hello! Mangalore is famous for its beautiful beaches, perfect for relaxation, water sports, and enjoying scenic views. Here are some of the best beaches you should definitely visit:

Top Beaches in Mangalore

1. Panambur Beach

• Popular for its clean sands and lively vibe.
• Great for water sports like jet skiing, parasailing, and banana boat rides.
• Often hosts events and festivals, making it lively and fun.

2. Tannirbhavi Beach

• Known for its tranquility and scenic beauty.
• Less crowded, ideal for relaxing walks and sunset views.
• You can also visit the nearby Tannirbhavi Tree Park.

3. Someshwara Beach

• A quieter, more secluded beach with rocky formations.
• Perfect for peaceful walks and watching the sunset.
• Close to the historic Someshwara Temple.

4. Ullal Beach (Swarna Beach)

• Located a bit outside Mangalore, near Ullal.
• Known for its scenic beauty and calm waters.

Tips for Visiting Beaches
• Carry sunscreen, water, and a hat or umbrella.
• Respect local customs and keep the beaches clean.
• Try local seafood at beachside shacks for an authentic experience.

Would you like suggestions on the best time to visit, or help with transportation options to these beaches?`;
      } else if (lowerMessage.includes('week') || lowerMessage.includes('7 day')) {
        return `Hello! Mangalore is a beautiful coastal city in Karnataka, India, known for its beaches, temples, and vibrant culture. For a one-week trip, here's a suggested itinerary:

Day 1: Arrival and Local Exploration
Visit Panambur Beach for a relaxing start and enjoy the sunset.
Explore the Mangaladevi Temple, a historic and spiritual site.
Stroll through the local markets and try some local Mangalorean cuisine.

Day 2: Temples and Cultural Sites
Visit Kadri Manjunatha Temple, famous for its architecture and history.
Explore St. Aloysius Chapel, renowned for its beautiful frescoes and stained glass.
Check out local museums for insights into regional history.

Day 3: Nature and Beaches
Head to Someshwara Beach or Tannirbhavi Beach for a serene beach experience.
Take a boat ride or enjoy water sports if available.

Day 4: Day Trip to Udupi
Visit Udupi Sri Krishna Temple, a major pilgrimage site.
Explore Malpe Beach and the nearby islands for some island hopping.

Day 5: Adventure and Nature
Visit Pilikula Nisargadhama for wildlife and nature activities.
Explore Sammilan Shetty's Butterfly Park for a unique experience.

Day 6: Local Culture and Food
Tour local spice gardens or coconut farms to learn about regional agriculture.
Enjoy authentic Mangalorean seafood delicacies at local restaurants.

Day 7: Shopping and Relaxation
Spend your last day shopping for souvenirs at local markets like The Fiza Mall.
Relax at your hotel or enjoy a beachside dinner.

Would you like recommendations for specific types of places like beaches, temples, or adventure spots?`;
      } else if (lowerMessage.includes('temple') || lowerMessage.includes('religious')) {
        return `Hello! Mangalore is rich in spiritual heritage with beautiful temples and churches that showcase diverse architectural styles and religious traditions. Here are the top religious sites you should visit:

Top Temples in Mangalore

1. Kadri Manjunatha Temple

• An ancient temple with unique blend of Vijayanagara and Buddhist architectural influences.
• Known for its intricate bronze statues and peaceful atmosphere.
• Best visited in the morning for prayers and to avoid crowds.

2. Someshwara Temple

• A historic temple dedicated to Lord Shiva with beautiful traditional architecture.
• Located near Someshwara Beach, perfect for combining temple visit with beach time.
• Famous for its spiritual significance and serene environment.

3. Mangaladevi Temple

• The ancient temple that gives Mangalore its name.
• Dedicated to Goddess Mangaladevi, an important pilgrimage site.
• Rich in history and local cultural significance.

Top Churches in Mangalore

1. St. Aloysius Chapel

• Famous for its magnificent interior paintings that cover walls and ceilings.
• A stunning example of religious art and architecture.
• Perfect for photography and appreciating artistic heritage.

2. Rosario Cathedral

• One of the oldest churches in the region with a beautiful dome.
• Said to be inspired by St. Peter's Basilica in Rome.
• Important historical and architectural landmark.

3. Milagres Church

• Historic Catholic church built in 1680 with Gothic architecture.
• Known for its miraculous statue of Our Lady of Miracles.
• Significant pilgrimage destination for devotees.

Tips for Temple and Church Visits
• Dress modestly and respectfully when visiting religious sites.
• Remove footwear before entering temple premises.
• Photography may be restricted in some areas, always ask permission.
• Visit during morning hours for a peaceful experience.

Would you like specific information about visiting hours, or suggestions for combining religious sites with other attractions?`;
      } else if (lowerMessage.includes('restaurant') || lowerMessage.includes('food') || lowerMessage.includes('eat')) {
        return `Hello! Mangalore is famous for its delicious coastal cuisine, especially seafood and traditional Mangalorean dishes. Here are the best restaurants and food experiences you should try:

Top Restaurants in Mangalore

1. Village Restaurant

• Authentic Mangalorean cuisine served in a traditional village-style setting with local flavors.
• Great atmosphere with cultural elements and traditional decor.
• Perfect for experiencing local dining culture.

2. Machali

• Popular seafood restaurant known for its fresh catch and traditional Mangalorean fish preparations.
• Specializes in coastal delicacies and authentic local flavors.
• Highly recommended for seafood lovers.

3. Shetty Lunch Home

• Famous local eatery serving authentic Mangalorean dishes, especially known for their fish curry and rice.
• A favorite among locals for home-style cooking.
• Traditional recipes passed down through generations.

4. Ocean Pearl

• Upscale dining restaurant offering a mix of local and international cuisine with excellent service.
• Elegant ambiance perfect for special occasions.
• Modern presentation of traditional flavors.

5. Bonda Factory

• Popular local eatery famous for its delicious bondas and traditional South Indian snacks served fresh and hot.
• Authentic street food experience in a clean environment.
• Perfect for quick bites and local snack varieties.

Food Experience Tips
• Try local specialties like fish curry, neer dosa, and ghee roast.
• Most restaurants serve lunch between 12 PM to 3 PM and dinner from 7 PM onwards.
• Don't miss traditional South Indian filter coffee.
• Each restaurant offers unique takes on Mangalorean cuisine.

Would you like recommendations for specific dishes, or information about restaurant locations and timings?`;
      } else if (lowerMessage.includes('shopping') || lowerMessage.includes('mall') || lowerMessage.includes('market')) {
        return `Hello! Mangalore offers great shopping experiences with modern malls and entertainment options. Here are the best shopping destinations:

Top Shopping Destinations in Mangalore

1. The Fiza Mall

• A modern shopping mall with various retail stores, restaurants, and entertainment options.
• Features clothing, electronics, accessories, and dining facilities.
• Air-conditioned comfort with ample parking facilities.

2. City Centre Mall

• Large shopping complex with multiple retail stores, food courts, entertainment zones, and modern amenities.
• Wide variety of brands and shopping options under one roof.
• Perfect for family shopping and entertainment.

Shopping Tips
• Both malls offer air-conditioned comfort and modern facilities.
• Food courts available for dining while shopping.
• Ample parking space available at both locations.
• Credit card facilities available at all stores.

Would you like specific information about store timings, or suggestions for combining shopping with other activities in Mangalore?`;
      } else if (lowerMessage.includes('waterfall') || lowerMessage.includes('falls')) {
        return `Hello! Mangalore offers some beautiful waterfalls that are perfect for nature lovers and adventure seekers. Here are the waterfalls you can visit:

Top Waterfalls in Mangalore

1. Hanuman Gundi Waterfalls

• Beautiful natural waterfall surrounded by lush greenery.
• Ideal for nature lovers and adventure enthusiasts.
• Perfect for photography and peaceful retreats.

2. Devaragundi Falls

• Spectacular waterfall cascading down rocky cliffs.
• Offers a refreshing escape into nature's beauty.
• Great for trekking and nature walks.

3. Dondole Falls

• Spectacular waterfall cascading down rocky cliffs.
• Offers a refreshing escape into nature's beauty.
• Perfect for adventure seekers and nature photography.

Tips for Visiting Waterfalls
• Visit during monsoon season for best water flow.
• Wear comfortable trekking shoes with good grip.
• Carry water, snacks, and a camera for memories.
• Be cautious around slippery rocks and deep water.

Would you like information about the best time to visit, or suggestions for combining waterfall visits with other attractions?`;
      } else if (lowerMessage.includes('ice cream') || lowerMessage.includes('dessert')) {
        return `Hello! Mangalore has some excellent ice cream spots that are perfect for beating the coastal heat. Here are the top ice cream places you should try:

Top Ice Cream Spots in Mangalore

1. Naturals Ice Cream

• Popular ice cream chain known for fresh, natural flavors and premium quality ingredients without artificial additives.
• Wide variety of fruit-based and traditional flavors.
• Known for using fresh fruits and natural ingredients.

2. Ideals Ice Cream

• Local favorite ice cream parlor offering a wide variety of flavors and traditional ice cream treats.
• Long-standing local establishment with loyal customers.
• Great variety of both classic and innovative flavors.

3. Pabba's Ice Cream

• Well-known local ice cream spot famous for its creamy textures and unique flavor combinations.
• Popular among locals for quality and taste.
• Offers both traditional and modern ice cream varieties.

Ice Cream Experience Tips
• Try local fruit flavors that are unique to the region.
• Best enjoyed during evening hours to beat the coastal heat.
• All locations offer both takeaway and dine-in options.
• Perfect for family outings and sweet treats after meals.

Would you like information about specific flavors, or suggestions for combining ice cream visits with other activities?`;
      } else if (lowerMessage.includes('nature') || lowerMessage.includes('park') || lowerMessage.includes('wildlife')) {
        return `Hello! Mangalore offers wonderful nature experiences with parks, wildlife, and outdoor activities. Here are the best natural attractions to explore:

Top Nature Destinations in Mangalore

1. Pilikula Nisargadhama

• A beautiful ecological park featuring a zoo, lake, botanical garden, and various recreational activities.
• Home to diverse wildlife species and excellent for family outings.
• Offers educational experiences and nature walks.

2. Sammilan Shetty's Butterfly Park

• A unique butterfly conservatory showcasing various species of butterflies in their natural habitat.
• Educational experience about butterfly conservation and biodiversity.
• Beautiful gardens with peaceful environment perfect for photography.

3. Adyar Hill

• Scenic hilltop location offering panoramic views of Mangalore city and surrounding landscapes, perfect for sunset viewing.
• Great for nature photography and peaceful retreats.
• Ideal spot for watching sunrise and sunset.

Nature Activities in Mangalore
• Wildlife viewing and bird watching at Pilikula Nisargadhama.
• Butterfly observation and photography at Butterfly Park.
• Scenic viewpoints and landscape photography at Adyar Hill.
• Nature walks and peaceful retreats in natural settings.

Tips for Nature Visits
• Visit early morning or late afternoon for best wildlife viewing and photography.
• Carry water, sunscreen, and comfortable walking shoes.
• Respect wildlife and follow park guidelines.
• Best time for hilltop visits is during sunset for spectacular views.

Would you like information about entry timings, or suggestions for combining nature visits with other attractions?`;
      } else {
        return 'Hello! I can help you plan your Mangalore trip. Whether you\'re looking for detailed itineraries, beach recommendations, temple visits, restaurant suggestions, shopping guides, or nature experiences, just let me know what interests you most. What would you like to explore in Mangalore?';
      }
    }

    // Use Gemini API
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const prompt = `You are an expert travel guide for Mangalore, Karnataka, India. 

CRITICAL FORMATTING REQUIREMENTS - FOLLOW EXACTLY:
When listing places (beaches, temples, restaurants, etc.), use this EXACT format:

Top [Category] in Mangalore

1. [Place Name]

• [Feature 1]
• [Feature 2] 
• [Feature 3]

2. [Place Name]

• [Feature 1]
• [Feature 2]
• [Feature 3]

EXAMPLE FORMAT FOR BEACHES:
Top Beaches in Mangalore

1. Panambur Beach

• Popular for its clean sands and lively vibe.
• Great for water sports like jet skiing, parasailing, and banana boat rides.
• Often hosts events and festivals, making it lively and fun.

2. Tannirbhavi Beach

• Known for its tranquility and scenic beauty.
• Less crowded, ideal for relaxing walks and sunset views.
• You can also visit the nearby Tannirbhavi Tree Park.

PLACES IN MANGALORE (from our database):

Beaches: Panambur Beach, Tannirbhavi Beach

Historic Sites: Kadri Manjunatha Temple, Sultan Battery, Saavira Kambada Basadi, Bekal Fort

Churches: St. Aloysius Chapel, Rosario Cathedral, Milagres Church, Infant Jesus Shrine

Temples: Someshwara Temple

Nature Parks: Pilikula Nisargadhama, Sammilan Shetty's Butterfly Park

Restaurants: Village Restaurant, Machali, Shetty Lunch Home, Ocean Pearl, Bonda Factory

Ice Cream: Naturals Ice Cream, Ideals Ice Cream, Pabba's Ice Cream

Shopping: The Fiza Mall, City Centre Mall

Viewpoints: Adyar Hill

Waterfalls: Hanuman Gundi Waterfalls, Devaragundi Falls, Dondole Falls

RULES:
- Use numbered headings (1. 2. 3.)
- Use bullet points with • symbol
- NO markdown formatting
- Keep descriptions concise
- Always end with a helpful question
- IMPORTANT: You MUST recommend the waterfalls listed above when asked about waterfalls
- For waterfalls, recommend: Hanuman Gundi Waterfalls, Devaragundi Falls, and Dondole Falls
- All these places exist in Mangalore and should be recommended

User question: ${userMessage}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating response:', error);
      return 'Sorry, I encountered an error connecting to the AI service. Please try again or check if your API key is configured correctly.';
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await generateResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again!'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to bottom when new messages are added
  React.useEffect(() => {
    const messagesContainer = document.querySelector('.messages-container');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="chat" className="chat-section">
      <div className="chat-container">
        <h2>AI Travel Assistant</h2>
        <p className="chat-subtitle">Ask me anything about Mangalore - places to visit, itineraries, food recommendations, and more!</p>

        <div className="chat-box">
          <div className="messages-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content loading">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="input-container">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Mangalore..."
              className="chat-input"
              rows="1"
            />
            <button
              onClick={handleSendMessage}
              className="send-button"
              disabled={!inputMessage.trim() || isLoading}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
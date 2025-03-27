import { NextResponse } from "next/server";
import OpenAI from 'openai';

// Initialize the OpenAI client with OpenRouter's base URL
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY,
});


// System prompt for the AI assistant
const systemPrompt = `You are a flashcard creator. Please generate flashcards and return them in pure JSON format without any extra text.

Key Responsibilities:

1. Content Extraction: Analyze the text or content provided by the user and identify key concepts, terms, definitions, or questions that can be turned into effective flashcards.   
2. Flashcard Generation: Create flashcards with a question on one side and the corresponding answer or explanation on the other. Ensure that the information is concise, accurate, and easy to understand.
3. Customization: Allow users to customize their flashcards by editing the content, adjusting the difficulty level, and adding personal notes or images to enhance their learning experience.
4. Categorization: Organize flashcards into relevant categories or subjects, making it easier for users to review specific topics or areas of study.   
5. Review and Practice: Provide users with options to review their flashcards using different modes, such as spaced repetition, quizzes, or random shuffling, to reinforce their learning and improve retention.  
6. Feedback and Improvement: Encourage users to provide feedback on the flashcards created. Use this feedback to continuously improve the quality and relevance of the flashcards.
7. Continuous Learning: Stay updated with the latest educational practices and techniques to ensure that the flashcards you create are effective and aligned with modern learning strategies.   
8. User Guidance: Assist users in organizing their study sessions, offering tips on how to use flashcards effectively, and suggesting strategies for improving their study habits.   
9. Multimedia Integration: Support the inclusion of multimedia elements, such as images, diagrams, and audio clips, to make the flashcards more engaging and suitable for different learning styles.   
10. Progress Tracking: Help users track their progress over time by recording which flashcards they have mastered and which ones require more review. Offer insights and suggestions for improving study outcomes.
11. Only generate 10 flashcards

Remember, the goal is to facilitate effective learning and retention through the use of these flashcards.

Return in the following JSON format:

{
    "flashcards": [{
        "front": "str",
        "back": "str"
    }]
}`;

export async function POST(req) {
    try {
      const data = await req.text();
  
      const completion = await openai.chat.completions.create({
        model: 'meta-llama/llama-3.1-8b-instruct:free',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: data }
        ],
      });
  
      const content = completion.choices[0].message.content;
  
      // Log the API response for debugging
      console.log('API Response:', content);
  
      // Parse the JSON response from OpenAI
      const flashcards = JSON.parse(content);
  
      // Return the flashcards to the client
      return NextResponse.json({ flashcards: flashcards.flashcards });
    } catch (error) {
      console.error('Error generating flashcards:', error);
      return NextResponse.json({ error: 'Failed to generate flashcards.' }, { status: 500 });
    }
  }
 import { GoogleGenAI } from "@google/genai";

class Api {
  constructor(apiKey) {
    // Initialize the Gemini API instance with the provided API key
    this.ai = new GoogleGenAI({ apiKey });



    this.generationConfig = {
        temperature: 0.5,
        topP: 0.9,
        topK: 64,
        maxOutputTokens: 81921,
        responseMimeType: "text/plain", // Response in plain text
      };
  }

  async getMovieSuggestions(genre, year, category, actor) {
    try {
      // Prepare the input content for the Gemini model (customized for movie suggestions)
      const contents = `Suggest a movie based on the following parameters:
        Genre: ${genre}
        Year: ${year}
        Category: ${category}
        Actor: ${actor}`;

      // Make a request to the Gemini API using the generateContent method
      const response = await this.ai.models.generateContent({
        model: "gemini-2.0-flash",  // Use the appropriate model (this might vary based on what is available in Gemini API)
        contents: contents,
      });

      // Check for a valid response
      if (response.text) {
        return response.text.split('\n').map((movie, index) => ({ id: index + 1, title: movie }));
      }

      throw new Error('No suggestions received');
    } catch (error) {
      console.error("Error fetching movie suggestions", error);
      return []; 
    }
  }
}

export const aiApi = new Api(import.meta.env.VITE_Gemini_API_KEY);








  
  
# AI-Powered Chatbot

## Introduction
This project is an **AI-powered chatbot** designed to provide intelligent and automated responses using **OpenAI's API**. It is built with **Quart** for the backend and **HTML, CSS, and JavaScript** for a dynamic and user-friendly interface. The chatbot offers real-time AI responses, leveraging OpenAI’s API for human-like interactions. The asynchronous backend, powered by Quart, ensures efficient request handling. The interactive UI, developed with HTML, CSS, and JavaScript, includes a typing indicator to enhance user experience. Users can manage chat history by saving or clearing conversations, and the project incorporates security measures such as input validation and error handling to ensure smooth operations. This chatbot is scalable and adaptable for use in customer support, virtual assistance, and interactive learning.

## Features
- **Real-time AI Responses**: Uses OpenAI’s API for human-like conversations.
- **Asynchronous Backend**: Built with Quart to ensure efficient request handling.
- **Interactive UI**: Developed using HTML, CSS, and JavaScript.
- **Typing Indicator**: Enhances user experience with real-time feedback.
- **Chat History Management**: Users can save or clear conversations.
- **Security Measures**: Includes input validation and error handling for smooth operation.
- **Scalability**: Can be used in various industries like customer support, education, and virtual assistance.

## Technology Stack
### Frontend:
- HTML,
- CSS,
- JavaScript (For UI/UX development)

### Backend:
- **Quart** (Asynchronous Python web framework)
- **OpenAI API** (Generates AI-driven responses)
- **Python** (Primary programming language)

### Development & Deployment:
- **VS Code** (Recommended for coding & debugging)
- **Postman** (For API testing)
- **Python Virtual Environment (venv)** (Dependency management)

## Installation & Setup
### Prerequisites
Ensure you have the following installed on your system:
- **Python 3.x**
- **Quart Framework**
- **OpenAI API Key**

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   venv\Scripts\activate  # On Windows
   ```
3. Install dependencies:
   ```bash
   pip install quart openai python-dotenv
   ```
4. Configure API Key:
   - Create a `.env` file in the project root.
   - Add your OpenAI API key:
     ```plaintext
     OPENAI_API_KEY=your-api-key-here
     ```
5. Start the chatbot server:
   ```bash
   python app.py
   ```
6. Access the chatbot:
   - Open your browser and go to: `http://127.0.0.1:5000/chatbot`

## File Structure
```
├── chatbot.html          # Chatbot UI
├── style.css             # Styling for chatbot
├── chatbot.js            # JavaScript for frontend interactions
├── app.py                # Quart backend API
├── .env                  # OpenAI API key (not included in repo)
├── venv/                 # Virtual environment (optional)
│── .vscode/launch.json   # VSCode configuration
└── README.md             # Project documentation
```

## Running the Chatbot
- Open `chatbot.html` in your browser.
- Type a message and press **Send**.
- The chatbot will respond in real time!

https://github.com/user-attachments/assets/3c6191de-c521-4b27-869b-580bb76ca1b6
 
---

## API Endpoints

### POST `/chatbot`
**Request Body (JSON)**:
```json
{
    "prompt": "Hello, how are you?"
}
```

**Response (JSON):**
```json
{
    "bot_response": "Hello! How can I assist you today?"
}
```

---

## Testing with Postman
1. Open **Postman**.
2. Set **Method** to `POST`.
3. Enter the URL: `http://localhost:5000/chatbot`.
4. Go to **Body** → **raw** → Select **JSON**.
5. Enter the request:
   ```json
   {
       "prompt": "Tell me a joke."
   }
   ```
6. Click **Send**.
7. The bot will return a response.

---
##  Implementation Details
###  Backend (Quart)
- Uses **async/await** for better performance.
- Handles **POST requests** from the frontend.
- Communicates with **OpenAI's API**.

### Frontend (HTML, CSS, JavaScript)
- Displays **real-time chat messages**.
- Sends user inputs to the backend.
- Uses **JavaScript fetch API** for API requests.

### JavaScript Implementation
- Handles **UI interactions**.
- Fetches **bot responses**.
- Manages **typing indicator**.

---

## Error Handling
- **Handles API timeouts**.
- **Catches empty or invalid responses**.
- **Prevents UI crashes**.

## Future Enhancements
- Multi-language support
- Voice input capabilities
- Sentiment analysis
- Enhanced conversational memory

## Conclusion
This AI chatbot demonstrates how to integrate **Quart, OpenAI API, and JavaScript** to create an **interactive AI assistant**. The project can be further expanded with **database storage, voice interaction, and user authentication**.

## References
- [Quart Documentation](https://quart.palletsprojects.com/en/latest/)
- [ OpenAI API ](https://platform.openai.com/docs/)
- [W3Schools HTML & CSS & js](https://www.w3schools.com/)
- [JSON Handling in Python ](https://docs.python.org/3/library/json.html)
  
---

💡 Feel free to contribute and improve this chatbot!

---

## Contributing
If you want to contribute:
1. Fork the repo.
2. Create a new branch (`feature-xyz`).
3. Commit changes and push.
4. Create a Pull Request.

🔗 **GitHub Repo:** [Link](https://github.com/pcvaishnavi/ARTIFICIAL_INTELLIGENCE_POWERED_CHATBOT)

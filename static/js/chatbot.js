// ============================
// Dropdown Menu Functions
// ============================

// Function to toggle the dropdown menu
function toggleMenu() {
    const menu = document.getElementById("menuOptions");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Function to hide menu if clicked outside
document.addEventListener("click", function (event) {
    const menu = document.getElementById("menuOptions");
    const menuIcon = document.querySelector(".menu-icon");
    if (!menu.contains(event.target) && event.target !== menuIcon) {
        menu.style.display = "none";
    }
});

// ============================
// Chat Message Handling
// ============================

// Function to display messages in the chatbox
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message', sender);
    document.getElementById('messagesContainer').appendChild(messageElement);

// Scroll the messages container to the bottom
    const messagesContainer = document.getElementById('messagesContainer');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Function to handle user input and bot response
async function handleUserMessage() {
    const userInput = document.getElementById('userInput');
    const userMessage = userInput.value.trim();

    if (userMessage) {
        displayMessage('You: ' + userMessage, 'user');
        await fetchBotResponse(userMessage);
        userInput.value = '';
    }
}

// Event listener for sending messages
document.getElementById('sendButton').addEventListener('click', handleUserMessage);

// Event listener for Enter key to send message
document.getElementById('userInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserMessage();
});

// ============================
// Bot Response Handling
// ============================

// Function to fetch bot response and show typing indicator
async function fetchBotResponse(message) {
    const typingIndicator = document.getElementById('typingIndicator');
    typingIndicator.style.display = 'block'; 
    
    // Create and append the bot image to the typing indicator
    const botImage = document.createElement('img');
    botImage.src = '/static/images/chatboticon1.png'; 
    botImage.alt = 'Bot';
    botImage.style.width = '20px'; 
    botImage.style.height = '20px'; 
    botImage.style.borderRadius = '50%'; 
    botImage.style.marginRight = '10px'; 
    botImage.style.verticalAlign = 'middle'; 
    
    typingIndicator.innerHTML = ''; 
    typingIndicator.appendChild(botImage); 
    
    // Create a bold element for the text
    const typingText = document.createElement('strong');
    typingText.textContent = "Bot is typing..."; 
    typingIndicator.appendChild(typingText); 

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); 
        
        // Fetch bot response from the server
        const response = await fetch('http://localhost:5000/chatbot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: message }),
            signal: controller.signal
        });
        clearTimeout(timeoutId); 

        if (response.ok) {
            const data = await response.json();
            console.log('Bot Response:', data);  

            if (data && data.bot_response && data.bot_response.trim() !== '') {
                displayMessage('Bot: ' + data.bot_response, 'bot');
            } else {
                displayMessage('Bot: Sorry, I couldn\'t process your request properly.', 'bot');
            }
        } else {
            displayMessage('Bot: Sorry, I couldn\'t process your request.', 'bot');
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            displayMessage('Bot: Request timed out. Please try again.', 'bot');
        } else {
            console.error('Error fetching bot response:', error);
            displayMessage('Bot: Oops! Something went wrong.', 'bot');
        }
    } finally {
        typingIndicator.style.display = 'none';  
    }
}

// ============================
// Chat Uses
// ============================

// Function to clear chat history
function clearChat() {
    document.getElementById('messagesContainer').innerHTML = ''; 
}

// Function to save chat history to a file
function saveChat() {
    const chatMessages = document.getElementById('messagesContainer').innerText;
    const blob = new Blob([chatMessages], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'chat_history.txt';
    link.click();
}

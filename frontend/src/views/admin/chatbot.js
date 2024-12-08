import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // Typing indicator

  const API_KEY = "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";

  const handleOpenChat = () => setIsOpen(true);
  const handleCloseChat = () => setIsOpen(false);

  const sendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput(""); // Clear input
    setIsTyping(true); // Show typing indicator

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: newMessages.map((msg) => ({ role: msg.role, content: msg.content })),
        }),
      });

      const data = await response.json();
      const botResponse = data.choices[0].message.content;

      setMessages([...newMessages, { role: "assistant", content: botResponse }]);
    } catch (error) {
      setMessages([...newMessages, { role: "assistant", content: "Oops! Something went wrong." }]);
    } finally {
      setIsTyping(false); // Hide typing indicator
    }
  };

  return (
    <>
      <button className="chatbot-button" onClick={handleOpenChat}>
        Chat
      </button>
      {isOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-header">
            <h3>Chatbot</h3>
            <button onClick={handleCloseChat}>Close</button>
          </div>
          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                {msg.content}
              </div>
            ))}
            {isTyping && <div className="message assistant">Typing...</div>}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

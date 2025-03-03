import { useState, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "How can I help?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // App load hote hi chatbot open karna
    setTimeout(() => setIsOpen(true), 2000);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Dummy bot response (yahan AI API bhi laga sakte ho)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm here to assist you!", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 left-6">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
        >
          💬
        </button>
      ) : (
        <div className="w-80 bg-white shadow-lg rounded-lg border p-3">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-bold">AI Bot</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500">
              ❌
            </button>
          </div>
          <div className="h-52 overflow-y-auto p-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded ${
                  msg.sender === "bot"
                    ? "bg-blue-200 text-left"
                    : "bg-gray-200 text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border p-2 w-full rounded-l"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white p-2 rounded-r"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

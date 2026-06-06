import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const phoneNumber = "254708666576"; // IMPORTANT: no + or spaces

  const messages = [
    "👋 Need Football Info?",
    "⚽ Talk to FC Metropol HP",
    "📩 Register for Events",
    "🔥 Join Elite Training",
  ];

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    const interval = setInterval(() => {
      setIsTyping(true);

      typingTimeout = setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsTyping(false);
      }, 900);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(typingTimeout);
    };
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=Hello%20FC%20Metropol%20HP%2C%20I%20would%20like%20more%20information.`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed right-6 bottom-24 z-50 flex flex-col items-end group">

      {/* MESSAGE BUBBLE */}
      <div className="mb-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
        {isTyping ? (
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-300"></span>
          </div>
        ) : (
          <p className="text-xs text-white font-medium">
            {messages[currentMessage]}
          </p>
        )}
      </div>

      {/* BUTTON */}
      <button
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-white" size={26} />
      </button>
    </div>
  );
};

export default WhatsAppButton;

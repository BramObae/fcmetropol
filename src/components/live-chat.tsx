import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const phoneNumber = "254708666576"; // no + or spaces for WhatsApp link

  const messages = [
    "👋 Need football updates?",
    "💬 Chat with FC Metropol HP",
    "⚽ Training & trials info here",
    "📞 Tap to connect instantly",
  ];

  useEffect(() => {
    let typingTimeout: any;

    const interval = setInterval(() => {
      setIsTyping(true);

      typingTimeout = setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsTyping(false);
      }, 800);
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(typingTimeout);
    };
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end">

      {/* Message Bubble */}
      <div className="mb-3 px-4 py-2 rounded-2xl bg-white/90 shadow-lg border border-black/5 backdrop-blur-md">
        {isTyping ? (
          <div className="flex gap-1 items-center">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
          </div>
        ) : (
          <p className="text-sm text-gray-700 font-medium whitespace-nowrap">
            {messages[currentMessage]}
          </p>
        )}
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="group relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-white w-6 h-6" />

        {/* Pulse effect */}
        <span className="absolute w-full h-full rounded-full bg-green-400 opacity-40 animate-ping" />
      </button>
    </div>
  );
};

export default WhatsAppButton;

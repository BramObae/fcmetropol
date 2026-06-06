import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const LiveChat = () => {
  const phoneNumber = "254708666576"; // ✅ Kenya format (no +)

  const messages = [
    "👋 Need help with football opportunities?",
    "⚽ Chat with FC Metropol HP",
    "💬 Tap to WhatsApp us now",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2"
    >
      {/* MESSAGE BUBBLE */}
      <div className="bg-black/80 text-white text-xs px-4 py-2 rounded-full backdrop-blur shadow-lg">
        {messages[index]}
      </div>

      {/* BUTTON */}
      <div className="h-14 w-14 bg-green-500 hover:bg-green-600 rounded-full grid place-items-center shadow-xl transition">
        <MessageCircle className="text-white" size={26} />
      </div>
    </a>
  );
};

export default LiveChat;

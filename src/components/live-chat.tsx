import { useEffect, useState } from "react";
import { MessageCircle, Sparkles, Send } from "lucide-react";

const LiveChat = () => {
  const phoneNumber = "254708666576";

  const message =
    "Hello FC Metropol HP 👋\n\nI would like to join your football program and get details about trials and the August 10–15 event at Jaffery’s Sports Club.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const floatingMessages = [
    "⚽ Elite Football Pathway Open",
    "🔥 August Trials Registration Live",
    "👟 Train. Develop. Get Scouted.",
    "📍 Jaffery’s Sports Club Hub",
  ];

  const [index, setIndex] = useState(0);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % floatingMessages.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        fixed bottom-5 right-5 sm:bottom-6 sm:right-6
        z-[9999]
        flex flex-col items-end gap-3
      "
    >
      {/* FLOATING INFO BADGE (MORE PREMIUM) */}
      <div
        className="
          relative overflow-hidden
          bg-gradient-to-r from-black/90 via-black/70 to-black/90
          text-white
          text-[11px] sm:text-xs
          px-4 py-2 rounded-full
          backdrop-blur-md shadow-xl
          border border-white/10
          max-w-[260px] sm:max-w-[300px]
          text-right
        "
      >
        {/* Spark effect dot */}
        <span className="absolute left-2 top-1/2 -translate-y-1/2">
          <Sparkles size={12} className="text-yellow-400 animate-pulse" />
        </span>

        {floatingMessages[index]}
      </div>

      {/* MAIN BUTTON WRAPPER (MORE DYNAMIC) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with FC Metropol HP on WhatsApp"
        className="
          group relative
          h-16 w-16 sm:h-18 sm:w-18
          rounded-full
          grid place-items-center
          shadow-2xl
          transition-all duration-300
          hover:scale-110
        "
      >
        {/* OUTER RING ANIMATION */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping" />

        {/* SECOND PULSE LAYER */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-pulse" />

        {/* MAIN BUTTON BODY */}
        <div
          className="
            relative
            h-14 w-14 sm:h-16 sm:w-16
            bg-gradient-to-br from-green-400 via-green-500 to-green-600
            hover:from-green-500 hover:to-green-700
            rounded-full
            grid place-items-center
            shadow-xl
            transition-all duration-300
          "
        >
          {/* ICON STACK (NOT BORING SINGLE ICON) */}
          <div className="relative flex items-center justify-center">
            <MessageCircle
              className="text-white group-hover:scale-110 transition"
              size={26}
            />

            {/* SMALL FLOATING SEND ICON */}
            <Send
              size={12}
              className="
                text-white/90
                absolute -top-2 -right-2
                opacity-0 group-hover:opacity-100
                transition
              "
            />
          </div>
        </div>

        {/* SMALL BRAND DOT */}
        <span
          className="
            absolute -bottom-1 -right-1
            h-3 w-3
            bg-yellow-400
            rounded-full
            border-2 border-black
            animate-bounce
          "
        />
      </a>
    </div>
  );
};

export default LiveChat;

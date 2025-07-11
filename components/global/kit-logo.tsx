import React from "react";

const HubStackLogo = ({
    theme = "light",
    className = "",
    width = 400,
    height = 120,
}) => {
  const isDark = theme === "dark";

  // Colors based on theme
  const colors = {
    background: isDark ? "#111827" : "transparent",
    gradientStart: isDark ? "#60a5fa" : "#2563eb",
    gradientEnd: isDark ? "#818cf8" : "#4f46e5",
    textPrimary: isDark ? "#ffffff" : "#1e293b",
    textSecondary: isDark ? "#60a5fa" : "#3b82f6",
    tagline: isDark ? "#94a3b8" : "#64748b",
  };

  return (
    <div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" className="w-full h-auto">
            <defs>
                <linearGradient id="storix-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#2563EB" />
                    <stop offset="100%" stop-color="#3B82F6" />
                </linearGradient>
            </defs>

  
            <g transform="translate(57, 49) scale(0.6)">
                <path d="M10 0 H40 A10 10 0 0 1 50 10 V20 A10 10 0 0 1 40 30 H20 A10 10 0 0 0 10 40 V50 A10 10 0 0 0 20 60 H50" 
                    fill="none" 
                    stroke="url(#storix-gradient)" 
                    stroke-width="15" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </g>

 
            <text x="100" y="70" font-family="Segoe UI, sans-serif" font-weight="700" font-size="30" fill="#1F2937">
                Stor
                <tspan fill="url(#storix-gradient)">ix</tspan>
            </text>

  
            <text x="103" y="85" font-family="Segoe UI, sans-serif" font-size="10" fill="#6B7280">
                Smarter Inventory, Seamless Control
            </text>
        </svg>

    </div>
  );
};

export default HubStackLogo;

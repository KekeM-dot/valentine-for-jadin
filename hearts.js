const hearts = ["💖","💕","🎀","💗","💘", " 💝", " 💞", "❣️ ", " 😍", " 💐", "💐" , " 🪻" , " 🌺" , "🥰 "  ];

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);


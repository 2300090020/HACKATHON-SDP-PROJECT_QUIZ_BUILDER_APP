import React from "react";
import "./adminhome.css";

export default function AdminHome() {
  return (
    <div className="page">

     

      {/* Center content box */}
      <div className="home-box">
        <h1>👑 Welcome Admin!</h1>
        <p>Step into your fun dashboard 🚀🎮🏆</p>
        <p>Manage quizzes, players, and all the excitement in one place 🎲🕹️✨</p>
        
        {/* Playful content */}
        <div className="playful-text">
          <p>💡 Tip: Keep your quizzes spicy and players on their toes! 🔥</p>
          <p>📊 Stats at a glance – Who’s winning? Who’s leveling up? 🏆</p>
          <p>🎨 Customize themes, add new quizzes, or throw in surprise challenges! 🎁</p>
          <p>🌟 Pro Tip: Reward your top players with badges and emojis! 🏅</p>
          <p>🕹️ Game on! Your kingdom of fun awaits. 🚀🎮</p>
        </div>

      </div>
    </div>
  );
}

import React from "react";

function Card({ username = "SK", skill = "coder" }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="w-48 h-48 shadow-xl rounded-md"
            alt="Little boy holding flower"
            src="https://assets.sportsboom.com/Virat_Kohli_d500d2f1cb.jpg"
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-medium">{username}</span>
          <span className="font-medium text-sky-500">{skill}</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;

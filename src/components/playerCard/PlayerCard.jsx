import React from 'react';

const PlayerCard = ({ player, onDelete, onUpdate }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">
        {player.firstName} {player.lastName}
      </h3>
      <p>Yosh: {player.age}</p>
      <p>Pozitsiya: {player.position}</p>
      <p>Jamoa: {player.team}</p>
      <p>Raqami: {player.number}</p>
      <div className="flex space-x-2 mt-2">
        <button
          onClick={() => onUpdate(player)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded"
        >
          Yangilash
        </button>
        <button
          onClick={() => onDelete(player.id)}
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
        >
          O'chirish
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
import React from "react";

const PlayerCard = ({ player, onDelete, onUpdate }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm">
      <h1 className="text-xl font-semibold text-gray-900 mb-2">
        {player.firstName} {player.lastName}
      </h1>
      <p className="text-sm text-gray-600 mb-1">Yosh: {player.age}</p>
      <p className="text-sm text-gray-600 mb-1">Pozitsiya: {player.position}</p>
      <p className="text-sm text-gray-600 mb-1">Jamoa: {player.team}</p>
      <p className="text-sm text-gray-600 mb-4">Raqam: {player.number}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onDelete(player.id)}
          className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors duration-200"
        >
          Delete
        </button>
        <button
          onClick={() => onUpdate(player)}
          className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors duration-200"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
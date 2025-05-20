import React, { Component } from 'react';
import PlayerCard from '../playerCard/PlayerCard';

export default class FootballPlayerForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      position: "",
      team: "",
      number: "",
      players: JSON.parse(localStorage.getItem("players")) || [],
      updatedPlayer: null
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, age, position, team, number, players, updatedPlayer } = this.state;

    if (updatedPlayer) {

      const updatedPlayers = players.map(player =>
        player.id === updatedPlayer.id
          ? { ...player, firstName, lastName, age, position, team, number }
          : player
      );

      this.setState({
        players: updatedPlayers,
        firstName: "",
        lastName: "",
        age: "",
        position: "",
        team: "",
        number: "",
        updatedPlayer: null
      });
    } else {

      const newPlayer = {
        id: new Date().getTime(),
        firstName,
        lastName,
        age,
        position,
        team,
        number
      };

      this.setState({
        players: [...players, newPlayer],
        firstName: "",
        lastName: "",
        age: "",
        position: "",
        team: "",
        number: ""
      });
    }
  };

  handleDelete = (id) => {
    const updated = this.state.players.filter(player => player.id !== id);
    this.setState({ players: updated });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.players !== this.state.players) {
      localStorage.setItem("players", JSON.stringify(this.state.players));
    }

    if (
      prevState.updatedPlayer !== this.state.updatedPlayer &&
      this.state.updatedPlayer
    ) {
      const { firstName, lastName, age, position, team, number } = this.state.updatedPlayer;
      this.setState({ firstName, lastName, age, position, team, number });
    }
  }

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <form onSubmit={this.handleSubmit} className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            {this.state.updatedPlayer ? "Futbolchini Yangilash" : "Futbolchi Qo‘shish"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
              type="text"
              placeholder="Ism"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />
            <input
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
              type="text"
              placeholder="Familiya"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />
            <input
              value={this.state.age}
              onChange={(e) => this.setState({ age: e.target.value })}
              type="number"
              placeholder="Yosh"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />
            <input
              value={this.state.position}
              onChange={(e) => this.setState({ position: e.target.value })}
              type="text"
              placeholder="Pozitsiya"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />
            <input
              value={this.state.team}
              onChange={(e) => this.setState({ team: e.target.value })}
              type="text"
              placeholder="Jamoa"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />
            <input
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
              type="number"
              placeholder="Raqami"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg w-full"
          >
            {this.state.updatedPlayer ? "Yangilash" : "Qo'shish"}
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {this.state.players.map(player => (
              <PlayerCard
                key={player.id}
                player={player}
                onDelete={this.handleDelete}
                onUpdate={(p) => this.setState({ updatedPlayer: p })}
              />
            ))}
          </div>
        </form>
      </div>
    );
  }
}

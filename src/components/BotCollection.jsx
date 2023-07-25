import React from "react";

const BotCollection = ({ bots }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {bots.map((bot) => (
          <div key={bot.id} className="col-sm-6 col-md-4 col-lg-3 mb-2">
            <div className="card">
              <img
                className="card-img-top"
                src={bot.avatar_url}
                alt={bot.name}
              />
              <div className="card-body">
                <h5 className="card-title">Name: {bot.name}</h5>
                <p className="card-text">Bot Class: {bot.bot_class}</p>
                <p className="card-text">{bot.catchphrase}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Health: {bot.health}</li>
                <li className="list-group-item">Damage: {bot.damage}</li>
                <li className="list-group-item">Armor: {bot.armor}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;

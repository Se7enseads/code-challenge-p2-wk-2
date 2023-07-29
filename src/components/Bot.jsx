const Bot = ({ bot, click }) => {
  const { avatar_url, name, bot_class, catchphrase, health, damage, armor } =
    bot;

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-2">
      <div className="card" onClick={click}>
        <img
          className="card-img-top bg-body-secondary"
          src={avatar_url}
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">Bot Class: {bot_class}</p>
          <p className="card-text">{catchphrase}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Health: {health}</li>
          <li className="list-group-item">Damage: {damage}</li>
          <li className="list-group-item">Armor: {armor}</li>
        </ul>
      </div>
    </div>
  );
};

export default Bot;

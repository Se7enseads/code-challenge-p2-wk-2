const Bot = ({ bot, click, discharge, location }) => {
  const { avatar_url, name, bot_class, catchphrase, health, damage, armor } =
    bot;

  const handleClick = () => {
    click(bot);
  };

  let sizes;

  location === "collection"
    ? (sizes = { sm: 6, md: 4, lg: 3, xxl: 2 })
    : (sizes = { sm: 4, md: 2, lg: 2, xxl: 2 });

  return (
    <div
      className={`col-sm-${sizes.sm} col-md-${sizes.md} col-lg-${sizes.lg} col-xxl-${sizes.xxl} mb-2`}
    >
      <div className="card">
        <img
          className="card-img-top bg-body-secondary"
          src={avatar_url}
          alt={name}
          onClick={handleClick}
        />
        <div className="card-body" onClick={handleClick}>
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">Bot Class: {bot_class}</p>
          <p className="card-text">{catchphrase}</p>
        </div>
        <ul className="list-group list-group-flush" onClick={handleClick}>
          <li className="list-group-item">Health: {health}</li>
          <li className="list-group-item">Damage: {damage}</li>
          <li className="list-group-item">Armor: {armor}</li>
        </ul>
        {location === "army" ? (
          <div className="card-footer">
            <div className="row mx-auto">
              <button
                className="btn btn-outline-danger"
                onClick={() => discharge(bot.id)}
              >
                X
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Bot;

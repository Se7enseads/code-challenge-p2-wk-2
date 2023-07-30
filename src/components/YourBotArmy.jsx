import Bot from "./Bot";

const YourBotArmy = ({ army, releaseBot }) => {
  const hasArmy = army.length > 0;

  const armyHeader = (
    <div className="text-center">
      <h1>{hasArmy ? `YOUR ARMY: ${army.length} BOTS` : "YOUR ARMY"}</h1>
    </div>
  );

  const noArmyMessage = (
    <div className="text-center">
      <h1 className="opacity-25 text-light">NO ARMY</h1>
    </div>
  );

  return (
    <div className="container-fluid mb-3">
      <div
        className="row py-3 px-2"
        style={{
          background: "#77AE1E",
          borderBottom: "30px solid #55A627",
          borderRadius: "0 0 10px 10px",
        }}
      >
        {armyHeader}
        {hasArmy
          ? army.map((bot) => (
              <Bot bot={bot} key={bot.id} click={releaseBot} location="army" />
            ))
          : noArmyMessage}
      </div>
    </div>
  );
};

export default YourBotArmy;

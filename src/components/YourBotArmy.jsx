import Bot from "./Bot"; // Importing the Bot component.

// YourBotArmy component that displays the army of selected bots.
const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  const hasArmy = army.length > 0;

  // JSX for army header.
  const armyHeader = (
    <div className="text-center">
      <h1>
        {hasArmy
          ? `YOUR ARMY: ${army.length} ${army.length === 1 ? "BOT" : "BOTS"}`
          : "YOUR ARMY"}
      </h1>
    </div>
  );

  // JSX for the message when there is no army.
  const noArmyMessage = (
    <div className="text-center">
      <h1 className="opacity-25 text-light">NO ARMY</h1>
    </div>
  );

  // Rendering the YourBotArmy component.
  return (
    <div className="container-fluid">
      <div
        className="row py-3 px-2"
        style={{
          background: "#77AE1E",
          borderBottom: "30px solid #55A627",
        }}
      >
        {armyHeader}
        {/* Render each bot in the army. */}
        {hasArmy
          ? army.map((bot) => (
              <Bot
                bot={bot}
                key={bot.id}
                click={releaseBot}
                discharge={dischargeBot}
                location="army"
              />
            ))
          : noArmyMessage}
      </div>
    </div>
  );
};

export default YourBotArmy; // Exports YourBotArmy component to the App.

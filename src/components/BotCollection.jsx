import Bot from "./Bot"; // Importing the Bot component.

// BotCollection component that displays a collection of bots.
const BotCollection = ({ bots, addBot }) => {
  return (
    <div className="container-fluid bg-info-subtle">
      <div className="text-center">
        <h1>ALL YOUR BOT NFTs</h1>
      </div>
      <div className="row">
        {/* Map through the bots array and render a Bot component for each bot. */}
        {bots.map((bot) => (
          <Bot bot={bot} key={bot.id} click={addBot} location="collection" />
        ))}
      </div>
    </div>
  );
};
export default BotCollection; // Exports the BotCollection to the App Component.

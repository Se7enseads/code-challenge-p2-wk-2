import Bot from "./Bot";

const BotCollection = ({ bots, addBot }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {bots.map((bot) => (
          <Bot bot={bot} key={bot.id} click={addBot} location="collection" />
        ))}
      </div>
    </div>
  );
};
export default BotCollection;

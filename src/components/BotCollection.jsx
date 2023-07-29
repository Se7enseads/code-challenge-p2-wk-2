import Bot from "./Bot";

const BotCollection = ({ bots, click }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {bots.map((bot) => (
          <Bot bot={bot} key={bot.id} click={click} location="collection" />
        ))}
      </div>
    </div>
  );
};
export default BotCollection;

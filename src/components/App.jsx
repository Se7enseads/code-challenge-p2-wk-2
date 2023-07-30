import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API_URL = "http://localhost:3000/bots/";

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => {
        if (!r.ok) {
          console.error("?_? ... (✖╭╮✖)");
        }
        return r.json();
      })
      .then((data) => setBots(data))
      .catch((error) => {
        console.error("Error fetching bots:", error);
      });
  }, []);

  const handleReleaseBot = () => {
    const updatedArmy = army.filter((bot) => bot.id !== bot.id);
    setArmy(updatedArmy);
  };

  const handleAddBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy((prevArmy) => [...prevArmy, bot]);
    }
  };

  const removeFromStateById = (array, id) => {
    return array.filter((item) => item.id !== id);
  };

  const handleDischargeBot = (botId) => {
    fetch(API_URL + botId, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete bot.");
        }
        setArmy((prevArmy) => removeFromStateById(prevArmy, botId));
        setBots((prevBots) => removeFromStateById(prevBots, botId));
      })
      .catch((error) => {
        console.error("Error deleting bot: ", error);
      });
  };

  return (
    <div>
      <YourBotArmy
        army={army}
        releaseBot={handleReleaseBot}
        dischargeBot={handleDischargeBot}
      />
      <BotCollection bots={bots} addBot={handleAddBot} />
    </div>
  );
};
export default App;

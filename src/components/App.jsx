import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API_URL = "http://localhost:3000/bots";

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
        console.error("Error fetching data:", error);
      });
  }, []);

  const releaseBot = () => {
    const updatedArmy = army.filter((bot) => bot.id !== bot.id);
    setArmy(updatedArmy);
  };

  const addBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy((prevArmy) => [...prevArmy, bot]);
    }
  };

  return (
    <div>
      <YourBotArmy army={army} releaseBot={releaseBot} />
      <BotCollection bots={bots} addBot={addBot} />
    </div>
  );
};
export default App;

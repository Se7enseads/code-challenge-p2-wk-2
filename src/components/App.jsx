import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API_URL = "https://api.npoint.io/d2caaa22d430486d2ff6/bots";

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

  function handleClick(bot) {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy((prevArmy) => [...prevArmy, bot]);
    }
  }

  return (
    <div>
      <YourBotArmy army={army} />
      <BotCollection bots={bots} click={handleClick} />
    </div>
  );
};
export default App;

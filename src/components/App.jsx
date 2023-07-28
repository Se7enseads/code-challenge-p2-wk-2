import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API_URL = "https://api.npoint.io/d2caaa22d430486d2ff6/bots";

const App = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots} />
    </div>
  );
};
export default App;

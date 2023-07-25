import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";

const API_URL = "http://localhost:3000/bots";

const App = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <BotCollection bots={bots} />
    </div>
  );
};
export default App;

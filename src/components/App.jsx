// Importing necessary modules.

import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API_URL = "http://localhost:3000/bots/"; // Sets the API url to a variable.

// App component that represents the rendered page.
const App = () => {
  // States to hold the list of all bots and the army of selected bots.
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetches data from the API when the page loads.
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          console.error("?_? ... (✖╭╮✖)");
        }
        return response.json();
      })
      .then((data) => setBots(data))
      .catch((error) => {
        console.error("Error fetching bots:", error);
      });
  }, []);

  // Function to handle releasing a bot from the army.
  const handleReleaseBot = (botId) => {
    const updatedArmy = army.filter((bot) => bot.id !== botId);
    setArmy(updatedArmy);
  };

  // Function to handle adding a bot to the army.
  const handleAddBot = (bot) => {
    // Checks if the bot is not already in the army.
    if (!army.some((b) => b.id === bot.id)) {
      setArmy((prevArmy) => [...prevArmy, bot]);
    }
  };

  // Function to remove an item from an array by its id.
  const removeFromStateById = (array, id) => {
    return array.filter((item) => item.id !== id);
  };

  // Function to handle discharging a bot (deleting it) from the army.
  const handleDischargeBot = (botId) => {
    fetch(API_URL + botId, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete bot.");
        }
        // Removes the bot from state from both the army and the bot collection.
        setArmy((prevArmy) => removeFromStateById(prevArmy, botId));
        setBots((prevBots) => removeFromStateById(prevBots, botId));
      })
      .catch((error) => {
        console.error("Error deleting bot: ", error);
      });
  };

  // Renders the components, army and bot collection on to the DOM.
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
export default App; // Export the App component to the main JSX.

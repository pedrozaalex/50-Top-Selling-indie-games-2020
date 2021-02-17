import { entries } from "./game-data.json";
import "./App.css";

function App() {
  function gameItem(game) {
    return (
      <li>
        {game.name}, approximately {game.reviews_total * 50} units sold.{" "}
        <a
          href={"https://store.steampowered.com/app/".concat(game.steam_appid)}
          target="blank"
        >
          Link.
        </a>
      </li>
    );
  }

  let counter = 0;
  const filteredGameData = entries.filter((entry) => {
    if (
      counter < 50 &&
      (entry.steam_release_date.startsWith("2020") ||
        entry.steam_release_date.startsWith("2021"))
    ) {
      counter++;
      return true;
    } else return false;
  });

  return (
    <div className="App">
      <header className="App-header">
        50 best-selling indie games released since january 2020
      </header>
      <p className="App-data">
        <ol>{filteredGameData.map((entry) => gameItem(entry))}</ol>
      </p>
    </div>
  );
}

export default App;

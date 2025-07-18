import { useState } from "react";

function App() {
  {
    /**Arrey boardGames  */
  }
  const boardGames = [
    {
      id: 1,
      title: "Monopoly",
      how_to_play:
        "Muoviti sul tabellone tirando i dadi, acquista proprietà, costruisci case e alberghi, e cerca di mandare in bancarotta gli avversari.",
    },
    {
      id: 2,
      title: "Risiko!",
      how_to_play:
        "Conquista territori muovendo le tue armate strategicamente. Vince chi completa l'obiettivo segreto o conquista il mondo.",
    },
    {
      id: 3,
      title: "Cluedo",
      how_to_play:
        "Scopri chi ha commesso l'omicidio, con quale arma e in quale stanza, raccogliendo indizi e facendo deduzioni logiche.",
    },
    {
      id: 4,
      title: "Catan",
      how_to_play:
        "Raccogli risorse, costruisci strade, villaggi e città. Scambia con gli altri giocatori e accumula 10 punti per vincere.",
    },
    {
      id: 5,
      title: "Dixit",
      how_to_play:
        "Descrivi una tua carta con una frase, mentre gli altri scelgono una carta simile. Indovina la carta giusta e guadagna punti.",
    },
  ];

  const [newGames, setNewGames] = useState(boardGames);
  const [game, setGame] = useState("");

  {
    /**bonus della rimozione */
  }
  const removeGame = (id) => {
    const updateGame = newGames.filter(({ id, title }) => {
      return id !== id;
    });
    setNewGames(updateGame);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setNewGames([
      {
        id: new Date(),
        title: game,
        how_to_play:
          "Muoviti sul tabellone tirando i dadi, acquista proprietà, costruisci case e alberghi, e cerca di mandare in bancarotta gli avversari.",
      },
      ...newGames,
    ]);

    setGame("");
  }

  return (
    <>
      <div className="container">
        <ul className="list-group">
          {newGames.map(({ id, title }) => {
            return (
              <li className="list-group-item" key={id}>
                {title}{" "}
                <button onClick={() => removeGame(id)}>spazzatura</button>
              </li>
            );
          })}
        </ul>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="a cosa giocherai? "
              value={game}
              onChange={(e) => setGame(e.target.value)}
            ></input>
            <button type="submit">Funzionerà? </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

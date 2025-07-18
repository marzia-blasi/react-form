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

  return (
    <>
      <div className="container">
        <ul className="list-group">
          {boardGames.map(({ id, title }) => {
            return (
              <li className="list-group-item" key={id}>
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;

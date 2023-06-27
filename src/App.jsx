import {useState} from "react";
import shuffle from './utilities/shuffle'
import Card from "./components/Card";

function App() {

  // useState calls functions it is passed, and
  // sets the state var to the function's return
  // value I guess
  const [cards, setCards] = useState(shuffle)

  return (
    <>
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card

          return (
            <Card
              key={id}
              image={image}
              selected={false}
              onClick={() => {}}
            />
          )
        })}
      </div>
    </>
  );
}

export default App;

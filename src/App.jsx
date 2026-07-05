import "./styles/app.css";
import { CharacterCard } from "./components/characterCard";
import { CharacterCardSpace } from "./components/characterCardSpace";
import { useState, useRef, useEffect } from "react";
import { getRandCharacter } from "./utils/characterData";
import { CollectionCard } from "./components/collectionCard";

function App() {
  const [data, setData] = useState(null);
  const [collection, addCollection] = useState([])
  
  const seccionDestinoRef = useRef(null);

  const hacerScroll = () => {
    
    if (seccionDestinoRef.current) {
      seccionDestinoRef.current.scrollIntoView({ 
        behavior: 'smooth', // Animación suave
        block: 'start'     // Alinea el elemento en el centro de la pantalla
      });
    }
  };

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      hacerScroll();
    }
  }, [data]);

  const addData = async () => {
    setLoading(true);
    try {
      const character = await getRandCharacter();
      setData(character);

      if (collection.find((e) => e.id === character.id)) {
        return;
      }

      addCollection([...collection, character]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header>
        <h1>The Simpsons</h1>
        <h1 className="second-tittle">Random Characters Collection</h1>
      </header>

      <main>
        <div className="card-wrapper" ref={seccionDestinoRef}>
          {data ? <CharacterCard data={data} /> : <CharacterCardSpace />}
        </div>

        <div
          className={`char-button-wrapper ${isLoading ? "disabled" : "null"}`}
        >
          <button
            disabled={isLoading}
            className={isLoading ? "loading" : null}
            onClick={() => {
              addData();
            }}
          >
            {!isLoading ? "Random Character" : "loading..."}
          </button>
        </div>
      </main>

      {collection[0] && (
        <section className="collection">
          <h2 className="collection-text">
            Your collection {`(${collection.length})`}
          </h2>
          <div className="collection-wrapper">
            {collection.map((e) => (
              <CollectionCard
                func={() => {
                  setData(e);
                }}
                key={e.id}
                data={e}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
export default App;

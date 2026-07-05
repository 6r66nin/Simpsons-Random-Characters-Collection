import "../styles/charcard.css";

import { urlImgPrefix } from "../utils/constans";

import { CharacterFact } from "./CharacterFact";

export function CharacterCard({ data }) {
  
  let stat = null;

  switch (data.status) {
    case "Alive":
      stat = "alive"
      break;
    case "Deceased":
      stat = "dead"
      break;
    default:
      break;
  }

  return (
    <div key={`${data.id}-${data.name}`} className="character-card-div animated-card">
      <div className="image-div">
        <img
          src={`${urlImgPrefix}500${data.portrait_path}`}
          alt="character img"
        />
      </div>

      <div className="info-div">
        <span>#{data.id}</span>
        <h1>{data.name}</h1>

        {stat && <div className={`status-div ${data.status}`}>{stat}</div>}
        
        <div className="facts-wrapper">
          <CharacterFact atrName="Age">{data.age}</CharacterFact>
          <CharacterFact atrName="Birthdate">{data.birthdate}</CharacterFact>
          <CharacterFact atrName="Gender">{data.gender}</CharacterFact>
          <CharacterFact cls={"descr"} atrName="Occupation">
            {data.occupation}
          </CharacterFact>
          <div className="phrase-div">
            <p>
              {
                // eslint-disable-next-line react-hooks/purity
                `" ${data.phrases[Math.floor(Math.random() * data.phrases.length)] || "-"} "`
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

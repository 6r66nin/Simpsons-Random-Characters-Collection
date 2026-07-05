import "../styles/collectioncard.css";
import { urlImgPrefix } from "../utils/constans";

export function CollectionCard({ data, func }) {
  return (
    <div className="colection-card-div" onClick={func}>
      <div
        className="img-div"
        style={{
          backgroundColor:
            data.status === "Deceased" ? "red" : "rgb(90, 184, 71)",
        }}
      >
        <img src={`${urlImgPrefix}200${data.portrait_path}`} />
      </div>
      <div className="shortinfo-div">
        <h2>{data.name}</h2>
        <span>{`#${data.id}`}</span>
      </div>
    </div>
  );
}

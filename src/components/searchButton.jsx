import { useState } from "react";


export function SearchButton({ isloading, onClickFunc }) {

    const [isClicked, setClicked] = useState(false);

    
    return (
    <button
      className={`${isClicked ? "clicked" : null}`}
      
      onClick={() => {
        setClicked(true);
      }}
    >
      {!isLoading ? "Random Character" : "loading..."}
    </button>
  );
}

export function CharacterFact({ children, atrName, cls}) {
  return (
    <div className={`fact-div ${cls}`}>
      <label>{atrName}</label>
      {children ?? "-"}
    </div>
  );
}

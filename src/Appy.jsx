function List(props) {
  return (
    <ul>
      {" "}
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}> {animal} </li> : null;
      })}{" "}
    </ul>
  );
}

function Appy() {
  const wakadinali = ["Lion", "Cow", "Snake", "Lizard", "dog", "Leopard"];
  return (
    <div>
      <h1> Animal: </h1> <List animals={wakadinali} />{" "}
    </div>
  );
}

export default Appy;

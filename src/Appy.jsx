function List(props) {
  if (!props.animals) {
    return <div> Loading... </div>;
  }

  if (props.animals.length === 0) {
    return <div> There are no animals in the list!! </div>;
  }

  return (
    <ul>
      {" "}
      {props.animals.map((animal) => {
        return <li key={animal}> {animal} </li>;
      })}{" "}
    </ul>
  );
}

function Appy() {
  const animals = ["Lion", "Cow", "Snake", "Lizard", "dog", "Leopard"];
  const songers = [];
  return (
    <div>
      <h1> Animal: </h1> <List animals={animals} />{" "}
    </div>
  );
}

export default Appy;

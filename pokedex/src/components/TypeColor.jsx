const TypeColor = ( type ) => {
  let color;
  switch (type) {
    case "Normal":
      color = "#A8A77A";
      break;
    case "Fighting":
      color = "#C22E28";
      break;
    case "Flying":
      color = "#A98FF3";
      break;
    case "Poison":
      color = "#A33EA1";
      break;
    case "Ground":
      color = "#E2BF65";
      break;
    case "Rock":
      color = "#B6A136";
      break;
    case "Bug":
      color = "#A6B91A";
      break;
    case "Ghost":
      color = "#735797";
      break;
    case "Steel":
      color = "#B7B7CE";
      break;
    case "Fire":
      color = "#EE8130";
      break;
    case "Water":
      color = "#6390F0";
      break;
    case "Grass":
      color = "#7AC74C";
      break;
    case "Electric":
      color = "#F7D02C";
      break;
    case "Psychic":
      color = "#F95587";
      break;
    case "Ice":
      color = "#96D9D6";
      break;
    case "Dragon":
      color = "#6F35FC";
      break;
    case "Dark":
      color = "#705746";
      break;
    case "Fairy":
      color = "#D685AD";
      break;

    default:
      break;
  }
  return color;
};
export default TypeColor;

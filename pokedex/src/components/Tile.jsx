import "./Tile.css";
import TypeColor from "./TypeColor";

const Tile = ({ id, name, type, onclick }) => {
  let path = "./images/" + id.toString().padStart(3, "0") + `.png`;

  return (
    <div className="tile_main" onClick={onclick} id={id}>
      
      <div className="tile_headear">
        <div className="tile_id">{'#' + id.toString().padStart(3, "0")}</div>
        <div className="tile_name">{name}</div>
      </div>

      <div className="tile_img">
        <img  src={require(`${path}`)} width="180" height="180" alt={"Pokemon"} />
      </div>

      <div className="tile_types_container">
        {type.map((e) => {
          return <div key={e} className="tile_type" style={{ background: TypeColor(e)}}> {e.toUpperCase()} </div>;
        })}
      </div>
    </div>
  );
};

export default Tile;

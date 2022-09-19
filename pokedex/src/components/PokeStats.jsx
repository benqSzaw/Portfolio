import pokedexJSON from "../pokedex.json";
import TypeColor from "./TypeColor";
import "./PokeStats.css";
import { useState, useEffect } from "react";

const PokeStats = ({ id, onClickBackground }) => {
  const [display, setDisplay] = useState(null);
  let path = "./images/" + (id + "").padStart(3, "0") + `.png`;

  useEffect(() => {
    setDisplay(
      pokedexJSON.filter((x) => {
        return x.id == id;
      })
    );
  }, []);
  if (display == null) return;

  const backgroundHandler = () => {
    onClickBackground();
  };

  return (
    <div>
      <div
        className="background_stats"
        style={{
          background: `linear-gradient(180deg, ${TypeColor(
            display[0].type[0]
          )}, ${
            display[0].type[1]
              ? TypeColor(display[0].type[1])
              : TypeColor(display[0].type[0])
          })`,
        }}
        onClick={backgroundHandler}
      >
        <div className="stats_main">
          <div className="stats_headear">
            <div className="stats_id">
              {id < 10 ? "#00" + id : id < 100 ? "#0" + id : "#" + id}
            </div>
            <div className="stats_name">{display[0].name.english}</div>{" "}
          </div>

          <div className="stats_name_2">jpn. {display[0].name.japanese}</div>
          <div className="stats_name_2">chi. {display[0].name.chinese}</div>
          <div className="stats_name_2">fra. {display[0].name.french}</div>

          <div
            className="stats_type_div"
            style={{
              justifyContent: display[0].type[1] ? "space-between" : "center",
            }}
          >
            {display[0].type.map((e) => {
              return (
                <div
                  className="stats_type"
                  style={{ backgroundColor: TypeColor(e) }}
                  key={e}
                >
                  {" "}
                  {e}{" "}
                </div>
              );
            })}
          </div>

          <div className="stats_base">
            <div className="stats_base_item"> HP: {display[0].base.HP} </div>

            <div className="stats_base_item">
              Attack: {display[0].base.Attack}
            </div>

            <div className="stats_base_item">
              Defense: {display[0].base.Defense}
            </div>

            <div className="stats_base_item">
              Speed: {display[0].base.Speed}
            </div>
          </div>

          <div>
            <img className="stats_img"
              src={require(`${path}`)}
              alt={"Pokemon"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeStats;

import { useState, useRef, useEffect } from "react";

import pokedexJSON from "../pokedex.json";
import typesJSON from "../types.json";

import Tile from "./Tile";
import Button from "./Button";

import "./View.css";
import PokeStats from "./PokeStats";

const View = () => {
  const searchRef = useRef();
  const [display, setDisplay] = useState(pokedexJSON);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sort, setSort] = useState("id/asc");
  const [pokePopUp, setPokePopUp] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.body.style.overflow = pokePopUp ? "hidden" : "visible";
  }, [pokePopUp]);

  const searchHandler = () => {
    if (
      searchRef.current.value >= 0 &&
      searchRef.current.value <= pokedexJSON.length
    ) {
      setDisplay(
        pokedexJSON.filter((item) => {
          return (item.id + "").includes(searchRef.current.value);
        })
      );
    } else {
      setDisplay(
        pokedexJSON.filter((item) => {
          return item.name.english.startsWith(
            searchRef.current.value.charAt(0).toUpperCase() +
              searchRef.current.value.slice(1)
          );
        })
      );
    }
  };

  const typeHandler = (type, active) => {
    if (active) {
      setSelectedTypes([...selectedTypes, type.toUpperCase()]);
    } else if (!active) {
      let filteredArray = selectedTypes.filter((e) => {
        return e !== type.toUpperCase();
      });
      setSelectedTypes(filteredArray);
    }
  };

  const sortHandler = (e) => {
    if (e.currentTarget.id === "0") {
      if (sort === "id/asc") {
        display.sort((a, b) => (a.id > b.id ? -1 : b.id > a.id ? 1 : 0));
        setSort("id/desc");
      } else {
        display.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
        setSort("id/asc");
      }
    } else if (e.currentTarget.id === "1") {
      if (sort === "name/desc" || sort !== "name/asc") {
        display.sort((a, b) =>
          a.name.english > b.name.english
            ? 1
            : b.name.english > a.name.english
            ? -1
            : 0
        );
        setSort("name/asc");
      } else {
        display.sort((a, b) =>
          a.name.english > b.name.english
            ? -1
            : b.name.english > a.name.english
            ? 1
            : 0
        );
        setSort("name/desc");
      }
    }
  };

  const tileHandler = (e) => {
    setPokePopUp(e.currentTarget.id);
  };

  const backgroundHandlerView = () => {
    setPokePopUp(false);
  };

  let result = display;
  if (selectedTypes.length > 0) {
    result = result.filter((pokemon) => {
      let haveType = false;
      pokemon.type.forEach((type) => {
        if (selectedTypes.includes(type.toUpperCase())) {
          haveType = true;
        }
      });
      return haveType;
    });
  }

  return (
    <div>
      {pokePopUp ? (
        <PokeStats id={pokePopUp} onClickBackground={backgroundHandlerView} />
      ) : (
        <></>
      )}
      <>
        <div className="search_main">
          <label className="search_text"> Name or Number: </label>
          <input
            className="search_input"
            type="text"
            ref={searchRef}
            onInput={() => searchHandler()}
          />
        </div>
      </>

      <>
        <div className="buttons_types_main">
          {typesJSON.map((type) => {
            return (
              <Button
                key={type.english}
                text={type.english}
                onClick={typeHandler}
              />
            );
          })}
        </div>
      </>

      <>
        <div className="buttons_sort_main">
          <button
            id={0}
            onClick={(e) => sortHandler(e)}
            className={
              sort === "id/asc"
                ? "button_sort_active button_sort"
                : sort === "id/desc"
                ? "button_sort_active button_sort"
                : "button_sort"
            }
          >
            SORT BY ID {sort === "id/asc" ? "^" : sort === "id/desc" ? "v" : ""}
          </button>

          <button
            id={1}
            onClick={(e) => sortHandler(e)}
            className={
              sort === "name/asc"
                ? "button_sort_active button_sort"
                : sort === "name/desc"
                ? "button_sort_active button_sort"
                : "button_sort"
            }
          >
            SORT BY NAME
            {sort === "name/asc" ? "^" : sort === "name/desc" ? "v" : ""}
          </button>
        </div>
      </>

      <div className="result_div">Results: {result.length}</div>

      <>
        <div className="tiles_main">
          {result.map((item) => {
            return (
              <Tile
                key={item.id}
                id={item.id}
                name={item.name.english}
                type={item.type}
                onclick={(e) => tileHandler(e)}
              />
            );
          })}
        </div>
      </>
    </div>
  );
};

export default View;

import React from "react";

import "./card.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.monsterObj.id}?set=set2size=180x180`} alt="monster" />
      <h2>{props.monsterObj.name}</h2>
    </div>
  );
}

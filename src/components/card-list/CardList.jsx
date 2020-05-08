import React from "react";

import "./cardList.css";
import Card from "../card/Card";

export default function CardList(props) {
  return (
    <div className="cardList">
      {props.monsters.map((monsterObj) => (
        <Card key={monsterObj.id} monsterObj={monsterObj} />
      ))}
    </div>
  );
}

import React from "react";

import DndSaveThrowCollectionComponent from "./DndSaveThrowCollectionComponent";

export default ({ collection }) => {
  const list = collection && Object.entries(collection)

  return list && list.length
    ? (
      <DndSaveThrowCollectionComponent list={list}/>
    )
    : null;
}

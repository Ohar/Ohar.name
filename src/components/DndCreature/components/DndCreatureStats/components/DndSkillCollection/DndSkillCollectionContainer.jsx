import React from "react";

import DndSkillCollection from "./DndSkillCollectionComponent";

export default ({ collection }) => {
  const list = collection && Object.entries(collection)

  return list && list.length
    ? (
      <DndSkillCollection list={list}/>
    )
    : null;
}

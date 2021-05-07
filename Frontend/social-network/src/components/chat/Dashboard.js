import React from "react";
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";



export default function Dashboard({ id }) {

  return (
    <div className="d-flex" style={{ height: "85vh" }}>
      <Sidebar id={id} />
      <OpenConversation id={id} />
    </div>
  );
}

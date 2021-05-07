import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";

const CONVERSATIONS_KEY = "conversations";


export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

  return (
    <div style={{ width: "200px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-start">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>My Friends</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations id={id} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

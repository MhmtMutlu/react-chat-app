import React, { useState } from 'react'
import { Tab, Nav, Button } from "react-bootstrap"
import Conversations from './Conversations'
import Contacts from './Contacts'

const CONVERSATIONS_KEY = "conversations"
const CONTACTS_KEY = "contacts"

export default function Sidebar({ id }) {

    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY

    return (
        <div style={{ width: "250px" }} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border-end overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-end small">
                    Your Id: <span className="text-muted">{id}</span>
                </div>
                <Button className="rounded-0">
                    New {conversationsOpen ? "Conversation" : "Contact"}
                </Button>
            </Tab.Container>
        </div>
    )
}

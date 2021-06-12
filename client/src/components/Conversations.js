import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'

export default function Conversation() {

    const { conversations, selectedConversationIndex } = useConversations()

    return (
        <div>
            <ListGroup variant="flush">
            {conversations.map((conversation, index) => (
                <ListGroup.Item
                 key={index}
                 action
                 onClick={() => selectedConversationIndex(index)}
                 active={conversation.selected}
                >
                    {conversation.recipients.map(r => r.name).join(", ")}
                </ListGroup.Item>
            ))}
        </ListGroup>
        </div>
    )
}

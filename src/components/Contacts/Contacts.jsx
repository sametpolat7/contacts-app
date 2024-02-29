import React, { useState } from 'react';
import Form from './Form/Form';
import List from './List/List';

function Contacts() {
    const [contacts, setContacts] = useState([
        {fullName: "Mom", phoneNumber : "05694963025"},
        {fullName: "Dad", phoneNumber : "05982036982"},
        {fullName: "My Love", phoneNumber : "05731285239"},
        ]);

    return (
        <div id='contacts'>
            <Form
            contacts = {contacts}
            setContacts = {setContacts}
            />
            <List contacts = {contacts} />
        </div>
    )
}

export default Contacts;
import { useState } from "react";

function List({ contacts }) {
    const [searchText, setSearchText] = useState('');

    const filteredList = contacts.filter((obj) => {
        return Object.values(obj).some((value) => {
            return value.toString().toLowerCase()
            .includes(searchText.toLowerCase());
        })
    });

    return (
        <div>
            <h1>Contacts List</h1>
            <input
            value = {searchText}
            onChange = {(event) => {
                setSearchText(event.target.value)
            }}
            ></input>
            <ul>
            {
                filteredList.map((person, index) => {
                    return (
                    <li key={index}>
                        {person.fullName}
                        <br />
                        {person.phoneNumber}
                    </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default List;
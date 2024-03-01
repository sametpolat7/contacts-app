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
        <div className="contact-list">
            <div className="phone-output">
                <input
                value = {searchText}
                placeholder="Search"
                onChange = {(event) => {
                    setSearchText(event.target.value)
                }}
                ></input>
                <ul>
                {
                    filteredList.map((person, index) => {
                        return (
                        <li key={index}>
                            <span className="name">{person.fullName}</span>
                            <br />
                            {person.phoneNumber}
                        </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default List;
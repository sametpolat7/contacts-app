import { useState } from "react";

function Form({ contacts, setContacts }) {
    const defaultFormValue = { fullName : "", phoneNumber : "" };
    const [form, setForm] = useState(defaultFormValue);

    const onChangeInput = (event) => {
        return setForm({...form, [event.target.name] : event.target.value})
    }

    const addData = (event) => {
        event.preventDefault();
        setContacts([...contacts, form]);
        setForm(defaultFormValue);
    }

    const isInvalidForm = Object.values(form).some((value) => {
        return value === ""
    })

    return (
        <div className="user-form">
            <form onSubmit={addData}>
                <label htmlFor="fullName">Name</label>
                <input
                type="text"
                name="fullName"
                id="fullName"
                value={form.fullName}
                onChange={onChangeInput}
                autoComplete="off" 
                />
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                value={form.phoneNumber}
                onChange={onChangeInput}
                autoComplete="off"
                />
                <input type="submit" value="Add Contact!" disabled={isInvalidForm}/>
            </form>
        </div>
    )
}

export default Form;
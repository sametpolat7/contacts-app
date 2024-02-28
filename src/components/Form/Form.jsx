import { useState } from "react";

function Form() {
    const [form, setForm] = useState({ fullname : "", telephone : "" } );

    const onChangeInput = (event) => {
        setForm({...form, [event.target.name] : event.target.value})
    }

    const addData = (event) => {
        event.preventDefault();
    }

    const isInvalidForm = Object.values(form).some((value) => {
        return value === ""
    })

    return (
        <div>
            <form onSubmit={addData}>
                <label htmlFor="fullName">Name : </label>
                <input
                type="text"
                name="fullname"
                id="fullname"
                value={form.fullname}
                onChange={onChangeInput}
                autoComplete="off" 
                /><br />
                <label htmlFor="telephone">Phone Number : </label>
                <input
                name="telephone"
                id="telephone"
                value={form.telephone}
                onChange={onChangeInput}
                autoComplete="on"
                /><br />
                <input type="submit" value="Add Contact!" disabled={isInvalidForm}/>
            </form>
        </div>
    )
}

export default Form;
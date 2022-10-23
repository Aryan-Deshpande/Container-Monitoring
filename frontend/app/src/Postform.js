import React, { useState } from "react";
import { userState } from "react"
import axios from "axios"

function Postform(){
    const [data, setData ] = useState(null);
    
    const submit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/get', {
            "username": e.username,
            "password": e.password
        }).then( res => console.log(res)).catch( (err)=> console.log(err));

    }

    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input type="username" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Postform
import React from "react";
import axios from "axios";

let PersonContext;

async function getPersons() {
    let response = [];

    try {
        response = await axios.get("http://localhost:3000/persons").then(res => res.data);
        
    } catch (error) {
        console.log(error);
    }

    PersonContext = React.createContext(response);
}

getPersons();

export default PersonContext;
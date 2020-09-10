import React, { Component } from 'react';

import SortedList from './SortedList';
import PersonContext from "./PersonContext";

class Person extends Component {    
    columns = [
        {
            human: "Personer",
            data: "name"
        },
        {
            human: "Bilder",
            data: "image"
        },
        {
            human: "Videor",
            data: "video"
        },
        {
            human: "Startdatum",
            data: "startDate"
        },
        {
            human: "Slutdatum",
            data: "endDate"
        },
    ];

    render() {
        return (
            <PersonContext.Consumer>
                {
                    (personContext) => {
                        return(
                            <div>
                                <SortedList 
                                    items={personContext}
                                    columns={this.columns}/>
                            </div>
                        );
                    }
                }
            </PersonContext.Consumer>
        );
    }
}

export default Person;
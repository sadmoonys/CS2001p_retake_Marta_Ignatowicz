

import React, { useState } from "react";



    const SearchBox = () => {
        const [input, setInput] = useState("");
        let folders = [

            { name: "computer science"},
            { name: "Maths"},
            { name: "English"},
            
        ];

        const handleChange = (e) => {
            e.preventDefault();
            setInput(e.target.value);}


            if (input.length > 0 ) {
                folders =folders.filter((i) => {
return i.name.match(input);
                })
            }




        return (

<div className="">
                        
                            <input  
                            type="text"
                            name="username"
                            placeholder="Search for Folder here" 
                            value={input}
                            onChange={handleChange}
                            />
                        </div>
          

            
      

        )};
        
    export default SearchBox;
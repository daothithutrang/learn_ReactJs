import React from "react";

const Welcome = (props) => {
    return (
        <>
            {
                props.name ? ( <h1> Hello, {props.name}</h1>) : null
            }

            {
                props.age ? ( <h1> age: {props.age}</h1>) : null
            }

        </>
    );
}

export default Welcome;
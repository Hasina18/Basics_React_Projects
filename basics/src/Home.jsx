import React from 'react';
 export default function Home(props) { // or {name} instead of props
    return (
        <div>Welcome {props.name}
        {props.age}
        </div>
    )
}
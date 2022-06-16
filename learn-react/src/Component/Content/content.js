import React, {useState} from "react";
import Welcome from "../Welcome";

const Content = (props) => {
    const introduce = {
        stt: '1',
        name: 'mai',
        age: '22',
        class: 'BTEC-CO1K11'
    }

    const [click, setClick] = useState(false);
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setClick(!click);
        setCount(count +1 );
    }

    return (
        <>
            <div className='top-content'>
                <div className='hello'>
                    <button onClick={handleClick}> Click</button>
                    { click ? (<Welcome name={props.name} />) : null}
                    <h1> Dem so lan click an hien thong tin welcome </h1>
                    <div> count: {count} </div>
                </div>

                <div>
                    <h1> Truyen du lieu tu cha sang con </h1>
                    <div>
                        name: {props.name}, age: {props.age}
                    </div>
                </div>

                <div className='introduce'>
                    <h1> Introduce yourself</h1>
                    <p> Name: {introduce.name}</p>
                    <p> Age: {introduce.age}</p>
                    <p> Class: {introduce.class}</p>
                </div>
            </div>

            <div className='bottom-content'>
                <p> Bottom Content</p>
            </div>
        </>
    );
}

export default Content;
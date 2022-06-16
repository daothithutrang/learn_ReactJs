import React from 'react';
import './App.css';
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

const App = () => {
    const student = {
        name: 'Trang',
        class: 'BTECC01K11',
        age: '20'
    };

    return (
        <>
            <Header/>
            <Content name= {student.name} class = {student.class}  age = {student.age} />
            <Footer/>
        </>
    );
}


export default App;



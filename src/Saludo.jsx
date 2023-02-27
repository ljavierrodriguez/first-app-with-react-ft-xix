import React from 'react';
import { Heading } from './components/Heading';

const Saludo = () => {
    return (
        <>
            <h1>Saludo desde React!</h1>
            <Heading texto={"Heading 1"} className="prueba" type="h1" />
            <Heading texto={"Heading 2"} type="h2" />
            <Heading type="h3" />
        </>
    )
}

export default Saludo;
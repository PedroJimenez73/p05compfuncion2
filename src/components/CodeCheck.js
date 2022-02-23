import React, { useState, useEffect } from 'react'

export default function CodeCheck (props) {

    const [counter, setCounter] = useState(30);
    const [code, setCode] = useState('');
    const [showCheckInput, setshowCheckInput] = useState(true);

    const handleChange = e => {
        setCode(e.target.value);
    }

    useEffect(() => {
        console.log('Me invoco');
        if(code === '1234') {
            setshowCheckInput(false);
            setCounter(0);
        }
    }, [code]) // Con array vacío solo se ejecuta al montar y desmontar el componente

    useEffect(() => {
        const timer = setInterval(() => {
            if(counter > 0) {
                setCounter(prevCounter => prevCounter -1);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [counter]) 

    return (
        <div className="code-check">
            {
                showCheckInput 
                ? 
                <>
                    <p>Introduzca el código que ha recibido por correo</p>
                    <input type="text" value={code} onChange={handleChange}/> 
                    <p className="clock">{counter}</p>
                </>
                :
                <p>Correcto</p>
            }
        </div>
    )
}

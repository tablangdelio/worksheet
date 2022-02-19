import React, {useEffect, useState} from 'react';
import Button from '../components/Button'

const Calculator = () => {
    const [inputValue1, setInputvalue1 ] = useState(0);
    const [inputValue2, setInputvalue2 ] = useState(0);
    const [total, setTotal] = useState(0);

    console.log('render outisde useFfect');
    
    useEffect(() => {
          
       setTotal( (!inputValue1 ? 0 : parseFloat(inputValue1)) + ( !inputValue2 ? 0 : parseFloat(inputValue2)) );

    },[inputValue1, inputValue2]);

    const handleReset = () => {

        setInputvalue1(0);

        setInputvalue2(0);

    }
    return(

        <div className="main">
            {total}
            <input type = "number" value={inputValue1} onChange={(e) => setInputvalue1(e.target.value)} />
            <input type = "number" value={inputValue2} onChange={(e) => setInputvalue2(e.target.value)} />
            <Button label = "Reset" handleClick={handleReset}/> 
        </div>

    )
}



export default  Calculator;
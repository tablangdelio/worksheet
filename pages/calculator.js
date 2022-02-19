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

        <div className='flex 
                flex-col 
            
                max-w-screen-xl 
                bg-stone-100 
                p-7 rounded-lg  
                flex-wrap
                border-slate-200
                drop-shadow-md '>
            <div className='flex justify-center'>
                <h1 className='text-8xl'>
                    {total}
                </h1>
            </div>
            <div className='
                flex flex-row
                my-5
                '>
            <input 
                type="number" 
                value={inputValue1} 
                onChange={(e) => setInputvalue1(e.target.value)}
                className="
                    shadow 
                    appearance-none 
                    border rounded 
                    w-full 
                    py-2 
                    px-3 
                    text-gray-700 
                    leading-tight 
                    focus:outline-none 
                    focus:shadow-outline
                    mr-2"
                />
            <input  className="
                    shadow 
                    appearance-none 
                    border rounded 
                    w-full 
                    py-2 
                    px-3 
                    text-gray-700 
                    leading-tight 
                    focus:outline-none 
                    focus:shadow-outline" 
                    type = "number" 
                    value={inputValue2} 
                    onChange={(e) => setInputvalue2(e.target.value)} />
            </div>
            <div className='flex justify-end '>
                <Button     label="&#8634;"  className="bg-stone-900" handleClick={handleReset}/> 
            </div>
        </div>

    )
}



export default  Calculator;
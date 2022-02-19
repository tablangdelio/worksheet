import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
const Counterapp = () => {
    const[ count, setCount ] = useState(0)
    const[ parity, setParity ] = useState('')
    
    useEffect(() => {

        if(count % 2 == 0 ) return setParity('even')

        return setParity('odd')

     }, [ count ] );

    const handleAddCount = () => {

        setCount (prev => prev + 1);
    }
    const handleSubtractCount = () => {
        // when count is 0 to persist negative integer return prev state
        if(count === 0 ) return setCount(prev => prev )

        setCount(prev => prev - 1)

    }

    return(
        <>
        <div className='bg-stone-50 p-10 rounded shadow'>  
            <div className='flex justify-between'>
                 <span className={` text-5xl my-5 ${parity === `odd` ? 'text-stone': 'text-rose-500' } ` }>{ count }</span>
                <span className={`mb-5 text-6xl ${parity === `odd` ? 'text-stone': 'text-rose-500' }`} >{ count == 0 ? 'zero': parity} </span>
            </div>
            <div className='my-5 flex'>
                <Button 
                    className="bg-stone-900 mr-5 " 
                    label="&larr;" 
                    handleClick={handleAddCount} />
                    
                <Button  
                    className="bg-stone-900"  
                    label="&#8594;" 
                    handleClick={handleSubtractCount} />
            </div>
            <Button 
                className="bg-stone-900" 
                label="&#8634;"
                 handleClick={() => {  setCount(0) } } />
        </div>
        <div className="mt-10">
            <code className='bg-stone-900 text-orange-500 mt-7 p-1'> 
                <a 
                    target="_blank" 
                    href="https://github.com/tablangdelio/worksheet/blob/main/pages/counterapp.js"> 
                    https://github.com/tablangdelio/worksheet/blob/main/pages/counterapp.js
                </a>
            </code>
        </div>
    </>
    )
}



export default  Counterapp;
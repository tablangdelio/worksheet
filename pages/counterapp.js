import React, { useState, useEffect } from 'react'
import Button from '../components/button'


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
        <main className='main'>
            <div>  
                <span>{ count == 0 ? '': parity} </span>
                <span>{ count }</span> 
                <Button label=" + " handleClick={handleAddCount} />
                <Button label=" - " handleClick={handleSubtractCount} />
                <Button label="reset" handleClick={() => {  setCount(0) } } />
            </div>
        </main>
    )
}

export default  Counterapp;
import React, {useState} from "react";

const CenterStopButton = () => {
    const [size, setSize] = useState(16);
    const [bg, setBg] = useState(623422);
    const style = {
        color: `white`,
        fontSize: `${size}%`,
        backgroundColor: `#${bg}`,
        height: `${size + 50 }px`,
        width: `${size + 50 }px`,
        transition: '0.2s linear',
        border: '0px',
        borderRadius: '100%',
    }
    const handleClick = () => {
        setBg(Math.floor(100000 + Math.random() * 900000))
        setSize(prev => prev * 2)
    }
    return(
        <div className="main">
            <button style={style} onClick={handleClick}> STOP </button>
            <div className="mt-5">
                <code className='bg-stone-900 text-orange-500 mt-7 p-1'> 
                <a 
                    target="_blank" 
                    href="https://github.com/tablangdelio/worksheet/blob/main/pages/centerstopbutton.js"> 
                    https://github.com/tablangdelio/worksheet/blob/main/pages/centerstopbutton.js
                    </a>
                </code>
            </div>
        </div>
    )
}

export default  CenterStopButton;
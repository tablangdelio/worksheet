

const Button = ({label, handleClick, className}) => {

    
    return(
        <button 
            type="button"
            className={` 
                rounded-full w-32 h-14  
                text-3xl text-white 
                hover:bg-rose-600 
              
                focus:outline-none 
                focus:ring 
                focus:ring-rose-300
                ${className} 
                `}
            onClick={handleClick} 
            >
            { label }

        </button>
    );
}

export default Button;


const Button = ({label, handleClick, isDisabled }) => {

    
    return(
        <button 
            type="button"
            onClick={handleClick} 
            >
            { label }

        </button>
    );
}

export default Button;
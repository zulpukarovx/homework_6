import React, {useRef, useEffect} from 'react'

const Input = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Фокусируемся на поле ввода при монтировании компонента
        inputRef.current.focus();
    }, []);

    return (
        <div>
        <label>
            Имя:
            <input type="text" ref={inputRef} />
        </label>
        </div>
    );
}

export default Input
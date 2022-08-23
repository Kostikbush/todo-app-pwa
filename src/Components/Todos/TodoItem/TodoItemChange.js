import { useContext } from 'react';
import {BsFillPencilFill} from 'react-icons/bs';
import { AppContext } from '../../../context/context';

export const TodoItemChange = (
    {
        todo,
        handleWright,
        handleKeyPressWrite,
        handleWriteChange,
    }
    ) => {
    const {theme} = useContext(AppContext);
    return (
        <div 
                className={`w-full media
                rounded-xl items-center ${theme}-form-change p-5 
                flex mb-5`}>
                    <input defaultValue={todo.title} 
                            onKeyPress={handleKeyPressWrite}
                            maxLength="40" 
                            placeholder="Append"
                            className={`${theme}-chenge-input custom-input bg-transparent 
                            w-full border-none 
                            outline-none`}
                            onChange={handleWriteChange}
                            />
                    <button 
                        onClick={handleWright} 
                        className="text-white">
                        <BsFillPencilFill 
                            size={20}  
                            className={`${theme}-icon-form m-2`}/>
                    </button>
                </div>
    )
}
import { useState } from "react"

function ToDo() {
    const [array, setArray] = useState([]);
    const [value, setValue] = useState("");

    function handleChange(event){
        setValue(event.target.value);
    }

    function addTask(){
        if(value.length !== 0){
            setArray(prevArray => [...prevArray, value]);
            setValue("");
        }
    }

    function removeElement(index){
        setArray(prevArray => prevArray.filter((_, number) => number !== index));
    }

    function swapUp(index){
        if(index > 0){
            const newArray = [...array];
            const temp = newArray[index - 1];
            newArray[index - 1] = newArray[index];
            newArray[index] = temp;
            //[newArray[index], newArray[index - 1]] = [newArray[index - 1], newArray[index]];
            setArray(newArray);
        }
    }

    function swapDown(index){
        if(index < array.length - 1){
            const newArray = [...array];
            const temp = newArray[index];
            newArray[index] = newArray[index + 1];
            newArray[index + 1] = temp;
            //[newArray[index], newArray[index + 1]] = [newArray[index+1], newArray[index]];
            setArray(newArray);
        }
    }

  return (
    <div>
        <h1>ToDo Application</h1>
        <div className="container">

            <div className="input--container">
                <input type="text" placeholder="Enter the task" onChange={handleChange} value={value}/>
                <button onClick={addTask}>Add Task</button>
            </div>

            <div className="tasks--container">
                <ol>
                    {array.map((element, index) => {
                        return <li key={index}>{element} 
                            <button onClick={() => swapUp(index)}>inc</button> 
                            <button onClick={() => swapDown(index)}>dec</button> 
                            <button onClick={() => removeElement(index)}>Del</button>
                        </li>
                    })}
                </ol>
            </div>

        </div>
    </div>
  )
}

export default ToDo

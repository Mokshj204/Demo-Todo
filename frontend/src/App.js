import './App.css';
import Input from './components/Input'
import {useState} from 'react'


function App(){

  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")

function handleChange(event){
if(event.target.name === "title"){
  setTitle(event.target.value)
}
  else if(event.target.name === "Description"){
    setDesc(event.target.value)
  }
}

function handleClick(){
  console.log(title)
  console.log(desc)
  setTitle("")
  setDesc("")
}

    return (
    <div>
      <Input label="title" Change={handleChange} value={title}></Input>
      <Input label="Description" Change={handleChange} value={desc}></Input>
      <button onClick={handleClick}>Button</button>      
    </div>
    ) 
  }

export default App;

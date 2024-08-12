import { ENDPOINT_URL } from "../constants/constants";

export const createTodo =(todo)=>{
    return fetch(`${ENDPOINT_URL}/createTodo`,{
        method: 'POST',
        headers:{
            Accept:'application/json',
            'Content-type' : 'application/json'
        },
        body :JSON.stringify(todo)
    }).then((res) =>{
        return res.json()
    }).catch(err=>{
        console.log(err)
    })
}

export const getALLTodo=()=>{
    return fetch(`${ENDPOINT_URL}/getALLTodos`,{
        method:'GET',
        header:{
            Accept:'application/json',
            'Content-type' : 'application/json'
        },
    }).then((res) =>{
        return res.json()
    }).catch(err=>{
        console.log(err)
    })
}
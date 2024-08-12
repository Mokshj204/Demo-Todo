import { useEffect, useState } from 'react'
import { createTodo, getALLTodo } from '../actions/todoActions'

const Home = () => {

    useEffect(() => {
        fetchTodo()
    }, [])

    const [data, setData] = useState({
        title: '',
        description: '',
        id: ''
    })

    const [allTodos, setAllTodos] = useState([])

    useEffect(() => {
        console.log('todos', allTodos)
    }, [allTodos])

    const handleChange = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        console.log("title", data.title);
        console.log("description", data.description);
        const body = {
            title: data.title,
            description: data.description
        }

        createTodo(body).then((res) => { console.log('response', res) })
            .catch((err) => { console.log(err) })
    }


    const fetchTodo = async () => {
        const res = await getALLTodo()
        setAllTodos(res.data)
        console.log(res)

    }

    return (
        <div>
            <label>Title</label>
            <input type="text" name="title" placeholder='Enter Title' onChange={handleChange} />

            <label>description</label>
            <input type="text" name="description" placeholder='Enter Description' onChange={handleChange} />

            <button className='btn btn-primary col-1 mt-2' placeholder="Submit" onClick={handleSubmit}>Submit</button>
            <button className='btn btn-primary col-1 my-2' placeholder="Fetch" onClick={fetchTodo}>Fetch</button>

            <div>

                {allTodos.map((element, i) => (
                    <div className='border border-primary col-md-19 my-2'>
                        <div key={i} >
                            <h3>{element.title}</h3>
                            <p>{element.description}</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Home;
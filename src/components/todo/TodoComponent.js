import { useParams } from "react-router-dom"
import { retrieveTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"

function TodoComponent() {

    const { id } = useParams()

    const [description, setDescription] = useState('')

    const authContext = useAuth()

    const username = authContext.username

    useEffect(
        () => retrieveTodos()
        , [id]
    )

    const retrieveTodos = () => {
        retrieveTodoApi(username, id)
            .then(response =>
                setDescription(response.data.description)
            )
            .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1>Enter Todo details</h1>
            <div>
                description : {description}
            </div>
        </div>
    )
}

export default TodoComponent
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldBeanPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

function WelcomeComponent() {

    const { username } = useParams()

    const authContext = useAuth()

    const [message, setMessage] = useState(null)


    const callHelloWorldRestApi = () => {
        console.log('called')

        retrieveHelloWorldBeanPathVariable('Ranga', authContext.token)
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    const successfulResponse = (response) => {
        console.log(response);
        setMessage(response.data.message)
    }

    const errorResponse = (error) => {
        console.log(error);
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>Call Hello World</button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}

export default WelcomeComponent
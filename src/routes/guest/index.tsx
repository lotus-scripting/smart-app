import { Link } from 'react-router-dom'

export function index() {

    return <>
        <h1>Guest Page</h1>
        <div>
            <Link to="/signin">Sign in</Link>
        </div>
        <div>
            <Link to="/signup">Sign up</Link>
        </div>
    </>
    
}
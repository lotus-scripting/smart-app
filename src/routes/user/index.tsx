import { Outlet } from 'react-router-dom'

export default function index() {

    return <>
        <h1>User Page</h1>
        <Outlet />
    </>

}
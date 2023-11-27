import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import Loading from '../utils/Loading'

import Header from './Header'
import Footer from './Footer'

const Layout = () => {

    return <>

        <Header />

        <main>
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </main>

        <Footer />
    
    </>

}

export default Layout
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout'

import Landing from './routes/Landing'

function App() {

  const router = createBrowserRouter([

    {
      
      element: <Layout />,

      children: [

        {

          path: "/",
          element: <Landing />

        }

      ]

    }

  ])

  return <RouterProvider router={router} />

}

export default App
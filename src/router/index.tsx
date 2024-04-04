import { useRoutes } from 'react-router-dom'

import About from '@/views/About'
import Contact from '@/views/Contact'
import Home from '@/views/Home'
import Resume from '@/views/Resume'

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/resume',
      element: <Resume />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ])
}

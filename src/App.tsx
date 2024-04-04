import { useVcosole } from '@hooks/useVconsole'

import MyRoutes from '@/router'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function App() {
  useVcosole()
  return (
    <div>
      <Navbar />
      <MyRoutes />
      <Footer />
    </div>
  )
}

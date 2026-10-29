import { Routes, Route } from 'react-router-dom'
import Home from './user/pages/Home'
import Pnf from './pages/Pnf'

function App() {
    return (
        <>
            <Routes>
                {/* public */}
                <Route path='/' element={<Home />} />

                {/* not found */}
                <Route path='/*' element={<Pnf />} />
            </Routes>
        </>
    )
}

export default App
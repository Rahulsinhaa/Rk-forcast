import React from 'react'

import Wether from './Cpmponent/Wether'
import Navbar from './Navbar'

function App() {
  return (
    <div>
<Navbar/>
<div className='container my-4 d-flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
 <Wether/>
 </div>

    </div>
  )
}

export default App
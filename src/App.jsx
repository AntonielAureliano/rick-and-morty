import { useState } from 'react';
import { TitleLogo } from './components';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TitleLogo />
    </div>
  )
}

export default App

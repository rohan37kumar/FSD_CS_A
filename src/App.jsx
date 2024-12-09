import {Routes,Route} from 'react-router-dom'
import Refex from './assets/Refex';
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path='/Refex' element={<Refex/>}></Route>    
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/counter" element={<h1>Counter App</h1>}></Route>
        <Route path="/stopwatch" element={<Stopwatch/>}></Route>
        <Route path="*" element={<h1>No page available</h1>}></Route>
      </Routes>

    </div>
  )
}
export default App;
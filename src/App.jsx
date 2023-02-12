import Form from './Components/Form';
import SecondPage from './Components/SecondPage';
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="Page 2" element={<SecondPage/>}/>
    </Routes>
 
  // <SecondPage/>
  )
}

export default App

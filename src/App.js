import Login from './components/Login';
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/Home';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import AdminMenu from './components/AdminMenu';
import AddCourse from './components/AddCourse';
import AdminEdit from './components/AdminEdit';

function App() {
  return (
    <div className="App">

      <div class="mt-20">
        <ToastContainer/>
          <BrowserRouter>
            {localStorage.getItem("Role")==="Instructor"? <AdminMenu/>:<Menu/> }
            <Routes>
              <Route path="Home" element={<Home/>}/>
              <Route path="AdminMenu" element={<AdminMenu/>}/>
              <Route path="Login" element={<Login/>}/>
              <Route path="Register" element={<Register/>}/>
              <Route path="AddCourse" element={<AddCourse/>}/>
              <Route path="AdminEdit" element={<AdminEdit/>}/>
            </Routes>
          </BrowserRouter>
      </div>
      
        
    </div>
  );
}

export default App;

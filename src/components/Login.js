import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Login(){
    const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [password,setPassword] = useState("");

    const login=(event)=>{
        event.preventDefault()
        axios.post("http://localhost:5134/login",{
            userName: username,
            password: password
        }).then((response)=>{
            console.log(response.data)
            localStorage.setItem("Name",response.data.userName);
            localStorage.setItem("Role",response.data.role);
            toast.success("Log In Successfull")
            navigate("/Home");
            window.location.reload();
        }).catch((err)=>{
            console.log(err)
            toast.error(err.response.data)
        })

    }
    return(
        <div class="h-screen flex items-center text-center justify-center">
            <div class="p-3 bg-white shadow rounded-lg items-center justify-center h-64 w-64">
                <h4 class="font-semibold text-slate-900">Login</h4>
                <form onSubmit={login}>
                    <div class="username pt-4">
                        <input required class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-50 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-1 pl-2 ring-2 ring-slate-200 shadow-sm" type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} value={username}></input>
                    </div>
                    <div class="password pt-4">
                        <input required class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-50 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-1 pl-2 ring-2 ring-slate-200 shadow-sm" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                    </div>
                    <div class="pt-4">
                        <button class="h-10 px-6 font-semibold rounded-full border border-blue-500 text-slate-900" type="submit">Login</button>
                    </div>
                </form>
                <div class="mt-7">
                <h6>Are you new user? <Link to="/Register" class="text-blue-500">Sign-Up</Link></h6>
                </div>
            </div>
        </div>
    )
}
export default Login;
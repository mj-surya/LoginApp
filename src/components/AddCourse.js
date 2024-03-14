import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function AddCourse(){
    const navigate=useNavigate();
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    const[institute,setInstitute] = useState("");
    const[price,setPrice] = useState(0);
    const[duration,setDuration] = useState("");
    var image =null;

    const handleimg=(e)=>{
        image=e.target.files[0];
    }

    const add=(event)=>{
        event.preventDefault();
        const json={
            title:title,
            description:description,
            institute:institute,
            price:price,
            duration:duration,
            userName:localStorage.getItem("Name")
        };
        const form=new FormData();
        form.append('json',JSON.stringify(json));
        form.append('image',image);
        console.log(json)
        console.log(form)

        axios.post("http://localhost:5134/api/controller/AddCourse",form,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }).then((response)=>{
            console.log(response.data)
            toast.success("Course added successfully")
            navigate("/Home");

        }).catch((err)=>{
            console.log(err)
            toast.error("Could not add course");
        })
    }
    return(
        <div class="h-screen flex items-center text-center justify-center">
            <div class="p-3 bg-white shadow border-2 border-blue-200 rounded-lg items-center justify-center h-auto w-auto">
                <h5 class="font-semibold text-slate-900">Add Course</h5>
                <form onSubmit={add}>
                    <div class=" ml-2 mt-3">
                        <div class="float-left">
                            <input type="text" required value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title..." class=" m-1 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-50 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-1 pl-2 ring-2 ring-slate-200 shadow-sm "></input>
                        </div>
                        <div class="float-right">
                            <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} required placeholder="Description..." class=" m-1 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-50 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-1 pl-2 ring-2 ring-slate-200 shadow-sm "></input>
                        </div>
                    </div>
                    <div class=" ml-2 mt-5">
                        <div class="float-left">
                            <input type="text" value={institute} onChange={(e)=>{setInstitute(e.target.value)}} required placeholder="Institute..." class=" m-1 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-50 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-1 pl-2 ring-2 ring-slate-200 shadow-sm "></input>
                        </div>
                        <div class="float-right">
                            <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} required placeholder="Price..." class=" m-1 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-50 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-1 pl-2 ring-2 ring-slate-200 shadow-sm "></input>
                        </div>
                    </div>
                    <div class=" ml-2 mt-5">
                        <div class="float-left">
                            <input type="text" value={duration} onChange={(e)=>{setDuration(e.target.value)}} required placeholder="Duration..." class=" m-1 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-50 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-1 pl-2 ring-2 ring-slate-200 shadow-sm "></input>
                        </div>
                        <div class="float-right">
                            <input type="file" value={image} onChange={handleimg} required accept="image/*" placeholder="Image" class="w-40 h-8 m-1 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-50 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-1 pl-2 ring-2 ring-slate-200 shadow-sm "></input>
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="hover:bg-blue-500 h-10 m-2 px-6 font-semibold rounded-full border border-blue-500 text-slate-900">Add Course</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddCourse;
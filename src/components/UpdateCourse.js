import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function UpdateCourse({course,popup}){
    const[title,setTitle] = useState(course.title);
    const[description,setDescription] = useState(course.description);
    const[institute,setInstitute] = useState(course.institute);
    const[price,setPrice] = useState(course.price);
    const[duration,setDuration] = useState(course.duration);
    const[courseID,setCourseID] = useState(course.courseID);
    const[image,setImage] = useState(course.image);
    const[username,setUsername] = useState(course.username);

    const update=(event)=>{
        event.preventDefault();
        const json={
            title:title,
            description:description,
            institute:institute,
            price:price,
            duration:duration,
            userName:username,
            image:image,
            courseID:courseID
        };

        axios.put("http://localhost:5134/api/controller/UpdateCourse",json)
        .then((response)=>{
            console.log(response.data)
            popup();
            toast.success("Course updated successfully");

        }).catch((err)=>{
            console.log(err)
            toast.error("Could not update course");
        })

    }


    return(
        <div class="h-screen flex items-center text-center justify-center">
            <div class="p-3 bg-white shadow border-2 border-blue-200 rounded-lg items-center justify-center h-auto w-auto">
                <h5 class="font-semibold text-slate-900">Add Course</h5>
                <form onSubmit={update}>
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
                    </div>
                    <div>
                        <button type="submit" class="hover:bg-blue-500 h-10 m-2 px-6 font-semibold rounded-full border border-blue-500 text-slate-900">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );

}
export default UpdateCourse;

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import UpdateCourse from "./UpdateCourse";

function AdminEdit(){
    const[courses,setCourses]=useState([]);
    const [isEditOpen,setIsEditOpen]=useState(false);
    const [selected,setSelected] = useState(null);
    useEffect(()=>{
        getCourses();
      },[isEditOpen]);

    const getCourses=()=>{
        axios.get("http://localhost:5134/api/controller/GetCourseByUser",{
            params:{
                username:localStorage.getItem("Name")
            }
        })
    .then((response)=>{
            const post = response.data
            setCourses(post);
            console.log(courses)
        }).catch((err)=>{
            console.log(err)
            toast.error("No Courses Available")
        })
    }

    const edit=(course)=>{
        setSelected(course);
        setIsEditOpen(true);
        
    } 
    const popclose=()=>{
        setIsEditOpen(false);
    }


    var checkcourse=courses.length>0 ? true:false;
    return(
        <div>
            {checkcourse? 
              <div class="mt-10 m-5 flex flex-wrap justify-between">
              {courses.map((course) => (
                <div class="relative flex flex-col mt-16 text-gray-700 bg-white shadow-md border-2 rounded-xl w-80">
                  <div class="relative mx-4 min-h-50 max-h-50 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img src={course.image} class="h-48" alt="Course Image" />
                  </div>
                  <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {course.title}
                    </h5>
                    <p class="block font-sans text-base antialiased h-16 font-light leading-relaxed text-inherit">
                      {course.description}
                    </p>
                  </div>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                      </svg>
                      <p class="ml-2 font-bold font-sans">{course.institute}</p>
                    </div>
                  </div>
                  <div class="relative mt-6">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <p class="ml-2 font-sans">{course.duration}</p>
                    </div>
                  </div>
                  <div class="p-6 pt-0 mt-7">
                    <button onClick={()=>edit(course)} class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-yellow-500 text-white shadow-md shadow-yellow-900/10 hover:shadow-lg hover:shadow-yellow-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                      Edit
                    </button>
                    <button class="align-middle ml-2 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-500 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                      Delete
                    </button>
                    <h5 class="align-middle font-sans folt-bold text-center uppercase float-right">$ {course.price}</h5>
                  </div>
                  
                </div>
              ))}
            </div>
            
            :<div class="mt-10 ml-5 flex flex-wrap text-center justify-center"><h5>No Courses Available</h5></div>}
            <Popup open={isEditOpen} onClose={()=>setIsEditOpen(false)}><UpdateCourse course={selected} popup={popclose}/></Popup>
        </div>
    )

}
export default AdminEdit;
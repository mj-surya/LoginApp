import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Home(){
  const[courses,setCourses]=useState([]);

  useEffect(()=>{
    GetCourse();
  },[]);
  const GetCourse=()=>{
    axios.get("http://localhost:5134/api/controller/GetAllCourse")
    .then((response)=>{
            const post = response.data
            setCourses(post);
            console.log(courses)
        }).catch((err)=>{
            console.log(err)
            toast.error("No Courses Available")
        })
  }

  var checkcourse=courses.length>0 ? true:false;
    return(
        <div class="m-5">
            
            <form class="max-w-md mx-auto">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Courses..." required />
                    <button type="submit" class="text-white blue-600 absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            {/* run loop for courses */}
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
                    <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                      Enroll
                    </button>
                    <h5 class="align-middle font-sans folt-bold text-center uppercase float-right">$ {course.price}</h5>
                  </div>
                </div>
              ))}
            </div>
            
            :<div class="mt-10 ml-5 flex flex-wrap text-center justify-center"><h5>No Courses Available</h5></div>}
            

        </div>
    );
}
export default Home;
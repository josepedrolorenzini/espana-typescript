import { useEffect} from "react";
import type { spainObj } from "../helpers/types";
import { barcelonaTask } from "../helpers/funciones";

interface MyTasksProps {
  tasks: spainObj;
}

function MyTasks({ tasks }: MyTasksProps) {
   
    
   useEffect(() => {
    console.log(barcelonaTask)
   }, []) ;

  return (
    <>
    <div>MyTasks</div>
    <div>{
    tasks.beforeGo?.map((task) => 
        <li key={task}>{task}</li>)
        }</div>
    </>
  )
}

export default MyTasks
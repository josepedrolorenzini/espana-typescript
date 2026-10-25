import { useEffect } from "react";
import { barcelonaTask } from "../helpers/funciones";

function MyTasks() {
   useEffect(() => {
    console.log(barcelonaTask)
   }, [])
  return (
    <>
    <div>MyTasks</div>
    <div>{
    barcelonaTask.beforeGo?.map((task) => 
        <li key={task}>{task}</li>)
        }</div>
    </>
  )
}

export default MyTasks
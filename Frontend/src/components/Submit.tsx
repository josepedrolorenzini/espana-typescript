import React from 'react'

type bodyType = {
    URL: string | null;
    taskAdded: string | null;
    userName: string | null;
}

interface SubmitProps {
  onAddTask: (text: string) => void;
}

export default function Submit({ onAddTask }: SubmitProps) {

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        // 
        const resultData: bodyType = {
            URL: formData.get('URL') as string | null,
            taskAdded: formData.get('taskAdded') as string | null ,
            userName: formData.get('userName') as string | null

        }

        try{
          const response = await  fetch('http://localhost:3000/api/submit', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:  JSON.stringify(resultData),
            });
            if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`)
                }
                  
                //respuesta del servidor
                const result = await response.json();
                console.log('Response from server:', result);

                 if (typeof result.data?.taskAdded !== "string") {
                       throw new Error("El servidor no devolvió el texto de la tarea.");
                     }

                  // Actualiza la lista que está en App.
                    onAddTask(result.data.taskAdded);

                console.log('Form submitted successfully')
                console.log(response)
                console.log(await result)
        }catch(error){
            console.error('Error submitting form:', error);
        }
        
    
    }

  return (
    <>
    <div>
        <h1>Submit New Task Form</h1>
         <form  onSubmit={handleSubmit}>
          <label htmlFor="URL">URL:</label>
          <input type="text" id="URL" name="URL" required />
          <br />
          <label htmlFor="taskAdded">Added:</label>
          <input type="text" id="taskAdded" name="taskAdded" required />
          <br />
          <label htmlFor="userName">User Name:</label>
          <input type="text" id="userName" name="userName" required />
          <br />
          <button type="submit">Submit</button>
        </form>

    </div>
    </>
    
  )
}

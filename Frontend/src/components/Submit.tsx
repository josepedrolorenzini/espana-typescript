import React from 'react'

export default function Submit() {

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        try{
          const response = await  fetch('http://localhost:3000/api/submit', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    URL: formData.get('URL'),
                    Added: formData.get('Added'),
                }),
            });
            if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`)
                }

                console.log('Form submitted successfully')
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
          <label htmlFor="Added">Added:</label>
          <input type="text" id="Added" name="Added" required />
          <br />
          <button type="submit">Submit</button>
        </form>

    </div>
    </>
    
  )
}

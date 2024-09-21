import { useState } from "react";

type contactProps = {
    email: string;
}

export default function Contact ({email}: contactProps){
    const handleButtonClick = () => {
        alert(`Michael's epost er: ${email}`)
    }

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault
        console.log(event)
    }



    return (
        <>
            <h2>Kontakt meg</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Navn:
                    <input type="text" value={name} onChange={handleChange} placeholder="Skriv ditt navn" />
                </label>
                <label>Melding: 
                    <textarea value={message} onChange={handleMessageChange} placeholder="skriv din melding"/>
                </label>
                <button type="submit">Send</button>
            </form>
            <footer><button onClick={handleButtonClick}>Kontakt på epost</button></footer>
        </>
    )
}
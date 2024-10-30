import { useState } from "react";
import { contactProps } from "../types/types";


export default function Contact ({email}: contactProps){
    const handleButtonClick = () => {
        alert(`Michael's epost er: ${email}`)
    }

    const [name, setName] = useState<string>('')
    const [message, setMessage] = useState('')
    const [submittedData, setSubmittedData] = useState<{ name: string; message: string } | null>(null); 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    
        if (name === '' || message === '') {
          alert('Vennligst skriv i feltene.');
          return;
        }
    
        setSubmittedData({ name, message });
        console.log(name, message)
        
        setName('');
        setMessage('');
      };

      return (
        <>
            <div className="form-container">
                <h2>Kontakt meg</h2>
                <p>Har du prosjekter og er på utkikk etter en utvikler kontakt meg gjerne!</p>
                <p>Skriv hva ønsket ditt omhandler så vil jeg komme i kontakt med deg når jeg har mulighet!</p>
                <form onSubmit={handleSubmit} id="projectCreation">
                    <label>
                        Navn:
                        <input type="text" value={name} onChange={handleChange} placeholder="Skriv ditt navn" />
                    </label>
                    <label>Melding: 
                        <textarea value={message} onChange={handleMessageChange} placeholder="Skriv din melding"/>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    );
}
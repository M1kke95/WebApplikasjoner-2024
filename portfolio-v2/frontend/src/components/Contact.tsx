
type contactProps = {
    email: string;
}

export default function Contact ({email}: contactProps){
    const handleButtonClick = () => {
        alert(`Michael's epost er: ${email}`)
    }

    return (
            <footer><button onClick={handleButtonClick}>Kontakt på epo</button></footer>
    )
}
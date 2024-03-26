const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('','','','')
}

contactForm.addEventListener('submit', sendEmail)

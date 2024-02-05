const fbiconElement = document.getElementById("fb");
const linkedInIconElement = document.getElementById("li");
const instaIconElement = document.getElementById("ig");
const form = document.querySelector(".contact");

//funktion för att knapparna  i menyn ska scrolla ner
document.querySelectorAll('nav a').forEach(scrollMenu => {
    
    scrollMenu.addEventListener('click', function(e) {
        e.preventDefault(); // Förhindra standard beteende av länken (att navigera till en annan sida)
        const targetId = this.getAttribute('href'); // Hämta målet från href-attributet
        const targetSection = document.querySelector(targetId); // Hitta det målet i dokumentet
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scrolla till det målet med smooth scroll
    });
});
// Lägg till en lyssnare för submit-händelsen på formuläret
form.addEventListener("submit", (e) => {
    // Förhindra standardbeteendet för formuläret att skicka till servern
    e.preventDefault();

    // Hämta värdena från input-fälten och ta bort eventuella inledande eller avslutande mellanslag
    const firstname = document.getElementById('fname').value.trim();
    const lastname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();


    // Kontrollera om alla fält är ifyllda
    if (firstname === '' || lastname === '' || email === '' || message === '') {
        // Visa ett meddelande till användaren att alla fält måste vara ifyllda för att skicka formuläret

    // Visa felmeddelanden om något fält är tomt
    document.getElementById('fname-error-msg').style.display = firstname === '' ? 'block' : 'none';
    document.getElementById('lname-error-msg').style.display = lastname === '' ? 'block' : 'none';
    document.getElementById('email-error-msg').style.display = email === '' ? 'block' : 'none';
    document.getElementById('error-msg').style.display = message === '' ? 'block' : 'none';

       
    } else {
        // Om alla fält är ifyllda, visa ett meddelande till användaren och skicka formuläret
       alert('Formuläret har skickats');

        // Återställ formulärfälten till sina ursprungliga värden
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
});


// Länk till fb sida 
fbiconElement.addEventListener("click", () => {
    window.location.href= "https://www.facebook.com/profile.php?id=576812221";
});

//länk till linkedIn sida
linkedInIconElement.addEventListener("click", () =>{
    window.location.href= "https://www.linkedin.com/in/sofia-pasco-smith-95710215a/";
});

//länk till instagram sida
instaIconElement.addEventListener("click", () =>{
    window.location.href="https://www.instagram.com/sofia.pasco/";
});


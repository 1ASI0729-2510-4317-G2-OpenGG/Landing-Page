// WhatsApp Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const whatsappForm = document.getElementById('whatsapp-form');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const profession = document.getElementById('profession').value;
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            if (!name || !email || !phone || !profession || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Construct WhatsApp message
            const whatsappNumber = '+11234567890'; // Replace with your actual WhatsApp number
            const text = `*New Contact from PsyMed Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Profession:* ${profession}%0A%0A*Message:*%0A${message}`;
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
            
            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');
            
            // Optional: Reset form after submission
            whatsappForm.reset();
        });
    }
    
    // Adding functionality to hero buttons
    const heroButtons = document.querySelectorAll('.button-group button');
    
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else if (sectionId === 'contact-section') {
                // If contact section is clicked but there's no specific contact-section ID
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}); 
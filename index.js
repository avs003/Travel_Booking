document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Check if all fields are filled
    var destination = document.getElementById("destination").value;
    var persons = document.getElementById("persons").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var description = document.getElementById("description").value;

   // Convert start date and end date strings to Date objects
   var startDateObj = new Date(startDate);
   var endDateObj = new Date(endDate);

   // Check if any field is empty
   if (!destination || !persons || !startDate || !endDate || !description) {
       alert("Please fill in all fields.");
       return;
   }

   // Check if end date is greater than start date
   if (endDateObj <= startDateObj) {
       alert("End date must be greater than start date.");
       return;
   }

   // All fields are filled and end date is greater than start date
   alert("Booking successful!");
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the register form
    const registerForm = document.getElementById('registerForm');

    // Add event listener for form submission
    registerForm.addEventListener('submit', function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Validate form fields
        if (validateForm()) {
            // If form is valid, you can proceed with registration
            alert('Registration successful!');
            // You can add code here to submit the form data to your backend server
            // For example: registerUser(registerForm);
            // Note: Implement the registerUser function according to your backend logic
        }
    });

    // Function to validate form fields
    function validateForm() {
        // Get form field values
        const fullname = document.getElementById('fullname').value;
        const contact = document.getElementById('contact').value;
        const dob = document.getElementById('dob').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('gender').value;

        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate full name
        if (fullname.trim() === '') {
            alert('Please enter your full name.');
            return false;
        }

        // Validate contact number
        if (contact.trim() === '') {
            alert('Please enter your contact number.');
            return false;
        }

        // Validate date of birth
        if (dob.trim() === '') {
            alert('Please enter your date of birth.');
            return false;
        }

        // Validate email
        if (email.trim() === '') {
            alert('Please enter your email address.');
            return false;
        } else if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Validate password
        if (password.trim() === '') {
            alert('Please enter a password.');
            return false;
        } else if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return false;
        }

        // Validate gender
        if (gender.trim() === '') {
            alert('Please select your gender.');
            return false;
        }

        // All fields are valid
        return true;
    }
});


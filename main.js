

// 

// Listen to submit form
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form 

function submitForm(e){
  e.preventDefault();

  // Get Values

  var name = getInputVal("name");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  // Save message
  //saveMessage(name, email, phone, message);

  // Show alert
  //document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear Form
  document.getElementById("contactForm").reset();

  // Call Send Email function
  sendEmail(name, email, phone, message);

}

// Function to get form Values
function getInputVal(id){
  return document.getElementById(id).value;
}

// save message to 
function saveMessage(name,email,phone,message) {
  var newMessageREf = messagesREf.push();
  newMessageREf.set({
    name: name,
    email: email,
    phone: phone, 
    message: message
  });
}

// Send Email Info - SMTP

/*function sendEmail(name, email, phone, message){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "milosndr@gmail.com",
    Password : "orunmila~~!+",
    To : 'milosndr@gmail.com',
    From : "milosndr@gmail.com",
    Subject : `${name} sent you a message`,
    Body : `Name: ${name} <br> Email: ${email} <br> Phone: ${phone} <br> Message: ${message}`,
  }).then(message => alert("Your message was successfully sent!"));
}*/
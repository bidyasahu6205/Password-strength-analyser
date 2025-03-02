document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // Stops form from submitting

    let password = document.getElementById("pwd").value;
    
    if (password.length < 6) {
        alert("Password is too weak!"); // Show alert if password is weak
    } else {
        alert("Password is strong!");
    }
});

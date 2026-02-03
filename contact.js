document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("response").innerText =
            "Please fill all fields.";
        return;
    }

    document.getElementById("response").innerText =
        "Thank you, " + name + ". Your message has been submitted.";

    document.getElementById("contactForm").reset();
});

// ProConnect contact form validation

function validateForm() {
    var form = document.forms[0];

    // Required fields cannot be empty
    if (form.firstname.value == "") {
        alert("Please enter your first name.");
        return false;
    }
    if (form.lastname.value == "") {
        alert("Please enter your last name.");
        return false;
    }
    if (form.email.value == "") {
        alert("Please enter your email address.");
        return false;
    }

    // Email must contain an @ and a . after it
    var email = form.email.value;
    if (email.indexOf("@") == -1 || email.indexOf(".") < email.indexOf("@")) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (form.city.value == "") {
        alert("Please enter your city.");
        return false;
    }
    if (form.zip.value == "") {
        alert("Please enter your ZIP code.");
        return false;
    }

    // ZIP must be exactly 5 digits
    var zip = form.zip.value;
    if (zip.length != 5 || isNaN(zip)) {
        alert("Please enter a valid 5-digit ZIP code.");
        return false;
    }

    if (form.role.value == "") {
        alert("Please tell us who you are.");
        return false;
    }
    if (form.message.value == "") {
        alert("Please enter a message.");
        return false;
    }

    // Capitalize the first letter of first name, last name, and city
    form.firstname.value = form.firstname.value.charAt(0).toUpperCase() + form.firstname.value.slice(1);
    form.lastname.value = form.lastname.value.charAt(0).toUpperCase() + form.lastname.value.slice(1);
    form.city.value = form.city.value.charAt(0).toUpperCase() + form.city.value.slice(1);

    return true;
}
var phone = prompt("Please enter your phone number");
// ************Phone Number Input Handling**************
var phoneRaw = phone.replace(/\D/g,'');
var phoneNumber = phoneRaw.substr(-10);
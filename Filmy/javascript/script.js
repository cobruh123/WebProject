
let spinnerWrapper = document.querySelector('.loader-wrapper');

window.addEventListener('load', function(){
	spinnerWrapper.style.display = 'none';
});

var audio = document.getElementById("myAudio");
function playAudio() { 
   audio.paused ? audio.play() : audio.pause();
} 

var elem = document.getElementById("sound_button");
function change_text(){
    if (elem.innerText=="Play Music") elem.innerText = "Stop Music";
    else elem.innerText = "Play Music";
}

var success_button = document.getElementById("contact_button");
var name = document.getElementById("contact_input_name_id");
var email = document.getElementById("contact_input_email_id");
var message = document.getElementById("contact_input_message_id");

function successOutput(){
	valid = true;
	if(name.value == "" || email.value =="" || message.value == ""){
		 alert ( "Please fill all boxes in the form" );
        valid = false;
	}else{
		alert ("Thank you for filling a form!");
	}
	return valid;
}



	

/* Send email */
/*function sendMessage(){
 
	const  name =  $('.name').val(),
		   email = $('.email').val(),
		   message = $('.message').val();

	var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Message: ' + message;
}
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "queenzz.company@gmail.com",
    Password : "C3588DD684C6A40A6095DB641FA911071E7F",
    To : 'queenzz.company@gmail.com',
    From : email,
    Subject : "Contact Form",
    Body : Body
}).then(
  message => alert(message  )
);

	*/
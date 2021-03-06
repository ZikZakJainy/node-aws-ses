function sendEmail() {
    const email = $('#email').val();
    const name =  $('#name').val();
    const message = $('#message').val();  
      if(email && name && message) {
        const data = {
          email: email,
          name: name,
          message: message
      };
  
      $.ajax({
        url: 'http://localhost:3500/user/sendmail',
        type:"post",
        dataType: 'json',
        data: data,
        crossDomain: true, 
        success:function(result){
            console.log("Email Status!");
            console.log(result);
            $('#successmessage').append($("<span>"+result.message+"</span>"));
            document.body.classList.add("sent");
        }
    });
  } else {
    alert('Please Enter Message with Receiver Name and Email Id!')
  }
}

sendLetter.addEventListener("click", sendEmail);

let display_msg=document.querySelector('#display-msg')
let submitted=document.querySelector('#submitted')
let text_Email=document.querySelector('#text-Email')
let regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 

function validate_email(){
    
    if(text_Email.value.length==0){
        
        display_msg.innerHTML='Email is Mandadory'
        display_msg.style.color="red";
        return false;
    }
    else {

        display_msg.innerHTML=''
        return true;
    }

}

submitted.addEventListener('click',function(){

    
    if(text_Email.value.length==0){
        alert("Email is Empty")
        return false;

    }else if(!text_Email.value.match(regx)){
        display_msg.innerHTML='<i>Email is not valid<i>'
        return false;

    }else{
        alert("Submitted Success")
        return true;
        
    }
})

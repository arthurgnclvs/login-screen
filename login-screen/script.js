let x = document.getElementById("password");

function showpassword(){
    if (x.type === 'password'){
        x.type = 'text'
    } else{
    x.type = 'password'
    }
}

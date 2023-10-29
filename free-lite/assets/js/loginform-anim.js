const logInGif = document.getElementById('logInGif');

function showTextemailGif(){
    logInGif.classList.add('animate');
    logInGif.src = '/free-lite/assets/images/Loginform_gifs/text.gif';
}
function showPasswdGif(){
    
    logInGif.src = '/free-lite/assets/images/Loginform_gifs/passwd.gif';
    logInGif.classList.add('animate');
}
function isAcceptedUsername(username) {
    var Regex = /^[A-Z0-9]{2,7}$/i ;
    return Regex.test(username) ;
}
// Cara menggunakan fungsi di atas
if (isAcceptedUsername("MAULANA")) {
    alert("Username Benar") ;
} else {
    alert("Username Salah") ;
}

function isAcceptedPassword(password){
    var Regex = /^[a-zA-Z0-9-#]{9,15}$/i;
    return Regex.test(password);
}
if(isAcceptedPassword("MAULana#997")){
    alert("password Benar");
}else{
    alert("password salah");
}
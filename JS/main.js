// Start Counter Section
var count =0;

function plus(){
    count++;
    document.getElementById("demo").innerHTML = count;
}    

function minus(){
    count--;
    document.getElementById("demo").innerHTML = count;
}    
// End Counter Section

// =========================
// =========================

// Start Converter Section
function convDollar(){
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");
    result.innerHTML = dollar *48.33;
    return false
}
// End Converter Section


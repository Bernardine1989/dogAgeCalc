document.getElementById("calculate").onclick = function() {
    var years = humanAge();
    document.getElementById("output").innerHTML = "<p style='color:#52de97'>Your dog is " + years + " years old!</p>";
}

function humanAge(dogAge) {
    dogAge = document.getElementById("dogAge").value;
    var age = ((dogAge - 2) * 4) + 21;
    return age;
}
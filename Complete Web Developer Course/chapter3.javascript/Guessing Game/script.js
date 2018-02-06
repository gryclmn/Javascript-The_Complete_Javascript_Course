document.getElementById("myButton").onclick = function() {
            
    var inputAnswer = document.getElementById("answer").value;
    var x = 6 * (Math.random());
    x = Math.floor(x);

    if (x == inputAnswer) {

        alert("That's correct!");

    } else {

        alert("That's wrong. The value was actually " + x);

    }
            
}
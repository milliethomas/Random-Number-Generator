document.addEventListener('DOMContentLoaded', function(){
    var generateBtn = document.getElementById('generateBtn');

    generateBtn.addEventListener('click', function() {
        var num = document.getElementById('num');
        var lower = document.getElementById('lower').value;
        var upper = document.getElementById('upper').value;
        console.log(lower)
        num.textContent = getRandom(lower, upper);
    });
});

function getRandom(lower, upper){
    return Math.floor(Math.random() * (upper - lower + 2) + lower);
}
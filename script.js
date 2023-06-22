document.addEventListener('DOMContentLoaded', function(){
    var generateBtn = document.getElementById('generateBtn');

    generateBtn.addEventListener('click', function() {
        var rand = Math.floor(Math.random() * 100) + 1;
        var num = document.getElementById('num');
        num.textContent = rand;
    });
});
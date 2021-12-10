window.onload = function(){
    var img = document.getElementById("popcat1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("pop.mp3");

    img.addEventListener('mousedown', function(){
        img.src = 'PopCat.jpeg';
        audio.play();
    });

    img.addEventListener('mouseup', function(){
        img.src = 'pC.jpeg';
        audio.play();
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
    increaseScore();
}
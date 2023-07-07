
// position taking from weight and height

let bullet =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let sound = false

score = 0;

function makeNewPosition(){

    let h = $('.box').height() - 50;

    let w = $('.box').width() - 50;

    let nh = Math.floor(Math.random() * h);

    let nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

// animate ball

function animateDiv(){

    let newq = makeNewPosition();

    $('.ball').animate({ top: newq[0], left: newq[1] }, 1200,   function(){

        animateDiv('.ball');

    });

    $('.start').hide();

}

// stop animation of box inside ball and screen will be blur

function stopanimateDiv(){

    $('.ball').stop();

    $('.start').show();

}

// score section show score and increase itself

function go(x){

    sound = true

    ballSound()

    $({score: 0}).animate({score: x},{

        duration: 0,

        step: function(now, fx){

            $("#score").html(score + Math.floor(now));

        },

        queue:false,

        complete: function(now, fx){

            score += x;

        }

    });

}

// function for sound effect gun

$(".box").on('click keydown', (e) => {

    decreaseBullet()

    if(sound === false){

        gun()

    }else{

        sound = false

    }

});

function gun(){

    let audio = $("#gun-sound")[0];

    audio.play();

}

// function for sound effect ball sound

function ballSound(){

    let audio = $("#click-sound")[0];

    audio.play();

}

// cursor create

$(document).on("mousemove", function (f){

    let cursor = $(".cursor");

    cursor.attr(

        "style",

        "top:" + (f.pageY - 4) + "px; left:" + (f.pageX - 4) + "px;"

    );

});

initBullet = () => {

    bullet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    bullet.forEach((v) => {

        $('.all-bullet').append(`<div class="canva"></div>`)

    })

}

decreaseBullet = () =>{

    bullet.shift(1)

    $('.all-bullet').html('')

        bullet.forEach((v) => {

        $('.all-bullet').append(`<div class="canva"></div>`)

    })

    if(bullet.length === 0 ){

        $('.ball').stop();

        reset()

    }

}

function reset(){

    $('.reset').show();

}

function reload(){

    location.reload()

}
function Sound(src,loop,volume) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.loop = loop;
    this.sound.style.display = "none";
    this.sound.volume = volume;
    document.body.appendChild(this.sound);
    
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

var mus0 = new Sound("Sons/Musica1.mp3",true,1);
var mus1 = new Sound("Sons/Musica2.mp3",true,0.3);
var mus2 = new Sound("Sons/mus2.mp3",true,0.3);
var mus3 = new Sound("Sons/mus3.mp3",true,0.3);
var step = new Sound("Sons/step.wav",false,0.5);
var pulo = new Sound("Sons/pulo.mp3",false,1);
var rocket = new Sound("Sons/rocket.wav",false,0.2);
var pop = new Sound("Sons/pop.flac",false,0.7);
var spike = new Sound("Sons/spike.wav",false,0.7);
var morte = new Sound("Sons/morte.wav",false,0.7);
var button = new Sound("Sons/button.wav",false,0.7);
var door = new Sound("Sons/door.wav",false,0.7);
var door2 = new Sound("Sons/door2.wav",false,0.7);
var box = new Sound("Sons/box.wav",false,0.7);
var hagalaz = new Sound("Sons/hagalaz.mp3",false,0.7);
var strength = new Sound("Sons/strength.mp3",false,0.7);
var achievement = new Sound("Sons/achievement.ogg",false,0.5);
var simeozawarudo = new Sound("Sons/EPG.mp3",false,0.2);
var quebra = new Sound("Sons/break.mp3",false,0.2);
var dinheiros = new Sound("Sons/dinheiros.wav",false,1);
var victory = new Sound("Sons/victory.wav",false,1);
var clock = new Sound("Sons/clock.wav",false,1);
var crimson = new Sound("Sons/crimson.mp3",false,1);
var finalizacao = new Sound("Sons/final.mp3",false,1);

function Sons() {
    if (botaoP == true && emBotao == false && calculou == false) {
        button.stop();
        button.play();
        botaoP = false;
    }

    if (fase == 0) {
        mus0.play();
    }
    else if (fase == 1) {
        mus0.stop();
        if (rocketP == true) {
            rocket.play();
            rocketP = false
        }
    }
    else if (fase == 2) {
        mus1.play();
    }
    else if (fase == 4) {
        mus2.play();
        mus1.stop()
    }
    else if (fase == 5) {
        mus2.stop();
    }
    else if (fase == 6) {
        mus3.play();
        mus2.stop()
    }
    else if (fase == 100) {
        mus3.stop();
    }
}
//Camera do jogo
var camera = {
    posX: -400,
    posY: 0,
    width: cnv.width,
    height: cnv.height,

    esquerda: function() {
        return this.posX + (this.width * 0,25);
    },

    direita: function () {
        if (Noname.mvDown == false) {
            return this.posX + (this.width * 0,75);
        }
    },

    cima: function () {
        if (Noname.mvDown == false) {
            return this.posY + (this.height * 0,25);
        }
    },
}

function camera_pos() {
    if (Noname.posX + Noname.height > camera.cima() || Noname.mvDown == false) {
        camera.posY = Noname.posY + Noname.height - (400);
    }
    if (Noname.posX < camera.esquerda()) {
        camera.posX = Noname.posX - 400;
    }
    if (Noname.mvRight == true && calculando == true) {
        dir = true;
        camera.posX = paredes[0].posX - 300;
    }

    else {
        dir = false;
    }

    if (Noname.posX + Noname.width > camera.direita() && dir == false) {
        camera.posX = Noname.posX + Noname.width - (400);
    }
    
    if (Noname.mvDown == true) {
        camera.posY = choesFase[chaoI].posY - 100;
    }

    

    if (fase >= 2 && fase != 3 && fase !=5 && fase != 7 && fase < 100) {
        ctx.translate(-camera.posX, -camera.posY);
    }
}
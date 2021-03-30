var finaliza = true;
var parte = 0;
var pos = 0;
var posY = 3000;
var troca = true;

function final() {
    mus3.stop();
    finalizacao.play();
    ctx.fillStyle = "black"
    ctx.clearRect(0,0,cnv.width,cnv.height);
    var img = new Image();
    if (parte == 0) {
        img.src = "sprites/Quarto3.png";
        var width = 800;
        var height = 500;
        posY = 0;
    }
    if (parte == 1) {
        var width = 6400;
        var height = 1700;
        img.src = "sprites/Cenario.png";
        if (troca == true) {
            posY = -1200;
            troca = false;
        }
    }
    if (parte == 2) {
        var width = 6400;
        var height = 1500;
        img.src = "sprites/Cenario1.png";
        if (troca == true) {
            posY = 30;
            troca = false;
        }
    }
    if (parte == 3) {
        var width = 6400;
        var height = 1500;
        img.src = "sprites/Cenario2.jpg";
        if (troca == true) {
            posY = 30;
            troca = false;
        }
    }
    if (parte == 4) {
        var width = 800;
        var height = 500;
        img.src = "sprites/telaP.png";
        if (troca == true) {
            posY = 0;
            troca = false;
        }
    }
        
    var cena = {
        x: 0,
        y: posY,

        draw: function(ctx) {
            cena.img = img;
            ctx.drawImage(cena.img,0,0,width,height,pos,posY,width,height,);
            pos--;
        }
    }
    cena.draw(ctx);
    if (parte == 0) {
        janela.draw(ctx);
        porta.draw(ctx);
        janela.posX--;
        porta.posX--;
        if (pos == -800) {
            parte = 1;
            pos = 0;
            troca = true;
        }
        ctx.fillText('Música: Delta Sleep - Afterimage',200,470);

    }

    if (parte == 1) {
        ctx.fillText('Um jogo criado por Rafael Petry e Nicolas Cardoso',100,470);
        if (pos <= -4400 && posY < -250) {
            posY++;
            for (var i = 0; i < portas.length; i++) {
                portas[i].draw(ctx);
                portas[i].posY++;
            }
            for (var j = 0; j < botoes.length; j++) {
                botoes[j].draw(ctx);
                botoes[j].posY++;
            }
            for (var k = 0; k < esps.length; k++) {
                esps[k].desenha(ctx);
                esps[k].posY++;
            }
        }
        for (var i = 0; i < portas.length; i++) {
            portas[i].draw(ctx);
            portas[i].posX--;
        }
        for (var j = 0; j < botoes.length; j++) {
            botoes[j].draw(ctx);
            botoes[j].posX--;
        }
        for (var k = 0; k < esps.length; k++) {
            esps[k].desenha(ctx);
            esps[k].posX--;
        }

        if (pos == -3283) {
            parte = 2;
            pos = 0;
            troca = true;
        }
    }
    if (parte == 2) {
        for (var i = 0; i < portas1.length; i++) {
            portas1[i].draw(ctx);
            portas1[i].posX--;
        }
        for (var j = 0; j < botoes1.length; j++) {
            botoes1[j].draw(ctx);
            botoes1[j].posX--;
        }
        for (var k = 0; k < esps1.length; k++) {
            esps1[k].desenha(ctx);
            esps1[k].posX--;
        }
        for (var l = 0; l < calcsEPG.length; l++) {
            calcsEPG[l].desenha(ctx);
            calcsEPG[l].posX--;
        }
        if (pos == -2954) {
            parte = 3;
            pos = 0;
            troca = true;
        }
        ctx.fillText('Agradecimentos especiais: Humberto Oberrather e Rodrigo Petry',10,470);
    }
    if (parte == 3) {
        for (var i = 0; i < portas2.length; i++) {
            portas2[i].draw(ctx);
            portas2[i].posX--;
        }
        for (var j = 0; j < botoes2.length; j++) {
            botoes2[j].draw(ctx);
            botoes2[j].posX--;
        }
        for (var k = 0; k < esps2.length; k++) {
            esps2[k].desenha(ctx);
            esps2[k].posX--;
        }
        for (var l = 0; l < calcsEPG1.length; l++) {
            calcsEPG1[l].desenha(ctx);
            calcsEPG1[l].posX--;
        }
        for (var n = 0; n < caixas.length; n++) {
            if (caixas[n].func != 'c') {
                caixas[n].desenha(ctx);
                caixas[n].posX--;
            }
        }
        if (pos == -1517) {
            parte = 4;
            pos = 0;
            troca = true;
        }
    }
    if (parte == 4) {
        ctx.fillStyle = "white";
        ctx.fillText('Obrigado por jogar nosso jogo!',100,470);
        c++;
        if (c == 480) {
            fase = 100;
            finalizacao.stop();
            c = 0;
            parte = 5;
        }
    }
}
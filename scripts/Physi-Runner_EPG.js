function EPG(posX,posY,alt) {
    this.posX = posX;
    this.posY = posY;
    this.srcX = 0;
    this.srcY = 0;
    this.width = 250;
    this.height = 80;
    this.alt = alt;

    img = new Image();
    img.src = "sprites/EPG.png";
    this.img = img;
    this.counter = 0;

    this.desenha = function(ctx) {
        ctx.fillStyle = "#000000"
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height);
        this.anima();
    };

    this.anima = function() {
        this.counter++;
        if (this.counter > 72) {
            this.counter = 0;
        }
        this.srcX = Math.floor(this.counter/9) * this.width;
    };

    this.calculo = function() {
        if (Noname.posY - 10 <= this.posY + this.height && Noname.posY + Noname.height > this.posY &&
            Noname.posX + Noname.width >= this.posX && Noname.posX <= this.posX + this.width) {
            if (resolva > 0 && Noname.n_pulos == 0) {
                Noname.posX = (this.posX + this.width)-180;
                Noname.posY = this.posY + this.height - 10;
                contador1++;
                if (contador1 == 1 && resolva == 20) {
                    runa = true;
                    img_runa.src = "sprites/Isa.png"
                    var rng = Math.floor((Math.random() *569) + 1);
                    if (rng >= 50 && rng <= 69) {
                        simeozawarudo.play();
                    }
                    else {
                        clock.play();
                    }
                }
                
                if (contador1%60 == 0 && parado == false) {
                    resolva--;
                    clock.play();
                }
                Noname.gravidade = 0;
                Noname.speed = 0;
                EPGC = true;
            }
            else if (resolva == 0 && quebrar == false) {
                Noname.speed = 6;
                Noname.gravidade = 1.5;
                contador1 = 0;
            }
            if (parou == false) {
                numero = "";
                temPonto = false;
                parou = true;
            }
            if (random1 == false) {
                grav = Math.floor((Math.random() *30) + 1);
                epg = Math.floor((Math.random() *30) + 1);
                if (fase == 4) {
                    if (calcsEPG[k].alt == "b") {
                        aleatorio = Math.floor((Math.random() *2));
                        alturas[k] = alturasBaixas[aleatorio];
                    }
                    else if (calcsEPG[k].alt == "m") {
                        aleatorio = Math.floor((Math.random() *3));
                        alturas[k] = alturasMedias[aleatorio];
                    }
                    else {
                        aleatorio = Math.floor((Math.random() *5));
                        alturas[k] = alturasAltas[aleatorio];
                    }
                    respostasMass[k] = epg/(grav*alturas[k]);
                    if (respostasMass[k].toString().length <= 3) {
                        random1 = true;  
                    }
                }
                else if (fase == 6) {
                    if (calcsEPG1[k].alt == "b") {
                        aleatorio = Math.floor((Math.random() *2));
                        alturas[k] = alturasBaixas[aleatorio];
                    }
                    else if (calcsEPG1[k].alt == "m") {
                        aleatorio = Math.floor((Math.random() *3));
                        alturas[k] = alturasMedias[aleatorio];
                    }
                    else {
                        aleatorio = Math.floor((Math.random() *5));
                        alturas[k] = alturasAltas[aleatorio];
                    }
                    respostasMass[k] = epg/(grav*alturas[k]);
                    if (respostasMass[k].toString().length <= 3) {
                        random1 = true;  
                    }
                }
                  
            }
            ctx.fillStyle = "#191970"
            linhaY.posX = (Noname.posX + Noname.width - 55);
            linhaY.posY = Noname.posY + Noname.height;
            linhaY.height = choesFase[chaoI].posY - (Noname.posY + Noname.height);
            linhaY.draw(ctx);
            if (resolva > 0) {
                ctx.fillText("h = "+alturas[k], linhaY.posX -80,linhaY.posY+30);
                ctx.fillText("g = "+grav, linhaY.posX +25,linhaY.posY+60);
                if (n_errosEPG >= 1) {
                    ctx.fillText("Epg = m*g*h" , Noname.posX + 120,Noname.posY + 80);
                }
                
                if (n_errosEPG > 1) {
                    ctx.fillText(epg + " = m*"+grav+"*"+alturas[k], Noname.posX + 120,Noname.posY + 110);
                }
                ctx.fillText("Epg = " + epg+"J" , linhaY.posX + 30,choesFase[chaoI].posY-25);
                ctx.fillText("m = " + numero, Noname.posX + 120,Noname.posY + 140);
                if (Noname.mvDown == false) {
                    ctx.fillStyle = "red";
                    ctx.fillText("Aperte S para ver a Epg", Noname.posX - 260,linhaY.posY+76);
                }
            }   
            if (calculouEPG == true) {
                k++;
                random1 = false;
                calculouEPG = false;
            }   
        }
    };
}

var calc = new EPG(1215,10,"b");
var calc1 = new EPG(225,407,"a");
var calc2 = new EPG(5655,60,"m");
var calc3 = new EPG(4665,570,"m");
var calc4 = new EPG(5353,1083,"b");
var calc5 = new EPG(1230,10,"b");
var calc6 = new EPG(3570,560,"b");
var calc100 = new EPG(2000000,20000,"b");

calcsEPG = [calc,calc1,calc2,calc3,calc4,calc100];
calcsEPG1 = [calc5,calc6,calc100];
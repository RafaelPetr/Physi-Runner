function Caixa(posX,posY,func) {
    this.posX = posX;
    this.posY = posY;
    this.rX = posX;
    this.rY = posY;
    this.height = 170;
    this.width = 170;
    this.srcX = 0;
    this.srcY = 0;
    this.aceleracao = 0;
    this.speed = 0;
    this.soco = false;
    this.bateu = false;
    this.counter = 0;
    this.func = func;
    this.lel = false;
    img = new Image();
    if (this.func == 'c') {
        img.src = "sprites/CaixaSLN.png";
    }
    if (this.func != 'c') {
        img.src = "sprites/Caixa.png";
    }

    img2 = new Image();
    img2.src = "sprites/Laguz.png";
    this.img2 = img2;
    
    this.img = img;

    this.desenha = function() {
        for (var a = 0; a < choesFase.length; a++) {
            if (this.posX > choesFase[a].posX && 
                this.posX < choesFase[a].posX + choesFase[a].distancia &&
                this.posY + this.height == choesFase[a].posY) {
                    this.chaoX = choesFase[a].posX;
                    this.chaoD = choesFase[a].distancia;
                }
        }

        if (reset == true && this.posX + this.width >= this.chaoX &&
            this.posX <= this.chaoX + this.chaoD && this.func != 'c') {
            this.posX = this.rX;
            this.posY = this.rY;
            this.soco = false;
            this.bateu = false;
            this.counter = 0;
            this.srcX = 0;
            this.speed = 0;
            this.aceleracao = 0;
        }

        for (var m = 0; m < paredes.length; m++) {
            par = paredes[m];
            if (this.posX + this.width < par.posX || this.posX > par.posX + par.width) {
                if (this.speed == 0 && this.posX == this.rX && (this.soco == true || calculouSLN == true)) {
                    strength.play();
                }
                this.speed += this.aceleracao/paredes.length;
                this.posX += this.speed/paredes.length;
                if (this.soco == true && emCaixa == true && Noname.n_pulos == 1 && caixaI == caixas.indexOf(this)) {
                    Noname.posX += this.speed/paredes.length;
                }
            }

            else {
                this.aceleracao = 0;
                this.speed = 0;
                this.anima();
            }

            if (emCaixa == true) {
                if (this.bateu == true && caixaI == caixas.indexOf(this)) {
                    emCaixa = false;
                }
            }

            if (this.posX <= this.chaoX && 
                this.func != 'c') {
                this.speed = 0;
                this.aceleracao = 0;
                this.posX = this.chaoX + 40;
                this.lel = true;

                if (this.counter <= 35) {
                    this.anima();
                }
            }
            if (portasFase[i-1] != undefined) {
                if (this.posX <= portasFase[i-1].posX+portasFase[i-1].width && 
                    this.func != 'c') {
                    this.speed = 0;
                    this.aceleracao = 0;
                    this.posX = portasFase[i-1].posX+portasFase[i-1].width + 40;
                    this.lel = true;

                    if (this.counter <= 35) {
                        this.anima();
                    }
                }
            }
            if (this.posX + this.width >= this.chaoX + this.chaoD && 
                this.func != 'c') {
                this.speed = 0;
                this.aceleracao = 0;
                this.posX = -this.width + this.chaoX + this.chaoD - 40;
                this.lel = true;

                if (this.counter <= 35) {
                    this.anima();
                }
            }
        }
        if (this.lel == true && Noname.posX + Noname.width > this.chaoX && Noname.posX < this.chaoX + this.chaoD) {
            ctx.fillText("'R' reseta a caixa", Noname.posX + 270,Noname.posY + 200);
        }
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height);
    };

    this.anima = function() {
        if (this.func == "c") {
            this.bateu = true;
            this.counter += 0.8;
            if (this.counter == 0.8) {
                box.play();
            }
            if (this.counter == 5) {
                Noname.mvUp = false;
                Noname.pulo = 27;
            }
            if (this.counter > 25) {
                bat = true;
            }
            if (this.counter > 35) {
                this.counter = 36;
                caixas.splice(caixas.indexOf(this),1)
            }

            this.srcX = Math.floor(this.counter/5) * this.width;
        }
    };

    this.calculo = function() {
        if (this.bateu == false) {
            if (Noname.posX + Noname.width > this.posX && Noname.posX + Noname.width < this.posX + this.width && emCaixa == false &&
                Noname.posY < this.posY + this.height && Noname.posY + Noname.height > this.posY + this.height) {
                Noname.posY = this.posY + this.height;
                Noname.velocidade = 0;
                Noname.pulo = 27;
                Noname.jump_counter = 0;
            } 
            else if (Noname.posY + Noname.height -8 > this.posY &&
                Noname.posY < this.posY + this.height) {
                if (Noname.posX + Noname.width > this.posX && Noname.posX + Noname.width < this.posX + this.width && emCaixa == false) {
                    Noname.posX = this.posX - Noname.width;
                    if (space == true && this.func != 'c') {
                        runa = true;
                        img_runa.src = "sprites/Laguz.png"
                    }
                    if (func == 'c') {
                        if (space == true) {
                            Noname.mvRight = false;
                            calculando = true;
                        }
                    }
                    else {
                        if (space == true) {
                            this.aceleracao = 0.05;
                            this.soco = true;
                        }
                    }
                    
                }
                if (calculando == true && resolvaSLN > 0) {
                    
                    contan++;
                    if (contan%60 == 0) {
                        resolvaSLN--;
                        clock.play();
                    }
                    if (random2 == false) {
                        massa = Math.floor((Math.random() *30) + 1);
                        aceleracao = Math.floor((Math.random() *30) + 1);
                        respostasSLN[n] = massa*aceleracao;
                        if (respostasSLN[n].toString().length <= 3) {
                            random2 = true;  
                        }    
                    }
                    if (this.func == 'c') {
                        Noname.mvLeft = false;
                        Noname.mvUp = false;
                        space = false;
                        ctx.fillStyle = "#2E8B57";
                        linhaSLN.posX = this.posX + this.width + 20;
                        linhaSLN.posY = this.posY;
                        linhaSLN.width = (paredes[0].posX - 20) - linhaSLN.posX;
                        linhaSLN.draw(ctx);
                        ctx.fillText("a = "+aceleracao + " m/s²", linhaSLN.posX + 20, linhaSLN.posY -20);
                        ctx.fillText("F = " + numero, Noname.posX + (Noname.width/2) - 10, Noname.posY - 20);
                        ctx.fillText("m = "+ massa + "g",this.posX + (this.width/2) - 40, (this.posY + this.height-75));
                        if (n_errosSLN > 1) {
                            ctx.fillText("F = " + massa+"*"+aceleracao, Noname.posX + (Noname.width/2) - 10, Noname.posY - 40);
                        }
                        if (n_errosSLN >= 1) {
                            ctx.fillText("F = " + 'm'+"*"+'a', Noname.posX + (Noname.width/2) - 10, Noname.posY - 60);
                        }
                        if (calculouSLN == true) {
                            this.aceleracao = aceleracao;
                            calculando = false;
                            n++;
                            random2 = false;
                            calculouSLN = false;
                        }
                    }
                }
                else {
                    resolvaSLN = 20;
                    calculando = false;
                }
                if (Noname.posX < this.posX + this.width && Noname.posX + Noname.width > this.posX && emCaixa == false) {
                    Noname.posX = this.posX + this.width;
                    if (space == true && this.func != 'c') {
                        runa = true;
                        img_runa.src = "sprites/Laguz.png"
                    }
                    if (func == 'c') {

                    }
                    else {
                        if (space == true) {
                            this.aceleracao = -0.05;
                            this.soco = true;
                        }
                    }
                }
            }   
            if (Noname.posX + Noname.width > this.posX +30 && Noname.posX < this.posX + this.width-30) {
                if (Noname.posY + Noname.height < this.posY) {
                    Noname.n_pulos = 0;
                }

                if (Noname.posY + Noname.height <= this.posY &&
                    Noname.posX + Noname.width > this.posX +30 &&
                    Noname.posX < this.posX + this.width-30) {
                    caixaI = caixas.indexOf(this);
                    emCaixa = true;
                }

                if (Noname.posY + Noname.height > this.posY && this.posY > Noname.posY) {
                    emCaixa = true;
                    EPGC = false;
                    quebrou = false;
                    parou = false;
                    Noname.mvDown = false;
                    Noname.posY = this.posY - Noname.height;
                    Noname.gravidade= 1.5;
                    Noname.n_pulos = 1;
                }

                if (Noname.posY - Noname.height < this.posY && Noname.n_pulos == 1) {
                    Noname.velocidade = 0;
                    Noname.jump_counter = 0;
                }
                if (inst == true) {
                    Noname.mvLeft = false;
                    Noname.mvUp = false;
                }
                if (this.aceleracao != 0) {
                    runa = false;
                }
            }
            else {
                emCaixa = false;
            }
        }
    };
}

function Parede(posX,posY,quebrar) {
    this.posX = posX;
    this.posY = posY;
    this.height = 220;
    this.width = 140;
    this.srcX = 0;
    this.srcY = 0;
    this.counter = 0;
    this.counter1 = 0;
    this.quebrar = quebrar
    this.estourando = false;
    
    img = new Image();
    img.src = "sprites/Pedra_hagalaz.png";
    this.img = img;

    img1 = new Image();
    img1.src = "sprites/Pedra_hagalaz_est.png";
    this.img1 = img1;

    

    this.desenha = function() {
        for (var m = 0; m < caixas.length; m++) {
            cai = caixas[m];
            if (bat == false) {
                if (segundos %2 == 0) {
                    if (Noname.posX >= this.posX - 450 && Noname.posX <= this.posX + 450) {
                        hagalaz.play();
                    }
                    this.anima();
                }
                else { 
                    this.counter = 0;
                }
                
                ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height);
                if(Noname.posX + Noname.width > this.posX) {
                    if (this.estourando == false) {
                        Noname.posX = this.posX - Noname.width;
                    }
                }
            }
            else { 
                if (this.counter <= 300) {
                    ani = true;
                    this.anima();
                    ctx.drawImage(this.img1,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height);
                }
                else {
                    paredes.splice(0,1);
                    bat = false;
                }
            }
        }
    };

    this.anima = function() {
        if (bat == false) {
            this.counter += 0.5;
            if (this.counter > 90) {
                this.counter = 0;
            }
            this.srcX = Math.floor(this.counter/10) * this.width;
        }
        else {
            this.estourando = true;
            this.counter += 0.5;
            this.counter1 += 0.5;
            this.srcX = Math.floor(this.counter1/5) * this.width;
        }
        
    };
}

var caixa = new Caixa(600,218,'c');
var caixa2 = new Caixa(1796,1012,'e');
var caixa3 = new Caixa(4411,1324,'e');
var caixa4 = new Caixa(5083,1008,'c');
var caixa5 = new Caixa(5800,1008,'c');
var caixa100 = new Caixa(40000,280000);
var caixas = [caixa,caixa2,caixa3,caixa4,caixa5,caixa100];
var caixasCalc = [];

var parede = new Parede(1000,168);
var parede1 = new Parede(5600,958);
var parede2 = new Parede(6200,958);
var parede100 = new Parede(10000,110);
var paredes = [parede,parede1,parede2,parede100]
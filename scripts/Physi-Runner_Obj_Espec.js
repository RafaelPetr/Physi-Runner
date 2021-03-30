function Botao(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.srcX = 0;
    this.srcY = 0;
    this.width = 132;
    this.height = 22;
    this.counter = 0;
    img = new Image();
    img.src = "sprites/botao.png";
    this.img = img;

    this.draw = function(ctx) {
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height)
        this.anima();
    }

    this.anima = function() {
        if (Noname.posX + Noname.width - 30 > this.posX && Noname.posX < this.posX + this.width - 30) {
            if (Noname.posY + Noname.height < this.posY + this.height && Noname.posY + Noname.height > this.posY + this.height - 10 &&
                Noname.n_pulos == 1) {
                if (this.counter == 0) {
                    button.play();
                }
                this.counter++;
            }
        }
        else if (EPGC == false) {
            this.counter = 0;
        }
        if (this.counter > 9) {
            this.counter = 9;
        }
        this.srcX = Math.floor(this.counter/5) * this.width;
    }
    this.func = function() {
        if (Noname.posX + Noname.width - 30 > this.posX && Noname.posX < this.posX + this.width - 30) {
            if (Noname.posY + Noname.height < this.posY + this.height && Noname.posY + Noname.height > this.posY + this.height - 10 &&
                Noname.n_pulos == 1) {
                ctx.fillStyle = "#dc143c";
                emBotao = true;
                botaoP = true;
            }
            else {
                emBotao = false;
            }
        }
        else if (EPGC == false) {
            if (calculando == false) {
                numero = "";
            }
            
            temPonto = false;
            emBotao = false;
        }
    }
}

function Porta(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.srcX = 0;
    this.srcY = 0;
    this.width = 75;
    this.height = 297;
    this.counter = 0;
    img = new Image();
    this.img = img;

    this.draw = function(ctx) {
        if (fase == 1 || fase == 98 && parte == 0) {
            this.img.src = "sprites/porta.png";
            this.width = 74;
        }
        else {
            this.img.src = "sprites/porta1.png";
            this.width = 73.7;
        }
        ctx.drawImage(this.img,this.srcX+0.5,this.srcY,this.width-0.3,this.height,this.posX,this.posY,this.width,this.height);
        if (fase == 1) {
            this.anima();
        }
        else if (fase > 1) {
            this.anima1();
        }
    }

    this.anima = function() {
        this.counter += 3;
        if (this.counter > 39) {
            this.counter = 39;
        }
        else {
            door.play();
        }
        this.srcX = Math.floor(this.counter/10) * this.width;
    }
    this.anima1 = function() {
        if (emBotao == false && calculou == false) {
            this.counter -= 3;
            if (this.counter < 0) {
                this.counter = 0;
            } 
            else {
                door2.play();
            }
        }
        else {
            linha.posX = Noname.posX + Noname.width + 30;
            linha.posY = Noname.posY + (Noname.height/2);
            linha.width = portasFase[i].posX-Noname.posX;
            portasFase[i].counter++;
            if (portasFase[i].counter > 39) {
                portasFase[i].counter = 39;
            }
            else {
                door.play();
            }
        }
        if (calculou == true) {
            this.counter = 0;
        }
        this.srcX = Math.floor(this.counter/10) * this.width;
    }
}

function Chao(posX,posY,distancia,height) {
    this.posX = posX;
    this.posY = posY;
    this.distancia = distancia - this.posX;
    this.height = height;

    this.colisaoY = function() {
        if (emCaixa == false && lento == false) {
            Noname.speed = 6;
        }

        if (Noname.posY + Noname.height < this.posY && emCaixa == false) {
            Noname.n_pulos = 0;
        }

        if (Noname.posY + Noname.height >= this.posY) {
            EPGC = false;
            quebrou = false;
            emCaixa = false;
            parou = false;
            Noname.mvDown = false;
            Noname.posY = this.posY - Noname.height;
            if (quebrar == false) {
                Noname.gravidade= 1.5;
                Noname.n_pulos = 1;
            }
            else {    
                quebra.play();
                quebrar = false;
                if (fase == 4) {
                    if (passou == 4) {
                        passou = 0;
                        fase++;
                        mus1.stop();
                        i = 0; 
                        k = 0;
                        respostas = [];
                        respostasMass = [];
                        chaoI = 0;
                        Noname.posX = 0;
                        passou = 0;
                        victory.play();
                        random1 = false;
                    }
                    if (passou % 2 == 0) {
                        if (passou != 3) {
                            choes3.splice(0, chaoI+2);
                        }
                        if (fase == 4) {
                            choesFase = choes4;
                        }
                        chaoI = choesFase.length-1;
                    }
                    else {
                        choes4.splice(chaoI-1, choes4.length);
                        if (fase == 4) {
                            choesFase = choes3;
                        }
                        chaoI = 0;
                    }
                }
                else if (fase == 6) {
                    if (passou == 0) {
                        choes5.splice(0, chaoI);
                        choesFase = choes6;
                        chaoI = 5;
                    }
                    if (passou == 1) {
                        choes6.splice(chaoI, 1);
                    }
                }
                queb.shift();
                if (fase == 4 || fase == 6 && passou < 1) {
                    passou++;
                }
            }
            if (saltou == true) {
                step.play();
                saltou = false;
            }
        }

        if (Noname.posY - Noname.height < this.posY && Noname.n_pulos == 1) {
            Noname.velocidade = 0;
            Noname.pulo = 27;
            Noname.jump_counter = 0;
        }
        if (inst == true) {
            Noname.mvRight = false;
            Noname.mvLeft = false;
            Noname.mvUp = false;
        }
    };

    this.colisaoX = function() {
        if (passou % 2 == 0 && choesFase[chaoI+1] != undefined && Noname.posY + Noname.height > choesFase[chaoI+1].posY &&
            Noname.posY < choesFase[chaoI+1].posY &&
            Noname.posX + Noname.width > choesFase[chaoI+1].posX) {
            Noname.posX = choesFase[chaoI+1].posX - Noname.width;   
        }
        else if (passou % 2 == 1 && choesFase[chaoI+1] != undefined && Noname.posY + Noname.height > choesFase[chaoI+1].posY &&
            Noname.posX + Noname.width > choesFase[chaoI+1].posX) {
            Noname.posX = choesFase[chaoI+1].posX - Noname.width; 
        }
        if (choesFase[chaoI-1] != undefined && Noname.posY + Noname.height > choesFase[chaoI-1].posY && 
            Noname.posX < choesFase[chaoI-1].posX + choesFase[chaoI-1].distancia) {
                Noname.posX = choesFase[chaoI-1].posX + choesFase[chaoI-1].distancia;
        }
    };
}

function Teto(posX,posY,distancia) {
    this.posX = posX;
    this.posY = posY;
    this.width = distancia - this.posX;

    this.colisao = function() { 
        if (Noname.posY <= this.posY && Noname.posY >= this.posY - 10 &&
            Noname.posX + Noname.width >= this.posX && Noname.posX < this.posX + this.width) {
                Noname.posY = this.posY + 10;
                Noname.n_pulos = 0;
                Noname.velocidade = 0;
                Noname.velocidade += Noname.gravidade;
                Noname.posY += Noname.velocidade;
            }
    };
}

function Para(posX,posY,width,height) {
    this.posX = posX;
    this.posY = posY;
    this.width = width
    this.height = height;

    this.colisao = function() { 
        if (Noname.posY < this.posY + this.height && Noname.posY > this.posY) {
            if (Noname.posX + Noname.width > this.posX && Noname.posX < this.posX + this.width && Noname.mvRight == true && Noname.mvLeft == false) {
                Noname.posX = this.posX - Noname.width - 5;
            }
            else if (Noname.posX < this.posX + this.width && Noname.posX + Noname.width > this.posX && Noname.mvLeft == true && Noname.mvRight == false) {
                Noname.posX = this.posX + this.width + 5;
            }
        }

    };
}

function Espinhos(posX,posY,tim,tem) {
    this.posX = posX;
    this.posY = posY;
    this.srcX = 0;
    this.srcY = 0;
    this.tim = tim;
    this.tem = tem;
    this.anim = false;
    
    if (this.tim == true) {
        this.width = 200;
        img = new Image();
        img.src = "sprites/EspinhosReduzido.png";
        this.img = img;
    }
    else {
        this.width = 400;
        img = new Image();
        img.src = "sprites/Espinhos.png";
        this.img = img;
    }
    this.height = 75;
    this.counter = 0;
    

    this.desenha = function(ctx) {
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height);
        if (segundos % 2 == 0 && aut == true) {
            this.anim = true;
        }
        if (this.anim == true) {
            this.anima();
        }   
    };

    this.anima = function() {
        this.counter++;
        if (this.counter > 36) {
            this.counter = 0;
            this.anim = false;
            aut = false;
        }
        this.srcX = Math.floor(this.counter/4) * this.width;
    }

    this.colisao = function() {

        if (Noname.posY + Noname.height > this.posY && Noname.posY < this.posY) {
            if (Noname.posX + Noname.width > this.posX &&
                Noname.posX < this.posX + this.width) {
                morreu = true;
            }
        }
    };
    
}

function ObsLentidao(posX,posY,v) {
    this.posX = posX;
    this.posY = posY;
    this.height = 50;
    this.width = 50;
    this.srcX = 0;
    this.srcY = 0;
    this.height1 = 32;
    this.width1 = 32;
    this.srcX1 = 0;
    this.srcY1 = 0;
    this.bateu = false;
    this.counter = 0;
    this.counter1 = 0;
    this.v = v;

    img = new Image();
    img1 = new Image();
    img2 = new Image();
    if (this.v == 'l') {
        img.src = "sprites/Obstaculo_lentidao.png";
        this.img = img;
        img1.src = "sprites/Bolhas.png";
        this.img1 = img1;
    }

    else {
        img.src = "sprites/Obstaculo_rapidez.png";
        this.img = img;
        img1.src = "sprites/Bolhas1.png";
        this.img1 = img1;
    }
    
    this.desenha = function(ctx) {
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height);
        if (this.bateu == false) {
            ctx.drawImage(this.img1,this.srcX1,this.srcY1,this.width1,this.height1,this.posX + 11,this.posY -30,this.width1,this.height1);
        }
        
        this.anima();
    };

    this.anima = function() {
        if (this.bateu == true) {
            this.counter++;
            if (this.counter == 20) {
                pop.play()
            }
            if (this.counter > 24) {
                this.counter = 24;
            }
            this.srcX = Math.floor(this.counter/3) * this.width;
        }
        else {
            this.counter1++;
            if (this.counter1 > 35) {
                this.counter1 = 0;
            }
            this.srcX1 = Math.floor(this.counter1/5) * this.width1;
        }
    }

    this.colisao = function() {

        if (this.bateu == false && Noname.posY + Noname.height > this.posY && Noname.posY < this.posY) {
            if (Noname.posX + Noname.width > this.posX + 30 &&
                Noname.posX < this.posX + this.width - 30) {
                lento = false;
                Noname.speed = 6;
                tL = 0;
                contL = 0;
                this.bateu = true;
                
                if (this.v == "r") {
                    img_runa.src = "sprites/Perdhro.png"
    
                }
                else {
                    img_runa.src = "sprites/Perdhro_inv.png"
                }
                runa = true;
                lento = true;
            }
        }
        if (lento == true && tL < 5) {
            contL++;
            if (contL == 60*obsLs.length) {
                contL = 0;
                tL++;
                if (tL == 5) {
                    lento = false;
                    if (this.v == "l") {
                        Noname.speed += 2;
                    }
                    else {
                        Noname.speed -= 4;
                    }
                }
            }
            if (tL == 0 && contL == 1) {
                if (this.v == "l") {
                    Noname.speed -= 2;
                }
                else {
                    Noname.speed += 4;
                }
            }
            
        }
    };
}

function Othila(posX,posY,tipo) {
    this.posX = posX;
    this.posY = posY;
    this.height = 103;
    this.width = 82;
    this.srcX = 0;
    this.srcY = 0;
    this.bateu = false;
    this.counter = 0;
    this.tipo = tipo;

    var img = new Image();
    img.src = "sprites/Othila.png";
    this.img = img;
    
    this.desenha = function(ctx) {
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height);
        this.anima();
    };

    this.anima = function() {
        if (this.bateu == false) {
            this.counter++;
            if (this.counter > 400) {
                this.counter = 0;
            }
            this.srcX = Math.floor(this.counter/80) * this.width;
        }
        else {
            this.counter++;
            if (this.counter > 400) {
                this.counter = 400;
            }
            this.srcX = Math.floor(this.counter/80) * this.width;
        }
    }

    this.colisao = function() {

        if (this.bateu == false && Noname.posY + Noname.height > this.posY && Noname.posY < this.posY) {
            if (Noname.posX + Noname.width > this.posX + 30 &&
                Noname.posX < this.posX + this.width - 30) {
                this.bateu = true;
                nova_inf = true;
                achievement.play();
                if (this.tipo == "inst") {
                    inf_inst++;
                    adcInst = true;
                }
                else {
                    inf_cient++;
                    adcCient = true;
                }
            }
        }
    };
}
function Sprite(img) {
    this.srcX = this.srcY = 0;
    this.width = 100;
    this.height = 170;
    this.posX = 0;
    this.posY = 300
    this.img = img;
    this.mvLeft = this.mvRight = this.mvUp = this.mvDown = false;
    this.speed = 6;
    this.paredeR = false;
    this.paredeL = false;

    this.gravidade = 1.5;
    this.velocidade = 0;
    this.pulo = 27;
    this.n_pulos = 1;

    this.stand_counter = 0;
    this.run_counter = 0;
    this.jump_counter = 0;

    this.draw = function(ctx) {
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height)
        this.anima();
    };

    this.move = function() {

        if (this.mvLeft == true && this.paredeL == false) {
            this.posX -= this.speed;
        }
        if (this.mvRight == true && this.paredeR == false && calculando == false) {
            this.posX += this.speed;
        }
        if (this.mvUp == true && this.n_pulos > 0) {
            this.velocidade = -this.pulo;
            resolva = 20;
            this.n_pulos = 0;
        }

        if (this.n_pulos == 0) {
            this.velocidade += this.gravidade;
            this.posY += this.velocidade;
            if (saltou == false) {
                pulo.play();
            }
            saltou = true;
        }
        else {
            resolva = 20;
        }
        
        
    };

    this.anima = function() {
        if (this.mvUp == false && this.mvDown == false && this.mvLeft == false && this.mvRight == false && this.n_pulos == 1 || (this.mvRight == true && this.mvLeft == true) || 
        calculando == true) {
            this.stand_counter++;
            this.run_counter = 0;
            if (this.n_pulos == 1) {
                this.jump_counter = 0;
            }
            if (this.stand_counter >= 100) {
                this.stand_counter = 0;
            }
            this.srcX = Math.floor(this.stand_counter/10) * this.width;
        }

        if (this.mvUp == false && this.mvDown == false && (this.mvLeft == true || this.mvRight == true ) && this.n_pulos == 1 &&
        calculando == false) {
            this.run_counter++
            this.stand_counter = 0;
            if (this.n_pulos == 1) {
                this.jump_counter = 0;
            }
            
            if (this.run_counter >= 78) {
                this.run_counter = 18;
            }
            if (this.run_counter == 1) {
                step.play();
            }
            if (this.run_counter == 30) {
                step.play();
            }
            if (this.run_counter == 60) {
                step.play();
            }
            this.srcX = Math.floor(this.run_counter/6) * this.width;
        }

        if (this.n_pulos < 1) {
            this.jump_counter++;
            this.run_counter = 0;
            this.stand_counter = 0;
            if (this.jump_counter >= 30) {
                this.jump_counter = 29;
            }
            this.srcX = Math.floor(this.jump_counter/5) * this.width;
        }
    };
}

function Background(fase) {
    this.posX = 0;
    this.posY = 0;
    this.srcX = 0;
    this.srcY = 0;
    this.width = 800;
    this.height = 500;
    this.fase = fase;
    if (this.fase == 0) {
        img = new Image();
        img.src = "sprites/main_title.png";
        this.img = img;
    }
    if (this.fase == 1) {
        img = new Image();
        img.src = "sprites/Quarto3.png";
        this.img = img;
    }
    if (this.fase == 2) {
        this.width = 6400;
        this.height = 1700;
        img.src = "sprites/Cenario.png";
        this.img = img;
        this.posY = -1200;
    }
    if (this.fase == 4) {
        this.width = 6400;
        this.height = 1500;
        img.src = "sprites/Cenario1.png";
        this.img = img;
        this.posY = 60;
    }
    if (this.fase == 6) {
        this.width = 6400;
        this.height = 1500;
        img.src = "sprites/Cenario2.jpg";
        this.img = img;
        this.posY = 60;
    }
    if (this.fase == 100) {
        this.width = 800;
        this.height = 500;
        img.src = "sprites/Cabine.jpg";
        this.img = img;
    }
    if (this.fase == 101 || this.fase == 102) {
        this.width = 800;
        this.height = 500;
        img.src = "sprites/telaP.png";
        this.img = img;
    }
    this.draw = function(ctx) {
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height);
    }
}

function Instrucao() {
    this.posX = 0;
    this.posY = 0;
    this.srcX = 0;
    this.srcY = 0;
    this.width = 800;
    this.height = 500;
    this.inst_counter = 0;
    this.cient_counter = 0;
    this.jorn_counter = 0;

    this.draw = function(ctx,fase) {
        this.fase = fase;
        if (this.fase >= 1) {
            img = new Image();
            img.src = "sprites/Notas.png";
            this.img = img;
        }
    
        canvas.onmousemove = function (evt) {
            mouse = {
                x: evt.pageX,
                y: evt.pageY,
            }   
        }
        
        if (mouse != undefined) {
            if (mouse.x <= 270 + canvas.getBoundingClientRect().x) {
                this.cient_counter -= 2;
                this.jorn_counter -= 2;
                this.inst_counter += 2;
                w = inf_inst;
                for (var i = 0; i < notas_inst.length; i++) {
                    if (inf_inst > 1 && notas_inst[i].novo == false) {
                        if (w > 1) {
                            if (contador3 > w*60) {
                                contador3 = 0;
                            }
                            w--;
                        }
                    }
                }
                if (this.inst_counter > 60) {
                    this.inst_counter = 60;
                }
            } 
            else if (mouse.x > 270 + canvas.getBoundingClientRect().x && mouse.x <= 540 + canvas.getBoundingClientRect().x) {
                this.jorn_counter -= 2;
                this.inst_counter -= 2;
                this.cient_counter += 2;
                w = inf_cient;
                for (var i = 0; i < notas_cient.length; i++) {
                    if (inf_cient > 1 && notas_cient[i].novo == false) {
                        if (w > 1) {
                            if (contador3 > w*60) {
                                contador3 = 0;
                            }
                            w--;
                        }
                    }
                }
                if (this.cient_counter > 60) {
                    this.cient_counter = 60;
                }
            }
            else {
                this.cient_counter -= 2;
                this.inst_counter -= 2;
                this.jorn_counter += 2;
                w = inf_jorn;
                for (var i = 0; i < notas_jorn.length; i++) {
                    if (inf_jorn > 1 && notas_jorn[i].novo == false) {
                        if (w > 1) {
                            if (contador3 > w*60) {
                                contador3 = 0;
                            }
                            w--;
                        }
                    }
                }
                if (this.jorn_counter > 60) {
                    this.jorn_counter = 60;
                }
            }
            if (this.cient_counter < 0) {
                this.cient_counter = 0;
            }
            if (this.inst_counter < 0) {
                this.inst_counter = 0;
            }
            if (this.jorn_counter < 0) {
                this.jorn_counter = 0;
            }
        }
        if (this.img != undefined) {
            ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height);
        }
        if (this.inst_counter >= 60) {
            for (var z = 0; z < inf_inst; z++) {
                
                notas_inst[z].draw(ctx);
                if (notas_inst[z].emCima == true) {
                    notas_inst[z].click();
                }
            }
        } 
        if (this.cient_counter >= 60) {
            for (var f = 0; f < inf_cient; f++) {
                    
                notas_cient[f].draw(ctx);
                if (notas_cient[f].emCima == true) {
                    notas_cient[f].click();
                }
            }
        }
        if (this.jorn_counter >= 60) {
            for (var f = 0; f < inf_jorn; f++) {
                    
                notas_jorn[f].draw(ctx);
                if (notas_jorn[f].emCima == true) {
                    notas_jorn[f].click();
                }
            }
        }
    }
}

function Nota(posX,posY,texto,qm) {
    this.posX = posX;
    this.posY = posY;
    this.height = 25;
    this.texto = texto;
    this.emCima = false;
    this.qm = qm;
    this.novo = true;
    this.n = true;
    this.abriu = false;
    this.contador = 0;

    this.draw = function(ctx) {
        if (this.novo == true) {
            if (contador3 >= 60*w) {
                if (color == "#140090") {
                    color = "#dc143c";
                }
                else {
                    color = "#140090"
                }
                contador3 = 0;
            }
            contador3++;
            ctx.fillStyle = color;
            if (this.posY + canvas.getBoundingClientRect().y >= mouse.y && 
            mouse.y >= this.posY + canvas.getBoundingClientRect().y - this.height) {
                this.novo = false;
            }
            ctx.fillText(this.texto,this.posX,this.posY);
        }
        else {
            adc = false;
            if (this.posY + canvas.getBoundingClientRect().y >= mouse.y && 
            mouse.y >= this.posY + canvas.getBoundingClientRect().y - this.height) {
                ctx.fillStyle = "#2300ff";
                this.emCima = true;
            }
            else {
                ctx.fillStyle = "#140090";
                this.emCima = false;
            }
            ctx.fillText(this.texto,this.posX,this.posY);
        }
    };

    this.click = function() {
        canvas.onclick = function() {
            if (inst == true) {
                clicou = true;
            }
        }
        if (clicou == true) {
            if (this.qm == "inst") {
                i_img = "Cenarios/"+this.qm + notas_inst.indexOf(this)+".jpg";
            }
            else if (this.qm == "cient") {
                i_img = "Cenarios/"+this.qm + notas_cient.indexOf(this)+".jpg";
            }
            else if (this.qm == "jorn") {
                i_img = "Cenarios/"+this.qm + notas_jorn.indexOf(this)+".jpg";
            }
            img4.src = i_img;
            this.img = img4;
            if (this.n == true) {
                this.n = false;
            }
        }
        if (i_img = undefined) {
            clicou = false;
        }
    };
}

function Janela(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.srcX = 0;
    this.srcY = 0;
    this.width = 143;
    this.height = 148;
    this.counter = 0;
    img = new Image();
    img.src = "sprites/janela.png";
    this.img = img;

    this.draw = function(ctx) {
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height)
        this.anima();
    }

    this.anima = function() {
        this.counter++;
        if (this.counter > 56) {
            this.counter = 32;
        }
        this.srcX = Math.floor(this.counter/8) * this.width;
    }
}

function Relogio(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.srcX = 0;
    this.srcY = 0;
    this.width = 57;
    this.height = 65;
    img = new Image();
    img.src = "sprites/relogio.png";
    this.img = img;

    this.draw = function(ctx) {
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height)
    }
}

function Linha(posX,posY,width) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = 15;

    this.draw = function(ctx) {
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}

function LinhaY(posX,posY,height) {
    this.posX = posX;
    this.posY = posY;
    this.width = 15;
    this.height = height;

    this.draw = function(ctx) {
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}

function Quebravel(posX,posY,width,height) {
    this.posX = posX;
    this.posY = posY;
    this.width = width - posX;
    this.height = height;

    this.draw = function(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}

function Jord(posX,posY) {
    this.posX = posX;
    this.posY = posY;
    this.srcX = 0;
    this.srcY = 0;
    this.width = 300;
    this.height = 277;
    img = new Image();
    img.src = "sprites/Jord.png";
    this.img = img;
    this.counter = 0;
    this.counter1 = 0;
    this.counter2 = 0;

    this.draw = function(ctx) {
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height)
        this.anima();
    }

    this.anima = function() {
        this.counter++;
        if (this.counter > 24 && destroi == false) {
            this.counter = 24;
        }
        else {
            ctx.fillStyle = "red";
            this.counter = 32;
            this.counter1++;
            this.counter2++;
            if (this.counter1 > 69) {
                ctx.fillText("CONTINUA...", 330,400);
                this.counter1 = 69;
                if (pontuacao == 2200 && time < "2:30") {
                    if (inf_jorn == 2) {
                        inf_jorn++;
                    }
                }
            }
            if (this.counter2 > 10000) {
                ctx.fillText("É us guri da 221", 20,40);
                this.counter2 = 10000;
            }
            
        }
        this.srcX = Math.floor(this.counter/8) * this.width;
    }
}

function Wunjo_inv(posX,posY) {
    this.posX = posX;
    this.posY = posY;
    this.srcX = 0;
    this.srcY = 0;
    this.width = 260;
    this.height = 210;
    img = new Image();
    img.src = "sprites/Wunjo_Inv.png";
    this.img = img;
    this.counter = 0;

    this.draw = function(ctx) {
        c++;
        if (c < 180) {
            crimson.play();
        }
        if (c > 30) {
            ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height)
            this.anima();
        }
        
    }

    this.anima = function() {
        if (c > 40 && pa == false) {
            this.counter++;
            if (this.counter == 20) {
                this.counter = 20;
                pa = true;
            }
            this.srcX = Math.floor(this.counter/4) * this.width;
        }
        if (pa == true && c > 120) {
            fase = 102;
            mus3.play();
        }
    }
}
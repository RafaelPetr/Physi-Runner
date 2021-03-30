window.onload = function() {

    init();

    function init() {
        loop();
    }
    
    function loop() {
        window.requestAnimationFrame(loop,cnv);
        cnv.style.border = "1px solid #000";
        anima_personagem();
        update();
        draw();
    }

    function update() {
        if (fase < 98 || fase >= 100 && fase != 102) {
            if (fase > 0) {
                if (fase != 3 && fase !=5 && fase != 7) {
                    Noname.move();
                    tempo();
                }
                chao_colisao();
            }
        }
    }

    function draw() {
        if (fase < 98 || fase >= 100) {
            ctx.clearRect(0,0,cnv.width,cnv.height);
            ctx.save();
            camera_pos();
            
            cria_Cenario();
            if (fase !=5) {
                calculo();
            }
                
            Sons();
            if ((fase == 1 || fase == 100) && Noname.posX >= 700) {
                ctx.drawImage(spacebar,0,0,272,143,Noname.posX - Noname.width - 80, Noname.posY - 150,272,143);
            }
            else if (fase == 1 && Noname.posX < 700) {
                ctx.drawImage(wasd,0,0,280,185,Noname.posX - Noname.width + 10, Noname.posY - 200,280,185);
            }
            if (fase == 2 && Noname.posX <= 10)  {
                if (passou == 0) {
                    ctx.drawImage(spacebar,0,0,272,143,Noname.posX + (Noname.width/2) - 10, Noname.posY - 150,272,143);
                }
                if (passou == 1) {
                    ctx.drawImage(spacebar,0,0,272,143,Noname.posX + (Noname.width/2) - 10, Noname.posY - 150,272,143);                    
                }
            }
            if (fase == 2 && Noname.posX + Noname.width >= 6400)  {
                if (passou == 2) {
                    ctx.drawImage(spacebar,0,0,272,143,Noname.posX - Noname.width - 10, Noname.posY - 150,272,143);
                }
            }
            if (fase == 6 && Noname.posX + Noname.width >= 6400)  {
                ctx.drawImage(spacebar,0,0,272,143,Noname.posX - Noname.width - 10, Noname.posY - 150,272,143);
            }
            if (Noname.posX + Noname.width >= 1988) {
                if (passou == 0) {
                    ctx.drawImage(spacebar,0,0,272,143,Noname.posX - Noname.width - 10, Noname.posY - 150,272,143);

                }
            }
        
            if (fase > 0) {
                if (fase != 3 && fase !=5 && fase != 7 && fase < 101) {
                    Noname.draw(ctx);
                }
                obstaculos();
                ctx.restore();
                ctx.font = "bold 25px arial";
                ctx.fillStyle = "#DC143C";
                if (fase < 100) {
                    if (segundos == 0 && minutos != 0) {
                        time = minutos + pontos + segundos+'0';
                    }
                    else {
                        time = minutos + pontos + segundos;
                    }
                    if (fase != 3 && fase !=5 && fase != 7) {
                        ctx.fillText("TEMPO: "+time,10,30);
                        ctx.fillText("PONTOS: "+ pontuacao,600,30);
                    }
                }
                if (cont_runa > 60) {
                    runa = false;
                }
                if (runa == true) {
                    cont_runa++;
                    ctx.drawImage(img_runa,0,0,50,50,0,445,50,50);
                }
                else {
                    cont_runa = 0;
                }

                if (nova_inf == true && volt_count == false) {
                    ctx.drawImage(inf_img,inf_desb_srcX,inf_desb_srcY,350,110,600,100,350,110);
                    desb_counter++;
                    if (desb_counter > 40) {
                        desb_counter = 40;
                        cont_inf++;
                        if (cont_inf == 180) {
                            volt_count = true;
                        }   
                    }
                    inf_desb_srcX = Math.floor(desb_counter/5) * 350;
                }
                else if (volt_count == true) {
                    ctx.drawImage(inf_img,inf_desb_srcX,inf_desb_srcY,350,110,600,100,350,110);

                    desb_counter--;
                    if (desb_counter < 0) {
                        nova_inf = false;
                        volt_count = false;
                        cont_inf = 0;
                        desb_counter = 0;
                    }
                    inf_desb_srcX = Math.floor(desb_counter/5) * 350;
                }
                
                if (EPGC == true && Noname.mvDown == false) {
                    ctx.fillStyle = "#191970";
                    relogio.posX = 320;
                    relogio.posY = 0;
                    relogio.draw(ctx);
                    ctx.fillText("= " + resolva + "s", relogio.posX + 60,relogio.posY + 10 + (relogio.height/2));
                }
                if (calculando == true) {
                    ctx.fillStyle = "#2E8B57";
                    relogio.posX = 320;
                    relogio.posY = 0;
                    relogio.draw(ctx);
                    ctx.fillText("= " + resolvaSLN + "s", relogio.posX + 60,relogio.posY + 10 + (relogio.height/2));
                }
            }
            if (inst == true) {
                cria_Instrucao();
            }
            else {
                ins.inst_counter = 0;
                ins.cient_counter = 0;
                ins.jorn_counter = 0;
            }
            if (clicou == true && img4.src != "") {
                inst = false;   
                if (img4.src != undefined) { 
                    ctx.drawImage(img4,0,0,800,500,0,0,800,500);
                }
                if (mouse.x >= 970 && mouse.y > 50 && mouse.y < 250) {
                    ctx.fillStyle = "white";
                }
                else {
                    ctx.fillStyle = "#dc143c";
                }
                ctx.fillRect(750, 0, 50, 50);  
                
                if (parado == true) {
                    if (contador4 == 30) {
                        if (color1 == "gray") {
                            color1 = "lightgray";
                        }
                        else {
                            color1 = "gray"
                        }
                        contador4 = 0;
                    }
                    contador4++;
                    ctx.fillStyle = color1;
                }
                if (fase != 3 && fase !=5 && fase != 7) {
                    ctx.fillText("TEMPO: "+time,630,480);
                }
                canvas.onclick = function() {
                if (mouse.x >= 970 && mouse.y > 50 && mouse.y < 250) {
                    clicou = false;
                        parado = false;
                        img4 = new Image();
                    }
                }
            }
            else {
                clicou = false;
            }
        }
        else {
            if (finaliza == true) {
                ctx.clearRect(0,0,cnv.width,cnv.height);
                finaliza = false;
            }
            final();
        }
    }
}
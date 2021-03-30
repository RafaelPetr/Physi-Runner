function calculo() {    
    if (fase == 1 || fase == 2) {
        portasFase = portas;
        botoesFase = botoes;
        distancias = distancias1;
    }
    else if (fase == 4) {
        portasFase = portas2;
        botoesFase = botoes2;
        distancias = distancias2;
    }
    else if (fase == 6) {
        portasFase = portas3;
        botoesFase = botoes3;
        distancias = distancias3;
    }
    else if (fase == 100 || fase == 98 || fase == 99 || fase == 5 || fase == 7) {
        portasFase = portas1;
        botoesFase = botoes1;
        distancias = [];
    }
    
    if (fase > 1) {
        if (random == false) {
            if (distancias[i] <= 3) {
                aleatorio = Math.floor((Math.random() *2));
                tempos[i] = temposBaixos[aleatorio];
            }
            else if (distancias[i] > 3 && distancias[i] < 8) {
                aleatorio = Math.floor((Math.random() *5));
                tempos[i] = temposMedios[aleatorio];
            }
            else {
                aleatorio = Math.floor((Math.random() *10));
                tempos[i] = temposAltos[aleatorio];
            }
            respostas[i] = (distancias[i]/tempos[i]);
            if (respostas[i].toString().length <= 3) {
                random = true;  
            }  
        }
        for (var j = 0; j < portasFase.length; j++) {
            portasFase[j].draw(ctx);
        }
        

        for (var k = 0; k < portasFase.length; k++) {
            botoesFase[k].draw(ctx);
        }
        if (botoesFase[i] != undefined) {
            botoesFase[i].func();
        }
        
        if (i > 0 && portasFase[i-1] != undefined) {
            portasFase[i-1].draw(ctx);
        }
        if (calculou == true) {
            Noname.posX = portasFase[i].posX + portasFase[i].width;
            i++;
            random = false;
            calculou = false;
        }
        if (i > 0) {
            if (portasFase[i-1] != undefined) {
                if (Noname.posX < portasFase[i-1].posX + portasFase[i-1].width && numeros[i-1] == respostas[i-1] && i != 0 &&
                    Noname.posY < portasFase[i-1].posY + portasFase[i-1].height && portasFase[i-1].posY < Noname.posY + Noname.height) {
                    emBotao = false;
                    Noname.posX = portasFase[i-1].posX + portasFase[i-1].width;
                }
            }
        }
        if (emBotao == false && calculou == false && numeros[i] == undefined) {
            if (Noname.posX + Noname.width > portasFase[i].posX &&
                Noname.posY + Noname.height < portasFase[i].posY + portasFase[i].height && portasFase[i].posY < Noname.posY + Noname.height) {
                Noname.posX = portasFase[i].posX - Noname.width;
            }
        } 
        if (emBotao == true && tempos[i] != undefined) {
            linha.draw(ctx);
            ctx.fillText("d = "+distancias[i] + " m", linha.posX + 20, linha.posY -20);
            ctx.fillText("v = " + numero, Noname.posX + (Noname.width/2) - 10, Noname.posY - 20);
            ctx.fillText("t = "+ tempos[i] + " s",linha.posX + 20, linha.posY +40);
            if (n_erros > 1) {
                ctx.fillText("v = " + distancias[i]+"/"+tempos[i], Noname.posX + (Noname.width/2) - 10, Noname.posY - 40);
            }
            if (n_erros >= 1) {
                ctx.fillText("v = " + 'd'+"/"+'t', Noname.posX + (Noname.width/2) - 10, Noname.posY - 60);
            }
        }
        
        if (fase == 4) {
            for (var l = 0; l < calcsEPG.length; l++) {
                calcsEPG[l].desenha(ctx);
                calcsEPG[l].calculo();
            } 
        }
        else if (fase == 6) {
            for (var l = 0; l < calcsEPG1.length; l++) {
                calcsEPG1[l].desenha(ctx);
                calcsEPG1[l].calculo();
            }
        }
        if (fase == 6) {
            for (var j = 0; j < caixas.length; j++) {
                caixas[j].desenha(ctx);

                if (emCaixa == true) {
                    caixas[caixaI].calculo();
                }
                else {
                    caixas[j].calculo();
                }
                
            }
            paredes[0].desenha(ctx);
        }
        
    }
}
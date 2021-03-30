function chao_colisao() {
    if (fase == 1 || fase == 100) {
        choesFase = choes;
    }
    if (fase == 2) {
        parasFase = paras;
        tetosFase = tetos;
    }
    else if (fase == 4) {
        parasFase = paras1;
        tetosFase = tetos1;
        queb = queb1;
    }
    else if (fase == 6) {
        parasFase = paras2;
        tetosFase = tetos2;
        queb = queb2;
    }
    if (fase == 2) {
        if (passou % 2 == 0) {
            choesFase = choes1;
        }
        else {
            choesFase = choes2;
        }
    }
    if (fase == 4) {
        if (passou % 2 != 0) {
            choesFase = choes4;
        }
        else {
            choesFase = choes3;
        }
    }
    if (fase == 6) {
        if (passou % 2 == 0) {
            choesFase = choes5;
        }
        else {
            choesFase = choes6;
        }
    }
    
    if (fase == 2 || fase == 4 || fase == 6) {
        for (var h = 0; h < tetosFase.length; h++) {
            tetosFase[h].colisao();
        }
        for (var l = 0; l < parasFase.length; l++) {
            parasFase[l].colisao();
        }
    }
    

    if (morreu == true) {

        if (fase == 2) {
            for (var u = 0; u < obsLs.length; u++) {
                obsLs[u].bateu = false;
                obsLs[u].counter = 0;
                obsLs[u].srcX = 0;
                lento = false;
                contL = 0;
                tL = 0;
            }
        }
        else {
            for (var u = 0; u < obsLs1.length; u++) {
                obsLs1[u].bateu = false;
                obsLs1[u].counter = 0;
                obsLs1[u].srcX = 0;
                lento = false;
                contL = 0;
                tL = 0;
            }
        }
        
        if (passou % 2 != 0) {
            if (fase != 6) {
                Noname.posX = choesFase[choesFase.length -1].posX + choesFase[choesFase.length -1].distancia - Noname.width;
                Noname.posY = choesFase[choesFase.length -1].posY - Noname.height;
                chaoI = choesFase.length -1;
            }
            else {
                Noname.posX = choesFase[4].posX + choesFase[4].distancia - Noname.width;
                Noname.posY = choesFase[4].posY - Noname.height;
                chaoI = 4;
            }
        }
        else {
            if (fase == 2) {
                if (i == 3) {
                    Noname.posX = choesFase[chaoI-1].posX;
                    Noname.posY = choesFase[chaoI-1].posY - Noname.height;
                    chaoI--;
                }
                else {
                    Noname.posX = choesFase[4].posX;
                    Noname.posY = choesFase[4].posY - Noname.height;
                    chaoI = 4;
                }
            }
            else if (fase == 4) {
                if (i == 1) {
                    Noname.posX = choesFase[0].posX;
                    Noname.posY = choesFase[0].posY - Noname.height;
                    chaoI = 0;
                }
                if (i == 2) {
                    Noname.posX = choesFase[6].posX;
                    Noname.posY = choesFase[6].posY - Noname.height;
                    chaoI = 6;
                }
            }
            
        }
        
        emCaixa = false;
        Noname.n_pulos = 0;
        morte.play();
        morreu = false;
    }

    if (choesFase[chaoI] != undefined) {
        choesFase[chaoI].colisaoY();
        choesFase[chaoI].colisaoX();
        
        if (choesFase[chaoI-1] != undefined && choesFase[chaoI].posY < choesFase[chaoI-1].posY) {
            if (Noname.posX + Noname.width - 30 < choesFase[chaoI].posX &&
                Noname.posY + Noname.height - 8 < choesFase[chaoI-1].posY &&
                Noname.mvLeft == true) {
                chaoI--;
            }
            if (choesFase[chaoI+1] != undefined && 
                Noname.posX > choesFase[chaoI].posX - 30 + choesFase[chaoI].distancia &&
                Noname.posY + Noname.height - 8 < choesFase[chaoI+1].posY &&
                Noname.mvRight == true) {    
                chaoI++;
            }
        }
        else {
            if (choesFase[chaoI-1] != undefined && Noname.posX + 30 < choesFase[chaoI].posX &&
                Noname.posY + Noname.height - 8 < choesFase[chaoI-1].posY &&
                Noname.mvLeft == true) {
                chaoI--;
            }
            if (choesFase[chaoI+1] != undefined && 
                Noname.posX + Noname.width - 30 > choesFase[chaoI].posX + choesFase[chaoI].distancia &&
                Noname.posY + Noname.height - 8 < choesFase[chaoI+1].posY &&
                Noname.mvRight == true) {
                chaoI++;
            }
        }
    }  
}

function obstaculos() {
    if (fase == 2) {
        espsFase = esps;
    }
    else if (fase == 4) {
        espsFase = esps1;
    }
    else if (fase == 6) {
        espsFase = esps2;
    }
    if (fase == 2 || fase == 4 || fase == 6) {
        for (var j = 0; j < espsFase.length; j++) {
            if (fase == 2 || fase == 4 || fase == 6) {
                if (espsFase[j].tim == true) {
                    if (espsFase[j].tem == true && segundos % 2 == 0) {
                        espsFase[j].colisao();
                        espsFase[j].desenha(ctx);
                        if (espsFase[j].counter == 1) {
                            play = true;
                        }
                        if (Noname.posX >= espsFase[j].posX - 450 && Noname.posX <= espsFase[j].posX + 450) {
                            if (espsFase[j].counter == 1) {
                                spike.play();
                            }
                        }
                    }
                    else if (espsFase[j].tem == false && segundos % 2 == 1) {
                        espsFase[j].colisao();
                        espsFase[j].desenha(ctx);
                        if (Noname.posX >= espsFase[j].posX - 450 && Noname.posX <= espsFase[j].posX + 450) {
                            if (play == true) {
                                spike.play();
                                play = false;
                            }
                        }
                    }
                    else if (espsFase[j].tem == undefined) {
                        espsFase[j].colisao();
                        espsFase[j].desenha(ctx);
                    }
                }
                else {
                    espsFase[j].colisao();
                    espsFase[j].desenha(ctx);
                }
                if (fase == 2) {
                    for (var b = 0; b < oths.length; b++) {
                        oths[b].colisao();
                        oths[b].desenha(ctx);
                    }
                }
                else if (fase == 4) {
                    for (var b = 0; b < oths1.length; b++) {
                        oths1[b].colisao();
                        oths1[b].desenha(ctx);
                    }
                }
                else if (fase == 6) {
                    for (var b = 0; b < oths2.length; b++) {
                        oths2[b].colisao();
                        oths2[b].desenha(ctx);
                    }
                }
            }
        }
    }
    

    if (fase == 2) {
        for (var l = 0; l < obsLs.length; l++) {
            obsLs[l].colisao();
            obsLs[l].desenha(ctx);
        }
    }
    else if (fase == 4) {
        for (var l = 0; l < obsLs1.length; l++) {
            obsLs1[l].colisao();
            obsLs1[l].desenha(ctx);
        }
    }
}
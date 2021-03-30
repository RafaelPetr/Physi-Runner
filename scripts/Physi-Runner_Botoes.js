window.addEventListener("keydown",keydownHandler,false);
window.addEventListener("keyup",keyupHandler,false);

function keydownHandler(e) {
    if (e.keyCode == 27) {
        if (fase != 0 && img4.src == '' && fase != 0 && fase != 101) {
            inst = !inst;
            parado = !parado;
        }
        if (fase == 0) {
            fase = 1;
            rocketP = true;
            Noname.posX = 0;
        }
        random = false;
        random1 = false;
        random2 = false;
        if (random == false) {
            if (fase == 2) {
                distancias = distancias1;
            }
            else if (fase == 4) {
                distancias = distancias2;
            }
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
        if (random1 == false) {
            grav = Math.floor((Math.random() *30) + 1);
            epg = Math.floor((Math.random() *30) + 1);
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
        if (random2 == false) {
            massa = Math.floor((Math.random() *30) + 1);
            aceleracao = Math.floor((Math.random() *30) + 1);
            respostasSLN[n] = massa*aceleracao;
            if (respostasSLN[n].toString().length <= 3) {
                random2 = true;  
            }    
        }
    }
    if (inst == false) {
        switch(e.keyCode) {
            case 82:
                reset = true;
                    for (var z = 0; z < caixas.length; z++) {
                        caixas[z].lel = false;
                    }
                break;
            case esquerda:
                if (calculando == false) {
                    Noname.mvDown = false;
                    Noname.mvLeft = true;
                }
                else if (dir == false) {
                    Noname.mvRight = false;
                }
                break;
            case direita:
                Noname.mvDown = false;
                Noname.mvRight = true;
                break;
            case baixo:
                if (EPGC == true) {
                    Noname.mvDown = true;
                }
                break;
            case cima:
                if (calculando == false) {
                    Noname.mvDown = false;
                    Noname.mvUp = true;
                }
                else if (dir == false) {
                    Noname.mvRight = false;
                }
                break;
            case espaco:
                if (calculando == false) {
                    space = true;
                }
                else {
                    Noname.mvRight = false;
                    Noname.mvLeft = false;
                }
                if (fase == 2 && Noname.posX <= 10)  {
                    if (passou == 0) {
                        fase = 1;
                        Noname.posX = 699;
                    }
                    if (passou == 1) {
                        choesFase = choes1;
                        passou = 2;
                        chaoI = 2;
                        Noname.posX = choesFase[chaoI].posX;
                        Noname.posY = choesFase[chaoI].posY - Noname.height
                    }
                }
                if (fase == 2 && Noname.posX + Noname.width >= 6400) {
                    fase++;
                    victory.play();
                    mus1.stop();
                    passou = 0;
                    chaoI = 0;
                    Noname.posX = choesFase[chaoI].posX;
                    Noname.posY = choesFase[chaoI].posY - Noname.height
                    respostas = [];
                    i = 0;
                }
                if (fase == 6 && Noname.posX + Noname.width >= 6400) {
                    passou = 0;
                    chaoI = 0;
                    Noname.posX = choesFase[chaoI].posX;
                    Noname.posY = choesFase[chaoI].posY - Noname.height
                    fase = 100;
                    i = 0;
                }
                else if (Noname.posX + Noname.width >= 1988 && passou == 0) {
                    choesFase = choes2;
                    passou++;
                    chaoI = 6;
                    Noname.posX = choesFase[chaoI].posX + choesFase[chaoI].distancia - Noname.width;
                    Noname.posY = choesFase[chaoI].posY - Noname.height
                }
                
                if (fase == 1 && Noname.posX >= 700) {
                    fase = 2;
                    Noname.posX = 0;
                    Noname.posY = choesFase[chaoI].posY - Noname.height;
                }
                
                if (fase == 100 && Noname.posX >= 700) {
                    destroi = true;
                    fase = 101;
                    if (inf_jorn == 2 && time < "2:30" && pontuacao == 2200) {
                        inf_jorn = 3;
                    }
                }
                break;
            case zero:
            case 96:
                if (emBotao == true && numero.length < 5) {
                    numero += "0";
                }
                else if (EPGC == true && numero.length < 5) {
                    numero += "0";
                }
                else if (calculando == true && numero.length < 5) {
                    numero += "0";
                }
                break;
            case um:
            case 97:
                if (emBotao == true && numero.length < 5) {
                    numero += "1";
                }
                else if (EPGC == true && numero.length < 5) {
                    numero += "1";
                }
                else if (calculando == true && numero.length < 5) {
                    numero += "1";
                }
                break;
            case dois:
            case 98:
                if (emBotao == true && numero.length < 5) {
                    numero += "2";
                }
                else if (EPGC == true && numero.length < 5) {
                    numero += "2";
                }
                else if (calculando == true && numero.length < 5) {
                    numero += "2";
                }
                break;
            case tres:
            case 99:
                if (emBotao == true && numero.length < 5) {
                    numero += "3";
                }
                else if (EPGC == true && numero.length < 5) {
                    numero += "3";
                }
                else if (calculando == true && numero.length < 5) {
                    numero += "3";
                }
                break;
            case quatro:
            case 100:
                if (emBotao == true && numero.length < 5) {
                    numero += "4";
                }
                else if (EPGC == true && numero.length < 5) {
                    numero += "4";
                }
                else if (calculando == true && numero.length < 5) {
                    numero += "4";
                }
                break;
            case cinco:
            case 101:
                if (emBotao == true && numero.length < 5) {
                    numero += "5";
                }
                else if (EPGC == true && numero.length < 5) {
                    numero += "5";
                }
                else if (calculando == true && numero.length < 5) {
                    numero += "5";
                }
                break;
            case seis:
            case 102:
                if (emBotao == true && numero.length < 5) {
                    numero += "6";
                }
                else if (EPGC == true && numero.length < 5) {
                    numero += "6";
                }
                else if (calculando == true && numero.length < 5) {
                    numero += "6";
                }
                break;
            case sete:
            case 103:
                if (emBotao == true && numero.length < 5) {
                    numero += "7";
                }
                else if (EPGC == true && numero.length < 5) {
                    numero += "7";
                }
                else if (calculando == true && numero.length < 5) {
                    numero += "7";
                }
                break;
            case oito:
            case 104:
                if (emBotao == true && numero.length < 5) {
                    numero += "8";
                }
                else if (EPGC == true && numero.length < 5) {
                    numero += "8";
                }
                else if (calculando == true && numero.length < 5) {
                    numero += "8";
                }
                break;
            case nove:
            case 105:
                if (emBotao == true && numero.length < 5) {
                    numero += "9";
                }
                else if (EPGC == true && numero.length < 5) {
                    numero += "9";
                }
                else if (calculando == true && numero.length < 5) {
                    numero += "9";
                }
                break;
            case virgula:
            case 190:
            case 108:
            case 110:
                if (emBotao == true && temPonto == false) {
                    if (numero.length > 0) {
                        numero += ".";
                        temPonto = true;
                    }
                }
                else if (EPGC == true && temPonto == false) {
                    if (numero.length > 0) {
                        numero += ".";
                        temPonto = true;
                    }
                }
                else if (calculando == true && numero.length < 5) {
                    if (numero.length > 0) {
                        numero += ".";
                        temPonto = true;
                    }
                }
                break;
            case deleta:
                if (numero.substr(numero.length-1,numero.length-1) == '.') {
                    temPonto = false;
                }
                numero = numero.substr(0,numero.length-1);
                break;
            case enter:
            case 13:
                if (EPGC == false && calculando == false && emBotao == true && numero == respostas[i]) {
                    if (n_erros == 1) {
                        pontuacao += 50;
                    }
                    else if (n_erros > 1) {
                        pontuacao += 25;
                    }
                    else {
                        pontuacao += 100;
                    }
                    if (img_runa.src != "sprites/Raidho.png") {
                        runa = true;
                    }
                    img_runa.src = "sprites/Raidho.png"
                    numeros[i] = numero;
                    erro = false;
                    emBotao = false;
                    n_erros = 0;
                    calculou = true;
                    temPonto = false;
                }
                else if (emBotao == true) {
                    if (img_runa.src != "sprites/Raidho_inv.png") {
                        runa = true;
                    }
                    img_runa.src = "sprites/Raidho_inv.png"
                    n_erros++;
                    erro = true;
                }
    
                if (EPGC == true && numero == respostasMass[k]) {
                    if (n_errosEPG == 1) {
                        pontuacao += 50;
                    }
                    else if (n_errosEPG > 1) {
                        pontuacao += 25;
                    }
                    else {
                        pontuacao += 100;
                    }
                    quebrar = true;
                    Noname.gravidade = 5;
                    numerosEPG.push(numero);
                    numero = "";
                    resolva = 0;
                    parou = false;
                    Noname.mvDown = false;
                    erroEPG = false;
                    n_errosEPG = 0;
                    calculouEPG = true;
                    temPonto = false;
                    
                }
                else if (EPGC == true) {
                    n_errosEPG++;
                    erroEPG = true;
                }
                if (calculando == true && numero == respostasSLN[n]) {
                    if (n_errosSLN == 1) {
                        pontuacao += 50;
                    }
                    else if (n_errosSLN > 1) {
                        pontuacao += 25;
                    }
                    else {
                        pontuacao += 100;
                    }
                    runa = true;
                    img_runa.src = "sprites/Laguz.png"
                    numerosSLN.push(numero);
                    erroSLN = false;
                    n_errosSLN = 0;
                    calculouSLN = true;
                    temPonto = false;
                }
                else if (calculando == true) {
                    n_errosSLN++;
                    erroSLN = true;
                }
                break;
        }
    }
    if (fase == 0) {
        fase = 1;
        rocketP = true;
        Noname.posX = 0;
    }
}

function keyupHandler(e) {
    switch(e.keyCode) {
        case esquerda:
            Noname.mvLeft = false;
            break;
        case direita:
            Noname.mvRight = false;
            break;
        case baixo:
            Noname.mvDown = false;
            break;
        case cima:
            Noname.mvUp = false;
            break;
        case espaco:
            space = false;
            break;
        case 82:
            reset = false;
            break;
    }
}
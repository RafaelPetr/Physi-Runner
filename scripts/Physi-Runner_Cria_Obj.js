//Personagem
var Noname = new Sprite();
var instrucao = new Instrucao();

//Decorações
var relogio = new Relogio();
var janela = new Janela(340,145);

var linha = new Linha();
var linhaY = new LinhaY();
var linhaSLN = new Linha();

//Relacionados com problemas
var botao = new Botao(1000,261);
var botao1 = new Botao(200,-729);
var botao2 = new Botao(1000,-729);
var botao3 = new Botao(2838,260);
var botao4 = new Botao(3820,260);
var botao5 = new Botao(4300,260);
var botao6 = new Botao(200,343);
var botao7 = new Botao(1774,1435);
var botao8 = new Botao(3782,394);
var botao9 = new Botao(4502,394);
var botao10 = new Botao(2466,840);
var botao11 = new Botao(3664,1478);
var botao100 = new Botao(10000000,261);

var porta = new Porta(728,151);
var porta1 = new Porta(1400,45);
var porta2 = new Porta(800,-946);
var porta3 = new Porta(1800,-946);
var porta4 = new Porta(3642,45);
var porta5 = new Porta(4100,45);
var porta6 = new Porta(4700,45);
var porta7 = new Porta(800,128);
var porta8 = new Porta(1974,1220);
var porta9 = new Porta(4238,178);
var porta10 = new Porta(5216,178);
var porta11 = new Porta(2716,623);
var porta12 = new Porta(4126,1260);
var porta100 = new Porta(100000,45);


//Vetores de objetos problemas
var botoes = [botao,botao1,botao2,botao3,botao4,botao5,botao100];
var portas = [porta1,porta2,porta3,porta4,porta5,porta6,porta100];
var botoes1 = [botao100];
var portas1 = [porta100];
var botoes2 = [botao6,botao7,botao8,botao9,botao100];
var portas2 = [porta7,porta8,porta9,porta10,porta100];
var botoes3= [botao10,botao11,botao100];
var portas3 = [porta11,porta12,porta100];
//Cria chao p/ fase:

//Quarto
var chao = new Chao(0,450,800);

//Fase 1
var chao1 = new Chao(0,449,570);
var chao2 = new Chao(570,280,1989);
var chao10 = new Chao(0,-712,2145);
var chao11 = new Chao(2145,450,2600);
var chao12 = new Chao(2600,280,5102);
var chao13 = new Chao(5102,144,5282);
var chao14 = new Chao(5282,5,5459);
var chao15 = new Chao(5459,-134,5640);
var chao16 = new Chao(5640,-270,5825);
var chao17 = new Chao(5825,-409,6012);
var chao18 = new Chao(6012,-545,6500);

var chao3 = new Chao(1395,-235,1989);
var chao4 = new Chao(1205,0,1395);
var chao5 = new Chao(1070,-235,1205);
var chao6 = new Chao(905,0,1070);
var chao7 = new Chao(735,-234,905);
var chao8 = new Chao(600,0,735);
var chao9 = new Chao(0,-235,600)


var chao19 = new Chao(0,363,1135);
var chao20 = new Chao(1135,463,1530);
var chao21 = new Chao(1530,363,2500);
var chao22 = new Chao(900,975,2500);
var chao23 = new Chao(528,800,900);
var chao24 = new Chao(150,975,528);
var chao25 = new Chao(0,800,150);
var chao26 = new Chao(0,1453,850);
var chao27 = new Chao(850,1546,1030);
var chao28 = new Chao(1030,1453,1172);
var chao29 = new Chao(1172,1546,1355);
var chao30 = new Chao(1355,1453,1514);
var chao31 = new Chao(1514,1546,1680);
var chao32 = new Chao(1680,1453,2210);
var chao33 = new Chao(2210,1325,2400);
var chao34 = new Chao(2400,1185,2580);
var chao35 = new Chao(2580,1047,2760);
var chao36 = new Chao(2760,910,2950);
var chao37 = new Chao(2950,772,3130);
var chao38 = new Chao(3130,676,3474);
var chao39 = new Chao(3474,538,3660);
var chao40 = new Chao(3660,412,5557);
var chao41 = new Chao(5557,540,5990);
var chao42 = new Chao(5990,412,6400);
var chao43 = new Chao(3660,1453,5275);
var chao44 = new Chao(5003,993,300000);
var chao45 = new Chao(4567,1120,5003);
var chao46 = new Chao(3660,993,4567);
var chao47 = new Chao(5275,1530,5681);
var chao48 = new Chao(5681,1453,6400);

var chao49 = new Chao(0,388,1700);
var chao50 = new Chao(0,857,302);
var chao51 = new Chao(302,1026,480);
var chao52 = new Chao(480,857,636);
var chao53 = new Chao(636,1026,804);
var chao54 = new Chao(804,857,1166);
var chao55 = new Chao(1166,1182,2332);
var chao56 = new Chao(2332,857,6400);
var chao57 = new Chao(3497,1494,4781);
var chao58 = new Chao(4781,1178,6400);



//Vetor de chões
var choes = [chao];
//Fase 1
var choes1 = [chao1,chao2,chao10,chao11,chao12,chao13,chao14,chao15,chao16,chao17,chao18];
var choes2 = [chao9,chao8,chao7,chao6,chao5,chao4,chao3];
var choes3 = [chao19,chao20,chao21,chao26,chao27,chao28,chao29,chao30,chao31,chao32,chao33,chao34,chao35,chao36,chao37,chao38,chao39,chao40,chao41,chao42,chao43,chao47,chao48];
var choes4 = [chao46,chao45,chao44,chao25,chao24,chao23,chao22];
var choes5 = [chao49];
var choes6 = [chao50,chao51,chao52,chao53,chao54,chao55,chao56,chao57,chao58];

var quebr = new Quebravel(1133,463,1533,25);
var quebr1 = new Quebravel(149,975,533,78);
var quebr2 = new Quebravel(5548,540,5999,30);
var quebr3 = new Quebravel(4561,1120,5009,17);
var quebr4 = new Quebravel(5263,1530,5684,30);
var quebr5 = new Quebravel(1168,387,1568,70);
var quebr6 = new Quebravel(3495,857,3880,30);
var queb1 = [quebr,quebr1,quebr2,quebr3,quebr4];
var queb2 = [quebr5,quebr6];

var teto = new Teto(0,5,1990);
var teto1 = new Teto(0,-1110,6500);
var teto2 = new Teto(2717,-50,4717);
var teto3 = new Teto(4780,-350,5095);
var teto4 = new Teto(5095,-450,5302);
var teto5 = new Teto(5302,-600,5582);
var teto6 = new Teto(5582,-750,5804);
var teto7 = new Teto(5804,-900,6500);
var tetos = [teto,teto1,teto2,teto3,teto4,teto5,teto6,teto7];

var teto8 = new Teto(0,55,6400);
var teto9 = new Teto(0,470,1820);
var teto10 = new Teto(4301,1115,4556);
var teto11 = new Teto(5008,1115,6400);
var tetos1 = [teto8,teto9,teto10,teto11];

var teto12 = new Teto(0,50,1990);
var teto13 = new Teto(1566,560,3500);
var teto14 = new Teto(1566,560,6503);
var teto15 = new Teto(4000,850,6503);

var tetos2 = [teto12,teto13,teto14,teto15];

var para = new Para(1994,-700,140,20000);
var para1 = new Para(2717,-529,140,479);
var para2 = new Para(5080,-450,0,200);
var para3 = new Para(5320,-600,0,150);
var para4 = new Para(5582,-750,0,150);
var para5 = new Para(5804,-900,0,150);
paras = [para,para1,para2,para3,para4,para5];

var para6 = new Para(1820,-700,140,1550);
var para7 = new Para(4045,300,256,1000);
var para8 = new Para(4556,993,0,122);
var para9 = new Para(5030,993,0,122);
paras1 = [para6,para7,para8,para9];

var para10 = new Para(1566,0,0,500);
var para11 = new Para(3883,560,0,300);
paras2 = [para10,para11];


var esp = new Espinhos(560,-140,true);
var esp1 = new Espinhos(884.5,-140,true);
var esp2 = new Espinhos(1210,-140,true);
var esp3 = new Espinhos(2172,375,false);
var esp4 = new Espinhos(5100,67,true,true);
var esp6 = new Espinhos(5460,-209,true,true);
var esp8 = new Espinhos(5830,-484,true,true);
var esp9 = new Espinhos(850,1471,true);
var esp10 = new Espinhos(1172,1471,true);
var esp11 = new Espinhos(1495,1471,true);
var esp12 = new Espinhos(2217,1247,true,false);
var esp13 = new Espinhos(2580,972,true,false);
var esp14 = new Espinhos(2765,834,true,true);
var esp15 = new Espinhos(2950,696,true,true);
var esp16 = new Espinhos(3478,460,true,false);
var esp17 = new Espinhos(302,951,true);
var esp18 = new Espinhos(636,951,true);
var esps = [esp,esp1,esp2,esp3,esp4,esp6,esp8];
var esps1 = [esp9,esp10,esp11,esp12,esp13,esp14,esp15,esp16];
var esps2 = [esp17,esp18];


var obsL1 = new ObsLentidao(1650,-285,'l');
var obsL2 = new ObsLentidao(270,-285,'l');
var obsL3 = new ObsLentidao(2060,-762,'r');
var obsL4 = new ObsLentidao(1266,925,'r');
var obsL5 = new ObsLentidao(295,1403,'r');
var obsL6 = new ObsLentidao(5750,943,'r');
obsLs = [obsL1,obsL2,obsL3];
obsLs1 = [obsL4,obsL5,obsL6];

var oth = new Othila(1025,150,'inst');
var oth1 = new Othila(2391,-1000,'cient');
var oth2 = new Othila(1300,100,'inst');
var oth3 = new Othila(6300,605,'cient');
var oth4 = new Othila(500,250,'inst');
var oth5 = new Othila(110,605,'cient');
var oths = [oth,oth1];
var oths1 = [oth2,oth3];
var oths2 = [oth4,oth5];

var ins = new Instrucao();

var nota_inst = new Nota(20,80,"Instrução #1: MRU","inst");
var nota1_inst = new Nota(20,105,"Instrução #2: EPG","inst");
var nota2_inst = new Nota(20,130,"Instrução #3: SLN","inst");
var notas_inst = [nota_inst,nota1_inst,nota2_inst];

var nota_cient = new Nota(280,80,"Diário: 01/12","cient");
var nota1_cient = new Nota(280,105,"Diário: 30/04","cient");
var nota2_cient = new Nota(280,130,"Diário: 15/08","cient");
var notas_cient = [nota_cient,nota1_cient,nota2_cient];

var nota_jorn = new Nota(545,80,"Jornal #1","jorn");
var nota1_jorn = new Nota(545,105,"Diário: 30/04","jorn");
var nota2_jorn = new Nota(545,130,"Diário: 15/08","jorn");
var notas_jorn = [nota_jorn,nota1_jorn,nota2_jorn];

var jord = new Jord(220,100);
var wunjoI = new Wunjo_inv(200,150);

//Cenario
function cria_Cenario() {
    if (fase != 3 && fase!= 5 && fase != 7) {
        var background = new Background(fase);
        if (fase == 0) {
            counter++;
            if (counter > 112) {
                counter = 0;
            }
            background.srcX = Math.floor(counter/9) * background.width;
        }
        background.draw(ctx);

        //Decoracoes
        if (fase == 1) {
            janela.draw(ctx);
            porta.draw(ctx);
        }
        if (fase == 4) {
            queb = queb1;
        }
        else if (fase == 6) {
            queb = queb2;
        }
        if (fase == 4 || fase == 6) {
            for (var e = 0; e < queb.length; e++) {
                queb[e].draw(ctx);
            }
            jorn = true;
        }

        //Limitacao andar
        if (fase > 0) {
            if (Noname.posX + Noname.width > background.posX + background.width) {
                Noname.posX = background.posX + background.width - Noname.width
            }
            if (Noname.posX < background.posX) {
                Noname.posX = background.posX;
            }

        }    
    }
    else {
        ctx.font = "bold 30px arial";
        ctx.fillStyle = "black"
        if (contador2 < 60) {
            ctx.drawImage(passI,0,0,800,500,0,0,800,500);
            ctx.fillText("TEMPO: "+time,305,180);
            contador2++;
        }
        else {
            ctx.fillText("TEMPO: "+time,305,180);
            ctx.drawImage(passI,0,0,800,500,0,0,800,500);
            for (var i = 0; i < 4; i++) {
                if (p != pontuacao) {
                    p++;
                    if (p%100 == 0 && p != 0) {
                        dinheiros.stop();
                        dinheiros.play();
                    }
                }
            }
            ctx.fillText("PONTUAÇÃO: "+p,270,220);
            ctx.fillText("TEMPO: "+time,305,180);
            if (p == pontuacao) {
                if (fase == 3) {
                    if (pontuacao == 600 && time < "0:30") {
                        ctx.drawImage(cem,0,0,120,120,340,240,120,120);
                        if (jorn == true)  {
                            achievement.play();
                            nova_inf = true;
                            inf_jorn++;
                            adcJorn = true;
                            jorn = false;
                        }
                    }
                }
                else if (fase == 5) {
                    if (pontuacao == 1500 && time < "1:50") {
                        ctx.drawImage(cem,0,0,120,120,340,240,120,120);
                        if (jorn == true)  {
                            achievement.play();
                            nova_inf = true;
                            inf_jorn++;
                            adcJorn = true;
                            jorn = false;
                        }
                    }
                }
                ctx.fillStyle = "red";
                ctx.fillText("Aperte espaço para continuar",200,395);
                if (space == true) {
                    random = false;
                    i = 0;
                    k = 0;
                    fase++;
                    if (fase == 6) {
                        Noname.posY = 70;
                        Noname.n_pulos = 0;
                    }
                }
            }
        }
    }
    if (fase == 100 || fase == 102) {
        jord.draw(ctx);
    }
    if (fase == 101) {
        wunjoI.draw(ctx);
    }
}

function cria_Instrucao() {    
    ins.draw(ctx,fase);
    ctx.drawImage(C_icon,Math.floor(ins.cient_counter/(60/9)) * 80,0,80,80,360,220,80,80);
    ctx.drawImage(I_icon,Math.floor(ins.inst_counter/(60/9)) * 80,0,80,80,90,220,80,80);
    ctx.drawImage(J_icon,Math.floor(ins.jorn_counter/(60/9)) * 80,0,80,80,625,220,80,80);
    ctx.fillStyle = "#dc143c";
    if (adcInst == true && ins.inst_counter < 60) {
        ctx.fillText("Passe o mouse",40,350);
    }
    else {
        adcInst = false;
        if (ins.inst_counter != 60) {
            ctx.fillText("Passe o mouse",40,350);
        }
    }
    if (adcCient == true && ins.cient_counter < 60) {
        ctx.fillText("Passe o mouse",305,350);
    }
    else {
        adcCient = false;
        if (ins.cient_counter != 60) {
            ctx.fillText("Passe o mouse",305,350);
        }
    }
    if (adcJorn == true && ins.jorn_counter < 60) {
        ctx.fillText("Passe o mouse",570,350);
    }
    else {
        adcJorn = false;
        if (ins.jorn_counter != 60) {
            ctx.fillText("Passe o mouse",570,350);
        }
    }
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
    if (adcInst == true && ins.inst_counter < 60) {
        ctx.fillText("Nota Adicionada",35,480);
    }
    if (adcCient == true && ins.cient_counter < 60) {
        ctx.fillText("Nota Adicionada",300,480);
    }
    if (fase != 3 && fase != 5) {
        ctx.fillText("TEMPO: "+time,630,480);
    }
    else {
        if (adcJorn == true && ins.jorn_counter < 60) {
            ctx.fillText("Nota Adicionada",565,480);
        }
    }
}
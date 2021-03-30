var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext("2d");

//Botoes
var cima = 87, baixo = 83, esquerda = 65, direita = 68; espaco = 32;
var zero = 48, um = 49, dois = 50, tres = 51, quatro = 52, 
cinco = 53, seis = 54, sete = 55, oito = 56, nove = 57, virgula = 188, deleta = 8;
var enter = 13;
var mouse;

var color = "#dc143c";

//Indices
var i = 0;
var w = 0;
var chaoI = 0;
var j = 0;
var emCaixa = false;
var caixaI = 0;
var space = false
var par;
var dir = false;
var destroi = false;
var jorn = true;
var play = true;
var c = 0;
var wasd = new Image();
wasd.src = "sprites/wasd.png";
var spacebar = new Image();
spacebar.src = "sprites/spacebar.png";
var adcCient = false;
var adcJorn = false;
var adcInst = false;

var anima;
var aut;
var laguz = false;
var perdhro_inv = false
var perdhro = false
var runa = false;
var img_runa = new Image();
var cont_runa = 0;
var tRuna = 0;

var chaoPulou = 0;
var chaoChegada = 0;

//Sons
var rocketP = false;
var saltou = false;
var botaoP = false;
var quebrar = false;

//Define fase
var fase = 0;
var choesFase = 0;

//Tempo (contador)
var contador = 0;
var contador2 = 0;
var contador3 = 0;
var minutos = 0;
var segundos = 0;
var pontos = ":0";
var pontuacao = 0;
var p = 0;
var time;
var morreu = false;
var lento = false;
var contL = 0;
var tL = 0;

var counter = 0;

//Variáveis problemas
var emBotao = false;
var calculou = false;
var temPonto = false;
var numero = "";
var numeros = [];
var temposBaixos = [1,2];
var temposMedios = [1,2,3,4,5];
var temposAltos = [1,2,3,4,5,6,7,8,9,10];
var tempos = [];
var random = false;
var distancias1 = [3,4,11,13,1,2];
var distancias2 = [15,1,4,9];
var distancias3 = [5,6];
var respostas = [];
var respostas2 = [];
var passou = 0;
var erro = false;
var n_erros = 0;
var contador1 = 0;
var resolva = 20;

var alturasBaixas = [1,2];
var alturasMedias = [3,4,5];
var alturasAltas = [6,7,8,9,10];
var alturas = [];
var respostasMass = [];

var k = 0;
var random1 = false;
var EPGC = false;
var erroEPG = false;
var n_errosEPG = 0;
var calculouEPG = false;
var numerosEPG = [];
var grav = 0;
var epg = 0;
var parou = false;
var quebrou = false;

var n = 0;
var random2 = false;
var bat = false;
var erroSLN = false;
var n_errosSLN = 0;
var calculouSLN = false;
var numerosSLN = [];
var aceleracao = 0;
var massa = 0;
var aceleracoes = [];
var massas = [];
var respostasSLN = [];
var calculando = false;
var contan = 0;
var resolvaSLN = 20;
var numerosSLN = [];
var calculouSLN = false;

var reset = false;

var inst = false;

var nova_inf = false;
var cont_inf = 0;
var desb_counter = 0;
var inf_img = new Image();
inf_img.src = "sprites/Inf_desb.png"
var inf_desb_srcX = 0;
var inf_desb_srcY = 0;
var volt_count = false;
var inf_inst = 0;
var inf_cient = 0;
var inf_jorn = 0;
var i_img;
var parado = false;

var clicou = false;
var img4 = new Image();
var contador4 = 0;
var color1;
var cem = new Image();
cem.src = "sprites/cem.png";

var passI = new Image();
passI.src = "sprites/pass.jpg";

var C_icon = new Image();
var J_icon = new Image();
var I_icon = new Image();
C_icon.src = "sprites/C_icon.png";
J_icon.src = "sprites/J_icon.png";
I_icon.src = "sprites/I_icon.png";

pa = false;

function tempo() {
    if (parado == false) {
        if (fase == 2 || fase == 4 || fase == 6) {
            contador++;
            if (contador%60 == 0) {
                aut = true;
                segundos++;
                if (segundos < 10) {
                    pontos = ":0"
                }
                else {
                    pontos = ":"
                }
                if (segundos == 60) {
                    segundos = 0;
                    minutos++;
                }
            }
        }
    }
}
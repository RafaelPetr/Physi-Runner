var R = 0;
var L = 0;
var LS = 0;
var RS = 0;
function anima_personagem() { 
    if (Noname.mvUp == false && Noname.mvDown == false && Noname.mvLeft == false && Noname.mvRight == true && Noname.n_pulos == 1 && calculando == false) {
        LS = 0;
        RS = 0;
        var sprite_sheet = new Image()
        sprite_sheet.src = "sprites/noname_runningR.png";
        Noname.img = sprite_sheet;
        R = 1;
        L = 0;
    }
    else if (Noname.mvUp == false && Noname.mvDown == false && Noname.mvLeft == true && Noname.mvRight == false && Noname.n_pulos == 1) {
        LS = 0;
        RS = 0;
        var sprite_sheet = new Image()
        sprite_sheet.src = "sprites/noname_runningL.png";
        Noname.img = sprite_sheet;
        L = 1
        R = 0
    }

    else if (Noname.mvUp == false && Noname.mvDown == false && Noname.mvLeft == false && Noname.mvRight == false && Noname.n_pulos == 1 || (Noname.mvRight == true && Noname.mvLeft == true && Noname.n_pulos == 1)) {
        LS = 0;
        RS = 0;
        if (L > R) {
            var sprite_sheet = new Image()
            sprite_sheet.src = "sprites/noname_standingL.png";
            Noname.img = sprite_sheet;
        }
        else {
            var sprite_sheet = new Image()
            sprite_sheet.src = "sprites/noname_standingR.png";
            Noname.img = sprite_sheet;
        }
    }

    else if (Noname.n_pulos < 1) {
        if (Noname.mvRight == true || R == 1) {
            var sprite_sheet = new Image()
            sprite_sheet.src = "sprites/noname_jumpingR.png";
            Noname.img = sprite_sheet;
            RS++;
            R = 1;
            L = 0;
        }
        if (Noname.mvLeft == true || L == 1) {
            var sprite_sheet = new Image()
            sprite_sheet.src = "sprites/noname_jumpingL.png";
            Noname.img = sprite_sheet;
            LS++;
            L = 1;
            R = 0;
        }
        if (Noname.mvRight == true && Noname.mvLeft == true) {
            if (LS > RS) {
                var sprite_sheet = new Image()
                sprite_sheet.src = "sprites/noname_jumpingL.png";
                Noname.img = sprite_sheet;
                L = 1;
                R = 0;
            }
            else {
                var sprite_sheet = new Image()
                sprite_sheet.src = "sprites/noname_jumpingR.png";
                Noname.img = sprite_sheet;
                L = 0;
                R = 1;
            }
        }
        if (Noname.mvUp == true && Noname.mvDown == false && Noname.mvLeft == false && Noname.mvRight == false) {
            if (L > R) {
                var sprite_sheet = new Image()
                sprite_sheet.src = "sprites/noname_jumpingL.png";
                Noname.img = sprite_sheet;
            }
            else {
                var sprite_sheet = new Image()
                sprite_sheet.src = "sprites/noname_jumpingR.png";
                Noname.img = sprite_sheet;
            }
        }
    }
}
"use strict";
/*console.log("Curso de Typescript");
let estudiasteJavascript: boolean = true;

if (estudiasteJavascript) {
  console.log("podes ver el curso de Typescript");
} else {
  console.log("Debes ver antes el curso de Javascript");
}
*/
let argentina = 11;
let francia = 11;
let messi = 1;
let juegaMessi = true;
function jugar(team1, team2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        team1 += messi;
        motivo = " porque juega Messi";
    }
    if (team1 > team2) {
        console.log(`Gana Argentina${motivo}`);
    }
    if (team1 < team2) {
        console.log("Gana Francia");
    }
    else {
        console.log("Empatan");
    }
}
jugar(argentina, francia, juegaMessi);

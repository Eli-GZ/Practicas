/*console.log("Curso de Typescript");
let estudiasteJavascript: boolean = true;

if (estudiasteJavascript) {
  console.log("podes ver el curso de Typescript");
} else {
  console.log("Debes ver antes el curso de Javascript");
}
*/

let argentina: number = 11;
let francia: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;

function jugar(team1: number, team2: number, juegaMessi: boolean): void {

  let motivo: string = ""
  
  if (juegaMessi) {
    team1 += messi;
    motivo = " porque juega Messi"
  }

  if (team1 > team2) {
    console.log(`Gana Argentina${motivo}`);
  }
  if (team1 < team2) {
    console.log("Gana Francia");

  } else {
    console.log("Empatan");
  }
}

jugar(argentina, francia, juegaMessi)


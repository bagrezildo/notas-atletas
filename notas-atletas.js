let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMedia(atletas){
    for (let i = 0; i < atletas.length; i++){
        let atleta = atletas[i];
        let notas = atleta.notas;
        let maior = 0;
        let menor = notas[0];

        for(let j = 0; j < notas.length; j++){
            if(notas[j] > maior){
                maior = notas[j];
            }
            if (notas[j] < menor){
                menor =  notas[j];
            }
        }

        let soma = 0;
        notas.forEach(function(nota){
            soma = soma + nota;
        });
        soma = soma - maior - menor;
        let media = soma / (notas.length-2);


        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas.sort()}`);
        console.log(`Média Válida: ${media}`);
        console.log("");

    }
}

calcularMedia(atletas);
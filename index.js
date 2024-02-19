function buscaLinearAlvo(lista, alvo)
{
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === alvo) {
            return i;
        }
    }
    return -1;
}

const listaNum = [-1, 0, 3, 5, 9, 12];
const numAlvo = 2;
const index = buscaLinearAlvo(listaNum, numAlvo);

if (index !== -1) {
    console.log(`Numero encontrado em ${index}`);
} else {
    console.log(`Numero não encontrado! ${index}`);
}
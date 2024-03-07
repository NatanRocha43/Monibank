// valida-idade.js
export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    console.log(validaIdade(dataNascimento)); // Para fins de teste
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}

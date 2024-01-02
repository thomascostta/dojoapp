function validarCPF(inputCPF: string) {
  var soma = 0;
  var resto;
  let i;

  if (inputCPF == "00000000000") return false;
  for (i = 1; i <= 9; i++)
    soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(inputCPF.substring(9, 10))) return false;

  soma = 0;
  for (i = 1; i <= 10; i++)
    soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(inputCPF.substring(10, 11))) return false;
  return true;
}

function getAge(dataNasc: any) {
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();
  var anoNascParts = dataNasc.split("/");
  var diaNasc = anoNascParts[0];
  var mesNasc = anoNascParts[1];
  var anoNasc = anoNascParts[2];
  var idade = anoAtual - anoNasc;
  var mesAtual = dataAtual.getMonth() + 1;
  if (mesAtual < mesNasc) {
    idade--;
  } else {
    if (mesAtual == mesNasc) {
      if (new Date().getDate() < diaNasc) {
        idade--;
      }
    }
  }
  return idade;
}

function converterStringToNumber(stringValor: string): number {
  try {
    const valorLimpo = stringValor.replace("R$", "").replace(",", ".");
    const numeroConvertido = parseFloat(valorLimpo);

    return numeroConvertido;
  } catch (error) {
    console.error("Erro ao converter a string para número:", error);
    return 0;
  }
}

export { validarCPF, getAge, converterStringToNumber };

export function CorPrimaria( cor ){
    cor = cor.toLowerCase();
    return cor == 'azul'|| cor == 'amarelo' || cor == 'vermelho'
}

export function freqCaracter(texto, caractere){
   let qtd = 0;
   for (let letra of texto){
       if (letra == caractere)
       qtd++;
   }
   return qtd;
}
export function IngressoCinema(qtdInteira,qtdMeia,diaSemana,nacionalidade){
    let total = 0;
    if(nacionalidade == "brasileira"){
        total = (qtdInteira + qtdMeia) * 5.0
    }else{
        if(diaSemana == "quarta"){
            total = (qtdInteira + qtdMeia) *14.25
        }else{
            total = (qtdMeia * 14.25) + (qtdInteira * 28.5)
        }
    }
    return total
}

export function maiorNumero(numero){
   let maior= Number.MIN_VALUE;
   for(let item of numero) {
       if (item > maior)
       maior = item;
   }
   return maior;
}
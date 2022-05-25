

export function dobro (n){
    return n * 2;
}

export function somar(a,b){
    return a + b;
}

export function media (n1,n2,n3){
    return (n1 +  n2 + n3) /3;
}

export function temperatura (grau){
    let febre = false;
    if(grau >= 38){
        return febre = true;
    }
    else{
        return febre;
    }
}

export function tabuada (n){
    let arr = [];
    for (let i = 0; i <=  10; i++) {
     arr[i] = n * i
    }
    return arr
}

export function primaria (n){
    let check = false;
    if(n == 'azul' || n == 'vermelho' || n == 'amarelo'){
        return check = true;
    } else{
        return check;
    }
}

export function cinema (qtdinteiras, qtdmeias, diasemana, nacional, valor){
    if(nacional.toLowerCase() == 'brasileira'){
        return (qtdinteiras + qtdmeias) * 5;
    }
    else if( diasemana.toLowerCase() == 'quarta'){
        return (qtdinteiras + qtdmeias) * 14.25;
    }
    else{
        return(qtdinteiras * 28.5) + (qtdmeias * 14.25);
    }
}

export function frequencia(texto, caracter){
    let cont = 0;
    for(let letra of texto) {
        if(letra == caracter){
            cont++
        }
    }
    return cont;
}

export function maiorNumero(numeros) {
    let maior = Number.MIN_VALUE;
    for (let item of numeros){
        if(item > maior)
            maior = item;
    }
    return maior;
}
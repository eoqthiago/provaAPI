

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
    if(diasemana == 'quarta' && nacional == 'brasileira'){
        return qtdinteiras = 5.00;
    }else if ( diasemana == 'quarta'){
        return (valor * qtdmeias) / 2;
    }else if(diasemana != 'quarta' && qtdmeias >= 1 && qtdinteiras >= 1){
        return valor * qtdinteiras + (valor * qtdmeias / 2);
    } 
}

export function frequencia(texto, caracter){
    let cont = 0;
    for (let i = 0; i < texto.length; i++) {
        if(texto[i] == caracter){
            cont++
        }
        
    }
    return cont;

}


export function maiornumero (maior){


}

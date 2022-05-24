

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
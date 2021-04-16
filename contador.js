function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       // window.alert('[ERRO] falta dados!')
        res.innerHTML('Impossivel Contar!')
    }else{
        res.innerHTML = 'Contado: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <=0){
            alert('Passo Invalido! Considerando PASSO 1')
        }
        if(i < f){
            //Contagem Crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
            //Contagem Regressiva
        }else{
            for(let c = i; c >= f; c -=p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}
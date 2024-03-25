function analisar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert(' [ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('txtsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src','imagens/menina250.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemulher250.png')
            } else if (idade < 51) {
                // adulto
                img.setAttribute('src', 'imagens/adultomulher250.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosamulher250.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src','imagens/menino250.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovemhomem250.png')
            } else if (idade < 51) {
                // adulto
                img.setAttribute('src', 'imagens/adultohomem250.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosohomem250.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
   
    }

}
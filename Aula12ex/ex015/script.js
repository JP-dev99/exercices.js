function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = window.document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano) {
       window.alert('[ERRO] Verifique os dados e verifique novamente!')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value) 
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'Bebe menino.png')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'jovem menino.png')
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'adulto homem.png')
        } else {
            // Idoso
            img.setAttribute('src', 'idoso homem.png')
        }

       } else if (fsex[1].checked) {
           gênero = 'Mulher'
       } if (idade >=0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'Bebê menina.png')
    } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'jovem menina.png')
    } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'adulta.png')
    } else {
            // Idoso
            img.setAttribute('src', 'idosa mulher.png')
    }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
   }

}
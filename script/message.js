(function(){
    let elmBoite__modale
    let elmBoite__x

    function creer_boite_modale(){
        let elmBoite__modale = document.createElement('div')
        elmBoite__x = document.createElement('button')
        elmBoite__modale.appendChild(elmBoite__x)
        elmBoite__x.classList.add('boite__x')
        elmBoite__x.innerHTML = "X"
        elmBoite__modale.classList.add('boite__modale')
        let elmBody = document.querySelector('body')
        elmBody.appendChild(elmBoite__modale);
    }
  
    creer_boite_modale()

    //document.querySelector('.boite__modale')
    let elmOK = document.querySelector('#mon_bouton')

    elmOK.addEventListener('mousedown', function(){
        console.log('Bravo le script fonctionne!')
        elmBoite__modale.classList('boite__modale__ouvrir')

    })

    elmBoite__X.addEventListener('mousedown', function() {
        elmBoite__modale.classList.remove('boite__modale__ouvrir')
        console.log(elmBoite__modale.classList)
    

    })
})()
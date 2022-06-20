(function(){
    let elmBody = document.querySelector('body')
    let elmBoite__modale
    let elmBoite__x
    let elmBoite__contenu

     //document.querySelector('.boite__modale')
     let elmOK = document.querySelector('#mon_bouton')

    function creer_boite_modale(){
        elmBoite__modale = document.createElement('div')
        elmBoite__contenu = document.createElement('div')
        elmBoite__contenu.classList.add('elmBoite__contenu')
        elmBoite__x = document.createElement('button')
        elmBoite__modale.appendChild(elmBoite__contenu)
        elmBoite__modale.appendChild(elmBoite__x)
        elmBoite__x.classList.add('boite__x')
        elmBoite__x.innerHTML = "X"
        elmBoite__modale.classList.add('boite__modale')
        elmBody.appendChild(elmBoite__modale);
        elmBoite__contenu.innerHTML = "ceci est un test"
    }
    function detruire_boite_modale(){
        elmBoite__modale.removeChild(elmBoite__x)
        elmBody.removeChild(elmBoite__modale)
     }
     creer_boite_modale()
     elmOK.addEventListener('mousedown', function(){
         console.log('Bravo le script fonctionne')
         
         elmBoite__modale.classList.add('boite__modale__ouvrir')
         console.log(elmBoite__modale.classList)
     })
 
     elmBoite__x.addEventListener('mousedown', function(){
       
         elmBoite__modale.classList.remove('boite__modale__ouvrir')
         console.log(elmBoite__modale.classList)
     })
 })()
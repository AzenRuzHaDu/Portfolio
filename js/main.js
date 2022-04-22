
const boutonGeriou = document.querySelector(".bouton_geriou");



const searchCity = (ev) => {
  ev.preventDefault(); //prevent submitting
  let city = document.getElementById("input-geriou").value;
  url = new URL("https://geriou.azenruz.repl.co" + city +'/')
  fetch(url)
    .then(function(res) {
      return res.json()

    })
    .then(function(html) {
      var contVilles = document.getElementById('infos-villes');
      contVilles.classList.add('active');
      var villes = html[0]['fields']
      console.log(villes)
      contVilles.innerHTML = villes['nom_br'];

    })
    document.getElementById('form-geriou').reset();

}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn-geriou').addEventListener('click',searchCity);
});

// const flipCard = () => {
//   var card = document.getElementById("card")
//   card.classList.add('turn')
// }

const boutonFlipRight = document.querySelectorAll(".btn-turn-right")

boutonFlipRight.forEach(item => {
  item.addEventListener('click', event => {
    const par = event.target.parentElement.parentElement.parentElement;
    console.log ("couccou", par.className)
    par.classList.toggle('turn');
  })
})

const boutonFlipLeft = document.querySelectorAll(".btn-turn-left")

boutonFlipLeft.forEach(item => {
  item.addEventListener('click', event => {
    const par = event.target.parentElement.parentElement.parentElement;
    console.log ("couccou", par.className)
    par.classList.toggle('turn');
  })
})



// .addEventListener('click', flipCard)


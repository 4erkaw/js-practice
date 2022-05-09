const refs = {
    inputMin: document.querySelector('.min'),
    inputMax: document.querySelector('.max'),
    result: document.querySelector('.result'),
    randomizer: document.querySelector('.random')
}


refs.randomizer.addEventListener('click', () => {
  if(refs.inputMax.value < refs.inputMin.value){
      alert("пошёл нахуй")
      return
  }
  refs.result.textContent = Math.floor(Math.random() * (Math.floor(refs.inputMax.value) - Math.ceil(refs.inputMin.value)) + Math.ceil(refs.inputMin.value));
})

// Math.floor(Math.random() * Math.floor(refs.inputMax.value) - Math.ceil(refs.inputMin.value) + Math.ceil(refs.inputMin.value))

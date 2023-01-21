const form = document.querySelector("#form-habits")
const nlSetup = new NLWSetup(form) //criando novo objeto
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já existe!")
    return
  }

  alert("Adicionado com sucesso!")
  nlSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlSetup.setData(data)
nlSetup.load()

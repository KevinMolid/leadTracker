// Set variables
let myLeads = []
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// Add event listeners
inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
})


// Render leads
function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    // listItems += '<li><a href="http://' + myLeads[i] + '" target="_blank">' + myLeads[i] + '</a></li>'
    listItems += `
      <li>
        <a href="http://${myLeads[i]}" target="_blank">
          ${myLeads[i]}
        </a>
      </li>
      `
  }
  ulEl.innerHTML = listItems
}
// Set variables
let myLeads = []
let oldLeads = []
const ulEl = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const clearBtn = document.getElementById("clear-btn")

// Get leads from local storage
if (localStorage.getItem("myLeads")) {
  myLeads = JSON.parse(localStorage.getItem("myLeads"))
  render(myLeads)
}

// Add event listeners
inputBtn.addEventListener("click", function() {
  myLeads.unshift(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

tabBtn.addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    console.log(tabs[0])
    myLeads.unshift(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    render(myLeads)
  })
})

clearBtn.addEventListener("dblclick", function() {
  myLeads = []
  inputEl.value = ""
  localStorage.clear()
  render(myLeads)
})


// Render leads
function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    if (leads[i].includes("http")) {
      listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
      `
    } else {
      listItems += `
      <li>
        <a target='_blank' href=https://'${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
      `
    }
  }
  ulEl.innerHTML = listItems
}
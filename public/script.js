// Huidige datum automatisch inladen
const dateInput = document.getElementById('date-from');
const dateOutput = document.getElementById("date-till");
// ✅ Using the visitor's timezone
dateInput.value = formatDate();
dateOutput.value = formatDate();

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date = new Date()) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}
// ✅ Using UTC (universal coordinated time)
dateInput.value = new Date().toISOString().split('T')[0];


// Automatisch einddatum meeveranderen
dateInput.onchange = () => {
    dateOutput.value = dateInput.value
}


// invalid
const inputs = document.querySelectorAll("input, select, textarea"); 

inputs.forEach(input => { 
    input.addEventListener( 
        "invalid", 
        event => { 
            input.classList.add("invalid"); 
        }, 
        false 
    ); 
});
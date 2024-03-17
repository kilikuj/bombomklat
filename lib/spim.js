import spin from 'spinnies'

var spinner = { 
"interval": 600,
"frames": [
"",
"Yo",
"Yox ",
"Yoxy B",
"Yoxy Bo M",
"Yoxy Bot MD ",
"Yoxy Bot M",
"Yoxy Bo ",
"Yoxy B",
"Yox ",
"Yo",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'red', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
let spins = getGlobalSpinner(false)
function startt(id, text) {
spins.add(id, {text: text})
}

export  {
startt
}
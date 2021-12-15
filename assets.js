const fullForm = document.querySelector(".Clicks")
const raceSelector = document.querySelector('#race')
const classSelector = document.querySelector("#class")
const backgroundSelector = document.querySelector("#background")
const alignmentSelector = document.querySelector("#alignment")

async function fetchRace(race) {
    try {
    const url = `https://www.dnd5eapi.co/api/races/${race}`;
    const res = await axios.get(url);
    console.log(res.data.name);
    // const races = Object.keys(res.data.results);
    
    // setRaceValues(races);
} catch(error) {
 console.error(error)
}
}
fetchRace("tiefling");

// function setRaceValues(races) {
//     races.forEach(race => {
//         let option = document.createElement('option');
//         option.value = race;
//         option.textContent = race;
//         // raceSelector.appendChild(option)
//         console.log(raceSelector)
//     })
// }
async function fetchClass(clas) {
    try {
    const url = `https://www.dnd5eapi.co/api/classes/${clas}`;
    const res = await axios.get(url);
    console.log(res.data.name);
    // const classes = Object.keys(res.data.results)

    // setClassValues(classes)
} catch(error) {
    console.error(error)
}

}
fetchClass('barbarian');

// function setClassValues(classes) {
//     classes.forEach(class => { 
//         let option2 = document.createElement('option');
//         option.value = class;
//         option.textContent = class;
//         classSelector.appendChild(option)


//     })
// }

async function fetchBackground() {
    const url = `https://www.dnd5eapi.co/api/backgrounds`;
    const res = await axios.get(url);
    console.log(res.data.results);
    const backgrounds = Object.keys(res.data.results)
    
}
fetchBackground();

async function fetchAlignment() {
    const url = `https://www.dnd5eapi.co/api/alignments`;
    const res = await axios.get(url);
    console.log(res.data.results);
    const alignments = Object.keys(res.data.results)
    
}
fetchAlignment();

const fullForm = document.querySelector(".Clicks")
const raceSelector = document.querySelector('#race')
const classSelector = document.querySelector("#class")
const backgroundSelector = document.querySelector("#background")
const alignmentSelector = document.querySelector("#alignment")

async function fetchRace() {
    try {
        // const race = raceSelector.value
    const url = `https://www.dnd5eapi.co/api/races/`;
    const res = await axios.get(url);
    console.log(res.data.results);
    const races = Object.keys(res.data.results).forEach((name) => {
        console.log(res.data)

    });
    
    // setRaceValues(races);
} catch(error) {
 console.error(error)
}
}
fetchRace("Dragonborn");


// async function fetchClass(clas) {
//     try {
//     const url = `https://www.dnd5eapi.co/api/classes/${clas}`;
//     const res = await axios.get(url);
//     console.log(res.data.name);
//     const classes = Object.keys(res.data.name)

//     setClassValues(classes)
// } catch(error) {
//     console.error(error)
// }

// }
// fetchClass('barbarian');

// function setClassValues(classes) {
//     classes.forEach(clas => { 
//         let option = document.createElement('option');
//         option.value = clas;
//         option.textContent = clas;
//         classSelector.appendChild(option);


//     })
// }

// async function fetchBackground(background) {
//     const url = `https://api.open5e.com/backgrounds/${background}`;
//     const res = await axios.get(url);
//     console.log(res.data.name);
//     // const backgrounds = Object.keys(res.data.results)
    
// }
// fetchBackground("acolyte");

// async function fetchAlignment(alignment) {
//     const url = `https://www.dnd5eapi.co/api/alignments/${alignment}`;
//     const res = await axios.get(url);
//     console.log(res.data.name);
//     // const alignments = Object.keys(res.data.results)
    
// }
// fetchAlignment("chaotic-good");

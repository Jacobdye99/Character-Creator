const fullForm = document.querySelector(".Clicks")
const raceSelector = document.querySelector('#race')
const classSelector = document.querySelector("#class")
const backgroundSelector = document.querySelector("#background")
const alignmentSelector = document.querySelector("#alignment")

async function fetchRace() {
    try {
        // const race = raceSelector.value
    const url = `https://www.dnd5eapi.co/api/races`;
    const res = await axios.get(url);
    for (let i = 0; i <= 8; i++) {
    console.log(res.data.results[i].name);
    }
    // const races = Object.keys(res.data.results)

    // });
    
    // setRaceValues(races);
} catch(error) {
 console.error(error)
}
}
fetchRace();


async function fetchClass() {
    try {
    const url = `https://www.dnd5eapi.co/api/classes`;
    const res = await axios.get(url);
    for (let i = 0; i <= 11; i++) {
        console.log(res.data.results[i].name)
    }
}catch (error) {
    console.error(error)
}

}
fetchClass();

// function setClassValues(classes) {
//     classes.forEach(clas => { 
//         let option = document.createElement('option');
//         option.value = clas;
//         option.textContent = clas;
//         classSelector.appendChild(option);


//     })
// }

async function fetchBackground() {
    const url = `https://api.open5e.com/backgrounds`;
    const res = await axios.get(url);
    // console.log(res.data.name);
    for (i = 0; i <= 2; i++) {
        console.log(res.data.results[i].name)
    }
    // const backgrounds = Object.keys(res.data.results)
    
}
fetchBackground();

async function fetchAlignment() {
    const url = `https://www.dnd5eapi.co/api/alignments`;
    const res = await axios.get(url);
    // console.log(res.data.name);
    for (i = 0; i < 9; i++) {
        // console.log(res.data.results[i].name)
        const alignments = (res.data.results[i].name)
        console.log(alignments)
        
        
        
        setAlignmentValues(alignments)
    }
    
    // const alignments = Object.keys(res.data.results)
    
}
fetchAlignment();


function setAlignmentValues(alignments) {
alignments.forEach(alignment => {
let option = document.createElement('option');
option.value = alignment;
option.textContent = alignment;
alignmentSelector.appendChild(option);
})
}
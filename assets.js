const fullForm = document.querySelector(".Clicks")
const raceSelector = document.querySelector('#race')
const classSelector = document.querySelector("#class")
const backgroundSelector = document.querySelector("#background")
const alignmentSelector = document.querySelector("#alignment")
const createButton = document.querySelector('#create')
const findRace = document.querySelector('#race')
const character = document.querySelector('.character')
const random = document.querySelector('#random')
const characterInfo = document.querySelector('.charinfo')
let raceOption
let selectedRace 

let clas
let background
let alignment

async function fetchRace() {
    try {
        // const race = raceSelector.value
    const url = `https://www.dnd5eapi.co/api/races`;
    const res = await axios.get(url);
    for (let i = 0; i <= 8; i++) {
    // console.log(res.data.results[i].name);
    let race = (res.data.results[i].name)
        let raceOption = document.createElement('option')
        raceOption.value = race;
        raceOption.innerText = race;
        raceSelector.appendChild(raceOption)
        
        
        
        
    }
    
} catch(error) {
 console.error(error)
}
}
fetchRace();





async function fetchRandomRace() {
    try {
        // const race = raceSelector.value
    const url = `https://www.dnd5eapi.co/api/races`;
    const res = await axios.get(url);

    let i = Math.floor(Math.random() * 8)
    let race = (res.data.results[i].name)
        let randomRaceOption = document.createElement('p')
        randomRaceOption.value = race;
        randomRaceOption.innerText = race;
       characterInfo.appendChild(randomRaceOption)
        console.log(race)
    
    
    
} catch(error) {
 console.error(error)
}
}



async function fetchClass() {
    try {
    const url = `https://www.dnd5eapi.co/api/classes`;
    const res = await axios.get(url);
    for (let i = 0; i <= 11; i++) {
        // console.log(res.data.results[i].name)
        let clas = (res.data.results[i].name)
        let option = document.createElement('option')
        option.value = clas;
        option.innerText = clas;
        classSelector.appendChild(option)
    }
}catch (error) {
    console.error(error)
}

}
fetchClass();

async function fetchRandomClass() {
    try {
        // const race = raceSelector.value
    const url = `https://www.dnd5eapi.co/api/classes`;
    const res = await axios.get(url);

    let i = Math.floor(Math.random() * 11)
    let clas = (res.data.results[i].name)
        let randomClassOption = document.createElement('p')
        randomClassOption.value = clas;
        randomClassOption.innerText = clas;
       characterInfo.appendChild(randomClassOption)
        console.log(clas)
    
    
    
} catch(error) {
 console.error(error)
}
}



async function fetchBackground() {
    const url = `https://api.open5e.com/backgrounds`;
    const res = await axios.get(url);
    // console.log(res.data.name);
    for (i = 0; i <= 2; i++) {
        // console.log(res.data.results[i].name)
        const backgrounds = (res.data.results[i].name)
        let option = document.createElement('option')
        option.value = backgrounds;
        option.innerText = backgrounds;
        backgroundSelector.appendChild(option)
    }
    // const backgrounds = Object.keys(res.data.results)
    
}
fetchBackground();


async function fetchRandomBackground() {
    try {
        // const race = raceSelector.value
    const url = `https://api.open5e.com/backgrounds`;
    const res = await axios.get(url);

    let i = Math.floor(Math.random() * 3)
    let backgrounds = (res.data.results[i].name)
        let randomBackgroundOption = document.createElement('p')
        randomBackgroundOption.value = backgrounds;
        randomBackgroundOption.innerText = backgrounds;
       characterInfo.appendChild(randomBackgroundOption)
        console.log(backgrounds)
    
    
    
} catch(error) {
 console.error(error)
}
}

async function fetchAlignment() {
    const url = `https://www.dnd5eapi.co/api/alignments`;
    const res = await axios.get(url);
    // console.log(res.data.name);
    for (i = 0; i < 9; i++) {
        // console.log(res.data.results[i].name)
        const alignments = (res.data.results[i].name)
        let option = document.createElement('option')
        option.value = alignments;
        option.innerText = alignments;
        alignmentSelector.appendChild(option)
        
        
    }
    
    
}
fetchAlignment();

async function fetchRandomAlignment() {
    try {
        // const race = raceSelector.value
    const url = `https://www.dnd5eapi.co/api/alignments`;
    const res = await axios.get(url);

    let i = Math.floor(Math.random() * 9)
    let alignment = (res.data.results[i].name)
        let randomAlignmentOption = document.createElement('p')
        randomAlignmentOption.value = alignment;
        randomAlignmentOption.innerText = alignment;
       characterInfo.appendChild(randomAlignmentOption)
        console.log(alignment)
    
    
    
} catch(error) {
 console.error(error)
}
}


// function displayCharacter(e) {
//     removeRace()
//     e.preventDefault()
//     console.log(raceOption)
//     let selectedRace = raceSelector.value
//     let p1 = document.createElement('p')
//     p1.innerText = selectedRace
//     console.log(selectedRace)
//     characterInfo.appendChild(p1)

//     let selectedClass = classSelector.value
//     let p2 = document.createElement('p')
//     p2.innerText = selectedClass
//     console.log(selectedClass)
//     characterInfo.appendChild(p2)

//     let selectedBackground = backgroundSelector.value
//     let p3 = document.createElement('p')
//     p3.innerText = selectedBackground
//     console.log(selectedBackground)
//     characterInfo.appendChild(p3)

//     let selectedAlignment = alignmentSelector.value
//     let p4 = document.createElement('p')
//     p4.innerText = selectedAlignment
//     console.log(selectedAlignment)
//     characterInfo.appendChild(p4)


 
// }

function randomChar(i) {
    removeRace();
    i.preventDefault();
    if (raceSelector.value !== 'Race') {
        let selectedRace = raceSelector.value
    let p1 = document.createElement('p')
    p1.innerText = selectedRace
    console.log(selectedRace)
    characterInfo.appendChild(p1)
    } else {
        fetchRandomRace();
    }
    if (classSelector.value !== 'Class') {
        let selectedClass = classSelector.value
    let p2 = document.createElement('p')
    p2.innerText = selectedClass
    console.log(selectedClass)
    characterInfo.appendChild(p2)
    } else {
    fetchRandomClass();
    }
    if (backgroundSelector.value !== 'Background') {
        let selectedBackground = backgroundSelector.value
    let p3 = document.createElement('p')
    p3.innerText = selectedBackground
    console.log(selectedBackground)
    characterInfo.appendChild(p3)
    } else {
    fetchRandomBackground();
    }
    if (alignmentSelector.value !== "Alignment") {
        let selectedAlignment = alignmentSelector.value
    let p4 = document.createElement('p')
    p4.innerText = selectedAlignment
    console.log(selectedAlignment)
    characterInfo.appendChild(p4)
    } else {
    fetchRandomAlignment();
    }
}













function removeRace() {
    characterInfo.innerText = ""
}

        

        
        // createButton.addEventListener('click', displayCharacter )
        random.addEventListener("click", randomChar)
        
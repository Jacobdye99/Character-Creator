const fullForm = document.querySelector(".Clicks")
const raceSelector = document.querySelector('#race')
const classSelector = document.querySelector("#class")
const backgroundSelector = document.querySelector("#background")
const alignmentSelector = document.querySelector("#alignment")
const createButton = document.querySelector('#create')
const findRace = document.querySelector('#race')
const character = document.querySelector('.character')
const random = document.querySelector('#random')


async function fetchRace() {
    try {
        // const race = raceSelector.value
    const url = `https://www.dnd5eapi.co/api/races`;
    const res = await axios.get(url);
    for (let i = 0; i <= 8; i++) {
    // console.log(res.data.results[i].name);
    const race = (res.data.results[i].name)
        let option = document.createElement('option')
        option.value = race;
        option.innerText = race;
        raceSelector.appendChild(option)
        // displayRace(races)
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
        // console.log(res.data.results[i].name)
        const clas = (res.data.results[i].name)
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

// raceSelector.addEventListener("submit", fetchRace)

// function displayRace(race) {
//     race.forEach(races => {
//         const rce = document.createElement('h3')
//         rce.value = races
//         rce.innerText = races
//         character.appendChild(rce)

//     }) 
// }


function createRandomRace() {


}


random.addEventListener('submit', createRandom)


// function selectAndSubmit() {
//     let  raceValue = raceSelector.innerText
//     let classValue = classSelector.innerText
//     let backgroundValue = backgroundSelector.innerText
//     let alignmentValue = alignmentSelector.innerText
    
//     function handleSubmit() {
//         console.log(raceValue, classValue, backgroundValue, alignmentValue)
//     }
//     handleSubmit()
// }
// selectAndSubmit()


classSelector.addEventListener("submit", fetchClass)
backgroundSelector.addEventListener('submit', fetchBackground)
alignmentSelector.addEventListener('submit', fetchAlignment)
// createButton.addEventListener('submit', )

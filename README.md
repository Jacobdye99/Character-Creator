# Project Overview

## Project Name

Character Creator


## Project Description

My project will be an application that will create a random character for your next D&D campaign. Giving you the characters race, class, background, and alignment 

## API and Data Sample

Dnd5eapi https://www.dnd5eapi.co/api/      Snippet = 
 ```
 {
 
 "count": 9,
    "results": [
        {
            "index": "dragonborn",
            "name": "Dragonborn",
            "url": "/api/races/dragonborn"
        },
        {
            "index": "dwarf",
            "name": "Dwarf",
            "url": "/api/races/dwarf"
        },
        {
            "index": "elf",
            "name": "Elf",
            "url": "/api/races/elf"
        },
        {
            "index": "gnome",
            "name": "Gnome",
            "url": "/api/races/gnome"
        },
        {
            "index": "half-elf",
            "name": "Half-Elf",
            "url": "/api/races/half-elf"
        },
        {
            "index": "half-orc",
            "name": "Half-Orc",
            "url": "/api/races/half-orc"
        },
        {
            "index": "halfling",
            "name": "Halfling",
            "url": "/api/races/halfling"
        },
        {
            "index": "human",
            "name": "Human",
            "url": "/api/races/human"
        },
        {
            "index": "tiefling",
            "name": "Tiefling",
            "url": "/api/races/tiefling"
        }
    ]
}
```

## Wireframes



- ![Basic Webpage Wireframe](https://raw.githubusercontent.com/Jacobdye99/placeholder-p1/main/assets/Project%201.png)_
-  ![Phone: Phone Wireframe](https://raw.githubusercontent.com/Jacobdye99/Character-Creator/main/assets/Project%201%20-%20Phone%20X%20(1).png)    
   
-  Desc: basic build of the main page with input drop downs and a build character button. also includes a box to display the information. Subject to change

### MVP/PostMVP

  

#### MVP 


- api accessibility 

- create a random generator for traits

- link to D&D Beyond character creator so you can make it official

- create drop downs that allow you to customize your random character with specific traits

#### PostMVP  


- make a save feature so that users can save their favorite creations
- Find and add an art api for characters
- add a character sheet that inputs the data from the generator
- add extra traits and a selector for specific numbers

## Project Schedule



|  Day | Deliverable | Status
|---|---| ---|
|Dec 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|Dec 13| Project Approval | Complete
|Dec 13| Core Application Structure (HTML, CSS, etc.) | Complete
|Dec 14| Pseudocode / actual code | Complete
|Dec 15| Initial Clickable Model  | Complete
|Dec 16| MVP | Complete
|Dec 17| Presentations | Incomplete

## Priority Matrix



![Priority Matrix](https://raw.githubusercontent.com/Jacobdye99/placeholder-p1/main/assets/20211213072744.jpg) 

## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs | 4hrs | 4hrs | 
| Working with API | H | 3hrs| 5hrs | 5hrs |
| Writing the base HTML | H | 2hrs |   2hrs  |   2hrs  | 
| Writing the base CSS | H | 2hrs |   1hr   |  1hr   |
| Writing base javascript| H | 3hrs |   3hrs |   3hrs   | 
| Set up Links | H | 1.5hrs | 1hr | 1hr |
| Creating API functions | H | 3hrs |  7hrs   |   8hrs   |
| Create For Loops | H | 3hrs | 4hrs | 4hrs | 
| Adding results to Drop Down | H | 3hrs | 3hrs | 3hrs |
| Making the DOM appends | H | 2hrs | 2hrs  |  2hrs   | 
| Making CSS responsive | H | 2hrs |  1hr   |    1hr    |
| Adding new Design features | M | 3hrs |  2hrs  |  2hrs  |
| Polish Design | M | 3hrs |  2hrs  |  2hrs  |
| Debugging | H | 3hrs | 5hrs | 5hrs | 
| Testing | H | 3hrs | 2hrs | 2hrs |
| Total | H | 39.5hrs| 47hrs | 48hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
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
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.

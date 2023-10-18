function outputTemples(templeList){
    const templeDiv = document.querySelector("#temples")
   

    templeList.forEach(temple => {
        const templeNameArticle = document.createElement("article")
        const templeNameH3 = document.createElement("h3")
        const img = document.createElement('img')
        img.src = temple.imageUrl
        img.alt = temple.location
        img.innerHTML = temple.imageUrl
        templeNameArticle.innerHTML = temple.templeName
        templeNameH3.innerHTML = temple.templeName
        
        templeDiv.append(templeNameH3)
        templeDiv.append(img)
        templeNameArticle.appendChild(templeNameH3)
        templeNameArticle.appendChild(img)
      
        // Append the 'article' element to the 'templesElement'
        templeDiv.appendChild(templeNameArticle)


        
    });
    
}



let templeList = [];


async function displayTemple(){


        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
        const templeList = await response.json();

    
    console.log(templeList);

    
    outputTemples(templeList)
  
};

// Call the function
displayTemple();

function reset(){
    document.querySelector("#temples").textContent = ""
}

// function sortTemples(){
//     reset()
//     const sortedTemples = templeList.sort(compare)
//     outputTemples(sortedTemples)
// }

// function compare(temple1, temple2){
//     if(temple1.templeName > temple2.templeName){
//         return -1
//     }
//     if(temple1.templeName < temple2.templeName){
//         return 1
//     }
//     else{
//         return 0
//     }
// }




let sortBy = function(temples) {
    reset(); 

    let filter = document.getElementById('sortBy').value; 

    switch(filter) {
        case 'utah':
            templeList(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            templeList(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            templeList(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            templeList(temples);
            break;
        default:
            console.log('Invalid filter option');
    }
}
document.getElementById('#sortBy').addEventListener('change', function() {
    sortBy(templeList);
});



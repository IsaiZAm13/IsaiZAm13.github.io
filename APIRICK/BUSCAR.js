function getRandomCharacterId() {
    return Math.floor(Math.random() * 670) + 1;
}
function personajerandome() {
    
    
    fetch("https://rickandmortyapi.com/api/character/" + getRandomCharacterId())
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
          
            const template = document.getElementById('characterCardTemplate');
            const clone = document.importNode(template.content, true);

           
            clone.querySelector("[data-id='image']").src = data.image;
            clone.querySelector("[data-id='title']").textContent = data.name;
            clone.querySelector("[data-id='status']").textContent = `Status: ${data.status}`;
            clone.querySelector("[data-id='species']").textContent = `Especie: ${data.species}`;

            
            const characterCardsContainer = document.getElementById('characterCards');

            
            characterCardsContainer.appendChild(clone);
        })
        .catch(error => window.alert(`Error fetching character: ${error}`));
}


function buscarpersonaje() {
    const PersonajeID = document.getElementById('characterName').value;
    
    fetch("https://rickandmortyapi.com/api/character/" + PersonajeID)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
         
            const template = document.getElementById('characterCardTemplate');
            const clone = document.importNode(template.content, true);

           
            clone.querySelector("[data-id='image']").src = data.image;
            clone.querySelector("[data-id='title']").textContent = data.name;
            clone.querySelector("[data-id='status']").textContent = `Status: ${data.status}`;
            clone.querySelector("[data-id='species']").textContent = `Especie: ${data.species}`;

            
            const characterCardsContainer = document.getElementById('characterCards');

           
            characterCardsContainer.appendChild(clone);
        })
        .catch(error => window.alert(`Error fetching character: ${error}`));
}


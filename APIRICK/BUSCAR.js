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

function GenerarPersonajes() {
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const characterCardsContainer = document.getElementById('characterCards');
            const template = document.getElementById('characterCardTemplate');
            
            
            characterCardsContainer.innerHTML = '';

            
            for (let i = 0; i < 20; i++) {
                const character = data.results[i];
                const clone = document.importNode(template.content, true);
                
               
                clone.querySelector("[data-id='image']").src = character.image;
                clone.querySelector("[data-id='title']").textContent = character.name;
                clone.querySelector("[data-id='status']").textContent = `Status: ${character.status}`;
                clone.querySelector("[data-id='species']").textContent = `Especie: ${character.species}`;
                
                
                characterCardsContainer.appendChild(clone);
            }
        })
        .catch(error => window.alert(`Error fetching characters: ${error}`));
}

function buscarNombre() {
    const nombrePersonaje = document.getElementById('characterName').value.trim();
    
    if (nombrePersonaje === '') {
        alert('Por favor ingrese un nombre de personaje.');
        return; 
    }

    fetch(`https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const characterCardsContainer = document.getElementById('characterCards');
            const template = document.getElementById('characterCardTemplate');
            
            
            characterCardsContainer.innerHTML = '';

            
            data.results.forEach(character => {
                const clone = document.importNode(template.content, true);
                
               
                clone.querySelector("[data-id='image']").src = character.image;
                clone.querySelector("[data-id='title']").textContent = character.name;
                clone.querySelector("[data-id='status']").textContent = `Status: ${character.status}`;
                clone.querySelector("[data-id='species']").textContent = `Especie: ${character.species}`;
                
                
                characterCardsContainer.appendChild(clone);
            });
        })
        .catch(error => window.alert(`Error fetching characters: ${error}`));
}



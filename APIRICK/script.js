let characters = [];

function addCharacter() {
    const characterName = document.getElementById('characterName').value;
    const characterImage = document.getElementById('characterImage').files[0];

    if (characterName && characterImage) {
        const reader = new FileReader();

        reader.onload = function (e) {
            characters.push({ name: characterName, image: e.target.result });
            displayCharacters();
        };

        reader.readAsDataURL(characterImage);

        document.getElementById('characterForm').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function displayCharacters() {
    const characterCardsContainer = document.getElementById('characterCards');
    characterCardsContainer.innerHTML = '';

    characters.forEach((character, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="${character.image}" alt="${character.name}">
                          <p>${character.name}</p>`;
        card.onclick = () => openPopup(character);

        characterCardsContainer.appendChild(card);
    });
}

function openPopup(character) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `<img src="${character.image}" alt="${character.name}">
                      <p>${character.name}</p>
                      <button onclick="closePopup()">Cerrar</button>`;
                      

    document.body.appendChild(popup);
}

function closePopup() {
    const popup = document.querySelector('.popup');
    popup.parentNode.removeChild(popup);
}

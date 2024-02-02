let customIndex = 0;

    async function showNextItem() {
      const customListContainer = document.getElementById('custom-list-container');

      const customItem = document.createElement('div');
      customItem.classList.add('custom-card', 'position-relative');

      customItem.innerHTML = `
        <div class="card">
          <div class="number-badge">${customIndex + 1}</div>
          <div class="card-body">
            <h5 class="card-title">Elemento ${customIndex + 1}</h5>
            <p class="card-text">
              <span class="fw-bold">ID:</span> ${customIndex + 1}<br>
              <span class="fw-bold">Descripción:</span> Este es un elemento personalizado<br>
              <span class="fw-bold">Categoria:</span> Sin categoría
            </p>
          </div>
        </div>
      `;

      customListContainer.appendChild(customItem);
      customIndex++;
    }

    function clearCustomList() {
      customIndex = 0;
      const customListContainer = document.getElementById('custom-list-container');
      customListContainer.innerHTML = ''; // Limpiar la lista
    }
document.addEventListener('DOMContentLoaded', () => {
  const page = document.documentElement.dataset.page; 
  const adoptKey = 'adoptedPets';

  // Pet data
  const pets = {
    cats: [
      {
        id: 'c1',
        name: 'Milky Way',
        desc: 'This is Milky Way. Milky Way is a friendly cat who goes well with dogs and small childern. He loves to be cuddled, but is not an outside cat',
        age: '6 months',
        breed: 'Mixed breed',
        vet: 'Up to date with vet checkups',
        vaccinations: 'Fully vaccinated',
        contact: 'Email: cats@xyzadoption.com | Phone: (555) 123-4567',
        credits: 'Photo by <a href="https://unsplash.com/@lloyddirks">Unsplash - Lloyd Dirks</a>',
        img: 'https://images.unsplash.com/photo-1548546738-8509cb246ed3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'c2',
        name: 'Amélie',
        desc: 'Bowie is a cute cat who loves to observe ',
        age: '2 years',
        breed: 'Tabby',
        vet: 'Recent health check - excellent condition',
        vaccinations: 'All vaccinations current',
        contact: 'Email: cats@xyzadoption.com | Phone: (555) 123-4567',
        credits: 'Photo by Unsplash',
        img: 'https://images.unsplash.com/photo-1549545931-59bf067af9ab?q=80&w=830&auto=format&fit=crop'
      },
      {
        id: 'c3',
        name: 'Dotty',
        desc: 'A little nest of brothers and sisters. Cannot be seperated',
        age: '6 months',
        breed: 'Mixed breed',
        vet: 'Up to date with vet checkups',
        vaccinations: 'Fully vaccinated',
        contact: 'Email: cats@xyzadoption.com | Phone: (555) 123-4567',
        credits: 'Photo by Unsplash',
        img: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg',
      },
      {
        id: 'c4',
        name: 'Thunder',
        desc: 'A little nest of brothers and sisters. Cannot be seperated',
        age: '6 months',
        breed: 'Mixed breed',
        vet: 'Up to date with vet checkups',
        vaccinations: 'Fully vaccinated',
        contact: 'Email: cats@xyzadoption.com | Phone: (555) 123-4567',
        credits: 'Photo by Unsplash',
        img: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg',
      },
      {
        id: 'c5',
        name: 'Alex',
        desc: 'A little nest of brothers and sisters. Cannot be seperated',
        age: '6 months',
        breed: 'Mixed breed',
        vet: 'Up to date with vet checkups',
        vaccinations: 'Fully vaccinated',
        contact: 'Email: cats@xyzadoption.com | Phone: (555) 123-4567',
        credits: 'Photo by Unsplash',
        img: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg',
      },
      {
        id: 'c6',
        name: 'Alice & Ceasar',
        desc: 'A little nest of brothers and sisters. Cannot be seperated',
        age: '6 months',
        breed: 'Mixed breed',
        vet: 'Up to date with vet checkups',
        vaccinations: 'Fully vaccinated',
        contact: 'Email: cats@xyzadoption.com | Phone: (555) 123-4567',
        credits: 'Photo by Unsplash',
        img: 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg',
      }
    ],
    dogs: [
      {
        id: 'd1',
        name: 'Baxter',
        desc: 'Energetic golden retriever pup.',
        age: '1 year',
        breed: 'Golden Retriever',
        vet: 'Recent checkup - healthy and active',
        vaccinations: 'Fully vaccinated including rabies',
        contact: 'Email: dogs@xyzadoption.com | Phone: (555) 987-6543',
        credits: 'Photo by <a href="https://unsplash.com/@johnprice" target="_blank">John Price</a>',
        img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'd2',
        name: 'Daisy',
        desc: 'Sweet beagle with soulful eyes.',
        age: '3 years',
        breed: 'Beagle',
        vet: 'Annual checkup completed',
        vaccinations: 'All vaccinations up to date',
        contact: 'Email: dogs@xyzadoption.com | Phone: (555) 987-6543',
        credits: 'Photo by Unsplash',
        img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
       {
        id: 'd3',
        name: 'Luna',
        desc: 'Gentle and loving companion.',
        age: '2 years',
        breed: 'Beagle Mix',
        vet: 'Healthy with regular checkups',
        vaccinations: 'Current on all vaccines',
        contact: 'Email: dogs@xyzadoption.com | Phone: (555) 987-6543',
        credits: 'Photo by Unsplash',
        img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
         {
        id: 'd4',
        name: 'Max',
        desc: 'Playful and friendly dog.',
        age: '4 years',
        breed: 'Mixed Breed',
        vet: 'Recent health screening passed',
        vaccinations: 'Vaccinations current',
        contact: 'Email: dogs@xyzadoption.com | Phone: (555) 987-6543',
        credits: 'Photo by Unsplash',
        img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
         {
        id: 'd5',
        name: 'Buddy',
        desc: 'Loyal and loving family dog.',
        age: '5 years',
        breed: 'Labrador Mix',
        vet: 'Excellent health condition',
        vaccinations: 'Fully vaccinated',
        contact: 'Email: dogs@xyzadoption.com | Phone: (555) 987-6543',
        credits: 'Photo by Unsplash',
        img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
         {
        id: 'd6',
        name: 'Charlie',
        desc: 'Sweet and gentle nature.',
        age: '6 years',
        breed: 'Senior Mixed Breed',
        vet: 'Senior wellness check completed',
        vaccinations: 'All vaccines up to date',
        contact: 'Email: dogs@xyzadoption.com | Phone: (555) 987-6543',
        credits: 'Photo by Unsplash',
        img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]
  };

  // Get adopted from localStorage
  const adopted = JSON.parse(localStorage.getItem(adoptKey)) || [];

  // Create modal HTML
  function createModal() {
    const modal = document.createElement('div');
    modal.id = 'pet-modal';
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-body">
          <div class="modal-image">
            <img id="modal-img" src="" alt="">
          </div>
          <div class="modal-info">
            <h2 id="modal-name"></h2>
            <p><strong>Age:</strong> <span id="modal-age"></span></p>
            <p><strong>Breed:</strong> <span id="modal-breed"></span></p>
            <p><strong>Description:</strong> <span id="modal-desc"></span></p>
            <p><strong>Vet:</strong> <span id="modal-vet"></span></p>
            <p><strong>Vaccinations:</strong> <span id="modal-vaccinations"></span></p>
            <p><strong>Contact:</strong> <span id="modal-contact"></span></p>
            <button id="modal-adopt-btn" class="adopt-btn">Adopt</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  // Show modal with pet details
  function showPetModal(pet) {
    let modal = document.getElementById('pet-modal');
    if (!modal) {
      modal = createModal();
    }

    // Populate modal with pet data
    document.getElementById('modal-img').src = pet.img;
    document.getElementById('modal-img').alt = pet.name;
    document.getElementById('modal-name').textContent = pet.name;
    document.getElementById('modal-age').textContent = pet.age;
    document.getElementById('modal-breed').textContent = pet.breed;
    document.getElementById('modal-desc').textContent = pet.desc;
    document.getElementById('modal-vet').textContent = pet.vet;
    document.getElementById('modal-vaccinations').textContent = pet.vaccinations;
    document.getElementById('modal-contact').textContent = pet.contact;

    // Update adopt button
    const adoptBtn = document.getElementById('modal-adopt-btn');
    if (adopted.includes(pet.id)) {
      adoptBtn.textContent = 'Found a home';
      adoptBtn.disabled = true;
    } else {
      adoptBtn.textContent = 'Adopt';
      adoptBtn.disabled = false;
      adoptBtn.onclick = () => {
        adoptPet(pet.id);
        modal.style.display = 'none';
      };
    }

    // Show modal
    modal.style.display = 'block';

    // Close modal handlers
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => modal.style.display = 'none';
    modal.onclick = (e) => {
      if (e.target === modal) modal.style.display = 'none';
    };
  }

  // Helper: mark a pet as adopted
  function adoptPet(id) {
    adopted.push(id);
    localStorage.setItem(adoptKey, JSON.stringify(adopted));
    render();
  }

  // Render function
  function render() {
    const grid = document.querySelector('.pet-grid');
    if (!grid) {
      console.error('Could not find .pet-grid element!');
      return;
    }

    console.log('Current page:', page);
    console.log('Available pets:', pets);

    grid.innerHTML = '';
    
    let list;
    if (page === 'index') {
      list = [...pets.cats.slice(0,1), ...pets.dogs.slice(0,1)];
    } else if (page === 'cats') {
      list = pets.cats;
    } else if (page === 'dogs') {
      list = pets.dogs;
    } else {
      console.error('Unknown page type:', page);
      return;
    }

    console.log('Pets to display:', list);

    list.forEach(p => {
      const card = document.createElement('div');
      card.className = 'pet-card';
      card.style.cursor = 'pointer'; 
      card.innerHTML = `
        <div class="image-container">
          <img src="${p.img}" alt="${p.name}" ${p.id === 'c1' ? 'style="object-position: center 25%;"' : ''}>
          <div class="placeholder-overlay">This is a placeholder</div>
        </div>
        <div class="info">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
        </div>
        <div class="card-footer">
          <p class="credits">${p.credits}</p>
          <button ${adopted.includes(p.id) ? 'disabled' : ''} data-id="${p.id}">
            ${adopted.includes(p.id) ? 'Found a home' : 'Adopt'}
          </button>
        </div>
      `;

      // Add click handler to open modal
      card.addEventListener('click', (e) => {
        // Don't open modal if button was clicked
        if (e.target.tagName !== 'BUTTON') {
          showPetModal(p);
        }
      });

      grid.appendChild(card);
    });

    // Attach event handlers
    grid.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', e => {
        const petId = e.target.dataset.id;
        adoptPet(petId);
      });
    });
  }

  render();
});

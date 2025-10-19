// Video's

const videos = [
  {
    id: 'v1',
    category: 'nature',
    title: 'Waterfall',
    description: 'Listen to the sounds of a waterfall.',
    url: 'https://youtu.be/w6uX9jamcwQ?si=rL5QvZNLgMkOXyM1'
  },
  {
    id: 'v2',
    category: 'nature',
    title: 'Nature sounds',
    description: 'Immerse yourself in the soothing sounds of nature.',
    url: 'https://youtu.be/Faow3SKIzq0?si=4sbv6q8PcFaoMYKi'
  },
  {
    id: 'v3',
    category: 'nature',
    title: 'Rain',
    description: 'Listen to the sounds of the rain.',
    url: 'https://youtu.be/TatD16J7f2I?si=9izSvj7llxv-ISgO'
  },
    {
    id: 'v4',
    category: 'music',
    title: 'Orchestra',
    description: 'Kinda Muse.',
    url: 'https://youtu.be/1lmgmCmhRSc?si=sdhpnJvYR0e646Ha'
  },
    {
    id: 'v5',
    category: 'music',
    title: 'Hip Hop',
    description: 'But piano style.',
    url: 'https://youtu.be/gkmG6fHWGH8?si=5W01iSHDIrWcOMQ4'
  },
    {
    id: 'v6',
    category: 'music',
    title: 'Christmas Music',
    description: 'Violins for Christmas.',
    url: 'https://youtu.be/n8xGzkizA34?si=npboVjoPpfYlNoHi'
  },
    {
    id: 'v7',
    category: 'art',
    title: 'Artsy stuff',
    description: 'Everywhere.',
    url: 'https://youtu.be/PGLZSCUSd-I?si=fBpJD2HnXcpxSzda'
  },
    {
    id: 'v8',
    category: 'art',
    title: 'Art intro',
    description: 'Multiple art introductions for youtube videos.',
    url: 'https://youtu.be/KntG_qCcMN8?si=iKAn1Y0Vlj7WhN7j'
  },
    {
    id: 'v9',
    category: 'inspiration',
    title: 'Motivational Talk',
    description: 'Get inspired to build amazing projects.',
    url: 'https://youtu.be/TatD16J7f2I?si=9izSvj7llxv-ISgO'
  },
];

// Get Elements
const container = document.getElementById('video-container');
const filterButtons = document.querySelectorAll('nav button[data-filter]');
const favoritesButton = document.getElementById('view-favorites');

document.addEventListener('DOMContentLoaded', () => {
  renderVideos(videos);
  setupFilters();
  favoritesButton.addEventListener('click', showFavorites);
});


function getEmbedUrl(url) {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let videoId = '';
    
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    else if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1].split('&')[0];
    }
    else if (url.includes('/embed/')) {
      return url;
    }
    
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
  
  return url;
}

function renderVideos(list) {
  container.innerHTML = '';
  list.forEach(video => {
    const card = document.createElement('div');
    card.className = 'video-card';
    
    const embedUrl = getEmbedUrl(video.url);
    
    card.innerHTML = `
      <iframe src="${embedUrl}" title="${video.title}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      <div class="content">
        <h3>${video.title}</h3>
        <p>${video.description}</p>
        <div class="controls">
          <button class="rate" data-id="${video.id}">Rate</button>
          <button class="favorite" data-id="${video.id}">♡</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  attachCardListeners();
}

function attachCardListeners() {
  document.querySelectorAll('.rate').forEach(btn => {
    btn.addEventListener('click', e => rateVideo(e.target.dataset.id));
  });
  document.querySelectorAll('.favorite').forEach(btn => {
    btn.addEventListener('click', e => toggleFavorite(e.target.dataset.id));
  });
}

function setupFilters() {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.filter;
      const list = category === 'all'
        ? videos
        : videos.filter(v => v.category === category);
      renderVideos(list);
    });
  });
}

// Non working rate placeholder
function rateVideo(id) {
  console.log(`Rated video: ${id}`);
}

// Non working favorite placeholder
function toggleFavorite(id) {
  console.log(`Toggled favorite: ${id}`);
}

function showFavorites() {
  console.log('Show favorites');
}

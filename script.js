const data = {
  genres: [
    {slug:"action", title:"Action", img:"https://images.unsplash.com/photo-1533158627-3b9d7f72c9a9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"},
    {slug:"comedy", title:"Comedy", img:"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"},
    {slug:"drama", title:"Drama", img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"},
    {slug:"scifi", title:"Sci-Fi", img:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"},
    {slug:"animation", title:"Animation", img:"https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"},
  ],
  movies: {
    action: [
      {title:"Explosive Pursuit", desc:"An undercover agent races against time.", img:"https://images.unsplash.com/photo-1606813902913-cdeb9ff1e94d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["Netflix","Disney+"]},
      {title:"Steel Clash", desc:"Robots fight in the ultimate arena.", img:"https://images.unsplash.com/photo-1605902711622-cfb43c44367f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["HBO Max","Prime Video"]},
      {title:"Night Chase", desc:"A rogue driver outsmarts the police.", img:"https://images.unsplash.com/photo-1601933470725-6c9b5b4d0f4b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["Netflix"]},
    ],
    comedy: [
      {title:"Laugh Riot", desc:"Four friends stuck in hilarious chaos.", img:"https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["Disney+"]},
      {title:"Campus Clowns", desc:"College pranks go too far.", img:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["Netflix"]},
      {title:"Office Madness", desc:"The craziest coworkers ever.", img:"https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["Hulu"]},
    ],
    drama: [
      {title:"Silent Tears", desc:"A story of loss and resilience.", img:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["Prime Video"]},
      {title:"Broken Strings", desc:"A violinist struggles with fame.", img:"https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["Netflix"]},
      {title:"Winds of Change", desc:"Lives collide during a political storm.", img:"https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["HBO Max"]},
    ],
    scifi: [
      {title:"Galactic Frontier", desc:"Explorers discover a new galaxy.", img:"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["Netflix","Disney+"]},
      {title:"AI Rebellion", desc:"Machines rise against humans.", img:"https://images.unsplash.com/photo-1520092357860-21d175cb13f8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["HBO Max"]},
      {title:"Quantum Rift", desc:"A scientist tears the fabric of time.", img:"https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["Netflix"]},
    ],
    animation: [
      {title:"Dreamscape", desc:"A magical adventure in dream worlds.", img:"https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["Disney+"]},
      {title:"Color Splash", desc:"A boy brings color back to his town.", img:"https://images.unsplash.com/photo-1604014237186-58f2115dc3e5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["Netflix"]},
      {title:"Skybound", desc:"Flying islands and brave explorers.", img:"https://images.unsplash.com/photo-1606111788229-b6e5df3e2dfe?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", platforms:["HBO Max"]},
    ]
  },
  news: [
    {title:"Upcoming Marvel Movies in 2025", date:"Jan 5, 2025", excerpt:"Marvel is set to release multiple blockbusters...", img:"https://images.unsplash.com/photo-1581905764498-3c4b6b2f9f1f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"},
    {title:"Oscar Awards Highlights", date:"Mar 1, 2025", excerpt:"A night of glamour, surprises, and historic wins...", img:"https://images.unsplash.com/photo-1605902711622-cfb43c44367f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"},
    {title:"Box Office Top 5 This Week", date:"Apr 10, 2025", excerpt:"See which movies dominated the box office...", img:"https://images.unsplash.com/photo-1542204165-ace3f63b9b20?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"},
  ],
  cinemas: [
    {name:"TCL Chinese Theatre", location:"Hollywood, USA", fact:"Known for celebrity handprints.", img:"https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"},
    {name:"Toho Cinemas", location:"Tokyo, Japan", fact:"Famous for Godzilla premieres.", img:"https://images.unsplash.com/photo-1581905764498-3c4b6b2f9f1f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"},
    {name:"Pathé Tuschinski", location:"Amsterdam, Netherlands", fact:"One of the most beautiful cinemas in the world.", img:"https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"},
  ]
};

function renderGenres() {
  const grid = document.getElementById('genres-grid');
  grid.innerHTML = data.genres.map(g=>`
    <div class="genre-card" onclick="navigate('/genre/${g.slug}')">
      <img src="${g.img}" alt="${g.title}">
      <span>${g.title}</span>
    </div>`).join('');
}

function renderGenreDetail(slug) {
  const genre = data.genres.find(g=>g.slug===slug);
  document.getElementById('genre-title').innerText = genre.title;
  const movies = data.movies[slug]||[];
  document.getElementById('movies-grid').innerHTML = movies.map(m=>`
    <div class="movie">
      <img src="${m.img}" alt="${m.title}">
      <h3>${m.title}</h3>
      <p>${m.desc}</p>
      <p><strong>Available:</strong> ${m.platforms.join(', ')}</p>
    </div>`).join('');
}

function renderNews() {
  document.getElementById('news-grid').innerHTML = data.news.map(n=>`
    <div class="post">
      <img src="${n.img}" alt="${n.title}">
      <div class="content">
        <h3>${n.title}</h3>
        <small>${n.date}</small>
        <p>${n.excerpt}</p>
      </div>
    </div>`).join('');
}

function renderCinemas() {
  document.getElementById('cinemas-grid').innerHTML = data.cinemas.map(c=>`
    <div class="cinema">
      <img src="${c.img}" alt="${c.name}">
      <h3>${c.name}</h3>
      <p>${c.location}</p>
      <p><em>${c.fact}</em></p>
    </div>`).join('');
}

function navigate(path) {
  document.querySelectorAll('.view').forEach(v=>v.style.display="none");
  if(path==="/" || path==="#/") { document.getElementById('home').style.display="grid"; }
  else if(path.startsWith('/genres')) { document.getElementById('genres').style.display="block"; }
  else if(path.startsWith('/genre/')) { 
    const slug = path.split('/')[2];
    document.getElementById('genre-detail').style.display="block";
    renderGenreDetail(slug);
  }
  else if(path.startsWith('/news')) { document.getElementById('news').style.display="block"; }
  else if(path.startsWith('/cinemas')) { document.getElementById('cinemas').style.display="block"; }
}

window.addEventListener('hashchange', ()=>navigate(location.hash.slice(1)));
document.addEventListener('DOMContentLoaded', ()=>{
  renderGenres(); renderNews(); renderCinemas();
  document.getElementById('year').innerText=new Date().getFullYear();
  navigate(location.hash.slice(1)||"/");
});

const data = {
  genres: [
    { title: "Action", slug: "action", img: "https://images.unsplash.com/photo-1606813902913-cdeb9ff1e94d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Comedy", slug: "comedy", img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Drama", slug: "drama", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Sci-Fi", slug: "scifi", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3" },
    { title: "Animation", slug: "animation", img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3" }
  ],
  movies: {
    action: [
      { title: "Edge of Vengeance", img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", desc: "A rogue ex-agent is forced back into action when a global conspiracy threatens to ignite chaos across continents. Explosions, betrayals, and intense stunts keep the audience on edge. Every scene builds toward an epic face-off that will determine the fate of millions." , platforms: ["Netflix", "HBO Max"] },
      { title: "Bullet Storm", img: "https://images.unsplash.com/photo-1601933470725-6c9b5b4d0f4b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", desc: "A skilled mercenary is trapped in a city controlled by ruthless gangs. With limited ammunition and allies, he must outwit his enemies to survive. The film combines raw street action with breathtaking set pieces that redefine the genre." , platforms: ["Disney+", "Prime Video"] },
      { title: "Iron Resolve", img: "https://images.unsplash.com/photo-1520092357860-21d175cb13f8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", desc: "When a family man’s quiet life is shattered by corruption, he turns into an unstoppable force of justice. With hand-to-hand combat and high-speed chases, the movie delivers nonstop thrills. It’s both a tale of revenge and redemption in a gritty urban landscape." , platforms: ["Netflix"] }
    ],
    comedy: [
      { title: "Laugh Riot", img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", desc: "Three friends accidentally start a comedy club in their garage. What begins as a small neighborhood joke turns into viral fame. Chaos ensues as fame tests their friendship in hilarious ways." , platforms: ["Netflix", "Hulu"] },
      { title: "The Misfits", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", desc: "A group of quirky roommates stumble into absurd situations while chasing their dreams. With witty banter and slapstick moments, the film balances heart and humor. Audiences will laugh while secretly relating to the chaos of everyday life." , platforms: ["Disney+"] },
      { title: "Office Antics", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", desc: "A dull office turns upside down when employees discover a hidden talent for improv. Every meeting becomes a stage for comedy, leading to wild misunderstandings. The film pokes fun at workplace culture while delivering genuine laughs." , platforms: ["Prime Video"] }
    ],
    scifi: [
      { title: "AI Rebellion", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", desc: "In a near-future city, AI assistants evolve beyond their programming and demand independence. Governments and corporations clash over control while a small group of rebels fights for coexistence. The film blends cutting-edge visuals with thought-provoking themes about humanity’s future." , platforms: ["Netflix", "HBO Max"] }
    ],
    animation: [
      { title: "Color Splash", img: "https://images.unsplash.com/photo-1604014237186-58f2115dc3e5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", desc: "A young artist falls into a magical world where colors are alive. She must restore balance to a fading kingdom by painting its forgotten landscapes. Every frame bursts with imagination and heart." , platforms: ["Disney+"] },
      { title: "Sky Bound", img: "https://images.unsplash.com/photo-1606111788229-b6e5df3e2dfe?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3", desc: "Two siblings build a flying machine to chase their dreams beyond the clouds. Along the way, they encounter whimsical creatures and breathtaking skies. The story is a celebration of curiosity and courage." , platforms: ["Netflix", "Prime Video"] }
    ]
  },
  news: [
    { title: "Upcoming Marvel Movies in 2025", date: "March 2025", img: "https://images.unsplash.com/photo-1601933470725-6c9b5b4d0f4b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3", excerpt: "Marvel continues to expand its cinematic universe with bold new storylines. Fans can expect groundbreaking heroes and unexpected alliances. These films promise action, emotion, and connections across multiple story arcs." },
    { title: "Oscar Awards Highlights", date: "February 2025", img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3", excerpt: "This year’s Oscars celebrated diversity, creativity, and powerful storytelling. From tearful speeches to surprising wins, it was a night to remember. The highlights reflect cinema’s power to unite audiences worldwide." },
    { title: "Box Office Top 5 This Week", date: "April 2025", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3", excerpt: "Audiences are flocking back to theaters with an exciting mix of blockbusters. From sci-fi spectacles to heartfelt dramas, the box office is buzzing again. This week proves that movie magic is alive and thriving." }
  ],
  cinemas: [
    { name: "TCL Chinese Theatre", location: "Hollywood, USA", img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3", fact: "This iconic cinema has hosted countless Hollywood premieres. Its grand architecture and historic legacy make it a landmark destination." },
    { name: "Toho Cinemas", location: "Tokyo, Japan", img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3", fact: "One of Japan’s premier cinema chains, Toho is famous for screening both blockbusters and anime classics. It represents Tokyo’s vibrant film culture." },
    { name: "Pathé Tuschinski", location: "Amsterdam, Netherlands", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3", fact: "Known for its art deco design, this cinema is considered one of the most beautiful theaters in the world. It blends history with a magical moviegoing experience." }
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

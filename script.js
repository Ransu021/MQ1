const data = {
  genres: [
    { title: "Action", slug: "action", img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1200&q=80" },
    { title: "Comedy", slug: "comedy", img: "https://images.unsplash.com/photo-1551747116-d7b3f2c6f064?auto=format&fit=crop&w=1200&q=80" },
    { title: "Drama", slug: "drama", img: "https://images.unsplash.com/photo-1508375821499-68aab44cfde5?auto=format&fit=crop&w=1200&q=80" },
    { title: "Sci-Fi", slug: "scifi", img: "https://images.unsplash.com/photo-1518779578993-d38f7f3b3abd?auto=format&fit=crop&w=1200&q=80" },
    { title: "Animation", slug: "animation", img: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80" }
  ],
  movies: {
    action: [
      { title: "Edge of Vengeance", img: "https://images.unsplash.com/photo-1542203615-0bf0c72c0f8c?auto=format&fit=crop&w=800&q=80", desc: "A rogue ex-agent is forced back into action when a global conspiracy threatens to ignite chaos across continents. Explosions, betrayals, and intense stunts keep the audience on edge. Every scene builds toward an epic face-off that will determine the fate of millions.", platforms: ["Netflix", "HBO Max"] },
      { title: "Bullet Storm", img: "https://images.unsplash.com/photo-1559087867-9f9ce03ab8fe?auto=format&fit=crop&w=800&q=80", desc: "A skilled mercenary is trapped in a city controlled by ruthless gangs. With limited ammunition and allies, he must outwit his enemies to survive. The film combines raw street action with breathtaking set pieces that redefine the genre.", platforms: ["Disney+", "Prime Video"] },
      { title: "Iron Resolve", img: "https://images.unsplash.com/photo-1517604914665-2d3b6423d03e?auto=format&fit=crop&w=800&q=80", desc: "When a family man’s quiet life is shattered by corruption, he turns into an unstoppable force of justice. With hand-to-hand combat and high-speed chases, the movie delivers nonstop thrills. It’s both a tale of revenge and redemption in a gritty urban landscape.", platforms: ["Netflix"] }
    ],
    comedy: [
      { title: "Laugh Riot", img: "https://images.unsplash.com/photo-1522029834363-d7415beba4db?auto=format&fit=crop&w=800&q=80", desc: "Three friends accidentally start a comedy club in their garage. What begins as a small neighborhood joke turns into viral fame. Chaos ensues as fame tests their friendship in hilarious ways.", platforms: ["Netflix", "Hulu"] },
      { title: "The Misfits", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", desc: "A group of quirky roommates stumble into absurd situations while chasing their dreams. With witty banter and slapstick moments, the film balances heart and humor. Audiences will laugh while secretly relating to the chaos of everyday life.", platforms: ["Disney+"] },
      { title: "Office Antics", img: "https://images.unsplash.com/photo-1531973968078-9bb02785f82c?auto=format&fit=crop&w=800&q=80", desc: "A dull office turns upside down when employees discover a hidden talent for improv. Every meeting becomes a stage for comedy, leading to wild misunderstandings. The film pokes fun at workplace culture while delivering genuine laughs.", platforms: ["Prime Video"] }
    ],
    scifi: [
      { title: "AI Rebellion", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80", desc: "In a near-future city, AI assistants evolve beyond their programming and demand independence. Governments and corporations clash over control while a small group of rebels fights for coexistence. The film blends cutting-edge visuals with thought-provoking themes about humanity’s future.", platforms: ["Netflix", "HBO Max"] },
      { title: "Starlight Odyssey", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80", desc: "A group of astronauts embarks on a mission to explore an uncharted galaxy. Along the way, they uncover civilizations and mysteries that challenge their understanding of life itself. The breathtaking visuals and thrilling storyline make it a sci-fi masterpiece.", platforms: ["Disney+"] }
    ],
    animation: [
      { title: "Color Splash", img: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=800&q=80", desc: "A young artist falls into a magical world where colors are alive. She must restore balance to a fading kingdom by painting its forgotten landscapes. Every frame bursts with imagination and heart.", platforms: ["Disney+"] },
      { title: "Sky Bound", img: "https://images.unsplash.com/photo-1529676468691-fd2afa49b0f5?auto=format&fit=crop&w=800&q=80", desc: "Two siblings build a flying machine to chase their dreams beyond the clouds. Along the way, they encounter whimsical creatures and breathtaking skies. The story is a celebration of curiosity and courage.", platforms: ["Netflix", "Prime Video"] },
      { title: "Dream Chasers", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80", desc: "In a city where dreams manifest as living beings, two kids set out to rescue their lost imagination. Filled with humor, adventure, and wonder, the story inspires audiences of all ages. The animation style blends classic and modern techniques beautifully.", platforms: ["HBO Max"] }
    ]
  },
  news: [
    { title: "Upcoming Marvel Movies in 2025", date: "March 2025", img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80", excerpt: "Marvel continues to expand its cinematic universe with bold new storylines. Fans can expect groundbreaking heroes and unexpected alliances. These films promise action, emotion, and connections across multiple story arcs." },
    { title: "Oscar Awards Highlights", date: "February 2025", img: "https://images.unsplash.com/photo-1581905764498-0a83540e24a6?auto=format&fit=crop&w=1200&q=80", excerpt: "This year’s Oscars celebrated diversity, creativity, and powerful storytelling. From tearful speeches to surprising wins, it was a night to remember. The highlights reflect cinema’s power to unite audiences worldwide." },
    { title: "Box Office Top 5 This Week", date: "April 2025", img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1200&q=80", excerpt: "Audiences are flocking back to theaters with an exciting mix of blockbusters. From sci-fi spectacles to heartfelt dramas, the box office is buzzing again. This week proves that movie magic is alive and thriving." }
  ],
  cinemas: [
    { name: "TCL Chinese Theatre", location: "Hollywood, USA", img: "https://images.unsplash.com/photo-1605478586308-732e5a1bfa2f?auto=format&fit=crop&w=1200&q=80", fact: "This iconic cinema has hosted countless Hollywood premieres. Its grand architecture and historic legacy make it a landmark destination." },
    { name: "Toho Cinemas", location: "Tokyo, Japan", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", fact: "One of Japan’s premier cinema chains, Toho is famous for screening both blockbusters and anime classics. It represents Tokyo’s vibrant film culture." },
    { name: "Pathé Tuschinski", location: "Amsterdam, Netherlands", img: "https://images.unsplash.com/photo-1617113938383-7d9193c2ac9c?auto=format&fit=crop&w=1200&q=80", fact: "Known for its art deco design, this cinema is considered one of the most beautiful theaters in the world. It blends history with a magical moviegoing experience." }
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

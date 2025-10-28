// script.js - language toggle and small UI behaviors
const translations = {
  "es": {
    "title":"Noobi & The Multiverse Band",
    "tagline":"Una aventura musical a través de universos infinitos",
    "nav_home":"Inicio",
    "nav_characters":"Personajes",
    "nav_episodes":"Episodios",
    "nav_gallery":"Galería",
    "nav_music":"Música",
    "nav_creator":"Sobre el creador",
    "hero_title":"Imagina todos los mundos unidos por la música",
    "hero_sub":"Acompaña a Noobi, Luke y Mauro en aventuras musicales a través de universos distintos.",
    "watch_eps":"Ver episodios",
    "listen":"Escuchar música",
    "characters_title":"Personajes",
    "noobi_desc":"Curioso, creativo y líder del grupo. Puede transformarse en varias versiones: cubo de Geometry Dash, versión Dandy’s World y su versión humana.",
    "luke_desc":"Amable y empático. Toca la guitarra y es el corazón del grupo, también actúa como la voz de la razón.",
    "mauro_desc":"El payaso del grupo: gracioso, impulsivo y siempre sorprende con ideas locas.",
    "blair_desc":"Madre cariñosa que cuida de Noobi, Luke y Mauro. Tiene un pasado misterioso y a veces canta con ellos.",
    "episodes_title":"Episodios",
    "episodes_intro":"Aquí van listados los episodios y sinopsis. (Puedes editar y añadir episodios fácilmente.)",
    "ep1":"Presentación de Noobi & The Multiverse Band.",
    "ep2":"Noobi se transforma por primera vez en su versión cubo.",
    "ep3":"Concierto con invitados de Dandy’s World.",
    "gallery_title":"Galería",
    "music_title":"Música",
    "music_intro":"Lista de canciones (placeholder). Aquí podés enlazar tu canal de YouTube o playlists.",
    "creator_title":"Sobre el creador",
    "contact":"Contacto: tu-email@example.com"
  },
  "en": {
    "title":"Noobi & The Multiverse Band",
    "tagline":"A musical adventure across infinite universes",
    "nav_home":"Home",
    "nav_characters":"Characters",
    "nav_episodes":"Episodes",
    "nav_gallery":"Gallery",
    "nav_music":"Music",
    "nav_creator":"About the creator",
    "hero_title":"Imagine all the worlds united by music",
    "hero_sub":"Join Noobi, Luke and Mauro on musical adventures across different universes.",
    "watch_eps":"Watch episodes",
    "listen":"Listen",
    "characters_title":"Characters",
    "noobi_desc":"Curious, creative and the group's leader. Can transform into various versions: Geometry Dash cube, Dandy’s World version and his human self.",
    "luke_desc":"Kind and empathetic. Plays guitar and is the heart of the band; often the voice of reason.",
    "mauro_desc":"The group's clown: funny, impulsive and full of wild ideas.",
    "blair_desc":"A caring mother who looks after Noobi, Luke and Mauro. Has a mysterious past and occasionally sings with them.",
    "episodes_title":"Episodes",
    "episodes_intro":"Episodes and synopses go here. (You can edit and add episodes easily.)",
    "ep1":"Introduction of Noobi & The Multiverse Band.",
    "ep2":"Noobi transforms for the first time into his cube version.",
    "ep3":"Concert with guests from Dandy’s World.",
    "gallery_title":"Gallery",
    "music_title":"Music",
    "music_intro":"Playlist placeholder. Link your channel or playlists here.",
    "creator_title":"About the creator",
    "contact":"Contact: your-email@example.com"
  }
};

let currentLang = 'es';

function setText(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]){
      el.textContent = translations[lang][key];
    }
  });
  // update year
  document.getElementById('year').textContent = new Date().getFullYear();
}

document.getElementById('lang-btn').addEventListener('click', ()=>{
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.getElementById('lang-btn').textContent = currentLang === 'es' ? 'EN' : 'ES';
  setText(currentLang);
});

// init
setText(currentLang);

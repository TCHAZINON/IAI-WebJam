// pays
 const countries = {
  "France": {
    coords: [48.8566, 2.3522],
    dish: "Baguette et fromage",
    img: "public/images/baguette.jpg",
    music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    welcome: "Bonjour et bienvenue en France 🇫🇷",
    bg: "public/bg/LaTourEiffel.jpg" 

  },
  "Mexique": {
    coords: [19.4326, -99.1332],
    dish: "Tacos ",
    img: "public/images/tacos.jpg",
    music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    welcome: "Bienvenido a México 🇲🇽",
    bg: "public/bg/Mariachisombrero.jpg" 

  },
  "Japon": {
    coords: [35.6762, 139.6503],
    dish: "Sushi ",
    img: "public/images/sushi.jpg",
    music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    welcome: "ようこそ日本へ 🇯🇵",
    bg: "public/bg/Cerisiers.jpg" 

  },
  "Italie": {
    coords: [41.9028, 12.4964],
    dish: "Pasta ",
    img: "public/images/pasta.jpg",
    music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    welcome: "Benvenuto in Italia 🇮🇹",
    bg: "public/bg/LeColiséedeRome.jpg" 

  },
  "Brésil": {
    coords: [-15.7801, -47.9292],
    dish: "Feijoada",
    img: "public/images/feijoada.jpg",
    music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    welcome: "Bem-vindo ao Brasil 🇧🇷",
    bg: "public/bg/Carnaval.jpg" 

  },
  "Inde": {
    coords: [28.6139, 77.2090],
    dish: "Curry et riz ",
    img: "public/images/curry.jpg",
    music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    welcome: "भारत में आपका स्वागत है 🇮🇳",
    bg: "public/bg/TajMahal.jpg" 

  },
  "Chine": {
    coords: [39.9042, 116.4074],
    dish: "Dumplings ",
    img: "public/images/dumplings.jpg",
    music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    welcome: "欢迎来到中国 🇨🇳",
    bg: "public/bg/GrandeMurailleChine.jpg" 

  },
  "Égypte": {
    coords: [30.0444, 31.2357],
    dish: "Koshari ",
    img: "public/images/koshari.jpg",
    music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    welcome: "مرحبًا بكم في مصر 🇪🇬",
    bg: "public/bg/Pyramides.jpg" 


  },
  "Australie": {
    coords: [-33.8688, 151.2093],
    dish: "Meat Pie ",
    img: "public/images/meatpie.jpg",
    music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    welcome: "Welcome to Australia 🇦🇺",
    bg: "public/bg/Uluru.jpg" 


  },
  "Togo": {
    coords: [6.1375, 1.2123],
    dish: "Akume & Sauce ",
    img: "public/images/akume.jpg",
    music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    welcome: "Woezon na Togo 🇹🇬",
    bg: "public/bg/togo.jpg" 


  },
  "Espagne": {
    coords: [6.1375, 1.2123],
    dish: "Akume & Sauce ",
    img: "public/images/akume.jpg",
    music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    welcome: "Woezon na Togo 🇹🇬",
    bg: "public/bg/Undanseurdeflamenco.jpg" 


  }
};


const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap, Humanitarian style'
}).addTo(map);

// marqueurs
for (let country in countries) {
  let data = countries[country];
  L.marker(data.coords).addTo(map)
.bindPopup(`<b>${country}</b><br>${data.dish}<br>${data.welcome}`).on("click", () => openCard(country));}


function openCard(country) {
  const data = countries[country];

  document.getElementById("countryName").textContent = country;
  document.getElementById("dishDesc").textContent = data.dish;
  document.getElementById("dishImg").src = data.img;
  document.getElementById("musicPlayer").src = data.music;
  document.getElementById("welcomeText").textContent = data.welcome;

  // background
  const card = document.getElementById("flipCard");
  card.style.backgroundImage = `url(${data.bg})`;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";
  card.style.color = "white"; 
  card.style.textShadow = "0 2px 6px rgba(0,0,0,0.7)"; 

  document.getElementById("infoCard").style.display = "block";
}


function flipCard() {
  document.getElementById("flipCard").classList.toggle("flip");
}

function closeCard() {
  document.getElementById("infoCard").style.display = "none";
  document.getElementById("flipCard").classList.remove("flip");
}




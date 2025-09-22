const fs = require('fs');
const path = require('path');

// Indonesian girl names (max 20 characters)
const names = [
  'Siti Aisyah',
  'Putri Maharani',
  'Dewi Lestari',
  'Rina Anggraini',
  'Nadia Safitri',
  'Intan Permata',
  'Ayunda Putri',
  'Ratna Sari',
  'Febrianti',
  'Ayu Lestari',
  'Citra Dewi',
  'Indah Pratiwi',
];

// Locations around Java
const locations = [
  'Jakarta',
  'Bandung',
  'Surabaya',
  'Semarang',
  'Yogyakarta',
  'Bogor',
  'Depok',
  'Bekasi',
  'Malang',
  'Cirebon',
];

// Gen-Z style status messages (~140 characters max)
const statuses = [
  'Currently binging K-drama & avoiding responsibilities 😎',
  'Coffee in one hand, dreams in the other ☕✨',
  'Just vibin’ and collecting memories 🎶💛',
  'Living my best life, one meme at a time 😂',
  'Too busy chasing goals to chase anyone 💼🔥',
  'Late nights, good vibes, and too many snacks 🍕🌙',
  'Trying to find WiFi & motivation at the same time 📶😅',
  'Powered by caffeine and chaotic energy ☕⚡',
  'Petting dogs > adulting 🐶💖',
  'Life’s too short for boring playlists 🎧🌈',
  'Currently ghosting responsibilities 👻✨',
  'Dreaming in pixels & coffee ☕💻',
  'Just out here vibin’ and avoiding drama 🎶💛',
  'Collecting memories, not people 📸❤️',
  'Life hack: nap first, adult later 😴🔥',
  'Spreading positivity, memes included 😂🌸',
  'Busy leveling up IRL & in-game 🎮💫',
  'Powered by snacks, caffeine & bad decisions 🍕⚡',
  'Life motto: do it for the story later 📖✨',
  'Not lost, just exploring vibes 🌊🌈',
];

// Random helper functions
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomAge = () => Math.floor(Math.random() * (34 - 26 + 1)) + 26;

const data = [];

for (let i = 1; i <= 24; i++) {
  data.push({
    name: randomItem(names),
    status: randomItem(statuses),
    location: randomItem(locations),
    age: randomAge(),
    photo: `/women/pp-${i}.jpg`,
  });
}

// Write JSON file
fs.writeFileSync('users.json', JSON.stringify(data, null, 2));
// console.log('JSON file created: users.json');

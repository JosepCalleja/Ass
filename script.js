//“alchemy of assets”








/**/let currentpage = 0; // move it OUTSIDE the function
const itemsPerPage = 8;
let totalPages = 1; // (you can update this later)



const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);
const grid = 50;
const column = grid * 15;
const row = grid * 30;

canvas.height = column;
canvas.width = row;
const timestamp = Date.now();                // milliseconds since epoch
const year = new Date(timestamp).getFullYear();
// 1. Create Date object (current time)
const now = new Date();  

// 2. Get zero-based month index
const monthZero = now.getMonth();          // 0–11 :contentReference[oaicite:15]{index=15}

// 3. Convert to 1–12
const monthOne  = monthZero + 1;           // 1–12 :contentReference[oaicite:16]{index=16}

// 4. Month name
const monthNames = ["January","February","March","April","May","June",
                    "July","August","September","October","November","December"];
const monthName  = monthNames[monthZero];  // e.g., "April" :contentReference[oaicite:17]{index=17}

// 5. Two-digit format
const twoDigit   = String(monthOne).padStart(2, '0');  // "04" :contentReference[oaicite:18]{index=18}

// 6. Display
console.log(`Month index (0–11): ${monthZero}`);
console.log(`Month (1–12):       ${monthOne}`);
console.log(`Month name:         ${monthName}`);
console.log(`Two-digit month:    ${twoDigit}`);
console.log(year); // e.g., 2025

const week = getWeekNumber(now);
console.log(`Week number: ${week}`);
const weekOfMonth = getWeekOfMonth(now);
console.log(`Week of month: ${weekOfMonth}`);


const plasticToy = new Image();
plasticToy.src = 'PlasticToy.jpg';
const Ballpen = new Image();
Ballpen.src = 'Ballpen.jpg';
const woodenSword = new Image();
woodenSword.src = 'WoodenSword.jpg';
const Backpack = new Image();
Backpack.src = 'Backpack.jpg';
const ATM = new Image();
ATM.src = 'ATM1.jpg';
const Dog = new Image();
Dog.src = 'Dog.jpg';
const ball = new Image();
ball.src = 'Ball.jpg';
const Jamal = new Image();
Jamal.src = 'Jamal.jpg';
const Bicycle = new Image();
Bicycle.src = 'Bike.jpg';
const bahayKubo = new Image();
bahayKubo.src = 'Bahay Kubo.jpg';
const whiteAura = new Image();
whiteAura.src = 'White Aura.jpg';
const darkAura = new Image();
darkAura.src = 'Dark Aura.jpg';
const ATM1 = new Image();
ATM1.src = 'ATM.png';
const Blanket = new Image();
Blanket.src = 'Blanket.jpg';
const CCompass = new Image();
CCompass.src = 'CrackedCompass.jpg';
const KeyChain = new Image();
KeyChain.src = 'Keychain.jpg';
const PlasticMedal = new Image();
PlasticMedal.src = 'PlasticMedal.jpg';
const VendingMachine = new Image();
VendingMachine.src = 'VendingMachine.jpg';
const Mercatrix5000 = new Image();
Mercatrix5000.src = 'Mercatrix5000.jpg';







const EvilJamal = new Image();
EvilJamal.src = 'Evil Jamal.png';

//game const




const clicksfx = new Audio(`button-29.mp3`)

const songs = [
  "WAVESultimate2.mp3",
  "Remote-Control.mp3",
  "30 Hours.mp3",
  "CITS.mp3",
  "Moon.mp3",
  "TCIAA.mp3",
  "Like Him.mp3",
  "530.mp3"
].map(filename => encodeURI(filename)); // this handles spaces like "30 Hours"




// Fisher-Yates Shuffle to ensure no repeats until all songs are played
function shuffle(array) {
    let shuffled = array.slice(); // Copy the array to avoid modifying the original
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
    }
    return shuffled;
}

let shuffledSongs = shuffle(songs); // Shuffle at the start
let mymusicindex = 0;
let bgmusic = new Audio();
let isPlaying = false; // Track if music is already playing
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const track = audioContext.createMediaElementSource(bgmusic);
const gainNode = audioContext.createGain();
gainNode.gain.value = 0.5; // Set volume here
track.connect(gainNode).connect(audioContext.destination);

function playmusic() {
    if (mymusicindex < shuffledSongs.length) {
      audioContext.resume();
      bgmusic.crossOrigin = "anonymous";
        bgmusic.src = shuffledSongs[mymusicindex];
        bgmusic.play();
        isPlaying = true; // Mark as playing



        bgmusic.onended = function () {
            mymusicindex++;
            if (mymusicindex < shuffledSongs.length) {
                playmusic(); // Play next song
            } else {
                console.log("Playlist finished. Reshuffling...");
                shuffledSongs = shuffle(songs); // Reshuffle after all songs played
                mymusicindex = 0;
                playmusic(); // Restart playlist
            }
        };

        bgmusic.onpause = function () {
            isPlaying = false; // Allow clicking to restart if manually paused
        };

        bgmusic.onplay = function () {
            isPlaying = true; // Prevent restarting while playing
        };
    }




}


//buttons;
const button1 = {
    x: (grid * 6),
    y: (grid * 10),
    width: (grid * 5),
    height: grid,
    color: `grey`
}

const button2 = {
    x: (grid * 19),
    y: (grid * 10),
    width: (grid * 5),
    height: grid,
    color: `grey`
}

const button3 = {
    x: (grid * 12),
    y: (grid * 9),
    width: (grid * 6),
    height: grid,
    color: `black`
}

const button4 = {
    x: (grid * 12),
    y: (grid * 11),
    width: (grid * 6),
    height: grid,
    color: `black`
}

const button5 = {
    x: (grid * 12),
    y: (grid * 13),
    width: (grid * 6),
    height: grid,
    color: `black`
}

const bubblemsg = {
    x: (grid * 4),
    y: (grid * 11),
    width: (grid * 20),
    height: (grid * 3),
    color: `rgba(0, 0, 0, 0.7)`
}

const bubblemsgcontinue = {
    x: (grid * 21),
    y: (grid * 13),
    width: (grid * 3),
    height: grid,
    color: `grey`
}

const money = {
    money: 0.05,
    x: (grid * 27),
    y: (grid * 1.5),
    color: `lime`
}

const lslider = {
    x: grid * 2,
    y: grid * 13,
    width: grid,
    height: grid,
    color: `green`
}

const rslider = {
    x: grid * 27,
    y: grid * 13,
    width: grid,
    height: grid,
    color: `green`
}

const customers = [
    {
        name: `Blakeous Calumbius`,
        age: 16,
        kupal: false,
        sex: `Male`
    },
    {
        name: `Khodeba Calleja`,
        age: 16,
        kupal: true,
        sex: `Male`
    },
    {
        name: `Josep Calleja`,
        age: 16,
        kupal: true,
        sex: `Male`
    },
    {
        name: `Edgy Eddie`,
        age: 31,
        kupal: true,
        sex: `Male`
    },
    {
        name: `Ms. Carriage`,
        age: 26,
        kupal: false,
        sex: `Female`
    },
    {
        name: `Bo Nerr`,
        age: 18,
        kupal: false,
        sex: `Male`
    },
    {
        name: `Lil Diabetus`,
        age: 21,
        kupal: true,
        sex: `Male`
    },
    {
        name: `Wilma Dikfit`,
        age: 17,
        kupal: false,
        sex: `Male`
    },
    {
        name: `Gabe Utsecks`,
        age: 34,
        kupal: true,
        sex: `Male`
    },
    {
        name: `Hionichi Calleja`,
        age: 18,
        kupal: false,
        sex: `Male`
    },
    {
        name: `Rae Piste`,
        age: 42,
        kupal: false,
        sex: `Female`
    },
    {
        name: `Tyler, the Nigger`,
        age: 34,
        kupal: false,
        sex: `Male`
    },
    {
        name: `Shaquille O'Meal`,
        age: 53,
        kupal: true,
        sex: `Male`
    },
    {
        name: `General Genocide`,
        age: 36,
        kupal: true,
        sex: `Male`
    },
    {
        name: `No Show`,
        age: 51,
        kupal: false,
        sex: `Male`
    },
    {
        name: `Hard Я`,
        age: 52,
        kupal: true,
        sex: `Male`
    },
    {
        name: `Gurt`,
        age: 18,
        kupal: true,
        sex: `Male`
    },
    {
        name: `Lil Phoebe`,
        age: 21,
        kupal: false,
        sex: `Female`
    },
    {
        name: `Lil Devil`,
        age: 36,
        kupal: false,
        sex: `Male`
    },
    {
        name: `Ginormous Demon`,
        age: 38,
        kupal: false,
        sex: `Male`
    },
    {
        name: `Michael B. Jordamn`,
        age: 62,
        kupal: true,
        sex: `Male`
    },
    {
        name: `Dill dough`,
        age: 23,
        kupal: false,
        sex: `Male`

    },
    {
        name: `Officer Droid`,
        age: 39,
        kupal: false,
        sex: `Male`
    }

]

const inventorybtn = [
    {
        name: `button1`,
        color: `royalBlue`,
        occupied: false,
        item: {},
        x: grid * 4,
        y: grid * 4,
        width: grid * 4,
        height: grid * 4
    },

    {
        name: `button2`,
        color: `royalBlue`,
        occupied: false,
        item: {},
        x: grid * 10,
        y: grid * 4,
        width: grid * 4,
        height: grid * 4
    },

    {
        name: `button3`,
        color: `royalBlue`,
        occupied: false,
        item: {},
        x: grid * 16,
        y: grid * 4,
        width: grid * 4,
        height: grid * 4
    },

    {
        name: `button4`,
        color: `royalBlue`,
        occupied: false,
        item: {},
        x: grid * 22,
        y: grid * 4,
        width: grid * 4,
        height: grid * 4
    },

    {
        name: `button5`,
        color: `royalBlue`,
        occupied: false,
        item: {},
        x: grid * 4,
        y: grid * 10,
        width: grid * 4,
        height: grid * 4
    },

    {
        name: `button6`,
        color: `royalBlue`,
        occupied: false,
        item: {},
        x: grid * 10,
        y: grid * 10,
        width: grid * 4,
        height: grid * 4
    },

    {
        name: `button7`,
        color: `royalBlue`,
        occupied: false,
        item: {},
        x: grid * 16,
        y: grid * 10,
        width: grid * 4,
        height: grid * 4
    },

    {
        name: `button8`,
        color: `royalBlue`,
        occupied: false,
        item: {},
        x: grid * 22,
        y: grid * 10,
        width: grid * 4,
        height: grid * 4
    }
]

currentcustomer = 0;






const gameitems = [
    {
        name: 'Budget Buddy',
        price: 0.05,
        description: `A small plastic toy that impoverished Childrens play`,
        img: plasticToy,
        rarity: `Common`,
        category: `Toy`,
        ogprice: 0.05
    },
    {
        name: 'IPen I',
        price: 0.20,
        description: `A Brand New Ballpen, that's it.`,
        img: Ballpen,
        rarity: `Common`,
        category: `School`,
        ogprice: 0.20
    },
    {
        name: 'Wooden Sword',
        price: 1,
        description: `A small wooden sword for training`,
        img: woodenSword,
        rarity: `Common`,
        category: `Toy`,
        ogprice: 1
    },
    {
        name: 'Bagzilla',
        price: 1.15,
        description: `A local backpack`,
        img: Backpack,
        rarity: `Common`,
        category: `School`,
        ogprice: 1.15
    },
    {
        name: `ATM`,
        price: 19.45,
        description: `Gives player a penny every month, might be useful if you stock`,
        img: ATM,
        rarity: `Uncommon`,
        category: `Business`,
        ogprice: 19.45
    },
    {
        name: `Anod`,
        price: 10,
        description: `A companion to your journey`,
        img: Dog,
        rarity: `Common`,
        category: `Companion`,
        ogprice: 10
    },
    {
        name: `Basketball`,
        price: 8.24,
        description: `A Spalding basketball`,
        img: ball,
        rarity: `Common`,
        category: `Toy`,
        ogprice: 8.24
    },
    {
        name: `Jamal`,
        price: 186.5,
        description: `A Basketball person`,
        img: Jamal,
        rarity: `Rare`,
        category: `Companion`,
        ogprice: 186.5
    },
    {
        name: `Bicycle`,
        price: 100,
        description: `Second hand bicycle`,
        img: Bicycle,
        rarity: `Rare`,
        category: `Toy`,
        ogprice: 100
    },
    {
        name: `Bahay Kubo`,
        price: 710,
        description: `PHILIPENIS!!!`,
        img: bahayKubo,
        rarity: `Rare`,
        category: `Property`,
        ogprice: 710
    },
    {
        name: `White Aura`,
        price: 1000,
        description: `+1000 Aura`,
        img: whiteAura,
        rarity: `Ultra Rare`,
        category: `Toy`,
        ogprice: 1000
    },
    {
        name: `Dark Aura`,
        price: 1500,
        description: `+1500 Aura`,
        img: darkAura,
        rarity: `Ultra Rare`,
        category: `Toy`,
        ogprice: 1500
    },
    {
        name: `Blue Blanket`,
        price: 3.35,
        description: `Keeps you cozy at night`,
        img: Blanket,
        rarity: `Common`,
        category: `School`,
        ogprice: 3.35
    },
    {
        name: `Cracked Compass`,
        price: 6.45,
        description: `Points somewhere... just not always north.`,
        img: CCompass,
        rarity: `Common`,
        category: `Toy`,
        ogprice: 6.45
    },
    {
        name: `Key Chain`,
        price: 0.55,
        description: "A simple plastic keychain, small and lightweight, perfect for holding your keys or as a souvenir.",
        img: KeyChain,
        rarity: `Common`,
        category: `School`,
        ogprice: 0.55
    },
    {
        name: `Plastic Medal`,
        price: 5.40,
        description: `“Participant” is scratched off. You’re a winner now.`,
        img: PlasticMedal,
        rarity: `Common`,
        category: `Toy`,
        ogprice: 5.40
    },
    {
        name: `Vending Machine`,
        price: 1700,
        description: `Automatically sells one Common item from your inventory every month(~10% profit from original price).`,
        img: VendingMachine,
        rarity: `Ultra Rare`,
        category: `Business`,
        ogprice: 1700
    },
    {
        name: `Mercatrix 5000`,
        price: 5800,
        description: `Automatically sells one Common or Uncommon item from your inventory every month.`,
        img: Mercatrix5000,
        rarity: `Legendary`,
        category: `Business`,
        ogprice: 5800
    }
];

const companies = [
    {
        name: "CALLEJA CA$H",
        stockPrice: 18.00,        // Starting stock price
        sharesAvailable: 10000,   // How many shares are available to buy
        category: "Finance & Logistics",
        owner: customers[2],  
        annualProfit: 30000,      // Example value for annual profit
        state: "stable",
        trademarkname: `C$H`
    },
    {
        name: "Soupreme Co.",
        stockPrice: 14.00,
        sharesAvailable: 5000,
        category: "Food & Customer Goods",
        owner: customers[13],
        annualProfit: 12000,
        state: "stable",
        trademarkname: `S¢0`
    },
    {
        name: "Virtual Bytes",
        stockPrice: 12.00,
        sharesAvailable: 2000,
        category: "Tech & Entertainment",
        owner: customers[22],
        annualProfit: 28000,
        state: "stable",
        trademarkname: `VB¢`
    }
  ];
//PƒNG for fpennig, maybe imma use it in the future idk


const player = {
    name: `Bulbos A. Calleja`,
    age: 16,
    inventory: [

],
    selling: {},
    playedbefore: false,
    money: money.money,
    year: year,
    month: monthOne,
    maximum: 8,
    week: weekOfMonth,
    currentseason: undefined,
    level: 1,
    experience: 0,
    stocks: {
        [companies[0].name]: 0,
        [companies[1].name]: 0,
        [companies[2].name]: 0
    }
    
}

let times = [
    {
        name: `time1`,
        x: 4 * grid,
        y: 4 * grid,
        width: 4 * grid,
        height: 3 * grid,
        reserved: false,
        topwidth: 4 * grid,
        topheight: 1 * grid,
        sell: false,
        color: `black`,
        week: 1
    },

    {
        name: `time2`,
        x: 10 * grid,
        y: 4 * grid,
        width: 4 * grid,
        height: 3 * grid,
        reserved: false,
        topwidth: 4 * grid,
        topheight: 1 * grid,
        sell: false,
        color: `black`,
        week: 2
    },

    {
        name: `time3`,
        x: 16 * grid,
        y: 4 * grid,
        width: 4 * grid,
        height: 3 * grid,
        reserved: false,
        topwidth: 4 * grid,
        topheight: 1 * grid,
        sell: false,
        color: `black`,
        week: 3
    },

    {
        name: `time4`,
        x: 22 * grid,
        y: 4 * grid,
        width: 4 * grid,
        height: 3 * grid,
        reserved: false,
        topwidth: 4 * grid,
        topheight: 1 * grid,
        sell: false,
        color: `black`,
        week: 4
    },

    {
        name: `filler`,
        reserved: false,
        sell: false,
        color: `black`,
        week: 5
    }
];

let currentweek = player.week;


let bookedtime = 0;

// let
let mainscreen = true;
let showgrid = false;
let showSecondDialogue = false;
let secondDialogueTime = null;
let showThirdDialogue = false;
let showFourthDialogue = false;
let rendered = true;
let refused = false;
let sell;
let offer;
let customerselloffer;
let scenerandomizer;
let nebulaTime = 0;
let news = false;



const scene4dialogues = [
    `dialogue1`, `dialogue2`, `dialogue3`, `dialogue4`
]

let atdialogue = 0;



const allscenes = [scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9];
let currentscene = 0;

let page = 1;

function showNotification(message, duration = 3000) {
    let container = document.getElementById("notification-container");

    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;

    container.appendChild(notification);


    container.scrollTop = container.scrollHeight;

    setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => notification.remove(), 500);
    }, duration);
}

const seasons = [`Spring`, `Summer`, `Fall`, `Winter`];

function seasonMech() {
    if (player.month <= 2) { // January, February -> Winter
        player.currentseason = seasons[3];
    }
    else if (player.month <= 5) { // March, April, May -> Spring
        player.currentseason = seasons[0];
    }
    else if (player.month <= 8) { // June, July, August -> Summer
        player.currentseason = seasons[1];
    }
    else if (player.month <= 11) { // September, October, November -> Fall
        player.currentseason = seasons[2];
    } else { // December -> Winter
        player.currentseason = seasons[3];
    }
} //although im not so sure about this because in philipenis, there is only two seasons.

seasonMech();

let gamestate = {
    recessionActive: false,
    boom: false
}
let boomrecovery = 0;
let recessionrecovery = 0;

function updateStockPrice(company) {
  let fluctuation;
  let random = Math.random();

  // Check for special events
  if (random < 0.0015) {
      recessionactivate();
  } else if (random < 0.003) {
      boomactivate();
  }

  // Default fluctuation
  if (Math.random() < 0.5) {
      fluctuation = Math.random() * 0.0025 + 0.005; // +0.5% to +0.9%
  } else {
      fluctuation = -(Math.random() * 0.002 + 0.005); // -0.5% to -0.7%
  }

  // Adjust for economic events
  if (gamestate.recessionActive) {
      fluctuation = -((Math.random() * 0.01) + 0.025); // -1.1% to -2.1%
  }
  if (gamestate.boomActive) {
      fluctuation = (Math.random() * 0.01) + 0.023; // +1.0% to +2.0%
  }

  let oldPrice = company.stockPrice;

  // Apply fluctuation
  company.stockPrice = Math.round((company.stockPrice * (1 + fluctuation)) * 100) / 100;

  // Set state and notify
  if (company.stockPrice > oldPrice) {
      company.state = "rising";
      updateText(`${company.name} is currently rising`);
  } else if (company.stockPrice < oldPrice) {
      company.state = "dropping";
      updateText(`${company.name} lost ${Math.abs(fluctuation * 100).toFixed(2)}% in value!`, true);
  } else {
      company.state = "stable";
      updateText(`Stock prices of ${company.name} is frozen due to system error.`, true);
  }
}

  
  let reactedToArticle = null;



let stockgraph = [
	15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15
]

function scene1(){
    canvas.style.backgroundColor = `black`;
    const stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseRadius: Math.random() * 1.2 + 0.3,
        pulse: Math.random() * Math.PI * 2
      });
      
    }

    

    function drawBackground() {
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#00001a');  // very dark indigo
      grad.addColorStop(1, '#000000');  // pure black at bottom
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    

    function drawStars(time) {
      stars.forEach(star => {
        const twinkle = 0.5 + 0.5 * Math.sin(star.pulse + time * 0.002);
        const radius = star.baseRadius * twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + 0.3 * twinkle})`;
        ctx.fill();
      });
    }
    

    function drawNebula(time) {
        ctx.save();
        ctx.globalAlpha = 0.04;
        ctx.fillStyle = '#0c0d32';
        const x = Math.sin(time * 0.002) * canvas.width * 0.3 + canvas.width * 0.5;
        const y = Math.cos(time * 0.002) * canvas.height * 0.3 + canvas.height * 0.4;
        ctx.beginPath();
        ctx.ellipse(x, y, canvas.width * 0.6, canvas.height * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    

    function drawMoon() {
      const moonX = canvas.width * 0.2;
      const moonY = canvas.height * 0.2;
      const moonRadius = 60;
      

      ctx.save();
      ctx.shadowColor = 'rgba(200,200,255,0.3)';
      ctx.shadowBlur = 30;
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius + 10, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(220,220,255,0.1)';
      ctx.fill();
      ctx.restore();
      

      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#e0e0f5';
      ctx.fill();
      

      ctx.fillStyle = 'rgba(160,160,180,0.3)';
      [[moonX + 20, moonY - 10, 10], [moonX - 15, moonY + 15, 8], [moonX + 5, moonY + 25, 6]].forEach(([x, y, r]) => {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    

    function drawSilhouettes() {
      ctx.save();
      ctx.fillStyle = '#08080b';
      for (let i = 0; i < 10; i++) {
        const treeX = i * (canvas.width / 9) + Math.random() * 20 - 10;
        const baseY = canvas.height - 10;
        ctx.beginPath();
        ctx.moveTo(treeX, baseY);
        ctx.lineTo(treeX - 5, baseY);
        ctx.lineTo(treeX, baseY - (30 + Math.random() * 20));
        ctx.lineTo(treeX + 5, baseY);
        ctx.fill();
      }
      ctx.restore();
    }

    function drawHills() {
        ctx.save();
        const hillColors = ['#050509', '#07070c', '#0a0a10']; // very dark layers
      
        hillColors.forEach((color, i) => {
          const baseY = canvas.height - 100 - i * 30;
          const amplitude = 40 + i * 10;
          const frequency = 0.005 + i * 0.002;
      
          ctx.beginPath();
          ctx.moveTo(0, canvas.height);
          for (let x = 0; x <= canvas.width; x++) {
            const y = baseY + Math.sin(x * frequency) * amplitude;
            ctx.lineTo(x, y);
          }
          ctx.lineTo(canvas.width, canvas.height);
          ctx.closePath();
          ctx.fillStyle = color;
          ctx.fill();
        });
      
        ctx.restore();
      }


    drawBackground();
    drawNebula(timestamp);
    drawStars(timestamp);
    drawMoon();
    drawSilhouettes();
    drawHills();

    function drawMoonlitGrass(x, y) {
        const bladeHeight = 40 + Math.random() * 30;
        const angle = (Math.random() - 0.5) * 0.3;
      
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
      
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -bladeHeight);
      
        ctx.strokeStyle = 'rgba(120, 170, 140, 0.22)';
        ctx.shadowColor = 'rgba(190, 230, 210, 0.3)';
        ctx.shadowBlur = 8;
        ctx.lineWidth = 1;
        ctx.stroke();
      
        ctx.restore();
      }
      

      for (let i = 0; i < 120; i++) {
        const x = Math.random() * canvas.width;
        const y = canvas.height * 0.9 + 50 + Math.random() * 20;
        drawMoonlitGrass(x, y);
      }

      setInterval(() => {
        nebulaTime += 0.2; // adjust this to control speed
        drawNebula(nebulaTime);
      }, 300); // run every 300ms or so

    //Game title here
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "100px monospace";
    ctx.fillStyle = "white";

    ctx.fillText(
    "Asset Alchemy", //Title: Conjures the magic of transforming one asset into another, inspired by "Card Alchemy" from trading‑card naming conventions 
    row / 2,
    column - (grid * 13)
    );


    ctx.fillStyle = button1.color;
    ctx.fillRect(button1.x, button1.y, button1.width, button1.height );

    ctx.textAlign = "center";   // Center horizontally
    ctx.textBaseline = "middle"; // Center vertically
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    // Draw at the center of the button
    ctx.fillText(
    "Play",
    button1.x + button1.width / 2,
    button1.y + button1.height / 2
    );

    ctx.fillStyle = button2.color;
    ctx.fillRect(button2.x, button2.y, button2.width, button2.height );
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";

    ctx.fillText(
    "Settings",
    button2.x + button2.width / 2,
    button2.y + button2.height / 2
    );
}

function scene2() {

    canvas.style.backgroundColor = `chocolate`;

    sell = gameitems[0];
    // WALL BACKGROUND
    const wallHeight = grid * 8;
    const wallGrad = ctx.createLinearGradient(0, 0, 0, wallHeight);
    wallGrad.addColorStop(0, '#A0522D');
    wallGrad.addColorStop(1, '#7B3F1D');
    ctx.fillStyle = wallGrad;
    ctx.fillRect(0, 0, canvas.width, wallHeight);

    // FLOOR BACKGROUND
    const floorGrad = ctx.createLinearGradient(0, wallHeight, 0, canvas.height);
    floorGrad.addColorStop(0, '#DEB887');
    floorGrad.addColorStop(1, '#B8860B');
    ctx.fillStyle = floorGrad;
    ctx.fillRect(0, wallHeight, canvas.width, canvas.height - wallHeight);

    // WINDOW (centered)
    const winW = grid * 4, winH = grid * 2;
    const winX = canvas.width / 2 - winW / 2, winY = grid * 2;
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(winX, winY, winW, winH);

    // Window frame
    ctx.strokeStyle = '#4B2E1A';
    ctx.lineWidth = 5;
    ctx.strokeRect(winX, winY, winW, winH);

    // Mullions
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(winX + winW / 2, winY);
    ctx.lineTo(winX + winW / 2, winY + winH);
    ctx.moveTo(winX, winY + winH / 2);
    ctx.lineTo(winX + winW, winY + winH / 2);
    ctx.stroke();

    // Sill
    ctx.fillStyle = '#5C4033';
    ctx.fillRect(winX - 10, winY + winH, winW + 20, 12);

    // DOOR (right side)
    const doorW = 40, doorH = 80;
    const doorX = canvas.width - grid * 2, doorY = wallHeight - doorH + 20;
    ctx.fillStyle = '#5B3316';
    ctx.fillRect(doorX, doorY, doorW, doorH);

    // Door panels
    ctx.strokeStyle = '#3B2312';
    ctx.lineWidth = 3;
    ctx.strokeRect(doorX + 5, doorY + 5, 30, 25);
    ctx.strokeRect(doorX + 5, doorY + 45, 30, 25);

    // Knob
    ctx.fillStyle = 'gold';
    ctx.beginPath();
    ctx.arc(doorX + 32, doorY + 40, 5, 0, Math.PI * 2);
    ctx.fill();

    // TABLE (centered lower room)
    const tblW = 120, tblH = 60;
    const tblX = canvas.width / 2 - tblW / 2, tblY = wallHeight + 80;
    ctx.fillStyle = '#A0522D';
    ctx.fillRect(tblX, tblY, tblW, tblH);

    // Bevel highlight
    ctx.strokeStyle = '#D2A56C';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(tblX, tblY);
    ctx.lineTo(tblX + tblW, tblY);
    ctx.stroke();

    // Legs
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(tblX + 15, tblY + tblH, 10, 40);
    ctx.fillRect(tblX + tblW - 25, tblY + tblH, 10, 40);




    // Bubble Message

    ctx.fillStyle = bubblemsg.color;
    ctx.fillRect(bubblemsg.x, bubblemsg.y, bubblemsg.width, bubblemsg.height);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    
    ctx.fillStyle = bubblemsg.color;
    ctx.fillRect(bubblemsg.x, bubblemsg.y, bubblemsg.width, bubblemsg.height);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    
    if (showSecondDialogue && Date.now() - secondDialogueTime >= 1000) {


        ctx.fillText(
            `${customers[currentcustomer].name}: I am currently selling it for $${sell.price}, do you want to buy it?`,
            bubblemsg.x + bubblemsg.width / 2,
            bubblemsg.y + bubblemsg.height / 2
        );

        if (showSecondDialogue && Date.now() - secondDialogueTime >= 1500) {
            //Left side button for... umm... negotiation.

            ctx.fillStyle = `red`;
            ctx.fillRect(bubblemsgcontinue.x - grid * 17, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
        
            ctx.fillText(
            "Decline",
            bubblemsgcontinue.x - grid * 17 + bubblemsgcontinue.x - grid * 19.5,
            bubblemsgcontinue.y + bubblemsgcontinue.height / 2
            );


            ctx.fillStyle = `green`;
            ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
        
            ctx.fillText(
            "Accept",
            bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
            bubblemsgcontinue.y + bubblemsgcontinue.height / 2
            );
        }
    } else if (!showSecondDialogue && !showThirdDialogue && !showFourthDialogue) {
        const fullText = `${customers[currentcustomer].name}: Hello, ${player.name}, what brought you here today? I am currently selling ${sell.name}, do you want to offer?`;
        const maxWidth = bubblemsg.width - 20; // add some padding
        
        // Measure text width
        if (ctx.measureText(fullText).width <= maxWidth) {
            // It fits — draw single line
            ctx.fillText(
                fullText,
                bubblemsg.x + bubblemsg.width / 2,
                bubblemsg.y + bubblemsg.height / 2
            );
        } else {
            // It doesn't fit — split it manually into two lines
            // Naive split: split in the middle of the sentence
            const line1 = `${customers[currentcustomer].name}: Hello, ${player.name}, what brought you here today?`;
            const line2 = `I am currently selling ${gameitems[0].name}, do you want to offer?`;
        
            ctx.fillText(
                line1,
                bubblemsg.x + bubblemsg.width / 2,
                bubblemsg.y + bubblemsg.height / 2 - 10
            );
        
            ctx.fillText(
                line2,
                bubblemsg.x + bubblemsg.width / 2,
                bubblemsg.y + bubblemsg.height / 2 + 10
            );
        }
        
        ctx.fillStyle = bubblemsgcontinue.color;
        ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
    
        ctx.fillText(
        "Continue",
        bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
        bubblemsgcontinue.y + bubblemsgcontinue.height / 2
        );
    }
    else if(showThirdDialogue && Date.now() - secondDialogueTime >= 1000){

        ctx.fillText(
            `${customers[currentcustomer].name}: Alright, how about $${(gameitems[0].price - parseFloat(0.02.toFixed(2))).toFixed(2)}, do you want to buy it now?`,
            bubblemsg.x + bubblemsg.width / 2,
            bubblemsg.y + bubblemsg.height / 2
        );
    }

    if (showThirdDialogue && Date.now() - secondDialogueTime >= 1500) {
        //Left side button for... umm... negotiation.

        ctx.fillStyle = `red`;
        ctx.fillRect(bubblemsgcontinue.x - grid * 17, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
    
        ctx.fillText(
        "Decline",
        bubblemsgcontinue.x - grid * 17 + bubblemsgcontinue.x - grid * 19.5,
        bubblemsgcontinue.y + bubblemsgcontinue.height / 2
        );


        ctx.fillStyle = `green`;
        ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
    
        ctx.fillText(
        "Accept",
        bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
        bubblemsgcontinue.y + bubblemsgcontinue.height / 2
        );
        
    }
    
    else if(showFourthDialogue && Date.now() - secondDialogueTime >= 1000 && !refused){


        const fullText = `${customers[currentcustomer].name}: Altright, it was a pleasure doing business with you, i hope you enjoy that ${gameitems[0].name} as much as i enjoyed it!`;
        const maxWidth = bubblemsg.width - 20; // add some padding

        // Measure text width
        ctx.fillStyle = "lightGreen";
        if (ctx.measureText(fullText).width <= maxWidth) {
            // It fits — draw single line
            ctx.fillText(
            fullText,
            bubblemsg.x + bubblemsg.width / 2,
            bubblemsg.y + bubblemsg.height / 2
            );
        } else {
            // It doesn't fit — split it manually into two lines
            // Naive split: split in the middle of the sentence
            const line1 = `${customers[currentcustomer].name}: Altright, it was a pleasure doing business with you, i hope`;
            const line2 = `you enjoy that ${gameitems[0].name} as much as i enjoyed it!`;


            ctx.fillText(
                line1,
                bubblemsg.x + bubblemsg.width / 2,
                bubblemsg.y + bubblemsg.height / 2 - 10
            );
        
            ctx.fillText(
                line2,
                bubblemsg.x + bubblemsg.width / 2,
                bubblemsg.y + bubblemsg.height / 2 + 10
            );
        }

    }
    else if(showFourthDialogue && Date.now() - secondDialogueTime >= 1000 && refused){
        const fullText = `${customers[currentcustomer].name}: Altright, This is going nowhere, what i offered was already reasonable, let's just forget it for the time being.`;
        const maxWidth = bubblemsg.width - 20; // add some padding

        // Measure text width
        ctx.fillStyle = "red";
        if (ctx.measureText(fullText).width <= maxWidth) {
            // It fits — draw single line
            ctx.fillText(
            fullText,
            bubblemsg.x + bubblemsg.width / 2,
            bubblemsg.y + bubblemsg.height / 2
            );
        } else {
            // It doesn't fit — split it manually into two lines
            // Naive split: split in the middle of the sentence
            const line1 = `${customers[currentcustomer].name}: Altright, This is going nowhere, what i offered was`;
            const line2 = `already reasonable, let's just forget it for the time being.`;


            ctx.fillText(
                line1,
                bubblemsg.x + bubblemsg.width / 2,
                bubblemsg.y + bubblemsg.height / 2 - 10
            );
        
            ctx.fillText(
                line2,
                bubblemsg.x + bubblemsg.width / 2,
                bubblemsg.y + bubblemsg.height / 2 + 10
            );
        }
    }


    if (showFourthDialogue && Date.now() - secondDialogueTime >= 1500) {
        //Left side button for... umm... negotiation.

        ctx.fillStyle = bubblemsgcontinue.color;
        ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
    
        ctx.fillText(
        "Continue",
        bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
        bubblemsgcontinue.y + bubblemsgcontinue.height / 2
        );
    }


    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "30px Arial";
    if(money.money >= 0){
        ctx.fillStyle = money.color;

    }
    else{
        ctx.fillStyle = `red`;
    }

    ctx.fillText(
    `$${player.money}`,
    money.x,
    money.y
    );

}


function scene3(){
    canvas.style.backgroundColor = `black`;

    if(atdialogue > 3){
        atdialogue = 3;
    }



    times.forEach(time => {

        if(time.reserved === true){
            time.color = `green`;
        }
        else{
            time.color = `black`;
        }
        if(player.week >= time.week){
            time.color = `blue`;
        }

    });

    if(player.week > 4){
        player.week = 4;
    }

    
    if (Date.now() - secondDialogueTime >= 500 && rendered) {
        function drawMidnightGradientBackground() {
            const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
            grad.addColorStop(0, '#1a132f'); // Midnight Indigo
            grad.addColorStop(1, '#0d0a1a'); // Deeper base
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
          
        const stars = [];
        for (let i = 0; i < 120; i++) {
            stars.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height * 0.7,
              radius: Math.random() * 1.2 + 0.2,
              opacity: Math.random() * 0.5 + 0.3
            });
        }
          
        function drawSoftStars() {
            stars.forEach(star => {
              ctx.beginPath();
              ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
              ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';
              ctx.shadowBlur = 5;
              ctx.fill();
            });
        }
          
        function drawSubtleFog() {
            const fogGrad = ctx.createRadialGradient(
              canvas.width / 2,
              canvas.height * 0.8,
              0,
              canvas.width / 2,
              canvas.height * 0.8,
              canvas.width * 0.7
            );
            fogGrad.addColorStop(0, 'rgba(255, 255, 255, 0.04)');
            fogGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
            ctx.fillStyle = fogGrad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        function drawGentleMoonlight() {
            const moonX = canvas.width * 0.75;
            const moonY = canvas.height * 0.25;
            const radius = 80;
          
            const glow = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, radius);
            glow.addColorStop(0, 'rgba(200, 220, 255, 0.15)');
            glow.addColorStop(1, 'rgba(200, 220, 255, 0)');
          
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(moonX, moonY, radius, 0, Math.PI * 2);
            ctx.fill();
        }

        const sparkles = [];
        for (let i = 0; i < 60; i++) {
          sparkles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.7,
            baseSize: Math.random() * 1 + 0.3,
            phase: Math.random() * Math.PI * 2
          });
        }

        function drawMagicalSparkles(time) {
            sparkles.forEach(s => {
              const twinkle = 0.5 + 0.5 * Math.sin(time * 0.003 + s.phase);
              const size = s.baseSize * twinkle;
              const alpha = 0.2 + 0.3 * twinkle;
          
              ctx.beginPath();
              ctx.arc(s.x, s.y, size, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 200, 255, ${alpha})`;
              ctx.shadowColor = 'rgba(255, 200, 255, 0.5)';
              ctx.shadowBlur = 4;
              ctx.fill();
            });
          }
        


        drawMidnightGradientBackground();
        drawSoftStars();
        drawGentleMoonlight();
        drawMagicalSparkles();
        drawSubtleFog();


        ctx.fillStyle = times[0].color;
        ctx.fillRect(times[0].x, times[0].y, times[0].width, times[0].height);
        ctx.fillStyle = `white`;
        ctx.fillRect(times[0].x, times[0].y, times[0].topwidth, times[0].topheight);

        
        ctx.fillStyle = times[1].color;
        ctx.fillRect(times[1].x, times[1].y, times[1].width, times[1].height);
        ctx.fillStyle = `white`;
        ctx.fillRect(times[1].x, times[1].y, times[1].topwidth, times[1].topheight);

        
        ctx.fillStyle = times[2].color;
        ctx.fillRect(times[2].x, times[2].y, times[2].width, times[2].height);
        ctx.fillStyle = `white`;
        ctx.fillRect(times[2].x, times[2].y, times[2].topwidth, times[2].topheight);
    

        ctx.fillStyle = times[3].color;
        ctx.fillRect(times[3].x, times[3].y, times[3].width, times[3].height);
        ctx.fillStyle = `white`;
        ctx.fillRect(times[3].x, times[3].y, times[3].topwidth, times[3].topheight);

        ctx.fillStyle = button3.color;
        ctx.fillRect(button3.x, button3.y, button3.width, button3.height );

        ctx.fillStyle = button4.color;
        ctx.fillRect(button4.x, button4.y, button4.width, button4.height );

        ctx.fillStyle = button5.color;
        ctx.fillRect(button5.x, button5.y, button5.width, button5.height );
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "30px Arial";

        ctx.fillStyle = `white`;
        ctx.fillText(
            `Proceed`,
            button3.x + button3.width / 2,
            button3.y + button3.height / 2
        )

        ctx.fillText(
            `Sell item`,
            button4.x + button4.width / 2,
            button4.y + button4.height / 2
        )

        ctx.fillText(
            `Buy item`,
            button5.x + button5.width / 2,
            button5.y + button5.height / 2
        )




        if(times[0].reserved === true){
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "30px Arial";

            ctx.fillStyle = `black`;
            ctx.fillText(
                `Reserved`,
                times[0].x + times[0].topwidth / 2,
                times[0].y + times[0].topheight / 2
            )
        }
        else{
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = "30px Arial";
    
                ctx.fillStyle = `black`;
                ctx.fillText(
                    `Unbooked`,
                    times[0].x + times[0].topwidth / 2,
                    times[0].y + times[0].topheight / 2
                )
        }

        if(times[1].reserved === true){
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "30px Arial";

            ctx.fillStyle = `black`;
            ctx.fillText(
                `Reserved`,
                times[1].x + times[1].topwidth / 2,
                times[1].y + times[1].topheight / 2
            )
        }
        else{

                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = "30px Arial";
    
                ctx.fillStyle = `black`;
                ctx.fillText(
                    `Unbooked`,
                    times[1].x + times[1].topwidth / 2,
                    times[1].y + times[1].topheight / 2
                )
        }
        if(times[2].reserved === true){
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "30px Arial";

            ctx.fillStyle = `black`;
            ctx.fillText(
                `Reserved`,
                times[2].x + times[2].topwidth / 2,
                times[2].y + times[2].topheight / 2
            )
        }
        else{
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = "30px Arial";
    
                ctx.fillStyle = `black`;
                ctx.fillText(
                    `Unbooked`,
                    times[2].x + times[2].topwidth / 2,
                    times[2].y + times[2].topheight / 2
                )
        }

        if(times[3].reserved === true){
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "30px Arial";

            ctx.fillStyle = `black`;
            ctx.fillText(
                `Reserved`,
                times[3].x + times[3].topwidth / 2,
                times[3].y + times[3].topheight / 2
            )
        }
        else{
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = "30px Arial";
    
                ctx.fillStyle = `black`;
                ctx.fillText(
                    `Unbooked`,
                    times[3].x + times[3].topwidth / 2,
                    times[3].y + times[3].topheight / 2
                )
        }

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "30px Arial";
        if(player.money >= 0){
            ctx.fillStyle = money.color;
    
        }
        else{
            ctx.fillStyle = `red`;
        }
    
        ctx.fillText(
        `$${player.money}`,
        money.x,
        money.y
        );
// Level line
ctx.fillStyle = 'white';
ctx.fillText('Level: ', canvas.width / 2, grid * 7.5);
const levelLabelWidth = ctx.measureText('Level:').width;

ctx.fillStyle = 'yellow';
ctx.fillText(`${player.level}`, canvas.width / 2 + levelLabelWidth, grid * 7.5);

// XP line
ctx.fillStyle = 'white';
ctx.fillText('XP:     ', canvas.width / 2, grid * 8.5);
const xpLabelWidth = ctx.measureText('XP:     ').width;

ctx.fillStyle = 'yellow';
ctx.fillText(`${player.experience} / ${player.level * 10}`, canvas.width / 2 + xpLabelWidth, grid * 8.5);

        

        seasonMech();
    
        ctx.font = "50px serif";
        ctx.fillStyle = `darkRed`;
    
        const monthName  = monthNames[player.month - 1];  // e.g., "April" :contentReference[oaicite:17]{index=17}
        ctx.fillText(
            `${player.year}`,
            canvas.width / 2,
            money.y
        );

        if (player.currentseason === seasons[0]) {
            // Spring
            ctx.fillStyle = '#00FF7F';
        } else if (player.currentseason === seasons[1]) {
            // Summer
            ctx.fillStyle = '#FFD700';
        } else if (player.currentseason === seasons[2]) {
            // Fall
            ctx.fillStyle = '#FF8C00';
        } else {
            // Winter
            ctx.fillStyle = '#B0E0E6';
        }
        
    

        ctx.fillText(
            `${monthName}`,
            canvas.width / 2,
            money.y + grid
        );
    }

    
if(player.experience >= player.level * 10){
    player.experience -= player.level * 10;
    player.level++;
}




}



function scene4() {



    canvas.style.backgroundColor = `blue`;







    if(scenerandomizer > 0.66){
// Sky
ctx.fillStyle = '#87ceeb';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Clouds
function drawCloud(x, y, scale) {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.beginPath();
  // Base puff
  ctx.arc(x, y, 25 * scale, 0, Math.PI * 2);
  // Side puffs
  ctx.arc(x + 30 * scale, y + 10 * scale, 20 * scale, 0, Math.PI * 2);
  ctx.arc(x - 30 * scale, y + 10 * scale, 20 * scale, 0, Math.PI * 2);
  // Top puff
  ctx.arc(x, y - 10 * scale, 22 * scale, 0, Math.PI * 2);
  // Bottom puff
  ctx.arc(x, y + 15 * scale, 18 * scale, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}

// Draw larger, more detailed clouds
drawCloud(grid * 2, grid * 2, 1.5);
drawCloud(grid * 7, grid * 1.5, 1.2);
drawCloud(grid * 12, grid * 2.5, 1.8);

// Ground
ctx.fillStyle = '#9c804b';
ctx.fillRect(0, grid * 10, canvas.width, canvas.height - grid * 10);

// Path
ctx.fillStyle = '#c2b280';
ctx.fillRect(grid * 6, grid * 10, grid * 3, grid * 5);

// Shop Building
ctx.fillStyle = '#deb887';
ctx.fillRect(grid * 4, grid * 6, grid * 7, grid * 4);

// Roof (centered)
ctx.fillStyle = '#8b0000';
ctx.beginPath();
const shopCenterX = grid * (4 + 7 / 2);
const roofPeakY = grid * 3.5;
ctx.moveTo(shopCenterX - (7 / 2 + 0.5) * grid, grid * 6);
ctx.lineTo(shopCenterX, roofPeakY);
ctx.lineTo(shopCenterX + (7 / 2 + 0.5) * grid, grid * 6);
ctx.closePath();
ctx.fill();

// Door
ctx.fillStyle = '#5c4033';
ctx.fillRect(grid * 6.7, grid * 8, grid * 1.5, grid * 2);

// Door knob
ctx.fillStyle = '#daa520';
ctx.beginPath();
ctx.arc(grid * 8, grid * 9, 5, 0, Math.PI * 2);
ctx.fill();

// Windows
ctx.fillStyle = '#add8e6';
ctx.fillRect(grid * 5, grid * 7, grid, grid);
ctx.fillRect(grid * 9, grid * 7, grid, grid);
ctx.strokeStyle = '#666';
ctx.beginPath();
// Window 1 cross
ctx.moveTo(grid * 5.5, grid * 7);
ctx.lineTo(grid * 5.5, grid * 8);
ctx.moveTo(grid * 5, grid * 7.5);
ctx.lineTo(grid * 6, grid * 7.5);
// Window 2 cross
ctx.moveTo(grid * 9.5, grid * 7);
ctx.lineTo(grid * 9.5, grid * 8);
ctx.moveTo(grid * 9, grid * 7.5);
ctx.lineTo(grid * 10, grid * 7.5);
ctx.stroke();

// Sign
ctx.fillStyle = '#a0522d';
ctx.fillRect(grid * 5.5, grid * 5.2, grid * 4, grid * 0.8);
ctx.fillStyle = '#fff';
ctx.font = 'bold 16px Arial';
ctx.textAlign = 'center';
ctx.fillText('Kool Kids Klub', grid * 7.5, grid * 5.8);
    }
    else if(scenerandomizer > 0.33){
// WALL BACKGROUND
const wallHeight = grid * 8;
const wallGrad = ctx.createLinearGradient(0, 0, 0, wallHeight);
wallGrad.addColorStop(0, '#A0522D');
wallGrad.addColorStop(1, '#7B3F1D');
ctx.fillStyle = wallGrad;
ctx.fillRect(0, 0, canvas.width, wallHeight);

// FLOOR BACKGROUND
const floorGrad = ctx.createLinearGradient(0, wallHeight, 0, canvas.height);
floorGrad.addColorStop(0, '#DEB887');
floorGrad.addColorStop(1, '#B8860B');
ctx.fillStyle = floorGrad;
ctx.fillRect(0, wallHeight, canvas.width, canvas.height - wallHeight);

// WINDOW (centered)
const winW = grid * 4, winH = grid * 2;
const winX = canvas.width / 2 - winW / 2, winY = grid * 2;
ctx.fillStyle = '#87CEEB';
ctx.fillRect(winX, winY, winW, winH);

// Window frame
ctx.strokeStyle = '#4B2E1A';
ctx.lineWidth = 5;
ctx.strokeRect(winX, winY, winW, winH);

// Mullions
ctx.strokeStyle = '#FFF';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(winX + winW / 2, winY);
ctx.lineTo(winX + winW / 2, winY + winH);
ctx.moveTo(winX, winY + winH / 2);
ctx.lineTo(winX + winW, winY + winH / 2);
ctx.stroke();

// Sill
ctx.fillStyle = '#5C4033';
ctx.fillRect(winX - 10, winY + winH, winW + 20, 12);

// DOOR (right side, enlarged to match window)
const doorW = winW * 0.75, doorH = winH * 2;
const doorX = canvas.width - grid * 1.5 - doorW, doorY = wallHeight - doorH;
ctx.fillStyle = '#5B3316';
ctx.fillRect(doorX, doorY, doorW, doorH);

// Door panels
ctx.strokeStyle = '#3B2312';
ctx.lineWidth = 3;
ctx.strokeRect(doorX + doorW * 0.1, doorY + doorH * 0.1, doorW * 0.8, doorH * 0.3);
ctx.strokeRect(doorX + doorW * 0.1, doorY + doorH * 0.6, doorW * 0.8, doorH * 0.3);

// Knob
ctx.fillStyle = 'gold';
ctx.beginPath();
ctx.arc(doorX + doorW * 0.85, doorY + doorH * 0.5, 5, 0, Math.PI * 2);
ctx.fill();

// TABLE (centered lower room, enlarged to match window width)
const tblW = winW, tblH = winH * 0.75;
const tblX = canvas.width / 2 - tblW / 2, tblY = wallHeight + grid * 2;
ctx.fillStyle = '#A0522D';
ctx.fillRect(tblX, tblY, tblW, tblH);

// Bevel highlight
ctx.strokeStyle = '#D2A56C';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(tblX, tblY);
ctx.lineTo(tblX + tblW, tblY);
ctx.stroke();

// Legs (scaled)
ctx.fillStyle = '#8B4513';
ctx.fillRect(tblX + tblW * 0.1, tblY + tblH, grid * 0.5, grid * 1.5);
ctx.fillRect(tblX + tblW * 0.9 - grid * 0.5, tblY + tblH, grid * 0.5, grid * 1.5);

    }
    else{
// CEILING
ctx.fillStyle = '#F0F8FF'; // Alice blue
ctx.fillRect(0, 0, canvas.width, grid * 2);

// CEILING LIGHTS
const lightW = 100, lightH = 20;
for (let i = 0; i < 3; i++) {
  const x = 50 + i * (lightW + 50);
  const y = grid;
  ctx.fillStyle = '#FFFFE0'; // Light yellow
  ctx.fillRect(x, y, lightW, lightH);
  ctx.strokeStyle = '#D3D3D3'; ctx.lineWidth = 2;
  ctx.strokeRect(x, y, lightW, lightH);
}

// WALL BACKGROUND
const wallHeight = grid * 8;
const wallGrad = ctx.createLinearGradient(0, 0, 0, wallHeight);
wallGrad.addColorStop(0, '#EAF0F6');
wallGrad.addColorStop(1, '#D3DCE6');
ctx.fillStyle = wallGrad;
ctx.fillRect(0, grid * 2, canvas.width, wallHeight - grid * 2);

// FLOOR BACKGROUND
const floorY = wallHeight;
const floorGrad = ctx.createLinearGradient(0, floorY, 0, canvas.height);
floorGrad.addColorStop(0, '#FFF8DC');
floorGrad.addColorStop(1, '#DEB887');
ctx.fillStyle = floorGrad;
ctx.fillRect(0, floorY, canvas.width, canvas.height - floorY);

// WINDOW
const winW = grid * 4, winH = grid * 3;
const winX = grid * 2, winY = grid * 3;
ctx.fillStyle = '#ADD8E6';
ctx.fillRect(winX, winY, winW, winH);
ctx.strokeStyle = '#FFFFFF'; ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(winX + winW / 2, winY);
ctx.lineTo(winX + winW / 2, winY + winH);
ctx.moveTo(winX, winY + winH / 2);
ctx.lineTo(winX + winW, winY + winH / 2);
ctx.stroke();

// DOOR
const doorW = grid * 2, doorH = grid * 5;
const doorX = canvas.width - doorW - grid, doorY = floorY - doorH;
ctx.fillStyle = '#8B4513';
ctx.fillRect(doorX, doorY, doorW, doorH);
ctx.strokeStyle = '#654321'; ctx.lineWidth = 3;
ctx.strokeRect(doorX, doorY, doorW, doorH);
// Doorknob
ctx.fillStyle = '#DAA520';
ctx.beginPath();
ctx.arc(doorX + doorW - grid * 0.5, doorY + doorH / 2, grid * 0.125, 0, Math.PI * 2);
ctx.fill();

// CLOCK (repositioned left by 4 grid units, pointing at 5:30)
const clockR = grid * 1.5;
const clockX = canvas.width - clockR - grid * 5;
const clockY = grid * 2 + clockR;
ctx.save();
ctx.translate(clockX, clockY);

// Clock face
ctx.fillStyle = '#FFF';
ctx.beginPath(); ctx.arc(0, 0, clockR, 0, Math.PI * 2); ctx.fill();
ctx.strokeStyle = '#000'; ctx.lineWidth = 2; ctx.stroke();

// Hands for 5:30
const hourAngle = (5.5 / 12) * Math.PI * 2;  // 5:30
const minuteAngle = (30 / 60) * Math.PI * 2;   

ctx.beginPath(); ctx.moveTo(0, 0);
ctx.lineTo(
  Math.cos(hourAngle - Math.PI/2) * clockR * 0.6,
  Math.sin(hourAngle - Math.PI/2) * clockR * 0.6
);
ctx.moveTo(0, 0);
ctx.lineTo(
  Math.cos(minuteAngle - Math.PI/2) * clockR * 0.9,
  Math.sin(minuteAngle - Math.PI/2) * clockR * 0.9
);
ctx.stroke();

ctx.restore();


// BULLETIN BOARD
const bW = grid * 3, bH = grid * 2;
const bX = grid, bY = grid * 9;
ctx.fillStyle = '#DEB887';
ctx.fillRect(bX, bY, bW, bH);
ctx.strokeStyle = '#8B4513'; ctx.lineWidth = 4;
ctx.strokeRect(bX, bY, bW, bH);
['red', 'blue', 'green'].forEach((col, i) => {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.arc(bX + grid + i * (grid * 1.5), bY + grid * 0.5, grid * 0.125, 0, Math.PI * 2);
  ctx.fill();
});

// CHALKBOARD & TEXT (aligned)
const chalkW = grid * 10, chalkH = grid * 3;
const chalkX = (canvas.width - chalkW) / 2, chalkY = grid * 3;
ctx.fillStyle = '#2F4F4F'; ctx.fillRect(chalkX, chalkY, chalkW, chalkH);
ctx.strokeStyle = '#654321'; ctx.lineWidth = 6;
ctx.strokeRect(chalkX, chalkY, chalkW, chalkH);
// Text
ctx.fillStyle = '#FFF';
ctx.font = `${grid * 0.8}px Arial`;
ctx.textBaseline = 'top';
const pad = grid * 0.5;
// Left-aligned
ctx.textAlign = 'left';
ctx.fillText("Today's Lesson:", chalkX + pad, chalkY + pad);
ctx.fillText('K = fc²', chalkX + pad, chalkY + pad + grid * 0.8 + pad);
// Right-aligned
ctx.textAlign = 'right';
ctx.fillText('45 + 45 = 135', chalkX + chalkW - pad, chalkY + chalkH - pad - grid * 0.8);
ctx.textAlign = 'start';

// ...rest of room elements remain the same...

    }


    ctx.fillStyle = bubblemsg.color;
    ctx.fillRect(bubblemsg.x, bubblemsg.y, bubblemsg.width, bubblemsg.height);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";

    if (times[player.week].sell === true) {

        if(player.selling !== undefined){
            if (scene4dialogues[atdialogue] === 'dialogue1' && Date.now() - secondDialogueTime >= 1000) {
                const fullText = `${customers[currentcustomer].name}: Hello, ${player.name}, I would like to buy the item you're selling, '${player.selling.name}', I would like to buy it for $${offer}?`;
                const maxWidth = bubblemsg.width - 20;
    
                if (ctx.measureText(fullText).width <= maxWidth) {
                    ctx.fillText(
                        fullText,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2
                    );
                } else {
                    const line1 = `${customers[currentcustomer].name}: Hello, ${player.name}, I would like to buy the item you're selling,`;
                    const line2 = `'${player.selling.name}', I would like to buy it for $${offer}?`;
    
                    ctx.fillText(
                        line1,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2 - 10
                    );
                    ctx.fillText(
                        line2,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2 + 10
                    );
                }
                if (Date.now() - secondDialogueTime >= 1500) {
                    //Left side button for... umm... negotiation.
            
                    ctx.fillStyle = `red`;
                    ctx.fillRect(bubblemsgcontinue.x - grid * 17, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "white";
                
                    ctx.fillText(
                    "Decline",
                    bubblemsgcontinue.x - grid * 17 + bubblemsgcontinue.x - grid * 19.5,
                    bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                    );
            
            
                    ctx.fillStyle = `green`;
                    ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "white";
                
                    ctx.fillText(
                    "Accept",
                    bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                    bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                    );
                }
            }
            if (scene4dialogues[atdialogue] === 'dialogue2' && Date.now() - secondDialogueTime >= 1000) {
                const fullText = `${customers[currentcustomer].name}: How about $${offer}?, that seems like a reasonable offer.`;
                const maxWidth = bubblemsg.width - 20;
    
                if (ctx.measureText(fullText).width <= maxWidth) {
                    ctx.fillText(
                        fullText,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2
                    );
                } else {
                    const line1 = `${customers[currentcustomer].name}: How about $${offer}?`;
                    const line2 = `'that seems like a reasonable offer.`;
    
                    ctx.fillText(
                        line1,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2 - 10
                    );
                    ctx.fillText(
                        line2,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2 + 10
                    );
                }
                if (Date.now() - secondDialogueTime >= 1500) {
                    //Left side button for... umm... negotiation.
            
                    ctx.fillStyle = `red`;
                    ctx.fillRect(bubblemsgcontinue.x - grid * 17, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "white";
                
                    ctx.fillText(
                    "Decline",
                    bubblemsgcontinue.x - grid * 17 + bubblemsgcontinue.x - grid * 19.5,
                    bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                    );
            
            
                    ctx.fillStyle = `green`;
                    ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "white";
                
                    ctx.fillText(
                    "Accept",
                    bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                    bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                    );
                }
            }
            if (scene4dialogues[atdialogue] === 'dialogue3' && Date.now() - secondDialogueTime >= 1000) {
                const fullText = `${customers[currentcustomer].name}: How about $${offer}?, that seems like a reasonable offer.`;
                const maxWidth = bubblemsg.width - 20;
    
                if (ctx.measureText(fullText).width <= maxWidth) {
                    ctx.fillText(
                        fullText,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2
                    );
                } else {
                    const line1 = `${customers[currentcustomer].name}: How about $${offer}?`;
                    const line2 = `'that seems like a reasonable offer.`;
    
                    ctx.fillText(
                        line1,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2 - 10
                    );
                    ctx.fillText(
                        line2,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2 + 10
                    );
                }
                if (Date.now() - secondDialogueTime >= 1500) {
                    //Left side button for... umm... negotiation.
            
                    ctx.fillStyle = `red`;
                    ctx.fillRect(bubblemsgcontinue.x - grid * 17, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "white";
                
                    ctx.fillText(
                    "Decline",
                    bubblemsgcontinue.x - grid * 17 + bubblemsgcontinue.x - grid * 19.5,
                    bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                    );
            
            
                    ctx.fillStyle = `green`;
                    ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "white";
                
                    ctx.fillText(
                    "Accept",
                    bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                    bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                    );
                }
            }

            if (scene4dialogues[atdialogue] === 'dialogue4' && Date.now() - secondDialogueTime >= 1000) {
                if(refused){
                        const fullText = `${customers[currentcustomer].name}: Altright, This is going nowhere, what i offered was already reasonable, let's just forget it for the time being.`;
                        const maxWidth = bubblemsg.width - 20; // add some padding
                
                        // Measure text width
                        ctx.fillStyle = "red";
                        if (ctx.measureText(fullText).width <= maxWidth) {
                            // It fits — draw single line
                            ctx.fillText(
                            fullText,
                            bubblemsg.x + bubblemsg.width / 2,
                            bubblemsg.y + bubblemsg.height / 2
                            );
                        } else {
                            // It doesn't fit — split it manually into two lines
                            // Naive split: split in the middle of the sentence
                            const line1 = `${customers[currentcustomer].name}: Altright, This is going nowhere, what i offered was`;
                            const line2 = `already reasonable, let's just forget it for the time being.`;
                
                
                            ctx.fillText(
                                line1,
                                bubblemsg.x + bubblemsg.width / 2,
                                bubblemsg.y + bubblemsg.height / 2 - 10
                            );
                        
                            ctx.fillText(
                                line2,
                                bubblemsg.x + bubblemsg.width / 2,
                                bubblemsg.y + bubblemsg.height / 2 + 10
                            );
                        }
                    
                    if (Date.now() - secondDialogueTime >= 1500) {
                        //Left side button for... umm... negotiation.
                
                        ctx.fillStyle = bubblemsgcontinue.color;
                        ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.font = "30px Arial";
                        ctx.fillStyle = "white";
                    
                        ctx.fillText(
                        "Continue",
                        bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                        bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                        );
                    }
                }
                else{
                    const fullText = `${customers[currentcustomer].name}: Altright, it was a pleasure doing business with you, i know exactly what i'm gonna do with this ${player.selling.name}!`;
                    const maxWidth = bubblemsg.width - 20; // add some padding
            
                    // Measure text width
                    ctx.fillStyle = "lightGreen";
                    if (ctx.measureText(fullText).width <= maxWidth) {
                        // It fits — draw single line
                        ctx.fillText(
                        fullText,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2
                        );
                    } else {
                        // It doesn't fit — split it manually into two lines
                        // Naive split: split in the middle of the sentence
                        const line1 = `${customers[currentcustomer].name}: Altright, it was a pleasure doing business with you, i know`;
                        const line2 = `exactly what i'm gonna do with this ${player.selling.name}!`;
            
            
                        ctx.fillText(
                            line1,
                            bubblemsg.x + bubblemsg.width / 2,
                            bubblemsg.y + bubblemsg.height / 2 - 10
                        );
                    
                        ctx.fillText(
                            line2,
                            bubblemsg.x + bubblemsg.width / 2,
                            bubblemsg.y + bubblemsg.height / 2 + 10
                        );
                    }
                    if (Date.now() - secondDialogueTime >= 1500) {
                        //Left side button for... umm... negotiation.
                
                        ctx.fillStyle = bubblemsgcontinue.color;
                        ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.font = "30px Arial";
                        ctx.fillStyle = "white";
                    
                        ctx.fillText(
                        "Continue",
                        bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                        bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                        );
                    }
                }


            }
        } // if undefined then
        else if(player.selling === undefined && Date.now() - secondDialogueTime >= 1000){
            ctx.fillStyle = "red";
            const fullText = `${customers[currentcustomer].name}: Hello, ${player.name}, it seems like you're not even selling anything, you're just wasting my time!`;
            const maxWidth = bubblemsg.width - 20;
    
            if (ctx.measureText(fullText).width <= maxWidth) {
                ctx.fillText(
                    fullText,
                    bubblemsg.x + bubblemsg.width / 2,
                    bubblemsg.y + bubblemsg.height / 2
                );
            } else {
                const line1 = `${customers[currentcustomer].name}: Hello, ${player.name}, it seems like`;
                const line2 = `you're not even selling anything, you're just wasting my time!`;
    
                ctx.fillText(
                    line1,
                    bubblemsg.x + bubblemsg.width / 2,
                    bubblemsg.y + bubblemsg.height / 2 - 10
                );
                ctx.fillText(
                    line2,
                    bubblemsg.x + bubblemsg.width / 2,
                    bubblemsg.y + bubblemsg.height / 2 + 10
                );
            }

            if (Date.now() - secondDialogueTime >= 1500) {
                //Left side button for... umm... negotiation.
        
                ctx.fillStyle = bubblemsgcontinue.color;
                ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = "30px Arial";
                ctx.fillStyle = "white";
            
                ctx.fillText(
                "Continue",
                bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                );
            }
        };





        





    }
    else{

        if(scene4dialogues[atdialogue] === 'dialogue1' && Date.now() - secondDialogueTime >= 1000){
        
            
                const fullText = `${customers[currentcustomer].name}: Hello ${player.name}, I have the item you are looking for '${sell.name}', I am currently selling it for $${customerselloffer}, do you want to buy it?`;
                const maxWidth = bubblemsg.width - 20;
        
                if (ctx.measureText(fullText).width <= maxWidth) {
                    ctx.fillText(
                        fullText,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2
                    );
                } else {
                    const line1 = `${customers[currentcustomer].name}: Hello ${player.name}, I have the item you are looking for '${sell.name}', I`;
                    const line2 = `am currently selling it for $${customerselloffer}, do you want to buy it?`;
        
                    ctx.fillText(
                        line1,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2 - 10
                    );
                    ctx.fillText(
                        line2,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2 + 10
                    );
            }
        
            
    
            if (Date.now() - secondDialogueTime >= 1500) {
                //Left side button for... umm... negotiation.
        
                ctx.fillStyle = `red`;
                ctx.fillRect(bubblemsgcontinue.x - grid * 17, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = "30px Arial";
                ctx.fillStyle = "white";
            
                ctx.fillText(
                "Decline",
                bubblemsgcontinue.x - grid * 17 + bubblemsgcontinue.x - grid * 19.5,
                bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                );
        
        
                ctx.fillStyle = `green`;
                ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = "30px Arial";
                ctx.fillStyle = "white";
            
                ctx.fillText(
                "Accept",
                bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                );
            }
        
        }
        

        if(scene4dialogues[atdialogue] === 'dialogue2' && Date.now() - secondDialogueTime >= 1000){
            const fullText = `${customers[currentcustomer].name}: Alright, how about i sell it for $${customerselloffer}, do you want to buy it now?`;
            const maxWidth = bubblemsg.width - 20;
    
            if (ctx.measureText(fullText).width <= maxWidth) {
                ctx.fillText(
                    fullText,
                    bubblemsg.x + bubblemsg.width / 2,
                    bubblemsg.y + bubblemsg.height / 2
                );
            } else {
                const line1 = `${customers[currentcustomer].name}: Alright, how about i sell it for`;
                const line2 = `$${customerselloffer}, do you want to buy it now?`;
    
                ctx.fillText(
                    line1,
                    bubblemsg.x + bubblemsg.width / 2,
                    bubblemsg.y + bubblemsg.height / 2 - 10
                );
                ctx.fillText(
                    line2,
                    bubblemsg.x + bubblemsg.width / 2,
                    bubblemsg.y + bubblemsg.height / 2 + 10
                );
            }
    
            if (Date.now() - secondDialogueTime >= 1500) {
                //Left side button for... umm... negotiation.
        
                ctx.fillStyle = `red`;
                ctx.fillRect(bubblemsgcontinue.x - grid * 17, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = "30px Arial";
                ctx.fillStyle = "white";
            
                ctx.fillText(
                "Decline",
                bubblemsgcontinue.x - grid * 17 + bubblemsgcontinue.x - grid * 19.5,
                bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                );
        
        
                ctx.fillStyle = `green`;
                ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = "30px Arial";
                ctx.fillStyle = "white";
            
                ctx.fillText(
                "Accept",
                bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                );
            }
        }
        else if(scene4dialogues[atdialogue] === 'dialogue3' && Date.now() - secondDialogueTime >= 1000){
            const fullText = `${customers[currentcustomer].name}: How about i sell it for $${customerselloffer}, do you want to buy it now?`;
            const maxWidth = bubblemsg.width - 20;
    
            if (ctx.measureText(fullText).width <= maxWidth) {
                ctx.fillText(
                    fullText,
                    bubblemsg.x + bubblemsg.width / 2,
                    bubblemsg.y + bubblemsg.height / 2
                );
            } else {
                const line1 = `${customers[currentcustomer].name}: How about i sell it for`;
                const line2 = `$${customerselloffer}, do you want to buy it now?`;
    
                ctx.fillText(
                    line1,
                    bubblemsg.x + bubblemsg.width / 2,
                    bubblemsg.y + bubblemsg.height / 2 - 10
                );
                ctx.fillText(
                    line2,
                    bubblemsg.x + bubblemsg.width / 2,
                    bubblemsg.y + bubblemsg.height / 2 + 10
                );
            }
    
            if (Date.now() - secondDialogueTime >= 1500) {
                //Left side button for... umm... negotiation.
        
                ctx.fillStyle = `red`;
                ctx.fillRect(bubblemsgcontinue.x - grid * 17, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = "30px Arial";
                ctx.fillStyle = "white";
            
                ctx.fillText(
                "Decline",
                bubblemsgcontinue.x - grid * 17 + bubblemsgcontinue.x - grid * 19.5,
                bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                );
        
        
                ctx.fillStyle = `green`;
                ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.font = "30px Arial";
                ctx.fillStyle = "white";
            
                ctx.fillText(
                "Accept",
                bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                );
            }
        }
        if (scene4dialogues[atdialogue] === 'dialogue4' && Date.now() - secondDialogueTime >= 1000) {
            if(refused){
                if(player.inventory.length >= player.maximum){
                    ctx.fillStyle = `red`;
                    const fullText = `${customers[currentcustomer].name}: Hello ${player.name}, It seems like you don't have enough space to store my item '${sell.name}', I am currently selling it for $${customerselloffer} so let's talk about this after you free up some space.`;
                    const maxWidth = bubblemsg.width - 20;
            
                    if (ctx.measureText(fullText).width <= maxWidth) {
                        ctx.fillText(
                            fullText,
                            bubblemsg.x + bubblemsg.width / 2,
                            bubblemsg.y + bubblemsg.height / 2
                        );
                    } else {
                        const line1 = `${customers[currentcustomer].name}: Hello ${player.name}, It seems like you don't have enough `;
                        const line2 = `space to store my item '${sell.name}', I am currently selling it for $${customerselloffer} `;
                        const line3 = `so let's talk about this after you free up some space.`
            
                        ctx.fillText(
                            line1,
                            bubblemsg.x + bubblemsg.width / 2,
                            bubblemsg.y + bubblemsg.height / 2 - 10
                        );
                        ctx.fillText(
                            line2,
                            bubblemsg.x + bubblemsg.width / 2,
                            bubblemsg.y + bubblemsg.height / 2 + 10
                        );
                        ctx.fillText(
                            line3,
                            bubblemsg.x + bubblemsg.width / 2,
                            bubblemsg.y + bubblemsg.height / 2 + 30
                        );
                    }

                    if (Date.now() - secondDialogueTime >= 1500) {
                        //Left side button for... umm... negotiation.
                
                        ctx.fillStyle = bubblemsgcontinue.color;
                        ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.font = "30px Arial";
                        ctx.fillStyle = "white";
                    
                        ctx.fillText(
                        "Continue",
                        bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                        bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                        );
                    }
                }
                else if(player.money < sell.price){
                    const fullText = `${customers[currentcustomer].name}: You don't even have enough money to buy my '${sell.name}',i suggest you earn some money first, let's just forget it for the time being.`;
                    const maxWidth = bubblemsg.width - 20; // add some padding
            
                    // Measure text width
                    ctx.fillStyle = "red";
                    if (ctx.measureText(fullText).width <= maxWidth) {
                        // It fits — draw single line
                        ctx.fillText(
                        fullText,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2
                        );
                    } else {
                        // It doesn't fit — split it manually into two lines
                        // Naive split: split in the middle of the sentence
                        const line1 = `${customers[currentcustomer].name}: You don't even have enough money to buy my '${sell.name}',i suggest`;
                        const line2 = `you earn some money first, let's just forget it for the time being.`;
            
            
                        ctx.fillText(
                            line1,
                            bubblemsg.x + bubblemsg.width / 2,
                            bubblemsg.y + bubblemsg.height / 2 - 10
                        );
                    
                        ctx.fillText(
                            line2,
                            bubblemsg.x + bubblemsg.width / 2,
                            bubblemsg.y + bubblemsg.height / 2 + 10
                        );

                        if (Date.now() - secondDialogueTime >= 1500) {
                            //Left side button for... umm... negotiation.
                    
                            ctx.fillStyle = bubblemsgcontinue.color;
                            ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                            ctx.textAlign = "center";
                            ctx.textBaseline = "middle";
                            ctx.font = "30px Arial";
                            ctx.fillStyle = "white";
                        
                            ctx.fillText(
                            "Continue",
                            bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                            bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                            );
                        }
                    }
                }

                else{
                    const fullText = `${customers[currentcustomer].name}: Altright, This is going nowhere, what i offered was already reasonable, let's just forget it for the time being.`;
                    const maxWidth = bubblemsg.width - 20; // add some padding
            
                    // Measure text width
                    ctx.fillStyle = "red";
                    if (ctx.measureText(fullText).width <= maxWidth) {
                        // It fits — draw single line
                        ctx.fillText(
                        fullText,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2
                        );
                    } else {
                        // It doesn't fit — split it manually into two lines
                        // Naive split: split in the middle of the sentence
                        const line1 = `${customers[currentcustomer].name}: Altright, This is going nowhere, what i offered was`;
                        const line2 = `already reasonable, let's just forget it for the time being.`;
            
            
                        ctx.fillText(
                            line1,
                            bubblemsg.x + bubblemsg.width / 2,
                            bubblemsg.y + bubblemsg.height / 2 - 10
                        );
                    
                        ctx.fillText(
                            line2,
                            bubblemsg.x + bubblemsg.width / 2,
                            bubblemsg.y + bubblemsg.height / 2 + 10
                        );
                    }
                    if (Date.now() - secondDialogueTime >= 1500) {
                        //Left side button for... umm... negotiation.
                
                        ctx.fillStyle = bubblemsgcontinue.color;
                        ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.font = "30px Arial";
                        ctx.fillStyle = "white";
                    
                        ctx.fillText(
                        "Continue",
                        bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                        bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                        );
                    }
                }

            }
            else{
                const fullText = `${customers[currentcustomer].name}: Altright, it was a pleasure doing business with you, i hope you enjoy that ${sell.name} as much as i enjoyed it!`;
                const maxWidth = bubblemsg.width - 20; // add some padding
        
                // Measure text width
                ctx.fillStyle = "lightGreen";
                if (ctx.measureText(fullText).width <= maxWidth) {
                    // It fits — draw single line
                    ctx.fillText(
                    fullText,
                    bubblemsg.x + bubblemsg.width / 2,
                    bubblemsg.y + bubblemsg.height / 2
                    );
                } else {
                    // It doesn't fit — split it manually into two lines
                    // Naive split: split in the middle of the sentence
                    const line1 = `${customers[currentcustomer].name}: Altright, it was a pleasure doing business with you, i hope`;
                    const line2 = `you enjoy that ${sell.name} as much as i enjoyed it!`;
        
        
                    ctx.fillText(
                        line1,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2 - 10
                    );
                
                    ctx.fillText(
                        line2,
                        bubblemsg.x + bubblemsg.width / 2,
                        bubblemsg.y + bubblemsg.height / 2 + 10
                    );
                }
                
                if (Date.now() - secondDialogueTime >= 1500) {
                    //Left side button for... umm... negotiation.
                
                    ctx.fillStyle = bubblemsgcontinue.color;
                    ctx.fillRect(bubblemsgcontinue.x, bubblemsgcontinue.y, bubblemsgcontinue.width, bubblemsgcontinue.height );
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.font = "30px Arial";
                    ctx.fillStyle = "white";
                
                    ctx.fillText(
                    "Continue",
                    bubblemsgcontinue.x + bubblemsgcontinue.width / 2,
                    bubblemsgcontinue.y + bubblemsgcontinue.height / 2
                    );
                }
            }

        }

        
        
    }




    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "30px Arial";
    if(money.money >= 0){
        ctx.fillStyle = money.color;

    }
    else{
        ctx.fillStyle = `red`;
    }

    ctx.fillText(
    `$${player.money}`,
    money.x,
    money.y
    );


}

function scene5(){

      // Draw royal blue background
      ctx.fillStyle = '#002366'; // Royal blue
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw bold gold border with rounded corners
      ctx.lineWidth = 12;
      ctx.strokeStyle = '#FFD700'; // Gold
      ctx.lineJoin = 'round';
      ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

      // Draw decorative stars at corners
      function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius;
          y = cy + Math.sin(rot) * outerRadius;
          ctx.lineTo(x, y);
          rot += step;

          x = cx + Math.cos(rot) * innerRadius;
          y = cy + Math.sin(rot) * innerRadius;
          ctx.lineTo(x, y);
          rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fillStyle = '#FFD700';
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Positions for stars
      const starPositions = [
        { x: 60, y: 60 },
        { x: canvas.width - 60, y: 60 },
        { x: 60, y: canvas.height - 60 },
        { x: canvas.width - 60, y: canvas.height - 60 }
      ];

      starPositions.forEach(pos => {
        drawStar(pos.x, pos.y, 5, 20, 10);
      });

      // Add "Inventory" title with cartoon-style font
      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 60px "GFS Didot", cursive, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Inventory', canvas.width / 2, 100);

      // Optional: Add playful swirls on sides
      function drawSwirl(x, y, radius, loops) {
        ctx.beginPath();
        for (let i = 0; i < loops * Math.PI; i += 0.1) {
          let dx = x + radius * i * Math.cos(i);
          let dy = y + radius * i * Math.sin(i);
          ctx.lineTo(dx, dy);
        }
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      drawSwirl(100, 200, 0.5, 3);
      drawSwirl(canvas.width - 100, 200, 0.5, 3);




      // display
  // Button


  /*
  ctx.fillStyle = inventorybtn[0].color;
  ctx.fillRect(inventorybtn[0].x, inventorybtn[0].y, inventorybtn[0].width, inventorybtn[0].height);

  ctx.fillStyle = inventorybtn[1].color;
  ctx.fillRect(inventorybtn[1].x, inventorybtn[1].y, inventorybtn[1].width, inventorybtn[1].height);

  ctx.fillStyle = inventorybtn[2].color;
  ctx.fillRect(inventorybtn[2].x, inventorybtn[2].y, inventorybtn[2].width, inventorybtn[2].height);

  ctx.fillStyle = inventorybtn[3].color;
  ctx.fillRect(inventorybtn[3].x, inventorybtn[3].y, inventorybtn[3].width, inventorybtn[3].height);

  ctx.fillStyle = inventorybtn[4].color;
  ctx.fillRect(inventorybtn[4].x, inventorybtn[4].y, inventorybtn[4].width, inventorybtn[4].height);

  ctx.fillStyle = inventorybtn[5].color;
  ctx.fillRect(inventorybtn[5].x, inventorybtn[5].y, inventorybtn[5].width, inventorybtn[5].height);

  ctx.fillStyle = inventorybtn[6].color;
  ctx.fillRect(inventorybtn[6].x, inventorybtn[6].y, inventorybtn[6].width, inventorybtn[6].height);

  ctx.fillStyle = inventorybtn[7].color;
  ctx.fillRect(inventorybtn[7].x, inventorybtn[7].y, inventorybtn[7].width, inventorybtn[7].height);

  */


                                                          //test, probably should have done this instead hehe.//
  inventorybtn.forEach(Btn => {                          //__________________________________________________//
    ctx.fillStyle = Btn.color;                          //__________________________________________________//
  ctx.fillRect(Btn.x, Btn.y, Btn.width, Btn.height);   //__________________________________________________//
  });                                                 // _________update, it works, i hate my life._______//
                                                     //__________________________________________________//
                                                    //__________________________________________________//
  //                                                  
  //  
  // SET DISPLAY NAME HERE
  //
  //

  /*

  if(player.inventory.length >= 1){

    if(player.inventory.length >= 2){
      if(player.inventory.length >= 3){
          if(player.inventory.length >= 4){
              if(player.inventory.length >= 5){
                  if(player.inventory.length >= 6){
                      if(player.inventory.length >= 7){
                          if(player.inventory.length >= 8){

                          // Slot 1
                          ctx.fillStyle = 'black'; 
                          ctx.font = '20px serif'; 
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'top';

                          const padding2 = 8;
                          const maxWidth2 = inventorybtn[1].width - padding2 * 2;
                          const x2 = inventorybtn[1].x + inventorybtn[1].width / 2;
                          const yStart2 = inventorybtn[1].y + padding2;

                          let text2 = (inventorybtn[1].item && inventorybtn[1].item.name) ? inventorybtn[1].item.name.name : 'none';

                          function wrapText2(ctx, text2, x2, y2, maxWidth2, lineHeight2) {
                            const words = text2.split(' ');
                            let line = '';
                            let lines = [];

                            for (let n = 0; n < words.length; n++) {
                              const testLine = line + words[n] + ' ';
                              const metrics = ctx.measureText(testLine);
                              const testWidth = metrics.width;

                              if (testWidth > maxWidth2 && n > 0) {
                                lines.push(line);
                                line = words[n] + ' ';
                              } else {
                                line = testLine;
                              }
                            }
                            lines.push(line); 

                            for (let i = 0; i < lines.length; i++) {
                              ctx.fillText(lines[i].trim(), x2, y2 + i * lineHeight2);
                            }
                          }

                          wrapText2(ctx, text2, x2, yStart2, maxWidth2, 16);

                          // Slot 2
                          ctx.fillStyle = 'black'; 
                          ctx.font = '20px serif'; 
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'top';

                          const padding3 = 8;
                          const maxWidth3 = inventorybtn[2].width - padding3 * 2;
                          const x3 = inventorybtn[2].x + inventorybtn[2].width / 2;
                          const yStart3 = inventorybtn[2].y + padding3;

                          let text3 = (inventorybtn[2].item && inventorybtn[2].item.name) ? inventorybtn[2].item.name.name : 'none';

                          function wrapText3(ctx, text3, x3, y3, maxWidth3, lineHeight3) {
                            const words = text3.split(' ');
                            let line = '';
                            let lines = [];

                            for (let n = 0; n < words.length; n++) {
                              const testLine = line + words[n] + ' ';
                              const metrics = ctx.measureText(testLine);
                              const testWidth = metrics.width;

                              if (testWidth > maxWidth3 && n > 0) {
                                lines.push(line);
                                line = words[n] + ' ';
                              } else {
                                line = testLine;
                              }
                            }
                            lines.push(line); 

                            for (let i = 0; i < lines.length; i++) {
                              ctx.fillText(lines[i].trim(), x3, y3 + i * lineHeight3);
                            }
                          }

                          wrapText3(ctx, text3, x3, yStart3, maxWidth3, 16);

                          // Slot 3
                          ctx.fillStyle = 'black'; 
                          ctx.font = '20px serif'; 
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'top';

                          const padding4 = 8;
                          const maxWidth4 = inventorybtn[3].width - padding4 * 2;
                          const x4 = inventorybtn[3].x + inventorybtn[3].width / 2;
                          const yStart4 = inventorybtn[3].y + padding4;

                          let text4 = (inventorybtn[3].item && inventorybtn[3].item.name) ? inventorybtn[3].item.name.name : 'none';

                          function wrapText4(ctx, text4, x4, y4, maxWidth4, lineHeight4) {
                            const words = text4.split(' ');
                            let line = '';
                            let lines = [];

                            for (let n = 0; n < words.length; n++) {
                              const testLine = line + words[n] + ' ';
                              const metrics = ctx.measureText(testLine);
                              const testWidth = metrics.width;

                              if (testWidth > maxWidth4 && n > 0) {
                                lines.push(line);
                                line = words[n] + ' ';
                              } else {
                                line = testLine;
                              }
                            }
                            lines.push(line); 

                            for (let i = 0; i < lines.length; i++) {
                              ctx.fillText(lines[i].trim(), x4, y4 + i * lineHeight4);
                            }
                          }

                          wrapText4(ctx, text4, x4, yStart4, maxWidth4, 16);

                          // Slot 4
                          ctx.fillStyle = 'black'; 
                          ctx.font = '20px serif'; 
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'top';

                          const padding5 = 8;
                          const maxWidth5 = inventorybtn[4].width - padding5 * 2;
                          const x5 = inventorybtn[4].x + inventorybtn[4].width / 2;
                          const yStart5 = inventorybtn[4].y + padding5;

                          let text5 = (inventorybtn[4].item && inventorybtn[4].item.name) ? inventorybtn[4].item.name.name : 'none';

                          function wrapText5(ctx, text5, x5, y5, maxWidth5, lineHeight5) {
                            const words = text5.split(' ');
                            let line = '';
                            let lines = [];

                            for (let n = 0; n < words.length; n++) {
                              const testLine = line + words[n] + ' ';
                              const metrics = ctx.measureText(testLine);
                              const testWidth = metrics.width;

                              if (testWidth > maxWidth5 && n > 0) {
                                lines.push(line);
                                line = words[n] + ' ';
                              } else {
                                line = testLine;
                              }
                            }
                            lines.push(line); 

                            for (let i = 0; i < lines.length; i++) {
                              ctx.fillText(lines[i].trim(), x5, y5 + i * lineHeight5);
                            }
                          }

                          wrapText5(ctx, text5, x5, yStart5, maxWidth5, 16);

                          // Slot 5
                          ctx.fillStyle = 'black'; 
                          ctx.font = '20px serif'; 
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'top';

                          const padding6 = 8;
                          const maxWidth6 = inventorybtn[5].width - padding6 * 2;
                          const x6 = inventorybtn[5].x + inventorybtn[5].width / 2;
                          const yStart6 = inventorybtn[5].y + padding6;

                          let text6 = (inventorybtn[5].item && inventorybtn[5].item.name) ? inventorybtn[5].item.name.name : 'none';

                          function wrapText6(ctx, text6, x6, y6, maxWidth6, lineHeight6) {
                            const words = text6.split(' ');
                            let line = '';
                            let lines = [];

                            for (let n = 0; n < words.length; n++) {
                              const testLine = line + words[n] + ' ';
                              const metrics = ctx.measureText(testLine);
                              const testWidth = metrics.width;

                              if (testWidth > maxWidth6 && n > 0) {
                                lines.push(line);
                                line = words[n] + ' ';
                              } else {
                                line = testLine;
                              }
                            }
                            lines.push(line); 

                            for (let i = 0; i < lines.length; i++) {
                              ctx.fillText(lines[i].trim(), x6, y6 + i * lineHeight6);
                            }
                          }

                          wrapText6(ctx, text6, x6, yStart6, maxWidth6, 16);

                          // Slot 6
                          ctx.fillStyle = 'black'; 
                          ctx.font = '20px serif'; 
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'top';

                          const padding7 = 8;
                          const maxWidth7 = inventorybtn[6].width - padding7 * 2;
                          const x7 = inventorybtn[6].x + inventorybtn[6].width / 2;
                          const yStart7 = inventorybtn[6].y + padding7;

                          let text7 = (inventorybtn[6].item && inventorybtn[6].item.name) ? inventorybtn[6].item.name.name : 'none';

                          function wrapText7(ctx, text7, x7, y7, maxWidth7, lineHeight7) {
                            const words = text7.split(' ');
                            let line = '';
                            let lines = [];

                            for (let n = 0; n < words.length; n++) {
                              const testLine = line + words[n] + ' ';
                              const metrics = ctx.measureText(testLine);
                              const testWidth = metrics.width;

                              if (testWidth > maxWidth7 && n > 0) {
                                lines.push(line);
                                line = words[n] + ' ';
                              } else {
                                line = testLine;
                              }
                            }
                            lines.push(line); 

                            for (let i = 0; i < lines.length; i++) {
                              ctx.fillText(lines[i].trim(), x7, y7 + i * lineHeight7);
                            }
                          }

                          wrapText7(ctx, text7, x7, yStart7, maxWidth7, 16);

                          // Slot 7
                          ctx.fillStyle = 'black'; 
                          ctx.font = '20px serif'; 
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'top';

                          const padding8 = 8;
                          const maxWidth8 = inventorybtn[7].width - padding8 * 2;
                          const x8 = inventorybtn[7].x + inventorybtn[7].width / 2;
                          const yStart8 = inventorybtn[7].y + padding8;

                          let text8 = (inventorybtn[7].item && inventorybtn[7].item.name) ? inventorybtn[7].item.name.name : 'none';

                          function wrapText8(ctx, text8, x8, y8, maxWidth8, lineHeight8) {
                            const words = text8.split(' ');
                            let line = '';
                            let lines = [];

                            for (let n = 0; n < words.length; n++) {
                              const testLine = line + words[n] + ' ';
                              const metrics = ctx.measureText(testLine);
                              const testWidth = metrics.width;

                              if (testWidth > maxWidth8 && n > 0) {
                                lines.push(line);
                                line = words[n] + ' ';
                              } else {
                                line = testLine;
                              }
                            }
                            lines.push(line); 

                            for (let i = 0; i < lines.length; i++) {
                              ctx.fillText(lines[i].trim(), x8, y8 + i * lineHeight8);
                            }
                          }

                          wrapText8(ctx, text8, x8, yStart8, maxWidth8, 16);

                          }
                          else{

                              // Slot 1
                              ctx.fillStyle = 'black'; 
                              ctx.font = '20px serif'; 
                              ctx.textAlign = 'center';
                              ctx.textBaseline = 'top';

                              const padding2 = 8;
                              const maxWidth2 = inventorybtn[1].width - padding2 * 2;
                              const x2 = inventorybtn[1].x + inventorybtn[1].width / 2;
                              const yStart2 = inventorybtn[1].y + padding2;

                              let text2 = (inventorybtn[1].item && inventorybtn[1].item.name) ? inventorybtn[1].item.name.name : 'none';

                              function wrapText2(ctx, text2, x2, y2, maxWidth2, lineHeight2) {
                                const words = text2.split(' ');
                                let line = '';
                                let lines = [];

                                for (let n = 0; n < words.length; n++) {
                                  const testLine = line + words[n] + ' ';
                                  const metrics = ctx.measureText(testLine);
                                  const testWidth = metrics.width;

                                  if (testWidth > maxWidth2 && n > 0) {
                                    lines.push(line);
                                    line = words[n] + ' ';
                                  } else {
                                    line = testLine;
                                  }
                                }
                                lines.push(line); 

                                for (let i = 0; i < lines.length; i++) {
                                  ctx.fillText(lines[i].trim(), x2, y2 + i * lineHeight2);
                                }
                              }

                              wrapText2(ctx, text2, x2, yStart2, maxWidth2, 16);

                              // Slot 2
                              ctx.fillStyle = 'black'; 
                              ctx.font = '20px serif'; 
                              ctx.textAlign = 'center';
                              ctx.textBaseline = 'top';

                              const padding3 = 8;
                              const maxWidth3 = inventorybtn[2].width - padding3 * 2;
                              const x3 = inventorybtn[2].x + inventorybtn[2].width / 2;
                              const yStart3 = inventorybtn[2].y + padding3;

                              let text3 = (inventorybtn[2].item && inventorybtn[2].item.name) ? inventorybtn[2].item.name.name : 'none';

                              function wrapText3(ctx, text3, x3, y3, maxWidth3, lineHeight3) {
                                const words = text3.split(' ');
                                let line = '';
                                let lines = [];

                                for (let n = 0; n < words.length; n++) {
                                  const testLine = line + words[n] + ' ';
                                  const metrics = ctx.measureText(testLine);
                                  const testWidth = metrics.width;

                                  if (testWidth > maxWidth3 && n > 0) {
                                    lines.push(line);
                                    line = words[n] + ' ';
                                  } else {
                                    line = testLine;
                                  }
                                }
                                lines.push(line); 

                                for (let i = 0; i < lines.length; i++) {
                                  ctx.fillText(lines[i].trim(), x3, y3 + i * lineHeight3);
                                }
                              }

                              wrapText3(ctx, text3, x3, yStart3, maxWidth3, 16);

                              // Slot 3
                              ctx.fillStyle = 'black'; 
                              ctx.font = '20px serif'; 
                              ctx.textAlign = 'center';
                              ctx.textBaseline = 'top';

                              const padding4 = 8;
                              const maxWidth4 = inventorybtn[3].width - padding4 * 2;
                              const x4 = inventorybtn[3].x + inventorybtn[3].width / 2;
                              const yStart4 = inventorybtn[3].y + padding4;

                              let text4 = (inventorybtn[3].item && inventorybtn[3].item.name) ? inventorybtn[3].item.name.name : 'none';

                              function wrapText4(ctx, text4, x4, y4, maxWidth4, lineHeight4) {
                                const words = text4.split(' ');
                                let line = '';
                                let lines = [];

                                for (let n = 0; n < words.length; n++) {
                                  const testLine = line + words[n] + ' ';
                                  const metrics = ctx.measureText(testLine);
                                  const testWidth = metrics.width;

                                  if (testWidth > maxWidth4 && n > 0) {
                                    lines.push(line);
                                    line = words[n] + ' ';
                                  } else {
                                    line = testLine;
                                  }
                                }
                                lines.push(line); 

                                for (let i = 0; i < lines.length; i++) {
                                  ctx.fillText(lines[i].trim(), x4, y4 + i * lineHeight4);
                                }
                              }

                              wrapText4(ctx, text4, x4, yStart4, maxWidth4, 16);

                              // Slot 4
                              ctx.fillStyle = 'black'; 
                              ctx.font = '20px serif'; 
                              ctx.textAlign = 'center';
                              ctx.textBaseline = 'top';

                              const padding5 = 8;
                              const maxWidth5 = inventorybtn[4].width - padding5 * 2;
                              const x5 = inventorybtn[4].x + inventorybtn[4].width / 2;
                              const yStart5 = inventorybtn[4].y + padding5;

                              let text5 = (inventorybtn[4].item && inventorybtn[4].item.name) ? inventorybtn[4].item.name.name : 'none';

                              function wrapText5(ctx, text5, x5, y5, maxWidth5, lineHeight5) {
                                const words = text5.split(' ');
                                let line = '';
                                let lines = [];

                                for (let n = 0; n < words.length; n++) {
                                  const testLine = line + words[n] + ' ';
                                  const metrics = ctx.measureText(testLine);
                                  const testWidth = metrics.width;

                                  if (testWidth > maxWidth5 && n > 0) {
                                    lines.push(line);
                                    line = words[n] + ' ';
                                  } else {
                                    line = testLine;
                                  }
                                }
                                lines.push(line); 

                                for (let i = 0; i < lines.length; i++) {
                                  ctx.fillText(lines[i].trim(), x5, y5 + i * lineHeight5);
                                }
                              }

                              wrapText5(ctx, text5, x5, yStart5, maxWidth5, 16);

                              // Slot 5
                              ctx.fillStyle = 'black'; 
                              ctx.font = '20px serif'; 
                              ctx.textAlign = 'center';
                              ctx.textBaseline = 'top';

                              const padding6 = 8;
                              const maxWidth6 = inventorybtn[5].width - padding6 * 2;
                              const x6 = inventorybtn[5].x + inventorybtn[5].width / 2;
                              const yStart6 = inventorybtn[5].y + padding6;

                              let text6 = (inventorybtn[5].item && inventorybtn[5].item.name) ? inventorybtn[5].item.name.name : 'none';

                              function wrapText6(ctx, text6, x6, y6, maxWidth6, lineHeight6) {
                                const words = text6.split(' ');
                                let line = '';
                                let lines = [];

                                for (let n = 0; n < words.length; n++) {
                                  const testLine = line + words[n] + ' ';
                                  const metrics = ctx.measureText(testLine);
                                  const testWidth = metrics.width;

                                  if (testWidth > maxWidth6 && n > 0) {
                                    lines.push(line);
                                    line = words[n] + ' ';
                                  } else {
                                    line = testLine;
                                  }
                                }
                                lines.push(line); 

                                for (let i = 0; i < lines.length; i++) {
                                  ctx.fillText(lines[i].trim(), x6, y6 + i * lineHeight6);
                                }
                              }

                              wrapText6(ctx, text6, x6, yStart6, maxWidth6, 16);

                              // Slot 6
                              ctx.fillStyle = 'black'; 
                              ctx.font = '20px serif'; 
                              ctx.textAlign = 'center';
                              ctx.textBaseline = 'top';

                              const padding7 = 8;
                              const maxWidth7 = inventorybtn[6].width - padding7 * 2;
                              const x7 = inventorybtn[6].x + inventorybtn[6].width / 2;
                              const yStart7 = inventorybtn[6].y + padding7;

                              let text7 = (inventorybtn[6].item && inventorybtn[6].item.name) ? inventorybtn[6].item.name.name : 'none';

                              function wrapText7(ctx, text7, x7, y7, maxWidth7, lineHeight7) {
                                const words = text7.split(' ');
                                let line = '';
                                let lines = [];

                                for (let n = 0; n < words.length; n++) {
                                  const testLine = line + words[n] + ' ';
                                  const metrics = ctx.measureText(testLine);
                                  const testWidth = metrics.width;

                                  if (testWidth > maxWidth7 && n > 0) {
                                    lines.push(line);
                                    line = words[n] + ' ';
                                  } else {
                                    line = testLine;
                                  }
                                }
                                lines.push(line); 

                                for (let i = 0; i < lines.length; i++) {
                                  ctx.fillText(lines[i].trim(), x7, y7 + i * lineHeight7);
                                }
                              }

                              wrapText7(ctx, text7, x7, yStart7, maxWidth7, 16);

                          }
                      }
                      else{

                      // Slot 1
                      ctx.fillStyle = 'black'; 
                      ctx.font = '20px serif'; 
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'top';

                      const padding2 = 8;
                      const maxWidth2 = inventorybtn[1].width - padding2 * 2;
                      const x2 = inventorybtn[1].x + inventorybtn[1].width / 2;
                      const yStart2 = inventorybtn[1].y + padding2;

                      let text2 = (inventorybtn[1].item && inventorybtn[1].item.name) ? inventorybtn[1].item.name.name : 'none';

                      function wrapText2(ctx, text2, x2, y2, maxWidth2, lineHeight2) {
                        const words = text2.split(' ');
                        let line = '';
                        let lines = [];

                        for (let n = 0; n < words.length; n++) {
                          const testLine = line + words[n] + ' ';
                          const metrics = ctx.measureText(testLine);
                          const testWidth = metrics.width;

                          if (testWidth > maxWidth2 && n > 0) {
                            lines.push(line);
                            line = words[n] + ' ';
                          } else {
                            line = testLine;
                          }
                        }
                        lines.push(line); 

                        for (let i = 0; i < lines.length; i++) {
                          ctx.fillText(lines[i].trim(), x2, y2 + i * lineHeight2);
                        }
                      }

                      wrapText2(ctx, text2, x2, yStart2, maxWidth2, 16);

                      // Slot 2
                      ctx.fillStyle = 'black'; 
                      ctx.font = '20px serif'; 
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'top';

                      const padding3 = 8;
                      const maxWidth3 = inventorybtn[2].width - padding3 * 2;
                      const x3 = inventorybtn[2].x + inventorybtn[2].width / 2;
                      const yStart3 = inventorybtn[2].y + padding3;

                      let text3 = (inventorybtn[2].item && inventorybtn[2].item.name) ? inventorybtn[2].item.name.name : 'none';

                      function wrapText3(ctx, text3, x3, y3, maxWidth3, lineHeight3) {
                        const words = text3.split(' ');
                        let line = '';
                        let lines = [];

                        for (let n = 0; n < words.length; n++) {
                          const testLine = line + words[n] + ' ';
                          const metrics = ctx.measureText(testLine);
                          const testWidth = metrics.width;

                          if (testWidth > maxWidth3 && n > 0) {
                            lines.push(line);
                            line = words[n] + ' ';
                          } else {
                            line = testLine;
                          }
                        }
                        lines.push(line); 

                        for (let i = 0; i < lines.length; i++) {
                          ctx.fillText(lines[i].trim(), x3, y3 + i * lineHeight3);
                        }
                      }

                      wrapText3(ctx, text3, x3, yStart3, maxWidth3, 16);

                      // Slot 3
                      ctx.fillStyle = 'black'; 
                      ctx.font = '20px serif'; 
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'top';

                      const padding4 = 8;
                      const maxWidth4 = inventorybtn[3].width - padding4 * 2;
                      const x4 = inventorybtn[3].x + inventorybtn[3].width / 2;
                      const yStart4 = inventorybtn[3].y + padding4;

                      let text4 = (inventorybtn[3].item && inventorybtn[3].item.name) ? inventorybtn[3].item.name.name : 'none';

                      function wrapText4(ctx, text4, x4, y4, maxWidth4, lineHeight4) {
                        const words = text4.split(' ');
                        let line = '';
                        let lines = [];

                        for (let n = 0; n < words.length; n++) {
                          const testLine = line + words[n] + ' ';
                          const metrics = ctx.measureText(testLine);
                          const testWidth = metrics.width;

                          if (testWidth > maxWidth4 && n > 0) {
                            lines.push(line);
                            line = words[n] + ' ';
                          } else {
                            line = testLine;
                          }
                        }
                        lines.push(line); 

                        for (let i = 0; i < lines.length; i++) {
                          ctx.fillText(lines[i].trim(), x4, y4 + i * lineHeight4);
                        }
                      }

                      wrapText4(ctx, text4, x4, yStart4, maxWidth4, 16);

                      // Slot 4
                      ctx.fillStyle = 'black'; 
                      ctx.font = '20px serif'; 
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'top';

                      const padding5 = 8;
                      const maxWidth5 = inventorybtn[4].width - padding5 * 2;
                      const x5 = inventorybtn[4].x + inventorybtn[4].width / 2;
                      const yStart5 = inventorybtn[4].y + padding5;

                      let text5 = (inventorybtn[4].item && inventorybtn[4].item.name) ? inventorybtn[4].item.name.name : 'none';

                      function wrapText5(ctx, text5, x5, y5, maxWidth5, lineHeight5) {
                        const words = text5.split(' ');
                        let line = '';
                        let lines = [];

                        for (let n = 0; n < words.length; n++) {
                          const testLine = line + words[n] + ' ';
                          const metrics = ctx.measureText(testLine);
                          const testWidth = metrics.width;

                          if (testWidth > maxWidth5 && n > 0) {
                            lines.push(line);
                            line = words[n] + ' ';
                          } else {
                            line = testLine;
                          }
                        }
                        lines.push(line); 

                        for (let i = 0; i < lines.length; i++) {
                          ctx.fillText(lines[i].trim(), x5, y5 + i * lineHeight5);
                        }
                      }

                      wrapText5(ctx, text5, x5, yStart5, maxWidth5, 16);

                      // Slot 5
                      ctx.fillStyle = 'black'; 
                      ctx.font = '20px serif'; 
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'top';

                      const padding6 = 8;
                      const maxWidth6 = inventorybtn[5].width - padding6 * 2;
                      const x6 = inventorybtn[5].x + inventorybtn[5].width / 2;
                      const yStart6 = inventorybtn[5].y + padding6;

                      let text6 = (inventorybtn[5].item && inventorybtn[5].item.name) ? inventorybtn[5].item.name.name : 'none';

                      function wrapText6(ctx, text6, x6, y6, maxWidth6, lineHeight6) {
                        const words = text6.split(' ');
                        let line = '';
                        let lines = [];

                        for (let n = 0; n < words.length; n++) {
                          const testLine = line + words[n] + ' ';
                          const metrics = ctx.measureText(testLine);
                          const testWidth = metrics.width;

                          if (testWidth > maxWidth6 && n > 0) {
                            lines.push(line);
                            line = words[n] + ' ';
                          } else {
                            line = testLine;
                          }
                        }
                        lines.push(line); 

                        for (let i = 0; i < lines.length; i++) {
                          ctx.fillText(lines[i].trim(), x6, y6 + i * lineHeight6);
                        }
                      }

                      wrapText6(ctx, text6, x6, yStart6, maxWidth6, 16);

                      }
                  }
                  else{

                      // Slot 1
                      ctx.fillStyle = 'black'; 
                      ctx.font = '20px serif'; 
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'top';

                      const padding2 = 8;
                      const maxWidth2 = inventorybtn[1].width - padding2 * 2;
                      const x2 = inventorybtn[1].x + inventorybtn[1].width / 2;
                      const yStart2 = inventorybtn[1].y + padding2;

                      let text2 = (inventorybtn[1].item && inventorybtn[1].item.name) ? inventorybtn[1].item.name.name : 'none';

                      function wrapText2(ctx, text2, x2, y2, maxWidth2, lineHeight2) {
                        const words = text2.split(' ');
                        let line = '';
                        let lines = [];

                        for (let n = 0; n < words.length; n++) {
                          const testLine = line + words[n] + ' ';
                          const metrics = ctx.measureText(testLine);
                          const testWidth = metrics.width;

                          if (testWidth > maxWidth2 && n > 0) {
                            lines.push(line);
                            line = words[n] + ' ';
                          } else {
                            line = testLine;
                          }
                        }
                        lines.push(line); 

                        for (let i = 0; i < lines.length; i++) {
                          ctx.fillText(lines[i].trim(), x2, y2 + i * lineHeight2);
                        }
                      }

                      wrapText2(ctx, text2, x2, yStart2, maxWidth2, 16);

                      // Slot 2
                      ctx.fillStyle = 'black'; 
                      ctx.font = '20px serif'; 
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'top';

                      const padding3 = 8;
                      const maxWidth3 = inventorybtn[2].width - padding3 * 2;
                      const x3 = inventorybtn[2].x + inventorybtn[2].width / 2;
                      const yStart3 = inventorybtn[2].y + padding3;

                      let text3 = (inventorybtn[2].item && inventorybtn[2].item.name) ? inventorybtn[2].item.name.name : 'none';

                      function wrapText3(ctx, text3, x3, y3, maxWidth3, lineHeight3) {
                        const words = text3.split(' ');
                        let line = '';
                        let lines = [];

                        for (let n = 0; n < words.length; n++) {
                          const testLine = line + words[n] + ' ';
                          const metrics = ctx.measureText(testLine);
                          const testWidth = metrics.width;

                          if (testWidth > maxWidth3 && n > 0) {
                            lines.push(line);
                            line = words[n] + ' ';
                          } else {
                            line = testLine;
                          }
                        }
                        lines.push(line); 

                        for (let i = 0; i < lines.length; i++) {
                          ctx.fillText(lines[i].trim(), x3, y3 + i * lineHeight3);
                        }
                      }

                      wrapText3(ctx, text3, x3, yStart3, maxWidth3, 16);

                      // Slot 3
                      ctx.fillStyle = 'black'; 
                      ctx.font = '20px serif'; 
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'top';

                      const padding4 = 8;
                      const maxWidth4 = inventorybtn[3].width - padding4 * 2;
                      const x4 = inventorybtn[3].x + inventorybtn[3].width / 2;
                      const yStart4 = inventorybtn[3].y + padding4;

                      let text4 = (inventorybtn[3].item && inventorybtn[3].item.name) ? inventorybtn[3].item.name.name : 'none';

                      function wrapText4(ctx, text4, x4, y4, maxWidth4, lineHeight4) {
                        const words = text4.split(' ');
                        let line = '';
                        let lines = [];

                        for (let n = 0; n < words.length; n++) {
                          const testLine = line + words[n] + ' ';
                          const metrics = ctx.measureText(testLine);
                          const testWidth = metrics.width;

                          if (testWidth > maxWidth4 && n > 0) {
                            lines.push(line);
                            line = words[n] + ' ';
                          } else {
                            line = testLine;
                          }
                        }
                        lines.push(line); 

                        for (let i = 0; i < lines.length; i++) {
                          ctx.fillText(lines[i].trim(), x4, y4 + i * lineHeight4);
                        }
                      }

                      wrapText4(ctx, text4, x4, yStart4, maxWidth4, 16);

                      // Slot 4
                      ctx.fillStyle = 'black'; 
                      ctx.font = '20px serif'; 
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'top';

                      const padding5 = 8;
                      const maxWidth5 = inventorybtn[4].width - padding5 * 2;
                      const x5 = inventorybtn[4].x + inventorybtn[4].width / 2;
                      const yStart5 = inventorybtn[4].y + padding5;

                      let text5 = (inventorybtn[4].item && inventorybtn[4].item.name) ? inventorybtn[4].item.name.name : 'none';

                      function wrapText5(ctx, text5, x5, y5, maxWidth5, lineHeight5) {
                        const words = text5.split(' ');
                        let line = '';
                        let lines = [];

                        for (let n = 0; n < words.length; n++) {
                          const testLine = line + words[n] + ' ';
                          const metrics = ctx.measureText(testLine);
                          const testWidth = metrics.width;

                          if (testWidth > maxWidth5 && n > 0) {
                            lines.push(line);
                            line = words[n] + ' ';
                          } else {
                            line = testLine;
                          }
                        }
                        lines.push(line); 

                        for (let i = 0; i < lines.length; i++) {
                          ctx.fillText(lines[i].trim(), x5, y5 + i * lineHeight5);
                        }
                      }

                      wrapText5(ctx, text5, x5, yStart5, maxWidth5, 16);


                  }
              }
              else{

                  // Slot 1
                  ctx.fillStyle = 'black'; 
                  ctx.font = '20px serif'; 
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'top';

                  const padding2 = 8;
                  const maxWidth2 = inventorybtn[1].width - padding2 * 2;
                  const x2 = inventorybtn[1].x + inventorybtn[1].width / 2;
                  const yStart2 = inventorybtn[1].y + padding2;

                  let text2 = (inventorybtn[1].item && inventorybtn[1].item.name) ? inventorybtn[1].item.name.name : 'none';

                  function wrapText2(ctx, text2, x2, y2, maxWidth2, lineHeight2) {
                    const words = text2.split(' ');
                    let line = '';
                    let lines = [];

                    for (let n = 0; n < words.length; n++) {
                      const testLine = line + words[n] + ' ';
                      const metrics = ctx.measureText(testLine);
                      const testWidth = metrics.width;

                      if (testWidth > maxWidth2 && n > 0) {
                        lines.push(line);
                        line = words[n] + ' ';
                      } else {
                        line = testLine;
                      }
                    }
                    lines.push(line); 

                    for (let i = 0; i < lines.length; i++) {
                      ctx.fillText(lines[i].trim(), x2, y2 + i * lineHeight2);
                    }
                  }

                  wrapText2(ctx, text2, x2, yStart2, maxWidth2, 16);

                  // Slot 2
                  ctx.fillStyle = 'black'; 
                  ctx.font = '20px serif'; 
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'top';

                  const padding3 = 8;
                  const maxWidth3 = inventorybtn[2].width - padding3 * 2;
                  const x3 = inventorybtn[2].x + inventorybtn[2].width / 2;
                  const yStart3 = inventorybtn[2].y + padding3;

                  let text3 = (inventorybtn[2].item && inventorybtn[2].item.name) ? inventorybtn[2].item.name.name : 'none';

                  function wrapText3(ctx, text3, x3, y3, maxWidth3, lineHeight3) {
                    const words = text3.split(' ');
                    let line = '';
                    let lines = [];

                    for (let n = 0; n < words.length; n++) {
                      const testLine = line + words[n] + ' ';
                      const metrics = ctx.measureText(testLine);
                      const testWidth = metrics.width;

                      if (testWidth > maxWidth3 && n > 0) {
                        lines.push(line);
                        line = words[n] + ' ';
                      } else {
                        line = testLine;
                      }
                    }
                    lines.push(line); 

                    for (let i = 0; i < lines.length; i++) {
                      ctx.fillText(lines[i].trim(), x3, y3 + i * lineHeight3);
                    }
                  }

                  wrapText3(ctx, text3, x3, yStart3, maxWidth3, 16);

                  // Slot 3
                  ctx.fillStyle = 'black'; 
                  ctx.font = '20px serif'; 
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'top';

                  const padding4 = 8;
                  const maxWidth4 = inventorybtn[3].width - padding4 * 2;
                  const x4 = inventorybtn[3].x + inventorybtn[3].width / 2;
                  const yStart4 = inventorybtn[3].y + padding4;

                  let text4 = (inventorybtn[3].item && inventorybtn[3].item.name) ? inventorybtn[3].item.name.name : 'none';

                  function wrapText4(ctx, text4, x4, y4, maxWidth4, lineHeight4) {
                    const words = text4.split(' ');
                    let line = '';
                    let lines = [];

                    for (let n = 0; n < words.length; n++) {
                      const testLine = line + words[n] + ' ';
                      const metrics = ctx.measureText(testLine);
                      const testWidth = metrics.width;

                      if (testWidth > maxWidth4 && n > 0) {
                        lines.push(line);
                        line = words[n] + ' ';
                      } else {
                        line = testLine;
                      }
                    }
                    lines.push(line); 

                    for (let i = 0; i < lines.length; i++) {
                      ctx.fillText(lines[i].trim(), x4, y4 + i * lineHeight4);
                    }
                  }

                  wrapText4(ctx, text4, x4, yStart4, maxWidth4, 16);

              }
          }
          else{

              // Slot 1
              ctx.fillStyle = 'black'; 
              ctx.font = '20px serif'; 
              ctx.textAlign = 'center';
              ctx.textBaseline = 'top';

              const padding2 = 8;
              const maxWidth2 = inventorybtn[1].width - padding2 * 2;
              const x2 = inventorybtn[1].x + inventorybtn[1].width / 2;
              const yStart2 = inventorybtn[1].y + padding2;

              let text2 = (inventorybtn[1].item && inventorybtn[1].item.name) ? inventorybtn[1].item.name.name : 'none';

              function wrapText2(ctx, text2, x2, y2, maxWidth2, lineHeight2) {
                const words = text2.split(' ');
                let line = '';
                let lines = [];

                for (let n = 0; n < words.length; n++) {
                  const testLine = line + words[n] + ' ';
                  const metrics = ctx.measureText(testLine);
                  const testWidth = metrics.width;

                  if (testWidth > maxWidth2 && n > 0) {
                    lines.push(line);
                    line = words[n] + ' ';
                  } else {
                    line = testLine;
                  }
                }
                lines.push(line); 

                for (let i = 0; i < lines.length; i++) {
                  ctx.fillText(lines[i].trim(), x2, y2 + i * lineHeight2);
                }
              }

              wrapText2(ctx, text2, x2, yStart2, maxWidth2, 16);

              // Slot 2
              ctx.fillStyle = 'black'; 
              ctx.font = '20px serif'; 
              ctx.textAlign = 'center';
              ctx.textBaseline = 'top';

              const padding3 = 8;
              const maxWidth3 = inventorybtn[2].width - padding3 * 2;
              const x3 = inventorybtn[2].x + inventorybtn[2].width / 2;
              const yStart3 = inventorybtn[2].y + padding3;

              let text3 = (inventorybtn[2].item && inventorybtn[2].item.name) ? inventorybtn[2].item.name.name : 'none';

              function wrapText3(ctx, text3, x3, y3, maxWidth3, lineHeight3) {
                const words = text3.split(' ');
                let line = '';
                let lines = [];

                for (let n = 0; n < words.length; n++) {
                  const testLine = line + words[n] + ' ';
                  const metrics = ctx.measureText(testLine);
                  const testWidth = metrics.width;

                  if (testWidth > maxWidth3 && n > 0) {
                    lines.push(line);
                    line = words[n] + ' ';
                  } else {
                    line = testLine;
                  }
                }
                lines.push(line); 

                for (let i = 0; i < lines.length; i++) {
                  ctx.fillText(lines[i].trim(), x3, y3 + i * lineHeight3);
                }
              }

              wrapText3(ctx, text3, x3, yStart3, maxWidth3, 16);


          }
      }
      else{

          // Slot 1
          ctx.fillStyle = 'black'; 
          ctx.font = '20px serif'; 
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';

          const padding2 = 8;
          const maxWidth2 = inventorybtn[1].width - padding2 * 2;
          const x2 = inventorybtn[1].x + inventorybtn[1].width / 2;
          const yStart2 = inventorybtn[1].y + padding2;

          let text2 = (inventorybtn[1].item && inventorybtn[1].item.name) ? inventorybtn[1].item.name.name : 'none';

          function wrapText2(ctx, text2, x2, y2, maxWidth2, lineHeight2) {
            const words = text2.split(' ');
            let line = '';
            let lines = [];

            for (let n = 0; n < words.length; n++) {
              const testLine = line + words[n] + ' ';
              const metrics = ctx.measureText(testLine);
              const testWidth = metrics.width;

              if (testWidth > maxWidth2 && n > 0) {
                lines.push(line);
                line = words[n] + ' ';
              } else {
                line = testLine;
              }
            }
            lines.push(line); 

            for (let i = 0; i < lines.length; i++) {
              ctx.fillText(lines[i].trim(), x2, y2 + i * lineHeight2);
            }
          }

          wrapText2(ctx, text2, x2, yStart2, maxWidth2, 16);

      }
  }

  // Slot 0
  ctx.fillStyle = 'black'; 
  ctx.font = '20px serif'; 
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  const padding = 8;
  const maxWidth = inventorybtn[0].width - padding * 2;
  const x = inventorybtn[0].x + inventorybtn[0].width / 2;
  const yStart = inventorybtn[0].y + padding;

  let text = (inventorybtn[0].item && inventorybtn[0].item.name) ? inventorybtn[0].item.name.name : 'none';

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let lines = [];

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        lines.push(line);
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line); 

    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i].trim(), x, y + i * lineHeight);
    }
  }

  wrapText(ctx, text, x, yStart, maxWidth, 16);
  }
  else{
    // Do nothing
  }


  */



  /*
  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    // force it to a string so .split never fails
    const str = (text === null || text === undefined) ? '' : String(text);

    const words = str.split(' ');
    let line = '';
    const lines = [];

    for (let w = 0; w < words.length; w++) {
      const testLine = line + words[w] + ' ';
      if (ctx.measureText(testLine).width > maxWidth && w > 0) {
        lines.push(line);
        line = words[w] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i].trim(), x, y + i * lineHeight);
    }
  }


  function getItemDisplayName(btn) {
    if (!btn.item) return 'none';

    // 1) if item.name is a string, use it
    if (typeof btn.item.name === 'string') {
      return btn.item.name;
    }
    // 2) if item.name.name is a string, use that
    if (btn.item.name && typeof btn.item.name.name === 'string') {
      return btn.item.name.name;
    }
    // fallback
    return 'none';
  }

  function renderInventory(ctx, player, inventorybtn) {
    ctx.fillStyle    = 'black';
    ctx.font         = '20px serif';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';

    const padding    = 8;
    const lineHeight = 16;

    inventorybtn.forEach((btn, i) => {
      const item = player.inventory[i];              // ← grab from inventory
      const name = item && item.name
                 ? (typeof item.name === 'string'
                    ? item.name
                    : item.name.name || 'none')
                 : 'none';

      const maxWidth = btn.width - padding * 2;
      const x        = btn.x + btn.width  / 2;
      const y        = btn.y + padding;

      wrapText(ctx, name, x, y, maxWidth, lineHeight);
    });
  }
  // on the next frame...
  renderInventory(ctx, player, inventorybtn);


  */
// 1. Text wrapping function (must be defined before use)
function wrapText(ctx, text, x, yCenter, maxWidth, lineHeight) {
    const str = (text == null ? '' : String(text));
    const words = str.split(' ');
    let line = '';
    const lines = [];
  
    for (let w = 0; w < words.length; w++) {
      const testLine = line + words[w] + ' ';
      if (ctx.measureText(testLine).width > maxWidth && w > 0) {
        lines.push(line);
        line = words[w] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line);
  
    // vertically center
    const totalHeight = lines.length * lineHeight;
    const startY = yCenter - totalHeight / 2 + lineHeight / 2;
  
    for (let i = 0; i < lines.length; i++) {
      ctx.strokeText(lines[i].trim(), x + 2, startY + i * lineHeight + 2);
      ctx.fillText(lines[i].trim(), x, startY + i * lineHeight);
    }
  }
  
  // 2. Full inventory render (images + names + pagination)
  function renderInventory(ctx, player, inventorybtn, itemsPerPage, currentpage, totalPages, grid) {
    // draw icons
    for (let i = 0; i < itemsPerPage; i++) {
      const btn = inventorybtn[i];
      const itemIndex = i + currentpage * itemsPerPage;
      const item = player.inventory[itemIndex];
  
      if (item && item.img instanceof Image) {
        const img = item.img;
        if (img.complete) {
          ctx.drawImage(img, btn.x, btn.y, btn.width, btn.height);
        } else {
          img.onload = () => {
            ctx.drawImage(img, btn.x, btn.y, btn.width, btn.height);
          };
        }
      } else {
        // placeholder background
        ctx.fillStyle = 'royalBlue';
        ctx.fillRect(btn.x, btn.y, btn.width, btn.height);
      }
    }
  
    // draw names
    ctx.font         = '20px serif';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle    = 'white';
    ctx.strokeStyle  = 'black';
  
    const padding    = 8;
    const lineHeight = 18;
  
    for (let i = 0; i < itemsPerPage; i++) {
      const btn       = inventorybtn[i];
      const itemIndex = i + currentpage * itemsPerPage;
      const item      = player.inventory[itemIndex];
      const name      = item && item.name
                        ? (typeof item.name === 'string' ? item.name : item.name.name || 'None')
                        : 'None';
  
      const x       = btn.x + btn.width / 2;
      const yCenter = btn.y + btn.height + grid * 0.5;  // just below the icon
      const maxWidth = btn.width - padding * 2;
  
      wrapText(ctx, name, x, yCenter, maxWidth, lineHeight);
    }
  
    // draw page indicator at top
    ctx.fillStyle = 'white';
    ctx.font      = '24px serif';
    ctx.fillText(
      `Page: ${currentpage + 1} / ${player.maximum / 8}`,
      ctx.canvas.width / 2,
      grid * 3
    );
  }

  renderInventory(ctx, player, inventorybtn, itemsPerPage, currentpage, totalPages, grid);
  
  

  //
  //
  // END DISPLAY
  //
  //




  function drawLSlider(lslider) {
    // Draw the left slider rectangle
    ctx.fillStyle = lslider.color;
    ctx.fillRect(lslider.x, lslider.y, lslider.width, lslider.height);

    // Draw the left arrow
    const arrowSize = Math.min(lslider.width, lslider.height) * 0.4;
    const centerX = lslider.x + lslider.width / 2;
    const centerY = lslider.y + lslider.height / 2;

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(centerX + arrowSize / 2, centerY - arrowSize);
    ctx.lineTo(centerX + arrowSize / 2, centerY + arrowSize);
    ctx.lineTo(centerX - arrowSize / 2, centerY);
    ctx.closePath();
    ctx.fill();
}

function drawRSlider(rslider) {
    // Draw the right slider rectangle
    ctx.fillStyle = rslider.color;
    ctx.fillRect(rslider.x, rslider.y, rslider.width, rslider.height);

    // Draw the right arrow
    const arrowSize = Math.min(rslider.width, rslider.height) * 0.4;
    const centerX = rslider.x + rslider.width / 2;
    const centerY = rslider.y + rslider.height / 2;

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(centerX - arrowSize / 2, centerY - arrowSize);
    ctx.lineTo(centerX - arrowSize / 2, centerY + arrowSize);
    ctx.lineTo(centerX + arrowSize / 2, centerY);
    ctx.closePath();
    ctx.fill();
}

// Call them with your slider objects
drawLSlider(lslider);
drawRSlider(rslider);





  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "50px Arial";
  if(player.money >= 0){
      ctx.fillStyle = money.color;

  }
  else{
      ctx.fillStyle = `red`;
  }


  ctx.fillText(
  `$${player.money}`,
  money.x - grid * 24,
  money.y
  );



  }

  function scene6(){
          // Draw royal blue background
          ctx.fillStyle = '#002366'; // Royal blue
          ctx.fillRect(0, 0, canvas.width, canvas.height);
    
          // Draw bold gold border with rounded corners
          ctx.lineWidth = 12;
          ctx.strokeStyle = '#FFD700'; // Gold
          ctx.lineJoin = 'round';
          ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
          // Draw decorative stars at corners
          function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
            let rot = Math.PI / 2 * 3;
            let x = cx;
            let y = cy;
            let step = Math.PI / spikes;
    
            ctx.beginPath();
            ctx.moveTo(cx, cy - outerRadius);
            for (let i = 0; i < spikes; i++) {
              x = cx + Math.cos(rot) * outerRadius;
              y = cy + Math.sin(rot) * outerRadius;
              ctx.lineTo(x, y);
              rot += step;
    
              x = cx + Math.cos(rot) * innerRadius;
              y = cy + Math.sin(rot) * innerRadius;
              ctx.lineTo(x, y);
              rot += step;
            }
            ctx.lineTo(cx, cy - outerRadius);
            ctx.closePath();
            ctx.fillStyle = '#FFD700';
            ctx.fill();
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.stroke();
          }
    
          // Positions for stars
          const starPositions = [
            { x: 60, y: 60 },
            { x: canvas.width - 60, y: 60 },
            { x: 60, y: canvas.height - 60 },
            { x: canvas.width - 60, y: canvas.height - 60 }
          ];
    
          starPositions.forEach(pos => {
            drawStar(pos.x, pos.y, 5, 20, 10);
          });
    
          // Add "Inventory" title with cartoon-style font
          ctx.fillStyle = '#FFD700';
          ctx.font = 'bold 60px "GFS Didot", cursive, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('Buy Items', canvas.width / 2, 100);
    
          // Optional: Add playful swirls on sides
          function drawSwirl(x, y, radius, loops) {
            ctx.beginPath();
            for (let i = 0; i < loops * Math.PI; i += 0.1) {
              let dx = x + radius * i * Math.cos(i);
              let dy = y + radius * i * Math.sin(i);
              ctx.lineTo(dx, dy);
            }
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 3;
            ctx.stroke();
          }
    
          drawSwirl(100, 200, 0.5, 3);
          drawSwirl(canvas.width - 100, 200, 0.5, 3);
    

          /*
          inventorybtn.forEach(Btn => {                                                
            ctx.fillStyle = Btn.color;    
            if(Btn.item.name.img === undefined){

             ctx.fillRect(Btn.x, Btn.y, Btn.width, Btn.height);
            }         
            else{
                ctx.drawImage(gameitems[i].img, Btn.x, Btn.y, Btn.width, Btn.height);
            }                                                                  
          }); 
          */

          /*

          for (let i = 0; i < inventorybtn.length; i++) {
            if (i >= gameitems.length) {
              ctx.fillStyle = inventorybtn[i].color;
              ctx.drawImage(gameitems[i].img, inventorybtn[i].x, inventorybtn[i].y, inventorybtn[i].width, inventorybtn[i].height);

            } else {
              // If the item exists, draw the item's image
              if(gameitems[i].img == undefined){
                // If there are more buttons than items, just draw a placeholder
                ctx.fillRect(inventorybtn[i].x, inventorybtn[i].y, inventorybtn[i].width, inventorybtn[i].height);
                  }
                  else{
                    ctx.fillStyle = inventorybtn[i].color;
                    ctx.drawImage(gameitems[i].img, inventorybtn[i].x, inventorybtn[i].y, inventorybtn[i].width, inventorybtn[i].height);
                  }

            }
          }
            */


          for (let i = 0; i < itemsPerPage; i++) {
            const btn = inventorybtn[i];
            const itemIndex = i + currentpage * itemsPerPage;
            const item = gameitems[itemIndex];
    
            ctx.fillStyle = btn.color;
    
            if (item && item.img) {
                ctx.drawImage(item.img, btn.x, btn.y, btn.width, btn.height);
            } else {
                ctx.fillRect(btn.x, btn.y, btn.width, btn.height);
            }
        }
          


ctx.fillStyle = 'gold';       
ctx.font = 'bold 30px serif';       
ctx.textAlign = 'center';      
ctx.textBaseline = 'middle';   
ctx.lineWidth = 4;             
ctx.strokeStyle = '#002366';   

for (let i = 0; i < inventorybtn.length; i++) {
    const itemIndex = i + currentpage * itemsPerPage;  // <-- IMPORTANT
    const label = gameitems[itemIndex]?.name || "None";  // now use correct item

    const x = inventorybtn[i].x + inventorybtn[i].width / 2;
    const y = inventorybtn[i].y + inventorybtn[i].height / 2 - grid * 1.7;

    ctx.strokeText(label, x, y);
    ctx.strokeText(label, x + 2.5, y + 2.5);

    ctx.fillText(label, x, y);
}

        ctx.fillStyle = `white`;
        ctx.fillText(
            `Page : ${currentpage + 1} of ${totalPages}`,
            canvas.width / 2,
            grid * 3
        )
          

        function drawLSlider(lslider) {
            // Draw the left slider rectangle
            ctx.fillStyle = lslider.color;
            ctx.fillRect(lslider.x, lslider.y, lslider.width, lslider.height);
        
            // Draw the left arrow
            const arrowSize = Math.min(lslider.width, lslider.height) * 0.4;
            const centerX = lslider.x + lslider.width / 2;
            const centerY = lslider.y + lslider.height / 2;
        
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.moveTo(centerX + arrowSize / 2, centerY - arrowSize);
            ctx.lineTo(centerX + arrowSize / 2, centerY + arrowSize);
            ctx.lineTo(centerX - arrowSize / 2, centerY);
            ctx.closePath();
            ctx.fill();
        }
        
        function drawRSlider(rslider) {
            // Draw the right slider rectangle
            ctx.fillStyle = rslider.color;
            ctx.fillRect(rslider.x, rslider.y, rslider.width, rslider.height);
        
            // Draw the right arrow
            const arrowSize = Math.min(rslider.width, rslider.height) * 0.4;
            const centerX = rslider.x + rslider.width / 2;
            const centerY = rslider.y + rslider.height / 2;
        
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.moveTo(centerX - arrowSize / 2, centerY - arrowSize);
            ctx.lineTo(centerX - arrowSize / 2, centerY + arrowSize);
            ctx.lineTo(centerX + arrowSize / 2, centerY);
            ctx.closePath();
            ctx.fill();
        }
        
        // Call them with your slider objects
        drawLSlider(lslider);
        drawRSlider(rslider);   

     
            
            
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "50px Arial";
    if(player.money >= 0){
        ctx.fillStyle = money.color;
  
    }
    else{
        ctx.fillStyle = `red`;
    }
  
  
    ctx.fillText(
    `$${player.money}`,
    money.x - grid * 24,
    money.y
    );

        ctx.font = "30px Arial";
        ctx.fillStyle = `#800080`;
    ctx.fillText(`MarketPlace`, money.x - grid, money.y);

  }



  function scene7(){

    const stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    baseRadius: Math.random() * 1.2 + 0.3,
    pulse: Math.random() * Math.PI * 2
  });
}

function drawBackground() {
  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0, '#1a1a3c');  // softened indigo
  grad.addColorStop(1, '#000000');  // black at bottom
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawStars() {
  stars.forEach(star => {
    const twinkle = 0.6;  // fixed twinkle for static
    const radius = star.baseRadius * twinkle;
    ctx.beginPath();
    ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + 0.3 * twinkle})`;
    ctx.fill();
  });
}

function drawNebula() {
  ctx.save();
  ctx.globalAlpha = 0.04;
  ctx.fillStyle = '#1a1a3c';  // darker blue hue
  const x = canvas.width * 0.45;
  const y = canvas.height * 0.5;
  ctx.beginPath();
  ctx.ellipse(x, y, canvas.width * 0.6, canvas.height * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawMoon() {
  const moonX = canvas.width * 0.2;
  const moonY = canvas.height * 0.25;
  const moonRadius = 55;

  ctx.save();
  ctx.shadowColor = 'rgba(200,200,255,0.2)';
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.arc(moonX, moonY, moonRadius + 10, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(220,220,255,0.07)';
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#dcdcf0';
  ctx.fill();

  ctx.fillStyle = 'rgba(160,160,180,0.25)';
  [[moonX + 20, moonY - 10, 10], [moonX - 15, moonY + 15, 8], [moonX + 5, moonY + 25, 6]].forEach(([x, y, r]) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawSilhouettes() {
  ctx.save();
  ctx.fillStyle = '#08080b';
  for (let i = 0; i < 10; i++) {
    const treeX = i * (canvas.width / 9) + Math.random() * 20 - 10;
    const baseY = canvas.height - 10;
    ctx.beginPath();
    ctx.moveTo(treeX, baseY);
    ctx.lineTo(treeX - 5, baseY);
    ctx.lineTo(treeX, baseY - (30 + Math.random() * 20));
    ctx.lineTo(treeX + 5, baseY);
    ctx.fill();
  }
  ctx.restore();
}

function drawHills() {
    ctx.save();
    const hillColors = ['#070710', '#0b0b14', '#0e0e18']; // darker tones
    const moonlightOverlays = ['rgba(200, 200, 255, 0.025)', 'rgba(200, 200, 255, 0.02)', 'rgba(200, 200, 255, 0.015)'];
  
    hillColors.forEach((color, i) => {
      const baseY = canvas.height - 100 - i * 30;
      const amplitude = 40 + i * 10;
      const frequency = 0.005 + i * 0.002;
  
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x <= canvas.width; x++) {
        const y = baseY + Math.sin(x * frequency) * amplitude;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
  
      // Soft moonlight highlight
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x <= canvas.width; x++) {
        const y = baseY + Math.sin(x * frequency) * amplitude;
        ctx.lineTo(x, y - 2); // subtle offset
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fillStyle = moonlightOverlays[i];
      ctx.fill();
    });
  
    ctx.restore();
  }

drawBackground();
drawNebula();
drawStars();
drawMoon();
drawHills();
drawSilhouettes();

    ctx.fillStyle = `gray`;
    ctx.fillRect(button5.x - grid - 20, button5.y - (grid + 20), button5.width + grid * 2 + 40, button5.height + grid + 40);

    ctx.fillStyle = `red`;
    ctx.fillRect(button5.x - grid, button5.y - grid, button5.width + grid * 2, button5.height + grid);

    ctx.fillStyle = `gold`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "70px Arial";



    ctx.fillText(
        `Settings`,
        canvas.width / 2,
        grid * 2
    );

    ctx.font = "40px Arial";


    if(showgrid){
        ctx.fillStyle = `green`;
        ctx.fillText(
            `Show Grid Set To True`,
            grid * 7,
            grid * 5
        );
    }
    else{
        ctx.fillStyle = `red`;
        ctx.fillText(
            `Show Grid Set To False`,
            grid * 7,
            grid * 5
        );
    }


    ctx.fillStyle = `green`;
    ctx.fillText(
        `Music: ${gainNode.gain.value}`,
        grid * 4.5,
        grid * 7
    );
    


    ctx.fillStyle = `white`;
    ctx.font = "50px serif";

    ctx.fillText(
        `Clear Local Data`,
        canvas.width / 2,
        grid * 13
    );
}


function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > maxWidth && i > 0) {
        ctx.fillText(line, x, y);
        line = words[i] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
    return y;
  }

  let scene8CachedArticles = null;

  function prepareScene8Articles() {
    // Economic
    let economicText;
    if (player.month === 5 && player.week === 4) {
        economicText = "Economic news: The prices of school items are expected to rise due to growing demand and persistent inflation. Analysts predict a continued surge as parents prepare for the new academic year. Local vendors are reporting a shortage of essential supplies, further driving prices upward.";
    }
     else if (player.month === 6 && player.week === 1) {
        economicText = "Economic news: The prices of ATMs appear to be dropping significantly this month as more owners are offloading their units. Experts attribute the trend to a saturated market and waning interest from buyers. Many small businesses that previously invested in personal machines are now opting for mobile payment solutions instead. Analysts suggest that unless demand picks up, ATM values may continue to fall over the coming weeks.";
    }
    else if(player.month === 8 && player.week === 3) {
        economicText = "Economic News: The prices of ATMs are expected to return to normal as demand stabilizes and market conditions improve. Experts suggest that with increased interest from businesses seeking to upgrade their payment systems, ATM values are beginning to recover. Local vendors are reporting stronger sales, and analysts predict that prices may continue to rise gradually over the coming weeks.";

    }
    else if(player.month === 8 && player.week === 4) {
        economicText = "Economic News: The prices of school items are expected to return to normal as demand stabilizes and inflationary pressures ease. Analysts predict a steady decrease in prices as stores restock and vendors catch up with supply. Many local retailers are reporting a surplus of essential supplies, leading to more competitive pricing in the coming weeks.";

    }
    else if(player.month === 9 && player.week === 0) {
        economicText = "Economic News: The prices of pet dogs are expected to rise in the upcoming weeks as more owners are selling their pets. Experts attribute this trend to increasing financial pressures, with many households looking to offload their dogs to alleviate costs. As a result, the market for certain dog breeds is becoming more competitive. Analysts suggest that unless demand slows, dog prices may continue to climb in the coming weeks.";

    }

    else if(player.month === 9 && player.week === 1) {
        economicText = "Economic News: The prices of bahay kubo units have begun to slightly decrease this month as demand softens. Experts attribute this trend to a shift in consumer preferences, with more families opting for modern, larger homes. Vendors are reporting an oversupply of bahay kubo units, leading to a slight drop in prices. Analysts suggest that unless demand increases, this downward trend may continue over the coming weeks.";

    }

    else if(player.month === 12 && player.week === 0) {
        economicText = "Economic News: The prices of ballpens are expected to rise this winter due to growing demand and ongoing inflation. Analysts predict a continued surge as schools and offices stock up for the new season. Local vendors are reporting a shortage of essential supplies, further driving prices upward.";

    }
    else if(player.month === 12 && player.week === 2) {
        economicText = "Economic News: The prices of helpers are expected to slightly decrease this month as demand begins to stabilize. Experts attribute this trend to a growing supply of workers and changes in labor market dynamics. Many families are now opting for part-time helpers, which has eased the pressure on full-time positions. Analysts suggest that unless demand picks up, helper wages may remain steady or continue to dip in the coming weeks.";

    }
    else if(player.month === 2 && player.week === 4) {
        economicText = "Economic News: Bicycle prices are trending upward this spring as enthusiasm for outdoor activity surges with the arrival of warmer weather. Across cities and small towns alike, more people are choosing bikes for fitness, fun, and eco-friendly commuting. Retailers are reporting strong sales, especially for road and hybrid models, with some even struggling to keep popular units in stock.";

    }

    else if(player.month === 3 && player.week === 0) {
        economicText = "Economic News: The prices of basketballs are expected to rise slightly this spring as demand increases with the start of the outdoor sports season. Experts attribute this surge to more people engaging in recreational basketball games as the weather improves. Local retailers are reporting higher sales as schools and sports clubs prepare for the upcoming season, which is expected to keep prices elevated over the next few weeks.";

    }
    


     else {
        let randomizer = Math.random();
        if(randomizer < 0.1){
            economicText = "Economic update: The job market added a modest 177,000 positions last month—just under expectations and not enough to stir much excitement. Inflation ticked down slightly, so your burrito still costs the same punishing three bucks. Stock indices barely moved, reflecting an economy stuck in neutral. For most people, it's business as usual: bills, rent, and waiting for something—anything—interesting to happen.";

        }
        else if(randomizer < 0.2){
            economicText = "Economic update: Employers added a steady 160,000 jobs last month—enough to keep the lights on but far from headline-grabbing. Consumer prices barely budged, so your morning pastry still costs that same awkward five bucks. Markets yawned through the week, ending almost exactly where they began. In short: same old routine—work, pay, repeat.";

        }
        else if(randomizer < 0.3){
            economicText = "Economic update: Factory orders rose by a modest 1.2%, driven mostly by routine restocking rather than booming demand. Inflation held flat, meaning your grocery bill stays as predictable (and thrilling) as ever. Stock traders shrugged and moved on to the weekend.";
        
        }
        else if(randomizer < 0.4){
            economicText = "Economic update: Employers quietly added 152,000 jobs last month—enough to keep your boss happy but not enough to make you quit and chase that llama-grooming career. Inflation took a leisurely nap, so your latte still costs the same eye-watering price. Markets barely twitched, like a cat dozing in the sun. Meanwhile, we all keep punching clocks and dreaming of something—anything—more exciting.";

        }
        else if(randomizer < 0.5){
            economicText = "Economic update: Factory activity inched up 0.9%, mostly because warehouses needed to restock seasonal paperclips. Prices snoozed along, so your grocery tab remains the trusty old friend you can’t quite escape. Stock traders spent the week playing Sudoku. In short: the economy’s mood is ‘meh,’ and so is ours—same song, different day.";

        }
        else if(randomizer < 0.6){
        economicText = "Economic update: The job market creaked open like an old crypt door, adding a ghostly 140,000 positions—just enough for spirits of the unemployed to rest uneasy. Prices floated along unchanged, so your coffee still demands its exorcism-level three bucks.";

        }
        else if(randomizer < 0.7){
            economicText = "Economic update: Factory orders rose by a haunting 1%, spurred on by phantom restocking of rubber chickens and novelty coffins. Inflation remained eerily flat, and bond traders tiptoed around their spreadsheets as if checking for cobwebs.";

        }
        else if(randomizer < 0.8){
            economicText = "Economic update: Consumer confidence drifted up like a playful poltergeist, inching 0.5% higher, yet wallets stayed tightly sealed. Markets moved with the hush of a moonlit graveyard—silent, still, and just a tad unsettling.";;

        }
        else if(randomizer < 0.9){
        economicText = "Economic update: The job market just added a sunny 180,000 positions—enough to make weekend brunch budgets look promising again. Inflation took a little vacation, so your favorite snack stays affordably awesome. Stock indices even cracked a smile, edging up just enough to remind us that tomorrow might just surprise us—in a good way.";

        }
        else{
            economicText = "Economic update: Factory activity sprang to life with a hopeful 2% bump, fueled by fresh orders for quirky gadgets and neighborly inventions. Prices stayed friendly, keeping your grocery list within reach. Traders are whispering about optimism in the air—proof that sometimes the best investment is simply believing the good times could be just around the corner.";

        }



    }
  
    // Local
    const column2Articles = [
        "Community update: The city’s central market has announced extended hours for the weekend, now open until 10 PM. This change comes in response to increased foot traffic and rising tourist activity. Expect more vendor participation, live performances, street food vendors, and a pop-up art exhibit showcasing local talent.",
    
        "Local hero: A neighborhood shopkeeper thwarted a robbery attempt by chasing off two masked intruders with nothing but a broom and a commanding voice. Witnesses say the confrontation lasted under a minute. No injuries were reported, and police praised the quick thinking. Locals are calling the shopkeeper a legend in the making.",
    
        "Public advisory: A water main break near 4th and Alder has caused temporary road closures and minor flooding. City officials have deployed crews to repair the damage, estimating a 48-hour turnaround. Commuters are advised to use alternate routes and expect delays in surrounding areas.",
    
        "Festival alert: The Spring Lights Festival kicks off this Friday evening in the city square. Expect food stalls, music performances, dance troupes, and a grand lantern parade that winds through downtown. Local businesses will stay open late, and special discounts are rumored at several stalls.",
    
        "Public health: A mild flu strain is circulating among schoolchildren, with several cases reported in districts 3 and 5. Health officials urge parents to monitor symptoms, encourage frequent handwashing, and limit exposure to large crowds. Schools remain open but are increasing sanitation efforts.",
    
        "Transportation news: The tram line will undergo scheduled maintenance through Sunday. Replacement buses are running every 20 minutes on the same route, though minor delays are expected during peak hours. City Transit encourages passengers to plan accordingly and check the live update map online.",
    
        "Housing report: Rent prices across suburban areas have climbed 3% this month. Analysts link the rise to growing demand from young families looking for more space, lower crime rates, and access to better schools. Some developers are considering new housing projects to ease the pressure.",
    
        "Education watch: Ms. Carla Carriage, a science teacher at Westwood High, has won the regional award for excellence in STEM education. She was recognized for her hands-on teaching style and for guiding her students to multiple science fair victories. A school-wide celebration is planned next Monday with media coverage expected.",
    
        "Pet adoption: The city shelter announced a record number of pet adoptions this month—over 80 animals found new homes. Volunteers organized a 'Fur-ever Friends' adoption event with waived fees, free pet starter kits, and live demonstrations on responsible pet ownership. The shelter expressed gratitude for community support.",
    
        "Nature note: A rare cerulean warbler was spotted in the park wetlands, drawing birdwatchers from across the region. Experts believe this is part of an early migration pattern influenced by the warmer spring. Visitors are encouraged to stay quiet, avoid flash photography, and stick to marked paths to preserve the fragile habitat.",

        "Music Album: Indie artist Tyler Rivers is set to drop his highly anticipated album, Echoes of Tomorrow, next Friday. The album, which blends electronic and acoustic elements, has already gained significant buzz for its unique sound and heartfelt lyrics. A special virtual listening party is planned for the release, with media coverage expected to highlight the event.",

        "Music Album: Renowned pop artist Mia Phoebe is gearing up to release her new album, Starlight Dreams, this Thursday. Known for her captivating vocals and innovative production, Mia's latest project has generated excitement among fans and critics alike. A live-streamed concert celebrating the release is scheduled, with extensive media coverage anticipated.",

        "Brave Escape: A young man from the outskirts of town narrowly escaped captivity after breaking free from his enslavers. Armed with nothing but his wits and determination, he fled through the woods under the cover of night. Witnesses say the escape was swift, lasting less than an hour. Authorities praised his bravery, and locals are hailing him as a symbol of courage and hope in the fight for freedom."
    ];
    
  
    let localText;
    if (player.month === 1 && player.week === 0) {
      const r = Math.random();
      if (r < 0.33) {
        localText = "Local News: Libraries are seeing a rise in visitors this week as many residents set resolutions to read more books. Popular picks include self-help titles, fantasy novels, and productivity guides, prompting librarians to restock shelves more frequently.";

      } else if (r < 0.66) {
        localText = "Local News: A spike in volunteer sign-ups has been reported by local shelters and community kitchens, as citizens commit to giving back as part of their New Year’s resolutions. Organizers are hopeful the momentum will last beyond January.";

      } else {
        localText = "Local News: The 'New Year, New Me' mindset is alive and well, with fitness centers reporting a noticeable increase in memberships. Trainers say it's one of the busiest times of the year, especially for those hoping to start fresh with healthier habits.";

      }
    } else {
      localText = column2Articles[Math.floor(Math.random() * column2Articles.length)];
    }
  
    // Weather
    const column3Articles = [
        "Weather update: A cold front moves in by midweek, dropping overnight lows into the low 30s and ushering in the season’s first frost risk on outlying farms. Gardeners should cover tender crops before dusk, and early commuters may spot icy patches on unshaded roads.",
      
        "Storm watch: A vigorous low-pressure system brewing offshore is set to hit late Friday with heavy rain, gusts up to 50 mph, and coastal surf whipping to 15 feet. Fishermen and beachgoers should steer clear; secure patio furniture now and have flashlights on hand in case of brief power blips.",
      
        "Sunshine ahead: After days of grey skies, the next 72 hours will see highs around 65 °F under brilliant blue—ideal for hiking, picnics, and outdoor markets. UV levels will peak at midday, so pack sunscreen and sunglasses if you plan to stay out past lunchtime.",
      
        "Rainfall report: Yesterday’s steady half-inch downpour boosted reservoir levels by 8 percent, lifting them to 72 percent capacity and quelling mild drought alarms. Farmers report softer fields for planting, but should delay heavy machinery until soils firm up later this week.",
      
        "Fog advisory: Dense pockets of fog settled along the river valley before dawn, cutting visibility to under 200 feet in spots. Drivers are urged to slow down, use low-beam headlights, and keep ample following distance until the mist burns off around mid-morning.",
      
        "Wind alert: A tight pressure gradient will whip winds to 40–45 mph Thursday evening, rattling loose branches and rattling windows. Those in high-rise apartments may feel a gentle sway; secure potted plants and check tarps or scaffolding on nearby construction sites.",
      
        "Unseasonal warmth: Afternoon highs are flirting with 75 °F—well above the 60 °F norm—prompting early blooms in parks and a flurry of shorts-and-tee weather. Nights will still dip into the mid-40s, so keep a light jacket handy if you’re out after sunset.",
      
        "Frost warning: Clear skies and calm winds tonight will send temperatures climbing down to 29 °F in outer districts. Orchard owners should deploy frost fans or overhead sprinklers, and bring greenhouse seedlings indoors to avoid freeze damage.",
      
        "Heatwave prep: The heat advisory goes into effect tomorrow as highs blast past 95 °F for at least three days. Cooling centers open at all community centers, and local news warns to check on pets, elderly neighbors, and never leave children or animals in parked cars.",
      
        "Lightning strikes: A rare late-season thunderstorm lit up the sky after midnight, delivering over 120 strikes in just one hour. Though no injuries were reported, several large oak limbs snapped under the electrical charge—urban crews are clearing debris today.",
      
        "Weather report: Today will be mostly sunny with gentle breezes around 5 mph out of the southwest. Expect afternoon temperatures near 68 °F—perfect for a lunchtime stroll—while farmers can schedule irrigation for late afternoon when evapotranspiration rates peak."
    ];
      
      
    const weatherText = column3Articles[Math.floor(Math.random() * column3Articles.length)];
  
    scene8CachedArticles = [economicText, localText, weatherText];
  }
  
  function scene8() {
    const monthName  = monthNames[player.month - 1];

    function drawBrightHills(ctx, canvas) {
        // 1) Sky gradient
        const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
        sky.addColorStop(0, '#87CEFA');  // light sky blue
        sky.addColorStop(1, '#E0FFFF');  // pale turquoise at horizon
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      
        // 2) Sun
        const sunX = canvas.width * 0.1;
        const sunY = canvas.height * 0.15;
        const sunRadius = 50;
        ctx.save();
        ctx.shadowColor = 'rgba(255, 255, 200, 0.6)';
        ctx.shadowBlur = 30;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFACD';  // lemon chiffon
        ctx.fill();
        ctx.restore();
      
        // 3) Distant hills
        ctx.fillStyle = '#98FB98';  // pale green
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.6);
        ctx.quadraticCurveTo(canvas.width * 0.25, canvas.height * 0.5, canvas.width * 0.5, canvas.height * 0.6);
        ctx.quadraticCurveTo(canvas.width * 0.75, canvas.height * 0.7, canvas.width, canvas.height * 0.6);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();
      
        // 4) Foreground hills
        ctx.fillStyle = '#32CD32';  // lime green
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.8);
        ctx.quadraticCurveTo(canvas.width * 0.3, canvas.height * 0.7, canvas.width * 0.6, canvas.height * 0.8);
        ctx.quadraticCurveTo(canvas.width * 0.85, canvas.height * 0.9, canvas.width, canvas.height * 0.8);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();
    
      }

      function drawSnowyHills(ctx, canvas) {
        // 1) Sky gradient — winter blue to white
        const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
        sky.addColorStop(0, '#B0E0E6'); // powder blue
        sky.addColorStop(1, '#FFFFFF'); // snowy white
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      
        // 2) Pale sun with icy glow
        const sunX = canvas.width * 0.1;
        const sunY = canvas.height * 0.15;
        const sunRadius = 45;
        ctx.save();
        ctx.shadowColor = 'rgba(220, 240, 255, 0.5)';
        ctx.shadowBlur = 40;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFF8DC'; // cornsilk
        ctx.fill();
        ctx.restore();
      
        // 3) Snow-covered distant hills
        ctx.fillStyle = '#F0F8FF'; // AliceBlue
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.6);
        ctx.quadraticCurveTo(canvas.width * 0.25, canvas.height * 0.5, canvas.width * 0.5, canvas.height * 0.6);
        ctx.quadraticCurveTo(canvas.width * 0.75, canvas.height * 0.7, canvas.width, canvas.height * 0.6);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();
      
        // 4) Foreground snowy hills
        ctx.fillStyle = '#E6F2FF'; // soft snowy blue
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.8);
        ctx.quadraticCurveTo(canvas.width * 0.3, canvas.height * 0.7, canvas.width * 0.6, canvas.height * 0.8);
        ctx.quadraticCurveTo(canvas.width * 0.85, canvas.height * 0.9, canvas.width, canvas.height * 0.8);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();
      }

      function drawSpringHills(ctx, canvas) {
        // 1) Sky gradient — soft morning sky
        const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
        sky.addColorStop(0, '#C6E2FF'); // light sky blue
        sky.addColorStop(1, '#FFF5EE'); // seashell (warm white)
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      
        // 2) Soft sun with morning glow
        const sunX = canvas.width * 0.12;
        const sunY = canvas.height * 0.18;
        const sunRadius = 45;
        ctx.save();
        ctx.shadowColor = 'rgba(255, 230, 180, 0.4)';
        ctx.shadowBlur = 40;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFE4B5'; // moccasin
        ctx.fill();
        ctx.restore();
      
        // 3) Distant rolling green hills
        ctx.fillStyle = '#BDFCC9'; // minty green
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.6);
        ctx.quadraticCurveTo(canvas.width * 0.25, canvas.height * 0.5, canvas.width * 0.5, canvas.height * 0.6);
        ctx.quadraticCurveTo(canvas.width * 0.75, canvas.height * 0.7, canvas.width, canvas.height * 0.6);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();
      
        // 4) Foreground hills with blooming wildflowers
        ctx.fillStyle = '#90EE90'; // light green
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.8);
        ctx.quadraticCurveTo(canvas.width * 0.3, canvas.height * 0.7, canvas.width * 0.6, canvas.height * 0.8);
        ctx.quadraticCurveTo(canvas.width * 0.85, canvas.height * 0.9, canvas.width, canvas.height * 0.8);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();
      
        // 5) Optional: sprinkle simple flower dots
        for (let i = 0; i < 60; i++) {
          const x = Math.random() * canvas.width;
          const y = canvas.height * 0.8 + Math.random() * (canvas.height * 0.2);
          ctx.beginPath();
          ctx.arc(x, y, 2 + Math.random() * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = ['#FFC0CB', '#FFD700', '#FF69B4', '#ADFF2F'][Math.floor(Math.random() * 4)];
          ctx.fill();
        }
      }
      function drawAutumnHills(ctx, canvas) {
        // 1) Sky gradient — golden autumn light
        const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
        sky.addColorStop(0, '#FFDAB9'); // peach puff
        sky.addColorStop(1, '#FFEFD5'); // papaya whip
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      
        // 2) Soft amber sun
        const sunX = canvas.width * 0.85;
        const sunY = canvas.height * 0.2;
        const sunRadius = 40;
        ctx.save();
        ctx.shadowColor = 'rgba(255, 180, 100, 0.4)';
        ctx.shadowBlur = 35;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#FFB347'; // warm orange
        ctx.fill();
        ctx.restore();
      
        // 3) Distant hills — golden brown
        ctx.fillStyle = '#C19A6B'; // light brown
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.6);
        ctx.quadraticCurveTo(canvas.width * 0.25, canvas.height * 0.55, canvas.width * 0.5, canvas.height * 0.6);
        ctx.quadraticCurveTo(canvas.width * 0.75, canvas.height * 0.65, canvas.width, canvas.height * 0.6);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();
      
        // 4) Foreground hills — deep russet
        ctx.fillStyle = '#8B4513'; // saddle brown
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.8);
        ctx.quadraticCurveTo(canvas.width * 0.3, canvas.height * 0.7, canvas.width * 0.6, canvas.height * 0.8);
        ctx.quadraticCurveTo(canvas.width * 0.85, canvas.height * 0.9, canvas.width, canvas.height * 0.8);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();
      
        // 5) Scatter falling leaves
        for (let i = 0; i < 40; i++) {
          const x = Math.random() * canvas.width;
          const y = canvas.height * 0.75 + Math.random() * (canvas.height * 0.25);
          ctx.beginPath();
          ctx.arc(x, y, 2 + Math.random() * 2, 0, Math.PI * 2);
          ctx.fillStyle = ['#FF8C00', '#D2691E', '#FF4500', '#DAA520'][Math.floor(Math.random() * 4)];
          ctx.fill();
        }
      }
      function drawSilentHills(ctx, canvas) {
        // 1) Foggy grey sky
        const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
        sky.addColorStop(0, '#a9a9a9'); // dark gray
        sky.addColorStop(1, '#dcdcdc'); // gainsboro
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      
        // 2) Pale, veiled sun
        const sunX = canvas.width * 0.85;
        const sunY = canvas.height * 0.15;
        const sunRadius = 40;
        ctx.save();
        ctx.shadowColor = 'rgba(200, 200, 200, 0.3)';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#f5f5f5'; // white smoke
        ctx.fill();
        ctx.restore();
      
        // 3) Distant hills — smoky blue-gray
        ctx.fillStyle = '#778899'; // light slate gray
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.6);
        ctx.quadraticCurveTo(canvas.width * 0.25, canvas.height * 0.55, canvas.width * 0.5, canvas.height * 0.6);
        ctx.quadraticCurveTo(canvas.width * 0.75, canvas.height * 0.65, canvas.width, canvas.height * 0.6);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();
      
        // 4) Foreground hills — darker gray
        ctx.fillStyle = '#2f4f4f'; // dark slate gray
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.8);
        ctx.quadraticCurveTo(canvas.width * 0.3, canvas.height * 0.7, canvas.width * 0.6, canvas.height * 0.8);
        ctx.quadraticCurveTo(canvas.width * 0.85, canvas.height * 0.9, canvas.width, canvas.height * 0.8);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();
      
        // 5) Fog overlay
        ctx.fillStyle = 'rgba(220, 220, 220, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      
        // 6) Silhouettes of dead trees
        ctx.strokeStyle = '#444';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 8; i++) {
          const x = i * (canvas.width / 7) + Math.random() * 20 - 10;
          const baseY = canvas.height - 20;
          const height = 40 + Math.random() * 20;
          ctx.beginPath();
          ctx.moveTo(x, baseY);
          ctx.lineTo(x, baseY - height);
          for (let j = 0; j < 3; j++) {
            ctx.moveTo(x, baseY - height + j * 10);
            ctx.lineTo(x + (Math.random() > 0.5 ? -8 : 8), baseY - height + j * 10 - 5);
          }
          ctx.stroke();
        }
      }
      function drawShadowBuildings(ctx, canvas) {
        ctx.fillStyle = 'rgba(50, 50, 50, 0.2)';
        const buildingCount = 6;
        for (let i = 0; i < buildingCount; i++) {
          const x = i * (canvas.width / buildingCount) + Math.random() * 20 - 10;
          const width = 40 + Math.random() * 20;
          const height = 60 + Math.random() * 50;
          ctx.fillRect(x, canvas.height * 0.6 - height, width, height);
        }
      }
      function drawDimLampPosts(ctx, canvas) {
        const postCount = 4;
        ctx.lineWidth = 2;
        for (let i = 0; i < postCount; i++) {
          const x = i * (canvas.width / postCount) + 40;
          const baseY = canvas.height * 0.8;
          const height = 60;
      
          // Pole
          ctx.strokeStyle = '#333';
          ctx.beginPath();
          ctx.moveTo(x, baseY);
          ctx.lineTo(x, baseY - height);
          ctx.stroke();
      
          // Light head
          ctx.beginPath();
          ctx.arc(x, baseY - height, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#ccc';
          ctx.fill();
      
          // Faint glow
          ctx.save();
          ctx.shadowColor = 'rgba(255, 255, 180, 0.1)';
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(x, baseY - height, 10, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 220, 0.05)';
          ctx.fill();
          ctx.restore();
        }
      }
      
      
      
      if(player.month == 11 && player.week == 0){
        drawSilentHills(ctx, canvas);
        drawShadowBuildings(ctx, canvas);
        drawDimLampPosts(ctx, canvas);
      }
      else if(player.currentseason == seasons[0]){
        drawSpringHills(ctx, canvas);
      }
      else if(player.currentseason == seasons[1]){
        drawBrightHills(ctx, canvas);
      }
      else if(player.currentseason == seasons[2]){
        drawAutumnHills(ctx, canvas);
      }
      else{
        drawSnowyHills(ctx, canvas);
      }






      
    // Background
    ctx.fillStyle = '#fdf6e3';
    ctx.fillRect(grid, grid, canvas.width - grid * 2, canvas.height - grid * 2);
  
    // Border
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 3;
    ctx.strokeRect(grid, grid, canvas.width - grid * 2, canvas.height - grid * 2);
  
    // Header bar
    ctx.fillStyle = '#e0e0e0';
    ctx.fillRect(grid * 1.2, grid * 1.2, canvas.width - grid * 2.4, grid);
  
    // Headline image box
    ctx.fillStyle = '#dcdcdc';
    ctx.fillRect(grid * 1.2, grid * 2.5, canvas.width - grid * 2.4, grid * 4);
  
    const columns = 3;
    const spacing = grid * 0.4;
    const columnPadding = 10;
    const columnWidth = (canvas.width - grid * 2.4 - spacing * (columns - 1)) / columns;
    const articleY = grid * 7;
    const lineHeight = grid * 0.5;
    const lineSpacing = lineHeight * 1.4;
  
    ctx.fillStyle = 'black';
    ctx.font = '18px serif';
    ctx.textAlign = 'left';
  
    for (let i = 0; i < columns; i++) {
      const x = grid * 1.2 + i * (columnWidth + spacing);
      const y = articleY;
  
      // Headline bar
      ctx.fillStyle = '#ccc';
      ctx.fillRect(x + columnPadding, y + columnPadding, columnWidth - columnPadding * 2, lineHeight);
  
      // Article text
      ctx.fillStyle = 'black';
      const textX = x + columnPadding;
      const textY = y + columnPadding + lineSpacing * 2;
      const text = scene8CachedArticles[i];
      const lastArticle = scene8CachedArticles[scene8CachedArticles.length - 1];

      if (lastArticle === "Weather update: A cold front moves in by midweek, dropping overnight lows into the low 30s and ushering in the season’s first frost risk on outlying farms. Gardeners should cover tender crops before dusk, and early commuters may spot icy patches on unshaded roads." && reactedToArticle !== lastArticle) {
        // Cold front affects produce
        let random = Math.random();
        companies[1].stockPrice -= random;
        updateText("Cold snap shrinks harvest yields —", true);
        updateText(`${companies[1].name} drops ${random.toFixed(2)}%.`, true);
        reactedToArticle = lastArticle;
      }
      
      if (lastArticle === "Storm watch: A vigorous low-pressure system brewing offshore is set to hit late Friday with heavy rain, gusts up to 50 mph, and coastal surf whipping to 15 feet. Fishermen and beachgoers should steer clear; secure patio furniture now and have flashlights on hand in case of brief power blips." && reactedToArticle !== lastArticle) {
        // Storm affects logistics
        let random = Math.random();
        companies[0].stockPrice -= random;
        updateText("Storm disrupts delivery networks —", true);
        updateText(`${companies[0].name} drops ${random.toFixed(2)}%.`, true);
        reactedToArticle = lastArticle;
      }
      
      if (lastArticle === "Sunshine ahead: After days of grey skies, the next 72 hours will see highs around 65 °F under brilliant blue—ideal for hiking, picnics, and outdoor markets. UV levels will peak at midday, so pack sunscreen and sunglasses if you plan to stay out past lunchtime." && reactedToArticle !== lastArticle) {
        // Sunny weather boosts outdoor food sales
        let random = Math.random();
        companies[0].stockPrice += random;
        companies[2].stockPrice += random;
        updateText("The sunny weather is ideal for networing —", false);
        updateText(`${companies[0].name} rises ${random.toFixed(2)}%.`, false);
        updateText("Sunshine boosts snack & leisure sales —", false);
        updateText(`${companies[2].name} rises ${random.toFixed(2)}%.`, false);
        reactedToArticle = lastArticle;
      }
      
      if (lastArticle === "Rainfall report: Yesterday’s steady half-inch downpour boosted reservoir levels by 8 percent, lifting them to 72 percent capacity and quelling mild drought alarms. Farmers report softer fields for planting, but should delay heavy machinery until soils firm up later this week." && reactedToArticle !== lastArticle) {
        // Rain boosts water supply
        let random = Math.random();
        companies[1].stockPrice += random;
        updateText("Rain restores reservoir levels —", false);
        updateText(`${companies[1].name} rises ${random.toFixed(2)}%.`, false);
        reactedToArticle = lastArticle;
      }
      
      if (lastArticle === "Fog advisory: Dense pockets of fog settled along the river valley before dawn, cutting visibility to under 200 feet in spots. Drivers are urged to slow down, use low-beam headlights, and keep ample following distance until the mist burns off around mid-morning." && reactedToArticle !== lastArticle) {
        // Fog affects transportation
        let random = Math.random();
        companies[0].stockPrice -= random;
        updateText("Fog delays morning shipments —", true);
        updateText(`${companies[0].name} drops ${random.toFixed(2)}%.`, true);
        reactedToArticle = lastArticle;
      }
      
      if (lastArticle === "Wind alert: A tight pressure gradient will whip winds to 40–45 mph Thursday evening, rattling loose branches and rattling windows. Those in high-rise apartments may feel a gentle sway; secure potted plants and check tarps or scaffolding on nearby construction sites." && reactedToArticle !== lastArticle) {
        // Wind damages storefronts
        let random = Math.random();
        companies[0].stockPrice -= random;
        companies[2].stockPrice -= random;
        updateText("High winds damage urban property —", true);
        updateText(`${companies[0].name} drops ${random.toFixed(2)}%.`, true);
        reactedToArticle = lastArticle;
      }
      
      if (lastArticle === "Unseasonal warmth: Afternoon highs are flirting with 75 °F—well above the 60 °F norm—prompting early blooms in parks and a flurry of shorts-and-tee weather. Nights will still dip into the mid-40s, so keep a light jacket handy if you’re out after sunset." && reactedToArticle !== lastArticle) {
        // Warm weather = more food bought
        let random = Math.random();
        companies[2].stockPrice += random;
        updateText("Unseasonal warmth lifts cafe sales —", false);
        updateText(`${companies[2].name} rises ${random.toFixed(2)}%.`, false);
        reactedToArticle = lastArticle;
      }
      
      if (lastArticle === "Frost warning: Clear skies and calm winds tonight will send temperatures climbing down to 29 °F in outer districts. Orchard owners should deploy frost fans or overhead sprinklers, and bring greenhouse seedlings indoors to avoid freeze damage." && reactedToArticle !== lastArticle) {
        // Frost = crop damage
        let random = Math.random();
        companies[1].stockPrice -= random;
        updateText("Frost damages produce farms —", true);
        updateText(`${companies[1].name} drops ${random.toFixed(2)}%.`, true);
        reactedToArticle = lastArticle;
      }
      
      if (lastArticle === "Heatwave prep: The heat advisory goes into effect tomorrow as highs blast past 95 °F for at least three days. Cooling centers open at all community centers, and local news warns to check on pets, elderly neighbors, and never leave children or animals in parked cars." && reactedToArticle !== lastArticle) {
        // Heat = people buy cold drinks/snacks
        let random = Math.random();
        companies[2].stockPrice += random;
        updateText("Heatwave boosts cold snack sales —", false);
        updateText(`${companies[2].name} rises ${random.toFixed(2)}%.`, false);
        reactedToArticle = lastArticle;
      }
      
      if (lastArticle === "Lightning strikes: A rare late-season thunderstorm lit up the sky after midnight, delivering over 120 strikes in just one hour. Though no injuries were reported, several large oak limbs snapped under the electrical charge—urban crews are clearing debris today." && reactedToArticle !== lastArticle) {
        // Lightning causes power outages, city damage
        let random = Math.random();
        companies[0].stockPrice -= random;
        companies[2].stockPrice -= random;
        updateText("Lightning damages city blocks —", true);
        updateText(`${companies[0].name} drops ${random.toFixed(2)}%.`, true);
        updateText("Power outage hits digital orders —", true);
        updateText(`${companies[0].name} drops ${random.toFixed(2)}%.`, true);
        reactedToArticle = lastArticle;
      }
      
      if (lastArticle === "Weather report: Today will be mostly sunny with gentle breezes around 5 mph out of the southwest. Expect afternoon temperatures near 68 °F—perfect for a lunchtime stroll—while farmers can schedule irrigation for late afternoon when evapotranspiration rates peak." && reactedToArticle !== lastArticle) {
        // Calm day = shopping / leisure
        let random = Math.random();
        companies[0].stockPrice += random;
        companies[2].stockPrice += random;

        updateText("The Calm day improves shipping efficiency —", false);
        updateText(`${companies[0].name} rises ${random.toFixed(2)}%.`, false);
        updateText("Perfect weather boosts mall foot traffic —", false);
        updateText(`${companies[2].name} rises ${random.toFixed(2)}%.`, false);

        reactedToArticle = lastArticle;
      }
      
      
  
      wrapText(ctx, text, textX, textY, columnWidth - columnPadding * 2, lineSpacing);
    }
  
    // Header
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.font = '60px serif';
    ctx.fillText(`News from week ${player.week}, ${monthName}, ${player.year}.`, canvas.width / 2, grid * 1.7);
  
    // Optional image
    if(player.week == 1 && player.month == 6){
        ctx.drawImage(ATM1, grid * 1.2, grid * 2.5, 1380, 200);
    }
    else if(player.week == 1 && player.month == 9){
        ctx.drawImage(gameitems[9].img, grid * 1.2, grid * 2.5, 1380, 200);
    }
    else if(player.week == 0 && player.month == 12){
        ctx.drawImage(gameitems[1].img, grid * 1.2, grid * 2.5, 1380, 200);
    }
    else if(player.week == 4 && player.month == 12){
        ctx.drawImage(EvilJamal, grid * 1.2, grid * 2.5, 1380, 200);
    }
    else if(player.week == 4 && player.month == 2){
        ctx.drawImage(gameitems[8].img, grid * 1.2, grid * 2.5, 1380, 200);
    }
    else if(player.week == 0 && player.month == 3){
      ctx.drawImage(gameitems[3].img, grid * 1.2, grid * 2.5, 1380, 200);
  }
    else if (player.currentseason === seasons[1]) {
      ctx.drawImage(gameitems[3].img, grid * 1.2, grid * 2.5, 1380, 200);
    }
    else if(player.currentseason === seasons[2]){
        ctx.drawImage(gameitems[5].img, grid * 1.2, grid * 2.5, 1380, 200);
    }
    else if(player.currentseason === seasons[3]){
        ctx.drawImage(gameitems[7].img, grid * 1.2, grid * 2.5, 1380, 200);
    }
    else{
        ctx.drawImage(gameitems[6].img, grid * 1.2, grid * 2.5, 1380, 200);  
    }
  }
  
  
  

  function goToScene8() {
    prepareScene8Articles();
    currentscene = 7;
  }


  let c1page = false;
  let c2page = false;
  let c3page = false;

  function scene9(){

    ctx.fillStyle = `#1A1A1A`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);



    if(c1page == false && c2page == false && c3page == false){

        // Create a gradient
        let gradient = ctx.createLinearGradient(0, grid, 0, grid - 70); // Adjust the gradient start and end points

        // Add color stops to the gradient
        gradient.addColorStop(0, '#B9F2FF');  // Bottom color (diamond-like)
        gradient.addColorStop(1, '#808080');  // Top color (darker gray/silver) for stronger contrast

        // Set the fill style to the gradient
        ctx.fillStyle = gradient;

        // Draw the text with the gradient
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "70px Arial";

        ctx.fillText('MarketPlace', canvas.width / 2, grid);


        const boxes = [
      {
        name: companies[0].name,
        x: grid,
        y: grid,
        width: grid * 10,
        height: grid * 4,
        color: `#222831`,
		category: companies[0].category,
		state: companies[0].state
      },
      {
        name: companies[1].name,
        x: grid,
        y: grid * 6,
        width: grid * 10,
        height: grid * 4,
        color: `#222831`,
		category: companies[1].category,
		state: companies[1].state
      },
      {
        name: companies[2].name,
        x: grid,
        y: grid * 11,
        width: grid * 10,
        height: grid * 4,
        color: `#222831`,
		category: companies[2].category,
		state: companies[2].state
      }
    ]


    boxes.forEach(box => {

      ctx.fillStyle = box.color;
      ctx.fillRect(box.x, box.y, box.width, box.height);

	  ctx.fillStyle = `green`;
	  ctx.font = "20px Arial";
      ctx.fillText(`State: ${box.state}`, box.x + box.width / 2, box.y + grid * 1);
      ctx.font = "40px Arial";
      ctx.fillText(box.name, box.x + box.width / 2, box.y + grid * 2);
	  ctx.font = "35px Arial";
      ctx.fillText(box.category, box.x + box.width / 2, box.y + grid * 3);

      ctx.strokeStyle = 'white';
      ctx.lineWidth = 3;
    

      ctx.strokeRect(box.x, box.y, box.width, box.height);
    });

	ctx.fillStyle = `#121212`;
	ctx.fillRect(boxes[0].x + grid * 18, boxes[0].y, boxes[0].width, boxes[0].height);
	ctx.fillStyle = `#1e1e2f`
	ctx.fillRect(boxes[0].x + grid * 14, boxes[0].y * 7, boxes[0].width + grid * 4, boxes[0].height * 1.76);
    ctx.fillStyle = '#2d2d4a';
    let startX = boxes[0].x + grid * 14;
    let startY = boxes[0].y * 7;
    let width = boxes[0].width + grid * 4;
    let height = boxes[0].height * 1.76;
    let spacing = grid / 2;

    for (let y = startY + spacing / 2; y < startY + height; y += spacing) {
        for (let x = startX + spacing / 2; x < startX + width; x += spacing) {
            ctx.beginPath();
            ctx.arc(x, y, 1.2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
	const graphX = boxes[0].x + grid * 14;
    const graphY = boxes[0].y * 7;
    const graphWidth = boxes[0].width + grid * 4;
    const graphHeight = boxes[0].height * 1.76;

    const midY = graphY + graphHeight / 2; // Middle of the box


	ctx.strokeStyle = 'white';
	ctx.lineWidth = 3;

	ctx.font = "40px Arial";
	ctx.fillStyle = '#B9F2FF';
	ctx.fillText(`${player.name}'s Shares`, boxes[0].x + grid * 18 + boxes[0].width / 2, boxes[0].y + grid * 1);

	ctx.strokeRect(boxes[0].x + grid * 18, boxes[0].y, boxes[0].width, boxes[0].height);
	ctx.strokeRect(boxes[0].x + grid * 14, boxes[0].y * 7, boxes[0].width + grid * 4, boxes[0].height * 1.76);


	const baseY = boxes[0].y * 7 + boxes[0].height * 1.75;
	const scaledHeight = (stockgraph[0] * grid / 4.2857142857142857142857142857143);
	const scaledHeight2 = (stockgraph[1] * grid / 4.2857142857142857142857142857143);
	const scaledHeight3 = (stockgraph[2] * grid / 4.2857142857142857142857142857143);
	const scaledHeight4 = (stockgraph[3] * grid / 4.2857142857142857142857142857143);
	const scaledHeight5 = (stockgraph[4] * grid / 4.2857142857142857142857142857143);
	const scaledHeight6 = (stockgraph[5] * grid / 4.2857142857142857142857142857143);
	const scaledHeight7 = (stockgraph[6] * grid / 4.2857142857142857142857142857143);
	const scaledHeight8 = (stockgraph[7] * grid / 4.2857142857142857142857142857143);
	const scaledHeight9 = (stockgraph[8] * grid / 4.2857142857142857142857142857143);
	const scaledHeight10 = (stockgraph[9] * grid / 4.2857142857142857142857142857143);
	const scaledHeight11 = (stockgraph[10] * grid / 4.2857142857142857142857142857143);
	const scaledHeight12 = (stockgraph[11] * grid / 4.2857142857142857142857142857143);


	const bars = [
		{
			x: boxes[0].x + grid * 14 + grid - 25,
			y: baseY - scaledHeight,       // Start drawing from the bottom, going up
			width: grid,
			height: scaledHeight,          // Grow upwards
			color: `green`
		},
		{
			x: boxes[0].x + grid * 14 + grid * 1.6,
			y: baseY - scaledHeight2,       // Start drawing from the bottom, going up
			width: grid,
			height: scaledHeight2,          // Grow upwards
			color: `green`
		},
		{
			x: boxes[0].x + grid * 14 + grid * 2.7,
			y: baseY - scaledHeight3,       // Start drawing from the bottom, going up
			width: grid,
			height: scaledHeight3,          // Grow upwards
			color: `green`
		},
		{
			x: boxes[0].x + grid * 14 + grid * 3.8,
			y: baseY - scaledHeight4,       // Start drawing from the bottom, going up
			width: grid,
			height: scaledHeight4,          // Grow upwards
			color: `green`
		},
		{
			x: boxes[0].x + grid * 14 + grid * 4.9,
			y: baseY - scaledHeight5,       // Start drawing from the bottom, going up
			width: grid,
			height: scaledHeight5,          // Grow upwards
			color: `green`
		},
		{
			x: boxes[0].x + grid * 14 + grid * 6,
			y: baseY - scaledHeight6,       // Start drawing from the bottom, going up
			width: grid,
			height: scaledHeight6,          // Grow upwards
			color: `green`
		},
		{
			x: boxes[0].x + grid * 14 + grid * 7.1,
			y: baseY - scaledHeight7,       // Start drawing from the bottom, going up
			width: grid,
			height: scaledHeight7,          // Grow upwards
			color: `green`
		}
		,
		{
			x: boxes[0].x + grid * 14 + grid * 8.2,
			y: baseY - scaledHeight8,       // Start drawing from the bottom, going up
			width: grid,
			height: scaledHeight8,          // Grow upwards
			color: `green`
		},
		{
			x: boxes[0].x + grid * 14 + grid * 9.3,
			y: baseY - scaledHeight9,       // Start drawing from the bottom, going up
			width: grid,
			height: scaledHeight9,          // Grow upwards
			color: `green`
		},
		{
			x: boxes[0].x + grid * 14 + grid * 10.4,
			y: baseY - scaledHeight10,       // Start drawing from the bottom, going up
			width: grid,
			height: scaledHeight10,          // Grow upwards
			color: `green`
		},
		{
			x: boxes[0].x + grid * 14 + grid * 11.5,
			y: baseY - scaledHeight11,       // Start drawing from the bottom, going up
			width: grid,
			height: scaledHeight11,          // Grow upwards
			color: `green`
		},
		{
			x: boxes[0].x + grid * 14 + grid * 12.6,
			y: baseY - scaledHeight12,       // Start drawing from the bottom, going up
			width: grid,
			height: scaledHeight12,          // Grow upwards
			color: `green`
		}
	]

	bars.forEach((bar, i) => {
		if (stockgraph[i] - stockgraph[i - 1] < 0) {
			ctx.fillStyle = `red`;
		} else {
			ctx.fillStyle = bar.color;
		}
	
		ctx.strokeStyle = 'white';
		ctx.lineWidth = 3;
	
		ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
		ctx.strokeRect(bar.x, bar.y, bar.width, bar.height);
		ctx.fillStyle = `white`;
		ctx.font = `20px Arial`
		ctx.fillText(stockgraph[i].toFixed(2), bar.x + 25, bar.y - 10)
	});



	ctx.beginPath();
	ctx.moveTo(graphX, midY);             // Start from left side
	ctx.lineTo(graphX + graphWidth, midY); // Draw to right side
	ctx.strokeStyle = 'blue';            // Or any color you like
	ctx.lineWidth = 3;
	ctx.stroke();



    //3 separate buttons for the umm... i forgot


    ctx.fillStyle = `grey`;
    ctx.fillRect(boxes[0].x + grid * 19, boxes[0].y + grid * 2, grid * 2, grid);
    ctx.fillRect(boxes[0].x + grid * 22, boxes[0].y + grid * 2, grid * 2, grid);
    ctx.fillRect(boxes[0].x + grid * 25, boxes[0].y + grid * 2, grid * 2, grid);
    ctx.fillStyle = `white`;
    ctx.font = `15px Tahoma `
    ctx.fillText(`${companies[0].trademarkname}: ${player.stocks[companies[0].name]}`, boxes[0].x + grid * 20, boxes[0].y + grid * 2.5);
    ctx.fillText(`${companies[1].trademarkname}: ${player.stocks[companies[1].name]}`, boxes[0].x + grid * 23, boxes[0].y + grid * 2.5);
    ctx.fillText(`${companies[2].trademarkname}: ${player.stocks[companies[2].name]}`, boxes[0].x + grid * 26, boxes[0].y + grid * 2.5);



    }
    else if(c1page){
        // Create a gradient
        let gradient = ctx.createLinearGradient(0, grid, 0, grid - 70); // Adjust the gradient start and end points

        // Add color stops to the gradient
        gradient.addColorStop(0, '#B9F2FF');  // Bottom color (diamond-like)
        gradient.addColorStop(1, '#808080');  // Top color (darker gray/silver) for stronger contrast

        // Set the fill style to the gradient
        ctx.fillStyle = gradient;

        // Draw the text with the gradient
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "70px Arial";

        ctx.fillText(companies[0].name, canvas.width / 2, grid);

        ctx.font = "40px Arial";
        ctx.fillText(companies[0].category, canvas.width / 2, grid * 2);
        ctx.fillText(companies[0].owner, canvas.width / 2, grid * 2.7);
        ctx.font = "20px Arial";



        ctx.textAlign = "start";
        ctx.textBaseline = "top";
        ctx.fillStyle = `white`;

        ctx.fillText(`State:`, grid * 2, grid);
                ctx.fillStyle = companies[0].state == `dropping`? `red` :  `green`
        ctx.fillText(companies[0].state, grid * 3.2, grid);


        ctx.fillStyle = `white`;

        ctx.fillText(`AnnualProfit: ${companies[0].annualProfit}`, grid, grid * 3);
        ctx.fillText(`Available Shares: ${companies[0].sharesAvailable}`, grid, grid * 3.5);
        ctx.fillText(`Stock Value: ${companies[0].stockPrice}`, grid, grid * 4);
        ctx.fillText(`Your Shares: ${player.stocks[companies[0].name]}`, grid, grid * 4.5);

        ctx.fillStyle = `#1e1e2f`;
        ctx.fillRect(grid, grid * 5, grid * 28, grid * 10);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
      
  
        ctx.strokeRect(grid, grid * 5, grid * 28, grid * 10);

        ctx.fillStyle = '#2d2d4a';
        let startX = grid;
        let startY = grid * 5;
        let width = grid * 28;
        let height = grid * 9;
        let spacing = grid / 2;

        for (let y = startY + spacing / 2; y < startY + height; y += spacing) {
            for (let x = startX + spacing / 2; x < startX + width; x += spacing) {
                ctx.beginPath();
                ctx.arc(x, y, 1.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }


        const boxes = [
            {
                x: grid * 2,
                y: grid * 6,
                width: grid * 13,
                height: grid * 2,
                color: `#121212`,
                text: `Buy 1 Stock`,
                text2: `for $${companies[0].stockPrice}`
            },
            {
                x: grid * 2,
                y: grid * 9,
                width: grid * 13,
                height: grid * 2,
                color: `#121212`,
                text: `Buy 10 Stocks`,
                text2: `for $${companies[0].stockPrice * 10}`
            },
            {
                x: grid * 2,
                y: grid * 12,
                width: grid * 13,
                height: grid * 2,
                color: `#121212`,
                text: `Buy 50 Stocks`,
                text2: `for $${companies[0].stockPrice * 50}`
            },
            {
                x: grid * 16,
                y: grid * 5.5,
                width: grid * 12.5,
                height: grid * 8,
                color: `#121212`
            }

        ]

        boxes.forEach((box, i) => {
            ctx.fillStyle = box.color;
            ctx.fillRect(box.x, box.y, box.width, box.height);
        
            if (i === boxes.length - 1) {
                // Apply neon glow to the last box only
                ctx.shadowColor = '#00f6ff';
                ctx.shadowBlur = 10;
                ctx.strokeStyle = '#00f6ff';
            } else {
                // Reset shadow and stroke style for other boxes
                ctx.shadowColor = 'transparent';
                ctx.shadowBlur = 0;
                ctx.strokeStyle = '#ffffff'; // Or whatever default
                ctx.fillStyle = `white`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(box.text, box.x + box.width / 2, box.y + grid / 2)
                ctx.fillText(box.text2, box.x + box.width / 2, box.y + grid)
            }
        
            ctx.strokeRect(box.x, box.y, box.width, box.height);
        });
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.strokeStyle = '#ffffff'; // Or whatever default

        ctx.fillStyle = '#444444';
        let startX2 = boxes[3].x;
        let startY2 = boxes[3].y;
        let width2 = boxes[3].width;
        let height2 = boxes[3].x - grid * 8;
        let spacing2 = grid / 2;

        for (let y = 0; y < height2; y += spacing2) {
            for (let x = 0; x < width2; x += spacing2) {
                let offset = (y / spacing2) % 2 === 0 ? spacing2 / 2 : 0;
                ctx.beginPath();
                ctx.arc(startX2 + x + offset, startY2 + y + spacing2 / 2, 1.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }



        drawText();  // Draw the box with the updated text
    }
    else if(c2page){
        // Create a gradient
        let gradient = ctx.createLinearGradient(0, grid, 0, grid - 70); // Adjust the gradient start and end points

        // Add color stops to the gradient
        gradient.addColorStop(0, '#B9F2FF');  // Bottom color (diamond-like)
        gradient.addColorStop(1, '#808080');  // Top color (darker gray/silver) for stronger contrast

        // Set the fill style to the gradient
        ctx.fillStyle = gradient;

        // Draw the text with the gradient
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "70px Arial";

        ctx.fillText(companies[1].name, canvas.width / 2, grid);

        ctx.font = "40px Arial";
        ctx.fillText(companies[1].category, canvas.width / 2, grid * 2);
        ctx.fillText(companies[1].owner, canvas.width / 2, grid * 2.7);
        ctx.font = "20px Arial";



        ctx.textAlign = "start";
        ctx.textBaseline = "top";
        ctx.fillStyle = `white`;

        ctx.fillText(`State:`, grid * 2, grid);
                ctx.fillStyle = companies[1].state == `dropping`? `red` :  `green`
        ctx.fillText(companies[1].state, grid * 3.2, grid);


        ctx.fillStyle = `white`;

        ctx.fillText(`AnnualProfit: ${companies[1].annualProfit}`, grid, grid * 3);
        ctx.fillText(`Available Shares: ${companies[1].sharesAvailable}`, grid, grid * 3.5);
        ctx.fillText(`Stock Value: ${companies[1].stockPrice}`, grid, grid * 4);
        ctx.fillText(`Your Shares: ${player.stocks[companies[1].name]}`, grid, grid * 4.5);

        ctx.fillStyle = `#1e1e2f`;
        ctx.fillRect(grid, grid * 5, grid * 28, grid * 10);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
      
  
        ctx.strokeRect(grid, grid * 5, grid * 28, grid * 10);

        ctx.fillStyle = '#2d2d4a';
        let startX = grid;
        let startY = grid * 5;
        let width = grid * 28;
        let height = grid * 9;
        let spacing = grid / 2;

        for (let y = startY + spacing / 2; y < startY + height; y += spacing) {
            for (let x = startX + spacing / 2; x < startX + width; x += spacing) {
                ctx.beginPath();
                ctx.arc(x, y, 1.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }


        const boxes = [
            {
                x: grid * 2,
                y: grid * 6,
                width: grid * 13,
                height: grid * 2,
                color: `#121212`,
                text: `Buy 1 Stock`,
                text2: `for $${companies[1].stockPrice}`
            },
            {
                x: grid * 2,
                y: grid * 9,
                width: grid * 13,
                height: grid * 2,
                color: `#121212`,
                text: `Buy 10 Stocks`,
                text2: `for $${companies[1].stockPrice * 10}`
            },
            {
                x: grid * 2,
                y: grid * 12,
                width: grid * 13,
                height: grid * 2,
                color: `#121212`,
                text: `Buy 50 Stocks`,
                text2: `for $${companies[1].stockPrice * 50}`
            },
            {
                x: grid * 16,
                y: grid * 5.5,
                width: grid * 12.5,
                height: grid * 8,
                color: `#121212`
            }

        ]

        boxes.forEach((box, i) => {
            ctx.fillStyle = box.color;
            ctx.fillRect(box.x, box.y, box.width, box.height);
        
            if (i === boxes.length - 1) {
                // Apply neon glow to the last box only
                ctx.shadowColor = '#00f6ff';
                ctx.shadowBlur = 10;
                ctx.strokeStyle = '#00f6ff';
            } else {
                // Reset shadow and stroke style for other boxes
                ctx.shadowColor = 'transparent';
                ctx.shadowBlur = 0;
                ctx.strokeStyle = '#ffffff'; // Or whatever default
                ctx.fillStyle = `white`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(box.text, box.x + box.width / 2, box.y + grid / 2)
                ctx.fillText(box.text2, box.x + box.width / 2, box.y + grid)
            }
        
            ctx.strokeRect(box.x, box.y, box.width, box.height);
        });
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.strokeStyle = '#ffffff'; // Or whatever default

        ctx.fillStyle = '#444444';
        let startX2 = boxes[3].x;
        let startY2 = boxes[3].y;
        let width2 = boxes[3].width;
        let height2 = boxes[3].x - grid * 8;
        let spacing2 = grid / 2;

        for (let y = 0; y < height2; y += spacing2) {
            for (let x = 0; x < width2; x += spacing2) {
                let offset = (y / spacing2) % 2 === 0 ? spacing2 / 2 : 0;
                ctx.beginPath();
                ctx.arc(startX2 + x + offset, startY2 + y + spacing2 / 2, 1.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }



        drawText();  // Draw the box with the updated text
    }
    else if(c3page){
        // Create a gradient
        let gradient = ctx.createLinearGradient(0, grid, 0, grid - 70); // Adjust the gradient start and end points

        // Add color stops to the gradient
        gradient.addColorStop(0, '#B9F2FF');  // Bottom color (diamond-like)
        gradient.addColorStop(1, '#808080');  // Top color (darker gray/silver) for stronger contrast

        // Set the fill style to the gradient
        ctx.fillStyle = gradient;

        // Draw the text with the gradient
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "70px Arial";

        ctx.fillText(companies[2].name, canvas.width / 2, grid);

        ctx.font = "40px Arial";
        ctx.fillText(companies[2].category, canvas.width / 2, grid * 2);
        ctx.fillText(companies[2].owner, canvas.width / 2, grid * 2.7);
        ctx.font = "20px Arial";



        ctx.textAlign = "start";
        ctx.textBaseline = "top";
        ctx.fillStyle = `white`;

        ctx.fillText(`State:`, grid * 2, grid);
                ctx.fillStyle = companies[2].state == `dropping`? `red` :  `green`
        ctx.fillText(companies[2].state, grid * 3.2, grid);


        ctx.fillStyle = `white`;

        ctx.fillText(`AnnualProfit: ${companies[2].annualProfit}`, grid, grid * 3);
        ctx.fillText(`Available Shares: ${companies[2].sharesAvailable}`, grid, grid * 3.5);
        ctx.fillText(`Stock Value: ${companies[2].stockPrice}`, grid, grid * 4);
        ctx.fillText(`Your Shares: ${player.stocks[companies[2].name]}`, grid, grid * 4.5);

        ctx.fillStyle = `#1e1e2f`;
        ctx.fillRect(grid, grid * 5, grid * 28, grid * 10);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
      
  
        ctx.strokeRect(grid, grid * 5, grid * 28, grid * 10);

        ctx.fillStyle = '#2d2d4a';
        let startX = grid;
        let startY = grid * 5;
        let width = grid * 28;
        let height = grid * 9;
        let spacing = grid / 2;

        for (let y = startY + spacing / 2; y < startY + height; y += spacing) {
            for (let x = startX + spacing / 2; x < startX + width; x += spacing) {
                ctx.beginPath();
                ctx.arc(x, y, 1.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }


        const boxes = [
            {
                x: grid * 2,
                y: grid * 6,
                width: grid * 13,
                height: grid * 2,
                color: `#121212`,
                text: `Buy 1 Stock`,
                text2: `for $${companies[2].stockPrice}`
            },
            {
                x: grid * 2,
                y: grid * 9,
                width: grid * 13,
                height: grid * 2,
                color: `#121212`,
                text: `Buy 10 Stocks`,
                text2: `for $${companies[2].stockPrice * 10}`
            },
            {
                x: grid * 2,
                y: grid * 12,
                width: grid * 13,
                height: grid * 2,
                color: `#121212`,
                text: `Buy 50 Stocks`,
                text2: `for $${companies[2].stockPrice * 50}`
            },
            {
                x: grid * 16,
                y: grid * 5.5,
                width: grid * 12.5,
                height: grid * 8,
                color: `#121212`
            }

        ]

        boxes.forEach((box, i) => {
            ctx.fillStyle = box.color;
            ctx.fillRect(box.x, box.y, box.width, box.height);
        
            if (i === boxes.length - 1) {
                // Apply neon glow to the last box only
                ctx.shadowColor = '#00f6ff';
                ctx.shadowBlur = 10;
                ctx.strokeStyle = '#00f6ff';
            } else {
                // Reset shadow and stroke style for other boxes
                ctx.shadowColor = 'transparent';
                ctx.shadowBlur = 0;
                ctx.strokeStyle = '#ffffff'; // Or whatever default
                ctx.fillStyle = `white`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(box.text, box.x + box.width / 2, box.y + grid / 2)
                ctx.fillText(box.text2, box.x + box.width / 2, box.y + grid)
            }
        
            ctx.strokeRect(box.x, box.y, box.width, box.height);
        });
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.strokeStyle = '#ffffff'; // Or whatever default

        ctx.fillStyle = '#444444';
        let startX2 = boxes[3].x;
        let startY2 = boxes[3].y;
        let width2 = boxes[3].width;
        let height2 = boxes[3].x - grid * 8;
        let spacing2 = grid / 2;

        for (let y = 0; y < height2; y += spacing2) {
            for (let x = 0; x < width2; x += spacing2) {
                let offset = (y / spacing2) % 2 === 0 ? spacing2 / 2 : 0;
                ctx.beginPath();
                ctx.arc(startX2 + x + offset, startY2 + y + spacing2 / 2, 1.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }



        drawText();  // Draw the box with the updated text
    }



}

// Array to store the last 20 messages (each with text and error flag)
let eventLog = [];

// Function to add new messages to the log
function updateText(message, isError = false) {
    eventLog.push({ text: message, error: isError }); // Store as object
    if (eventLog.length > 19) {
        eventLog.shift(); // Keep only the latest 20
    }
}

// Function to draw all messages inside the box
function drawText() {
    ctx.font = '16px "Press Start 2P", monospace';
    ctx.textAlign = 'start';
    ctx.textBaseline = 'bottom';

    const lineHeight = 20;
    const baseX = grid * 16 + 10;
    const baseY = grid * 5.5 + grid * 8 - 10;

    for (let i = 0; i < eventLog.length; i++) {
        const msg = eventLog[i];
        ctx.fillStyle = msg.error ? 'red' : '#39FF14'; // Color per message
        const y = baseY - (eventLog.length - 1 - i) * lineHeight;
        ctx.fillText(msg.text, baseX, y);
    }
}





function buystocks(company, ammount) {
    if (company.sharesAvailable <= ammount) {
        updateText("No shares available.", true);
        return;
    }
    if (player.money < company.stockPrice * ammount) {
        updateText(`Not enough money, Failed to buy ${ammount} shares of ${company.name}.`, true);
        return;
    }

    company.sharesAvailable -= ammount;
    player.money = subtractMoney(player.money, company.stockPrice * ammount);
    
    if (!player.stocks[company.name]) {
        player.stocks[company.name] = 0;
    }
    player.stocks[company.name] += ammount;
    updateText(`Bought ${ammount} share of ${company.name} for $${company.stockPrice * ammount}`);
}

function sellstocks(company, ammount) {
    if (!player.stocks[company.name] || player.stocks[company.name] <= 0) {
        updateText("You don't own any shares of this company.", true);
        return;
    }

    company.sharesAvailable += ammount;
    player.money = addMoney(player.money, company.stockPrice * ammount);
    player.stocks[company.name] -= ammount;
    updateText(`Sold ${ammount} share of ${company.name} for $${company.stockPrice * ammount}`, false);
}









function economicsystem() {
    // Reset all prices to their original values first
    for (let item of gameitems) {
        item.price = item.ogprice;
    }

    // Define seasonal effects by category
    const seasonalEffects = {
        Summer: {
            Toy: +0.30,        // Increase price by 30%
            School: +0.40,
            Business: -0.30
        },
        Fall: {
            School: +0.30,
            Business: +0.80,
            Companion: -0.20
        },
        Winter: {
            Toy: +0.30,
            Business: +0.40,
            Property: -0.30
        },
        Spring: {
            Companion: +0.30,
            School: +0.40,
            Toy: -0.30
        }
    };

    // Determine the current season
    const currentSeason = player.currentseason;

    // Apply seasonal changes by category
    for (let item of gameitems) {
        const effects = seasonalEffects[currentSeason];
        if (effects && effects[item.category] !== undefined) {
            let change = effects[item.category];
            let factor = 1 + (Math.random() * Math.abs(change));
            item.price = item.ogprice * (change > 0 ? factor : (1 - Math.random() * Math.abs(change)));
        }
    }

    // Sync inventory prices
    for (let i = 0; i < player.inventory.length; i++) {
        for (let j = 0; j < gameitems.length; j++) {
            if (player.inventory[i].name === gameitems[j].name) {
                player.inventory[i].price = gameitems[j].price;
            }
        }
    }
}


function itemsbn(){
    player.inventory.forEach(item => {
        if (item.name === gameitems[4].name) {
            console.log(item);
            player.money = addMoney(player.money, 0.01);
        }
    });
    player.inventory.forEach(item => {
        if (item.name === gameitems[7].name) {
            console.log(item);
            player.experience = addMoney(player.experience, 0.23);
        }
    });
    player.inventory.forEach(item => {
        if (item.name === gameitems[8].name) {
            console.log(item);
            player.experience = addMoney(player.experience, 0.21);
        }
    });
    player.inventory.forEach(item => {
        if (item.name === gameitems[9].name) {
            console.log(item);
            player.money = addMoney(player.money, 0.02);
            player.experience = addMoney(player.experience, 0.51);
        }
    });
    player.inventory.forEach(item => {
        if (item.name === gameitems[10].name) {
            console.log(item);
            player.experience = addMoney(player.experience, 0.89);
        }
    });
    player.inventory.forEach(item => {
        if (item.name === gameitems[11].name) {
            console.log(item);
            player.experience = addMoney(player.experience, 1);
        }


    });

	player.inventory.forEach(item => {
		if(item.name === gameitems[16].name){
			const hasCommonItems = player.inventory.some(item => item.rarity == `Common`);

			if (hasCommonItems) {
				console.log("Player has common items!");
				// Find the common items in the player's inventory
				const commonItems = player.inventory.filter(item => item.rarity === 'Common');

				// If there are any common items, find the one with the highest price
				if (commonItems.length > 0) {
				    const highestPricedCommonItem = commonItems.reduce((maxItem, currentItem) => {
				    return currentItem.price > maxItem.price ? currentItem : maxItem;
				    });
				
				    console.log("Player's highest priced common item:", highestPricedCommonItem);
					const index = player.inventory.indexOf(highestPricedCommonItem);
					if (index !== -1) {
					  player.inventory.splice(index, 1);
					  player.money = addMoney(player.money, highestPricedCommonItem.price * 1.10);
					}
				}
				else {
				    console.log("No common items found.");
				}
				
			}
			else{
				console.log(`none`);
			}
		}

        if(item.name === gameitems[17].name){
            const hasUncommonItems = player.inventory.some(item => item.rarity === 'Uncommon');
            const hasCommonItems = player.inventory.some(item => item.rarity === 'Common');
            
            if (hasUncommonItems) {
                console.log("Player has Uncommon items!");
                const uncommonItems = player.inventory.filter(item => item.rarity === 'Uncommon');
            
                if (uncommonItems.length > 0) {
                    const highest = uncommonItems.reduce((max, curr) => curr.price > max.price ? curr : max);
                    console.log("Highest Uncommon:", highest);
                    const index = player.inventory.indexOf(highest);
                    if (index !== -1) {
                        player.inventory.splice(index, 1);
                        player.money = addMoney(player.money, highest.price * 1.10);
                    }
                }
            } else if (hasCommonItems) {
                console.log("Player has Common items!");
                const commonItems = player.inventory.filter(item => item.rarity === 'Common');
            
                if (commonItems.length > 0) {
                    const highest = commonItems.reduce((max, curr) => curr.price > max.price ? curr : max);
                    console.log("Highest Common:", highest);
                    const index = player.inventory.indexOf(highest);
                    if (index !== -1) {
                        player.inventory.splice(index, 1);
                        player.money = addMoney(player.money, highest.price * 1.10);
                    }
                }
            } else {
                console.log("No eligible items found.");
            }
            
		}
	})


}

// Initialize once, if not already
player.levelMilestone = player.levelMilestone || 0;

function levelmech() {
    const milestonesReached = Math.floor(player.level / 5);
    const newMilestones = milestonesReached - player.levelMilestone;

    if (newMilestones > 0) {
        player.maximum += newMilestones * 8; // +8 for each 5-level milestone
        player.levelMilestone = milestonesReached;
        showNotification(`Player Inventory++!`, 2500);
    }
}

let recessiondate = 0;
let boomdate = 0;


function recessionactivate() {
    gamestate.recessionActive = true;
    recessiondate = Math.floor(Math.random() * (7 - 3 + 1)) + 3;
    updateText("Market crash detected!", true);
    updateText(`The recession is expected to last for ${recessiondate} weeks`, true);
}

function boomactivate() {
    gamestate.boomActive = true; // Use consistent naming
    boomdate = Math.floor(Math.random() * (7 - 3 + 1)) + 3;
    updateText("Market surge detected!", false);
    updateText(`The boom is expected to last for ${boomdate} weeks`, false);
}

// Call this every in-game week
function recession() {
    if (gamestate.recessionActive) {
        if (recessionrecovery >= recessiondate) {
            gamestate.recessionActive = false;
            recessionrecovery = 0;
            updateText("The recession has ended.", false);
        } else {
            recessionrecovery++;
        }
    }
}

// Call this every in-game week
function boom() {
    if (gamestate.boomActive) {
        if (boomrecovery >= boomdate) {
            gamestate.boomActive = false;
            boomrecovery = 0;
            updateText("The market boom has cooled down.", true);
        } else {
            boomrecovery++;
        }
    }
}




let maxpage;

canvas.addEventListener("contextmenu", e => e.preventDefault());


totalPages = Math.ceil(gameitems.length / itemsPerPage);


document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        if(currentscene === 4){

                if(currentpage + 1 < player.maximum / 8){
                    currentpage++;
                }
        }
        else if(currentscene === 5){
            if (currentpage < totalPages - 1) {
                currentpage++;
            }

        }

    }
    if (e.key === 'ArrowLeft') {
        if (currentpage > 0) {
            currentpage--;
        }
    }
});

canvas.addEventListener(`mousedown`, (e) => {
    if(e.button === 0){
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        const roundedx = Math.floor(x / 50) * 50;
        const roundedy = Math.floor(y / 50) * 50;
        console.log("Canvas coordinates:", roundedx, roundedy);




        if (mainscreen) {
            if (roundedx >= button1.x && roundedx < button1.x + button1.width && roundedy >= button1.y && roundedy < button1.y + button1.height) {
                if(player.playedbefore){
                    currentscene = 2;
                    mainscreen = false;
                    playmusic();

                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                }
                else{
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    mainscreen = false;
                    currentscene++;
                    currentcustomer = Math.floor(Math.random() * customers.length);
                    player.playedbefore = true;
                }

            }
        
            if (roundedx >= button2.x && roundedx < button2.x + button2.width && roundedy >= button2.y && roundedy < button2.y + button2.height) {
                currentscene = 6;
                mainscreen = false;
                clicksfx.pause();
                clicksfx.currentTime = 0;
                clicksfx.play();
            }
        }
        if (currentscene === 1) {
            if (
                roundedx >= bubblemsgcontinue.x &&
                roundedx < bubblemsgcontinue.x + bubblemsgcontinue.width &&
                roundedy >= bubblemsgcontinue.y &&
                roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height && !showSecondDialogue && !showThirdDialogue && !showFourthDialogue
                
            ) {
                showSecondDialogue = true;
                secondDialogueTime = Date.now(); // Start the timer
                clicksfx.pause();
                clicksfx.currentTime = 0;
                clicksfx.play();
            }
            if(showSecondDialogue && Date.now() - secondDialogueTime >= 1500){
                if(
                    roundedx >= bubblemsgcontinue.x &&
                    roundedx < bubblemsgcontinue.x + bubblemsgcontinue.width &&
                    roundedy >= bubblemsgcontinue.y &&
                    roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                ){
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    if(player.money < 0.05){
                        window.alert(`not enough $`)
                    }
                    else{
                        secondDialogueTime = Date.now(); // Start the timer
                        showFourthDialogue = true;
                        showSecondDialogue = false;
                        player.money -= sell.price.toFixed(2);
                        player.inventory.push({
                            name: gameitems[0].name,
                            imgSrc: gameitems[0].img.src,  // ✅ this is just a string like "images/sword.png"
                            price: gameitems[0].price,
							rarity: gameitems[0].rarity
                          });
                        sell;
                    }

                }
                else if(
                    roundedx >= bubblemsgcontinue.x - grid * 17 &&
                    roundedx <= bubblemsgcontinue.x + bubblemsg.width - grid * 35 &&
                    roundedy >= bubblemsgcontinue.y &&
                    roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                )
                {
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    showSecondDialogue = false;
                    showThirdDialogue = true;
                    secondDialogueTime = Date.now(); // Start the timer
                }


            }
            if(showThirdDialogue && Date.now() - secondDialogueTime >= 1500){
                if(
                    roundedx >= bubblemsgcontinue.x &&
                    roundedx < bubblemsgcontinue.x + bubblemsgcontinue.width &&
                    roundedy >= bubblemsgcontinue.y &&
                    roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                ){
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    secondDialogueTime = Date.now(); // Start the timer
                    showFourthDialogue = true;
                    showThirdDialogue = false;


                      // Usage:
                      player.money = subtractMoney(player.money, 0.03);
                      player.inventory.push({
                        name: gameitems[0].name,
                        imgSrc: gameitems[0].img.src,  // ✅ this is just a string like "images/sword.png"
                        price: gameitems[0].price,
						rarity: gameitems[0].rarity
                      });
                    sell = undefined;


                }
                else if(
                    roundedx >= bubblemsgcontinue.x - grid * 17 &&
                    roundedx <= bubblemsgcontinue.x + bubblemsg.width - grid * 35 &&
                    roundedy >= bubblemsgcontinue.y &&
                    roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                ){
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    secondDialogueTime = Date.now(); // Start the timer
                    refused = true;
                    showThirdDialogue = false;
                    showFourthDialogue = true;
                    sell = undefined;
                }
            }
            if(showFourthDialogue && Date.now() - secondDialogueTime >= 1500){
                if(
                    roundedx >= bubblemsgcontinue.x &&
                    roundedx < bubblemsgcontinue.x + bubblemsgcontinue.width &&
                    roundedy >= bubblemsgcontinue.y &&
                    roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                ){
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    showFourthDialogue = false;
                    currentscene++;
                    rendered = false;
                    refused = false;
                    localStorage.setItem('playerData', JSON.stringify(player));
					          localStorage.setItem('MarketData', JSON.stringify(companies));
                    localStorage.setItem('GraphData', JSON.stringify(stockgraph));
                }
            }
        }
        if(currentscene === 2){
            if(rendered === false){
                rendered = true;
                localStorage.setItem('playerData', JSON.stringify(player));
				        localStorage.setItem('MarketData', JSON.stringify(companies));
                localStorage.setItem('GraphData', JSON.stringify(stockgraph));
                secondDialogueTime = Date.now();

            }

            if(Date.now() - secondDialogueTime >= 500){
                if(roundedx >= button3.x &&
                    roundedx < button3.x + button3.width &&
                    roundedy >= button3.y &&
                    roundedy < button3.y + button3.height
                )
                {
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    if(times[player.week].reserved && times[player.week].week < 5){
                        scenerandomizer = Math.random();
                        currentscene++;
                        refused = false;
                        atdialogue = 0;
                        secondDialogueTime = Date.now();
                        currentcustomer = Math.floor(Math.random() * customers.length);
                        rendered = false;
                        player.selling = player.selling;
                        let offerchance = Math.random();
                        let offerchance2 = Math.random();
                    
                    
                        if(times[player.week].sell){
                            if(customers[currentcustomer].kupal){
                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                        offer = Math.round((player.selling.price - Math.random() * player.selling.price * 0.25) * 100) / 100;
                                    
                                    
                                    }
                                    else{
                                        offer = Math.round((player.selling.price - Math.random() * player.selling.price * 0.50) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                        offer = Math.round((player.selling.price - Math.random() * player.selling.price * 0.80) * 100) / 100;
                                    }
                                    else{
                                        offer = Math.round((player.selling.price - Math.random() * player.selling.price * 1) * 100) / 100;
                                    }
                                
                                }
                            }
                            else{
                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                        offer = Math.round((player.selling.price + Math.random() * player.selling.price * 0.20) * 100) / 100;
                                    
                                    
                                    }
                                    else{
                                        offer = Math.round((player.selling.price + Math.random() * player.selling.price * 0.10) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                        offer = Math.round((player.selling.price - Math.random() * player.selling.price * 0.15) * 100) / 100;
                                    }
                                    else{
                                        offer = Math.round((player.selling.price - Math.random() * player.selling.price * 0.30) * 100) / 100;
                                    }
                                
                                }
                            }

                        }
                        else{
                            if(customers[currentcustomer].kupal){

                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                        customerselloffer = Math.round((sell.price + Math.random() * sell.price * 0.25) * 100) / 100;
                                    }
                                    else{
                                        customerselloffer = Math.round((sell.price + Math.random() * sell.price * 0.50) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                        customerselloffer = Math.round((sell.price + Math.random() * sell.price * 1) * 100) / 100;
    
                                    }
                                    else{
                                        customerselloffer = Math.round((sell.price + Math.random() * sell.price * 2) * 100) / 100;
    
                                    }
                                }
    
    
    
                            }
                            else{
                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                        customerselloffer = Math.round((sell.price - Math.random() * sell.price * 0.20) * 100) / 100;
                                    }
                                    else{
                                        customerselloffer = Math.round((sell.price - Math.random() * sell.price * 0.10) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                        customerselloffer = Math.round((sell.price + Math.random() * sell.price * 0.10) * 100) / 100;
    
                                    }
                                    else{
                                        customerselloffer = Math.round((sell.price + Math.random() * sell.price * 0.20) * 100) / 100;
    
                                    }
                                }
                            }
                            if(player.inventory.length >= player.maximum){
                                refused = true;
                                atdialogue = 3;
                            }
                        }




                        companies.forEach(company => updateStockPrice(company));
						const averageStockPrice = companies.reduce((acc, company) => acc + company.stockPrice, 0) / companies.length;
                        // Remove the first element and add the new average at the end
                        stockgraph.shift(); // Remove the first element
                        stockgraph.push(averageStockPrice); // Add the average stock price to the end
                        localStorage.setItem('MarketData', JSON.stringify(companies));
                        localStorage.setItem('GraphData', JSON.stringify(stockgraph));

                        recession()


                    }



                    else{
                        rendered = false;
                        refused = false;
                        secondDialogueTime = Date.now();
                        player.week++;
                        companies.forEach(company => updateStockPrice(company));
						const averageStockPrice = companies.reduce((acc, company) => acc + company.stockPrice, 0) / companies.length;
                        // Remove the first element and add the new average at the end
                        stockgraph.shift(); // Remove the first element
                        stockgraph.push(averageStockPrice); // Add the average stock price to the end
                        localStorage.setItem('MarketData', JSON.stringify(companies));
                        localStorage.setItem('GraphData', JSON.stringify(stockgraph));
                        goToScene8();
                        recession()
                        if(rendered === false){
                            rendered = true;

                            secondDialogueTime = Date.now();
                        
                        }
                        if(player.week <= 4){
                            return;
                        }
                    }
                    if(player.week > 4){
                        secondDialogueTime = Date.now()
                        if(player.month <= 11){
                            player.month++;
                        }
                        else{
                            player.month = 1;
                            player.year++;
                        }

                        rendered = false;
                        times.forEach(time => {
                            time.reserved = time.sell = false;

                        });
                        if(rendered === false){
                            rendered = true;

                            secondDialogueTime = Date.now();
                        }


                        itemsbn();


                        levelmech()
                        economicsystem();
                                                        

                        player.week = 0;
                        console.table(times, ["week","reserved","sell"]);

                        localStorage.setItem('playerData', JSON.stringify(player));
						            localStorage.setItem('MarketData', JSON.stringify(companies));
                        localStorage.setItem('GraphData', JSON.stringify(stockgraph));
                        goToScene8();
                        return;
                    }

                }


                if(roundedx >= button4.x &&
                    roundedx < button4.x + button4.width &&
                    roundedy >= button4.y &&
                    roundedy < button4.y + button4.height
                ){
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    // Optional: Clear inventory UI first if that's your intent
                    inventorybtn.forEach(btn => {
                        if (btn.item) {
                            btn.item.name = undefined;
                        }
                    });

                    // Then populate from player's inventory
                    player.inventory.forEach(item => {
                        for (let i = 0; i < inventorybtn.length; i++) {
                            if (!inventorybtn[i].item.name) {
                                inventorybtn[i].item.name = item;
                                break;
                            }
                        }
                    });

                    for (let item of player.inventory) {
                        const img = new Image();
                        img.src = item.imgSrc;
                      
                        img.onload = () => {
                          item.img = img;
                          loadedImages++;
                        }
                      }
                      currentpage = 0;
                    currentscene = 4;
                    return;
                }

                if(roundedx >= button5.x &&
                    roundedx < button5.x + button5.width &&
                    roundedy >= button5.y &&
                    roundedy < button5.y + button5.height
                ){
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    player.inventory.forEach(item => {
                        for (let i = 0; i < inventorybtn.length; i++) {
                            if (!inventorybtn[i].item.name) {
                                inventorybtn[i].item.name = item;
                                break; // Move to the next item in the player's inventory
                            }
                        }
                    });
                    currentpage = 0;
                    currentscene = 5;
                    return;
                }


            }
        }

        if(currentscene === 3){
            clicksfx.pause();
            clicksfx.currentTime = 0;
            clicksfx.play();
            let offerchance = Math.random();
            let offerchance2 = Math.random();
            if(atdialogue === 0 && Date.now() - secondDialogueTime >= 1500){
                if(times[player.week].sell){
                    if(
                        roundedx >= bubblemsgcontinue.x &&
                        roundedx < bubblemsgcontinue.x + bubblemsgcontinue.width &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){
                        if(player.inventory.includes(player.selling)){
                            atdialogue = 3;
                            player.money = addMoney(player.money, offer);
                            secondDialogueTime = Date.now();
                            return;
                        }
                        else{
                            goToScene8();
                            times[player.week].reserved = false;
                            times[player.week].sell = false;
                            if(rendered === false){
                                rendered = true;

                                secondDialogueTime = Date.now();
                            
                            }
                            return;
                        }

                    
                    }
                    else if(
                        roundedx >= bubblemsgcontinue.x - grid * 17 &&
                        roundedx <= bubblemsgcontinue.x + bubblemsg.width - grid * 35 &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){
                        secondDialogueTime = Date.now(); // Start the timer
                        const rejection = Math.random();

                        if(rejection < 0.1){
                            refused = true;
                            atdialogue = 3
                        }
                        else{
                            if(customers[currentcustomer].kupal){
                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                      let increase = Math.max(0.01, Math.random() * offer * 0.10);
                                      offer = Math.round((offer + increase) * 100) / 100;
                                      
                                    
                                    
                                    }
                                    else{
                                      let increase = Math.max(0.01, Math.random() * offer * 0.05);
                                      offer = Math.round((offer + increase) * 100) / 100;
                                      
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                      let increase = Math.max(0.01, Math.random() * offer * 0.03);
                                      offer = Math.round((offer + increase) * 100) / 100;
                                      
                                    }
                                    else{
                                      let increase = Math.max(0.01, Math.random() * offer * 0.01);
                                      offer = Math.round((offer + increase) * 100) / 100;
                                      
                                    }
                                
                                }
                                atdialogue++;
                            }
                            else{
                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                      let increase = Math.max(0.01, Math.random() * offer * 0.30);
                                      offer = Math.round((offer + increase) * 100) / 100;
                                      
                                    
                                    
                                    }
                                    else{
                                      let increase = Math.max(0.01, Math.random() * offer * 0.20);
                                      offer = Math.round((offer + increase) * 100) / 100;
                                      
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                      let increase = Math.max(0.01, Math.random() * offer * 0.15);
                                      offer = Math.round((offer + increase) * 100) / 100;
                                      
                                    }
                                    else{
                                      let increase = Math.max(0.01, Math.random() * offer * 0.10);
                                      offer = Math.round((offer + increase) * 100) / 100;
                                      
                                    }
                                
                                }
                                atdialogue++;
                            }

                        }
                    }
                }
                else{
                    if(
                        roundedx >= bubblemsgcontinue.x &&
                        roundedx < bubblemsgcontinue.x + bubblemsgcontinue.width &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){
                        if(player.money >= customerselloffer && player.inventory.length <= player.maximum){
                            player.money = subtractMoney(player.money, customerselloffer);
                        }
                        else{
                            refused = true;
                        }
                        secondDialogueTime = Date.now(); // Start the timer
                        atdialogue = 3;
                


                    
                    
                    }
                    else if(
                        roundedx >= bubblemsgcontinue.x - grid * 17 &&
                        roundedx <= bubblemsgcontinue.x + bubblemsg.width - grid * 35 &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height && player.inventory.length < player.maximum
                    ){
                        secondDialogueTime = Date.now(); // Start the timer
                        const rejection = Math.random();

                        if(rejection < 0.1){
                            refused = true;
                            atdialogue = 3;

                        }
                        else{
                            if(customers[currentcustomer].kupal){

                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                      let reduction = Math.max(0.01, Math.random() * sell.price * 0.01);
                                      customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;
                                    }
                                    else{
                                      let reduction = Math.max(0.01, Math.random() * sell.price * 0.03);
                                      customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                      let reduction = Math.max(0.01, Math.random() * sell.price * 0.05);
                                      customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;
    
                                    }
                                    else{
                                      let reduction = Math.max(0.01, Math.random() * sell.price * 0.10);
                                      customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;
    
                                    }
                                }
    
    
    
                            }
                            else{
                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                      let reduction = Math.max(0.01, Math.random() * sell.price * 0.05);
                                      customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;
                                    }
                                    else{
                                      let reduction = Math.max(0.01, Math.random() * sell.price * 0.10);
                                      customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                      let reduction = Math.max(0.01, Math.random() * sell.price * 0.15);
                                      customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;
    
                                    }
                                    else{
                                      let reduction = Math.max(0.01, Math.random() * sell.price * 0.20);
                                      customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;
    
                                    }
                                }
                            }
                            atdialogue++;
                        }

                    }
                }

            }


            if(atdialogue === 1 && Date.now() - secondDialogueTime >= 1500){
                if(times[player.week].sell){
                    if(
                        roundedx >= bubblemsgcontinue.x &&
                        roundedx < bubblemsgcontinue.x + bubblemsgcontinue.width &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){

                        if(player.inventory.includes(player.selling)){
                            player.money = addMoney(player.money, offer);
                            secondDialogueTime = Date.now();
                            atdialogue = 3;



                        }
                        else{
                            goToScene8();
                            return;
                        }

                    
                    }
                    else if(
                        roundedx >= bubblemsgcontinue.x - grid * 17 &&
                        roundedx <= bubblemsgcontinue.x + bubblemsg.width - grid * 35 &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){
                        secondDialogueTime = Date.now(); // Start the timer
                        const rejection = Math.random();

                        if(rejection < 0.3){
                            refused = true;
                            atdialogue = 3
                        }
                        else{
                          if(customers[currentcustomer].kupal){
                            if(offerchance > 0.5){
                                if(offerchance2 > 0.5){
                                  let increase = Math.max(0.01, Math.random() * offer * 0.10);
                                  offer = Math.round((offer + increase) * 100) / 100;
                                  
                                
                                
                                }
                                else{
                                  let increase = Math.max(0.01, Math.random() * offer * 0.05);
                                  offer = Math.round((offer + increase) * 100) / 100;
                                  
                                }
                            }
                            else{
                                if(offerchance2 > 0.5){
                                  let increase = Math.max(0.01, Math.random() * offer * 0.03);
                                  offer = Math.round((offer + increase) * 100) / 100;
                                  
                                }
                                else{
                                  let increase = Math.max(0.01, Math.random() * offer * 0.01);
                                  offer = Math.round((offer + increase) * 100) / 100;
                                  
                                }
                            
                            }
                            atdialogue++;
                        }
                        else{
                            if(offerchance > 0.5){
                                if(offerchance2 > 0.5){
                                  let increase = Math.max(0.01, Math.random() * offer * 0.30);
                                  offer = Math.round((offer + increase) * 100) / 100;
                                  
                                
                                
                                }
                                else{
                                  let increase = Math.max(0.01, Math.random() * offer * 0.20);
                                  offer = Math.round((offer + increase) * 100) / 100;
                                  
                                }
                            }
                            else{
                                if(offerchance2 > 0.5){
                                  let increase = Math.max(0.01, Math.random() * offer * 0.15);
                                  offer = Math.round((offer + increase) * 100) / 100;
                                  
                                }
                                else{
                                  let increase = Math.max(0.01, Math.random() * offer * 0.10);
                                  offer = Math.round((offer + increase) * 100) / 100;
                                  
                                }
                            
                            }
                            atdialogue++;
                        }

                        }
                    }

                }
                else{
                    if(
                        roundedx >= bubblemsgcontinue.x &&
                        roundedx < bubblemsgcontinue.x + bubblemsgcontinue.width &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){
                        secondDialogueTime = Date.now(); // Start the timer
                        atdialogue = 3;
                        if(player.money >= customerselloffer){
                            player.money = subtractMoney(player.money, customerselloffer);
                        }
                        else{
                            refused = true;
                        }
                    
                    }
                    else if(
                        roundedx >= bubblemsgcontinue.x - grid * 17 &&
                        roundedx <= bubblemsgcontinue.x + bubblemsg.width - grid * 35 &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){
                        secondDialogueTime = Date.now(); // Start the timer
                        const rejection = Math.random();

                        if(rejection < 0.4){
                            refused = true;
                            atdialogue = 3;
                        }
                        else{
                          if(customers[currentcustomer].kupal){

                            if(offerchance > 0.5){
                                if(offerchance2 > 0.5){
                                  let reduction = Math.max(0.01, Math.random() * sell.price * 0.01);
                                  customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;
                                }
                                else{
                                  let reduction = Math.max(0.01, Math.random() * sell.price * 0.03);
                                  customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;
                                }
                            }
                            else{
                                if(offerchance2 > 0.5){
                                  let reduction = Math.max(0.01, Math.random() * sell.price * 0.05);
                                  customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;

                                }
                                else{
                                  let reduction = Math.max(0.01, Math.random() * sell.price * 0.10);
                                  customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;

                                }
                            }



                        }
                        else{
                            if(offerchance > 0.5){
                                if(offerchance2 > 0.5){
                                  let reduction = Math.max(0.01, Math.random() * sell.price * 0.05);
                                  customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;
                                }
                                else{
                                  let reduction = Math.max(0.01, Math.random() * sell.price * 0.10);
                                  customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;
                                }
                            }
                            else{
                                if(offerchance2 > 0.5){
                                  let reduction = Math.max(0.01, Math.random() * sell.price * 0.15);
                                  customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;

                                }
                                else{
                                  let reduction = Math.max(0.01, Math.random() * sell.price * 0.20);
                                  customerselloffer = Math.round((customerselloffer - reduction) * 100) / 100;

                                }
                            }
                        }
                            atdialogue++;
                        }

                    }
                }

            }

            if(atdialogue === 2 && Date.now() - secondDialogueTime >= 1500){
                if(times[player.week].sell){
                    if(
                        roundedx >= bubblemsgcontinue.x &&
                        roundedx < bubblemsgcontinue.x + bubblemsgcontinue.width &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){

                        if(player.inventory.includes(player.selling)){
                            player.money = addMoney(player.money, offer);
                            atdialogue = 3;
                            secondDialogueTime = Date.now();
                        }
                        else{
                            window.alert(`Item not found!`);
                            currentscene = 2;
                        }

                    
                    }
                    else if(
                        roundedx >= bubblemsgcontinue.x - grid * 17 &&
                        roundedx <= bubblemsgcontinue.x + bubblemsg.width - grid * 35 &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){
                        secondDialogueTime = Date.now(); // Start the timer
                        refused = true;
                        atdialogue = 3;

                    }
                }
                else{
                    if(
                        roundedx >= bubblemsgcontinue.x &&
                        roundedx < bubblemsgcontinue.x + bubblemsgcontinue.width &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){
                        secondDialogueTime = Date.now(); // Start the timer
                        atdialogue = 3;
                    
                        if(player.money >= customerselloffer){
                            player.money = subtractMoney(player.money, customerselloffer);
                        }
                        else{
                            refused = true;
                        }
                    
                    }
                    else if(
                        roundedx >= bubblemsgcontinue.x - grid * 17 &&
                        roundedx <= bubblemsgcontinue.x + bubblemsg.width - grid * 35 &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){
                        secondDialogueTime = Date.now(); // Start the timer
                            refused = true;
                            atdialogue = 3;

                    }
                }

            }

            if(atdialogue === 3 && Date.now() - secondDialogueTime >= 1500){
                if(times[player.week].sell){
                    if(
                        roundedx >= bubblemsgcontinue.x &&
                        roundedx < bubblemsgcontinue.x + bubblemsgcontinue.width &&
                        roundedy >= bubblemsgcontinue.y &&
                        roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){
                        if(!refused){
                          const index = player.inventory.indexOf(player.selling);
                          if (index !== -1) {
                            player.inventory.splice(index, 1);
                          }

                        }
                        times[player.week].reserved = false;
                        times[player.week].sell = false;
                        player.selling = {};
                        player.week++;
                        goToScene8();

                          // Save
                        localStorage.setItem('playerData', JSON.stringify(player));
                        if(rendered === false){
                            rendered = true;

                            secondDialogueTime = Date.now();
                        
                        }

                            return;
                    }
                }
                else{
                    if(
                    roundedx >= bubblemsgcontinue.x &&
                    roundedx < bubblemsgcontinue.x + bubblemsgcontinue.width &&
                    roundedy >= bubblemsgcontinue.y &&
                    roundedy < bubblemsgcontinue.y + bubblemsgcontinue.height
                    ){
                        if(!refused){
                            player.inventory.push({
                                name: sell.name,
                                imgSrc: sell.img.src,  // ✅ this is just a string like "images/sword.png"
                                price: sell.price,
								rarity: sell.rarity
                              });
                        }
                        refused = false;
                        localStorage.setItem('playerData', JSON.stringify(player));
                        sell = undefined;
                        player.week++;
                        goToScene8();
                        if(rendered === false){
                            rendered = true;

                            secondDialogueTime = Date.now();
                        
                        }
                        return;
                    }
                }

            }



        }


        if (currentscene === 4) {
            // 1) “Exit” button
            if (
              roundedx >= grid * 11 && roundedx <  grid * 18 &&
              roundedy >= grid * 1  && roundedy <= grid * 2
            ) {
              clicksfx.pause(); clicksfx.currentTime = 0; clicksfx.play();
              currentscene = 2;
              return;
            }
          
            // 2) Inventory slots
            const startIdx = currentpage * itemsPerPage;
            for (let i = 0; i < inventorybtn.length; i++) {
              const btn = inventorybtn[i];
              if (
                roundedx >= btn.x &&
                roundedx <  btn.x + btn.width &&
                roundedy >= btn.y &&
                roundedy <  btn.y + btn.height
              ) {
                // compute which item this slot maps to
                const itemIndex = startIdx + i;
                const item      = player.inventory[itemIndex];
                if (!item) break;  // empty slot, do nothing
          
                // perform the click action
                clicksfx.pause(); clicksfx.currentTime = 0; clicksfx.play();
                currentscene = 2;
                secondDialogueTime = Date.now();
                times[player.week].reserved = true;
                times[player.week].sell     = true;
          
                // assign the entire item object
                player.selling = item;
          
                break;  // handled this click, exit loop
              }
            }
          
          
          
        
    
  
        
            // Add a separate "Confirm" button logic if needed
            // Example: Check if player clicked a "Confirm" button
            /* Too lazy
            if (
                roundedx >= confirmBtn.x &&
                roundedx <= confirmBtn.x + confirmBtn.width &&
                roundedy >= confirmBtn.y &&
                roundedy <= confirmBtn.y + confirmBtn.height
            ) {
                currentscene = 2;
                rendered = false;
                secondDialogueTime = Date.now();
            }
                */ 


            if(roundedx >= lslider.x && roundedx < lslider.x + lslider.width && roundedy >= lslider.y && roundedy < lslider.y + lslider.height){
                clicksfx.pause();
                clicksfx.currentTime = 0;
                clicksfx.play();
                if (currentpage > 0) {
                    currentpage--;
                }
            }

            if(roundedx >= rslider.x && roundedx < rslider.x + rslider.width && roundedy >= rslider.y && roundedy < rslider.y + rslider.height){
                clicksfx.pause();
                clicksfx.currentTime = 0;
                clicksfx.play();

                if(currentpage + 1 < player.maximum / 8){
                    currentpage++;
                }
            }


            
        }
        if (currentscene === 5) {
            if (roundedx >= grid * 11 && roundedx < grid * 18 &&
                roundedy >= grid * 1 && roundedy <= grid * 2) {
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                currentscene = 2;
                if (!rendered) {
                    rendered = true;
                    secondDialogueTime = Date.now();
                }
            }
                        if (roundedx >= grid * 24 && roundedx < grid * 28 &&
                roundedy == grid * 1) {
                                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                if(player.level < 3){
                    showNotification("You must gain market wisdom before entering the financial alchemy chamber.", 5000);
                    
                }
                else{
                    currentscene = 8;
                }

            }
        
// click handler:
for (let i = 0; i < inventorybtn.length; i++) {
    const btn = inventorybtn[i];
    if (
      roundedx >= btn.x &&
      roundedx < btn.x + btn.width &&
      roundedy >= btn.y &&
      roundedy < btn.y + btn.height
    ) {
        clicksfx.pause();
        clicksfx.currentTime = 0;
        clicksfx.play();
      const itemIndex = i + currentpage * itemsPerPage;
      // make sure we didn’t click off the end
      if (itemIndex >= gameitems.length) break;
  
      // special “seller” logic only if the raw gameItems index is 4
      if (itemIndex === 4) {
        let seller = Math.random();
        if (
          player.currentseason === seasons[1]
            ? seller >= 0.2
            : seller >= 0.9
        ) {
          times[player.week].reserved = true;
          sell = gameitems[itemIndex];
        } else {
          setTimeout(
            () =>
              showNotification(
                `Couldn't find seller, bro${player.currentseason !== seasons[1]
                  ? ', try Summer for more sellers.'
                  : ''
                }`,
                2000
              ),
            500
          );

        }
      } else {
        // normal items
        times[player.week].reserved = true;
        sell = gameitems[itemIndex];
      }
  
      player.selling = {};
      currentscene = 2;
      rendered = true;
      secondDialogueTime = Date.now();
      break;
    }
  }

  if(roundedx >= lslider.x && roundedx < lslider.x + lslider.width && roundedy >= lslider.y && roundedy < lslider.y + lslider.height){
    clicksfx.pause();
    clicksfx.currentTime = 0;
    clicksfx.play();
    if (currentpage > 0) {
        currentpage--;
    }
}

if(roundedx >= rslider.x && roundedx < rslider.x + rslider.width && roundedy >= rslider.y && roundedy < rslider.y + rslider.height){
    clicksfx.pause();
    clicksfx.currentTime = 0;
    clicksfx.play();
    if (currentpage < totalPages - 1) {
        currentpage++;
    }
}
  
        }
        if(currentscene === 6){
            if(roundedx >= grid * 11 && roundedx < grid * 18 &&
                roundedy >= grid * 1 && roundedy <= grid * 2
            ){
                clicksfx.pause();
                clicksfx.currentTime = 0;
                clicksfx.play();
                mainscreen = true;
                currentscene = 0;
                }
            if(roundedx >= button5.x - grid &&
                roundedx <= button5.x - grid + button5.width + grid * 2 &&
                roundedy >= button5.y - grid &&
                roundedy < button5.y - grid + button5.height + grid){
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    
                localStorage.removeItem('playerData');
				localStorage.removeItem('MarketData');
        localStorage.removeItem('GraphData');
                location.reload(); // optional: refresh to start fresh
                alert( `LocalStorage Cleared.`)
            }

            if(
                roundedx >= grid * 3 &&
                roundedx <=  grid * 11 &&
                roundedy >= grid * 4 &&
                roundedy <= grid * 5
            ){
                if(showgrid){
                    showgrid = false;
                }
                else{
                    showgrid = true;
                }
            }
            if(
                roundedx >= grid * 2 &&
                roundedx <=  grid * 4 &&
                roundedy >= grid * 6 &&
                roundedy <= grid * 7
            ){
              if(gainNode.gain.value > 0){
                gainNode.gain.value -= 0.25;
              }

            }
            if(
                roundedx >= grid * 5 &&
                roundedx <=  grid * 7 &&
                roundedy >= grid * 6 &&
                roundedy <= grid * 7
            ){
              if(gainNode.gain.value < 1){
                gainNode.gain.value += 0.25;
              }
            }

        }

        if(currentscene === 7){
            if(
                roundedx >= 0 &&
                roundedx <=  canvas.width &&
                roundedy >= 0 &&
                roundedy <= canvas.height
            ){
                currentscene = 2;
                clicksfx.pause();
                clicksfx.currentTime = 0;
                clicksfx.play();
            }
        }
        if (currentscene === 8) {
            function resetPages() {
                c1page = false;
                c2page = false;
                c3page = false;
            }
        
            // Top-left corner to return to previous scene or close stock menu
            if (
                roundedx >= grid * 11 &&
                roundedx <= grid * 18 &&
                roundedy >= 0 &&
                roundedy <= grid * 1
            ) {
                clicksfx.pause();
                clicksfx.currentTime = 0;
                clicksfx.play();
        
                if (!c1page && !c2page && !c3page) {
                    currentscene = 5;
                } else {
                    resetPages();
                }
            }
        
            // SELL BUTTONS (only visible when on main stock page)
            if (!c1page && !c2page && !c3page) {
                if (roundedx >= grid * 20 && roundedx <= grid * 21 && roundedy === grid * 3) {
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    sellstocks(companies[0], player.stocks[companies[0].name]);
                }
                if (roundedx >= grid * 23 && roundedx <= grid * 24 && roundedy === grid * 3) {
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    sellstocks(companies[1], player.stocks[companies[1].name]);
                }
                if (roundedx >= grid * 26 && roundedx <= grid * 27 && roundedy === grid * 3) {
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    sellstocks(companies[2], player.stocks[companies[2].name]);
                }
            }
        

            if (c1page) {
                handleBuyButtons(0);
            } else if (c2page) {
                handleBuyButtons(1);
            } else if (c3page) {
                handleBuyButtons(2);
            }


            // PAGE NAVIGATION (only if NOT on a company page)
            if (!c1page && !c2page && !c3page) {
                if (
                    roundedx >= grid && roundedx <= grid * 10 &&
                    roundedy >= grid && roundedy <= grid * 4
                ) {
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    resetPages();
                    c1page = true;
                    return;
                } else if (
                    roundedx >= grid && roundedx <= grid * 10 &&
                    roundedy >= grid * 6 && roundedy <= grid * 9
                ) {
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    resetPages();
                    c2page = true;
                    return;
                } else if (
                    roundedx >= grid && roundedx <= grid * 10 &&
                    roundedy >= grid * 11 && roundedy <= grid * 13
                ) {
                    clicksfx.pause();
                    clicksfx.currentTime = 0;
                    clicksfx.play();
                    resetPages();
                    c3page = true;
                    return;
                }
            
            
            }

    function handleBuyButtons(companyIndex) {
        const company = companies[companyIndex];

        if (roundedx > grid && roundedx <= grid * 14) {
            if (roundedy >= grid * 6 && roundedy <= grid * 7) {
                clicksfx.pause();
                clicksfx.currentTime = 0;
                clicksfx.play();
                buystocks(company, 1);
            } else if (roundedy >= grid * 9 && roundedy <= grid * 10) {
                clicksfx.pause();
                clicksfx.currentTime = 0;
                clicksfx.play();
                buystocks(company, 10);
            } else if (roundedy >= grid * 12 && roundedy <= grid * 13) {
                clicksfx.pause();
                clicksfx.currentTime = 0;
                clicksfx.play();
                buystocks(company, 50);
            }
        }
    }
    
        }
        

  }
 
    
});
/**//**/
/**//**/
/**//**/function cents(value) {
/**//**/    return value / 100;
/**//**/  }
/**//**/
/**//**/  
/**//**/  function subtractMoney(amount, deduction) {
/**//**/    const result = (amount * 100 - deduction * 100) / 100;
/**//**/    return Math.round(result * 100) / 100;
/**//**/  }
/**//**/  function addMoney(amount, addition) {
/**//**/    const result = (amount * 100 + addition * 100) / 100;
/**//**/    return Math.round(result * 100) / 100;
/**//**/  }
/**//**/
/**//**/
/**//**/  function getWeekNumber(date) {
/**//**/    const tempDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
/**//**/    
/**//**/    // Set to nearest Thursday: current date + 4 - current day number (adjusting Sunday from 0 to 7)
/**//**/    const dayNum = tempDate.getDay() || 7;
/**//**/    tempDate.setDate(tempDate.getDate() + 4 - dayNum);
/**//**/  
/**//**/    // Get first day of the year
/**//**/    const yearStart = new Date(tempDate.getFullYear(), 0, 1);
/**//**/  
/**//**/    // Calculate full weeks to nearest Thursday
/**//**/    const weekNo = Math.ceil((((tempDate - yearStart) / 86400000) + 1) / 7);
/**//**/  
/**//**/    return weekNo;
/**//**/  }
/**//**/  function getWeekOfMonth(date) {
/**//**/    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
/**//**/    const dayOfWeek = startOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.
/**//**/  
/**//**/    const adjustedDate = date.getDate() + dayOfWeek;
/**//**/    return Math.ceil(adjustedDate / 7);
/**//**/  }
/**//**/
/**//**/
/**//**/// Load
/**//**/const savedData = localStorage.getItem('playerData');
/**//**/const savedData2 = localStorage.getItem('MarketData');
/**//**/const savedData3 = localStorage.getItem('GraphData');
/**//**/if (savedData) {
/**//**/  const loaded = JSON.parse(savedData);
/**//**/  const loaded2 = JSON.parse(savedData2);
/**//**/  const loaded3 = JSON.parse(savedData3);
/**//**/  Object.assign(player, loaded);
/**//**/  Object.assign(companies, loaded2);
/**//**/  Object.assign(stockgraph, loaded3);
/**//**/
/**//**/  for (let item of player.inventory) {
/**//**/    console.log("Trying to load image from:", item.imgSrc);
/**//**/    const img = new Image();
/**//**/    img.src = item.imgSrc;
/**//**/    item.img = img;
/**//**/  }
/**//**/}
/**//**/let loadedImages = 0;
/**//**/const totalImages = player.inventory.length;
/**//**/
/**//**/for (let item of player.inventory) {
/**//**/  const img = new Image();
/**//**/  img.src = item.imgSrc;
/**//**/
/**//**/  img.onload = () => {
/**//**/    item.img = img;
/**//**/    loadedImages++;
/**//**/  }
/**//**/}
/**//**/
/**//**/for (let i = 0; i < player.inventory.length; i++) {
/**//**/    for (let j = 0; j < gameitems.length; j++) {
/**//**/        if (player.inventory[i].name === gameitems[j].name) {
/**//**/            player.inventory[i].price = gameitems[j].price;
/**//**/        }
/**//**/    }
/**//**/}
/**/
/**/
/**/
/**//**/function animate() {
/**//**/    ctx.clearRect(0, 0, canvas.width, canvas.height);
/**//**/
/**//**/
/**//**/    allscenes[currentscene]();
/**//**/
/**//**/    if (showgrid === true) {
/**//**/        ctx.setLineDash([4, 4]);
/**//**/
/**//**/        for (let y = 0; y < canvas.height; y += grid) {
/**//**/            for (let x = 0; x < canvas.width; x += grid) {
/**//**/                ctx.strokeStyle = "white";
/**//**/                ctx.lineWidth = 1;
/**//**/                ctx.strokeRect(x, y, grid, grid);
/**//**/            }
/**//**/        }
/**//**/    }
/**//**/    requestAnimationFrame(animate);
/**//**/}
/**//**/
/**//**/
/**//**/animate();
/**//**/
/**//**/

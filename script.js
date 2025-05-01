/**/let currentpage = 0; // move it OUTSIDE the function
const itemsPerPage = 8;
let totalPages = 1; // (you can update this later)



const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);
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



//game const
const grid = 50;
const column = grid * 15;
const row = grid * 30;

canvas.height = column;
canvas.width = row;

let showgrid = true;

const track1 = new Audio(`WAVESultimate2.mp3`);
const clicksfx = new Audio(`button-29.mp3`);


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
    color: `green`
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
        name: `Michael B. Jordamn`,
        age: 62,
        kupal: true,
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
        name: 'Plastic Toy',
        price: 0.05,
        description: `A small plastic toy that impoverished Childrens play`,
        img: plasticToy
    },
    {
        name: 'Ballpen',
        price: 0.20,
        description: `A Brand New Ballpen, that's it.`,
        img: Ballpen
    },
    {
        name: 'Wooden Sword',
        price: 1,
        description: `A small wooden sword for training`,
        img: woodenSword
    },
    {
        name: 'Backpack',
        price: 1.15,
        description: `A local backpack`,
        img: Backpack
    },
    {
        name: `ATM Machine`,
        price: 19.45,
        description: `Gives player a penny every month, might be useful if you stock`,
        img: ATM
    },
    {
        name: `Pet Dog`,
        price: 10,
        description: `A companion to your journey`,
        img: Dog
    },
    {
        name: `Basketball`,
        price: 8.24,
        description: `A Spalding basketball`,
        img: ball
    },
    {
        name: `Jamal`,
        price: 186.5,
        description: `A Basketball person`,
        img: Jamal
    },
    {
        name: `Bicycle`,
        price: 100,
        description: `Second hand bicycle`,
        img: Bicycle
    },
    {
        name: `Bahay Kubo`,
        price: 710,
        description: `PHILIPENIS!!!`,
        img: bahayKubo
    },
    {
        name: `White Aura`,
        price: 1000,
        description: `+1000 Aura`,
        img: whiteAura
    },
    {
        name: `Dark Aura`,
        price: 1500,
        description: `+1500 Aura`,
        img: darkAura
    },
];



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
    currentseason: undefined
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
    }
    ,

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
const scene4dialogues = [
    `dialogue1`, `dialogue2`, `dialogue3`, `dialogue4`
]

let atdialogue = 0;



const allscenes = [scene1, scene2, scene3, scene4, scene5, scene6, scene7];
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

function scene1(){
    canvas.style.backgroundColor = `black`;

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
        canvas.style.backgroundColor = `gray`;



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

    





}



function scene4() {



    canvas.style.backgroundColor = `blue`;







    if(scenerandomizer > 0.66){
    // Kool Kids Klub
    // Sky
    ctx.fillStyle = '#87ceeb';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ground
    ctx.fillStyle = '#9c804b';
    ctx.fillRect(0, grid * 10, canvas.width, canvas.height - grid * 10);

    // Path
    ctx.fillStyle = '#c2b280';
    ctx.fillRect(grid * 6, grid * 10, grid * 3, grid * 5);

    // Shop Building
    ctx.fillStyle = '#deb887';
    ctx.fillRect(grid * 4, grid * 6, grid * 7, grid * 4);

    // Roof
    ctx.fillStyle = '#8b0000';
    ctx.beginPath();
    ctx.moveTo(grid * 3.5, grid * 6);
    ctx.lineTo(grid * 8, grid * 3.5);
    ctx.lineTo(grid * 12.5, grid * 6);
    ctx.closePath();
    ctx.fill();

    // Door
    ctx.fillStyle = '#5c4033';
    ctx.fillRect(grid * 7, grid * 8, grid * 1.5, grid * 2);

    // Door knob
    ctx.fillStyle = '#daa520';
    ctx.beginPath();
    ctx.arc(grid * 8.3, grid * 9, 5, 0, Math.PI * 2);
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
    ctx.fillRect(grid * 6, grid * 5.2, grid * 4, grid * 0.8);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Kool Kids Klub', grid * 8, grid * 5.8);
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

  // CLOCK (repositioned left by 4 grid units)
  const clockR = grid * 1.5;
  // original: canvas.width - clockR - grid
  const clockX = canvas.width - clockR - grid * 5;
  const clockY = grid * 2 + clockR;
  ctx.save();
  ctx.translate(clockX, clockY);
  ctx.fillStyle = '#FFF';
  ctx.beginPath(); ctx.arc(0, 0, clockR, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#000'; ctx.lineWidth = 2; ctx.stroke();
  // Hands at 10:10
  ctx.beginPath(); ctx.moveTo(0, 0);
  ctx.lineTo(0, -clockR + grid * 0.5);
  ctx.moveTo(0, 0);
  ctx.lineTo(clockR - grid * 0.75, 0);
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
      `Page: ${currentpage + 1} / ${totalPages}`,
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




ctx.fillStyle = lslider.color;

ctx.fillRect(lslider.x, lslider.y, lslider.width, lslider.height);

ctx.fillStyle = rslider.color;

ctx.fillRect(rslider.x, rslider.y, rslider.width, rslider.height);




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
          

        ctx.fillStyle = lslider.color;

        ctx.fillRect(lslider.x, lslider.y, lslider.width, lslider.height);
        
        ctx.fillStyle = rslider.color;
        
        ctx.fillRect(rslider.x, rslider.y, rslider.width, rslider.height);
    
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



  function scene7(){

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

    ctx.font = "50px serif";

    ctx.fillText(
        `Clear Player Data`,
        canvas.width / 2,
        grid * 13
    );
  }

  

  function schoolitems(){
    if(player.currentseason === seasons[1]){
        gameitems[1].price += Math.random() * (gameitems[1].price * 0.30);
        gameitems[3].price += Math.random() * (gameitems[1].price * 0.40);
        gameitems[4].price -= Math.random() * (gameitems[4].price * 0.30);
    }
    else{
        gameitems[1].price = 0.20;
        gameitems[3].price = 1.15;
        gameitems[3].price = 19.45;
    }



    for (let i = 0; i < player.inventory.length; i++) {
        for (let j = 0; j < gameitems.length; j++) {
            if (player.inventory[i].name === gameitems[j].name) {
                player.inventory[i].price = gameitems[j].price;
            }
        }
    }


    
  }



let maxpage;

canvas.addEventListener("contextmenu", e => e.preventDefault());

// Update totalPages (only once when gameitems are ready)
totalPages = Math.ceil(gameitems.length / itemsPerPage);

// ✅ Now you can safely use addEventListener outside:
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        if (currentpage < totalPages - 1) {
            currentpage++;
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
                    track1.pause();
                    track1.currentTime = 0;
                    track1.play();

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
                            price: gameitems[0].price
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
                        price: gameitems[0].price
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
                }
            }
        }
        if(currentscene === 2){
            if(rendered === false){
                rendered = true;
                localStorage.setItem('playerData', JSON.stringify(player));
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





                    }

                    else{
                        rendered = false;
                        refused = false;
                        secondDialogueTime = Date.now();
                        player.week++;
                        if(rendered === false){
                            rendered = true;

                            secondDialogueTime = Date.now();
                        
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

                        player.inventory.forEach(item => {
                            if (item.name === gameitems[4].name) {
                                console.log(item);
                                player.money = addMoney(player.money, 0.01);
                            }
                        });

                        schoolitems();
                                                        

                        player.week = 0;
                        console.table(times, ["week","reserved","sell"]);

                        localStorage.setItem('playerData', JSON.stringify(player));
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
                            currentscene = 2;
                            times[player.week].reserved = false;
                            times[player.week].sell = false;
                            if(rendered === false){
                                rendered = true;

                                secondDialogueTime = Date.now();
                            
                            }
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
                                        offer = Math.round((offer + Math.random() * offer * 0.10) * 100) / 100;
                                    
                                    
                                    }
                                    else{
                                        offer = Math.round((offer + Math.random() * offer * 0.05) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                        offer = Math.round((offer + Math.random() * offer * 0.03) * 100) / 100;
                                    }
                                    else{
                                        offer = Math.round((offer + Math.random() * offer * 0.01) * 100) / 100;
                                    }
                                
                                }
                                atdialogue++;
                            }
                            else{
                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                        offer = Math.round((offer + Math.random() * offer * 0.30) * 100) / 100;
                                    
                                    
                                    }
                                    else{
                                        offer = Math.round((offer + Math.random() * offer * 0.20) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                        offer = Math.round((offer + Math.random() * offer * 0.15) * 100) / 100;
                                    }
                                    else{
                                        offer = Math.round((offer + Math.random() * offer * 0.10) * 100) / 100;
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
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.01) * 100) / 100;
                                    }
                                    else{
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.03) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.05) * 100) / 100;
    
                                    }
                                    else{
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.10) * 100) / 100;
    
                                    }
                                }
    
    
    
                            }
                            else{
                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.05) * 100) / 100;
                                    }
                                    else{
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.10) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.15) * 100) / 100;
    
                                    }
                                    else{
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.20) * 100) / 100;
    
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
                        const rejection = Math.random();

                        if(rejection < 0.3){
                            refused = true;
                            atdialogue = 3
                        }
                        else{
                            if(customers[currentcustomer].kupal){
                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                        offer = Math.round((offer + Math.random() * offer * 0.10) * 100) / 100;
                                    
                                    
                                    }
                                    else{
                                        offer = Math.round((offer + Math.random() * offer * 0.05) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                        offer = Math.round((offer + Math.random() * offer * 0.03) * 100) / 100;
                                    }
                                    else{
                                        offer = Math.round((offer + Math.random() * offer * 0.01) * 100) / 100;
                                    }
                                
                                }
                            }
                            else{
                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                        offer = Math.round((offer + Math.random() * offer * 0.30) * 100) / 100;
                                    
                                    
                                    }
                                    else{
                                        offer = Math.round((offer + Math.random() * offer * 0.20) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                        offer = Math.round((offer + Math.random() * offer * 0.15) * 100) / 100;
                                    }
                                    else{
                                        offer = Math.round((offer + Math.random() * offer * 0.10) * 100) / 100;
                                    }
                                
                                }
                            }
                            atdialogue++;

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
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.01) * 100) / 100;
                                    }
                                    else{
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.03) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.05) * 100) / 100;
    
                                    }
                                    else{
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.10) * 100) / 100;
    
                                    }
                                }
    
    
    
                            }
                            else{
                                if(offerchance > 0.5){
                                    if(offerchance2 > 0.5){
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.05) * 100) / 100;
                                    }
                                    else{
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.10) * 100) / 100;
                                    }
                                }
                                else{
                                    if(offerchance2 > 0.5){
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.15) * 100) / 100;
    
                                    }
                                    else{
                                        customerselloffer = Math.round((customerselloffer - Math.random() * sell.price * 0.20) * 100) / 100;
    
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
                        currentscene = 2;
                          // Save
                        localStorage.setItem('playerData', JSON.stringify(player));
                        if(rendered === false){
                            rendered = true;

                            secondDialogueTime = Date.now();
                        
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
                        if(!refused){
                            player.inventory.push({
                                name: sell.name,
                                imgSrc: sell.img.src,  // ✅ this is just a string like "images/sword.png"
                                price: sell.price
                              });
                        }
                        refused = false;
                        localStorage.setItem('playerData', JSON.stringify(player));
                        sell = undefined;
                        player.week++;
                        currentscene = 2;
                        if(rendered === false){
                            rendered = true;

                            secondDialogueTime = Date.now();
                        
                        }
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
              secondDialogueTime = Date.now();
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
                if (currentpage < totalPages - 1) {
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
                location.reload(); // optional: refresh to start fresh
                alert( `LocalStorage Cleared.`)
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
/**//**/if (savedData) {
/**//**/  const loaded = JSON.parse(savedData);
/**//**/  Object.assign(player, loaded);
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
/**//**/    allscenes[currentscene]();
/**//**/
/**//**/
/**//**/    requestAnimationFrame(animate);
/**//**/}
/**//**/
/**//**/
/**//**/animate();
/**//**/
/**//**/

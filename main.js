// Бойцы и их параметры
 const fighters = {
  "ВОНЯЛК": {
    hpMax: 120,
    vscMax: 100,
    sprite: ["вонялк.png", "вонялк2.png"],
    mini: "вонялк_мини.png",
    moves: [
      { name: "💨 Токсичный удар", cost: 20, dmg: 18 },
      { name: "💸 Взять в долг", cost: 25, dmg: 22 },
      { name: "🏋️‍♂️ Долговой напор", cost: 30, dmg: 28 },
      { name: "☣️ Газовое давление", cost: 35, dmg: 35 },
      { name: "🥤 Метаболическая регенерация", cost: 0, restore: 35 }
    ]
  },

  "ЯНТАРНЫЙ ШЛЯХ": {
    hpMax: 130,
    vscMax: 90,
    sprite: ["шлях.png","шлях2.png"], 
    mini: "шлях_мини.png",
    moves: [
      { name: "🧱 Удар янтаря", cost: 20, dmg: 20 },
      { name: "🔶 Кристаллический луч", cost: 30, dmg: 30 },
      { name: "⚡ Энергетический всплеск", cost: 35, dmg: 33 },
      { name: "🌋 Импульс правосудия", cost: 40, dmg: 38 },
      { name: "☕ Перезарядка светом", cost: 0, restore: 30 }
    ]
  },

  "ШЛЯН": {
    hpMax: 110,
    vscMax: 100,
    sprite: ["шлян.png","шлян2.png"],
    mini: "шлян_мини.png",
    moves: [
      { name: "🦠 Буревой выброс", cost: 20, dmg: 20 },
      { name: "💉 Поражение тканей", cost: 30, dmg: 28 },
      { name: "☣️ Заражённый разлом", cost: 35, dmg: 30 },
      { name: "🧬 Биологическая мутация", cost: 40, dmg: 35 },
      { name: "🧫 Саморегенерация", cost: 0, restore: 30 }
    ]
  },
  
"АБСОЛЮТНЫЙ ШЛЯН": {
  hpMax: 170, // больше ХП
  vscMax: 120, // больше ВСК
  sprite: ["шлян.png"],
  mini: "шлян_мини.png",
  moves: [
    { name: "🦠 Буревой выброс", cost: 20, dmg: 26 },
    { name: "💉 Поражение тканей", cost: 30, dmg: 33 },
    { name: "☣️ Заражённый разлом", cost: 35, dmg: 36 },
    { name: "🧬 Мутантское бешенство", cost: 40, dmg: 42 },
    { name: "🧫 Сверхрегенерация", cost: 0, restore: 40 }
  ]
}, 

  "БРИНЧ 3000": {
    hpMax: 125,
    vscMax: 110,
    sprite: ["бринч.png","бринч2.png"],
    mini: "бринч_мини.png",
    moves: [
      { name: "🔩 Механизированный удар", cost: 25, dmg: 24 },
      { name: "📡 Техно-импульс", cost: 30, dmg: 27 },
      { name: "⚙️ Турбо-шторм", cost: 35, dmg: 32 },
      { name: "💾 Перегрузка ядра", cost: 40, dmg: 36 },
      { name: "🔋 Система автозарядки", cost: 0, restore: 35 }
    ]
  },

  "КАЗАХ-ПАУК": {
    hpMax: 115,
    vscMax: 90,
    sprite: ["казах.png","казах2.png"],
    mini: "казах_мини.png", 
    moves: [
      { name: "🕷️ Укус степного охотника", cost: 20, dmg: 20 },
      { name: "🕸️ Захват паутиной", cost: 30, dmg: 28 },
      { name: "🐫 Прыжок из аула", cost: 35, dmg: 32 },
      { name: "🏹 Снайперская нить", cost: 40, dmg: 36 },
      { name: "🥛 Кумыcная медитация", cost: 0, restore: 30 }
    ]
  },

  "ГУГАД": {
    hpMax: 120,
    vscMax: 100,
    sprite: ["гугад.png","гугад2.png"],
    mini: "гугад_мини.png", 
    moves: [
      { name: "🧃 Атака соком", cost: 20, dmg: 18 },
      { name: "📄 Судебное давление", cost: 30, dmg: 26 },
      { name: "🧠 Ловушка аргумента", cost: 35, dmg: 30 },
      { name: "💼 Троллинговый прессинг", cost: 40, dmg: 35 },
      { name: "🥤 Пью сок", cost: 0, restore: 35 }
    ]
  },

  "ДОЛГМЭН": {
    hpMax: 130,
    vscMax: 90,
    sprite: ["долгмен.png"," долгмен2.png","долгмен3.png"],
    mini: "долгмен_мини.png", 
    moves: [
      { name: "🎯 Метнуть долгоранги", cost: 20, dmg: 20 },
      { name: "🔦 Луч правосудия", cost: 30, dmg: 28 },
      { name: "🛠️ Запуск Долгкрыла", cost: 35, dmg: 32 },
      { name: "🧨 Огонь из Долгтанка", cost: 40, dmg: 36 },
      { name: "💳 Финансовая перезагрузка", cost: 0, restore: 30 }
    ]
  },

  "РОММИН": {
    hpMax: 115,
    vscMax: 95,
    sprite: ["роммин.png","роммин2.png"],
    mini: "роммин_мини.png", 
    moves: [
      { name: "🤸 Маневр уклонения", cost: 20, dmg: 22 },
      { name: "📉 Бросок кредиторанга", cost: 30, dmg: 28 },
      { name: "🪁 Удар шестом", cost: 35, dmg: 30 },
      { name: "🕶️ Теневая атака", cost: 40, dmg: 34 },
      { name: "🍌 Тактическое восстановление", cost: 0, restore: 35 }
    ]
  },
  
  "АКВАБЕБС": {
  hpMax: 125,
  vscMax: 100,
  sprite: ["аквабебс.png","аквабебс2.png"],
  mini: "аквабебс_мини.png",
  moves: [
    { name: "🌊 Животный всплеск", cost: 25, dmg: 22 },
    { name: "🍖 Шаурмогеддон", cost: 35, dmg: 35 },
    { name: "🧜‍♂️ Морской прикол", cost: 20, dmg: 18 },
    { name: "🦑 Призыв кальмара", cost: 40, dmg: 42 },
    { name: "🥤 Пауза на шаву (без томатов)", cost: 0, restore: 35 }
  ]
}, 
"РИФФОТВОРЕЦ": {
  hpMax: 125,
  vscMax: 100,
  sprite: ["рифф.png", "рифф2.png"],
  mini: "рифф_мини.png",
  moves: [
    { name: "🎸 Kill 'em All волна", cost: 20, dmg: 20 },
    { name: "🚀 Челоторпеда", cost: 30, dmg: 28 },
    { name: "🍺 Запойный рывок", cost: 35, dmg: 32 },
    { name: "🪐 Антиграви-шторм", cost: 40, dmg: 38 },
    { name: "🍻 Я написал... Всю металлику!", cost: 0, restore: 35 }
  ]
}, 
// Доктор Бут — босс в башне БУТА
"ДОКТОР БУТ": {
  hpMax: 100,
  vscMax: 100,
  sprite: ["докбут.png", "докбут2.png"],
  mini: "докбут_мини.png",
  moves: [
    { name: "🧪 Бут-тест", cost: 20, dmg: 20 },
    { name: "🦴 Пособие правды", cost: 30, dmg: 30 },
    { name: "🧠 10 причин купить калду", cost: 35, dmg: 35 },
    { name: "🧼 Не понимаю!!!", cost: 40, dmg: 40 },
    { name: "🥤 Медсестринское восстановление", cost: 0, restore: 35 }
  ]
},

// Абсолютный Бут — финальный скрытый босс
"АБСОЛЮТНЫЙ БУТ": {
  hpMax: 180,
  vscMax: 100,
  sprite: ["абсбут.png"],
  mini: "абсбут_мини.png",
  moves: [
    { name: "☣️ Розовые медведи", cost: 25, dmg: 30 },
    { name: "🧬 Сверхбутригс", cost: 35, dmg: 40 },
    { name: "🦠 Бут-хаос", cost: 45, dmg: 50 },
    { name: "💊 Мега-регенерация", cost: 0, restore: 45 }
  ]
},
"ГРОЗНЕЙН": {
  hpMax: 130,
  vscMax: 80,
  sprite: ["грознейн.png", "грознейн2.png"],
  mini: "грознейн_мини.png",
  moves: [
    { name: "💥 Удар венозной ярости", cost: 25, dmg: 25 },
    { name: "🧪 Инъекция ярости", cost: 35, dmg: 35 },
    { name: "🩸 Трубочный прорыв", cost: 40, dmg: 40 },
    { name: "💉 Перегрузка сывороткой", cost: 50, dmg: 50 },
    { name: "🧪 Усиление сывороткой", cost: 0, buff: "rage", duration: 3 }, 
    { name: "🔋 Подпитка канистрой", cost: 0, restore: 30 }
  ]
}, 
}
  const shopSkinAvailable = [
  "ВОНЯЛК", 
  "ЯНТАРНЫЙ ШЛЯХ", 
  "КАЗАХ-ПАУК", 
  "АКВАБЕБС", 
  "РИФФОТВОРЕЦ", 
  "ГРОЗНЕЙН"
];
const fighterLore = {
  "ВОНЯЛК": "Получив льготный займ в Йолкинбанке, стал вонючим мутантом. Теперь постоянно ищет деньги в долг на душ.",
  "ЯНТАРНЫЙ ШЛЯХ": "Светлый защитник Калининграда. Мощный супергерой.",
  "ШЛЯН": "Когда Янтарный Шлях не выдерживает – появляется он. Шлян... Тьма души Шляхова.",
  "БРИНЧ 3000": "Создан в TikTok-лаборатории. Его мозг работает на алгоритме Зака Тролла.",
  "КАЗАХ-ПАУК": "Легенда аула. Спасает всех, используя паучьи способности. Летает до банкомата на паутине, чтобы задонатить в форт.",
  // и так далее для остальных
};


  // Переменные состояния
  let gameState = "main-menu"; // main-menu, fighter-select, skin-select, battle, result
  let playerChoice = null;
  let enemyChoice = null;
  let playerSkinIndex = 0;
  let enemySkinIndex = 0;
  let playerHP = 0;
  let enemyHP = 0;
  let playerVSC = 0;
  let enemyVSC = 0;
  let playerMoves = [];
  let enemyMoves = [];
  let towerMode = false;
  let towerLevel = 0;
  let towerEnemyList = [];
  let totalDamageDealt = 0;
  let totalDamageTaken = 0;
  let towerStartTime = 0;
  let isRetry = false;
  let lastTowerEnemy = null;
  let selectedPlayerSprite = ""; // глобальная переменная
  let playerULTCharge = 0;
  let enemyULTCharge = 0;
  let towerType = "shlyan"; // по умолчанию
  let rageTurnsLeft = 0;
  let activeBuffs = {}; // { rage: { turnsLeft: 3, effect: "rage" } }
  let enemyBuffs = {};
  
  const maxULT = 100;
  const mainMenu = document.getElementById("main-menu");
  const fighterSelect = document.getElementById("fighter-select");
  const fighterList = document.getElementById("fighter-list");
  const skinSelect = document.getElementById("skin-select");
  const skinsDiv = document.getElementById("skins");
  const battleDiv = document.getElementById("battle");
  const actionsDiv = document.getElementById("actions");
  const logDiv = document.getElementById("log");
  const resultDiv = document.getElementById("result");
  const resultText = document.getElementById("resultText");
  const statsText = document.getElementById("stats");
  const playerImg = document.getElementById("playerImg");
  const enemyImg = document.getElementById("enemyImg");
  const playerHPBar = document.getElementById("playerHP");
  const enemyHPBar = document.getElementById("enemyHP");
  const playerVSCBar = document.getElementById("playerVSC");
  const enemyVSCBar = document.getElementById("enemyVSC");
  const arena = document.getElementById("arena");

  // Кнопки меню
// Открыть меню выбора типа башни
document.getElementById("btnCampaign").onclick = () => {
  // Скрываем главное меню и показываем выбор башни
  document.getElementById('main-menu').style.display = 'none';
  document.getElementById('tower-type-menu').style.display = 'block';
};

// Кнопка БАШНЯ ШЛЯНА
document.getElementById("btnTowerShlyan").onclick = () => {
  // Старт башни Шляна (твоя уже есть)
  towerMode = true;
  towerType = 'shlyan';  // новый флаг, какой режим башни
  towerLevel = 0;
  towerEnemyList = [];
  totalDamageDealt = 0;
  totalDamageTaken = 0;
  towerStartTime = Date.now();
  document.getElementById('tower-type-menu').style.display = 'none';
  startFighterSelect();
};

// Кнопка БАШНЯ ДОКТОРА БУТА
document.getElementById("btnTowerBut").onclick = () => {
  towerMode = true;
  towerType = 'but';
  towerLevel = 0;
  towerEnemyList = [];
  totalDamageDealt = 0;
  totalDamageTaken = 0;
  towerStartTime = Date.now();
  document.getElementById('tower-type-menu').style.display = 'none';
  startFighterSelect();
};

// Кнопка НАЗАД В МЕНЮ
document.getElementById("btnBackToMain").onclick = () => {
  document.getElementById('tower-type-menu').style.display = 'none';
  document.getElementById('main-menu').style.display = 'block';
};
  document.getElementById("btnQuickFight").onclick = () => {
    startFighterSelect();
  };

  document.getElementById("btnToMenu").onclick = () => {
    showMainMenu();
  };
  document.getElementById("btnReplay").onclick = () => {
  isRetry = true;
  startBattle();
};
  document.getElementById("btnToRoster").onclick = () => {
    startFighterSelect();
  };
  document.getElementById("btnStartTower").onclick = () => {
  document.getElementById("tower-scene").style.display = "none";
  startBattle();
};
document.getElementById("btnRecords").onclick = () => {
  showRecords();
};
  document.getElementById("btnCollection").onclick = () => {
  showCollection();
};
document.getElementById("btnBackFromCollection").onclick = () => {
  document.getElementById("collection").style.display = "none";
  mainMenu.style.display = "block";
};
document.getElementById("btnBackFromRecords").onclick = () => {
  document.getElementById("records").style.display = "none";
  mainMenu.style.display = "block";
};
  // Запускаем выбор бойца
  function startFighterSelect() {
    gameState = "fighter-select";
    mainMenu.style.display = "none";
    resultDiv.style.display = "none";
    battleDiv.style.display = "none";
    skinSelect.style.display = "none";
    fighterSelect.style.display = "block";
    fighterList.innerHTML = "";

    // Выводим всех бойцов
for (const key in fighters) {
  if (key === "АБСОЛЮТНЫЙ ШЛЯН" || key === "АБСОЛЮТНЫЙ БУТ") continue;
  const f = fighters[key];

  const card = document.createElement("div");
card.className = "fighter-card animate-in";
  card.title = key;

  const img = document.createElement("img");
  img.src = f.mini;
  img.alt = key;

  const nameDiv = document.createElement("div");
  nameDiv.className = "fighter-name";
  nameDiv.textContent = key;

  card.appendChild(img);        // <<== ВСТАВКА КАРТИНКИ
  card.appendChild(nameDiv);    // <<== ВСТАВКА НАЗВАНИЯ

  card.onclick = () => {
    playerChoice = key;
    startSkinSelect();
  };

  fighterList.appendChild(card);
}
}

  // Выбор скина игрока
  function startSkinSelect() {
    gameState = "skin-select";
    fighterSelect.style.display = "none";
    skinSelect.style.display = "block";
    skinsDiv.innerHTML = "";
    selectedPlayerSprite = fighters[playerChoice].sprite[0]; // по умолчанию первый скин
    let skins = [...fighters[playerChoice].sprite]; // копия

const unlockedTowerSkins = JSON.parse(localStorage.getItem("towerSkins") || "{}");
if (unlockedTowerSkins["башня"]?.[playerChoice]) {
  skins.push(`${playerChoice.toLowerCase()}_башня.png`);
}
if (unlockedTowerSkins["бутботы"]?.[playerChoice]) {
  skins.push(`${playerChoice.toLowerCase()}_бутботы.png`);
}
    playerSkinIndex = 0;
// добавляем скин из магазина, если куплен
const shopSkins = JSON.parse(localStorage.getItem("shopSkins") || "{}");
const shopPath = `${playerChoice.toLowerCase()}_магазин.png`;
if (shopSkins[playerChoice]) {
  skins.push(shopPath);
}
    for(let i=0; i<skins.length; i++) {
      const img = document.createElement("img");
      img.src = skins[i];
      img.style.width = "80px";
      img.style.margin = "0 5px";
      img.style.cursor = "pointer";
      img.title = `Скин ${i+1}`;
      if(i===playerSkinIndex) img.style.border = "3px solid cyan";
      if (skins[i].includes("_башня")) img.classList.add("tower-skin");
if (skins[i].includes("_бутботы")) img.classList.add("butbot-skin");
if (skins[i].includes("_магазин")) {
  img.classList.add("shop-skin");
}
      img.onclick = () => {
  playerSkinIndex = i;
  selectedPlayerSprite = skins[i]; // 💥 сохраняем путь к картинке
  updateSkinSelection();
};
if (skins[i].includes("_бутботы")) {
  img.classList.add("butbot-skin");
}
      skinsDiv.appendChild(img);
    }

    const startBtn = document.createElement("button");
    startBtn.textContent = "Начать бой!";
    startBtn.onclick = () => {
  selectedPlayerSprite = skins[playerSkinIndex];
  if (towerMode) {
    showTowerScene();
  } else {
    startBattle();
  }
};
    skinsDiv.appendChild(startBtn);
  }

  function updateSkinSelection() {
    const imgs = skinsDiv.querySelectorAll("img");
    imgs.forEach((img, idx) => {
      img.style.border = (idx === playerSkinIndex) ? "3px solid cyan" : "none";
    });
  }
  function applyEnemyBuff(buffName, duration) {
  enemyBuffs[buffName] = { turnsLeft: duration };

  if (buffName === "rage") {
    logDiv.textContent = `${enemyChoice} активирует СЫВОРОТКУ! Его атаки усилены!`;
    enemyImg.classList.add("rage-glow");
  }

  // добавим другие баффы позже
}
  function applyBuff(buffName, duration) {
  activeBuffs[buffName] = { turnsLeft: duration };
 // БАФФЫ
  if (buffName === "rage") {
    logDiv.textContent = "🧪 Грознейн активирует СЫВОРОТКУ! Атаки усилены!";
    playerImg.classList.add("rage-glow");
  }

  // Тут можно расширять для других баффов
}
function updateBuffs() {
  for (const buff in activeBuffs) {
    activeBuffs[buff].turnsLeft--;
    if (activeBuffs[buff].turnsLeft <= 0) {
      // Истёк эффект
      delete activeBuffs[buff];
      if (buff === "rage") {
        playerImg.classList.remove("rage-glow");
        logDiv.textContent += " ⚠️ Эффект СЫВОРОТКИ закончился.";
      }

      // В будущем: другие снятия эффектов
    }
  }
}
function updateEnemyBuffs() {
  for (const buff in enemyBuffs) {
    enemyBuffs[buff].turnsLeft--;
    if (enemyBuffs[buff].turnsLeft <= 0) {
      delete enemyBuffs[buff];
      if (buff === "rage") {
        enemyImg.classList.remove("rage-glow");
        logDiv.textContent += ` ⚠️ Эффект СЫВОРОТКИ у ${enemyChoice} закончился.`;
      }
    }
  }
}
  // Запускаем бой
  function startBattle() {
 
  	playerImg.classList.remove("fade-out");
enemyImg.classList.remove("fade-out");
    skinSelect.style.display = "none";
battleDiv.style.display = "block";
resultDiv.style.display = "none";
    document.getElementById("towerProgress").style.display = "none";
mainMenu.style.display = "none";
fighterSelect.style.display = "none";
    gameState = "battle";
    enemyBuffs = {};
enemyImg.classList.remove("rage-glow");
    activeBuffs = {}; // сброс всех активных баффов
playerImg.classList.remove("rage-glow"); // убираем визуальные эффекты
    skinSelect.style.display = "none";
    battleDiv.style.display = "block";
    if (towerMode) {
  document.getElementById("towerProgress").style.display = "block";
  document.getElementById("towerProgress").textContent = `Башня — Бой ${towerLevel + 1} из 5`;
} else {
  document.getElementById("towerProgress").style.display = "none";
}
activeBuffs = {};
playerImg.classList.remove("rage-glow");
    logDiv.textContent = "";

    // Сбрасываем ХП и ВСК
 enemyImg.style.transform = "scaleX(-1)";
    playerHP = fighters[playerChoice].hpMax;
    playerVSC = fighters[playerChoice].vscMax;
    playerMoves = fighters[playerChoice].moves;

    // Выбираем случайного врага
if (towerMode) {
	if (towerType === "shlyan") {
  if (isRetry && lastTowerEnemy) {
    // Повторный бой — используем того же врага
    enemyChoice = lastTowerEnemy;
  } else {
    if (towerLevel < 4) {
      const keys = Object.keys(fighters).filter(k =>
        k !== playerChoice &&
        !towerEnemyList.includes(k) &&
        k !== "ШЛЯН" && k!== "АБСОЛЮТНЫЙ ШЛЯН" && k!== "ЯНТАРНЫЙ ШЛЯХ"
        && k!== "АБСОЛЮТНЫЙ БУТ"
      );
      enemyChoice = keys[Math.floor(Math.random() * keys.length)];
      towerEnemyList.push(enemyChoice);
    } else {
      enemyChoice = "АБСОЛЮТНЫЙ ШЛЯН"; // финальный босс
    }
    lastTowerEnemy = enemyChoice; // сохраняем врага для возможного повтора
  }
  }
  else if (towerType === 'but') {
    if (isRetry && lastTowerEnemy) {
      enemyChoice = lastTowerEnemy;
    } else {
      if (towerLevel < 5) {
        if (towerLevel < 5 - 2) {
          // первые 5 врагов — 5 случайных
          const keys = Object.keys(fighters).filter(k =>
            k !== playerChoice &&
            !towerEnemyList.includes(k) &&
            k !== 'ДОКТОР БУТ' && k !== 'АБСОЛЮТНЫЙ БУТ' && k!== 'АБСОЛЮТНЫЙ ШЛЯН'
          );
          enemyChoice = keys[Math.floor(Math.random() * keys.length)];
          towerEnemyList.push(enemyChoice);
        } else if (towerLevel === 3) {
          enemyChoice = 'ДОКТОР БУТ';
        } else {
          enemyChoice = 'АБСОЛЮТНЫЙ БУТ';
        }
        lastTowerEnemy = enemyChoice;
      }
    }
  }

} else {
  const keys = Object.keys(fighters).filter(k => k !== playerChoice !== "АБСОЛЮТНЫЙ ШЛЯН" !== "АБСОЛЮТНЫЙ БУТ");
  enemyChoice = keys[Math.floor(Math.random() * keys.length)];
}
    enemySkinIndex = 0;
    enemyHP = fighters[enemyChoice].hpMax;
    enemyVSC = fighters[enemyChoice].vscMax;
    enemyMoves = fighters[enemyChoice].moves;
enemyImg.classList.remove("boss-glow"); // ДО установки нового спрайта
    updateUI();
if (towerMode && towerLevel === 4) {
  enemyImg.classList.add("boss-glow");
  enemyImg.title = "👑 Финальный Босс";
}
    // Устанавливаем спрайты
    playerImg.src = selectedPlayerSprite;
    // Проверка башенного скина для врага
const unlockedTowerSkins = JSON.parse(localStorage.getItem("towerSkins") || "{}");
const enemyBaseSprites = fighters[enemyChoice].sprite;
let towerSkinPath;
if (towerType === 'shlyan') {
  towerSkinPath = `${enemyChoice.toLowerCase()}_башня.png`;
} else if (towerType === 'but') {
  towerSkinPath = `${enemyChoice.toLowerCase()}_бутботы.png`;
}
enemyImg.src = towerSkinPath;

if (towerMode) {
  enemyImg.src = towerSkinPath;
} else {
  enemyImg.src = enemyBaseSprites[enemySkinIndex];
}
// Выбор случайной арены
const arenaCount = 9; // количество аренных фонов
const arenaIndex = Math.floor(Math.random() * arenaCount) + 1;
arena.style.backgroundImage = `url('arena${arenaIndex}.png')`;
arena.classList.remove("arena-animate"); // сброс если повторно
void arena.offsetWidth; // перезапуск анимации
arena.classList.add("arena-animate");
// Показать faceoff-сцену перед боем
document.getElementById("battle").style.display = "none";
document.getElementById("faceoff-player").src = selectedPlayerSprite;
document.getElementById("faceoff-enemy").src = fighters[enemyChoice].sprite[0]; // базовый спрайт врага
document.getElementById("faceoff-player").style.transform = "scaleX(1)";
document.getElementById("faceoff-enemy").style.transform = "scaleX(-1)";
document.getElementById("faceoff-scene").style.display = "flex";

// Подождать 2 секунды и начать бой
setTimeout(() => {
  document.getElementById("faceoff-scene").style.display = "none";
  document.getElementById("battle").style.display = "block";
  beginFight();
}, 2000);
return; // Ждём завершения faceoff-сцены
    // Показываем действия игрока
    showActions();
    isRetry = false;
  }

function beginFight() {
  if (towerMode) {
    document.getElementById("towerProgress").style.display = "block";
    document.getElementById("towerProgress").textContent = `Башня — Бой ${towerLevel + 1} из 5`;
  } else {
    document.getElementById("towerProgress").style.display = "none";
  }
  enemyBuffs = {};
enemyImg.classList.remove("rage-glow");
 activeBuffs = {};
playerImg.classList.remove("rage-glow");
  logDiv.textContent = "";
  enemyImg.style.transform = "scaleX(-1)";
  playerHP = fighters[playerChoice].hpMax;
  playerVSC = fighters[playerChoice].vscMax;
  playerMoves = fighters[playerChoice].moves;

  enemySkinIndex = 0;
  enemyHP = fighters[enemyChoice].hpMax;
  enemyVSC = fighters[enemyChoice].vscMax;
  enemyMoves = fighters[enemyChoice].moves;

  enemyImg.classList.remove("boss-glow");

  playerImg.src = selectedPlayerSprite;
  const enemyBaseSprites = fighters[enemyChoice].sprite;
  let towerSkinPath;
  if (towerType === 'shlyan') towerSkinPath = `${enemyChoice.toLowerCase()}_башня.png`;
  else if (towerType === 'but') towerSkinPath = `${enemyChoice.toLowerCase()}_бутботы.png`;

  if (towerMode) enemyImg.src = towerSkinPath;
  else enemyImg.src = enemyBaseSprites[enemySkinIndex];

  if (towerMode && towerLevel === 4) {
    enemyImg.classList.add("boss-glow");
    enemyImg.title = "👑 Финальный Босс";
  }

  // Случайная арена
  const arenaCount = 9;
  const arenaIndex = Math.floor(Math.random() * arenaCount) + 1;
  arena.style.backgroundImage = `url('arena${arenaIndex}.png')`;
  arena.classList.remove("arena-animate");
  void arena.offsetWidth;
  arena.classList.add("arena-animate");

  showActions();
  isRetry = false;
  updateUI();
}
  function updateUI() {
    playerHPBar.style.width = (playerHP / fighters[playerChoice].hpMax * 100) + "%";
    enemyHPBar.style.width = (enemyHP / fighters[enemyChoice].hpMax * 100) + "%";
    playerVSCBar.style.width = (playerVSC / fighters[playerChoice].vscMax * 100) + "%";
    enemyVSCBar.style.width = (enemyVSC / fighters[enemyChoice].vscMax * 100) + "%";
  }

  // Показываем кнопки действий игрока
  function showActions() {
  actionsDiv.innerHTML = "";
  playerMoves.forEach((move, idx) => {
    const btn = document.createElement("button");
    btn.textContent = `${move.name} (${move.cost ? move.cost + " ВСК" : "Восстановление"})`;
    btn.disabled = move.cost > playerVSC;
    btn.classList.add("action-button-animate"); // 🔥 анимация!
    btn.onclick = () => {
      playerTurn(idx);
    };
    actionsDiv.appendChild(btn);
  });

  }

  // Ход игрока
  function showDamage(targetEl, dmg, isCrit = false) {
  const dmgEl = document.createElement("div");
  dmgEl.className = "damage-popup";

  // Если у родителя есть класс 'flipped', добавляем no-flip
  if (targetEl.classList.contains("flipped")) {
    dmgEl.classList.add("no-flip");
  }

  dmgEl.textContent = `-${dmg}${isCrit ? " 🔥" : ""}`;
  targetEl.appendChild(dmgEl);
  setTimeout(() => dmgEl.remove(), 800);
}

function flash(el) {
  el.classList.add("flash-hit");
  setTimeout(() => el.classList.remove("flash-hit"), 300);
}
  function playerTurn(moveIdx) {
  const move = playerMoves[moveIdx];
  if (move.buff) {
  applyBuff(move.buff, move.duration || 3);
  playerVSC = Math.min(playerVSC + 10, fighters[playerChoice].vscMax);
  updateUI();
  actionsDiv.innerHTML = ""; // ⬅️ ВАЖНО!
  setTimeout(enemyTurn, 1000);
  return;
}
  if (move.cost > playerVSC) return;

  let isCrit = false;
  let finalDmg = move.dmg;
  if (activeBuffs["rage"]) {
  finalDmg = Math.floor(finalDmg * 1.35); // усиление урона
}
  // 🎯 Шанс промаха игрока 15%
if (move.dmg && Math.random() < 0.15) {
  logDiv.textContent = `Игрок использует ${move.name}, но ПРОМАХИВАЕТСЯ!`;
  playerVSC -= move.cost;
  playerVSC = Math.max(0, playerVSC);
  updateUI();
  actionsDiv.innerHTML = ""; // ⬅️ Добавляем!
  setTimeout(enemyTurn, 1000);
  return;
}
  if (move.dmg) {
    if (Math.random() < 0.2) { // 20% шанс
      isCrit = true;
      finalDmg = Math.floor(move.dmg * 1.5);
    }
   
    enemyHP -= finalDmg;
    totalDamageDealt += finalDmg;
    logDiv.textContent = `Игрок использует ${move.name} и наносит ${finalDmg} урона!${isCrit ? " 🔥 Крит!" : ""}`;
    showDamage(enemyImg.parentElement, finalDmg, isCrit); // ✅ передаём isCrit
    flash(enemyImg);
  }

  if (move.restore) {
    playerVSC += move.restore;
    if (playerVSC > fighters[playerChoice].vscMax) playerVSC = fighters[playerChoice].vscMax;
    logDiv.textContent = `Игрок использует ${move.name} и восстанавливает ${move.restore} ВСК!`;
  }

  playerVSC -= move.cost;
  if (playerVSC < 0) playerVSC = 0;

  if (enemyHP <= 0) {
  enemyHP = 0;
  updateUI();
  enemyImg.classList.add("fade-out"); // 💥
  setTimeout(() => endBattle(true), 700); // подождём анимацию
  return;
}

  updateUI();
  actionsDiv.innerHTML = "";
  updateBuffs();
  playerVSC = Math.min(playerVSC + 10, fighters[playerChoice].vscMax);
  setTimeout(enemyTurn, 1000);
}
  // Ход врага — выбирает доступный ход случайно
  function enemyTurn() {
  let move;
  const available = enemyMoves.filter(m => m.cost <= enemyVSC);
  const lowHP = enemyHP <= fighters[enemyChoice].hpMax * 0.3;
  const playerLow = playerHP <= fighters[playerChoice].hpMax * 0.3;

  // Приоритет: если хил нужен и есть хил
  if (lowHP) {
    const heal = enemyMoves.find(m => m.restore && m.cost <= enemyVSC);
    if (heal) {
      move = heal;
    }
  }

  // Приоритет: если можно добить игрока — бей сильно
  if (!move && playerLow) {
    const finisher = available.find(m => m.dmg >= playerHP);
    if (finisher) move = finisher;
  }

  // Если есть rage-бафф и он не активен — активируй
  if (!move) {
    const rage = enemyMoves.find(m => m.buff === "rage" && !enemyBuffs["rage"] && m.cost <= enemyVSC);
    if (rage) move = rage;
  }

  // Сильный удар, если хватает ВСК
  if (!move) {
    const heavy = available.filter(m => m.dmg).sort((a, b) => b.dmg - a.dmg)[0];
    if (heavy) move = heavy;
  }

  // Если вообще нечего делать — хил или просто пропустить
  if (!move) {
    move = enemyMoves.find(m => m.restore);
    if (!move) {
      logDiv.textContent = `${enemyChoice} пропускает ход, нет ВСК.`;
      setTimeout(showActions, 1000);
      return;
    }
  }

  executeEnemyMove(move);
}
function executeEnemyMove(move) {
  let isCrit = false;
  let finalDmg = move.dmg;
  if (enemyBuffs["rage"]) {
    finalDmg = Math.floor(finalDmg * 1.35);
  }

  // ПРОМАХ
  if (move.dmg && Math.random() < 0.15) {
    logDiv.textContent = `${enemyChoice} использует ${move.name}, но ПРОМАХИВАЕТСЯ!`;
    enemyVSC -= move.cost;
    enemyVSC = Math.max(0, enemyVSC);
    updateUI();
    setTimeout(() => {
      logDiv.textContent = "";
      enemyVSC = Math.min(enemyVSC + 10, fighters[enemyChoice].vscMax);
      showActions();
    }, 1000);
    return;
  }

  // БАФФ
  if (move.buff) {
    applyEnemyBuff(move.buff, move.duration || 3);
    enemyVSC -= move.cost;
    updateUI();
    setTimeout(() => {
      logDiv.textContent = "";
      enemyVSC = Math.min(enemyVSC + 10, fighters[enemyChoice].vscMax);
      showActions();
    }, 1000);
    return;
  }

  // АТАКА
  if (move.dmg) {
    if (Math.random() < 0.2) {
      isCrit = true;
      finalDmg = Math.floor(move.dmg * 1.5);
    }
    playerHP -= finalDmg;
    totalDamageTaken += finalDmg;
    logDiv.textContent = `${enemyChoice} использует ${move.name} и наносит ${finalDmg} урона!${isCrit ? " 🔥 Крит!" : ""}`;
    showDamage(playerImg.parentElement, finalDmg, isCrit);
    flash(playerImg);
  }

  if (move.restore) {
    enemyVSC += move.restore;
    if (enemyVSC > fighters[enemyChoice].vscMax) enemyVSC = fighters[enemyChoice].vscMax;
    logDiv.textContent = `${enemyChoice} использует ${move.name} и восстанавливает ${move.restore} ВСК!`;
  }

  enemyVSC -= move.cost;
  if (enemyVSC < 0) enemyVSC = 0;

  if (playerHP <= 0) {
    playerHP = 0;
    updateUI();
    playerImg.classList.add("fade-out");
    setTimeout(() => endBattle(false), 700);
    return;
  }

  updateUI();
  updateEnemyBuffs();
  setTimeout(() => {
    logDiv.textContent = "";
    enemyVSC = Math.min(enemyVSC + 10, fighters[enemyChoice].vscMax);
    showActions();
  }, 1000);
}
  // Конец боя
  function endBattle(playerWon) {
  updateUI();
  if (towerMode && playerWon && towerLevel < 4) {
    towerLevel++;
    setTimeout(startBattle, 1500);
    return;
  }

  gameState = "result";
  battleDiv.style.display = "none";
  resultDiv.style.display = "block";

  if (towerMode && playerWon && towerLevel === 4) {
  // Победа в башне
  addCoins(50);
  const durationSec = Math.floor((Date.now() - towerStartTime) / 1000);
  resultText.innerHTML = `
  <div style="position:relative; display:inline-block;">
    <div style="position:absolute; top:-30px; width:100%; text-align:center; font-size:22px; font-weight:bold; color:gold; text-shadow:1px 1px 3px #000;">ПОБЕДИТЕЛЬ</div>
    <img src="${selectedPlayerSprite}" style="width:150px;"/>
  </div>
`;
  statsText.innerHTML = `
    Герой: <strong>${playerChoice}</strong><br>
    Время: <strong>${durationSec} сек</strong><br>
    Урон нанесён: <strong>${totalDamageDealt}</strong><br>
    Урон получен: <strong>${totalDamageTaken}</strong><br>
    Получено <strong>50 монет!</strong>
  `;
// Сохраняем рекорд
    // Сохраняем разблокированный башенный скин
let unlockedTowerSkins = JSON.parse(localStorage.getItem("towerSkins") || "{}");
if (!unlockedTowerSkins["башня"]) unlockedTowerSkins["башня"] = {};
if (!unlockedTowerSkins["бутботы"]) unlockedTowerSkins["бутботы"] = {};

if (towerType === "shlyan") {
  unlockedTowerSkins["башня"][playerChoice] = true;
}
if (towerType === "but") {
  unlockedTowerSkins["бутботы"][playerChoice] = true;
}
localStorage.setItem("towerSkins", JSON.stringify(unlockedTowerSkins));
const record = {
  hero: playerChoice,
  skin: selectedPlayerSprite,
  time: durationSec,
  damageDealt: totalDamageDealt,
  damageTaken: totalDamageTaken,
  date: new Date().toLocaleDateString()
};
let records = JSON.parse(localStorage.getItem("towerRecords") || "[]");
records.push(record);
records.sort((a, b) => a.time - b.time); // быстрее — лучше
records = records.slice(0, 10); // максимум 10 рекордов
localStorage.setItem("towerRecords", JSON.stringify(records));
  towerMode = false; // башня завершена только сейчас
} else {
  resultText.textContent = playerWon ? "Вы победили!" : "Вы проиграли!";
  statsText.textContent =
    `Игрок (${playerChoice}) HP: ${playerHP}/${fighters[playerChoice].hpMax}, ВСК: ${playerVSC}/${fighters[playerChoice].vscMax}\n` +
    `Враг (${enemyChoice}) HP: ${enemyHP}/${fighters[enemyChoice].hpMax}, ВСК: ${enemyVSC}/${fighters[enemyChoice].vscMax}`;

  // Важно: towerMode НЕ сбрасываем, если это поражение или промежуточная победа
  if (!towerMode) {
    // если это обычный быстрый бой — можно сбросить
    towerMode = false;
  }
}
  }
    
  // БАШНЯ
  function showTowerScene() {
  console.log("СПРАЙТ ДЛЯ СЦЕНЫ:", selectedPlayerSprite); // 💥 ВАЖНО
const txt = document.getElementById("sceneText");
txt.classList.remove("tower-text-animate"); // сброс
void txt.offsetWidth; // перезапуск
txt.classList.add("tower-text-animate");
// txt.style.border = "1px dashed red"; // 💥 чтобы точно увидеть
  document.getElementById("main-menu").style.display = "none";
  document.getElementById("skin-select").style.display = "none";
  document.getElementById("tower-scene").style.display = "block";

  const playerSceneImg = document.getElementById("scenePlayer");
  playerSceneImg.src = selectedPlayerSprite;
  const towerImg = document.getElementById("sceneTower");
const sceneText = document.getElementById("sceneText");

// Меняем башню и текст в зависимости от выбранной башни
if (towerType === "but") {
  towerImg.src = "buttower.png"; // КАРТИНКА башни ДОКТОРА БУТА (положи в корень)
  sceneText.innerHTML = `
    <div style="font-weight:bold; font-size:22px;">Башня Бута ждёт...</div>
    <div style="margin-top:10px;">Смел ли ты бросить вызов АБСОЛЮТНОМУ БУТУ?</div>
  `;
} else {
  towerImg.src = "tower.png"; // стандартная башня
  sceneText.innerHTML = `
    <div style="font-weight:bold; font-size:22px;">Башня ждёт...</div>
    <div style="margin-top:10px;">Ты готов пройти путь до вершины и встретиться с АБСОЛЮТНЫМ ШЛЯНОМ?</div>
  `;
}
}

// ГЛАВНОЕ МЕНЮ
  function showMainMenu() {
    gameState = "main-menu";
    resultDiv.style.display = "none";
    battleDiv.style.display = "none";
    skinSelect.style.display = "none";
    fighterSelect.style.display = "none";
    mainMenu.style.display = "block";
  }
function showRecords() {
  const recordsDiv = document.getElementById("records");
  const list = document.getElementById("recordsList");
  mainMenu.style.display = "none";
  recordsDiv.style.display = "block";

  const records = JSON.parse(localStorage.getItem("towerRecords") || "[]");
  if (records.length === 0) {
    list.innerHTML = "<p>Рекордов пока нет.</p>";
    return;
  }

  list.innerHTML = records.map((r, i) => `
    <div style="margin-bottom:10px; text-align:left; background:#222; padding:10px; border-radius:10px;">
      <strong>#${i + 1}</strong> — <img src="${r.skin}" style="width:30px; vertical-align:middle;"/> <strong>${r.hero}</strong><br/>
      Время: <strong>${r.time} сек</strong><br/>
      Урон: <span style="color:lime">${r.damageDealt}</span> / <span style="color:red">${r.damageTaken}</span><br/>
      Дата: ${r.date}
    </div>
  `).join("");
}
  function showCollection() {
  const unlockedSkins = JSON.parse(localStorage.getItem("towerSkins") || "{}");
  if (!unlockedSkins["башня"]) unlockedSkins["башня"] = {};
  if (!unlockedSkins["бутботы"]) unlockedSkins["бутботы"] = {};

  const container = document.getElementById("collectionList");
  container.innerHTML = "";
  mainMenu.style.display = "none";
  document.getElementById("collection").style.display = "block";

  for (const fighter in fighters) {
    if (fighter === "АБСОЛЮТНЫЙ ШЛЯН" || fighter === "АБСОЛЮТНЫЙ БУТ") continue;

    const card = document.createElement("div");
    card.className = "collection-card";

    const title = document.createElement("div");
    title.className = "collection-card-title";
    title.textContent = fighter;

    const skinContainer = document.createElement("div");
    skinContainer.className = "collection-skins";

    // Обычные скины
    fighters[fighter].sprite.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.title = "Обычный скин";
      skinContainer.appendChild(img);
    });

    // Башня ШЛЯНА
    const towerSkin = document.createElement("img");
    towerSkin.src = `${fighter.toLowerCase()}_башня.png`;
    if (unlockedSkins["башня"]?.[fighter]) {
      towerSkin.classList.add("unlocked-skin", "tower-skin");
      towerSkin.title = "Скин за победу в башне Шляна";
    } else {
      towerSkin.classList.add("locked-skin");
      towerSkin.title = "Скин за победу в башне Шляна (не разблокирован)";
    }
    skinContainer.appendChild(towerSkin);

    // Башня ДОКТОРА БУТА
    const butSkin = document.createElement("img");
    butSkin.src = `${fighter.toLowerCase()}_бутботы.png`;
    if (unlockedSkins["бутботы"]?.[fighter]) {
      butSkin.classList.add("unlocked-skin", "butbot-skin");
      butSkin.title = "Скин за победу в башне Доктора Бута";
    } else {
      butSkin.classList.add("locked-skin");
      butSkin.title = "Скин за победу в башне Доктора Бута (не разблокирован)";
    }
    skinContainer.appendChild(butSkin);
// Магазинный скин
if (shopSkinAvailable.includes(fighter)) {
  const shopSkin = document.createElement("img");
  shopSkin.src = `${fighter.toLowerCase()}_магазин.png`;
  if (JSON.parse(localStorage.getItem("shopSkins") || "{}")[fighter]) {
    shopSkin.classList.add("unlocked-skin", "shop-skin");
    shopSkin.title = "Купленный скин из магазина";
  } else {
    shopSkin.classList.add("locked-skin");
    shopSkin.title = "Скин из магазина (не куплен)";
  }
  skinContainer.appendChild(shopSkin);
}
    card.appendChild(title);
    card.appendChild(skinContainer);
    card.onclick = () => {
  document.getElementById("loreTitle").textContent = fighter;
  document.getElementById("loreText").textContent = fighterLore[fighter] || "История пока скрыта...";
  document.getElementById("loreModal").style.display = "flex";
};
    container.appendChild(card);
  }
}
// ========== МОНЕТЫ ==========
function getCoins() {
  return parseInt(localStorage.getItem("coins") || "0");
}
function setCoins(value) {
  localStorage.setItem("coins", value);
}
function addCoins(amount) {
  setCoins(getCoins() + amount);
}

// ========== МАГАЗИН ==========
document.getElementById("btnShop").onclick = () => {
  showShop();
};
document.getElementById("btnBackFromShop").onclick = () => {
  document.getElementById("shop").style.display = "none";
  mainMenu.style.display = "block";
};

function showShop() {
  const container = document.getElementById("shopList");
  const coinCount = document.getElementById("coinCount");
  mainMenu.style.display = "none";
  document.getElementById("shop").style.display = "block";
  container.innerHTML = "";
  coinCount.textContent = getCoins();

  let shopSkins = JSON.parse(localStorage.getItem("shopSkins") || "{}");

  for (const fighter of shopSkinAvailable) {
    const shopSkinPath = `${fighter.toLowerCase()}_магазин.png`;

    const card = document.createElement("div");
    card.className = "shop-card";

    const img = document.createElement("img");
    img.src = shopSkinPath;
    img.classList.add(shopSkins[fighter] ? "shop-skin" : "locked-skin");
    img.title = shopSkins[fighter] ? "Куплено" : "Скин за 100 монет";
    card.appendChild(img);

    const name = document.createElement("div");
    name.className = "shop-card-name";
    name.textContent = fighter;
    card.appendChild(name);

    const price = document.createElement("div");
    price.className = "shop-card-price";
    price.textContent = shopSkins[fighter] ? "✔️ Куплено" : "💰 100 монет";
    card.appendChild(price);

    const btn = document.createElement("button");
    if (shopSkins[fighter]) {
      btn.textContent = "Куплено";
      btn.disabled = true;
    } else {
      btn.textContent = "Купить";
      btn.onclick = () => {
        if (getCoins() >= 100) {
          setCoins(getCoins() - 100);
          localStorage.setItem("coins", getCoins());
          playSkinRevealAnimation(shopSkinPath, () => {
            shopSkins[fighter] = true;
            localStorage.setItem("shopSkins", JSON.stringify(shopSkins));
            showShop();
          });
        } else {
          alert("Не хватает монет!");
        }
      };
    }

    card.appendChild(btn);
    container.appendChild(card);
  }
}

function playSkinRevealAnimation(skinPath, callback) {
  const overlay = document.getElementById("skinRevealOverlay");
  const img = document.getElementById("skinRevealImg");

  img.src = skinPath;
  img.classList.remove("skin-reveal-anim"); // сброс
  void img.offsetWidth;
  img.classList.add("skin-reveal-anim");

  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.style.display = "none";
    callback?.();
  }, 1500); // длина анимации
}
  // При старте — показать меню
  showMainMenu();
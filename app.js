// @ts-ignore
// NOTE VVV is my starting "money"
let totalVibes = 1000
// NOTE VVV this is how much money i get per second AFTER buying passive upgrades
let passiveVibesPS = 0
// NOTE VVV this is how much money i get per click BEFORE upgrades are added
let petsPerClick = 1

// NOTE VVV this is the array that holds my upgrades
const upgrades = [
  {
    name: "smallVibe",
    type: "active",
    cost: 10,
    quantity: 0,
    multiplier: 5
  },
  {
    name: "majorVibe",
    type: "active",
    cost: 300,
    quantity: 0,
    multiplier: 50
  },
  {
    name: "chillVibe",
    type: "passive",
    cost: 100,
    quantity: 0,
    multiplier: 10
  },
  {
    name: "majorChillVibe",
    type: "passive",
    cost: 500,
    quantity: 0,
    multiplier: 100
  },
]


// NOTE VVV everytime i click i get money
//  when i purchase active upgrades, it needs to add to how much my clicks collect
function pet() {
  totalVibes += petsPerClick;

  update()
}

// NOTE VV activates only when i have bought passive upgrade
function passiveVibes() {
  totalVibes += passiveVibesPS

  update()
}

// NOTE when i buy an upgrade it takes away from my resources only
// cant buy if i dont have enough reources for the value of the upgrade
// maybe increase the price of the upgrades in here also 
function buyUpgrade(name) {
  // NOTE finds the upgrade by its name
  const boughtUpgrade = upgrades.find(u => u.name == name)
  console.log(boughtUpgrade);
  // NOTE if total money is greater than the cost, then i can purchase and itll take the amount away from my money total
  // and increases how many i have 
  if (totalVibes >= boughtUpgrade.cost) {
    // @ts-ignore
    totalVibes -= boughtUpgrade.cost
    boughtUpgrade.quantity++
    // NOTE increases the cost by the quantity times 25 for now.
    // balancing a game is the hard part...
    boughtUpgrade.cost += boughtUpgrade.quantity * 25

    // NOTE if the type is active it adds the multiplier of the active upgrade
    //  to my click power
    if (boughtUpgrade.type == "active") {
      petsPerClick += boughtUpgrade.multiplier
      // NOTE otherwise it adds my passive upgrade to the multiplier
    } else {
      passiveVibesPS += boughtUpgrade.multiplier
      passiveVibes()
    }
  }
  update()
}


// NOTE passive vibes collection needs to happen every 3 seconds, after having bought the right upgrade
setInterval(passiveVibes, 3000)


// NOTE updates the information to the screen
function update() {
  // @ts-ignore
  document.getElementById('passive-vibes-ps').innerText = passiveVibesPS
  // @ts-ignore
  document.getElementById('total-vibes').innerText = totalVibes

  document.getElementById('pets-per-click').innerText = petsPerClick



  // NOTE thhese are how many of each upgrade i have bought
  document.getElementById('activeUpgrade1').innerText = upgrades[0].quantity
  document.getElementById('activeUpgrade2').innerText = upgrades[1].quantity
  document.getElementById('passiveUpgrade1').innerText = upgrades[2].quantity
  document.getElementById('passiveUpgrade2').innerText = upgrades[3].quantity

  // NOTE these r how much the upgrades cost, with the increased cost
  document.getElementById('totalActiveUpgrade1').innerText = upgrades[0].cost
  document.getElementById('totalActiveUpgrade2').innerText = upgrades[1].cost
  document.getElementById('totalPassiveUpgrade1').innerText = upgrades[2].cost
  document.getElementById('totalPassiveUpgrade2').innerText = upgrades[3].cost
}













































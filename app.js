// @ts-ignore
// NOTE VVV is my starting "money"
let totalVibes = 0
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
    multiplier: 1
  },
  {
    name: "majorVibe",
    type: "active",
    cost: 100,
    quantity: 0,
    multiplier: 10
  },
  {
    name: "chillVibe",
    type: "passive",
    cost: 100,
    quantity: 0,
    multiplier: 5
  },
  {
    name: "majorChillVibe",
    type: "passive",
    cost: 200,
    quantity: 0,
    multiplier: 20
  },
]


// NOTE VVV everytime i click i get money
//  when i purchase upgrades, it needs to add to how much my clicks collect
function pet() {
  totalVibes += petsPerClick;

  update()
}

function passiveVibes() {
  totalVibes += passiveVibesPS

  update()
}

// NOTE when i buy an upgrade it takes away from my resources only
// cant buy if i dont have enough reources for the value of the upgrade
// maybe increase the price of the upgrades in here also 
function buyUpgrade(name) {
  const boughtUpgrade = upgrades.find(u => u.name == name)
  console.log(boughtUpgrade);
  // @ts-ignore
  if (totalVibes >= boughtUpgrade.cost) {
    // @ts-ignore
    totalVibes -= boughtUpgrade.cost
    boughtUpgrade.quantity++
    // @ts-ignore
    boughtUpgrade.cost *= (1.5).toFixed(0)

    if (boughtUpgrade.type == "active") {
      petsPerClick += boughtUpgrade.multiplier
    } else {
      passiveVibesPS += boughtUpgrade.multiplier
      passiveVibes()
    }
  }
  update()
}


setInterval(passiveVibes, 3000)




function update() {
  // @ts-ignore
  document.getElementById('passive-vibes-ps').innerText = passiveVibesPS
  // @ts-ignore
  document.getElementById('total-vibes').innerText = totalVibes
  // @ts-ignore
  document.getElementById('pets-per-click').innerText = petsPerClick

  document.getElementById('activeUpgrade1').innerText = upgrades[0].quantity
  document.getElementById('activeUpgrade2').innerText = upgrades[1].quantity
  document.getElementById('passiveUpgrade1').innerText = upgrades[2].quantity
  document.getElementById('passiveUpgrade2').innerText = upgrades[3].quantity


}











































// function buyUpgrade(name) {
//   const boughtUpgrade = upgrades.find(c => c.type == 'active')
//   // @ts-ignore
//   if (totalVibes >= boughtUpgrade.cost) {
//     // @ts-ignore
//     totalVibes -= boughtUpgrade.cost
//     // @ts-ignore
//     petsPerClick += boughtUpgrade.multiplier
//     // @ts-ignore
//     boughtUpgrade.quantity++
//     // want quantity to go up by one this brings my clicking value/auto clicking value up

//   }
//   update()
// }

// function applyUpgrade(name) {
//   const applyUpgrade = upgrades.find(c => c.type == 'passive')
//   // @ts-ignore
//   if (totalVibes >= applyUpgrade.cost) {
//     // @ts-ignore
//     totalVibes -= applyUpgrade.cost
//     // @ts-ignore
//     totalVibes += applyUpgrade.multiplier
//     // @ts-ignore
//     passiveVibesPS += applyUpgrade.multiplier
//     // @ts-ignore
//     applyUpgrade.quantity++
//   }
//   console.log('TEST');
//   update()
// }
// // TODO want the total quantity * multiplyers.
// function collectApplyUpgrades() {
//   const applyUpgrade = upgrades.find(c => c.type == 'passive')
//   // @ts-ignore
//   totalVibes += applyUpgrade.multiplier * applyUpgrade.quantity
//   // @ts-ignore
//   passiveVibesPS += applyUpgrade.multiplier
//   console.log(passiveVibesPS);
//   update()
// }

// setInterval(collectApplyUpgrades, 1000)
// // setInterval(applyUpgrade, 1000)











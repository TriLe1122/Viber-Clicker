// @ts-ignore
let totalVibes = 500
let passiveVibesPS = 0
let petsPerClick = 1



const upgrades = [
  {
    name: "smallVibe",
    type: "active",
    cost: 100,
    quantity: 0,
    multiplier: 1
  },
  {
    name: "majorVibe",
    type: "active",
    cost: 200,
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

function buyUpgrade(name) {
  const boughtUpgrade = upgrades.find(c => c.name == name)
  // @ts-ignore
  if (totalVibes >= boughtUpgrade.cost) {
    // @ts-ignore
    totalVibes -= boughtUpgrade.cost
    // @ts-ignore
    petsPerClick += boughtUpgrade.multiplier
    boughtUpgrade.quantity++
    // want quantity to go up by one this brings my clicking value/auto clicking value up

  }
  update()
}

function applyUpgrade() {
  upgrades.forEach(upgrade => {
    if (upgrade.quantity > 0) {
      if (upgrade.type == 'passive') {
        totalVibes += upgrade.multiplier

      }
    }



  })
  update()
}
setInterval(applyUpgrade, 1000)


function pet() {
  totalVibes += petsPerClick;

  update()
}

function update() {

  document.getElementById('total-vibes').innerText = totalVibes
  document.getElementById('pets-per-click').innerText = petsPerClick
  // document.getElementById('passive-vibes-ps').innerText = passiveVibesPS



}


// function smallVibe() {
//   petsPerClick++
//   update()
// }



// function majorVibe() {
//   petsPerClick += 10
//   update()
// }

// function chillVibe() {
//   passiveVibesPS++

//   update()
// }
// function majorChillVibe() {

//   passiveVibesPS += 10
//   update()
// }






// let ClickUpgrades = {
//   smallVibe: {
//     price: 100,
//     quantity: 0,
//     multiplier: 1
//   },
//   majorVibe: {
//     price: 300,
//     quantity: 0,
//     multiplier: 10
//   }
// };

// let passiveUpgrades = {
//   chillVibe: {
//     price: 600,
//     quantity: 0,
//     multiplier: 1
//   },
//   majorChillVibe: {
//     price: 600,
//     quantity: 0,
//     multiplier: 5
//   }
// };

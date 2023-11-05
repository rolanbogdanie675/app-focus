/*
Filename: ComplexCode.js
Description: This code is an implementation of a complex and sophisticated web application that simulates a virtual pet game. It includes various features such as pet creation, feeding, grooming, playing, and aging. The code is organized into multiple modules for easy maintenance and scalability.
*/

// ---------- Pet Module ----------
class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.age = 0;
    this.hungerLevel = 0;
    this.happinessLevel = 0;
    this.isAlive = true;
  }

  feed() {
    if (this.isAlive) {
      if (this.hungerLevel > 0) {
        this.hungerLevel--;
      } else {
        console.log(`${this.name} does not seem hungry.`);
      }
    } else {
      console.log(`${this.name} is no longer alive.`);
    }
  }

  play() {
    if (this.isAlive) {
      if (this.hungerLevel < 3) {
        console.log(`${this.name} is too hungry to play.`);
        return;
      }

      this.hungerLevel += 2;
      this.happinessLevel++;

      if (this.happinessLevel >= 5) {
        console.log(`${this.name} is very happy!`);
      } else {
        console.log(`${this.name} is happy.`);
      }
    } else {
      console.log(`${this.name} is no longer alive.`);
    }
  }

  groom() {
    if (this.isAlive) {
      if (this.hungerLevel < 2) {
        console.log(`${this.name} is too hungry to be groomed.`);
        return;
      }

      this.hungerLevel++;

      console.log(`${this.name} enjoys being groomed.`);
    } else {
      console.log(`${this.name} is no longer alive.`);
    }
  }

  checkAge() {
    if (this.isAlive) {
      if (this.age >= 10) {
        console.log(`${this.name} is now old.`);
      } else {
        console.log(`${this.name} is still young.`);
      }
    } else {
      console.log(`${this.name} is no longer alive.`);
    }
  }

  increaseAge() {
    if (this.isAlive) {
      this.age++;
      this.hungerLevel++;

      if (this.age > 15) {
        this.isAlive = false;
        console.log(`${this.name} has passed away.`);
      }
    } else {
      console.log(`${this.name} is no longer alive.`);
    }
  }
}

// ---------- User Interface Module ----------
class UI {
  static createPet(name, type) {
    const pet = new Pet(name, type);
    UI.displayPet(pet);
  }

  static feedPet() {
    const petName = document.querySelector("#pet-name").textContent;
    const petType = document.querySelector("#pet-type").textContent;

    const currentPet = new Pet(petName, petType);
    currentPet.feed();

    UI.displayPet(currentPet);
  }

  static playWithPet() {
    const petName = document.querySelector("#pet-name").textContent;
    const petType = document.querySelector("#pet-type").textContent;

    const currentPet = new Pet(petName, petType);
    currentPet.play();

    UI.displayPet(currentPet);
  }

  static groomPet() {
    const petName = document.querySelector("#pet-name").textContent;
    const petType = document.querySelector("#pet-type").textContent;

    const currentPet = new Pet(petName, petType);
    currentPet.groom();

    UI.displayPet(currentPet);
  }

  static agePet() {
    const petName = document.querySelector("#pet-name").textContent;
    const petType = document.querySelector("#pet-type").textContent;

    const currentPet = new Pet(petName, petType);
    currentPet.increaseAge();

    UI.displayPet(currentPet);
  }

  static displayPet(pet) {
    document.querySelector("#pet-name").textContent = pet.name;
    document.querySelector("#pet-type").textContent = pet.type;
    document.querySelector("#pet-age").textContent = `Age: ${pet.age}`;
    document.querySelector("#pet-hunger").textContent = `Hunger Level: ${pet.hungerLevel}`;
    document.querySelector("#pet-happiness").textContent = `Happiness Level: ${pet.happinessLevel}`;
    document.querySelector("#pet-status").textContent = `Status: ${pet.isAlive ? 'Alive' : 'Dead'}`;
  }
}

// ---------- Event Listeners ----------
document.querySelector("#create-pet").addEventListener("click", () => {
  const name = document.querySelector("#pet-name-input").value;
  const type = document.querySelector("#pet-type-input").value;

  if (name && type) {
    UI.createPet(name, type);
  } else {
    alert("Please provide a name and type for the pet.");
  }
});

document.querySelector("#feed-pet").addEventListener("click", () => {
  UI.feedPet();
});

document.querySelector("#play-pet").addEventListener("click", () => {
  UI.playWithPet();
});

document.querySelector("#groom-pet").addEventListener("click", () => {
  UI.groomPet();
});

document.querySelector("#age-pet").addEventListener("click", () => {
  UI.agePet();
});

// Code continues with more UI interaction and event handling...

// ---------- Initial Execution ----------
console.log("Welcome to Virtual Pet Simulator");
console.log("Please create a pet using the form.");
console.log("Interact with your pet using the buttons provided.");
class On {
  powerPush() {
    console.log('Power Off');
  }
}

class Off {
  powerPush() {
    console.log('Sleep Mode');
  }
}

class Saving {
  powerPush() {
    console.log('Power On');
  }
}

class Laptop {
  constructor() {
    this.state = new Off();
  }

  setPowerState(state) {
      this.state = state;
  }

  powerPush() {
      this.state.powerPush();
  }
}

const laptop = new Laptop();
const on = new On();
const off = new Off();
const saving = new Saving();

laptop.powerPush(); 

laptop.setPowerState(on);
laptop.powerPush();

laptop.setPowerState(saving);
laptop.powerPush();

laptop.setPowerState(off);
laptop.powerPush();

laptop.setPowerState(on);
laptop.powerPush();

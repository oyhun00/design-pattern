class Laptop {
  constructor() {
    this.state = 'OFF';
  }

  setPowerState(state) {
    this.state = state;
  }

  powerPush() {
    if (this.state === 'ON') {
      console.log('Power Off');
    } else if (this.state === 'OFF') {
      console.log('Power On');
    } else if (this.state === 'Saving') {
      // ...
    } else {
      // ...
    }
  }
}

const laptop = new Laptop();

laptop.powerPush(); 
laptop.setPowerState('ON');
laptop.powerPush();
laptop.setPowerState('OFF');
laptop.powerPush();
class Observer {
  update() {
  }
}

class Observer1 extends Observer {
  update(isWaiting) {
    if (!isWaiting) console.log("Observer1");
  }
}

class Observer2 extends Observer {
  update(isWaiting) {
    if (!isWaiting) console.log("Observer2");
  }
}

class Observer3 extends Observer {
  update(isWaiting) {
    if (!isWaiting) console.log("Observer3");
  }
}

class Subject {
  constructor() {
    this.obs = [];
    this.waiting = false;
  }

  subscribe(_observer) {
    this.obs.push(_observer);
  }

  unsubscribe(removeObserver) {
    this.obs = this.obs.filter((v) => v !== removeObserver);
  }

  notify() {
    this.waiting = false;
    this.obs.map((v) => v.update(this.waiting));
  }
}

const subject = new Subject();

const obs1 = new Observer1();
const obs2 = new Observer2();
const obs3 = new Observer3();

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.subscribe(obs3);

subject.notify();
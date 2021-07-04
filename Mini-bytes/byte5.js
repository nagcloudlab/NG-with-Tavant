// Ex: observer pattern

const Rx = require("rxjs");

// Reactive programming ==> observer pattern in async style

//---------------------------------------
// door ==> subject
//---------------------------------------

const stream = new Rx.Subject();

class Door {
  //   listeners = [];
  //   addDoorListener(listener) {
  //     this.listeners.push(listener);
  //   }
  //   remoreDoorListener(listener) {
  //     //..
  //   }
  open() {
    console.log("door opened");
    let event = { type: "open", num: 2, floor: 1 };
    // this.listeners.forEach((listener) => listener.on(event)); // sync
    stream.next(event);
  }
  close() {
    console.log("door closed");
    let event = { type: "close", num: 2, floor: 1 };
    // this.listeners.forEach((listener) => listener.off(event)); // sync
    stream.next(event);
  }
}

//---------------------------------------
// light
//---------------------------------------

const light = {
  start(event) {
    console.log("light ON");
  },
  off(event) {
    console.log("light OFF");
  },
};

stream.subscribe((nextEvent) => {
  if (nextEvent.type === "open") light.start();
  if (nextEvent.type === "close") light.off();
});

//---------------------------------------
// AC
//---------------------------------------

const AC = {
  on(event) {
    console.log("AC ON");
  },
  off(event) {
    console.log("AC OFF");
  },
};

stream.subscribe((nextEvent) => {
  if (nextEvent.type === "open") AC.on();
  if (nextEvent.type === "close") AC.off();
});

//---------------------------------------

const door = new Door();
// door.addDoorListener(light);
// door.addDoorListener(AC);

//---------------------------------------

setTimeout(() => {
  door.open();
  setTimeout(() => {
    door.close();
  }, 3000);
}, 3000);

setTimeout(() => {
  door.open();
  setTimeout(() => {
    door.close();
  }, 3000);
}, 3000);

//---------------------------------------

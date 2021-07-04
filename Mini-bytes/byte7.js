const Rx = require("rxjs");

const { Observable, Subject, BehaviorSubject, ReplaySubject } = Rx;

// const subject = new Subject();

// subject.subscribe({
//   next: (v) => console.log(1),
// });

// subject.subscribe({
//   next: (v) => console.log(2),
// });

// subject.next(10)
// subject.next(20)

// subject.subscribe({
//   next: (v) => console.log(3),
// });

// subject.next(30)

//----------------------------------------------------------------------

// const behavSubject=new BehaviorSubject(0);

// behavSubject.subscribe({
//   next:v=>console.log('observerA: '+v)
// })

// behavSubject.next(10)
// behavSubject.next(20)

// behavSubject.subscribe({
//   next:v=>console.log('observerB: '+v)
// })

// behavSubject.next(30)

//----------------------------------------------------------------------

const replaySubject = new ReplaySubject(2);
replaySubject.subscribe({
  next: (v) => console.log("observerA: " + v),
});

replaySubject.next(10);
replaySubject.next(20);

replaySubject.subscribe({
  next: (v) => console.log("observerB: " + v),
});

replaySubject.next(30);

replaySubject.subscribe({
  next: (v) => console.log("observerC: " + v),
});

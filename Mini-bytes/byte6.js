/*

 Async Programming Api
 ----------------------

    1- Promise Api ( fromES6 )
    2. Reactive eXtensions in Javascript ( RxJs) 

*/

const Rx = require("rxjs");
const { filter, map, buffer, bufferCount } = require("rxjs/operators");

//-------------------------------------------------------------
// producer
//-------------------------------------------------------------

const trainer = {
  getTopicsAsync() {
    const tngStream = new Rx.Subject();
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i === 11) {
        tngStream.complete();
        clearInterval(interval);
      } else {
        let topic = i;
        console.log("trainer propagating event /change into stream " + i);
        tngStream.next("tnr-"+topic);
      }
      // if (i === 5) {
      //   tngStream.error("n/w issue");
      //   clearInterval(interval);
      // }
    }, 5000);
    return tngStream;
  },
};

const google = {
  getTopicsAsync() {
    const googleStream = new Rx.Subject();
    let i = 0;
    setInterval(() => {
      i++;
      googleStream.next("g-"+i);
    }, 2000);
    return googleStream;
  },
};

//-------------------------------------------------------------
// Consumer
//-------------------------------------------------------------

const employee = {
  doLearnAndWork() {
    
    const tnrStream = trainer.getTopicsAsync();
    const googleStream = google.getTopicsAsync();
    Rx.zip([tnrStream,googleStream])
      // .pipe(filter((topic) => topic % 2 === 0))
      // .pipe(map((topic) => topic * topic))
      // .pipe(bufferCount(2))
      .subscribe(
        (data) => console.log("employee reacting/learning " + data),
        (err) => console.log("employee reacting to error " + err),
        () => console.log("thanks trainer for all topics")
      );
  },
};

employee.doLearnAndWork();

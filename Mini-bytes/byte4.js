/*

 Async Programming Api
 ----------------------

    1- Promise Api ( fromES6 )
    2. Reactive eXtensions in Javascript ( RxJs) 
 

*/

//-------------------------------------------------------------
// producer
//-------------------------------------------------------------

const trainer = {
  // getTopic() {
  //   //
  //   return "topic-1";
  // },
  getTopicAsync() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("topic-1")
      }, 3000);
    });
    return promise;
  },
};

//-------------------------------------------------------------
// Consumer
//-------------------------------------------------------------

const employee = {
  doLearnAndWork() {
    // trainer.getTopic(); // blocking-call / pull -> sync
    let promise = trainer.getTopicAsync(); // non-blocking-call / push / async
    promise
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

employee.doLearnAndWork();

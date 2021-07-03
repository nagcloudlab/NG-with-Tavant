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
  getSubjectSync() {
    //.. 10s
    return "sub-1";
  },
  getSubjectAsync() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let sub = "trainer-sub";
        console.log("trainer pushing sub i.e resolving promise");
        resolve(sub); // push

        // console.log("trainer pushing error i.e rejecting promise");
        // reject("ill ans next session");
      }, 3000);
    });
    return promise;
  },
};

const google = {
  getSubjectAsync() {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     // console.log("google pushing sub i.e resolving promise");
    //     // resolve("google-sub");
    //     reject("n/w err");
    //   }, 2000);
    // });

    let sub = "google-sub";
    return Promise.resolve(sub); // 
  },
};

//-------------------------------------------------------------
// Consumer
//-------------------------------------------------------------

const employee = {
  async doLearnAndWork() {
    // const subject = trainer.getSubjectSync(); // pull / blocking-call / sync-call
    // console.log("employee learning " + subject);

    //----------------------------------------------------------------
    // way-1 : using callback
    //----------------------------------------------------------------
    console.log("employee requesting sub on trainer");
    let promise1 = trainer.getSubjectAsync();
    let promise2 = google.getSubjectAsync();
    console.log("employee got promise , defering learning action");

    // Promise.all([promise1, promise2])
    Promise.race([promise1, promise2])
      .then((result) => {
        // console.log("employee learning " + result);
        // return result.join(",");
        return result;
      })
      .then((newResult) => {
        console.log("employee learning " + newResult);
      })
      .catch((err) => {
        console.log("employee : ooops with " + err);
      });

    console.log("employee cont with other work if there");

    //----------------------------------------------------------------
    // way-2 : using async & await
    //----------------------------------------------------------------

    // try {
    //   let result = await trainer.getSubjectAsync();
    //   console.log("employee learning " + result);
    // } catch (e) {
    //   console.log("employee : ooops with " + err);
    // }

    //----------------------------------------------------------------
  },
};

employee.doLearnAndWork();

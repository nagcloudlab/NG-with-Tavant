



// ----------------------------------
// using DOM + Timer Api
// ----------------------------------

const clock1Ele=document.getElementById('clock-1');
const clock2Ele=document.getElementById('clock-2');


function Clock(props){
    let {timeZone}=props;
return `
    <div class="card">
        <div class="card-header">${timeZone}</div>
        <div class="card-body">
            <span class="badge bg-dark">${new Date().toLocaleTimeString('en-US',{timeZone})}</span>
        </div>
    </div>
    `
}


setInterval(() => {
    clock1Ele.innerHTML=Clock({timeZone:'Asia/Kolkata'})
    clock2Ele.innerHTML=Clock({timeZone:'Asia/Dubai'})
}, 1000);
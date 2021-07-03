
// Iterable objects

let items=["item-1","item-2","item-3"]
for(let item of items){
    console.log(item);
}

let idMaker={
    [Symbol.iterator]:function(){
        let id=0;
        return {
            next:function(){
                id++;
                let value=id<=10?id:undefined;
                let done=id<=10?false:true
                return {value,done}
            }
        }
    }
}

for(let id of idMaker){
    console.log(id);
}

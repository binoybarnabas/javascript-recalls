
let userEntered = false;

message = {ifonline:":)",ifoffline:":("};

let p = new Promise(
    (resolve,reject)=>
    {
        if(!userEntered)
        {
            resolve(message["ifonline"]);
        }
        else{
            reject(message["ifoffline"]);
        }

    }
);

p.
    then(
        (msg)=>
        {
            console.log("user is still online" + msg);
        }
    ).
    catch((msg)=>
    {
        console.log("user if offline" + msg);
    });
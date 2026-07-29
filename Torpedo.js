let flooded = false;
let reloaded = false;

function Flood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(flooded == false) {
             flooded = true;
             resolve("Torpedo Tubes Flooded");
          } else {
             reject("Torpedo Tube flooding failed");
          }
        }, 1000);
    });
}

function Reload() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if(flooded == true && reloaded == false) {
            reloaded = true;
            resolve("Torpedo Reloaded");
         } else {
            reject("Torpedo reloading failed");
         }
      }, 2500);
   });    
}

function Fire() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if(reloaded == true) {
               resolve("G7e out!");
           } else {
              reject("Torpedo Launch failed");
           }
        }, 3500);
    });
}

async function Attack() {
    try {
       console.log("Flooding tubes!");
       const step1 = await Flood();
       console.log(step1);
    } catch(error) {
        console.log(error);
    }

    try {
      console.log("Reloading tubes");
      const step2 = await Reload();
      console.log(step2);
    } catch(error) {
        console.log(error);
    }

    try {
      console.log("Waiting for Captain's orders");
      const command = await Fire();
      console.log(command);
    } catch(error) {
        console.log(error);
    }
}

Attack();

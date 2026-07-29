class Carrier {
    Aircrafts = new Set(["F4f Wildcat", "SBD Dauntless"]);
    FlyingAircrafts = [];
    constructor(name, navy) {
        this.name = name;
        this.navy = navy;
    }

    SendBombersOut() {
        return new Promise((resolve, reject) => {
          if(this.Aircrafts.has("SBD Dauntless")) {
              setTimeout(() => {
                 this.Aircrafts.delete("SBD Dauntless");
                 this.FlyingAircrafts.push("SBD Dauntless");
                 resolve("Bombers is now in action");
              }, 1500);
          } else {
            setTimeout(() => {
               reject("Bomber Already flying");
            }, 1500);
          }
        });
    }

    RecoverBombers() {
        return new Promise((resolve, reject) => {
           if(this.Aircrafts.has("SBD Dauntless")) {
            setTimeout(() => {
              reject("Bomber is not flying");
            }, 1500);
           } else {
             setTimeout(() => {
               let index = this.FlyingAircrafts.findIndex(aircraft => aircraft === "SBD Dauntless");
               let bomber = this.FlyingAircrafts.splice(index, 1)[0];
               this.Aircrafts.add(bomber)
               resolve("Bomber recovered");
             }, 1500);
           }
        });
    }

    SendFightersOut() {
      return new Promise((resolve, reject) => {
          if(this.Aircrafts.has("F4f Wildcat")) {
            setTimeout(() => {
              this.Aircrafts.delete("F4f Wildcat");
              this.FlyingAircrafts.push("F4f Wildcat");
              resolve("Fighter is now in action");
            }, 1500);
          } else {
            setTimeout(() => {
             reject("Fighter Already flying");
            }, 1500);
          }
      });
    }

    RecoverFighters() {
       return new Promise((resolve, reject) => {
          if(this.Aircrafts.has("F4f Wildcat")) {
             setTimeout(() => {
                reject("Fighter is not flying");
             }, 1500);
          } else {
            setTimeout(() => {
               let index = this.FlyingAircrafts.findIndex(aircraft => aircraft === "F4f Wildcat");
               let fighter = this.FlyingAircrafts.splice(index, 1)[0];
               this.Aircrafts.add(fighter);
               resolve("Fighter recovered");
            }, 1500);
          }
       });
    }
}

// Definitely not business Enterprise
let e = new Carrier("CVE Enterprise", "US Navy");

e.SendBombersOut().then(status => {
   console.log(status);
}).catch(error => {
   console.log(error);
});

class Galleon {
    captain = "Jack Sparrow";
    cannonsReloaded = false;
    constructor(name, cannonballs) {
        this.name = name;
        this.cannonballs = cannonballs;
    }

    ReloadCannons(callback) {
       setTimeout(() => {
          if(this.cannonballs >= 26) {
            this.cannonsReloaded = true;
            this.cannonballs -= 26;
            console.log(`Cannons has been reloaded Captain ${this.captain}!`);

            callback();
          } else {
            console.log(`We are out of cannonballs`); 
          }
       }, 2000);
    }

    FireCannons() {
        if(this.cannonsReloaded != true) {
            console.log("Cannonballs is not yet reloaded");
        } else {
            this.cannonsReloaded = false; 
            console.log("Fire!");
            console.log(`${this.name}'s cannons roared to life`);
        }
    }

    // manual timing example
    // YouKnowTheThing() {
    //     setTimeout(() => {
    //        this.ReloadCannons();
    //     }, 2000);

    //     setTimeout(() => {
    //      this.FireCannons();
    //     }, 3500);
    // }

    //Automatic timing example 
    YouKnowTheThing() {
        this.ReloadCannons(() => {
           this.FireCannons();
        });
    }
}

let g = new Galleon("Neptunes Chaos", 800);
g.YouKnowTheThing();

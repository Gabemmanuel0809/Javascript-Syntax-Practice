class Paratrooper {
    hasJumped = false;
    isFlying = false;
    onGround = false;

    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    Jump() {
        if(this.hasJumped != true) {
          this.hasJumped = true;
          console.log(`${this.name} jumped off the aircraft`);
        } else {
          console.log("Already jumped off the aircraft");
        }   
    }

    Glide() {
        if(this.hasJumped != true) {
            console.log("Action Failed");
        } else {
            this.isFlying = true;
            console.log(`${this.name} begins to glide in the air`);
        }
    }

    Land() {
        if(this.onGround != true && this.isFlying == true) {
            this.onGround = true;
            this.isFlying = false;
            console.log(`${this.name} landed succesfully`);
        } else if(this.isFlying == false) {
           console.log("Action failed, must be on air first");
        } else {
            console.log("Action failed, Already on ground");
        }
    }

    Attack() {
        if(this.onGround != true) {
            console.log("Action Failed, Must be on ground first");
        } else {
            console.log(`${this.name} begins to attack`);
        }
    }

    Info() {
        console.log(`Soldier Name: ${this.name}`);
        console.log(`Weapon: ${this.weapon}`);
    }
}

class Aircraft {
    constructor(paratrooper, model, squadron) {
       this.paratrooper = paratrooper;
       this.model = model;
       this.squadron = squadron;
    }

    ReleaseSoldier() {
        this.paratrooper.Jump();
    }
}

let p = new Paratrooper("Jason", "MP-5");

let a = new Aircraft(p, "Hind", "Squadron no.457");
a.ReleaseSoldier();
p.Glide();
p.Land();
p.Attack();

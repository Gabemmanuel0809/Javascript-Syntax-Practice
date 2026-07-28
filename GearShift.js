class Car {
    neutral = true;
    gear1 = false;
    gear2 = false;
    gear3 = false;
    gear4 = false;

    constructor(name) {
        this.name = name;
    }

    ShiftG1(callback) {
       if(this.neutral == true) {
           this.neutral = false;
           this.gear1 = true;
           console.log("Gear Status: 1");

           setTimeout(callback, 500);
       } else {
          console.log("Action failed");
       }
    }

    ShiftG2(callback) {
       if(this.gear1 == true) {
           this.gear1 = false;
           this.gear2 = true;
           console.log("Gear Status: 2");

           setTimeout(callback, 1000);
       } else {
          console.log("Action failed");
       }
    }

    ShiftG3(callback) {
       if(this.gear2 == true) {
           this.gear2 = false;
           this.gear3 = true;
           console.log("Gear Status: 3");

           setTimeout(callback, 1500);
       } else {
          console.log("Action failed");
       }
    }

    shiftG4() {
        if(this.gear3 == true) {
            this.gear3 = false;
            this.gear4 = true;

            console.log("Gear Status: 4");
        } else {
            console.log("Action failed");
        }
    }

    AutoShift() {
        this.ShiftG1(() => {
            this.ShiftG2(() => {
                this.ShiftG3(() => {
                    this.shiftG4();
                });
            });
        });
     }
}

let c = new Car("Firebird Trans");
c.AutoShift();

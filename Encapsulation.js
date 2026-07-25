class Criminal {
	#fullname;
	#age;
	#address;
	#casefiled;
	#prisontime;
	#accesscode = 16894536;
	
	constructor(fullname, age, address, casefiled, prisontime) {
		this.#fullname = fullname;
		this.#age = age;
		this.#address = address;
		this.#casefiled = casefiled;
		this.#prisontime = prisontime;
	}
	
	AccessInfo(input) {
		if(input == this.#accesscode) {
			return {
				Name: this.#fullname, 
				Age: this.#age,
				Address: this.#address,
				Case: this.#casefiled,
				PrisonTime: this.#prisontime
			};
		} else {
			return "Access Denied";
		}
	}
	
	Bail(input) {
		if(input == this.#accesscode) {
			if(this.#casefiled == "murder" || this.#casefiled == "Kidnapping" || this.#casefiled == "Plunder" || this.#casefiled == "Rape") {
				 return "Bail Denied, Case un-bailable";
			} else {
				this.#casefiled = "N/A";
				this.#prisontime = 0;
				return "Bail Success";
		    }
		} else {
			return "Access Denied";
	    }
	}
	
	IncreaseSentence(input) {
		if(input == this.#accesscode && this.#casefiled != "N/A") {
			this.#prisontime += 2;
			return "Prison time increased";
		} else if(input == this.#accesscode && this.#casefiled == "N/A") {
			return "Case was bailed";
		} else {
			return "Access Denied";
	    }
	}
	
	DecreaseSentence(input) {
		if(input == this.#accesscode && this.#casefiled != "N/A") {
			this.#prisontime -= 2;
			return "Prison time decreased";
		} else if(input == this.#accesscode && this.#casefiled == "N/A") {
			return "Case was bailed";
	    } else {
			return "Access Denied";
	    }
	}
}

let p = new Criminal("ASKDGk", 42, "ajkhdfka", "Theft", 5);
console.log(p.Bail(16894536));
console.log(p.AccessInfo(16894536));
console.log(p.DecreaseSentence(16894536));

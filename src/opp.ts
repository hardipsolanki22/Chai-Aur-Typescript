// class Chai {
//     fleover: string;
//     // price: number;

//     // constructor(flevour: string, price: number) {
//     //     this.fleover = flevour;
//     //     this.price = price
//     // }

//     constructor(flevour: string) {
//         this.fleover = flevour;
//         console.log(this)
//     }
// }

// const masalaChai = new Chai("masala")
// masalaChai.fleover = "masala"


class Chai {
    public flev: string = "masala"

    private secretIngredients = "Cardamom"

    reveal() {
        return this.secretIngredients;
    }


}

class Shope {
    // public means any one can acces that
    // private  menas within class can acces that
    // protected means staf can only access that
    protected shopeName = "Chai corner"
}

class Branch extends Shope {
    getName() {
        return this.shopeName
    }
}

new Branch().getName()

const c = new Chai()
console.log(c.reveal())

class Walate {
    // also private
    #balance = 100

    getBanalce() {
        return this.#balance
    }
}

const w = new Walate()
// w.getBanalce()

class Cup {
    readonly capacity: number = 250

    constructor(capa: number) {
        this.capacity = this.capacity
    }

    getCapacity() {
        return this.capacity
    }
}

const c1 = new Cup(400) // cant chnage beacause of readonly member

console.log("capacity: ", c1.getCapacity())

// conteller get (getter setter)

class ModernChai {
    // as a best prectice we use _ for private member 
    private _sugar = 2

    // you can access this using withou use of _ as a method in getter and seter
    get sugar() {
        return this._sugar
    }
    set sugar(value: number) {
        if (value > 5) throw new Error("Too sweet")
        this._sugar = value
    }

}

const cus1 = new ModernChai()
cus1.sugar = 6
console.log("sugar value: ", cus1.sugar)

// static member
class ExChai {
    static shopeName = "chaiCode caffe"

    constructor(public flevor: string) {

    }
}

// You can acess value withou create of object 
console.log(ExChai.shopeName);

// if you create class but dont create an object then
abstract class Drink {
    abstract make(): void
    // abstract Masala: string
}

class MyChai extends Drink {
    make(): void {
        console.log("Brewing chai")
    }
    // Masala: string;
}

// composition you can use insted of inheritance
class Heater {
    heat() { }
}

class MakeChai {
    constructor(private heater: Heater) { }
    make() {
        this.heater.heat()
    }
}


/**
 *
 * @param {string} name
 * @param {number} age
 */

function User (name, age) {

    this.name = name;
    this.age = age;
    this.car = [];

    this.userInfo = () => {
        console.log(`Name: ${this.name} age: ${this.age}`)
    }
}

const firstUser = new User('Anna', 30)
firstUser.userInfo()

const secondUser = new User('Sandrina', 25)
secondUser.userInfo()

const thirdUser = new User('Nastya', 35)
thirdUser.userInfo()


function Car (mark, model, year, number) {

    this.mark = mark;
    this.model = model;
    this.year = year;
    this.number = number;
    this.owner = [];

    this.getOwner = function (owner) {
        if (owner.age >= 18){
            this.owner.push(owner);
            owner.car.push(this)
        } else {
            console.log(`${owner.name} You are under 18 y.o.`)
        }
    }

    this.carInfo = function () {

        console.log(`Mark: ${this.mark}, Model: ${this.model}, Year: ${this.year}, Number: ${this.number}`)

        this.owner.forEach(item => item.userInfo())

    }
}

const firstCar = new Car('BMW', 'M4', 2022, 'AI7777AI')
firstCar.getOwner(firstUser)
firstCar.carInfo()

const secondCar = new Car('Bugatti', 'Chiron', 2020, 'AI6666AI')
secondCar.getOwner(secondUser)
secondCar.carInfo()

const thirdCar = new Car('Rolls-Royce', 'Phantom', 2021, 'AI9999AI')
thirdCar.getOwner(thirdUser)
thirdCar.carInfo()

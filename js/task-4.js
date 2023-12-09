
const getTotalBalanceByGender = (users, gender) =>  
  
  users
    .filter(user => user.gender === gender)
    .reduce((tolal, user) => tolal + user.balance, 0);
   


const allUsers = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  },

];

console.log(getTotalBalanceByGender(allUsers, "male")); // 12053;

console.log(getTotalBalanceByGender(allUsers, "female")); // 8863;




/* ========= МОДУЛЬ 6 ========================================== */


/* Виконай рефакторинг методів об'єкта pizzaPalace, 
розставивши відсутні this в місцях звернення до властивостей і методів об'єкта. */

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace.order("Smoked"));// рядок "Order accepted, preparing «Smoked» pizza"
console.log(pizzaPalace.order("Four meats")); // рядок "Order accepted, preparing «Four meats» pizza"
console.log(pizzaPalace.order("Big Mike")); // "Sorry, there is no pizza named «Big Mike»"
console.log(pizzaPalace.order("Viennese")); // рядок "Sorry, there is no pizza named «Viennese»"\
/* =============================================================================================== */


/* =============================================================================================== */

//Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.
// Використовується метод `Object.create()`

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;


console.log(child.hasOwnProperty("age")); // повертає `true`
console.log(child.hasOwnProperty("name")); // повертає `true`
console.log(parent.hasOwnProperty("surname")); // повертає `true`

console.log(child.hasOwnProperty("heritage"));  // повертає `false`

console.log(child.surname); // повертає `"Moore"`
console.log(child.heritage); // повертає `"Irish"`
console.log(parent.hasOwnProperty("heritage")); // повертає `true`
console.log(child.name); // повертає `"Jason"`
console.log(child.age); // повертає `27`
console.log(child.hasOwnProperty("surname")); // повертає `false`

console.log(parent.isPrototypeOf(child)); // повертає `true` - ЯВЛЯЕТСЯ ПРОТОТИПОМ !!!
/* =============================================================================================== */




/* =============================================================================================== */

//Зміни код, побудувавши ланцюжок прототипів таким чином, 
// щоб об'єкт ancestor був прототипом для parent, 
// а той, своєю чергою, був прототипом для child.
// Використовується метод `Object.create()`

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

const parent1 = Object.create(ancestor);
parent1.name = "Stacey";
parent1.surname = "Moore";
parent1.age = 54;

const child1 = Object.create(parent1);
child1.name = "Jason";
child1.age = 27;

console.log(parent1.surname); //` повертає `"Moore"`
console.log(parent1.isPrototypeOf("child")); //` повертає`false`

console.log(ancestor.hasOwnProperty("heritage")); // повертає `true`

console.log(parent1.hasOwnProperty("surname")); // повертає `true`
console.log(parent1.heritage); // повертає `"Irish"`
console.log(ancestor.heritage); // повертає `"Irish"`
console.log(child1.hasOwnProperty("heritage")); // повертає `false`
console.log(ancestor.isPrototypeOf("parent")); // повертає `false`
console.log(ancestor.surname); // повертає `"Dawson"`

console.log(child1.surname); // повертає `"Moore"`
console.log(ancestor.hasOwnProperty("surname")); // повертає `true`
console.log(child1.heritage); // повертає `"Irish"`
console.log(child1.hasOwnProperty("surname")); // повертає `false`
console.log(parent1.hasOwnProperty("heritage")); // повертає `false`
/* =============================================================================================== */



/* =============================================================================================== */

/*Додай класу Car метод constructor, який приймає три параметри:

    brand - марка автомобіля
    model - модель автомобіля
    price - ціна автомобіля

Клас Car повинен створювати об'єкт з одноіменними властивостями brand, model і price, які отримують 
свої значення з аргументів, переданих при створенні 

нового екземпляра за допомогою оператора new. */


class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

console.log(new Car("Nissan", "Murano", 31700)); //об'єкт `{brand: "Nissan", model: "Murano", price: 31700}`

console.log(new Car("Audi", "Q3", 36000)); // утвориться об'єкт `{brand: "Audi", model: "Q3", price: 36000}`

console.log(new Car("BMW", "X5", 58900));  // об'єкт `{brand: "BMW", model: "X5", price: 58900}`
/* =============================================================================================== */



/* =============================================================================================== */

/* Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - 
   об'єкт з властивостями   brand, model і price. 
   Деструктуризуй об'єкт в сигнатурі (підписі) конструктора. */



class Car1 {
  constructor({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

console.log(new Car1({ brand: "BMW", model: "X5", price: 58900 })); // утвориться об'єкт 
                                                       //`{brand: "BMW", model: "X5", price: 58900}`
console.log(new Car1({ brand: "Audi", model: "Q3", price: 36000 })); // утвориться об'єкт 
                                                       //`{brand: "Audi", model: "Q3", price: 36000}`
console.log(new Car1({ brand: "Nissan", model: "Murano", price: 31700 })); // утвориться об'єкт
                                                      //`{brand: "Nissan", model: "Murano", price: 31700}`
                                             
 /* =============================================================================================== */ 
 
 
 
 /* =============================================================================================== */
 
 /* Додай класу Car два методи.

    getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
    changePrice(newPrice) - оновлює значення властивості price в об'єкта, 
                            який буде його викликати на значення параметра newPrice. */
                            
                           

class Car2 {
    constructor({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }
}   

/* В класі `Car` оголошений метод`changePrice`
В класі `Car` оголошений метод `getPrice`
Метод `getPrice` повертає значення властивості `price` екземпляра класу, який його викликає
Метод `changePrice` змінює значення властивості `price` екземпляра класу, який його викликає
/* =============================================================================================== */




/* =============================================================================================== */

// Властивість `brand` в класі `Car` оголошена приватною
// В екземпляра відсутня публічна властивість `brand`

/*Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, 
і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

    getBrand() - повертає значення приватної властивості brand.
    changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.*/


class Car3 {
  #brand;
  
  constructor({brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
   return this.#brand; 
  }

  changeBrand(newBrand) {
  this.#brand = newBrand;
}
  
  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}


console.log(new Car3({ brand: "Nissan", model: "Murano", price: 31700 })); //` утвориться об'єкт 
                                                                    //`{ model: "Murano", price: 31700 }`
console.log(new Car3({ brand: "Audi", model: "Q3", price: 36000 })); //` утвориться об'єкт 
                                                                      //`{ model: "Q3", price: 36000 }`
console.log(new Car3({ brand: "bmw", model: "X5", price: 58900 })); // утвориться об'єкт
/* =============================================================================================== */




/* =============================================================================================== */                                                                      //`{ model: "X5", price: 58900 }`

/*Виконай рефакторинг класу Car
    Додатково до приватної властивості #brand 
    зроби приватними властивості model і price.
    Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи 
    на геттери та сеттери brand, model і price, для взаємодії з приватними властивостями.*/                                                                  
 

class Car4 {
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
} 

/* =============================================================================================== */


/* =============================================================================================== */

/* Виконай рефакторинг класу Car. 
Додай публічну статичну властивість maxPrice зі значенням 
число 50000 - максимально допустима ціна автомобіля.*/

class Car5 {
  #price;
  static maxPrice = 50000;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.maxPrice) {
      this.#price = newPrice
    }
  }
}

const audi = new Car5({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

/* =========================== !! !! !! ============================================= */



/* =============================================================================================== */

/* Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. 
 Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

    Якщо ціна автомобіля перевищує максимальну, 
    метод повинен повернути рядок "Error! Price exceeds the maximum".
    
    В іншому випадку 
    метод повинен повернути рядок "Success! Price is within acceptable limits".
 */

class Car6 {
  static #maxPrice = 50000;
  static checkPrice(price) {
    if (price > Car6.#maxPrice) {
      return `Error! Price exceeds the maximum`;
    } else {
      return `Success! Price is within acceptable limits`;
    }
  }
  constructor({ price }) {
    this.price = price;
  }
}

const audi6 = new Car6({ price: 36000 });
const bmw6 = new Car6({ price: 64000 });

console.log(Car6.checkPrice(audi6.price)); // "Success! Price is within acceptable limits"
console.log(Car6.checkPrice(bmw6.price)); // "Error! Price exceeds the maximum"
/* =============================================================================================== */



/* =============================================================================================== */

/* Додай класу Admin метод constructor, 
який приймає один параметр - об'єкт налаштувань з двома властивостями email і access. 

Додай класу Admin публічну властивість access, 
значення якої буде передаватися під час виклику конструктора.

Оголошений клас Admin
Клас Admin наслідує від класу User
Клас Admin містить публічну статичну властивість role
Клас Admin містить метод constructor з параметром у вигляді об'єкта {email, access}

В класі Admin в конструкторі для властивості email використовується 
звернення до конструктора батьківського класу */



class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  constructor({email, access}) {
    super(email);
    this.access = access;
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"
/* =============================================================================================== */



/* !!!!!! сложная ФИНАЛЬНАЯ задача дальше на таск-5    !!!!!!!!! */



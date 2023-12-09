/* =============================================================================================== */

/* Додай класу Admin наступні властивості і методи.

    Публічну властивість blacklistedEmails для зберігання 
    чорного списку поштових адрес користувачів. 
    Значення за замовчуванням — це порожній масив.

    Публічний метод blacklist(email) для додавання пошти у чорний список. 
    Метод повинен додавати значення параметра email в масив, 
    що зберігається у властивості blacklistedEmails.

    Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. 
    Метод повинен перевіряти наявність значення параметра email в масиві,
    що зберігається у властивості blacklistedEmails, 
    і повертати true або false.
 */


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
  
  constructor({ email, access }) {
    super(email);
    this.access = access;
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted (email) {
   return this.blacklistedEmails.includes(email);
    
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
/* =============================================================================================== */




/* =========== ПЕРВАЯ ЗАДАЧА ДЗ 6 ======================================================= */


const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
  
    getBalance() {
        return this.balance;
    },
    getDiscount() {
        return this.discount;
    },
    setDiscount(value) {
        return this.discount = value;
    },
    getOrders() {
        return this.orders;
    },
  
    addOrder(cost, order) {
        this.orders.push(order);
        //this.balance = this.balance - cost + cost * this.discount;
        this.balance -= cost - cost * this.discount;
    },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15

customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

/* =============================================================================================== */


/* =========== 2      ЗАДАЧА ДЗ 6 ======================================================= */

class Storage {
    
    #items;

    constructor(items) {
        this.#items = items;
    }

    getItems() {
    return this.#items;
    }
    
    addItem(newItem) {
    this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        const ind = this.#items.indexOf(itemToRemove);
        return ind !== -1 ? this.#items.splice(ind, 1) : 0;
    }
};


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
storage.removeItem("Nanitoids");
console.log(storage.getItems()); // ["Antigravitator", "Droid"]
storage.removeItem("Gromo");
console.log(storage.getItems()); // ["Antigravitator", "Droid"]
/* =============================================================================================== */


class StringBuilder {
   
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }
    
    getValue() {
    return this.#value;
    }

    padEnd(str) {
        return this.#value = this.#value + str;
    }

    padStart(str) {
        return this.#value = str + this.#value;
    }

    padBoth(str) {
        return this.#value = str + this.#value + str;
    }
};

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


// додатково ще вирішуєте задачки по джс? 
// Для початку рекомендую freeCodeCamp, 
//dалі можна codeWars(але там вже вище рівень).
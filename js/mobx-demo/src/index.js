import { observable, computed } from "mobx";

class OrderLine {
    @observable price = 0;
    @observable amount = 1;

    @computed get total() {
        return this.price * this.amount;
    }
}

const line = new OrderLine();
console.log("price" in line); // true
console.log(line.hasOwnProperty("price")); // false，price 属性是定义在类上的，尽管值会被存储在每个实例上。
line.amount = 43;
console.log(line.hasOwnProperty("price")); // true, 现在所有的属性都定义在实例上了。
import { Order } from "./models/Order";
import {Restaurant} from "./services/RestuarantManager"

const ganSipur: Restaurant = new Restaurant()
const table1 = ganSipur.addTable(4);
ganSipur.addTable(8);
ganSipur.addTable(4);
ganSipur.addTable(6);
ganSipur.addTable(2);
ganSipur.addCustomer(1111,"Yossi");
ganSipur.addCustomer(2222,"David");
ganSipur.addCustomer(3333,"Sara");
ganSipur.addCustomer(4444,"Moshe");
const order1 = ganSipur.addOrder(1111, 4);
const order2 = ganSipur.addOrder(2222, 8);
const order3 = ganSipur.addOrder(3333, 6);
const order4 = ganSipur.addOrder(4444, 8);
order1?.addItem("Pizza", 50);
order1?.addItem("Salad", 30);
order1?.addItem("pukacha", 50);
order2?.addItem("pukacha", 50);
order2?.addItem("Salad", 30);
order3?.addItem("mukrmim", 50);
order3?.addItem("Salad", 30);
order4?.addItem("mukrmim", 50);
order4?.addItem("lazaniya", 50);
order4?.addItem("Salad", 30);
const price1= order1?.closeOrder();
const price2=order2?.closeOrder();
const price3=order3?.closeOrder();
const price4=order4?.closeOrder();



console.log("price1: ", price1);
console.log("price2: ", price2);
console.log("price3: ", price3);
console.log("price4: ", price4);

//HW
//1. Add export and import to the file that need
//2. Use the restoraunt in App file (this one)
//  1. Add tables (at list 3)
//  2. Add customerws (at least 2)
//  3/ create orders (at least 3) - one of them - will not have place
//  4. add items to the orders (at least 2)
//  5. close the orders
//3. Check that the results are as expected
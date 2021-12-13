import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplates.js";
import { Payement } from "./classes/Payements.js";
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const detail = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, detail.value, amount.valueAsNumber);
    }
    else {
        doc = new Payement(tofrom.value, detail.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
const me = {
    name: "jeff",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spend ${amount}`);
        return amount;
    },
};
// const greetPerson = (person: IsPerson) => {
//     console.log(`hello ${person.name}`)
// }
// 
// greetPerson(me)
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// 
// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payement('peach', 'être là', 200)

import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplates.js";
import { Payement } from "./classes/Payements.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const detail = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === "invoice"){
        doc = new Invoice(tofrom.value, detail.value, amount.valueAsNumber)
    } else {
        doc = new Payement(tofrom.value, detail.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')

    })
    
// exemple d'interface. Permet de calibrer un constructeur
    
interface IsPerson {
    name:string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: "jeff",
    age: 20,
    speak(text:string): void {
        console.log(text)
    },
    spend(amount:number): number {
        console.log(`I spend ${amount}`);
        return amount
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

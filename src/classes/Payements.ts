import { HasFormatter } from "../interfaces/HasFormatter"

export class Payement implements HasFormatter {
    constructor(
        readonly recu: string,
        private details: string,
        public amount: number,
    ) {}
    format() {
        return `${this.recu} dû ${this.amount}€ pour avoir " ${this.details}" `
    }
}
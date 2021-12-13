export class Payement {
    constructor(recu, details, amount) {
        this.recu = recu;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recu} dû ${this.amount}€ pour avoir " ${this.details}" `;
    }
}

class Dividers {
    private dividers: number[] = [];
    private dividersWithMinuses: number[] = [];
    private dividersSetString: string = "";
    private dividersSetWithMinusesString: string = "";

    private upperLimit: number = 1000;

    constructor(private num: number) {
        if (num === 0) {
            this.dividersSetString = "Nieskończenie wiele dzielników";
            this.dividersSetWithMinusesString = "Nieskończenie wiele dzielników";
        }
        if (num % 1 === 0 && num > 0) {
            this.setDividers();
            this.setDividersSetString();
            this.setDividersSetWithMinusesString();
        }
    }

    private setDividers() {
        for (let i = 1; i <= this.num; i++) {
            if (this.num % i === 0) {
                this.dividers.push(i);
                this.dividersWithMinuses.push(-i, i);
            }
        }
    }

    private setDividersSetString() {
        this.dividersSetString = `{${this.dividers.join(", ")}}`;
    }

    private setDividersSetWithMinusesString() {
        this.dividersSetWithMinusesString = `{${this.dividersWithMinuses.join(", ")}}`;
    }

    getDividers(): number[] {
        return this.dividers;
    }

    getDividersWithMinuses(): number[] {
        return this.dividersWithMinuses;
    }

    getDividersSetString(): string {
        return this.dividersSetString;
    }

    getDividersSetWithMinusesString(): string {
        return this.dividersSetWithMinusesString;
    }

    getNum(): number {
        return this.num;
    }
}

export default Dividers;

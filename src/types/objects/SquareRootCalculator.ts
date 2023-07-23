class SquareRootNumber {
    constructor(private num: number) {}
    
    getStep1(): string{
        return `\\sqrt{${this.num}}`
    }

    getStep2():string{
        let divident = this.num;
        const factors = [];
        if (divident === 0) {
          return `0`;
        }
        if (divident === 1) {
            return `1`;
        }
        let divider = 2;
        while (divider <= divident) {
          if (divident % divider === 0) {
            factors.push(divider);
            divident = divident / divider;
            divider = 1;
          }
          divider += 1;
        }
        const step2 = factors.join(" \\cdot ");
        return `\\sqrt{${step2}}`
    }





  }
    
  export default SquareRootNumber;
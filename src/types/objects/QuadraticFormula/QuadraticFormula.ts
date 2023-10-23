import Fraction from "../Fraction/Fraction";

class QuadraticFormula {
    private p: Fraction = new Fraction(1,1);
    private q: Fraction = new Fraction(1,1);

  
    constructor(private a: number, private b: number, private c: number) {
        this.setP(a,b,c);
    }

    private setP = (a: number, b: number, c: number) =>{
        this.p = new Fraction((-1)*b, 2*a);
    }

    getP = () =>{
        return this.p.getFractionString();
    }
}
export default QuadraticFormula;
  
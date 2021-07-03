

/*

 shop-IT
 ---------

    Billing

        - getTotalPrice(cart)

    PriceMatrix

        - getPrice(item)


*/


//-----------------------------------------------
// Team-1 : PriceMatrix
//-----------------------------------------------

interface PriceMatrix {
    getPrice: (string) => number
}

class PriceMatrix_v1 implements PriceMatrix {
    getPrice(item: string) {
        //...
        return 100.00;
    }
}
class PriceMatrix_v2 implements PriceMatrix {
    getPrice(item: string) {
        //...
        return 100.00;
    }
}


//-----------------------------------------------
// Team-2 : Billing
//-----------------------------------------------

/**
 * 
 * 
 * 
 *  design & performance issues
 *  --------------------------
 * 
 *  => tight-coupling b/w dependent & dependency
 *          -> can't extend with new features easily
 *  
 *  => too many duplicate dependency instances created & destroyed
 *          -> resource consumption ( memory & cpu ) is high
 *  
 *  => Unit-Testing not possible 
 *          -> dev & bug-fix slow
 * 
 * 
 * why these issues ?
 * 
 *      ==> dependent itself creating it's own dependency
 * 
 * solution:
 * 
 *      => dont create dependency in dependent's home, get from factory
 * 
 * limitation on factory lookup:
 * 
 *      => factory-location tight-coupling
 * 
 * 
 * best solution:
 * 
 *      => dont create & lookup, inject by 'third-party'  ( IOC ) Inversion Of Control 
 * 
 * 
 * 
 * How to implement IOC ?
 * 
 *  => using DI
 * 
 *          => via constructor
 *          => via methods 
 * 
 * 
 * 
 * 
 * 
 */



class BillingImpl {

    // private priceMatrix: PriceMatrix;

    // constructor(priceMatrix: PriceMatrix) {
    //     this.priceMatrix = priceMatrix
    // }

    // or

    constructor(private priceMatrix: PriceMatrix) {}

    getTotalPrice(cart: Array<string>) {
        let total = 0;
        for (let item of cart) {
            total += this.priceMatrix.getPrice(item)
        }
        return total;
    }
}

//-----------------------------------------------

const pmV1:PriceMatrix=new PriceMatrix_v1();
const pmV2:PriceMatrix=new PriceMatrix_v2();

const billing = new BillingImpl(pmV2);

const cart1: Array<string> = ["123", "456", "789"]
const totalPrice = billing.getTotalPrice(cart1);
console.log(totalPrice);

//-----------------------------------------------
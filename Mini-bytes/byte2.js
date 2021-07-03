/*

 shop-IT
 ---------

    Billing

        - getTotalPrice(cart)

    PriceMatrix

        - getPrice(item)


*/
var PriceMatrix_v1 = /** @class */ (function () {
    function PriceMatrix_v1() {
    }
    PriceMatrix_v1.prototype.getPrice = function (item) {
        //...
        return 100.00;
    };
    return PriceMatrix_v1;
}());
var PriceMatrix_v2 = /** @class */ (function () {
    function PriceMatrix_v2() {
    }
    PriceMatrix_v2.prototype.getPrice = function (item) {
        //...
        return 100.00;
    };
    return PriceMatrix_v2;
}());
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
var BillingImpl = /** @class */ (function () {
    function BillingImpl(priceMatrix) {
        this.priceMatrix = priceMatrix;
    }
    BillingImpl.prototype.getTotalPrice = function (cart) {
        var total = 0;
        for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
            var item = cart_1[_i];
            total += this.priceMatrix.getPrice(item);
        }
        return total;
    };
    return BillingImpl;
}());
//-----------------------------------------------
var pmV1 = new PriceMatrix_v1();
var pmV2 = new PriceMatrix_v2();
var billing = new BillingImpl(pmV2);
var cart1 = ["123", "456", "789"];
var totalPrice = billing.getTotalPrice(cart1);
console.log(totalPrice);

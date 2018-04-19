export class Product {
    prId: Number;
    productName: String;
    description: String;
    category: String;
    price: Number;
    prWidth: Number;
    prHeight: Number;
    prDepth: Number;
    imgsrc: String;

    constructor(prId: Number, pn: String, desc: String, cat: String, pr: Number, 
        prWidth: Number, prHeight: Number, prDepth: Number, img: String) {
        this.prId = prId;
        this.productName = pn;
        this.description = desc;
        this.category = cat;
        this.price = pr;
        this.prWidth = prWidth;
        this.prHeight = prHeight;
        this.prDepth = prDepth;
        this.imgsrc = img;
    }
}
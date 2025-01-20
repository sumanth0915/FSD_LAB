class Rectangle{
    constructor(length,width) {
        this.length=length
        this.width=width
    }
    area(){
        console.log(`area=${this.length*this.width}`)
    }
}
let rect=new Rectangle(5,10);
rect.area();

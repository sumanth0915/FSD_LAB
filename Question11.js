class Animal{
    speek()
    {
        console.log("Animal here")
    }
}
class Dog extends Animal{
    speek()
    {
        console.log("Dog here")
    }
}
let a=new Animal();
let b=new Dog();
a.speek()
b.speek();
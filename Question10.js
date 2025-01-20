class BankAccount{
    constructor(accountHolder,balance)
    {
        this.accountHolder=accountHolder
        this.balance=balance
    }
    deposit(amount)
    {
        this.balance=this.balance+amount
        console.log("Balance:",this.balance)
    }
    withdraw(amount)
    {
        if(amount<this.balance){
            this.balance=this.balance-amount
            console.log("Balance:",this.balance)
        }
            else    
            console.log("Insufficeient balance")
    }
    transfer(account,amount)
    {
        if(this.balance>amount)
        {
            this.balance=this.balance-amount
            console.log("Money trandfereed to",account)
            console.log("Balance:",this.balance)
        }
        else{
            console.log("Insufficeient balance")
        }
    }
}
let a=new BankAccount("Rahul",1000)
a.deposit(500)
a.withdraw(200)
a.transfer("10-45-5",500)
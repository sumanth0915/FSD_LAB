let a=parseFloat(prompt("Enter thr operand 1"))
let b=parseFloat(prompt("Enter thr operand 2"))
let c=prompt("Enter the opernad")
let res
if(c=='+')
{
    res=a+b
}
else if(c=='-')
{
    res=a-b
}
else if(c=='*')
{
   res=a*b
}
else if(c=='/')
{
    if(b==0)
    {
        alert("Division by zero is not Possible")
    }
    else{
        res=a/b
    }
}
else{
    alert("Error occures")
}
alert(res)
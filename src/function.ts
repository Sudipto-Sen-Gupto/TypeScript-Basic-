// function is non primitive data type. which is mutable means changeable

//traditional function and arrow function

function add(a:number,b:number):number{
      return a+b
    }

    console.log(add(2,4));


   const subs =(a:number,b:number):number=>a-b

   console.log(subs(50,24));


   const object={
           DeviceName:"Mobile",
           Price:40000,
           Company:'Sony',

           //function in object
           totalPrice(tax:number):number{
                     const totalValue=this.Price+tax
                     return totalValue
           }
   }
    console.log(object.totalPrice(400));

    const arr:number[]=[4,5,6,7,8]

    const squareArr=arr.map((element:number):number=>element*element)
    console.log(squareArr);
    
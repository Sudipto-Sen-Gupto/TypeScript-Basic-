//type alias don't need to call always data type .We can reduce this by using type alias method

//if we use type all time then it will take more time so we can use type alias
//  const user1 :{
//               name:string;
//               age:number;
//               subject:{
//                    101:'physics';
//                    102:'biology';
//                    103:'chemistry';
//                    104:'highermath';
//               };
//               gender:'male'|'female';
//               address:{
//                     district:string;
//                     division:string;
//               }
              
//  }
 
 

//object type alias
type User={
    name:string;
              age:number;
              subject:{
                   101:'physics';
                   102:'biology';
                   103:'chemistry';
                   104:'highermath';
              };
              gender:'male'|'female';
              address:{
                    district:string;
                    division:string;
              }
}  

 const user1:User={
              
       name:"Saurav Khanna",
       age:26,
       subject:{101:'physics',
                   102:'biology',
                   103:'chemistry',
                   104:'highermath',
            },
            gender:'male',
            address:{
                district:"Khulna",
                division:"Kushtia"
            }
 }

 const user2:User={
    
       name:"Pallabi Guho",
       age:26,
       subject:{101:'physics',
                   102:'biology',
                   103:'chemistry',
                   104:'highermath',
            },
            gender:'female',
            address:{
                district:"Khulna",
                division:"Kushtia"
            }
 } 

//   console.log(user1,user2);


//boolean type alias
  type IsMarried= boolean
  const isMarried:IsMarried=true;
//   console.log(isMarried);

  //function type alias

  type Parameter=(num1:number,num2:number)=>number;

  const add:Parameter=(num1,num2)=>num1+num2
  console.log(add(2,2));
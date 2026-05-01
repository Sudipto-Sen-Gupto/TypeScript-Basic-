
//question mark uses for ternary operator ,Nullish Coalescing,optional chaining

//ternary operator

type Age=number;

const voter=(age:Age)=>{
    //    if(age>18){
    //     return 'You are eligible to give vote'
    //    }
    //    else 
    //     return 'You are not eligible,You age is less 18'

    const voteEligibility=age>18? 'You are eligible to give vote':'You are not eligible' 
    return voteEligibility
}
 console.log(voter(17)); 


 //nullish coalescing
//If the left side is null or undefined, then use the right side value
const theme=null;
const check=theme ?? 'Dark  mode'
console.log(check);


const user:{
          name:string;
          id:number;
          cgpa:number;
          address?:string;
}={ 
      name:'Gaurav Sen gupto',

      id:40,
      cgpa:3.75,

}

console.log(user.address); // this will return undefined that's why the whole code can be destroyed thats why we can use optional chaining
console.log(user?.address);

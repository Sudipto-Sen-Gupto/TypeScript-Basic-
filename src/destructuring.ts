
// destructuring for array and object


//object destructuring
const myDetails={
          Name:'Gaurav Sen Gupto',
          Age:27,
          CGPA:3.75,
          Subject:{
              CSE_1101:'Computer Fundamental',
              CSE_1102:'Computer Fundamental Lab',
              CSE_3102:'Operating System'
          }
}

const {Age:Myage}=myDetails   //name alias we cannot set type inside destructuring because the same syntax is used for name alias
console.log(Myage);
const{Subject:{CSE_1101}}=myDetails
console.log(CSE_1101);


//Array destructuring 

const arr=['Cat','Dog','Mare','Buck','Pig']
//  console.log(arr[2]);
const[,,,d,]=arr
console.log(d);
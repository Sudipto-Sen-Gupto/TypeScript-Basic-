
// destructuring for array and object

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

const {age}=myDetails
console.log(age);
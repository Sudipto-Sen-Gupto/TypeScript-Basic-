
 const user:{Profession:'Technical world'; // literal data type not changeable
    First_name:string;
     Last_name?:string; //optional chaining
      isMarried:boolean}=
      
      {

        Profession:'Technical world',
    First_name:"gaurav",
   
    isMarried:false
 }

 user.First_name='Sudipto'
 user.Profession='bcs'
 console.log(user);


//  const user:{readonly Profession:string; // access modify not changeable
//     First_name:string;
//      Last_name?:string; //optional chaining
//       isMarried:boolean}=
      
//       {

//         Profession:'Technical world',
//     First_name:"gaurav",
   
//     isMarried:false
//  }

//  user.First_name='Sudipto'
//  user.Profession='cook'
//  console.log(user);
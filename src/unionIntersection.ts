 

  type UserRole='Admin'|'Manager'|'User'

  const adminDashBoard=(role:UserRole)=>{
          if(role==='Admin'){
                return 'Admin Dashboard'
          }
          else if(role==="Manager"){
                 return 'Manager Dashboard'
          }
          else 
            return 'User Dashboard'
  }

   console.log(adminDashBoard('User'));


  type Manager={
          
           Designation:string;
          address:string
  }

  type User={
           id:number;
           name:string;
  }     


  type role= Manager & User

  const rahim:role={
           id:101,
           name:'rahim khan',
           Designation:'manager',
           address:'khulna'

  }

  console.log(rahim);
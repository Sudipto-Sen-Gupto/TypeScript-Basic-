 
//non primitive for typescript
//null , unknown, never

  const name=(input:string| null)=>{
       if(input==='string'){
            console.log("Name is exist");
       }
       else if(input===null){
            console.log('name is not exist');
       }
  }
     name(null)

     //unknown

     const discountAmount=(amount:unknown)=>{
            if(typeof amount==='number'){
                  const discount=amount*.1
                  console.log(discount);
            }

            else if(typeof amount==='string'){
                  const [newAmount]=amount.split(" ")
                  const discount=Number(newAmount)*.1
                  console.log(discount);
            }
     }
        
        discountAmount(100)
        discountAmount('200 tk')
        discountAmount(null)

        // never
        const nothing=(input:string):never=>{
                 throw new Error(input)
                 
        }
          nothing('error...')
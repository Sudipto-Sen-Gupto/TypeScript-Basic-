// Spread operator and rest operator syntax is same  but action is different
// Spread operator expands the data. It makes one to many.

//Rest operator collects/gather the data. It makes many to one.

const invitation=(...friends:string[])=>{
                 friends.forEach((friend:string) =>console.log(`invite sent to ${friend} `))
}


invitation('Rahim','Karim','Jamal','Kalam','Rafiq')

 
  //spread operator 

  //union type
//   const planet:(string|number)[]=["Mercury","Venus","Earth","Mars",'Jupiter',"Saturn","Uranus","Neptune"]
//   const satelliteNumber:number[]=[0,0,1,2,90,140,27,14]

//   planet.push(...satelliteNumber)
//   console.log(planet);
     

//make all string
//    const planet:string[]=["Mercury","Venus","Earth","Mars",'Jupiter',"Saturn","Uranus","Neptune"]
//   const satelliteNumber:number[]=[0,0,1,2,90,140,27,14]

//   planet.push(...satelliteNumber.map(String))
//   console.log(planet);


  const Mars={
                planetName:'Mars',
                satelliteNumber:2,
               
  }

  const satelliteName={
    FirstSatellite:'Phobos',
                SecondSatellite:'Deimos'
  }

   const planetsInfo={...Mars,...satelliteName}
   console.log(planetsInfo);
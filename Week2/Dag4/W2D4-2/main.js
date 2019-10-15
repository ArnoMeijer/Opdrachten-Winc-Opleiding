/*const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
   
  const getCarBrand = car.getBrand;
   
  getCarBrand();*/   // output = "Nissan"

  // die had ik fout

  /*const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
  
  const getCarBrand = car.getBrand;
  
  console.log(getCarBrand);  */ // output: zie hieronder

  /*const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
  const getCarBrand = car.getBrand.bind(car);
  getCarBrand();  */  // output: Nissan

  // deze had ik goed, gelukkig 

 /* const car = {
    brand: "Nissan",
    getBrand: function(){
      const printBrandName = function(){
        console.log(this.brand);
      };
      return printBrandName();
    }
  };
   
  car.getBrand(); */ // output: this refereert naar de functie printBrandName, dus undefined

  const car = {
    brand: "Nissan",
    getBrand: function(){
      const self = this;
       // naast self kun je deze variable noemen zoals je wilt. 
      // Je ziet ook vaak : that, _this, me, context, etc
      const printBrandName = function(){
        console.log(self.brand);
      };
      return printBrandName();
    }
  };
   
  car.getBrand();   // output: Nissan yeaahhhhh Dit komt omdat je nu door const self aan te 
                    // maken met this. This verwijst nu naar car en de parameters in car const. 
                    // self is nu gebind met car en dus brand.

                    








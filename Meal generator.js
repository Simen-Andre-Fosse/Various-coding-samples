const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    }, 
  
  // Getters below --> 
  
    get appetizers(){
      return this._courses.appetizers;
    },
  
    get mains(){
      return this._courses.mains;
    },
  
    get desserts(){
      return this._courses.desserts;
    },
  
  // Setters below --> 
  
    set appetizers(appetizerIn){
      this._courses.appetizers = appetizerIn;
    },
    
    set main(mainsIn){
      this._courses.mains = mainsIn;
    },
    
    set desserts(dessertsIn){
      this._courses.desserts = dessertsIn;
    },
  
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    }, 
  
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName, 
        price: dishPrice,
        };
      return this._courses[courseName].push(dish);
    }, 
  
    getRandomDishFromCourse(courseName){
      const dishes = this.courses[courseName];
      const random = Math.floor(Math.random()* dishes.length);
      return dishes[random];
    }, 
  
    generateRandomMeal(){
      const appetizer = menu.getRandomDishFromCourse('appetizers');
      const main = menu.getRandomDishFromCourse('mains');
      const dessert = menu.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return (`Today's three-course meal consists of ${appetizer.name} for appetizer, ${main.name} for mains, and a delicous ${dessert.name} for dessert. Total price will be: ${totalPrice}£, Bon Appétit!`);
    },
  };
  
  menu.addDishToCourse('appetizers', 'Onion rings', 2);
  menu.addDishToCourse('appetizers', 'Chips', 1);
  menu.addDishToCourse('appetizers', 'Spicy cheese balls', 2.5);
  
  menu.addDishToCourse('mains', 'Lasagna', 13);
  menu.addDishToCourse('mains', 'Pizza', 12);
  menu.addDishToCourse('mains', 'Bacon cheese burger', 10);
  
  menu.addDishToCourse('desserts', 'ice-cream', 1.5);
  menu.addDishToCourse('desserts', 'Brownie', 2);
  menu.addDishToCourse('desserts', 'Apple pie', 2);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
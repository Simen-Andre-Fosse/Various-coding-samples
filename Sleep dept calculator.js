const getSleepHours = day => {

    day = day.toLowerCase();
      switch(day) {
        case 'monday':
        return 8;
        break;
    
        case 'tuesday':
        return 7;
        break;
    
        case 'wednesday':
        return 8;
        break;
    
        case 'thursday':
        return 6;
        break;
    
        case 'friday':
        return 5;
        break;
    
        case 'saturday':
        return 10;
        break;
    
        case 'sunday':
        return 12;
        break;    
    
        default:
        return 'Error!';
      }
    };
    
    const getActualSleepHours = () =>
      getSleepHours('monday') + getSleepHours('tuesday') +
      getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') +
      getSleepHours('sunday');
    
    const getIdealSleepHours = () => {
      const idealHours = 8;
      return idealHours * 7;
    }
    
    const calculateSleepDept = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
      const difference = actualSleepHours-idealSleepHours;
    
      if(actualSleepHours === idealSleepHours){
        console.log('You got the perfect amount of sleep!');
      } else if(actualSleepHours > idealSleepHours){
        console.log(`You got ${difference} more hours sleep then needed!`);
      } else {
        console.log(`You got ${difference} less hours then needed, you should get som rest!`);
      }
    }
    
    calculateSleepDept();
    
    
    
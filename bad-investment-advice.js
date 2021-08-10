const fs = require('fs');

const BadInvestmentAdvice = (() => {
  
  /* loadJSON(filepath): Loads the object stored in JSON file located at filepath */
  const _loadJSON = (filepath) => {
    /* Check to ensure file is of type .json */
    if(filepath.slice(filepath.length - 5) !== '.json'){
      console.log('ERROR: Attempting to load JSON object from file not ending in \'.json\'');
      return null;
    }
    /* Return object for opened JSON file */
    return JSON.parse(fs.readFileSync(filepath));
  }

  /* objectToArray(object): */
  const _objectToArray = (object) => {
    /* Check for null or undefined parameter */
    if(object === null || object === undefined){
      console.log("ERROR: Unable to convert null or undefined object to array");
      return null;
    }
    const array = [];
    /* Loop through and insert all values of object into the array */
    for(const key in object){
      array.push(object[key]);
    }
    return array;
  }

  return {

  }
})();
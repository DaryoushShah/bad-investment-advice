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

  /* getRandomElement(array): Returns a random element of array */
  const _getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  /* parseFormatVlaue(string): Checks string to see if in valid format '{{value}}', returns object else null if not in format */
  const _parseFormatValue = (string) => {
    /* Checks to see if {{}} */
    if(string.length >= 4 && (string[0] === string[1] && string[1] === '{') 
    && (string[string.length - 1] === string[string.length - 2] && string[string.length - 1] === '}')){
      const value = string.slice(2, string.length - 2);
      /* Check to see if matches valid regex */
      if(value.match(/[A-Za-z\.]/)){
        /* Check to see if component has sub-values */
        if(value.indexOf('.') !== -1){
          return {
            component: value.slice(0, value.indexOf('.')),
            value: value.slice(value.indexOf('.') + 1)
          }
        }else{
          return {
            component: value
          }
        }
      }
    }
    return null;
  }

  return {

  }
})();
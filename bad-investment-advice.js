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

  return {

  }
})();
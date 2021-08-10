const fs = require('fs');

const BadInvestmentAdvice = (() => {

  /* Default filepaths */
  const componentFilePath = './json/_components.json';
  const formatFilePath = './json/_formats.json';

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
            key: value.slice(0, value.indexOf('.')),
            value: value.slice(value.indexOf('.') + 1)
          }
        }else{
          return {
            key: value
          }
        }
      }
    }
    return null;
  }

  /* getFormatComponents(format, components): Based on format, returns an object of randomly selected keys/value pairs from all possible components */
  const _getFormatComponents = (format, components) => {
    let selectedComponents = {};
    /* Loop through the template */
    for(const part of format.template){
      if(_parseFormatValue(part) === null){
        continue;
      }
      const component = _parseFormatValue(part).key;
      /* Check to see if component is defined in _components.json */
      if(selectedComponents[component] === undefined){
        selectedComponents[component] = _getRandomElement(_objectToArray(_loadJSON(components[component].filepath)));
      }
    }
    return selectedComponents;
  }

  /* createMessage(format, components): returns string of message based on format & components */
  const _createMessage = (format, components) => {
    let message = '';
    /* Loop through the template */
    for(const part of format.template) {
      const component = _parseFormatValue(part);
      if(component === null){
        message += part;
      }else{
        /* Check if value key has other objects */
        if(component.value === undefined){
          message += components[component.key];
        }else{
          message += components[component.key][component.value];
        }
      }
    }
    return message;
  }

  /* generateRandomMessage(): generates and retruns a random message */
  const generateRandomMessage = () => {
    const format = _getRandomElement(_objectToArray(_loadJSON(formatFilePath)));
    const listOfComponents = _loadJSON(componentFilePath);

    const components = _getFormatComponents(format, listOfComponents);

    return _createMessage(format, components);
  }

  return {
    generateRandomMessage
  }
})();
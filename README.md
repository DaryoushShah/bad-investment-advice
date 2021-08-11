# Bad Investment Advice
Have you been looking for randomly generated "bad investment advice"? Nowadays it seems like everyone
and their mama can spit out financial wizardry on r/wallstreetbets and other social platforms.
Well look no further, because Bad Investment Advice is a Node.js application that will allow you to get 
randomly generated messages regarding many of the publically traded stonks! Although this program was originally made to be a satirical take on modern day "stock gurus," it's format and component system gives users the flexibility to create any sort of random message!

> **NOTE: This program exists for satirical purposes only and DOES NOT constitute financial advice. You as the user
take full liability and/or responsibility for any trades or actions taken as a result of using this program.**

## Table of Contents
* [Technologies](#technologies)
* [Setup](#setup)
* [Customization](#customization)

## Technologies
This project was created using:
* Node.js - v14.17.3
* JavaScript

## Setup
In order to setup this project on your own local machine you must follow these steps:

1) Install Node - v14.17.3 or higher
2) Clone this repository
3) Change directory into the folder you cloned this repo into
4) Run `Node bad-investment-advice.js!`

## Customization
Bad Investment Advice is fully customizable! Not only can you design your own message format, but you can also add
your own words/phrases to be mixed into your message formats! The flexibility of this system allows users/developers
to expand past the stock based components and create any kind of randomly generated bad advice!

### Formats
The most basic element of Bad Investment Advice is the message format. Message formats are stored in the `_formats.json` file. Here is an example of a format object in the `_formats.json` file.

```
  "0": {
    "name": "informational",
    "template": ["Have you heard of ", "{{company.title}}", "? You can see it's current price with the ticker symbol $", "{{company.ticker}}", "."]
  },
```

Each template object has two key/value pairs:

| **key** | **value** |
|---------|-----------|
name | The name of the format
template | An array storing storing the template of the message format

When looking at the template array, you may have noticed that some elements are formatted as `{{COMPONENT}}` or `{{COMPONENT.VALUE}}`. This is how you can reference where a random variable will go when the message is generated. Components are key to how Bad Investment Advice works and how you can expand on it to create any kind of bad advice!

### Components
Components are the objects that the program references to put randomly selected words/values in the randomly chosen template. Components are listed in the `_components.json` as well as their own file which would normally be named `component_name.json` and stored in the same folder as `_components.json`. Here is an example of a component listed in the `_components.json` file.

```
  "company": {
    "filepath": "./json/companies.json"
  },
```

The component object contains one key/value pair that provides the filepath to the `component_name.json` file in relation to the parent directory where this README.md file and source code is located.

There are also some reserved components that are used to add functionality such as random number generation!

| **Name** | **Description** |
|----------|-----------------|
NUMBER | Generates a random number in the range of [0, 100,000]
import validator from 'validate-image-url'
const Validator = require('validator');
const isEmpty = require('./is-empty');

//Check if URL is valid image
 
const promise = validator({url: data.image, timeout: 10000})
  .then(({image, url}) => {
    console.log('Image URL is valid.', 'URL:', url, 'image:', image)
  })
  .catch((err) => {
    errors.image = 'Must be a valid image URL.';
  })


  // If image field is empty

module.exports = function validatePostInput(data) {
 let errors = {};

  data.image = !isEmpty(data.image) ? data.image : '';

  if (Validator.isEmpty(data.image)) {
   errors.image = 'Image field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
  };



  // found at: https://www.npmjs.com/package/validate-image-url







//My code from before:

//const Validator = require('validator');
//const isEmpty = require('./is-empty');


//module.exports = function validatePostInput(data) {
 // let errors = {};

  //data.image = !isEmpty(data.image) ? data.image : '';

  //if (!Validator.isURL(data.image) && !Validator.contains('.jpg' || '.jpeg' || '.gif' || '.png' || '.mp4')) {
   // errors.image = 'Must be a valid URL with file extension: jpg, jpeg, gif, png or mp4';
  //}

  //if (Validator.isEmpty(data.image)) {
   // errors.image = 'Image field is required';
  //}

  //return {
  //  errors,
  //  isValid: isEmpty(errors)
  //};
//};
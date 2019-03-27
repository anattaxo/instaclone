const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.image = !isEmpty(data.image) ? data.image : '';

  if (!Validator.isURL(data.image) && !Validator.contains('.jpg' || '.jpeg' || '.gif' || '.png' || '.mp4')) {
    errors.image = 'Must be a valid URL with file extension: jpg, jpeg, gif, png or mp4';
  }

  if (Validator.isEmpty(data.image)) {
    errors.image = 'Image field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
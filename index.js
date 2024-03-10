const randomstring = require('randomstring');

function generateRandomFormalEmail() {
  const username = randomstring.generate({
    length: 8,
    charset: 'alphabetic',
    capitalization: 'lowercase',
  });

  const domain = randomstring.generate({
    length: 5,
    charset: 'alphabetic',
    capitalization: 'lowercase',
  });

  return `${username}@${domain}.com`;
}

module.exports = generateRandomFormalEmail;

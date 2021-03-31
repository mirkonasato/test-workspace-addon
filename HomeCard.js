const BASE_URL = 'https://03ea1b97c629.ngrok.io';

const HomeCard = {
  name: 'Home',
  sections: [
    {
      widgets: [
        {
          textParagraph: {
            text: 'Click the button below to give the Add-on access to this file.',
          },
        },
      ],
    },
  ],
  fixedFooter: {
    primaryButton: {
      text: 'Allow access',
      onClick: {
        action: {
          function: BASE_URL + '/requestFileScope',
        },
      },
    }
  }
};

module.exports = HomeCard;

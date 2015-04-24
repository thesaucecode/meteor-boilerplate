// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'thesauceco.de boilerplate',
  DESCRIPTION: 'see more at https://github.com/thesaucecode/meteor-boilerplate/'
};

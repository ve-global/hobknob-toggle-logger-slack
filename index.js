'use strict';
var Slack = require('node-slack');
var config = require('./config.json');
var slack = new Slack(config.hookUrl, {});

var getUsername = (user) => {
  return typeof user.name === 'string'
    ? user.name
    : user.name.givenName + ' ' + user.name.familyName;
};

module.exports = {
  /*
  {
    user: { name: 'anonymous' } or { name: { givenName: 'anony', familyName: 'mous' } },
    applicationName: 'my-app',
    featureName: 'my-feature',
  }
  */
  addFeature: function(featureEvent, next) {
    slack.send({
        text: `${getUsername(featureEvent.user)} added ${featureEvent.featureName} to ${featureEvent.applicationName}`,
        channel: '#deployments',
        username: 'hobknob'
    });
    next();
  },
  /*
  {
    user: { name: 'anonymous' } or { name: { givenName: 'anony', familyName: 'mous' } },
    applicationName: 'my-app',
    featureName: 'my-feature',
  }
  */
  deleteFeature: function(featureEvent, next) {
    slack.send({
        text: `${getUsername(featureEvent.user)} deleted ${featureEvent.featureName} from ${featureEvent.applicationName}`,
        channel: '#deployments',
        username: 'hobknob'
    });
    next();
  },
  /*
  {
    user: { name: 'anonymous' } or { name: { givenName: 'anony', familyName: 'mous' } },
    applicationName: 'my-app',
    featureName: 'my-feature',
    toggleName: 'my-toggle',
    value: false
  }
  */
  addFeatureToggle: function(toggleEvent, next) {
    slack.send({
        text: `${getUsername(toggleEvent.user)} added ${toggleEvent.featureName}/${toggleEvent.toggleName} to ${toggleEvent.applicationName}`,
        channel: '#deployments',
        username: 'hobknob'
    });
    next();
  },
  /*
  {
    user: { name: 'anonymous' } or { name: { givenName: 'anony', familyName: 'mous' } },
    applicationName: 'my-app',
    featureName: 'my-feature',
    toggleName: 'my-toggle',
    value: false
  }
  */
  updateFeatureToggle: function(updateEvent, next) {
    slack.send({
        text: `${getUsername(updateEvent.user)} changed ${updateEvent.applicationName} ${updateEvent.featureName}/${updateEvent.toggleName} to ${updateEvent.value}`,
        channel: '#deployments',
        username: 'hobknob'
    });
    next();
  },
  /*
  {
    user: { name: 'anonymous' } or { name: { givenName: 'anony', familyName: 'mous' } },
    applicationName: 'my-app',
    featureName: 'my-feature',
    toggleName: 'my-toggle'
  }
  */
  deleteFeatureToggle: function(deleteEvent, next) {
    slack.send({
        text: `${getUsername(deleteEvent.user)} deleted ${deleteEvent.featureName}/${deleteEvent.toggleName} from ${deleteEvent.applicationName}`,
        channel: '#deployments',
        username: 'hobknob'
    });
    next();
  }
};

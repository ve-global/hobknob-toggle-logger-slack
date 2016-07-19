'use strict';
var Slack = require('node-slack');
var config = require('./config.json');
var slack = new Slack(config.hookUrl, {});

var getUsername = (user) => {
  return typeof user.name === 'string'
    ? user.name
    : user.name.givenName + ' ' + user.name.familyName;
};

var formatToggleName = (featureName, toggleName) => {
  return !!toggleName
  ? `${featureName}/${toggleName}`
  : `${featureName}`;
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
    var t = formatToggleName(toggleEvent.featureName, toggleEvent.toggleName);
    slack.send({
        text: `${getUsername(toggleEvent.user)} added ${t} to ${toggleEvent.applicationName}`,
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
    var t = formatToggleName(updateEvent.featureName, updateEvent.toggleName);
    slack.send({
        text: `${getUsername(updateEvent.user)} changed ${updateEvent.applicationName} ${t} to ${updateEvent.value}`,
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
    var t = formatToggleName(deleteEvent.featureName, deleteEvent.toggleName);
    slack.send({
        text: `${getUsername(deleteEvent.user)} deleted ${t} from ${deleteEvent.applicationName}`,
        channel: '#deployments',
        username: 'hobknob'
    });
    next();
  }
};

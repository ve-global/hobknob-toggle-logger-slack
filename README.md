Hobknob Toggle Logger for Slack
---
[![Build Status](https://travis-ci.org/ve-interactive/hobknob-toggle-logger-slack.svg?branch=master)](https://travis-ci.org/ve-interactive/hobknob-toggle-logger-slack)

Uses [feature-hooks](https://github.com/opentable/hobknob#feature-hooks) in hobknob to write toggle change events to slack.

__Configuration__

`config.json`

```
{
  "hookUrl": "https://hooks.slack.com/services/my-slack-hook-url",
  "channel": "#mychannel",
  "env": "test"              // optional
}
```

- `hookUrl`: create a new integration in slack and paste the hook url here
- `channel`: channel to post to
- `env`: (optional) sets the username when posting to `Hobknob (<env>)`, useful if you run separate instances of hobknob for test/prod

__Hobknob Configuration__

```
  "hooks": [
    "/foo/some/other/hook.js",
    "node_modules/hobknob-toggle-logger-slack/index.js"
  ],
```

# Auditrailes

An audit trail is a systematic record of activities or events that occur within a system, process, or transaction. The purpose of an audit trail is to enable accurate monitoring and analysis of these activities.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

An audit trail is a systematic record of activities or events that occur within a system, process, or transaction. The purpose of an audit trail is to enable accurate monitoring and analysis of these activities

## Requirements

- Node.js
- Express
- Redis

## Features

List the key features

- Subscribers
- Handlers event
- Customizable

## Installation

Provide instructions for installing your project. Include any prerequisites or dependencies.

```bash
# Example installation commands
git clone https://github.com/andriandwl/auditrailes
cd auditrailes
npm install

```

# Usage

Examples of use
`import auditLogs from "auditraels";`

Declare client, subscriber and messageHandlers
`const client = redis.createClient();`

`const subscriber = client.duplicate();`

`const messageHandlers = { "audit:auth:login" : authLogin};`

- `authLogin` is a function for handling the message from publisher

Call function
`auditLogs(client, subscriber, messageHandlers);`

Use this function inside mongoose.connect so it can listen when the event is called.

# License

Specify the license under which your project is distributed. Include any licensing information or copyright notices.

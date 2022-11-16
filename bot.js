const tmi = require('tmi.js');
const pw = 'oauth:mjbb6v37bqu3ev504zdy9zpcibom8w'

// Define configuration options
const opts = {
    identity: {
        username: 'raccmod',
        password: pw
    },
    channels: [
        'divinityhc', 'trinityc4'
    ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot

    // Split message on a space character
    // (Twitch already removes leading & trailing whitespaces and
    // collapses consecutive whitespaces into a single whitespace)
    const splitMsg = msg.split(' ');
    const commandName = splitMsg[0];
    const commandArgs = splitMsg.slice(1, splitMsg.length);
    console.log(splitMsg)

    // If the command is known, let's execute it
    if (commandName === '!crk') {
        const ign = 'DivinityC'
        const guild = 'Matcha'
        const server = 'Hollyberry'

        client.say(target, `IGN: ${ign} | Guild: ${guild} | Server: ${server}`);
        console.log(`* Executed ${commandName} command`);
    } else {
        console.log(`* Unknown command ${commandName}`);
    }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}
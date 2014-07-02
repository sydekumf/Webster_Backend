require('scripts/Classes/ReceiveMsg/*');

/**
 * The MessageProcessor processes all messages which come in. It determines which message type it is, creates the
 * determined Message Object, sets message content as properties and processes the message.
 *
 * @namespace EmberChat
 * @class MessageProcessor
 */
Webster.MessageProcessor = Ember.Object.create({

    /**
     * Process the given raw message
     *
     * @method processIncoming
     * @param {string} rawMessage
     * @returns {void}
     */
    processIncoming: function(rawMessage) {
        var messageData = JSON.parse(rawMessage.data);

        console.log('%c => Receiving message: ', 'background: #369a42; color: #fff');
        console.log(JSON.stringify(messageData));

        content = messageData.content;

        for(var key in content){
            Webster.Session.set(key, content[key]);
        }
    },

    /**
     * Process an outgoing message
     *
     * @method processOutgoing
     * @param {EmberChat.AbstractMessage} message
     */
    processOutgoing: function(message) {
        if(typeof message === 'object') {
            console.log('%c <= Sending message: ', 'background: #cc4a4d; color: #fff');
            console.log(JSON.stringify(message));
            Webster.Socket.sendMessage(JSON.stringify(message));
        }
    }
});
var gcm = require('node-gcm');
var message = new gcm.Message();

//API Server Key
var sender = new gcm.Sender('AIzaSyBFjuJnZwwRy4ofGsJROEUorWPseXh0zPg');
var registrationIds = [];

// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
//message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.

// At least one reg id required
registrationIds.push('APA91bEREKch8DnWickwBTmrNlZ5Qq5l5G_YcRn2xQtt35hk3fT2R_LWUobnxl5-8KgMfK5ftuhCdWS761mfp-MyvV33jPtkPux1k9f9zZznxBRtTq-WEdQSMiZOFYlU1l04VyzHeBZ8eZ0ke9M-BihTgZRxfk3R3PWh-sgT3Hk6god_yNQBnZs');

/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});
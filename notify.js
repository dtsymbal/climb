var gcm = require('node-gcm');
var message = new gcm.Message();

//API Server Key
var sender = new gcm.Sender('AIzaSyAtuastNu_l6kTBHiF-iACME1_BdJm26vM');
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
registrationIds.push('APA91bGIfDzt_N0uUtiHwWJLGU752dJAbBlbrm5AmHZ_6ptIOYnnZiAQ1cHIQ48q3v81y8zGkXHfpd5yENviy-zwssHy-_tmBonJKdlp6LdcOayl1PpUZ_CVkVx4dZW5YM1GaX9C1qbUGEZJnMSwSyiWNoYjma0poA');

/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});
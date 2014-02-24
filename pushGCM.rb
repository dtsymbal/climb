require 'rubygems'
require 'pushmeup'
GCM.host = 'https://android.googleapis.com/gcm/send'
GCM.format = :json
GCM.key = "AIzaSyAtuastNu_l6kTBHiF-iACME1_BdJm26vM"
destination = ["APA91bGIfDzt_N0uUtiHwWJLGU752dJAbBlbrm5AmHZ_6ptIOYnnZiAQ1cHIQ48q3v81y8zGkXHfpd5yENviy-zwssHy-_tmBonJKdlp6LdcOayl1PpUZ_CVkVx4dZW5YM"]
data = {:message => "PhoneGap Build rocks!", :msgcnt => "1", :soundname => "beep.wav"}

GCM.send_notification( destination, data)

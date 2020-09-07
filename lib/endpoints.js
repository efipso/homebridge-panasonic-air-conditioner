// Panasonic Comford cloud endpoint URLs 

'use strict';

var endpoint = {};

endpoint.init = function(fieldTestMode) {
    let apiHostname = 'accsmart.panasonic.com';

    endpoint.API_HOSTNAME = apiHostname;

    endpoint.URL_AUTH_LOGIN = 'https://' + apiHostname + '/auth/login/';
    endpoint.URL_DEVICE_GROUP = 'https://' + apiHostname + '/device/group/';
    endpoint.URL_DEVICESTATUS_NOW = 'https://' + apiHostname + '/deviceStatus/now/';
    endpoint.URL_DEVICESTATUS_CONTROL = 'https://' + apiHostname + '/deviceStatus/control/';

};

module.exports = endpoint;

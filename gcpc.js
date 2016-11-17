var Cylon = require('cylon');

/* Main Work Function*/
Cylon.robot({
    connections: {
        leapmotion: {adaptor: 'leapmotion'}
        raspi: {adaptor: 'raspi'}
    },

    devices: {
        leapmotion: {driver: 'leapmotion'}
    },

    work: function() {
        every((1).second(), function() {
            console.log("Hello, human!");
        });
    }
}).start();

/* Leap Motion Function */

/* Raspberry Pi Function */

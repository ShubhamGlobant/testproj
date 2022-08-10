const moment = require('moment');

const timezone = 'America/Chicago';
        const startTime = moment('2022-04-28').tz(timezone);
        const endTime = moment('2022-04-29').tz(timezone);

        console.log(moment(startTime).tz(timezone).utc().format('YYYYMMDDHHmm'));
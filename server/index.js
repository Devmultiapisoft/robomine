'use strict';
const server = require('./src/server');
const log = require('./src/services/logger').getAppLevelInstance();
const cron = require('node-cron');
const axios = require('axios');
/*************************************************************************************/
/* START PROCESS UNHANDLED METHODS */
/*************************************************************************************/
process.on('unhandledRejection', (reason, p) => {
    log.error('Unhandled Rejection at:', p, 'reason:', reason);
    log.error(`API server exiting due to unhandledRejection...`);
    process.exit(1);
});
process.on('uncaughtException', (err) => {
    log.error('Uncaught Exception:', err);
    log.error(`API server exiting due to uncaughtException...`);
    process.exit(1);
});
/*************************************************************************************/
/* END PROCESS UNHANDLED METHODS */
/*************************************************************************************/

cron.schedule('0 6 * * *', async() => {
        try {
            if (process.env.CRON_STATUS === '0') return
            let crons = process.env.CRONS.split(',')
            if (crons[0].length < 1) throw "No Crons Available"
            for (const cron of crons)
                await axios.post(`${process.env.BASE_URL}/cron/${cron}`, { key: process.env.APP_API_KEY })
            console.log('Daily Cron job ran successfully.');
        } catch (error) {
            console.error('Error:', error);
        }
    })
    //cron.schedule('* * * * *', async() => {
    //cron.schedule('0 7 * * *', async () => {  // Runs every 10 minutes
cron.schedule('0 * * * *', async() => {
    try {
        if (process.env.CRON_STATUS === '0') return; // Check if crons are disabled

        let crons = process.env.MINCRONS.split(','); // Get the list of crons from environment variable
        if (crons[0].length < 1) throw "No Crons Available";

        // Loop through each cron and trigger the cron job via HTTP POST request
        for (const cron of crons) {
            await axios.post(`${process.env.BASE_URL}/cron/${cron}`, { key: process.env.APP_API_KEY });
        }

        console.log('Minting-related Cron job ran successfully.');
    } catch (error) {
        console.error('Error in cron job:', error);
    }
});

// Star ranking check cron job - runs daily at 4 AM
cron.schedule('0 4 * * *', async() => {
    try {
        if (process.env.CRON_STATUS === '0') return; // Check if crons are disabled

        console.log('Star ranking cron job started at 4 AM');
        await axios.post(`${process.env.BASE_URL}/cron/starRankingCron`, { key: process.env.APP_API_KEY });
        console.log('Star ranking cron job completed successfully.');
    } catch (error) {
        console.error('Error in star ranking cron job:', error);
    }
});



/**
 * START THE SERVER
 */
const appServer = new server();
appServer.start();
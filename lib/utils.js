const Session = require('./session').Session;
const UserAgent = require('user-agents');

module.exports.defaultSession = new Session();

const generateUserHeaders = () => {
    const randomUserAgentGenerator = new UserAgent()
    const ua = randomUserAgentGenerator.random()

    return {
        'User-Agent': ua.toString(),
        'Accept-Language': '*',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'Content-Type': 'application/json',
        'Referer': "https://www.leboncoin.fr/recherche/",
        'Origin': 'https://www.leboncoin.fr'
    };
 };

module.exports.requestHeaders = () => {
    const headers = generateUserHeaders();
    return headers;
};


module.exports.getParisGMT = function() {
    var d = new Date();
    var s = d.toLocaleString(undefined, { timeZone: "Europe/Paris", timeZoneName: "short" });
    return s.slice(-5)
};

const {getRequest, getDomainList, createFile} = require('./functions');

const BLACKLIST_URL="https://raw.githubusercontent.com/notracking/hosts-blocklists/master/adblock/adblock.txt";
const BLACKLIST_FILE="./blacklist.js";


getRequest(BLACKLIST_URL).then(rawList =>{
    let list = getDomainList(rawList);
    console.log("Domains recieved:",list.length);
    createFile(BLACKLIST_FILE, list);
    console.log("Domains stored in", BLACKLIST_FILE);
});

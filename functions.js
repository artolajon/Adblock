const https = require('https');
const fs = require('fs');

const getRequest = async (url) => {
    console.log("HTTP GET request to:", url);
    return new Promise((resolve, reject) => {
        https.get(url, (resp) => {
            let data = '';
          
            // A chunk of data has been received.
            resp.on('data', (chunk) => {
              data += chunk;
            });
          
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(data);
            });
          
          }).on("error", (err) => {
            console.log("Error: " + err.message);
            reject();
          });
    })
}

const getDomainList = (rawList) =>{
    const REGEXP = /(?<=\|\|)(.*)(?=\^)/g; // regex for ||googleads.com^  => googleads.com

    const array = [...rawList.matchAll(REGEXP)];
    return array.map(value=> value[0]);
}

const createFile = (file, array) => {
    
    let content = "let blacklist = ["+ array.map(link => "'*://*."+link+"/*'").join(",") +"];";

    fs.writeFile(file, content, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}


module.exports = {
    getRequest,
    getDomainList,
    createFile
}
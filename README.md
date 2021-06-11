# AdBlock for Chrome

A extension for chrome to block ads.

## Usage 

1. Just download or clone this repository.
1. (Using developer mode in chrome) Add the extension by pointing to the directory.
1. Done :)

## Details 

It listens all the requests made by your browser and block the ones that are made to ad services' domains. This domains are listed in `blacklist.js`.  

### Update the blacklist

The blacklist is made by using the [notracking/hosts-blocklists](https://raw.githubusercontent.com/notracking/hosts-blocklists) repository. 

Using node, execute `update-blacklist.js` to obtain the lastest version of this list.
```
    node update-blacklist.js
```

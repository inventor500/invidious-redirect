"use strict";

// From https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
Array.prototype.random = function() {
    return this[Math.floor((Math.random() * this.length))];
}

let pattern = "https://youtube.com/*";
const url_regex = /http(?:s?):\/\/(?:w{3}\.)?youtube.com(\/.*)/;
const instances = ["invidious.snopyta.org", "vid.puffyan.us",
                   "inv.riverside.rocks", "yt.artemislena.eu",
                   "invidious.flokinet.to", "invidious.esmailelbob.xyz",
                   "inv.bp.projectsegfau.lt", "y.com.sb",
                   "invidious.tiekoetter.com", "invidious.slipfox.xyz",
                   "invidio.xamh.de", "invidious.dhusch.de",
                   "inv.odyssey346.dev", "invidious.baczek.me",
                   "invidious.weblibre.org", "invidious.privacydev.net",
                   "yt.funami.tech", "vid.priv.au",
                   "invidious.lidarshield.cloud", "invidious.silur.me",
                   "iv.melmac.space", "iv.ggtyler.dev",
                   "invidious.epicsite.xyz"];

function redirect(requestDetails) {
    let targetUrl = "https://" + instances.random() + requestDetails.url.match(url_regex)[1];
    console.log(`Redirecting ${requestDetails.url} to ${targetUrl}`);
    return { redirectUrl: targetUrl };
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls:["https://youtube.com/*","https://www.youtube.com/*"]},
    ["blocking"]
);

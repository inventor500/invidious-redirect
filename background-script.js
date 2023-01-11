"use strict";

Array.prototype.random = function() {
    return this[Math.floor((Math.random() * this.length))];
}

const youtube_regex = /http(?:s?):\/\/(?:w{3}\.)?youtube\.com(\/.*)/;
const inv_instances = ["invidious.snopyta.org", "vid.puffyan.us",
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


const reddit_regex = /http(?:s?):\/\/(?:w{3}\.)?reddit\.com(\/.*)/;
const ted_instances = ["teddit.ggc-project.de", "teddit.zaggy.nl",
                       "teddit.namazso.eu", "teddit.tinfoil-hat.net",
                       "teddit.domain.class", "snoo.ioens.is",
                       "teddit.httpjames.space", "incogsnoo.com",
                       "teddit.pussthecat.org", "reddit.lol",
                       "teddit.sethfortheprivacy.com", "reddit.totaldarkness.net",
                       "teddit.adminforge.de", "teddit.bus-hit.me",
                       "teddit.froth.zone", "rdt.trom.tf",
                       "teddit.ecrypted-data.xyz", "i.opnxng.com",
                       "teddit.tokhmi.xyz", "teddit.garudalinux.org",
                       "tedd.it", "teddit.privacytools.io",
                       "td.vern.cc", "teddit.rawbit.ninja",
                       "teddit.artemislena.eu", "teddit.manasiwibi.com",
                       "teddit.hostux.net"];

function redirect_youtube(requestDetails) {
    let targetUrl = "https://" + inv_instances.random() + requestDetails.url.match(youtube_regex)[1];
    console.log(`Redirecting ${requestDetails.url} to ${targetUrl}`);
    return { redirectUrl: targetUrl };
}

function redirect_reddit(requestDetails) {
    let targetUrl = "https://" + ted_instances.random() + requestDetails.url.match(reddit_regex)[1];
    console.log(`Redirecting ${requestDetails.url} to ${targetUrl}`);
    return {redirectUrl: targetUrl };
}

browser.webRequest.onBeforeRequest.addListener(
    redirect_youtube,
    {urls:["https://youtube.com/*","https://www.youtube.com/*"]},
    ["blocking"]
);

browser.webRequest.onBeforeRequest.addListener(
    redirect_reddit,
    {urls:["https://reddit.com/*", "https://www.reddit.com/*"]},
    ["blocking"]
);

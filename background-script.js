"use strict";

Array.prototype.random = function() {
    return this[Math.floor((Math.random() * this.length))];
};

const invInstances = ["invidious.snopyta.org", "vid.puffyan.us",
					  "inv.riverside.rocks", "yt.artemislena.eu",
					  "invidious.flokinet.to", "invidious.esmailelbob.xyz",
					  "inv.bp.projectsegfau.lt", "y.com.sb",
					  "invidious.tiekoetter.com", "invidious.slipfox.xyz",
					  "invidious.baczek.me", "invidious.privacydev.net",
					  "yt.funami.tech", "vid.priv.au",
					  "iv.melmac.space", "iv.ggtyler.dev",
					  "invidious.0011.lt", "inv.zzls.xyz",
					  "yt.floss.media", "inv.tux.pizza",
					  "not-ytb.blocus.ch", "invodious.protokolla.fi"];


const tedInstances = ["teddit.ggc-project.de", "teddit.zaggy.nl",
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

function getPath(url) {
	return url.substr(url.indexOf('/',8));
}

function redirectYoutube(requestDetails) {
    let targetUrl = "https://" + invInstances.random() + getPath(requestDetails.url);
    console.log(`Redirecting ${requestDetails.url} to ${targetUrl}`);
    return { redirectUrl: targetUrl };
}

function redirectReddit(requestDetails) {
    let targetUrl = "https://" + tedInstances.random() + getPath(requestDetails.url);
    console.log(`Redirecting ${requestDetails.url} to ${targetUrl}`);
    return { redirectUrl: targetUrl };
}

browser.webRequest.onBeforeRequest.addListener(
    redirectYoutube,
    {urls:["https://youtube.com/*","https://www.youtube.com/*", "https://youtu.be/*"]},
    ["blocking"]
);

browser.webRequest.onBeforeRequest.addListener(
    redirectReddit,
    {urls:["https://reddit.com/*", "https://www.reddit.com/*"]},
    ["blocking"]
);

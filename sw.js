importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "img/favicon.ico",
    "revision": "806936a2ca51da3bc3bfc2f09f49240a"
  },
  {
    "url": "img/favicon.png",
    "revision": "6d48aa065fcdc34587a04895a9c7ad75"
  },
  {
    "url": "img/header.jpg",
    "revision": "cd49df843eb41ceafdc4521602ffc7e6"
  },
  {
    "url": "img/header1.jpg",
    "revision": "7f5aca4c8e8713c152a4e8c0f79990d4"
  },
  {
    "url": "img/header2.jpg",
    "revision": "999b97257be3c4c131d964a333917555"
  },
  {
    "url": "img/map.png",
    "revision": "e6b84e93c41da06e4d801da112e739ae"
  },
  {
    "url": "img/pattern.gif",
    "revision": "8601d0c4bf75dd5b00c438f423da6d09"
  },
  {
    "url": "img/tendril.png",
    "revision": "547367446452af8fbd58c69d6703c9b4"
  },
  {
    "url": "index.html",
    "revision": "99e205d4b0f9f949a76d8e6ab54a8dd8"
  },
  {
    "url": "js/index.js",
    "revision": "8da79f60a695caf36c593d66713b0477"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);

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
    "url": "images/icons/icon-128x128.png",
    "revision": "12120eea52eab9ad0e40a48e0d6177c0"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "b6085520c88c5336273faca5a2d45ccf"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "c8ccf3f11271c9457b950a9811cd4fa1"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "19b03d4f5da347694a071c4e1b35b355"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "17b6cce6990a6d03cfd642f58a836873"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "24df155fcf486f433e765691f1ababae"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "d8b9081e7a44a82dc6af4d6c2fc421b8"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "1e97032da6c6a67ad19c5c36e6b1f819"
  },
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
    "revision": "b0033c15f7c95aa3a89f519feb6dcf60"
  },
  {
    "url": "js/index.js",
    "revision": "d05e39e2cd9d8973658d93bc290908f5"
  },
  {
    "url": "manifest.json",
    "revision": "541fb8719d6cc24d6ed79bfefd018ad4"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);

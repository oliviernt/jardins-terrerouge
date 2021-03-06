module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{ico,png,jpg,gif,html,js,json}"
  ],
  "swDest": "sw.js",
  "globIgnores": [
    "workbox-cli-config.js",
    "node_modules/**/*",
    "js/html5.js",
    "js/respond.min.js",
    "package*.json"
  ]
};

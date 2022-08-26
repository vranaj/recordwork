const PROXY_CONFIG = [
  {
    "context": [
      "/signup",
      "/many",
      "/endpoints",
      "/i",
      "/need",
      "/to",
      "/proxy"
    ],
    "target": "http://pharma.arescomp.com/",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true

  }
]

module.exports = PROXY_CONFIG;

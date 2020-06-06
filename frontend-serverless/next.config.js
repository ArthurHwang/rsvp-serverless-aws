require("dotenv").config();

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const path = require("path");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
      },
    ],
    [withFonts],
  ],
  {
    target: "serverless",
    env: {
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    },
    webpack: (config, options) => {
      config.resolve.alias.images = path.join(__dirname, "images");
      return config;
    },
  }
);

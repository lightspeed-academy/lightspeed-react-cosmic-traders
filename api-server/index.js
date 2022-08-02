const express = require("express")
const app = express()

app.get("/api/products", (req, res) => {
  let products = [
    {
      "name": "Warp Engine",
      "price": 1529995,
      "image": "warp-engine.png",
      "category": "transport",
      "description": "A warp engine capable of speeds up to Warp-9.",
      "slug": "warp-engine"
    },
    {
      "name": "Double Retro Laser Blammers",
      "price": 129999,
      "image": "double-retro-laser-blammers.png",
      "category": "weapons",
      "description": "Symetrical, retro-styled laser weapons capable of a combined power of 3 Megawatts! ",
      "slug": "laser-blammers"
    },
    {
      "name": "Cryogenic Chamber",
      "price": 595995,
      "image": "cryogenic-chamber.png",
      "category": "equipment",
      "description": "A single-person cryogencic chamber proven safe for long term cryogenic stasis up to 50 years.",
      "slug": "cryo-chamber"
    },
    {
      "name": "Space Helmet",
      "price": 1275,
      "image": "space-helmet.png",
      "category": "equipment",
      "description": "Don't leave your spaceship with out it!",
      "slug": "helmet"
    },
    {
      "name": "Teleporter",
      "price": 655999,
      "image": "teleporter.png",
      "category": "transport",
      "description": "Our safest teleporter to date with a powerful focused beam capable of cutting through the most annoying interference.",
      "slug": "teleporter"
    },
    {
      "name": "Targeting Viewport",
      "price": 29995,
      "image": "targeting-viewport.png",
      "category": "weapons",
      "description": "A high-resolution targeting viewport which interfaces with all of our weapons.",
      "slug": "viewport"
    },
    {
      "name": "Tractor Beam",
      "price": 345990,
      "image": "tractor-beam.png",
      "category": "weapons",
      "description": "Primarily for transportation on non-animated objects, not recommended for biological transportation.",
      "slug": "tractor-beam"
    },
    {
      "name": "Radar Array",
      "price": 220995,
      "image": "radar-array.png",
      "category": "defense",
      "description": "A powerful radar capable of close range and long range detection up to 1/2 parsec.",
      "slug": "radar-array"
    },
    {
      "name": "Jetpack",
      "price": 12995,
      "image": "jetpack.png",
      "category": "transport",
      "description": "A jetpack providing unparalleled control and safety features.",
      "slug": "jetpack"
    },
    {
      "name": "Universal Translator",
      "price": 9895,
      "image": "universal-translator.png",
      "category": "equipment",
      "description": "Finally an easy way to communicate with all known species!",
      "slug": "translator"
    },
    {
      "name": "Booster Rocket",
      "price": 129980,
      "image": "booster-rocket.png",
      "category": "transport",
      "description": "When raw lifting power in low-tech environments is needed, these booster rockets willd o the job.",
      "slug": "booster-rocket"
    },
    {
      "name": "Shield Generator",
      "price": 485700,
      "image": "shield-generator.png",
      "category": "defense",
      "description": "Don't leave friendly space without our post powerful shield generator to date!",
      "slug": "shield-generator"
    }
  ]
  setTimeout(() => res.send(products), 0)
})

app.listen(8081, () => console.log("API Server listening on port 8081!"))

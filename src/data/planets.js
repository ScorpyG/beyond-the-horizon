const solarSystemInfo = [
  {
    id: 1,
    name: `Sun`,
    radius: `696,340 km`,
    surface_area: `6.08 trillion km²`,
    orbital_time: "N/A",
    description: `The Sun is the star at the center of the Solar System. 
      It is a nearly perfect ball of hot plasma, heated to incandescence 
      by nuclear fusion reactions in its core, radiating the energy mainly 
      as visible light, ultraviolet light, and infrared radiation. It is 
      by far the most important source of energy for life on Earth. 
      The Sun is the largest object in our solar system. The Sun's 
      volume would need 1.3 million Earths to fill it. Its gravity 
      holds the solar system together, keeping everything from the 
      biggest planets to the smallest bits of debris in orbit around it. 
      The hottest part of the Sun is its core, where temperatures top 
      27 million degrees Fahrenheit (15 million degrees Celsius). 
      The Sun's activity, from its powerful eruptions to the steady 
      stream of charged particles it sends out, influences the nature of 
      space throughout the solar system.`,
    link: "https://en.wikipedia.org/wiki/Sun",
  },
  {
    id: 2,
    name: `Mercury`,
    radius: `2,439.7 km`,
    surface_area: `74.8 million km²`,
    orbital_time: `88 days`,
    description: `The smallest planet in our solar system and closest to the 
      Sun—is only slightly larger than Earth's Moon. Mercury is the fastest 
      planet, zipping around the Sun every 88 Earth days. From the surface of 
      Mercury, the Sun would appear more than three times as large as it does 
      when viewed from Earth, and the sunlight would be as much as seven times 
      brighter. Despite its proximity to the Sun, Mercury is not the hottest 
      planet in our solar system - that title belongs to nearby Venus, thanks 
      to its dense atmosphere. Because of Mercury's elliptical - egg-shaped - 
      orbit, and sluggish rotation, the Sun appears to rise briefly, set, and 
      rise again from some parts of the planet's surface. The same thing happens 
      in reverse at sunset.`,
    link: "https://en.wikipedia.org/wiki/Mercury_(planet)",
  },
  {
    id: 3,
    name: `Venus`,
    radius: `6,051.8 km`,
    surface_area: `460.2 million km²`,
    orbital_time: `225 days`,
    description: `Venus is the second planet from the Sun. It is named after 
      the Roman goddess of love and beauty. As the brightest natural object 
      in Earth's night sky after the Moon, Venus can cast shadows and can be 
      visible to the naked eye in broad daylight. Venus has a thick, toxic 
      atmosphere filled with carbon dioxide and it's perpetually shrouded in thick, 
      yellowish clouds of sulfuric acid that trap heat, causing a runaway greenhouse 
      effect. It's the hottest planet in our solar system, even though Mercury is 
      closer to the Sun. Surface temperatures on Venus are about 900 degrees 
      Fahrenheit (475 degrees Celsius) - hot enough to melt lead.  The surface 
      is a rusty color and it's peppered with intensely crunched mountains and 
      thousands of large volcanoes. Scientists think it's possible some volcanoes 
      are still active. Venus has crushing air pressure at its surface - more 
      than 90 times that of Earth - similar to the pressure you'd encounter 
      a mile below the ocean on Earth.`,
    link: "https://en.wikipedia.org/wiki/Venus",
  },
  {
    id: 4,
    name: `Earth`,
    radius: `6,371 km`,
    surface_area: `510.1 million km²`,
    orbital_time: `365 days`,
    description: `Earth is the third planet from the Sun and the only astronomical 
      object known to harbor life. While large amounts of water can be found throughout 
      the Solar System, only Earth sustains liquid surface water. About 71% of Earth's 
      surface is made up of the ocean, dwarfing Earth's polar ice, lakes and rivers. 
      Just slightly larger than nearby Venus, Earth is the biggest of the four planets 
      closest to the Sun, all of which are made of rock and metal. The name Earth is 
      at least 1,000 years old. All of the planets, except for Earth, were named after 
      Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, 
      which simply means "the ground."`,
    link: "https://en.wikipedia.org/wiki/Earth",
  },
  {
    id: 5,
    name: `Mars`,
    radius: `3,389.5 km`,
    surface_area: `144.8 million km²`,
    orbital_time: `687 days`,
    description: `Mars is the fourth planet from the Sun and the second-smallest planet 
      in the Solar System, being larger than only Mercury. In English, Mars carries the 
      name of the Roman god of war and is often referred to as the "Red Planet". Mars is 
      also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, 
      and evidence that it was even more active in the past. Mars is one of the most 
      explored bodies in our solar system, and it's the only planet where we've sent 
      rovers to roam the alien landscape.`,
    link: "https://en.wikipedia.org/wiki/Mars",
  },
  {
    id: 6,
    name: `Jupiter`,
    radius: `69,911 km`,
    surface_area: `61.42 billion km²`,
    orbital_time: `12 years`,
    description: `Jupiter is the fifth planet from the Sun and the largest in the Solar 
      System. It is a gas giant with a mass more than two and a half times that of all 
      the other planets in the Solar System combined, but slightly less than one-thousandth 
      the mass of the Sun. Jupiter's familiar stripes and swirls are actually cold, windy 
      clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. 
      Jupiter's iconic Great Red Spot is a giant storm bigger than Earth that has raged for 
      hundreds of years`,
    link: "https://en.wikipedia.org/wiki/Jupiter",
  },
  {
    id: 7,
    name: `Saturn`,
    radius: `58,232 km`,
    surface_area: `42.7 billion km²`,
    orbital_time: `29 years`,
    description: `Saturn is the sixth planet from the Sun and the second-largest in the Solar 
      System, after Jupiter. It is a gas giant with an average radius of about nine and a half 
      times that of Earth. It only has one-eighth the average density of Earth; however, with 
      its larger volume, Saturn is over 95 times more massive. Adorned with thousands of beautiful 
      ringlets, Saturn is unique among the planets. It is not the only planet to have rings -
      made of chunks of ice and rock - but none are as spectacular or as complicated as Saturn's. 
      Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.`,
    link: "https://en.wikipedia.org/wiki/Saturn",
  },
  {
    id: 8,
    name: `Uranus`,
    radius: `25,362 km`,
    surface_area: `8.083 billion km²`,
    orbital_time: `84 years`,
    description: `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek 
      god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares, 
      grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and 
      fourth-largest planetary mass in the Solar System. It was the first planet found with the 
      aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although 
      he originally thought it was either a comet or a star. It was two years later that the object 
      was universally accepted as a new planet, in part because of observations by astronomer Johann 
      Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George 
      III. Instead, the scientific community accepted Bode's suggestion to name it Uranus, the 
      Greek god of the sky, as suggested by Bode.`,
    link: "https://en.wikipedia.org/wiki/Uranus",
  },
  {
    id: 9,
    name: `Neptune`,
    radius: `24,622 km`,
    surface_area: `7.618 billion km²`,
    orbital_time: `165 years`,
    description: `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar 
      System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the 
      densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin 
      Uranus. Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most 
      distant planet in our solar system. More than 30 times as far from the Sun as Earth, 
      Neptune is the only planet in our solar system not visible to the naked eye and the 
      first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.`,
    link: "https://en.wikipedia.org/wiki/Neptune",
  },
];

export default solarSystemInfo;
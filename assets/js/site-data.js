/* ============================================================================
   GANACHE SAFARIS — WEBSITE CONTENT FILE
   ----------------------------------------------------------------------------
   THIS IS THE ONE FILE YOU EDIT MOST OFTEN.
   You do NOT need to know how to code. Just carefully change the text
   between the quotation marks "like this", and keep the commas and brackets
   exactly where they are.

   TIP: Always keep a backup copy of this file before editing.
   If the site breaks after an edit, you probably deleted a comma "," or a
   quotation mark ". Undo your change and try again.

   The wording below follows the official Ganache Safaris content brief:
     Home · About Us · Safaris & Tours · Destinations · Experiences ·
     Accommodations · Contact Us
   ========================================================================== */

window.SITE_DATA = {

  /* ==========================================================================
     1. BUSINESS DETAILS  —  EDIT BUSINESS DETAILS HERE
     Change the phone number, WhatsApp number, email and social links here ONCE
     and they update automatically everywhere on the website.
     ========================================================================== */
  business: {
    name: "Ganache Safaris",
    tagline: "Where every safari tells a story",
    baseLocation: "Arusha, Tanzania",

    // Phone shown to visitors (you can format this nicely with spaces)
    phoneDisplay: "+255 626 504 207",
    // Phone used for click-to-call links (digits and + only, no spaces)
    phoneLink: "+255626504207",

    // WhatsApp number in INTERNATIONAL format, digits only, no + and no spaces.
    // Tanzania country code is 255.
    whatsappNumber: "255626504207",

    email: "ganachesafaris@gmail.com",

    instagramHandle: "@ganache_safaris",
    instagramUrl: "https://www.instagram.com/ganache_safaris/",

    // Set these if/when you create the accounts. Leave "" to hide the icon.
    facebookUrl: "",
    tripadvisorUrl: "",

    // Used for SEO / sharing. Change to your real domain once published.
    siteUrl: "https://www.ganachesafaris.com"
  },

  /* ==========================================================================
     2. SAFARIS & TOURS  —  EDIT TOUR CONTENT HERE
     The four core tour styles from the brief. These appear on the Home page,
     the "Safaris & Tours" page, and each opens its own detail page.

     >>> IMPORTANT <<<
     These are tour STYLES, not fixed packages, and contain NO prices.
     Every tour is customisable to your dates, interests and budget.

     "category" must be one of: safari, walking, culture, adventure
     ========================================================================== */
  journeys: [
    {
      id: "classic-northern-circuit",
      title: "Classic Northern Circuit",
      category: "safari",
      location: "Arusha · Tarangire · Lake Manyara · Ngorongoro · Serengeti",
      style: "Classic wildlife safari",
      duration: "7–10 days",
      image: "assets/images/photos/lion.jpg",
      summary: "The quintessential Tanzanian safari — the country's most famous parks and world heritage sites in one unforgettable loop.",
      highlights: [
        "Elephant-rich landscapes of Tarangire National Park",
        "Birdlife and forests of Lake Manyara",
        "The wildlife-dense Ngorongoro Crater",
        "The vast golden plains of the Serengeti — home of the Great Migration",
        "Lions, leopards, cheetahs, rhinos, elephants, giraffes and countless birds"
      ],
      bestFor: "First-time travellers, wildlife enthusiasts, couples, families and photographers.",
      season: "Good year-round; June to October for classic dry-season game viewing."
    },
    {
      id: "walking-wildlife-hybrid",
      title: "Walking & Wildlife Hybrid",
      category: "walking",
      location: "Private conservancies · Designated walking areas · Northern parks",
      style: "Game drives and guided bush walks",
      duration: "6–9 days",
      image: "assets/images/photos/img_3387.jpg",
      summary: "A more intimate connection with nature — traditional game drives blended with guided bush walks led by expert guides.",
      highlights: [
        "Track animal footprints and read the signs of the bush on foot",
        "Learn to identify medicinal plants and smaller wildlife",
        "Observe wildlife safely with professional walking guides",
        "Slow the pace and absorb the whole ecosystem around you",
        "Combine walking areas with classic game-drive parks"
      ],
      bestFor: "Active travellers, conservationists, and anyone curious about animal behaviour and ecology.",
      season: "Best in the drier months when walking conditions are at their finest."
    },
    {
      id: "cultural-conservation-journey",
      title: "Cultural & Conservation Journey",
      category: "culture",
      location: "Maasai · Hadzabe · Datoga communities · Conservation projects",
      style: "Wildlife, culture and conservation",
      duration: "7–10 days",
      image: "assets/images/photos/img_2116.jpg",
      summary: "Wildlife exploration combined with meaningful cultural exchange and hands-on conservation awareness.",
      highlights: [
        "Days exploring Tanzania's rich natural landscapes",
        "Evenings with Maasai elders, Hadzabe hunter-gatherers or Datoga artisans",
        "Storytelling, traditional cooking and craft experiences",
        "Visit community-led projects, anti-poaching units or research centres",
        "Learn the behind-the-scenes work of preserving Tanzania's biodiversity"
      ],
      bestFor: "Socially conscious travellers, educators, families with teens, and volunteers seeking connection beyond sightseeing.",
      season: "Available year-round; we time community visits respectfully around each calendar."
    },
    {
      id: "adventure-combo",
      title: "Adventure Combo",
      category: "adventure",
      location: "Kilimanjaro or Meru · Tarangire · Serengeti · Zanzibar",
      style: "Safari and active adventure",
      duration: "10–14 days",
      image: "assets/images/photos/kilimanjaro.jpg",
      summary: "The perfect blend of safari and active pursuits for adrenaline seekers and multi-interest travellers.",
      highlights: [
        "Climb Mount Kilimanjaro or Mount Meru",
        "Thrilling safari through Tarangire and the Serengeti",
        "Optional biking through local villages",
        "Canoeing on Lake Duluti or Lake Momella",
        "Scuba diving or snorkelling in Zanzibar"
      ],
      bestFor: "Adventure groups, fit couples, and experience-driven travellers who want more than a traditional safari.",
      season: "Climbing is best in the drier months; we make no guarantee of reaching any summit."
    }
  ],

  /* ==========================================================================
     3. DESTINATIONS  —  EDIT DESTINATION CONTENT HERE
     The five destinations from the brief. Appears on the Destinations page
     and the Home "Explore Tanzania" section.
     ========================================================================== */
  destinations: [
    {
      id: "serengeti",
      name: "Serengeti National Park",
      image: "assets/images/photos/serengeti.jpg",
      overview: "One of the most iconic safari destinations on earth — endless golden plains, an unrivalled density of wildlife, and the epic Great Migration of over a million wildebeest.",
      whyVisit: "Classic big-cat country, the drama of the migration in season, and pure safari magic at every horizon.",
      bestFor: "Wildlife lovers and first-time safari-goers.",
      suggested: ["Multi-day game drives", "Hot-air balloon at dawn (optional)", "Migration-season viewing", "The Big Five, cheetahs and hyenas"]
    },
    {
      id: "ngorongoro",
      name: "Ngorongoro Crater",
      image: "assets/images/photos/ngorongoro.jpg",
      overview: "The 'Eighth Wonder of the World' — a UNESCO World Heritage Site and the world's largest unbroken, unflooded volcanic caldera, some 20km across and 600m deep.",
      whyVisit: "One of the best places on earth to see the Big Five in a single day, in a stunning natural amphitheatre.",
      bestFor: "Travellers who want abundant wildlife in one breathtaking landscape.",
      suggested: ["Full-day crater descent", "Rhinos, lions, hippos and flamingos", "Rim viewpoints and photography", "Maasai cultural encounters"]
    },
    {
      id: "tarangire",
      name: "Tarangire National Park",
      image: "assets/images/photos/tarangire.jpg",
      overview: "Known for its ancient baobab trees and dense elephant population, Tarangire is an often-overlooked gem, traversed by the wildlife-drawing Tarangire River.",
      whyVisit: "Superb elephant viewing and beautiful baobab landscapes, with fewer crowds and plenty of open space.",
      bestFor: "Photographers and returning travellers wanting somewhere less crowded.",
      suggested: ["Dry-season game drives", "Great herds of elephants", "Baobab landscapes", "A relaxed start to the Northern Circuit"]
    },
    {
      id: "lake-manyara",
      name: "Lake Manyara National Park",
      image: "assets/images/photos/img_3398.jpg",
      overview: "A lush green oasis at the base of the Great Rift Valley escarpment — groundwater forests, open plains, acacia woodlands and an alkaline lake, all in one compact park.",
      whyVisit: "Famous tree-climbing lions, large troops of baboons, and thousands of pink flamingos in a rich, biodiverse setting.",
      bestFor: "Bird lovers and nature lovers wanting a varied change of scenery.",
      suggested: ["Birdwatching and flamingos", "Groundwater forest", "Tree-climbing lions", "A stop en route to Ngorongoro"]
    },
    {
      id: "zanzibar",
      name: "Zanzibar & Coast",
      image: "assets/images/photos/zanzibar.jpg",
      overview: "White sand beaches, turquoise waters and Swahili-Arabian history. Explore Stone Town, a UNESCO Heritage Site of winding alleys, spice markets and historic architecture.",
      whyVisit: "The perfect place to unwind after safari, with marine adventures and secluded coastal retreats.",
      bestFor: "Couples, honeymooners, families and anyone wanting rest after safari or a climb.",
      suggested: ["Beach time and dhow sailing", "Stone Town and spice tours", "Snorkelling, scuba diving and dolphins", "Quieter retreats at Pangani or Mafia Island"]
    }
  ],

  /* ==========================================================================
     4. EXPERIENCES  —  EDIT EXPERIENCE CONTENT HERE
     The four experiences from the brief. These appear on the Home
     "Ways to experience Tanzania" section and the Experiences page.
     ========================================================================== */
  experiences: [
    {
      id: "walking-safaris",
      title: "Walking Safaris",
      short: "Step out of the vehicle and into nature, led by professional walking guides and armed rangers.",
      image: "assets/images/photos/img_3523.jpg",
      long: "Step out of the vehicle and into nature with a guided walking safari. Led by professional walking guides and armed rangers, walking safaris bring you face-to-face with the raw wilderness. Learn how to read animal tracks, observe birds up close, and explore the smaller details of the ecosystem — the insects, plants and animal behaviour. These safaris are ideal for those who want to feel truly connected to the bush."
    },
    {
      id: "hot-air-ballooning",
      title: "Hot-Air Ballooning",
      short: "Soar above the savannah at sunrise, then land to a champagne breakfast in the wild.",
      image: "assets/images/photos/balloon.jpg",
      long: "Soar above the vast savannah at sunrise in a hot-air balloon — a once-in-a-lifetime experience. Watch as herds of elephants, wildebeest and giraffes roam freely below, with the morning light casting golden hues over the landscape. After landing, enjoy a champagne breakfast in the wild, surrounded by the sounds of nature. This experience is available in the Serengeti and other select locations."
    },
    {
      id: "night-drives",
      title: "Night Drives",
      short: "Discover a different side of the bush after sunset, searching for nocturnal wildlife by spotlight.",
      image: "assets/images/photos/img_2265.jpg",
      long: "Discover a different side of the bush after sunset with a guided night game drive. Using spotlights, you'll search for nocturnal wildlife that rarely shows itself during the day — genets, bush babies, civets, owls, porcupines, and even elusive predators like leopards. Night drives offer a thrilling and educational look at Africa's lesser-seen wildlife behaviours."
    },
    {
      id: "cultural-encounters",
      title: "Cultural Encounters",
      short: "Genuine, respectful time with Maasai, Hadzabe and local communities.",
      image: "assets/images/photos/img_2116.jpg",
      long: "Our cultural experiences are crafted with respect and authenticity. Visit Maasai villages to learn about their traditions, beadwork and way of life. Spend time with the Hadzabe, one of the last hunter-gatherer communities in East Africa. Participate in traditional cooking, drumming sessions, or community-based conservation programmes. These encounters foster mutual understanding and ensure that tourism benefits local communities."
    }
  ],

  /* ==========================================================================
     5. ACCOMMODATIONS  —  EDIT ACCOMMODATION CONTENT HERE
     The three accommodation styles from the brief. Appears on the
     Accommodations page. We match the style of stay to your trip and budget.
     ========================================================================== */
  accommodations: [
    {
      id: "luxury-lodges",
      name: "Luxury Lodges",
      image: "assets/images/photos/acc-luxury-lodge.jpg",
      overview: "Permanent lodges with spacious rooms, en-suite bathrooms, fine dining and sweeping views over the parks. The most comfortable way to end a day in the wild.",
      bestFor: "Travellers who want comfort, service and a touch of indulgence after their game drives.",
      features: ["Spacious en-suite rooms", "Restaurants, bars and lounges", "Pools and viewing decks", "Prime locations near the wildlife"]
    },
    {
      id: "tented-camps",
      name: "Tented Camps",
      image: "assets/images/photos/acc-tented-camp.jpg",
      overview: "Classic safari canvas with real beds, en-suite facilities and private verandas — the romance of camping with the comfort of a lodge, close to the sights and sounds of the bush.",
      bestFor: "Travellers wanting an authentic safari atmosphere without giving up comfort.",
      features: ["Walk-in canvas tents with real beds", "En-suite bathrooms", "Private verandas over the bush", "Dining under the stars"]
    },
    {
      id: "mobile-camps",
      name: "Mobile Camps",
      image: "assets/images/photos/acc-mobile-camp.jpg",
      overview: "Light, seasonal camps that move with the wildlife — following the Great Migration and setting up in remote, exclusive corners of the parks for a true wilderness immersion.",
      bestFor: "Adventurous travellers who want to be right in the heart of the action, away from the crowds.",
      features: ["Follows the migration through the year", "Remote, exclusive locations", "Comfortable safari-style tents", "An immersive, back-to-nature stay"]
    }
  ],

  /* ==========================================================================
     6. TRAVELLER STORIES / TESTIMONIALS  —  EDIT TESTIMONIALS HERE
     >>> IMPORTANT <<<
     We have NOT invented any reviews. Leave this list EMPTY until you have
     genuine permission-based reviews from real travellers.
     While it is empty, the website politely shows "Traveller stories coming soon."

     To add a real review, copy this template into the list below:
     { name: "First name, Country", trip: "Which trip", quote: "Their words" },
     ========================================================================== */
  testimonials: [
    // Example (DELETE this line and add real reviews only):
    // { name: "Sarah, United Kingdom", trip: "Classic Northern Circuit", quote: "..." },
  ],

  /* ==========================================================================
     7. "THE GANACHE SAFARIS ADVANTAGE"  —  EDIT HERE
     From the brief's advantage table. Kept honest and defensible.
     ========================================================================== */
  whyGanache: [
    { title: "Personalized Service",
      text: "A boutique touch, just like the best operators — every journey planned around you, not squeezed into a fixed package." },
    { title: "Local Guides & Staff",
      text: "Fluent local guides offering genuine cultural insight and storytelling, drawn from a life lived in this landscape." },
    { title: "Comfort Options",
      text: "Vehicles and lodgings tailored to your preferences, from luxury lodges to authentic tented and mobile camps." },
    { title: "Responsible Travel",
      text: "Eco-friendly practices and real community engagement, so your journey benefits the places and people you visit." },
    { title: "Full-Service Planning",
      text: "Seamless in-country support from arrival to departure — real people looking after every detail of your trip." }
  ]
};

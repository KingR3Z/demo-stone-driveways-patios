export const client = {
  // Business Details
  name: "STONE Driveways & Patios",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Canterbury.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01227 806917",
  email: "",
  website: "",

  // Location
  address: "Canterbury",
  city: "Canterbury",
  county: "",
  postcode: "",
  basedIn: "Canterbury",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "9",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Jason Green", rating: 5, text: "Martin and his team put in a new tarmac drive for me. They did a great job at a great price. It was professionally done and the guys were really friendly and kept me involved all the way through the process. The workmanship was top quality …  ", date: "4 years ago" },
    { name: "Roshan Thapa Magar", rating: 5, text: "First of all, Martin from Stone Driveways and Patios explained to me how the driveway would look like when it is done and he even added an extra service which I was not aware of. For example, he added step on the door ways which is easy to …  ", date: "5 years ago" },
    { name: "David Bushell", rating: 5, text: "STONE Driveways and Patios have just finished our patio and garden paths. The work was done professionally in a timely fashion by a skilled, hard working, polite and friendly team. We are absolutely delighted with the job that followed our …  ", date: "5 years ago" },
    { name: "Fionnuala Stanley", rating: 5, text: "Martin and his team have done an amazing job putting in a driveway as well as a garden patio area which allows wheelchair access and safety. No ramps were necessary as the paving was laid in such a manner that they were not needed anymore. …  ", date: "4 years ago" },
    { name: "Don Bone", rating: 5, text: "We have just had a new sandstone patio installed to the rear of our house by Stone Driveways & Patios. It took slightly longer than expected but the end result was worth the wait. Very friendly and easy going team all working to ensure we got the end", date: "4 years ago" },
    { name: "Michael Smith", rating: 5, text: "I used Stone Driveways to provide a Resin driveway. They were very professional and reliable throughout the project and their attention to detail and standard of work was outstanding. Highly recommended.  ", date: "5 years ago" },
    { name: "Pat Daniell", rating: 5, text: "From day 1 Martin and team came to me I need a new driveway installed I had health issues they looked after me so much martin and team went above and beyond so skilled and professional at every aspect the end product was fantastic I recommend them hi", date: "5 years ago" },
    { name: "Alan THORNTON", rating: 5, text: "Martin and his friendly team improved the appearance of our drive and did an excellent jobPositive…  ", date: "4 years ago" },
    { name: "Mary Harris", rating: 5, text: "Perfect team .100% work. Would recommend  them to anyone.PositiveRespo…  ", date: "4 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "STONE Driveways & Patios | Landscaper in Canterbury",
    description: "Professional landscaper in Canterbury. 5.0-star rated on Google. Call for a free quote.",
  },
};

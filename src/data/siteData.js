import { Heart, Camera, MapPin, Sparkles, Gift, Palette, Music, Star, Users, Phone } from 'lucide-react';

export const navigationItems = [
  { id: 'home', label: 'Home', icon: Heart },
  { id: 'venues', label: 'Venues', icon: MapPin },
  { id: 'photography', label: 'Photography', icon: Camera },
  { id: 'decorators', label: 'Decorators', icon: Palette },
  { id: 'makeover', label: 'Makeover', icon: Sparkles },
  { id: 'entertainers', label: 'Entertainers', icon: Music },
  { id: 'gifts', label: 'Gifts', icon: Gift },
  { id: 'destination', label: 'Destination', icon: Star },
  { id: 'specials', label: 'Specials', icon: Heart },
  { id: 'about', label: 'About Us', icon: Users },
  { id: 'contact', label: 'Contact', icon: Phone }
];

export const venues = [
    {
      name: "Royal Palace Gardens",
      location: "Delhi",
      capacity: "500-1000 guests",
      price: "₹5,00,000",
      image: "🏰",
      features: ["Garden Setting", "AC Banquet", "Parking", "Catering Kitchen"],
      rating: 4.8
    },
    {
      name: "Sunset Beach Resort",
      location: "Goa",
      capacity: "200-500 guests",
      price: "₹8,00,000",
      image: "🏖️",
      features: ["Beach View", "Pool Side", "Rooms Available", "Destination Wedding"],
      rating: 4.9
    },
    {
      name: "Heritage Haveli",
      location: "Rajasthan",
      capacity: "300-800 guests",
      price: "₹7,00,000",
      image: "🕌",
      features: ["Heritage Property", "Courtyard", "Traditional Decor", "Cultural Shows"],
      rating: 4.7
    }
];

export const photographers = [
    {
      name: "Arjun Photography",
      speciality: "Cinematic Wedding Films",
      experience: "8+ years",
      price: "₹1,50,000",
      image: "📸",
      portfolio: ["Pre-wedding", "Ceremony", "Reception", "Candid Moments"],
      rating: 4.9
    },
    {
      name: "Priya Captures",
      speciality: "Traditional & Modern",
      experience: "6+ years",
      price: "₹1,20,000",
      image: "🎥",
      portfolio: ["Destination", "Cultural Events", "Family Portraits", "Drone Shots"],
      rating: 4.8
    },
    {
      name: "Digital Dreams Studio",
      speciality: "Luxury Weddings",
      experience: "10+ years",
      price: "₹2,00,000",
      image: "🎬",
      portfolio: ["Celebrity Weddings", "International", "Fashion Style", "Album Design"],
      rating: 5.0
    }
];

export const decorators = [
    {
      name: "Floral Fantasy",
      speciality: "Fresh Flower Decor",
      style: "Elegant & Classic",
      price: "₹2,50,000",
      image: "🌸",
      services: ["Mandap Design", "Stage Decor", "Entry Gates", "Centerpieces"],
      rating: 4.7
    },
    {
      name: "Royal Events Decor",
      speciality: "Theme-based Decoration",
      style: "Royal & Luxurious",
      price: "₹4,00,000",
      image: "👑",
      services: ["Palace Theme", "Garden Setup", "Lighting", "Props & Draping"],
      rating: 4.8
    },
    {
      name: "Modern Magic Decor",
      speciality: "Contemporary Designs",
      style: "Modern & Chic",
      price: "₹3,50,000",
      image: "✨",
      services: ["LED Setups", "Minimalist Design", "Color Themes", "Photo Booths"],
      rating: 4.9
    }
];

export const makeoverArtists = [
    {
      name: "Glamour by Priya",
      speciality: "Bridal Makeover",
      experience: "12+ years",
      price: "₹50,000",
      image: "💄",
      services: ["Bridal Makeup", "Hair Styling", "Mehendi", "Trial Sessions"],
      rating: 4.9
    },
    {
      name: "Beauty Bliss Studio",
      speciality: "HD & Airbrush",
      experience: "8+ years",
      price: "₹35,000",
      image: "💅",
      services: ["HD Makeup", "Airbrush", "Family Makeup", "Groom Styling"],
      rating: 4.8
    },
    {
      name: "Radiant Looks",
      speciality: "Traditional & Modern",
      experience: "10+ years",
      price: "₹45,000",
      image: "👸",
      services: ["Regional Styles", "Destination Ready", "Quick Touch-ups", "Accessories"],
      rating: 4.7
    }
];

export const entertainers = [
    {
      name: "Bollywood Beats Band",
      type: "Live Music Band",
      experience: "15+ years",
      price: "₹2,00,000",
      image: "🎵",
      specialities: ["Bollywood Hits", "Classical Music", "DJ Services", "Sound System"],
      rating: 4.8
    },
    {
      name: "Cultural Dance Troupe",
      type: "Traditional Dancers",
      experience: "10+ years",
      price: "₹1,50,000",
      image: "💃",
      specialities: ["Bharatanatyam", "Punjabi Folk", "Rajasthani", "Contemporary"],
      rating: 4.9
    },
    {
      name: "Magic & More Entertainment",
      type: "Multi-entertainment",
      experience: "8+ years",
      price: "₹1,00,000",
      image: "🎭",
      specialities: ["Magic Shows", "Stand-up Comedy", "Games", "Kids Entertainment"],
      rating: 4.7
    }
];

export const returnGifts = [
    {
      category: "Traditional Gifts",
      items: ["Silver Items", "Brass Artifacts", "Handcrafted Boxes", "Religious Items"],
      priceRange: "₹200 - ₹2,000",
      image: "🎁",
      popular: true
    },
    {
      category: "Modern Gifts",
      items: ["Personalized Mugs", "Photo Frames", "Bluetooth Speakers", "Power Banks"],
      priceRange: "₹300 - ₹1,500",
      image: "🎀",
      popular: false
    },
    {
      category: "Eco-Friendly",
      items: ["Plant Saplings", "Bamboo Items", "Organic Products", "Handmade Soaps"],
      priceRange: "₹150 - ₹800",
      image: "🌱",
      popular: true
    },
    {
      category: "Gourmet Treats",
      items: ["Sweets Box", "Dry Fruits", "Chocolates", "Tea/Coffee Sets"],
      priceRange: "₹250 - ₹1,200",
      image: "🍫",
      popular: false
    }
];

export const destinations = [
    {
      location: "Udaipur, Rajasthan",
      type: "Palace Wedding",
      duration: "3-4 Days",
      price: "₹25,00,000",
      image: "🏰",
      highlights: ["Lake Palace", "Royal Treatment", "Cultural Shows", "Heritage Experience"],
      season: "Oct - Mar"
    },
    {
      location: "Goa Beaches",
      type: "Beach Wedding",
      duration: "2-3 Days",
      price: "₹18,00,000",
      image: "🏖️",
      highlights: ["Sunset Ceremony", "Beach Party", "Water Sports", "Relaxed Vibe"],
      season: "Nov - Feb"
    },
    {
      location: "Kerala Backwaters",
      type: "Houseboat Wedding",
      duration: "2-3 Days",
      price: "₹15,00,000",
      image: "🛥️",
      highlights: ["Unique Venue", "Scenic Beauty", "Traditional Food", "Peaceful Setting"],
      season: "Sep - Mar"
    }
];

export const specialPackages = [
    {
      name: "Budget Bliss Package",
      price: "₹8,00,000",
      originalPrice: "₹12,00,000",
      savings: "₹4,00,000",
      image: "💝",
      includes: [
        "Venue Booking (1 Day)",
        "Basic Photography",
        "Simple Decoration",
        "Makeup Artist",
        "Return Gifts (100 pieces)"
      ],
      popular: false
    },
    {
      name: "Royal Romance Package",
      price: "₹18,00,000",
      originalPrice: "₹25,00,000",
      savings: "₹7,00,000",
      image: "👑",
      includes: [
        "Premium Venue (2 Days)",
        "Cinematic Photography + Videography",
        "Luxury Decoration",
        "Professional Makeup & Hair",
        "Live Entertainment",
        "Premium Return Gifts (200 pieces)"
      ],
      popular: true
    },
    {
      name: "Destination Dreams Package",
      price: "₹35,00,000",
      originalPrice: "₹45,00,000",
      savings: "₹10,00,000",
      image: "✈️",
      includes: [
        "Destination Venue (3 Days)",
        "Professional Photography Team",
        "Complete Event Management",
        "Guest Accommodation",
        "Transportation",
        "Multiple Events Coverage"
      ],
      popular: false
    }
];
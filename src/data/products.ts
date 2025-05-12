
interface Product {
  id: string;
  name: string;
  model: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "9f-5aw",
    name: "Oxygen Concentrator",
    model: "9F-5AW",
    description: "The 9F-5AW Oxygen Concentrator has a built-in pulse-oximeter with retractable cable and a large back-lit LCD screen for continuous monitoring of oxygen saturation of the patient. The back light has adjustable brightness for comfort. It has a nebulizer outlet, built-in timer and includes a remote control for easy control by the patient. The flow meter is also back-lit. This model features a self-diagnosis system and comes with multiple safety alarms. The precision compressor is made with German technology and has a service life of over 8,000 hours. The air inlet is situated at the top of the unit to reduce intake of dust particles and improve longevity.",
    shortDescription: "Advanced oxygen concentrator with built-in pulse-oximeter and LCD screen.",
    price: 999.00,
    image: "/lovable-uploads/a60a736a-0a66-40bd-ab32-8e530831a4c8.png",
    category: "Concentrators",
    features: [
      "Built-in Pulse Oximeter",
      "Back-lit LCD screen",
      "Back-lit flow meter",
      "Remote control",
      "Nebulizer air outlet",
      "Top tray for storage of accessories",
      "Power failure alarm",
      "Low oxygen alarm",
      "Pressure alarm",
      "Compressor failure alarm"
    ],
    specifications: {
      "Power": "AC 220V @ 50 Hz, 400 VA",
      "Flow range": "0.5 - 5.0 LPM",
      "Oxygen concentration": "93% +/- 3%",
      "Output pressure": "40-70 kPa",
      "Operating noise": "< 49.5 dB (front), 52 dB (overall)",
      "Net weight": "18kg"
    },
    inStock: true
  },
  {
    id: "8f-5a",
    name: "Oxygen Concentrator",
    model: "8F-5A",
    description: "This is a compact and light-weight Oxygen Concentrator with 5 LPM capacity. It has a built-in LCD display with timer function. This model features a self-diagnosis system and comes with multiple safety alarms. The precision compressor is made with German technology and has a service life of over 8,000 hours. This model is also highly suitable for rental agencies with its light weight and large top handle making it easy to transport.",
    shortDescription: "Compact and lightweight oxygen concentrator for home and travel use.",
    price: 799.00,
    image: "/lovable-uploads/32c1b606-17b4-4316-8ead-37af40ff6047.png",
    category: "Concentrators",
    features: [
      "Compact design",
      "Lightweight",
      "Built-in LCD display",
      "Timer function",
      "Self-diagnosis system",
      "Multiple safety alarms",
      "Large top handle for easy transport",
      "German technology precision compressor"
    ],
    specifications: {
      "Power": "AC 220V @ 50 Hz, 400 VA",
      "Flow range": "0.5 - 5.0 LPM",
      "Oxygen concentration": "95.5% - 87%",
      "Output pressure": "40 - 70 kPa",
      "Operating noise": "48 dB (front), 52 dB (overall)",
      "Net weight": "15.5kg"
    },
    inStock: true
  },
  {
    id: "7f-5",
    name: "Oxygen Concentrator",
    model: "7F-5",
    description: "The 7F-5 is an economical oxygen concentrator with 5 LPM capacity. Full plastic outer shell makes it durable and safe. The angled control panel makes it very easy to use. It has multiple safety functions like power failure alarm, pressure relief valve, high & low pressure alarm, thermal protection etc., making it a very reliable unit.",
    shortDescription: "Economical oxygen concentrator with durable plastic casing.",
    price: 699.00,
    image: "/lovable-uploads/c07e2c48-c94e-4210-9b15-f35ae0fbcdcb.png",
    category: "Concentrators",
    features: [
      "Economical design",
      "Durable plastic casing",
      "Angled control panel for easy use",
      "Multiple safety features",
      "Power failure alarm",
      "Pressure relief valve",
      "High & low pressure alarm",
      "Thermal protection"
    ],
    specifications: {
      "Power": "AC 220V @ 50 Hz, 500VA",
      "Oxygen flow rate": "0.5 - 5.0 LPM",
      "Oxygen concentration": "95.5% - 87%",
      "Output pressure": "40 - 70 kPa",
      "Operating noise": "53 dB",
      "Weight": "27kg"
    },
    inStock: true
  },
  {
    id: "7f-10",
    name: "Oxygen Concentrator",
    model: "7F-10",
    description: "The 7F-10 is a high-capacity oxygen concentrator with 10 LPM capacity. Full plastic outer shell makes it durable and safe. The angled control panel makes it very easy to use. It has multiple safety functions like power failure alarm, pressure relief valve, high & low pressure alarm, thermal protection etc., making it a very reliable unit.",
    shortDescription: "High-capacity oxygen concentrator for intensive use.",
    price: 1299.00,
    image: "/lovable-uploads/a47ec680-b7ae-4df2-a369-3b40c061ae37.png",
    category: "Concentrators",
    features: [
      "High capacity - 10 LPM",
      "Durable plastic casing",
      "Angled control panel for easy use",
      "Multiple safety features",
      "Power failure alarm",
      "Pressure relief valve",
      "High & low pressure alarm",
      "Thermal protection"
    ],
    specifications: {
      "Power": "AC 220V @ 50 Hz, 850VA",
      "Oxygen flow rate": "0.5 - 10.0 LPM",
      "Oxygen concentration": "95.5% - 87%",
      "Output pressure": "40 - 70 kPa",
      "Operating noise": "< 60 dB",
      "Weight": "33kg"
    },
    inStock: true
  },
  {
    id: "spirit-3",
    name: "Portable Oxygen Concentrator",
    model: "SPIRIT-3",
    description: "The SPIRIT-3 portable oxygen concentrator has the ability to satisfy patients' lifestyle needs while providing ruggedness and reliability. It is small, lightweight and durable in real-world environments. The long-life external battery reduces service costs and lasts up to 5 hours. It has a large LCD screen which is easy-to-read, and also features a built-in automatic warning system. A case is provided to carry comfortably by hand or shoulder.",
    shortDescription: "Portable oxygen concentrator with up to 5 hours battery life.",
    price: 1499.00,
    image: "/lovable-uploads/c42a73b7-a026-410f-8e4a-ea1038c8a2cf.png",
    category: "Portable",
    features: [
      "Portable design",
      "Lightweight and durable",
      "Long-life external battery (up to 5 hours)",
      "Large LCD screen",
      "Built-in automatic warning system",
      "Carrying case included",
      "Pulse flow (4 levels)"
    ],
    specifications: {
      "Mode": "Pulse (1 - 4 levels)",
      "Power": "14.4 V lithium battery",
      "Flow range": "1 - 3.5 LPM",
      "Oxygen concentration": "96% - 90%",
      "Operating noise": "55 dB",
      "Net weight": "2.5 kg with battery"
    },
    inStock: true
  },
  {
    id: "yuwell-5f",
    name: "Oxygen Concentrator",
    model: "Yuwell-5F",
    description: "The Yuwell-5F oxygen concentrator combines reliability with modern design. This concentrator features a user-friendly digital interface with precise flow control and oxygen purity monitoring. Its noise reduction technology makes it one of the quietest options available, perfect for nighttime use. The device includes smart alerts for filter changes and maintenance needs.",
    shortDescription: "Modern, quiet oxygen concentrator with digital interface and smart alerts.",
    price: 899.00,
    image: "/lovable-uploads/5095e7bc-6b99-4cce-a2f8-23c01fa0a964.png",
    category: "Concentrators",
    features: [
      "Digital interface with touchscreen controls",
      "Ultra-quiet operation",
      "Smart maintenance alerts",
      "Energy efficient design",
      "Precise flow control",
      "Oxygen purity monitoring",
      "Small footprint design",
      "HEPA filtration system"
    ],
    specifications: {
      "Power": "AC 220V @ 50 Hz, 380 VA",
      "Flow range": "0.5 - 5.0 LPM",
      "Oxygen concentration": "96% - 88%",
      "Output pressure": "40 - 70 kPa",
      "Operating noise": "< 45 dB",
      "Weight": "16kg"
    },
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (id: string, limit: number = 4): Product[] => {
  const currentProduct = getProductById(id);
  if (!currentProduct) return [];
  
  return products
    .filter(product => product.id !== id && product.category === currentProduct.category)
    .slice(0, limit);
};

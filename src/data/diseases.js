export const diseases = [
  {
    id: 0,
    slug: 'bacterial_spot',
    name: 'Bacterial Spot',
    symptoms:
      'Brownish dark water soaked spots appear on leaves. Then these spots turn black, and eventually the affected tissue falls off leaving holes in the leaves. Black spots emerge which then become scab-like spots appearing simultaneously on the fruit.',
    cause: 'Bacteria Xanthomonas Perforans',
    prevention: [
      'Only use certified disease-free seeds and plants',
      'Avoid areas planted with peppers or tomatoes for the previous year',
      'Avoid overhead irrigation',
      'Prune plants to improve air circulation',
      'Practice good sanitation such as plowing straw',
      'Control weeds',
    ],
    treatment: [
      'Spraying with copper fungicide will provide fairly good control of bacterial diseases',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 1,
    slug: 'early_blight',
    name: 'Early Blight',
    symptoms:
      'Irregular large black spots, tissue death surrounded by larger yellow areas. Leaf spots have a characteristic concentric band appearance (oyster shell or bullseye).',
    cause: 'Fungus Alternaria Linariae (A. solani)',
    prevention: [
      'Use tomato cultivars that are resistant or tolerant',
      'Use pathogen-free seeds',
      'Do not plant sick plants in the field',
      'Use crop rotation, control tomato plant weeds',
      'Fertilize plants properly',
      'Do not wet tomato leaves with irrigation water',
      'Test garden soil annually and maintain sufficient potassium levels',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper fungicides can control this disease',
      'Prune and remove infected branches and lower leaves.',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 2,
    slug: 'late_blight',
    name: 'Late Blight',
    symptoms:
      'Mostly wet-looking areas appear on the leaves, which eventually turn brown and thin. Large irregular greenish-brown spots also appear on the fruit with a rough oily appearance. The stem appears irregularly green to black',
    cause: 'Pathogen Phytophthora Infestans',
    prevention: [
      'Keep the leaves dry. Place plants in a location that will receive morning sunlight',
      'Provide extra space between plants, and avoid overhead irrigation, especially in the evening',
      'Buy disease-free certified seeds and plants',
      'Handle weeds',
      'Do not make rotten compost',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper fungicides can control this disease',
      'Prune and remove infected branches and lower leaves',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 3,
    slug: 'leaf_mold',
    name: 'Leaf Mold',
    symptoms:
      'Appears as light green spots on the upper surface of older leaves. Under the leaves in this area, purple or olive green spots of fungal growth are visible. Infected leaves turn yellow and drop off the plant.',
    cause: 'Fungus Passalora Fulva',
    prevention: [
      'Remnants / old plants should be removed from the field',
      'Checking and pruning plants to improve air circulation helps control the disease',
      'Place tomato plants further apart for better air circulation between plants',
      'Avoid wetting leaves when watering',
      'Rotate with vegetables other than tomatoes',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper fungicides can control this disease',
      'Prune and remove infected branches and lower leaves',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 4,
    slug: 'septoria_leaf_spot',
    name: 'Septoria Leaf Spot',
    symptoms:
      'Circular lesions like water-soaked occur first on older leaves. These spots then turn brown with gray centers and die, and if the infection is severe enough, the entire leaf will die',
    cause: 'Fungus Septoria Lycopersici',
    prevention: [
      'Do not plant tomato cultivars because most tomato cultivars currently planted are susceptible to Septoria leaf spot',
      'Rotate / rotate plants for 3 years and sanitation (removal of plant residues)',
      'Do not use overhead irrigation',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper fungicides can control this disease',
      'Prune and remove infected branches and lower leaves',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 5,
    slug: 'spider_mites/two_spotted_spider_mite',
    name: 'Spider Mites / Two-Spotted Spider Mite',
    symptoms:
      'Leaves turn whitish-yellow and spotted. Red spider mites can be found on both sides of the leaves but prefer the lower part near the leaf veins. There are small web-like weaves especially on the underside of the leaves.',
    cause: 'Tetranychus evansi',
    prevention: [
      'Maintain good land cleanliness',
      'Clean weeds periodically',
      'Regularly monitor your plants',
      'Keep records related to the arrival of diseases for future preparation materials',
    ],
    treatment: [
      'Caring for, removing or quarantining affected plants to prevent spread',
      'There is still no miticide to fight this pest',
    ],
    ref: [
      {
        name_ref: 'DPI NSW',
        link: 'Https://www.dpi.nsw.gov.au/biosecurity/plant/insect-pests-and-plant-diseases/Tomato-red-spider-mite',
      },
    ],
  },
  {
    id: 6,
    slug: 'target_spot',
    name: 'Target Spot',
    symptoms:
      'The initial symptoms on leaves are small water-soaked spots on the upper leaf surface. The spots develop into small necrotic lesions with light brown centers and dark edges',
    cause: 'Pathogen Corynespora Cassiicola',
    prevention: [
      'Increase air flow through the canopy with wider plant spacing',
      'Avoid excessive nitrogen fertilization, which can cause overly dense canopy formation. Pruning sucker and old leaves in the lower canopy can also increase air flow and reduce leaf wetness',
      'Avoid planting tomatoes near old plants',
      'Check seedlings for target spot symptoms before transplanting',
      'Manage weeds, which can serve as alternative hosts',
      'Avoid the use of overhead irrigation',
      'Destroy plant residues immediately after the last harvest',
      'Move away from tomatoes and other known hosts for at least three years',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper fungicides can control this disease',
      'Prune and remove infected branches and lower leaves',
    ],
    ref: [
      {
        name_ref: 'Vegetables Bayer',
        link: 'Https://www.vegetables.bayer.com/ca/en-ca/resources/agronomic-spotlights/target-spot-of-tomato.html',
      },
    ],
  },
  {
    id: 7,
    slug: 'yellow_leaf_curl_virus',
    name: 'Tomato Yellow Leaf Curl Virus',
    symptoms:
      'Leaves curl upward, leaf edges yellow (chlorosis), leaves smaller than usual, dwarf plants, and dropped flowers. If tomato plants are infected in their early growth, there may be no fruit formed. Infected plants can randomly appear throughout the garden',
    cause: 'Whitefly',
    prevention: [
      'Removing plants with early symptoms can slow the spread of the disease',
      'Infected plants that are pulled out should be bagged immediately to prevent spread',
      'Control weeds inside and around garden sites, as these may be alternative hosts for whiteflies',
    ],
    treatment: [
      'Making a horticultural oil spray or low-concentration canola oil will act as a repellent',
      'At the end of the season, remove all vulnerable plants and burn or dispose of them',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 8,
    slug: 'mosaic_virus',
    name: 'Tomato Mosaic Virus',
    symptoms:
      'Virus-infected plants become dwarfed, often with poorly developed leaves. The plants look bushy. Leaves may be spotted, and often have a "shoestring" appearance. The fruits are small and misshapen.',
    cause: 'Tobacco Mosaic Virus',
    prevention: [
      'Remove and destroy infected plants immediately',
      'Wash hands thoroughly after smoking (Tobacco Mosaic Virus may be present on certain tobacco types) and before working in the garden',
      'Eliminate weeds and remove infected plants from the field as soon as they are seen',
      'Control insects (thrips and whiteflies) that carry the virus (see HGIC 2218, Tomato Insect Pests)',
    ],
    treatment: [
      'Use reflective mulch',
      'Use tomato cultivars resistant to the virus',
      'Many cultivars have resistance to Tobacco mosaic virus (TMV) (letter T following the cultivar name), such as Bush Celebrity, Bush Early Girl, Jetsetter, Big Beef, Celebrity, Sweet Cluster, Sweet Million (cherry), and Super Marzano (paste)',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 9,
    slug: 'healthy',
    name: 'Healthy',
    symptoms: 'Plants look healthy and have no diseases',
    cause: 'Diligent farmers cleaning and caring for plants',
    prevention: ['Continuing these habits is better'],
    treatment: ['No treatment is necessary'],
    ref: [
      {
        name_ref: '',
        link: '',
      },
    ],
  },
];

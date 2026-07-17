const medicines = [
    {
        name: "Aciloc 150",
        category: "Tablet",
        company: "Cadila Healthcare",
        price: 52,
        quantity: 120
    },
    
    {
        name: "Aciclovir Plus",
        category: "Tablet",
        company: "Aristo",
        price: 185,
        quantity: 75
    },
    
    {
        name: "Avil 25",
        category: "Tablet",
        company: "Sanofi",
        price: 38,
        quantity: 150
    },
    
    {
        name: "Betnesol",
        category: "Tablet",
        company: "GSK",
        price: 42,
        quantity: 95
    },
    
    {
        name: "Limcee",
        category: "Tablet",
        company: "Abbott",
        price: 32,
        quantity: 180
    },
    
    {
        name: "Dexorange Syrup",
        category: "Syrup",
        company: "Franco-Indian Pharmaceuticals",
        price: 165,
        quantity: 60
    },
    
    {
        name: "Hemozink Syrup",
        category: "Syrup",
        company: "Group Pharmaceuticals",
        price: 148,
        quantity: 45
    },

    {
        name: "RB Tone Syrup",
        category: "Syrup",
        company: "Medley",
        price: 175,
        quantity: 55
    },

    {
        name: "Rubired Syrup",
        category: "Syrup",
        company: "Macleods",
        price: 189,
        quantity: 40
    },

    {
        name: "Orofer XT Syrup",
        category: "Syrup",
        company: "Emcure",
        price: 215,
        quantity: 50
    },

    {
        name: "Betnesol Eye Drops",
        category: "Eye Drop",
        company: "GSK",
        price: 68,
        quantity: 35
    },
    
    {
        name: "Ciplox Eye Drops",
        category: "Eye Drop",
        company: "Cipla",
        price: 95,
        quantity: 40
    },
    
    {
        name: "Zenflox Eye Drops",
        category: "Eye Drop",
        company: "Mankind",
        price: 88,
        quantity: 32
    },
    
    {
        name: "Otek-AC Ear Drops",
        category: "Ear Drop",
        company: "FDC",
        price: 78,
        quantity: 28
    },
    
    {
        name: "Orecure Ear Drops",
        category: "Ear Drop",
        company: "Velco",
        price: 82,
        quantity: 25
    },
    
    {
        name: "Otocin Ear Drops",
        category: "Ear Drop",
        company: "Mankind",
        price: 85,
        quantity: 30
    },
    
    {
        name: "ORS-L",
        category: "Powder",
        company: "Jagat Pharma",
        price: 25,
        quantity: 200
    },
    
    {
        name: "Enerzal",
        category: "Powder",
        company: "FDC",
        price: 32,
        quantity: 150
    },
    
    {
        name: "Mulmina",
        category: "Powder",
        company: "Cipla",
        price: 38,
        quantity: 120
    },
    
    {
        name: "Electrol",
        category: "Powder",
        company: "FDC",
        price: 30,
        quantity: 180
    },

    {
        name: "Lactodex",
        category: "Powder",
        company: "Wockhardt",
        price: 425,
        quantity: 40
    },
    
    {
        name: "Lactogen",
        category: "Powder",
        company: "Nestlé",
        price: 460,
        quantity: 35
    },
    
    {
        name: "NAN PRO",
        category: "Powder",
        company: "Nestlé",
        price: 690,
        quantity: 28
    },
    
    {
        name: "Nestogen",
        category: "Powder",
        company: "Nestlé",
        price: 485,
        quantity: 30
    },

    {
        name: "Dexolac",
        category: "Powder",
        company: "Nutricia",
        price: 540,
        quantity: 32
    },
    
    {
        name: "Monocef Injection",
        category: "Injection",
        company: "Aristo",
        price: 125,
        quantity: 75
    },


    {
        name: "Taxim Injection",
        category: "Injection",
        company: "Alkem",
        price: 145,
        quantity: 70
    },

    {
        name: "Rubired Injection",
        category: "Injection",
        company: "Macleods",
        price: 210,
        quantity: 45
    },
    
    {
        name: "Lasix Injection",
        category: "Injection",
        company: "Sanofi",
        price: 115,
        quantity: 55
    },
    
    {
        name: "Ampoxin Injection",
        category: "Injection",
        company: "Torrent",
        price: 135,
        quantity: 65
    },

    {
        name: "Dolo 650",
        category: "Tablet",
        company: "Micro Labs",
        price: 35,
        quantity: 180
    },
    
    {
        name: "Crocin 650",
        category: "Tablet",
        company: "GSK",
        price: 38,
        quantity: 160
    },
    
    {
        name: "Paracetamol 500",
        category: "Tablet",
        company: "Cipla",
        price: 25,
        quantity: 250
    },
    
    {
        name: "Azithral 500",
        category: "Tablet",
        company: "Alembic",
        price: 118,
        quantity: 90
    },
    
    {
        name: "Augmentin 625",
        category: "Tablet",
        company: "GSK",
        price: 225,
        quantity: 70
    },
    
    {
        name: "Pantocid 40",
        category: "Tablet",
        company: "Sun Pharma",
        price: 145,
        quantity: 100
    },
    
    {
        name: "Pan 40",
        category: "Tablet",
        company: "Alkem",
        price: 110,
        quantity: 110
    },
    
    {
        name: "Shelcal 500",
        category: "Tablet",
        company: "Torrent",
        price: 155,
        quantity: 85
    },
    
    {
        name: "Zincovit",
        category: "Tablet",
        company: "Apex Laboratories",
        price: 130,
        quantity: 95
    },
    
    {
        name: "Becosules",
        category: "Capsule",
        company: "Pfizer",
        price: 98,
        quantity: 120
    },

    {
        name: "Volini Gel",
        category: "Gel",
        company: "Sun Pharma",
        price: 145,
        quantity: 55
    },
    
    {
        name: "Moov Pain Relief Cream",
        category: "Cream",
        company: "Reckitt",
        price: 165,
        quantity: 45
    },
    
    {
        name: "Candid Cream",
        category: "Cream",
        company: "Glenmark",
        price: 118,
        quantity: 60
    },
    
    {
        name: "Soframycin Skin Cream",
        category: "Cream",
        company: "Sanofi",
        price: 96,
        quantity: 40
    },
    
    {
        name: "Boroline Antiseptic Cream",
        category: "Cream",
        company: "G.D. Pharmaceuticals",
        price: 48,
        quantity: 70
    },
    
    {
        name: "Benadryl Cough Syrup",
        category: "Syrup",
        company: "Johnson & Johnson",
        price: 145,
        quantity: 45
    },

    {
        name: "Ascoril LS Syrup",
        category: "Syrup",
        company: "Glenmark",
        price: 138,
        quantity: 50
    },

    {
        name: "Otrivin Nasal Drops",
        category: "Drops",
        company: "GSK",
        price: 92,
        quantity: 35
    },
    
    {
        name: "Digene Gel",
        category: "Gel",
        company: "Abbott",
        price: 185,
        quantity: 40
    },
    
    {
        name: "Calpol 650",
        category: "Tablet",
        company: "GSK",
        price: 42,
        quantity: 150
    }
];

module.exports = medicines;
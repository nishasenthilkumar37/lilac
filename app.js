/**
 * FloraLumina — Botanical Encyclopedia & Floral Uses
 * Architecture: Interactive Botanical Garden & Knowledge Codex
 */

// 1. Comprehensive Botanical Dataset with 4+ High-Res Images & In-Depth Uses
const FLOWER_DATA = [
  {
    id: 'lavender',
    commonName: 'English Lavender',
    scientificName: 'Lavandula angustifolia',
    family: 'Lamiaceae (Mint Family)',
    nativeRegion: 'Mediterranean Basin',
    bloomSeason: 'June – August',
    sunlight: 'Full Sun (6–8 hrs)',
    soilType: 'Dry, sandy, well-draining',
    tagline: 'The revered sovereign of calm, restorative sleep, and skin restoration.',
    categories: ['medicinal', 'aromatherapy', 'skincare', 'culinary', 'ecological'],
    remedyTags: ['sleep', 'stress', 'skin', 'tea', 'ecology'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Vast lavender fields swaying in Provence sunlight'
      },
      {
        url: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&w=1200&q=80',
        caption: 'Close-up of purple lavender florets teeming with nectar'
      },
      {
        url: 'https://images.unsplash.com/photo-1565011523534-747a8601f10a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Pure lavender essential oil with dried flower stems'
      },
      {
        url: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=80',
        caption: 'Freshly harvested artisanal lavender bouquet'
      }
    ],
    uses: {
      medicinal: 'Rich in linalool and linalyl acetate, lavender exerts sedative effects on the central nervous system. In clinical trials, lavender inhalation reduces serum cortisol levels and stimulates alpha brain waves, facilitating deep restorative REM sleep. Also serves as a natural antiseptic for minor cuts, sunburns, and bug bites.',
      skincare: 'Potent antimicrobial and anti-inflammatory properties soothe acne vulgaris, reduce eczema flare-ups, and accelerate wound re-epithelialization without stripping the skin lipid mantle.',
      culinary: 'Dried culinary buds impart a sweet, floral, and slightly citrus aroma to shortbreads, berry jams, ice creams, and soothing herbal tisanes paired with chamomile or lemon balm.',
      aromatherapy: 'Diffusing lavender essential oil relieves situational anxiety, eases tension headaches, and promotes tranquility before bed or during meditation.',
      ecological: 'One of the most prolific nectar sources for honeybees, solitary mason bees, and swallowtail butterflies. Its fragrant oils naturally repel garden pests like aphids and fleas.'
    },
    folklore: 'In Victorian floriography, lavender symbolized devotion, serenity, and grace. Ancient Romans scented public baths with lavender (from Latin "lavare", to wash) and valued it as a purifier of homes.',
    recipe: {
      title: 'Lavender Dreamtime Pillow & Linen Mist',
      prepTime: '10 minutes',
      ingredients: [
        '60 ml Distilled Water',
        '30 ml Witch Hazel or 80-proof neutral alcohol',
        '25 drops Pure Lavandula angustifolia essential oil',
        '5 drops Roman Chamomile oil (optional)'
      ],
      steps: [
        'Pour witch hazel into a clean dark amber glass spray bottle.',
        'Add the drops of lavender and chamomile essential oil, swirling for 30 seconds to disperse.',
        'Top up with distilled water, seal tightly, and shake well before every use.',
        'Lightly mist bed linens and pillows 15 minutes before retiring for deep sleep.'
      ]
    },
    growingTips: [
      { label: 'Watering', value: 'Drought-tolerant; water only when the top 2 inches of soil are dry.' },
      { label: 'Pruning', value: 'Trim back by one-third after the first summer bloom to prevent woodiness.' },
      { label: 'Hardiness', value: 'USDA Zones 5–9; thrives in hot, arid summer breezes.' }
    ]
  },
  {
    id: 'damask-rose',
    commonName: 'Damask Rose',
    scientificName: 'Rosa damascena',
    family: 'Rosaceae (Rose Family)',
    nativeRegion: 'Central Asia & Middle East',
    bloomSeason: 'Late Spring to Early Summer',
    sunlight: 'Full Sun (6+ hrs daily)',
    soilType: 'Rich, loamy, moist but well-drained',
    tagline: 'The timeless symbol of love, cellular skin revitalization, and emotional harmony.',
    categories: ['skincare', 'aromatherapy', 'culinary', 'medicinal'],
    remedyTags: ['skin', 'stress', 'tea'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        caption: 'Velvety pink Damask rose in morning dew'
      },
      {
        url: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=1200&q=80',
        caption: 'Intense crimson rose petals with glistening moisture'
      },
      {
        url: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sun-dried organic rosebuds for restorative herbal tea'
      },
      {
        url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Flourishing heirloom rose garden during peak harvest'
      }
    ],
    uses: {
      medicinal: 'Rose petals and rosehips are exceptionally high in Vitamin C, bioflavonoids, and polyphenols. Rose preparations tonify cardiovascular circulation, ease menstrual cramps, and reduce chronic cellular oxidative stress.',
      skincare: 'Rosewater (pure rose hydrosol) acts as a gentle astringent and pH balancer. It tightens enlarged pores, cools redness, provides deep cellular hydration, and restores barrier elasticity for sensitive skin.',
      culinary: 'A cornerstone of Persian, Turkish, and French confectioneries. Petals are distilled into rosewater for marzipan, Turkish delight, baklava, cardamon puddings, and chilled summer syrups.',
      aromatherapy: 'The deep floral scent stimulates dopamine release and opens the emotional heart, comforting those experiencing grief, heartbreak, postpartum fatigue, and nervous exhaustion.',
      ecological: 'Open-petal roses provide rich pollen clusters for native bumblebees and beetles, while autumn rosehips feed wintering songbirds.'
    },
    folklore: 'In Greek mythology, roses were created by Chloris, goddess of flowers, and dyed red by Aphrodite’s tears. Persian poet Hafez celebrated the dialogue between the nightingale and the blossoming rose.',
    recipe: {
      title: 'Artisanal Distilled Rosewater Face Mist',
      prepTime: '30 minutes',
      ingredients: [
        '2 cups Fresh organic pesticide-free rose petals (or 1 cup dried)',
        '3 cups Distilled Water',
        'Ice cubes',
        'Heat-safe glass bowl and pot with an inverted lid'
      ],
      steps: [
        'Place an empty glass bowl in the center of a wide cooking pot.',
        'Distribute rose petals around the bowl and pour distilled water over the petals only.',
        'Invert the pot lid upside down over the pot and bring water to a gentle simmer.',
        'Place ice cubes atop the inverted lid; steam will condense and drip pure rose hydrosol into the center bowl.',
        'Simmer for 20 minutes, collect the pure floral distillate, cool, and transfer to a sterilized spray bottle.'
      ]
    },
    growingTips: [
      { label: 'Feeding', value: 'Apply organic compost and balanced rose fertilizer in early spring.' },
      { label: 'Air Circulation', value: 'Space bushes 3 feet apart to prevent blackspot and powdery mildew.' },
      { label: 'Watering', value: 'Water at the base rather than overhead to keep foliage pristine.' }
    ]
  },
  {
    id: 'chamomile',
    commonName: 'German Chamomile',
    scientificName: 'Matricaria chamomilla',
    family: 'Asteraceae (Daisy Family)',
    nativeRegion: 'Southern & Eastern Europe',
    bloomSeason: 'May – October',
    sunlight: 'Full Sun to Partial Shade',
    soilType: 'Light, well-draining loam',
    tagline: 'The gentle golden apple healer for troubled stomachs, restless minds, and sensitive skin.',
    categories: ['medicinal', 'culinary', 'skincare', 'aromatherapy'],
    remedyTags: ['sleep', 'tea', 'skin', 'stress'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Meadow of wild chamomile flowers bathed in morning light'
      },
      {
        url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Warm golden chamomile infusion with floating fresh blossoms'
      },
      {
        url: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80',
        caption: 'Delicate white rays and domed golden disc of a chamomile flower'
      },
      {
        url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=80',
        caption: 'Fresh chamomile harvest ready for natural solar drying'
      }
    ],
    uses: {
      medicinal: 'Packed with apigenin, an antioxidant that binds to specific receptors in your brain that decrease anxiety and initiate sleep. Also acts as an antispasmodic to calm gastrointestinal cramping, irritable bowel symptoms, and pediatric colic.',
      skincare: 'Chamazulene (which turns blue when steam distilled) delivers powerful anti-inflammatory and antiseptic action to heal contact dermatitis, rosacea, sunburns, and conjunctivitis eye washes.',
      culinary: 'Steeped as the world’s most renowned bedtime herbal tea, featuring sweet apple-like undertones. Also infused into delicate honeys, poached pears, and craft herbal gins.',
      aromatherapy: 'Chamomile essential oil grounds nervous hyperactivity and diffuses irritability in children and adults during intense mental fatigue.',
      ecological: 'Known as the "plant physician"—traditionally planted near sickly plants to revitalize them. Attracts beneficial predatory insects like hoverflies and ladybugs.'
    },
    folklore: 'Ancient Egyptians dedicated chamomile to Ra, god of the sun, honoring its ability to cure malarial chills. Anglo-Saxons revered it as one of the nine sacred healing herbs gifted to mankind by Woden.',
    recipe: {
      title: 'Herbal Golden Calm Chamomile & Honey Elixir',
      prepTime: '8 minutes',
      ingredients: [
        '2 tbsp Fresh or dried German Chamomile blossoms',
        '250 ml Boiling spring water (95°C / 203°F)',
        '1 tsp Raw clover or wildflower honey',
        '1 pinch Ground cinnamon or fresh lemon slice'
      ],
      steps: [
        'Place chamomile blossoms into an unbleached tea infuser or French press.',
        'Pour boiling spring water over the flowers.',
        'Cover and steep for 7–10 minutes to preserve delicate volatile essential oils.',
        'Strain into your favorite ceramic mug, stir in raw honey and cinnamon, and sip 30 minutes before sleep.'
      ]
    },
    growingTips: [
      { label: 'Seeding', value: 'Surface-sow seeds in early spring; they require light to germinate.' },
      { label: 'Harvest', value: 'Harvest flower heads when petals are flat and horizontal on a dry morning.' },
      { label: 'Soil Care', value: 'Tolerates poor soil; excessive nitrogen yields foliage instead of blooms.' }
    ]
  },
  {
    id: 'jasmine',
    commonName: 'Royal Jasmine',
    scientificName: 'Jasminum officinale',
    family: 'Oleaceae (Olive Family)',
    nativeRegion: 'Caucasus, Northern Iran, Himalayas',
    bloomSeason: 'Summer to Early Autumn',
    sunlight: 'Full Sun to Partial Shade',
    soilType: 'Moist, humus-rich, well-draining',
    tagline: 'The moonlight queen of nocturnal scent, euphoric mood enhancement, and skin elasticity.',
    categories: ['aromatherapy', 'culinary', 'skincare', 'medicinal'],
    remedyTags: ['stress', 'tea', 'skin'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Pure white star-shaped jasmine blossoms in night bloom'
      },
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Jasmine vine gracefully climbing an arched stone garden arbor'
      },
      {
        url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
        caption: 'Artisanal jasmine green tea pearls infused with fresh night blooms'
      },
      {
        url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
        caption: 'Distillation of precious jasmine absolute in botanical perfumery'
      }
    ],
    uses: {
      medicinal: 'Contains jasmone and benzyl acetate, known to heighten GABA neurotransmitter sensitivity. Traditionally applied in Ayurvedic medicine to ease postpartum depression, tension headaches, and menopausal mood shifts.',
      skincare: 'Jasmine oil promotes cellular micro-circulation, restoring youthfulness to dry, aging, and sensitive skin while preventing bacterial breakouts.',
      culinary: 'World-famous for scenting high-grade green tea pearls. Flowers are laid overnight over fresh tea leaves; the tea absorbs the floral oils, creating a sweet, perfumed cup.',
      aromatherapy: 'Considered one of nature’s most intoxicating aphrodisiacs and natural antidepressants. Uplifts confidence and dispels emotional numbness.',
      ecological: 'Heavily pollinated by night-flying hawkmoths attracted by the radiant white flowers and nocturnal perfume release.'
    },
    folklore: 'In India, jasmine is known as "Moonlight of the Grove" and woven into sacred bridal garlands. In Persian culture, "Yasmin" translates to "a gift from God".',
    recipe: {
      title: 'Cold-Brewed Jasmine Green Tea Pearl Nectar',
      prepTime: '5 minutes (+ 6 hrs steep)',
      ingredients: [
        '1 tbsp High-grade Jasmine Green Tea pearls',
        '750 ml Filtered chilled water',
        '2 thin slices Fresh organic cucumber',
        '1 sprig Fresh spearmint'
      ],
      steps: [
        'Place jasmine tea pearls and cucumber slices in a glass infusion pitcher.',
        'Pour filtered chilled water over the tea pearls.',
        'Refrigerate for 6 to 8 hours to slowly draw out delicate floral aromas without extracting bitter tannins.',
        'Strain into a glass with ice and garnish with fresh spearmint for a revitalizing afternoon tonic.'
      ]
    },
    growingTips: [
      { label: 'Trellising', value: 'Provide a sturdy arbor, trellis, or wall wire for vigorous climbing vines.' },
      { label: 'Winter Protection', value: 'Protect roots with heavy mulch if temperatures dip below freezing.' },
      { label: 'Bloom Boost', value: 'Ensure 6 hours of direct sun to trigger prolific nocturnal bud opening.' }
    ]
  },
  {
    id: 'hibiscus',
    commonName: 'Roselle Hibiscus',
    scientificName: 'Hibiscus sabdariffa',
    family: 'Malvaceae (Mallow Family)',
    nativeRegion: 'West & Central Africa, Tropical Asia',
    bloomSeason: 'Late Summer to Autumn',
    sunlight: 'Full Sun (6–8 hrs)',
    soilType: 'Rich, moist, sandy-loam',
    tagline: 'The ruby jewel of cardiovascular vitality, tart antioxidant hydration, and vibrant beauty.',
    categories: ['culinary', 'medicinal', 'skincare'],
    remedyTags: ['tea', 'skin', 'immunity'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Brilliant tropical scarlet hibiscus in full bloom'
      },
      {
        url: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1200&q=80',
        caption: 'Fleshy ruby red hibiscus calyxes ready for botanical harvest'
      },
      {
        url: 'https://images.unsplash.com/photo-1546853020-ca4909aef454?auto=format&fit=crop&w=1200&q=80',
        caption: 'Crimson iced hibiscus karkadeh tea with fresh citrus wheels'
      },
      {
        url: 'https://images.unsplash.com/photo-1572454591674-2739f30d8c40?auto=format&fit=crop&w=1200&q=80',
        caption: 'Macro botanical study of hibiscus stamen and golden pollen grains'
      }
    ],
    uses: {
      medicinal: 'Rich in anthocyanins, hibiscic acid, and Vitamin C. Clinical studies indicate daily consumption of hibiscus tea helps maintain healthy blood pressure levels and lowers LDL cholesterol naturally.',
      skincare: 'Often dubbed the "Botox Plant" due to its rich AHA (alpha-hydroxy acid) and mucilage content, which gently exfoliates dead skin cells, increases moisture retention, and firms skin tone.',
      culinary: 'Brewed as "Karkadeh" across Egypt and Sudan, "Bissap" in West Africa, and "Agua de Jamaica" in Mexico. Produces an invigorating cranberry-tart, dark ruby elixir enjoyed hot or iced.',
      aromatherapy: 'Invigorates mental focus, clears brain fog, and promotes cheerful physical vitality.',
      ecological: 'Provides vital nectar for tropical hummingbirds, long-tongued bees, and tropical swallowtails.'
    },
    folklore: 'In Hawaii, wearing a hibiscus behind the left ear signifies that the wearer is romantically committed, while behind the right ear indicates availability for love.',
    recipe: {
      title: 'Chilled Ruby Hibiscus & Ginger Tonic (Agua de Jamaica)',
      prepTime: '15 minutes (+ chill)',
      ingredients: [
        '1 cup Dried organic hibiscus calyxes (Flor de Jamaica)',
        '4 cups Water (for simmering) + 3 cups cold water',
        '1 piece (2 inches) Fresh ginger root, sliced',
        '1/3 cup Agave nectar or raw cane sugar',
        'Juice of 2 fresh limes'
      ],
      steps: [
        'Bring 4 cups of water to a rolling boil with the sliced ginger root.',
        'Remove from heat, add dried hibiscus calyxes, cover, and steep for 20 minutes.',
        'Strain out solids through a fine sieve into a pitcher.',
        'Stir in agave nectar and lime juice until dissolved, add 3 cups of cold water, and serve over plenty of ice.'
      ]
    },
    growingTips: [
      { label: 'Heat Loving', value: 'Requires warm soils; cannot withstand frosty or chilly conditions.' },
      { label: 'Moisture', value: 'Maintain uniform soil moisture during the flowering and fruiting period.' },
      { label: 'Spacing', value: 'Allow 3 to 4 feet between plants as mature bushes become wide and bushy.' }
    ]
  },
  {
    id: 'lotus',
    commonName: 'Sacred Lotus',
    scientificName: 'Nelumbo nucifera',
    family: 'Nelumbonaceae (Lotus Family)',
    nativeRegion: 'Tropical & Temperate Asia, Queensland',
    bloomSeason: 'Summer (June – August)',
    sunlight: 'Full Sun (at least 6 hrs)',
    soilType: 'Heavy clay/mud beneath quiet water',
    tagline: 'The sacred aquatic emblem of purity, spiritual clarity, and deep cellular detox.',
    categories: ['medicinal', 'skincare', 'culinary', 'ecological'],
    remedyTags: ['stress', 'skin', 'tea', 'ecology'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1200&q=80',
        caption: 'Majestic sacred pink lotus floating on tranquil morning water'
      },
      {
        url: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=1200&q=80',
        caption: 'Pure white lotus blossom showcasing golden center carpel'
      },
      {
        url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80',
        caption: 'Lotus leaves exhibiting the hydrophobic "Lotus Effect" with water pearls'
      },
      {
        url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80',
        caption: 'Lotus seed pods and young budding flowers in a temple garden'
      }
    ],
    uses: {
      medicinal: 'Alkaloids like nuciferine and liensinine in lotus stamens and leaves soothe cardiovascular palpitations, support liver detox, and enhance cognitive serenity during meditation.',
      skincare: 'Lotus flower extract purifies pores, regulates excess sebum, and strengthens dermal matrix resilience. Rich in flavonoids that defend against environmental pollution.',
      culinary: 'Every part is edible: crispy lotus rhizome roots are stir-fried or pickled, lotus seeds are candied or used in Asian soups, and large leaves wrap savory steamed rice parcels.',
      aromatherapy: 'The sacred, subtle floral-watery scent inspires quiet reverence, emotional grounding, and mental focus during yoga and spiritual practice.',
      ecological: 'Natural bio-filters for aquatic ecosystems, absorbing heavy metals and excess agricultural nitrates from ponds and wetlands.'
    },
    folklore: 'Rising untarnished from dark murky mud each dawn, the lotus is Buddhism and Hinduism’s ultimate symbol of spiritual enlightenment, purity, and non-attachment.',
    recipe: {
      title: 'Zen Lotus Stamen & Mint Clarifying Infusion',
      prepTime: '6 minutes',
      ingredients: [
        '1 tsp Dried Sacred Lotus stamens or petals (Lian Zi Xin)',
        '1 tsp Organic dried mint or green tea leaves',
        '300 ml Fresh hot spring water (85°C / 185°F)'
      ],
      steps: [
        'Rinse lotus petals with warm water to awaken the botanical fragrance.',
        'Place stamens and mint into a ceramic gaiwan or teapot.',
        'Pour hot water and allow to steep for 4 minutes until liquid turns soft pale amber.',
        'Drink slowly in quiet contemplation to dissipate physical heat and internal restlessness.'
      ]
    },
    growingTips: [
      { label: 'Water Depth', value: 'Keep root tuber submerged in 6–12 inches of standing still water.' },
      { label: 'Fertilizer', value: 'Use specialized aquatic fertilizer tablets pushed into the mud monthly.' },
      { label: 'Sunlight', value: 'Needs intense warmth and full sun to form flower buds.' }
    ]
  },
  {
    id: 'calendula',
    commonName: 'Pot Marigold',
    scientificName: 'Calendula officinalis',
    family: 'Asteraceae (Daisy Family)',
    nativeRegion: 'Southern Europe & Mediterranean',
    bloomSeason: 'Spring until First Hard Frost',
    sunlight: 'Full Sun to Moderate Shade',
    soilType: 'Any well-drained garden soil',
    tagline: 'The brilliant golden miracle worker for skin barrier repair, cuts, and ocular wellness.',
    categories: ['skincare', 'medicinal', 'culinary', 'ecological'],
    remedyTags: ['skin', 'tea', 'ecology'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Blazing golden-orange calendula flowers soaking up midsummer sun'
      },
      {
        url: 'https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Rows of calendula blooms in an organic medicinal herb nursery'
      },
      {
        url: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sun-infused calendula herbal oil and restorative beeswax balm'
      },
      {
        url: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Resinous calendula flower head rich in healing triterpenoids'
      }
    ],
    uses: {
      medicinal: 'High in triterpenes, carotenoids, and flavonoids that stimulate granulation tissue and collagen synthesis. Unrivaled for healing minor burns, post-surgical scars, diaper rash, and chapped winter lips.',
      skincare: 'Accelerates cellular repair and protects against photoaging. Calms rosacea, dermatitis, and rough irritated skin without irritation.',
      culinary: 'Called "Poor Man’s Saffron"—golden petals are scattered fresh over green salads, whisked into frittatas, or simmered to give yellow color and mild pepper flavor to broths.',
      aromatherapy: 'Mildly resinous and earthy, grounding and protective for home wellness.',
      ecological: 'Companion plant superstar! Emits natural thiophenes that deter harmful root-knot nematodes while attracting hoverflies and parasitic wasps that consume aphids.'
    },
    folklore: 'The name Calendula stems from the Latin "calends" (the first of the month), referring to its uncanny habit of blooming at the start of almost every calendar month in mild climates.',
    recipe: {
      title: 'Golden Calendula Healing Skin Salve',
      prepTime: '45 minutes',
      ingredients: [
        '1 cup Calendula-infused sweet almond or jojoba oil',
        '28 g Pure unrefined organic beeswax',
        '1 tsp Vitamin E oil (tocopherol)',
        '10 drops Lavender essential oil (optional)'
      ],
      steps: [
        'Combine infused calendula oil and beeswax in a heatproof glass bowl set over a water bath (double boiler).',
        'Gently heat over medium-low heat until the beeswax is completely melted.',
        'Remove from heat, whisk in Vitamin E oil and lavender drops.',
        'Pour into clean metal tins or glass jars and allow to cool undisturbed until solid.',
        'Apply generously to dry hands, cuts, scrapes, eczema patches, or dry lips.'
      ]
    },
    growingTips: [
      { label: 'Deadheading', value: 'Pinch off spent flower heads weekly to trigger relentless blooms all season.' },
      { label: 'Harvest Time', value: 'Pick blossoms in late morning when the dew has dried and petals feel sticky.' },
      { label: 'Reseeding', value: 'Self-seeds readily, returning faithfully in your garden year after year.' }
    ]
  },
  {
    id: 'sunflower',
    commonName: 'Golden Sunflower',
    scientificName: 'Helianthus annuus',
    family: 'Asteraceae (Daisy Family)',
    nativeRegion: 'North & Central America',
    bloomSeason: 'Mid-Summer to Early Autumn',
    sunlight: 'Full Sun (6–8+ hrs direct)',
    soilType: 'Deep, nutrient-rich, well-draining',
    tagline: 'The towering solar giant of soil phytoremediation, rich nutrition, and pollinator life.',
    categories: ['culinary', 'ecological', 'skincare'],
    remedyTags: ['ecology', 'skin', 'tea'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80',
        caption: 'Breathtaking sunflower field illuminated by golden hour sunset'
      },
      {
        url: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80',
        caption: 'Stunning mathematical Fibonacci spiral of sunflower seed disc'
      },
      {
        url: 'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?auto=format&fit=crop&w=1200&q=80',
        caption: 'Honeybee happily collecting golden sunflower pollen'
      },
      {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Vast country sunflower panorama under an open azure sky'
      }
    ],
    uses: {
      medicinal: 'Cold-pressed sunflower seed oil is exceptionally rich in linoleic acid (Omega-6) and Vitamin E. Sunflower petal infusions were historically used to reduce fevers and respiratory bronchitis.',
      skincare: 'Sunflower seed oil mimics human sebum, non-comedogenic and ideal for repairing compromised skin barriers without clogging pores.',
      culinary: 'Seeds provide magnesium, selenium, and protein. Roasted as healthy snacks, ground into creamy sunbutter, and pressed into premier cooking oil.',
      aromatherapy: 'Sunflowers exude uplifting solar energy, symbolizing radiant optimism and cheerfulness.',
      ecological: 'Superstars of phytoremediation: they absorb toxic heavy metals (lead, arsenic, zinc) and radioactive isotopes from polluted soil and water.'
    },
    folklore: 'Sunflowers demonstrate heliotropism: young flower buds track the sun’s journey across the sky from east to west each day, symbolizing loyalty and adoration.',
    recipe: {
      title: 'Artisanal Rosemary & Sea Salt Roasted Sunflower Kernels',
      prepTime: '20 minutes',
      ingredients: [
        '2 cups Raw shelled sunflower seed kernels',
        '1 tbsp Extra virgin olive oil',
        '1 tbsp Fresh organic rosemary, finely minced',
        '1 tsp Flaky sea salt',
        '1/2 tsp Smoked paprika'
      ],
      steps: [
        'Preheat your oven to 165°C (325°F) and line a baking sheet with parchment.',
        'Toss sunflower kernels in olive oil, minced rosemary, sea salt, and smoked paprika.',
        'Spread in a single even layer across the baking sheet.',
        'Roast for 12–15 minutes, stirring once halfway through, until fragrant and golden brown.',
        'Cool completely before snacking or tossing over garden salads for a crunchy mineral boost.'
      ]
    },
    growingTips: [
      { label: 'Staking', value: 'Giant varieties (reaching 10–14 ft) require staking in windy locations.' },
      { label: 'Feeding', value: 'Heavy feeders; amend soil with rich aged manure and bone meal.' },
      { label: 'Bird Feeder', value: 'Leave spent flower heads standing in autumn for finches and chickadees.' }
    ]
  },
  {
    id: 'echinacea',
    commonName: 'Purple Coneflower',
    scientificName: 'Echinacea purpurea',
    family: 'Asteraceae (Daisy Family)',
    nativeRegion: 'Eastern & Central North America',
    bloomSeason: 'June – September',
    sunlight: 'Full Sun to Light Afternoon Shade',
    soilType: 'Drought-tolerant; well-drained loam',
    tagline: 'The indigenous North American fortress for natural immunity and white blood cell defense.',
    categories: ['medicinal', 'ecological'],
    remedyTags: ['immunity', 'tea', 'ecology'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Brilliant magenta-purple coneflower with iridescent spiky central cone'
      },
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Wild native prairie garden flourishing with coneflowers and grasses'
      },
      {
        url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=80',
        caption: 'Herbalist gathering fresh echinacea blossoms for immune tincture'
      },
      {
        url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Warm immune-defense botanical tea decoction with echinacea and elderberries'
      }
    ],
    uses: {
      medicinal: 'Rich in alkylamides, caffeic acid derivatives, and polysaccharides. Echinacea stimulates phagocytosis and increases the proliferation of white blood cells (macrophages and T-cells), significantly shortening the duration and severity of the common cold.',
      skincare: 'Natural antibacterial and wound-contracting action aids in treating boils, acne lesions, and superficial skin ulcers.',
      culinary: 'Brewed with rosehips, elderberries, and cinnamon into immune-fortifying winter wellness teas.',
      aromatherapy: 'Mildly pungent and herbal; clears sinus airways and revitalizes energy.',
      ecological: 'One of the single most valuable native perennials for monarch butterflies, swallowtails, and native bees in late summer when other blooms fade.'
    },
    folklore: 'Native American tribes, including the Lakota, Cheyenne, and Omaha, regarded Echinacea as their supreme medicine for snakebites, fevers, toothaches, and hard-to-heal wounds.',
    recipe: {
      title: 'Echinacea & Elderberry Winter Immune Shield Decoction',
      prepTime: '25 minutes',
      ingredients: [
        '2 tbsp Dried Echinacea flowers, leaves, and roots',
        '2 tbsp Dried elderberries (Sambucus nigra)',
        '1 Ceylon cinnamon stick',
        '3 slices Fresh ginger',
        '500 ml Spring water',
        'Raw honey to taste'
      ],
      steps: [
        'Combine echinacea, elderberries, cinnamon, and ginger in a small saucepan with spring water.',
        'Bring to a boil, then immediately reduce heat to lowest setting and cover with a tight lid.',
        'Gently simmer (decoct) for 20 minutes to extract both water-soluble and bitter phytochemicals.',
        'Strain into a mug, stir in raw honey when lukewarm, and drink twice daily during winter chills.'
      ]
    },
    growingTips: [
      { label: 'Drought Resilience', value: 'Deep taproot allows established plants to thrive with minimal watering.' },
      { label: 'Division', value: 'Divide mature crowns every 3–4 years in spring to stimulate fresh vitality.' },
      { label: 'Seed Stratification', value: 'Seeds benefit from 4 weeks of cold, moist stratification before planting.' }
    ]
  },
  {
    id: 'peony',
    commonName: 'White & Blush Peony',
    scientificName: 'Paeonia lactiflora',
    family: 'Paeoniaceae (Peony Family)',
    nativeRegion: 'Central & Eastern Asia',
    bloomSeason: 'Late Spring to Early Summer (May – June)',
    sunlight: 'Full Sun (at least 6 hrs)',
    soilType: 'Rich, fertile, humus-heavy, well-drained',
    tagline: 'The aristocratic queen of Chinese herbalism, radiant brightening, and noble grace.',
    categories: ['medicinal', 'skincare', 'aromatherapy'],
    remedyTags: ['skin', 'stress'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extravagant blushing pink peony in full theatrical bloom'
      },
      {
        url: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=1200&q=80',
        caption: 'Pure snow-white peony petals with delicate golden center'
      },
      {
        url: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80',
        caption: 'Macro view of tightly layered silk-like peony ruffled petals'
      },
      {
        url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80',
        caption: 'Elegant bridal peony bouquet symbolizing romance and good fortune'
      }
    ],
    uses: {
      medicinal: 'Known as "Bai Shao" in Traditional Chinese Medicine for over 1,500 years. Peoniflorin, its primary active glycoside, calms smooth muscle spasms, relieves dysmenorrhea (menstrual pain), and regulates overactive immune antibodies.',
      skincare: 'Potent skin-brightening botanical. Peony root and petal extracts inhibit tyrosinase activity to diminish dark spots, acne scars, and uneven pigmentation.',
      culinary: 'Petals are blanched and sweetened as celebratory dessert garnishes or steeped into fragrant pink summer punches in East Asia.',
      aromatherapy: 'A soft, feminine, powdery-rose aroma that eases stress, builds self-worth, and dissolves irritability.',
      ecological: 'Peony buds secrete sweet nectar before opening, creating a mutualistic relationship with harmless ants that defend the petals against destructive thrips.'
    },
    folklore: 'Named after Paeon, physician of the Greek gods, who healed Hades when he was wounded by Heracles. In Imperial China, peonies were the official flower of the Tang Dynasty court.',
    recipe: {
      title: 'Paeoniflorin Radiant Glow Facial Compress',
      prepTime: '15 minutes',
      ingredients: [
        '1/2 cup Fresh pesticide-free peony petals (or 2 tbsp dried)',
        '1 cup Boiling distilled water',
        '1 tsp Organic rosehip seed oil',
        '1 Soft cotton face cloth or organic sheet mask'
      ],
      steps: [
        'Pour boiling distilled water over the peony petals in a ceramic bowl.',
        'Steep covered for 15 minutes until cooled to a pleasantly warm temperature.',
        'Whisk in a few drops of rosehip seed oil.',
        'Soak your cotton cloth in the warm floral infusion, wring gently, and drape over your face for 10 minutes to open pores and impart a luminous botanical glow.'
      ]
    },
    growingTips: [
      { label: 'Planting Depth', value: 'Plant eyes no deeper than 1.5 to 2 inches below soil level; too deep prevents blooming.' },
      { label: 'Longevity', value: 'Peonies are heirloom perennials that can thrive for over 100 years in the same location!' },
      { label: 'Support', value: 'Heavy blossoms require circular peony rings to prevent falling in rain.' }
    ]
  },
  {
    id: 'elderflower',
    commonName: 'European Elderflower',
    scientificName: 'Sambucus nigra',
    family: 'Adoxaceae (Moschatel Family)',
    nativeRegion: 'Europe, Northern Africa, Western Asia',
    bloomSeason: 'Late Spring to Mid-Summer (May – June)',
    sunlight: 'Full Sun to Dappled Shade',
    soilType: 'Moist, fertile, nitrogen-rich soil',
    tagline: 'The foaming hedgerow blossom of sparkling cordials, cold recovery, and respiratory ease.',
    categories: ['culinary', 'medicinal', 'skincare'],
    remedyTags: ['tea', 'immunity', 'skin'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Frothy cream-white elderflower umbels blooming in English hedgerows'
      },
      {
        url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=80',
        caption: 'Handwoven basket filled with freshly foraged wild elderflower heads'
      },
      {
        url: 'https://images.unsplash.com/photo-1546853020-ca4909aef454?auto=format&fit=crop&w=1200&q=80',
        caption: 'Golden sparkling elderflower cordial with sliced lemons and garden mint'
      },
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sunlit elderberry bush flourishing in pristine countryside'
      }
    ],
    uses: {
      medicinal: 'Elderflowers are classic herbal diaphoretics (inducing therapeutic sweating to break fevers). They contain rutin and quercetin, which clear excess sinus mucus, soothe sore throats, and ease hay fever allergic responses.',
      skincare: 'Traditional elderflower water ("Eau de Sureau") refines pores, fades freckles, and cools inflammation on sun-weary skin.',
      culinary: 'Beloved worldwide for crafting sparkling elderflower cordial, Hugo spritz cocktails, craft syrups, pancakes, and delicate gooseberry jams.',
      aromatherapy: 'Crisp, summery, muscatel scent that dispels feelings of heaviness and fatigue.',
      ecological: 'Elder shrubs are high-value wildlife hubs; spring blossoms sustain early pollinators, while autumn dark purple berries feed dozens of bird species.'
    },
    folklore: 'In European folklore, the elder tree was inhabited by the "Elder Mother" (Hyldemoer). Foragers were instructed to ask her permission before cutting flowers or branches, lest bad luck follow.',
    recipe: {
      title: 'Traditional European Sparkling Elderflower Cordial',
      prepTime: '20 minutes (+ 48 hrs maceration)',
      ingredients: [
        '25 Freshly picked elderflower heads (shaken clean of insects, not washed)',
        '1 kg Granulated organic cane sugar',
        '1.5 Litres Boiling water',
        '3 Organic unwaxed lemons, thinly sliced',
        '40 g Citric acid (food grade)'
      ],
      steps: [
        'Place sugar into a large ceramic or stainless steel pot, pour boiling water over it, and stir until completely dissolved.',
        'Whisk in the citric acid, then add the sliced lemons and prepared elderflower heads.',
        'Cover and leave in a cool pantry for 48 hours, stirring once a day.',
        'Strain through cheesecloth or a jelly bag, funnel into sterilized glass swing-top bottles.',
        'Dilute 1 part cordial with 4 parts sparkling mineral water over ice with fresh mint.'
      ]
    },
    growingTips: [
      { label: 'Moisture', value: 'Elder thrives in damp ground; ideal near pond margins or river banks.' },
      { label: 'Pruning', value: 'Can be coppiced hard in late winter to stimulate vigorous new flowering wood.' },
      { label: 'Harvest Warning', value: 'Eat only the flowers and ripe berries; raw leaves, bark, and green stems contain cyanogenic glycosides and must not be consumed.' }
    ]
  },
  {
    id: 'passionflower',
    commonName: 'Wild Passionflower',
    scientificName: 'Passiflora incarnata',
    family: 'Passifloraceae (Passion Flower Family)',
    nativeRegion: 'Southeastern United States & Central America',
    bloomSeason: 'July – September',
    sunlight: 'Full Sun to Moderate Partial Shade',
    soilType: 'Sandy or gravelly, well-draining',
    tagline: 'The otherworldly geometric marvel that elevates natural GABA for supreme peace of mind.',
    categories: ['medicinal', 'aromatherapy', 'ecological'],
    remedyTags: ['sleep', 'stress', 'tea', 'ecology'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Exquisite intricate purple corona of Passiflora incarnata'
      },
      {
        url: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&w=1200&q=80',
        caption: 'Climbing passionflower vine with curling tendrils and unopened buds'
      },
      {
        url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Nighttime calming herbal tea blend with dried passionflower aerial parts'
      },
      {
        url: 'https://images.unsplash.com/photo-1565011523534-747a8601f10a?auto=format&fit=crop&w=1200&q=80',
        caption: 'Ripening wild maypop passionfruit on lush summer vine'
      }
    ],
    uses: {
      medicinal: 'Clinical trials demonstrate that passionflower works on the brain’s GABA (gamma-aminobutyric acid) receptors similarly to mild anxiolytics, without morning grogginess or addiction potential. Premier herb for racing minds that prevent falling asleep.',
      skincare: 'Oil pressed from passionfruit seeds (Maracuja oil) is high in essential fatty acids and Vitamin C, soothing inflamed, reactive skin.',
      culinary: 'Leaves and flowers are steeped as a relaxing evening tea; the resulting "maypop" fruit produces a tangy tropical pulp enjoyed raw or in drinks.',
      aromatherapy: 'Mildly sweet and botanical; promotes rapid release of physical muscular tension and teeth-grinding.',
      ecological: 'Exclusive host plant for caterpillars of the iridescent Gulf Fritillary and Zebra Longwing butterflies.'
    },
    folklore: 'Spanish Christian missionaries in the 16th century saw Christ’s Passion in the flower’s unique geometry: 3 stigmas represented the nails, 5 anthers represented the wounds, and the radial corona filaments symbolized the crown of thorns.',
    recipe: {
      title: 'Midnight Rest Passionflower & Skullcap Infusion',
      prepTime: '10 minutes',
      ingredients: [
        '1 tbsp Dried Passionflower aerial parts (flowers & leaves)',
        '1 tsp Dried Scutellaria lateriflora (Skullcap)',
        '1/2 tsp Dried Lavender buds',
        '250 ml Boiling water (95°C)',
        '1 tsp Raw honey'
      ],
      steps: [
        'Place passionflower, skullcap, and lavender into a tea infuser.',
        'Pour boiling water over the herbs and cover immediately with a saucer to trap volatile botanicals.',
        'Steep for 10 full minutes to thoroughly extract sedative flavonoids.',
        'Strain, sweeten lightly with raw honey, and drink 45 minutes before turning off the lights.'
      ]
    },
    growingTips: [
      { label: 'Climbing Vines', value: 'Use strong fencing or arbor; vines can climb 15–20 feet in a single season.' },
      { label: 'Winter Care', value: 'Dies back to ground in winter (Zone 6+) and re-emerges vigorously in late spring.' },
      { label: 'Sun Requirements', value: 'Requires hot summer days to produce its signature exotic flowers and fruit.' }
    ]
  }
];

// 2. Application State Management
const state = {
  currentFilter: 'all',
  currentRemedy: 'all',
  searchQuery: '',
  sortOrder: 'az',
  showSavedOnly: false,
  bookmarks: JSON.parse(localStorage.getItem('floralumina_bookmarks') || '[]'),
  currentModalIndex: 0,
  isAudioPlaying: false,
  petalsAnimationActive: true
};

// 3. DOM Element References
const flowerGrid = document.getElementById('flowerGrid');
const resultsCount = document.getElementById('resultsCount');
const emptyState = document.getElementById('emptyState');
const flowerSearchInput = document.getElementById('flowerSearchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const categoryTabs = document.querySelectorAll('.category-tabs .tab-btn');
const remedyChips = document.querySelectorAll('.remedy-chips .chip');
const sortAlphabeticalBtn = document.getElementById('sortAlphabetical');
const showOnlyFavoritesBtn = document.getElementById('showOnlyFavorites');
const bookmarkCountBadge = document.getElementById('bookmarkCount');

// Modal References
const flowerModal = document.getElementById('flowerModal');
const modalWrapper = document.getElementById('modalWrapper');
const modalBody = document.getElementById('modalBody');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalPrevBtn = document.getElementById('modalPrevFlowerBtn');
const modalNextBtn = document.getElementById('modalNextFlowerBtn');
const prevFlowerName = document.getElementById('prevFlowerName');
const nextFlowerName = document.getElementById('nextFlowerName');
const modalNavIndicator = document.getElementById('modalNavIndicator');

// Lightbox & Drawer References
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

const bookmarksModal = document.getElementById('bookmarksModal');
const bookmarksBtn = document.getElementById('bookmarksBtn');
const bookmarksList = document.getElementById('bookmarksList');
const bookmarksCloseBtn = document.getElementById('bookmarksCloseBtn');

// Toggles & Canvas
const audioToggleBtn = document.getElementById('audioToggleBtn');
const petalsToggleBtn = document.getElementById('petalsToggleBtn');
const petalCanvas = document.getElementById('petalCanvas');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

// 4. Fallback Detection for Modern Modal Standards
// (Complying strictly with modern-web-guidance)
function supportsTopLayerExit() {
  return window.CSS?.supports?.('overlay', 'auto') && canTransitionDisplay();
}

function canTransitionDisplay() {
  const probe = document.createElement('div');
  probe.style.display = 'none';
  probe.style.transition = 'display 0.01s';
  document.body.appendChild(probe);
  const supported = getComputedStyle(probe).display === 'none';
  probe.remove();
  return supported;
}

async function closeTopLayerModal(dialogElement) {
  if (!dialogElement || !dialogElement.open) return;
  
  if (!supportsTopLayerExit()) {
    dialogElement.setAttribute('data-closing', '');
    const animations = dialogElement.getAnimations({ subtree: true });
    if (animations.length > 0) {
      await Promise.race([
        Promise.allSettled(animations.map(a => a.finished)),
        new Promise(r => setTimeout(r, 400))
      ]);
    }
    dialogElement.removeAttribute('data-closing');
  }
  
  dialogElement.close();
}

// Light-dismiss click outside content fallback for browsers without closedby support
function attachLightDismissFallback(dialog) {
  if (!dialog) return;
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (isDialogContent) return;
      closeTopLayerModal(dialog);
    });
  }
}

attachLightDismissFallback(flowerModal);
attachLightDismissFallback(lightboxModal);
attachLightDismissFallback(bookmarksModal);

// Route native close requests (Esc, closedby) through smooth exit helper
flowerModal.addEventListener('cancel', (e) => {
  e.preventDefault();
  closeTopLayerModal(flowerModal);
  clearUrlHash();
});

modalCloseBtn.addEventListener('click', () => {
  closeTopLayerModal(flowerModal);
  clearUrlHash();
});

lightboxCloseBtn.addEventListener('click', () => {
  closeTopLayerModal(lightboxModal);
});

bookmarksCloseBtn.addEventListener('click', () => {
  closeTopLayerModal(bookmarksModal);
});

bookmarksBtn.addEventListener('click', () => {
  renderBookmarksList();
  bookmarksModal.showModal();
});

function clearUrlHash() {
  if (window.location.hash.startsWith('#flower/')) {
    history.pushState(null, '', window.location.pathname + window.location.search);
  }
}

// 5. Render Flower Catalog Cards
function renderFlowerGrid() {
  const filteredFlowers = getFilteredFlowers();
  
  // Update result count
  resultsCount.textContent = `Displaying ${filteredFlowers.length} of ${FLOWER_DATA.length} botanical treasures`;
  
  if (filteredFlowers.length === 0) {
    flowerGrid.innerHTML = '';
    emptyState.hidden = false;
    return;
  }
  
  emptyState.hidden = true;
  
  flowerGrid.innerHTML = filteredFlowers.map((flower) => {
    const isSaved = state.bookmarks.includes(flower.id);
    const mainImg = flower.images[0];
    
    // Pick 3 use pills
    const usePillsHtml = Object.keys(flower.uses).slice(0, 3).map(u => {
      const iconMap = {
        medicinal: '🌿 Medicinal',
        skincare: '✨ Skincare',
        culinary: '🍵 Culinary & Tea',
        aromatherapy: '🌸 Aromatherapy',
        ecological: '🐝 Ecological'
      };
      return `<span class="use-pill">${iconMap[u] || u}</span>`;
    }).join('');

    return `
      <article class="flower-card" data-flower-id="${flower.id}">
        <div class="card-image-wrap">
          <img 
            src="${mainImg.url}" 
            alt="${flower.commonName} - ${flower.scientificName}" 
            class="card-img" 
            loading="lazy"
          >
          <div class="card-badges">
            <span class="flower-type-badge">${flower.family.split(' ')[0]}</span>
          </div>

          <button 
            class="card-bookmark-btn ${isSaved ? 'saved' : ''}" 
            data-bookmark-id="${flower.id}"
            title="${isSaved ? 'Remove from saved' : 'Save to my herbarium'}"
            aria-label="${isSaved ? 'Remove from saved' : 'Save to my herbarium'}"
          >
            ${isSaved ? '★' : '☆'}
          </button>

          <div class="card-gallery-preview" title="${flower.images.length} high-resolution photos available">
            <span>📷 ${flower.images.length} Photos</span>
          </div>
        </div>

        <div class="card-content">
          <div class="flower-names">
            <h3 class="flower-common-name">${flower.commonName}</h3>
            <p class="flower-scientific-name">${flower.scientificName}</p>
          </div>

          <p class="flower-tagline">${flower.tagline}</p>

          <div class="card-uses-list">
            ${usePillsHtml}
          </div>

          <div class="card-footer">
            <button 
              class="know-more-btn" 
              data-know-more="${flower.id}" 
              aria-label="Learn more about ${flower.commonName} and its uses"
            >
              <span>Know More & Uses</span>
              <span class="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach card event listeners
  attachCardEvents();
}

function attachCardEvents() {
  // Know More Buttons
  document.querySelectorAll('[data-know-more]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const flowerId = btn.getAttribute('data-know-more');
      openFlowerAboutModal(flowerId);
    });
  });

  // Bookmark / Favorite Buttons
  document.querySelectorAll('[data-bookmark-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const flowerId = btn.getAttribute('data-bookmark-id');
      toggleBookmark(flowerId);
    });
  });

  // Clicking anywhere on card (except bookmark) opens details
  document.querySelectorAll('.flower-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-bookmark-btn')) return;
      const flowerId = card.getAttribute('data-flower-id');
      openFlowerAboutModal(flowerId);
    });
  });
}

// 6. Filtering & Searching Logic
function getFilteredFlowers() {
  return FLOWER_DATA.filter(flower => {
    // 1. Category Filter
    if (state.currentFilter !== 'all') {
      if (!flower.categories.includes(state.currentFilter)) {
        return false;
      }
    }

    // 2. Remedy Chip Filter
    if (state.currentRemedy !== 'all') {
      if (!flower.remedyTags.includes(state.currentRemedy)) {
        return false;
      }
    }

    // 3. Saved Only Filter
    if (state.showSavedOnly) {
      if (!state.bookmarks.includes(flower.id)) {
        return false;
      }
    }

    // 4. Search Query Match
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      const matchCommon = flower.commonName.toLowerCase().includes(q);
      const matchScientific = flower.scientificName.toLowerCase().includes(q);
      const matchTagline = flower.tagline.toLowerCase().includes(q);
      const matchUses = Object.values(flower.uses).some(useText => useText.toLowerCase().includes(q));
      const matchFolklore = flower.folklore.toLowerCase().includes(q);
      
      if (!matchCommon && !matchScientific && !matchTagline && !matchUses && !matchFolklore) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    if (state.sortOrder === 'az') {
      return a.commonName.localeCompare(b.commonName);
    }
    return 0;
  });
}

// Update category count badges
function updateCategoryCounters() {
  const counts = {
    all: FLOWER_DATA.length,
    medicinal: 0,
    skincare: 0,
    culinary: 0,
    aromatherapy: 0,
    ecological: 0
  };

  FLOWER_DATA.forEach(f => {
    f.categories.forEach(cat => {
      if (counts[cat] !== undefined) counts[cat]++;
    });
  });

  Object.keys(counts).forEach(key => {
    const el = document.getElementById(`count-${key}`);
    if (el) el.textContent = counts[key];
  });
}

// 7. Interactive "Know More" -> Dedicated Flower About Page / Modal
function openFlowerAboutModal(flowerId) {
  const flowerIndex = FLOWER_DATA.findIndex(f => f.id === flowerId);
  if (flowerIndex === -1) return;

  state.currentModalIndex = flowerIndex;
  const flower = FLOWER_DATA[flowerIndex];

  // Update URL hash for bookmarking and history support
  window.location.hash = `flower/${flower.id}`;

  // Update navigation arrows
  const prevIndex = (flowerIndex - 1 + FLOWER_DATA.length) % FLOWER_DATA.length;
  const nextIndex = (flowerIndex + 1) % FLOWER_DATA.length;
  
  prevFlowerName.textContent = FLOWER_DATA[prevIndex].commonName;
  nextFlowerName.textContent = FLOWER_DATA[nextIndex].commonName;
  modalNavIndicator.textContent = `${flowerIndex + 1} of ${FLOWER_DATA.length}`;

  // Render complete rich details
  renderModalBody(flower);

  // Open modal using native showModal() (guarantees top-layer promotion and focus trap)
  if (!flowerModal.open) {
    flowerModal.showModal();
  }

  // Scroll modal body to top smoothly
  modalBody.scrollTop = 0;
}

function renderModalBody(flower) {
  const isSaved = state.bookmarks.includes(flower.id);

  // Gallery Thumbnails
  const thumbsHtml = flower.images.map((img, i) => `
    <div class="modal-thumb ${i === 0 ? 'active' : ''}" data-thumb-index="${i}">
      <img src="${img.url}" alt="${img.caption}" loading="lazy">
      <span class="modal-thumb-label">Photo ${i + 1}</span>
    </div>
  `).join('');

  modalBody.innerHTML = `
    <!-- Top Hero Section: Multi-Image Gallery & Key Botanical Profile -->
    <div class="modal-flower-hero">
      <div class="modal-gallery-container">
        <div class="modal-main-image-wrap" id="modalMainImageWrap" title="Click to view full screen">
          <img 
            id="modalMainImg" 
            src="${flower.images[0].url}" 
            alt="${flower.images[0].caption}" 
            class="modal-main-img"
          >
          <div class="zoom-hint-badge">🔍 Click to Enlarge</div>
        </div>
        <p id="modalImageCaption" class="text-muted" style="font-size: 0.88rem; font-style: italic;">
          ${flower.images[0].caption}
        </p>

        <!-- 4-Image Thumbnails Bar -->
        <div class="modal-thumbs-strip" id="modalThumbsStrip">
          ${thumbsHtml}
        </div>
      </div>

      <div class="modal-flower-details">
        <div class="modal-flower-header">
          <span class="modal-botanical-family">${flower.family}</span>
          <h2 class="modal-title" id="modalFlowerTitle">${flower.commonName}</h2>
          <p class="modal-latin-name">${flower.scientificName}</p>
        </div>

        <p class="modal-intro-text">${flower.tagline}</p>

        <!-- Botanical Meta Quick Grid -->
        <div class="botanical-meta-grid">
          <div class="meta-field">
            <span class="meta-label">Native Region</span>
            <span class="meta-value">${flower.nativeRegion}</span>
          </div>
          <div class="meta-field">
            <span class="meta-label">Bloom Season</span>
            <span class="meta-value">${flower.bloomSeason}</span>
          </div>
          <div class="meta-field">
            <span class="meta-label">Sunlight</span>
            <span class="meta-value">${flower.sunlight}</span>
          </div>
          <div class="meta-field">
            <span class="meta-label">Optimal Soil</span>
            <span class="meta-value">${flower.soilType}</span>
          </div>
        </div>

        <!-- Quick Action Buttons -->
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn btn-secondary modal-bookmark-toggle-btn" id="modalBookmarkToggle">
            <span>${isSaved ? '★ Saved in Herbarium' : '☆ Save This Flower'}</span>
          </button>
          <button class="btn btn-primary" id="jumpToRecipeBtn">
            <span>View DIY Herbal Recipe</span>
            <span>↓</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Interactive Navigation Tabs Inside About Modal -->
    <div class="modal-tabs">
      <div class="modal-tab-nav" role="tablist">
        <button class="modal-tab-btn active" data-target-tab="uses">🌿 All Uses & Benefits</button>
        <button class="modal-tab-btn" data-target-tab="recipe">📖 DIY Herbal Recipe</button>
        <button class="modal-tab-btn" data-target-tab="folklore">📜 History & Symbolism</button>
        <button class="modal-tab-btn" data-target-tab="growing">🌱 Garden Growing Guide</button>
      </div>

      <!-- Tab 1: Comprehensive Uses -->
      <div class="tab-panel active" id="tab-uses">
        <div class="detailed-uses-grid">
          ${flower.uses.medicinal ? `
            <div class="use-detail-card">
              <h4>🌿 Medicinal & Therapeutic</h4>
              <p>${flower.uses.medicinal}</p>
            </div>
          ` : ''}

          ${flower.uses.skincare ? `
            <div class="use-detail-card">
              <h4>✨ Skincare & Beauty</h4>
              <p>${flower.uses.skincare}</p>
            </div>
          ` : ''}

          ${flower.uses.culinary ? `
            <div class="use-detail-card">
              <h4>🍵 Culinary & Teas</h4>
              <p>${flower.uses.culinary}</p>
            </div>
          ` : ''}

          ${flower.uses.aromatherapy ? `
            <div class="use-detail-card">
              <h4>🌸 Aromatherapy & Mind</h4>
              <p>${flower.uses.aromatherapy}</p>
            </div>
          ` : ''}

          ${flower.uses.ecological ? `
            <div class="use-detail-card">
              <h4>🐝 Ecological Role & Pollinators</h4>
              <p>${flower.uses.ecological}</p>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Tab 2: Actionable DIY Recipe -->
      <div class="tab-panel" id="tab-recipe">
        <div class="recipe-box">
          <div class="recipe-header">
            <div>
              <span class="recipe-badge">Natural Herbarium Guide</span>
              <h3 class="recipe-title">${flower.recipe.title}</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.2rem;">
                Estimated Time: <strong>${flower.recipe.prepTime}</strong>
              </p>
            </div>
            <div class="recipe-actions">
              <button class="copy-recipe-btn" id="copyRecipeBtn">📋 Copy Recipe Text</button>
              <button class="copy-recipe-btn" id="printRecipeBtn">🖨️ Print Card</button>
            </div>
          </div>

          <div class="recipe-content-grid">
            <div class="recipe-ingredients">
              <h5>Botanical Ingredients</h5>
              <ul>
                ${flower.recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
              </ul>
            </div>

            <div class="recipe-steps">
              <h5>Preparation Steps</h5>
              <ol>
                ${flower.recipe.steps.map(step => `<li>${step}</li>`).join('')}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab 3: Folklore & Floriography -->
      <div class="tab-panel" id="tab-folklore">
        <div class="use-detail-card" style="background-color: var(--bg-card); border-color: var(--amber-border);">
          <h4 style="font-size: 1.3rem; margin-bottom: 0.85rem;">Historical Lore & Botanical Language</h4>
          <p style="font-size: 1.05rem; line-height: 1.75;">${flower.folklore}</p>
        </div>
      </div>

      <!-- Tab 4: Growing & Care Tips -->
      <div class="tab-panel" id="tab-growing">
        <div class="growing-guide-box">
          <h4>How to Cultivate ${flower.commonName} in Your Garden</h4>
          <ul class="growing-tips-list">
            ${flower.growingTips.map(tip => `
              <li>
                <strong>${tip.label}:</strong>
                <span>${tip.value}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;

  // Attach dynamic handlers inside modal
  attachModalInternalEvents(flower);
}

function attachModalInternalEvents(flower) {
  // Image Thumbnails Switcher
  const mainImg = document.getElementById('modalMainImg');
  const imgCaption = document.getElementById('modalImageCaption');
  const mainImageWrap = document.getElementById('modalMainImageWrap');
  const thumbs = document.querySelectorAll('.modal-thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.getAttribute('data-thumb-index'), 10);
      const selectedImg = flower.images[idx];
      
      mainImg.src = selectedImg.url;
      mainImg.alt = selectedImg.caption;
      imgCaption.textContent = selectedImg.caption;

      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // Clicking main image opens fullscreen Lightbox
  mainImageWrap.addEventListener('click', () => {
    lightboxImg.src = mainImg.src;
    lightboxImg.alt = mainImg.alt;
    lightboxCaption.textContent = imgCaption.textContent;
    lightboxModal.showModal();
  });

  // Tab switching
  const tabBtns = document.querySelectorAll('.modal-tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panel = document.getElementById(`tab-${target}`);
      if (panel) panel.classList.add('active');
    });
  });

  // Jump to recipe button
  const jumpBtn = document.getElementById('jumpToRecipeBtn');
  if (jumpBtn) {
    jumpBtn.addEventListener('click', () => {
      const recipeTabBtn = document.querySelector('[data-target-tab="recipe"]');
      if (recipeTabBtn) recipeTabBtn.click();
      const recipeBox = document.querySelector('.recipe-box');
      if (recipeBox) recipeBox.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Bookmark toggle inside modal
  const modalBookmarkBtn = document.getElementById('modalBookmarkToggle');
  if (modalBookmarkBtn) {
    modalBookmarkBtn.addEventListener('click', () => {
      toggleBookmark(flower.id);
      const isNowSaved = state.bookmarks.includes(flower.id);
      modalBookmarkBtn.innerHTML = `<span>${isNowSaved ? '★ Saved in Herbarium' : '☆ Save This Flower'}</span>`;
    });
  }

  // Copy recipe button
  const copyBtn = document.getElementById('copyRecipeBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = `🌿 ${flower.recipe.title} (${flower.commonName})\n` +
        `Prep Time: ${flower.recipe.prepTime}\n\n` +
        `Ingredients:\n${flower.recipe.ingredients.map(i => '- ' + i).join('\n')}\n\n` +
        `Instructions:\n${flower.recipe.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\n` +
        `Discovered on FloraLumina Botanical Codex.`;

      navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.textContent = '✓ Copied to Clipboard!';
        setTimeout(() => { copyBtn.textContent = '📋 Copy Recipe Text'; }, 2500);
      }).catch(() => {
        alert('Recipe copied to clipboard!');
      });
    });
  }

  // Print button
  const printBtn = document.getElementById('printRecipeBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

// Modal Next / Previous Navigation
modalPrevBtn.addEventListener('click', () => {
  const newIndex = (state.currentModalIndex - 1 + FLOWER_DATA.length) % FLOWER_DATA.length;
  openFlowerAboutModal(FLOWER_DATA[newIndex].id);
});

modalNextBtn.addEventListener('click', () => {
  const newIndex = (state.currentModalIndex + 1) % FLOWER_DATA.length;
  openFlowerAboutModal(FLOWER_DATA[newIndex].id);
});

// Keyboard navigation inside modal (Left/Right arrow)
document.addEventListener('keydown', (e) => {
  if (!flowerModal.open) return;
  if (e.key === 'ArrowLeft') {
    modalPrevBtn.click();
  } else if (e.key === 'ArrowRight') {
    modalNextBtn.click();
  }
});

// 8. Bookmarking & LocalStorage
function toggleBookmark(flowerId) {
  const idx = state.bookmarks.indexOf(flowerId);
  if (idx === -1) {
    state.bookmarks.push(flowerId);
  } else {
    state.bookmarks.splice(idx, 1);
  }
  
  localStorage.setItem('floralumina_bookmarks', JSON.stringify(state.bookmarks));
  updateBookmarkBadges();
  renderFlowerGrid();
}

function updateBookmarkBadges() {
  bookmarkCountBadge.textContent = state.bookmarks.length;
}

function renderBookmarksList() {
  if (state.bookmarks.length === 0) {
    bookmarksList.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2rem; margin-bottom: 0.5rem;">🌸</p>
        <p>Your saved herbarium is currently empty.</p>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">Click the star icon on any flower to save your favorites here!</p>
      </div>
    `;
    return;
  }

  const savedFlowers = FLOWER_DATA.filter(f => state.bookmarks.includes(f.id));
  bookmarksList.innerHTML = savedFlowers.map(f => `
    <div class="bookmark-item" style="cursor: pointer;" data-open-saved="${f.id}">
      <img src="${f.images[0].url}" alt="${f.commonName}">
      <div style="flex-grow: 1;">
        <div class="bookmark-item-title">${f.commonName}</div>
        <div class="bookmark-item-latin">${f.scientificName}</div>
      </div>
      <button 
        class="card-bookmark-btn saved" 
        style="position: static; width: 30px; height: 30px; font-size: 0.9rem;"
        data-remove-saved="${f.id}"
        title="Remove"
      >×</button>
    </div>
  `).join('');

  // Attach click to open details
  bookmarksList.querySelectorAll('[data-open-saved]').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('[data-remove-saved]')) return;
      const id = item.getAttribute('data-open-saved');
      closeTopLayerModal(bookmarksModal);
      openFlowerAboutModal(id);
    });
  });

  // Attach removal
  bookmarksList.querySelectorAll('[data-remove-saved]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-remove-saved');
      toggleBookmark(id);
      renderBookmarksList();
    });
  });
}

// 9. Search & Filter Listeners
flowerSearchInput.addEventListener('input', (e) => {
  state.searchQuery = e.target.value;
  clearSearchBtn.hidden = state.searchQuery === '';
  renderFlowerGrid();
});

clearSearchBtn.addEventListener('click', () => {
  flowerSearchInput.value = '';
  state.searchQuery = '';
  clearSearchBtn.hidden = true;
  renderFlowerGrid();
  flowerSearchInput.focus();
});

// Category tabs
categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    categoryTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    
    state.currentFilter = tab.getAttribute('data-category');
    renderFlowerGrid();
  });
});

// Remedy Chips (Quiz / Seeking)
remedyChips.forEach(chip => {
  chip.addEventListener('click', () => {
    remedyChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    state.currentRemedy = chip.getAttribute('data-remedy');
    renderFlowerGrid();

    // Smooth scroll down to garden catalog if clicked from top
    const gardenSection = document.getElementById('garden');
    if (gardenSection) {
      gardenSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Sort Alphabetically
sortAlphabeticalBtn.addEventListener('click', () => {
  state.sortOrder = 'az';
  sortAlphabeticalBtn.classList.add('active');
  renderFlowerGrid();
});

// Show Saved Only toggle
showOnlyFavoritesBtn.addEventListener('click', () => {
  state.showSavedOnly = !state.showSavedOnly;
  showOnlyFavoritesBtn.classList.toggle('active', state.showSavedOnly);
  renderFlowerGrid();
});

// Reset filters button in empty state
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener('click', () => {
    state.currentFilter = 'all';
    state.currentRemedy = 'all';
    state.searchQuery = '';
    state.showSavedOnly = false;
    
    flowerSearchInput.value = '';
    clearSearchBtn.hidden = true;
    showOnlyFavoritesBtn.classList.remove('active');

    categoryTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-category') === 'all'));
    remedyChips.forEach(c => c.classList.toggle('active', c.getAttribute('data-remedy') === 'all'));

    renderFlowerGrid();
  });
}

// 10. Deep Linking & Hash Routing Support
function handleHashRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#flower/')) {
    const flowerId = hash.replace('#flower/', '');
    openFlowerAboutModal(flowerId);
  }
}

window.addEventListener('hashchange', handleHashRoute);

// 11. Subtle Ambient Audio Synthesis (Web Audio API - No external files needed!)
class GardenAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.chimeTimer = null;
    this.breezeNode = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  playChime(freq, time, duration = 3) {
    if (!this.ctx || !this.isPlaying) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.04, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;

    // Pentatonic peaceful chime scale (Hz)
    const scale = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];

    const triggerRandomChimes = () => {
      if (!this.isPlaying) return;
      const now = this.ctx.currentTime;
      const note = scale[Math.floor(Math.random() * scale.length)];
      this.playChime(note, now + Math.random() * 0.5, 2.5 + Math.random() * 2);

      const nextDelay = 1800 + Math.random() * 3200;
      this.chimeTimer = setTimeout(triggerRandomChimes, nextDelay);
    };

    triggerRandomChimes();
  }

  stop() {
    this.isPlaying = false;
    if (this.chimeTimer) clearTimeout(this.chimeTimer);
    if (this.ctx && this.ctx.state === 'running') {
      this.ctx.suspend();
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

const gardenAudio = new GardenAudioSynthesizer();

audioToggleBtn.addEventListener('click', () => {
  const active = gardenAudio.toggle();
  audioToggleBtn.classList.toggle('active', active);
  audioToggleBtn.querySelector('.btn-text').textContent = active ? 'Audio: On' : 'Garden Audio';
});

// 12. Floating Botanical Canvas Petals
function initPetalCanvas() {
  const ctx = petalCanvas.getContext('2d');
  let width = (petalCanvas.width = window.innerWidth);
  let height = (petalCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = petalCanvas.width = window.innerWidth;
    height = petalCanvas.height = window.innerHeight;
  });

  const petals = [];
  const petalCount = 28;
  const colors = [
    'rgba(201, 123, 135, 0.45)', // Rose blush
    'rgba(197, 155, 72, 0.40)',  // Golden pollen
    'rgba(163, 137, 212, 0.38)', // Lavender violet
    'rgba(240, 215, 218, 0.50)'  // Soft petal white
  ];

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 6 + Math.random() * 9,
      speedX: -0.5 + Math.random() * 1.2,
      speedY: 0.6 + Math.random() * 1.4,
      rotation: Math.random() * 360,
      rotationSpeed: -1 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      swayOffset: Math.random() * Math.PI * 2
    });
  }

  let animFrameId;

  function renderPetals() {
    ctx.clearRect(0, 0, width, height);

    if (state.petalsAnimationActive) {
      petals.forEach(p => {
        p.y += p.speedY;
        p.swayOffset += 0.02;
        p.x += Math.sin(p.swayOffset) * 0.8 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        ctx.beginPath();
        ctx.fillStyle = p.color;
        // Draw elegant petal curve
        ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    }

    animFrameId = requestAnimationFrame(renderPetals);
  }

  // Check if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    state.petalsAnimationActive = false;
    petalsToggleBtn.classList.remove('active');
  }

  renderPetals();
}

petalsToggleBtn.addEventListener('click', () => {
  state.petalsAnimationActive = !state.petalsAnimationActive;
  petalsToggleBtn.classList.toggle('active', state.petalsAnimationActive);
  petalsToggleBtn.querySelector('.btn-text').textContent = state.petalsAnimationActive ? 'Petals: On' : 'Petals: Off';
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
  mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
  mainNav.classList.toggle('mobile-open', !isExpanded);
});

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('mobile-open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  });
});

// 13. Initialization
document.addEventListener('DOMContentLoaded', () => {
  updateCategoryCounters();
  updateBookmarkBadges();
  renderFlowerGrid();
  initPetalCanvas();
  handleHashRoute();
});

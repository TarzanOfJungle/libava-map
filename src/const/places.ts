import Place from "../model/place";

const PLACES: Record<number, Place> = {
    1: {
        id: 1,
        name: 'Velká Střelná (Gross Waltersdorf)',
        description: `Nejstarší písemné zmínky ze 14. století  
Od 1850 samostatná obec  
V r.1930 zde žilo 1927 obyvatel (1890 Němců) 
V součastnosti se v místě nachází tankodrom, dochoval se pouze lovecký zámeček  
Významné hospodářské centrum oblasti, továrna, sodovkárna, cihelna, lihovar, těžba břidlice
Před 20. stoletím zanikla dvě šlechtická sídla, středověká tvrz a barokní zámek`,
        coordinates: [49.6681534, 17.4958308],
        oldImgage: {
            description: '1947',
            imageUrl: '1/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '1/new.png',
        },
        otherImages: [],
    },
    2: {
        id: 2,
        name: 'Kyjanice',
        description: `První zmínky z 16.století
                    Do první půlky 18. století známá jako Kyjanický mlýn
                    V r. 1892 zde postavila firma Losert parní pilu (v r.1920 200 zaměstnanců)
                    Chytil toto místo v roce 1921 uvádí jako skupinu chalup s vodním a parním mlýnem.
                    V r. 1932 šest domů s 87 obyvateli
                    Po r. 1945 vysídleno německé obyvatelstvo a mlýn i domy zbourány (vojenský újezd)
                    Nejdůležitější byl mlýn, dnes je zde jen silnice na kterou se napojují lesní cesty, někdy slouží k těžbě dřeva, podobně jako před 1945 `,
        coordinates: [49.5874944, 17.5207271],
        oldImgage: {
            description: '1947',
            imageUrl: '2/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '2/new.png',
        },
        otherImages: [],
    },
    3: {
        id: 3,
        name: 'Ranošov (Prusinowitz)',
        description: `Nejstarší písemná zmínka z r. 1355 
R. 1491 pustá ves, znovuzaložena r. 1656 - samostatná obec od r. 1905 
V obci bylo sídlo lesního revíru velkostatku Veselíčko a obecná škola
V r. 1930 246 obyvatel
Po Druhé světové válce se ocitla ve vojenském prostoru a byla zničena 
V r. 2016 se katastr stal součástí obce Kozlov 
Z původní zástavby zůstala pouze myslivna `,
        coordinates: [49.5928021, 17.5403163],
        oldImgage: {
            description: '1947',
            imageUrl: '3/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '3/new.png',
        },
        otherImages: [],
    },
    4: {
        id: 4,
        name: 'Sklárna (Glashütte)',
        description: `Sklárna v provozu od r. 1821 - příiliv obyvatel do oblasti (Heřmanice)  
V r.1843 změstnávala 188 dělníků`,
        coordinates: [49.6263471, 17.5895611],
        oldImgage: {
            description: '1938',
            imageUrl: '4/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '4/new.png',
        },
        otherImages: [],
    },
    5: {
        id: 5,
        name: 'Heřmánky (Hermsdorf)',
        description: `První zmínky 13. století 
V 16. století ves zpustla a znovu byla osídlena až v roce 1711 
Do 1923 osada obce Boškov
v r. 1930 120 obyvatel (110 němců)`,
        coordinates: [49.6479275, 17.6024485],
        oldImgage: {
            description: '1947',
            imageUrl: '5/old.png',
        },
        newImage: {
            description: '2025',
            imageUrl: '5/new.png',
        },
        otherImages: [],
    },
    6: {
        id: 6,
        name: 'Bělidlo (Bleiche)',
        description: `1930 zde žilo 119 obyvatel`,
        coordinates: [49.6446791, 17.6196624],
        oldImgage: {
            description: '1947',
            imageUrl: '6/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '6/new.png',
        },
        otherImages: [],
    },
    7: {
        id: 7,
        name: 'Milovany (Milbes)',
        description: `První zminka z počátku 14. století  
Od r.1850 samostatná obec
V r.1930 424 obyvatel (419 Němců) 
V obci byla fara a kostel sv. Kateřiny z r.1730 (farnost zrušena 1946) 
Zdejší rychta jedna z největších v okolí
Dle pramenů byl v obci bohatý kulturní a společenský život (hasičský a tělovýchovný spolek), dále také divadelní spolek a v okolí vyhlášená kapela Johanna Stixe`,
        coordinates: [49.6667993, 17.6057854],
        oldImgage: {
            description: '1947',
            imageUrl: '7/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '7/new.png',
        },
        otherImages: [],
    },
    8: {
        id: 8,
        name: 'Čermná (Gross Dittersdrof)',
        description: `První zmínky z počátku 14. století 
Od r.1850 samostatná politická obec  
1930 zde bylo 674 obyvatel (662 Němeců) 
V obci byly dva vodní mlýny, dva větrné mlýny, pošta, záložna, pila, hasičská zbrojnice, škola, hostince, obchody a také fara s kostelem sv. Máří Magdaleny `,
        coordinates: [49.6598298, 17.5745326],
        oldImgage: {
            description: '1947',
            imageUrl: '8/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '8/new.png',
        },
        otherImages: [],
    },
    9: {
        id: 9,
        name: 'Nová ves nad Odrou (Neueigen)',
        description: `Založena v 16. století  
Od 1850 samostatná politická obec  
V r.1930 255 obyvatel (250 Němců)`,
        coordinates: [49.6527489, 17.5427490],
        oldImgage: {
            description: '1947',
            imageUrl: '9/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '9/new.png',
        },
        otherImages: [],
    },
    10: {
        id: 10,
        name: 'Popelný kout (Ascherwinkel)',
        description: `V r.1930 34 obyvatel  
Patřil k Čermné`,
        coordinates: [49.6680376, 17.5600883],
        oldImgage: {
            description: '1947',
            imageUrl: '10/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '10/new.png',
        },
        otherImages: [],
    },
    11: {
        id: 11,
        name: 'Olejovice (Ölstadtl)',
        description: `První zmínky z konce 16. století 
Od 1884 samostatná obec
V r.1930 zde žilo 163 obyvatel (162 němců) 
V obci se nacházela škola, hasičská zbrojnice, záložna, knihovna, hostinec, obchody, vodní mlýn a kaple sv. Jana Nepomuckého`,
        coordinates: [49.6802993, 17.5296407],
        oldImgage: {
            description: '1947',
            imageUrl: '11/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '11/new.png',
        },
        otherImages: [],
    },
    12: {
        id: 12,
        name: 'Varhošť (Haslicht)',
        description: `První zmínky z poloviny 12. století  
Koncem 16. století povýšena na trhové městečko
Od 1850 samostatná vesnice
V r.1930 349 obyvatel (338 Němců) 
Po roce 1945 vysídleni Němci, ale obec částečně dosídlena (170 obyvatel v r.1947)
V obci se nacházela dvoutřídní škola, kovárna, chudobinec, záložna, hasiči a hostinec, také dva vodní mlýny  
V terénu jsou patrné rozvaliny zbořených domů`,
        coordinates: [49.6257809, 17.4886625],
        oldImgage: {
            description: '1947',
            imageUrl: '12/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '12/new.png',
        },
        otherImages: [],
    },
    13: {
        id: 13,
        name: 'Jestřabí (Habicht)',
        description: `Nacházela se v kotlině Jesenické pahorkatiny 595 m.n.m. 
Nejstarší dochovaný pramen z r.1406 
Zpustošena, ale znovu osídlena v 16. stoeltí  
Samostatná obec od r.1850 
V r.1930 359 obyvatel (356 Němců) 
Po Druhé světové válce vysídlena a následně dosídlena na 221 obyvatel 
Dochovaly se znatelné ruiny kostela  
V obci byla katolická fara a farní kostel Nejsvětější trojice z 16. století se třemi oltáři, dále dva mlýny, záložna, hasiči a obecní škola`,
        coordinates: [49.6307735, 17.4729722],
        oldImgage: {
            description: '1947',
            imageUrl: '13/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '13/new.png',
        },
        otherImages: [],
    },
    14: {
        id: 14,
        name: 'Nepřívaz (Epperswagen)',
        description: `První zmínky ze 13. století  
Do Třicetileté války zřejmě české obyvatelstvo, pak znovu osídlena Němci  
Od r.1850 samostatná obec 
V r.1930 403 obyvatel (339 Němců) 
Po válce Němci vysídleni a vesnice dosídlena na 233 obyvatel  
V okolí obce byly břidlicové doly  
Bohatý kulturní život, ve 30. letech osm německých spolků, ochotnické divadlo a hudební soubor
V obci byl větrný mlýn, ten se stal předlohou k obrazu malíře Karla Tomana z r.1935`,
        coordinates: [49.6492317, 17.4426373],
        oldImgage: {
            description: '1947',
            imageUrl: '14/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '14/new.png',
        },
        otherImages: [],
    },
    15: {
        id: 15,
        name: 'Hühnerberg',
        description: `V r.1930 64 obyvatel`,
        coordinates: [49.6788759, 17.4685051],
        oldImgage: {
            description: '1947',
            imageUrl: '15/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '15/new.png',
        },
        otherImages: [],
    },
    16: {
        id: 16,
        name: 'Smilov (Schmeil)',
        description: `Patrně jedna z nejstarších obcí v okolí, chybějí ovšem písemné záznamy
Nejstarší dochovaná zmínka z poloviny patnáctého století
Od r.1850 samostatná obec 
V r.1930 zde žilo 691 obyvatel (689 Němců)
Po válce Němci vysídleni a část obyvatelstva dosídlena (163 obyvatel)
V místě obce se nachází dělostřelecká střelnice 
Podle místní tradice ležela původní ves trošku někde jinde, zanikla za husitských válek 
Ve Smilově se nacházel kostel sv. Jana Křtitele z r.1585
Poslední dům zbourán až v r.1995 (vilka) - obýval ho důstojník Rudé armády`,
        coordinates: [49.6957943, 17.4795925],
        oldImgage: {
            description: '1947',
            imageUrl: '16/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '16/new.png',
        },
        otherImages: [],
    },
    17: {
        id: 17,
        name: 'Bělá (Seibersdorf)',
        description: `V r.1930 zde žilo 260 obyvatel`,
        coordinates: [49.7292437, 17.4655606],
        oldImgage: {
            description: '1947',
            imageUrl: '17/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '17/new.png',
        },
        otherImages: [],
    },
    18: {
        id: 18,
        name: 'Keprtovice (Geppertsau)',
        description: `První zmínky jsou z konce 16. století (starší v nepřímých pramenech)
V r.1826 zde byla postavena škola 
Samostatná obec od r.1850
V r.1930 zde žilo 299 obyvatel (všichni Němci)
Po vysídlení zůstala obec prázdnou a v r.1948 přejmenována na Údolnou 
Dominantou obce byla kaple sv. Jiří, na jejíž stavbu přispěl i císař Ferdinand I. a jeho choť Marie Anna`,
        coordinates: [49.6989731, 17.5571841],
        oldImgage: {
            description: '1947',
            imageUrl: '18/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '18/new.png',
        },
        otherImages: [],
    },
    19: {
        id: 19,
        name: 'Zigartice (Siegertsau)',
        description: `První zmínka v listině moravského markraběte z r.1394
Od r.1850 samostatná obec 
V r.1930 zde žilo 300 obyvatel 
Po válce jen velmi málo dosídlena (16 obyvatel)
Dominantou obce byl kostel sv. Jana Nepomuckého 
Nacházel se zde také vodní mlýn, záložna, dva hostince a divadelní, hasičský, tělocvičný a zemědělský spolek 
V blízkosti obce se nachází vrch Steinberg, na kterém měl bývat hrad, jeho existence ovšem není doložena`,
        coordinates: [49.6948797, 17.5808164],
        oldImgage: {
            description: '1947',
            imageUrl: '19/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '19/new.png',
        },
        otherImages: [],
    },
    20: {
        id: 20,
        name: 'Stará Voda (Altwasser)',
        description: `Založení obce je datované do 13. století
Významné poutní místo s kostelem sv. Jakuba většího a sv. Anny s přilehlým klášterem
Od r.1850 samostatná obec 
V r.1930 zde žilo 327 obyvatel (323 Němců)
Po odsunu v obci nezůstal nikdo 
Od r.2016 součástí města Libavá, místo ožívá zásluhou obnoveného barokního kostela`,
        coordinates: [49.7408285, 17.5704758],
        oldImgage: {
            description: '1947',
            imageUrl: '20/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '20/new.png',
        },
        otherImages: [],
    },
    21: {
        id: 21,
        name: 'Vojnovice (Kriegsdorf)',
        description: `Poprvé se v písemných zdrojích objevuje na začátku 16. století 
Od roku 1875 samostatná obec
V r.1930 zde žilo 222 obyvatel (221 Němců) 
Nejviditelnějším pozůstatkem obce jsou zbytky mlýna, ve kterém se vyráběla elektrická energie pro celou obec 
Náboženským centrem obce byl filiální kostel sv.Trojice
V obci se nacházela výrobna lihovin a sýrů`,
        coordinates: [49.7226667, 17.5934249],
        oldImgage: {
            description: '1947',
            imageUrl: '21/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '21/new.png',
        },
        otherImages: [],
    },
    22: {
        id: 22,
        name: 'Rudoltovice (Rudelzau)',
        description: `První přímý pramen až ze 17.století, nepřímo můžeme obci datovat do začátku století 15.
Od r.1850 samostatná obec 
V r.1930 zde žilo 1063 obyvatel (1028 Němců)
Po vyhnání Němců dosídlena na 972 obyvatel 
Velká středisková obec s farností, poštovním úřadem a četnickou stanicí 
V okolí obce probíhala hornická činnost (olovo, stříbro) 
V obci byla také čtyřtřídní obecná škola a dvouroční pokračovací škola
Rudoltovice měly také vodní družstva, 2 pily, 2 vodní mlýny, záložnu „Raiffeisenku“ a také 4 hostince
Ze spolků zde působily např. všeodborový, 2 zemědělské, kasino, hasičský a pěvecký`,
        coordinates: [49.7250444, 17.6260955],
        oldImgage: {
            description: '1947',
            imageUrl: '22/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '22/new.png',
        },
        otherImages: [],
    },
    23: {
        id: 23,
        name: 'Barnov (Bernhau)',
        description: `Obec vznikla ve 14. století jako hornická osada
Od r.1850 samostatnou obcí 
V r.1930 zde žilo 353 obyvatel (343 Němců)
Po druhé světové válce Němci vysídleni a obec částečně dosídlena (164 obyvatel)
V okolí obce se nacházely rudné doly, v druhé polovině 19. století tady bylo zaměstnáno téměř 300 horníků`,
        coordinates: [49.7166404, 17.6675839],
        oldImgage: {
            description: '1947',
            imageUrl: '23/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '23/new.png',
        },
        otherImages: [],
    },
    24: {
        id: 24,
        name: 'Nové Oldřůvky (Neudorf)',
        description: `Vznikly zřejmě již ve 13. století
První písemné známky z poloviny 15.století 
Od r.1850 samostatná obec 
V r.1930 zde žilo 274 obyvatel (všichni Němci)
Po válce obec dosídlena na 151 obyvatel 
Nejvýznamnější budovou byl filiální kostel sv. Jana Křtitele z r.1784 
Jediným pozůstatkem v obci zůstal železobetonový most přes Odru z r.1908, který byl ve své době první pevný most přes Odru od jejího pramene
Do vojenského újezdu zařazena jako jedna z posledních až v roce 1952 
Škola byla v obci postavena v roce 1793. Byl zde mlýn a pila`,
        coordinates: [49.7507531, 17.6772857],
        oldImgage: {
            description: '1947',
            imageUrl: '24/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '24/new.png',
        },
        otherImages: [],
    },
    25: {
        id: 25,
        name: 'Rejchartice (Reigersdorf)',
        description: `První doklad v pramenech se datuje do r.1269
Roku 1785 postavena jednotřídní škola, v obci se nacházela také obecní knihovna
Od r.1850 samostatná obec 
V r.1930 zde žilo 235 obyvatel (všichni Němci)
Obec částečně dosídlena po druhé světové válce (v r.1961 ještě 75 obyvatel)
Konec obce zapříčinila sovětská armáda v r.1968, která zabrala nedaleké vojenské cvičiště a domy využila jako stavební materiál 
Nacházel se zde také kostel sv. Antonína Paulánského, který měli zbořit sovětští vojáci`,
        coordinates: [49.8115178, 17.5229284],
        oldImgage: {
            description: '1947',
            imageUrl: '25/old.png',
        },
        newImage: {
            description: '2024',
            imageUrl: '25/new.png',
        },
        otherImages: [],
    },
};

export {PLACES};
export type { Place };
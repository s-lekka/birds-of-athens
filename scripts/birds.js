const src = '/resources/images/birds/'

const magpie = {
    name: 'Magpie',
    birdSize: 'L',
    beakSize: 'M',
    characteristics: ['longtail'],
    colors: ['black', 'white', 'blue'],
    possibleLocations: ['grass', 'sky', 'cable', 'tree', 'park'],
    imgsrc: src + 'magpie.jpg',
    info: `The adult male of the Pica pica, is 44–46 cm in length, of which more than half is the tail. 
    The wingspan is 52–62 cm. The head, neck and breast are glossy black with a metallic green and 
    violet sheen; the belly and scapulars (shoulder feathers) are pure white; the wings are black 
    glossed with green or purple, and the primaries have white inner webs, conspicuous when the wing 
    is open. The graduated tail is black, glossed with green and reddish purple. The legs and bill 
    are black; the iris is dark brown. The plumage of the sexes is similar but females are slightly 
    smaller. The tail feathers of both sexes are quite long, about 12–28 cm long. The young resemble 
    the adults, but are at first without much of the gloss on the sooty plumage. The young have the 
    malar region pink, and somewhat clear eyes. The tail is much shorter than the adults.
    
    Eurasian magpies have a well-known call. It is a choking chatter "chac-chac" or a repetitive 
    "chac-chac-chac-chac". The young also emit the previous call, although they also emit an acute 
    call similar to a "Uik Uik", which may resemble the barking of a small dog. Both adults and 
    young can emit a kind of hiss barely noticeable from afar.`
}

const pigeon = {
    name: 'Pigeon',
    birdSize: 'M',
    beakSize: 'S',
    characteristics: [],
    colors: ['gray', 'black', 'green', 'purple'],
    possibleLocations: ['sky', 'cable', 'tree', 'square', 'park'],
    imgsrc: src + 'pigeon.jpg',
    info: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Tempora voluptatem culpa nesciunt autem sed voluptate nam.
    Tempora, delectus voluptatibus, rerum beatae, odit perferendis
    tempore aliquam rem ducimus ad voluptas nemo!`
}

const swallow = {
    name: 'Swallow',
    birdSize: 'S',
    beakSize: 'S',
    characteristics: [],
    colors: ['gray', 'black', 'white'],
    possibleLocations: ['sky', 'cable'],
    imgsrc: src + 'swallow.jpg',
    info: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Tempora voluptatem culpa nesciunt autem sed voluptate nam.
    Tempora, delectus voluptatibus, rerum beatae, odit perferendis
    tempore aliquam rem ducimus ad voluptas nemo!`
}

const sparrow = {
    name: 'Sparrow',
    birdSize: 'S',
    beakSize: 'S',
    characteristics: [],
    colors: ['gray', 'black', 'brown'],
    possibleLocations: ['sky', 'cable', 'tree', 'square', 'park'],
    imgsrc: src + 'sparrow.jpg',
    info: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Tempora voluptatem culpa nesciunt autem sed voluptate nam.
    Tempora, delectus voluptatibus, rerum beatae, odit perferendis
    tempore aliquam rem ducimus ad voluptas nemo!`
}

const birdList = [magpie, pigeon, swallow, sparrow]


const Model = require('./model.js');

const chairs = [
    {
        "name": "Grey Chair",
        "category": "chair", 
        "collection_id": 1,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/%24_35.JPG",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false,
        
    },
    {
        "name": "Beige Sofa chair",
        "category": "chair", 
        "collection_id": 1,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/1034e513212989f8e48b677171a6e98e.jpg",
        "max_price": 349,
        "min_price": 299,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Skinny Legged Grey Chair",
        "category": "chair", 
        "collection_id": 1,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/1500-1500-frame-0.jpg",
        "max_price": 299,
        "min_price": 249,
        'limited_offer': false,
        'on_sale': true
    },
    {
        "name": "Grey Sofa Chair",
        "category": "chair", 
        "collection_id": 1,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/1553529613-westelm-paidge-chair-and-a-half-sleeper-1553529608.jpg",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Beige Lounge Chair",
        "category": "chair", 
        "collection_id": 1,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/449df202b5e443178fe2618b065140bc.jpg",
        "max_price": 149,
        "min_price": 99,
        'limited_offer': false,
        'on_sale': true
    },
    {
        "name": "James Harrison XL Wing Chair",
        "category": "chair", 
        "collection_id": 1,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/18-0111759-west-elm-James-Harrison-XL-Wing-Chair-2.jpg",
        "max_price": 699,
        "min_price": 499,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Paulo Bent Ply Leather Chair",
        "category": "chair", 
        "collection_id": 1,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/Paulo-Bent-Ply-Leather-Chair-West-Elm.jpg",
        "max_price": 699,
        "min_price": 499,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Thea Chair",
        "category": "chair", 
        "collection_id": 1,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/3D-model-thea-chair-west-elm_D.jpg",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': false,
        'on_sale': true
    },
    {
        "name": "Carlo Chair",
        "category": "chair", 
        "collection_id": 1,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/carlo-chair-west-elm-sale.jpg",
        "max_price": 549,
        "min_price": 499,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Brownstone Armchair",
        "category": "chair", 
        "collection_id": 1,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/west-elm-armchair-brownstone-armchair-west-elm-west-elm-leather-sofas.jpg",
        "max_price": 449,
        "min_price": 379,
        'limited_offer': false,
        'on_sale': true
    }, // collection 2
    {
        "name": "Lucas Leather Swivel Base Chair",
        "category": "chair", 
        "collection_id": 2,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/lucas-leather-swivel-base-chair-c.jpg?_ga=2.200170990.-1156051358.1562849388",
        "max_price": 549,
        "min_price": 499,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Blue Velvet Chair",
        "category": "chair", 
        "collection_id": 2,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/542190c60b8b1da6cbda8ef61ebe98ee.jpg?_ga=2.233773662.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Blue Cabaret Chair",
        "category": "chair", 
        "collection_id": 2,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/67903cc99325e1b12e35759785ef41ab.jpg?_ga=2.187453800.-1156051358.1562849388",
        "max_price": 649,
        "min_price": 549,
        'limited_offer': false,
        'on_sale': true
    },
    {
        "name": "Pebble Guest Chair",
        "category": "chair", 
        "collection_id": 2,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/18-0111800-west-elm-Work-Pebble-Guest-Chair.jpg?_ga=2.155073016.-1156051358.1562849388",
        "max_price": 249,
        "min_price": 199,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Sterling Armless Grey Chair",
        "category": "chair", 
        "collection_id": 2,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/19-0118417-West-Elm-Work-Sterling-Chair-Armless-with-Wood-Base.jpg?_ga=2.195845484.-1156051358.1562849388",
        "max_price": 549,
        "min_price": 449,
        'limited_offer': false,
        'on_sale': false,
    },
    {
        "name": "Grey Velvet Plush Chair",
        "category": "chair", 
        "collection_id": 2,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/27de432ccc583c908f4fee402828698c.jpg?_ga=2.223834587.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Grey Thea Chair",
        "category": "chair", 
        "collection_id": 2,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/3D-model-thea-chair-west-elm_D.jpg?_ga=2.167123454.-1156051358.1562849388",
        "max_price": 649,
        "min_price": 549,
        'limited_offer': false,
        'on_sale': true
    },
    {
        "name": "Jameson Green Chair",
        "category": "chair", 
        "collection_id": 2,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/6b53c29f7cabf5a7da1fe57ed9a7b05c.jpg?_ga=2.254088648.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Grey Extendable Sofa",
        "category": "chair", 
        "collection_id": 2,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/8c8e0ef2c603346ce2b73e87cb333eec_xlarge.jpg?_ga=2.190217451.-1156051358.1562849388",
        "max_price": 549,
        "min_price": 449,
        'limited_offer': false,
        'on_sale': false,
    }, // collection 3
    {
        "name": "Extended Sloping Light Chair",
        "category": "chair", 
        "collection_id": 3,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/9893d94e0368396fd2e720ff7d4a4100.jpg?_ga=2.267146446.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Luna Chair",
        "category": "chair", 
        "collection_id": 3,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/luna-chair-c.jpg?_ga=2.196424300.-1156051358.1562849388",
        "max_price": 649,
        "min_price": 549,
        'limited_offer': false,
        'on_sale': true
    },
    {
        "name": "Circular Back White Chair",
        "category": "chair", 
        "collection_id": 3,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/DSC_2700(1).jpg?_ga=2.157761018.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Circular Back Rose Pink Chair",
        "category": "chair", 
        "collection_id": 3,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/IMGP8251_1-600x600.png?_ga=2.157761018.-1156051358.1562849388",
        "max_price": 549,
        "min_price": 449,
        'limited_offer': false,
        'on_sale': false,
    },
    {
        "name": "John Vogel Chair",
        "category": "chair", 
        "collection_id": 3,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/John-Vogel-Chair.jpg?_ga=2.228948316.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Paulo Bent Ply Leather Chair",
        "category": "chair", 
        "collection_id": 3,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/Paulo-Bent-Ply-Leather-Chair-West-Elm.jpg?_ga=2.232797534.-1156051358.1562849388",
        "max_price": 649,
        "min_price": 549,
        'limited_offer': false,
        'on_sale': true
    },
    {
        "name": "Smooth Flapped Black Chair",
        "category": "chair", 
        "collection_id": 3,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/W-D_Jan18-5.jpeg?_ga=2.158150906.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Clarke Leather Wing Chair",
        "category": "chair", 
        "collection_id": 3,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/West-Elm-Clarke-Leather-Wing-Chair-living-room-furniture-sale.jpg?_ga=2.154098296.-1156051358.1562849388",
        "max_price": 849,
        "min_price": 749,
        'limited_offer': false,
        'on_sale': false,
    }, // collection 4
    {
        "name": "John Vogel Dining Chair",
        "category": "chair", 
        "collection_id": 4,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/West-Elm-John-Vogel-Dining-Chair.jpg?_ga=2.228922844.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Mid-Century Show Wood Chair",
        "category": "chair", 
        "collection_id": 4,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/West-Elm-Mid-Century-Show-Wood-Chair-Hero-1.jpg?_ga=2.228922844.-1156051358.1562849388",
        "max_price": 649,
        "min_price": 549,
        'limited_offer': false,
        'on_sale': true
    },
    {
        "name": "Mid-Century Velvet Dining Chair",
        "category": "chair", 
        "collection_id": 4,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/West-Elm-Mid-Century-Velvet-Dining-Chair.jpg?_ga=2.254171464.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Grey Arching Armed Chair",
        "category": "chair", 
        "collection_id": 4,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/_D.jpg?_ga=2.232216159.-1156051358.1562849388",
        "max_price": 549,
        "min_price": 449,
        'limited_offer': false,
        'on_sale': false,
    },
    {
        "name": "The Every-Girl Accent Chair",
        "category": "chair", 
        "collection_id": 4,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/accent-chairs-the-everygirl-21.jpg?_ga=2.257719755.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Grey Alto Chair",
        "category": "chair", 
        "collection_id": 4,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/alto-chair-1-c.jpg?_ga=2.257719755.-1156051358.1562849388",
        "max_price": 649,
        "min_price": 549,
        'limited_offer': false,
        'on_sale': true
    },
    {
        "name": "Black Cushioned Wood Chair",
        "category": "chair", 
        "collection_id": 4,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/b1g.jpg8A0755E8-813C-4C4C-A7C4-B4DF664FBB48Original.jpg?_ga=2.221263320.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Carlo Chair",
        "category": "chair", 
        "collection_id": 4,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/carlo-chair-west-elm-sale.jpg?_ga=2.188046952.-1156051358.1562849388",
        "max_price": 549,
        "min_price": 449,
        'limited_offer': false,
        'on_sale': false,
    },
    {
        "name": "Carlo Mid-Century Chair",
        "category": "chair", 
        "collection_id": 5,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/carlo-mid-century-chair-c.jpg?_ga=2.188046952.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Contour Mid-Century Chair",
        "category": "chair", 
        "collection_id": 5,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/contour-mid-century-chair-c.jpg?_ga=2.186522217.-1156051358.1562849388",
        "max_price": 649,
        "min_price": 549,
        'limited_offer': false,
        'on_sale': true
    },
    {
        "name": "Metal Frame Tufted Leather Chair",
        "category": "chair", 
        "collection_id": 5,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/metal-frame-tufted-leather-chair-by-west-elm-3d-model-max-bip-obj-mtl.jpg?_ga=2.196424300.-1156051358.1562849388",
        "max_price": 649,
        "min_price": 599,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Crescent Swivel Chair",
        "category": "chair", 
        "collection_id": 5,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/crescent-swivel-chair-by-west-elm-3d-model-max-bip-obj-mtl.jpg?_ga=2.258760138.-1156051358.1562849388",
        "max_price": 549,
        "min_price": 449,
        'limited_offer': false,
        'on_sale': false,
    },
    {
        "name": "Mid-Century Desk Chair",
        "category": "chair", 
        "collection_id": 5,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/desk-chair---mid-century-3D-model_D.jpg?_ga=2.258760138.-1156051358.1562849388",
        "max_price": 449,
        "min_price": 399,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Dries Leather Sling Chair",
        "category": "chair", 
        "collection_id": 5,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/dries-leather-sling-chair-by-west-elm-3d-model-max-bip-obj-mtl.jpg?_ga=2.27546236.-1156051358.1562849388",
        "max_price": 649,
        "min_price": 549,
        'limited_offer': false,
        'on_sale': true
    },
    {
        "name": "Erik Upholstered Wing Chair",
        "category": "chair", 
        "collection_id": 5,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/erik-upholstered-wing-chair-by-west-elm-3d-model-max-bip-obj-mtl.jpg?_ga=2.234231390.-1156051358.1562849388",
        "max_price": 749,
        "min_price": 599,
        'limited_offer': true,
        'on_sale': false
    },
    {
        "name": "Finley High-Back Velvet Dining Chair",
        "category": "chair", 
        "collection_id": 5,
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/finley-high-back-velvet-dining-chair-west-elm-intended-for-decor-4.jpg?_ga=2.234231390.-1156051358.1562849388",
        "max_price": 549,
        "min_price": 449,
        'limited_offer': false,
        'on_sale': false,
    },
];




Model.Chairs
    .bulkCreate(chairs)
    .then( result => {
        if(result[1] === false){
            console.log('Already existed in the database');
        }else{
            console.log('Successfully added to database');
        }
    })
    .catch( err => console.error('Issue seeding Users Table', err));

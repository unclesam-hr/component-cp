const Model = require('./model.js');

const chairs = [
    {
        "name": "Grey Chair",
        "category": "chair",
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/%24_35.JPG",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "Beige Sofa chair",
        "category": "chair",
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/1034e513212989f8e48b677171a6e98e.jpg",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "Skinny Legged Grey Chair",
        "category": "chair",
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/1500-1500-frame-0.jpg",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "Grey Sofa Chair",
        "category": "chair",
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/1553529613-westelm-paidge-chair-and-a-half-sleeper-1553529608.jpg",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "Brown Slope Chair",
        "category": "chair",
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/18-0111052-west-elm-Slope-Chair.jpg",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "James Harrison XL Wing Chair",
        "category": "chair",
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/18-0111759-west-elm-James-Harrison-XL-Wing-Chair-2.jpg",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "Paulo Bent Ply Leather Chair",
        "category": "chair",
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/Paulo-Bent-Ply-Leather-Chair-West-Elm.jpg",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "Thea Chair",
        "category": "chair",
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/3D-model-thea-chair-west-elm_D.jpg",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "Carlo Chair",
        "category": "chair",
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/carlo-chair-west-elm-sale.jpg",
        "max_price": 1,
        "min_price": 0
    },
    {
        "name": "Brownstone Armchair",
        "category": "chair",
        "url": "https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/west-elm-armchair-brownstone-armchair-west-elm-west-elm-leather-sofas.jpg",
        "max_price": 1,
        "min_price": 0
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

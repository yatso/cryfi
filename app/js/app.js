(function() {
    'use strict';

    angular
        .module('cryfi', [
            'ngRoute',
            'ngResource',
            'firebase'
        ])

        .config(function($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'AppController'
            })
            .when('/cafe', {
                templateUrl: 'pages/cafe.html',
                controller: 'CafeController'
            })
            .otherwise({redirectTo: '/'});
    })

    .service('CafeService', function(){
     this.cafes = function(){
        return (function(yelpJson){
            var yelpJson = {
               "region":{
                  "span":{
                     "latitude_delta":0.007583069999995473,
                     "longitude_delta":0.0033294267820167534
                 },
                 "center":{
                     "latitude":37.38815285,
                     "longitude":-122.08155127581
                 }
             },
             "total":40,
             "businesses":[
             {
                 "is_claimed":true,
                 "rating":4,
                 "mobile_url":"http://m.yelp.com/biz/peets-coffee-and-tea-mountain-view?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=jqzRyorgPw4t4nQ3StcSww",
                 "rating_img_url":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
                 "review_count":155,
                 "name":"Peet's Coffee & Tea",
                 "rating_img_url_small":"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
                 "url":"http://www.yelp.com/biz/peets-coffee-and-tea-mountain-view?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=jqzRyorgPw4t4nQ3StcSww",
                 "categories":[
                 [
                 "Coffee & Tea",
                 "coffee"
                 ]
                 ],
                 "menu_date_updated":1441996744,
                 "phone":"6506050003",
                 "snippet_text":"As you can all tell from my reviews, I am extremely selective. That being said, I have been a devoted aficionada of Peet's Coffee & Tea since I first moved...",
                 "image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/IJI7u5S7h782DoQgx32rlQ/ms.jpg",
                 "snippet_image_url":"http://s3-media2.fl.yelpcdn.com/photo/_lM_l0PsPpk0gtDo6FyHTA/ms.jpg",
                 "display_phone":"+1-650-605-0003",
                 "rating_img_url_large":"https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
                 "menu_provider":"single_platform",
                 "id":"peets-coffee-and-tea-mountain-view",
                 "is_closed":false,
                 "location":{
                    "city":"Mountain View",
                    "display_address":[
                    "695 W El Camino Real",
                    "Mountain View, CA 94040"
                    ],
                    "geo_accuracy":8,
                    "postal_code":"94040",
                    "country_code":"US",
                    "address":[
                    "695 W El Camino Real"
                    ],
                    "coordinate":{
                       "latitude":37.384704,
                       "longitude":-122.082824
                   },
                   "state_code":"CA"
               }
           },
           {
             "is_claimed":false,
             "rating":3.5,
             "mobile_url":"http://m.yelp.com/biz/starbucks-mountain-view-8?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=jqzRyorgPw4t4nQ3StcSww",
             "rating_img_url":"https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
             "review_count":134,
             "name":"Starbucks",
             "rating_img_url_small":"https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
             "url":"http://www.yelp.com/biz/starbucks-mountain-view-8?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=jqzRyorgPw4t4nQ3StcSww",
             "categories":[
             [
             "Coffee & Tea",
             "coffee"
             ]
             ],
             "menu_date_updated":1442040238,
             "phone":"6505649255",
             "snippet_text":"This was and is probably my favorite Starbucks location I've ever regularly visited.\n\nDuring the few months I was employed in the area I really enjoyed how...",
             "image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/zEEgJhGi_EtMqz0U6nN0MA/ms.jpg",
             "snippet_image_url":"http://s3-media1.fl.yelpcdn.com/photo/FIo4EVlqE3YGtIB_DLMuuA/ms.jpg",
             "display_phone":"+1-650-564-9255",
             "rating_img_url_large":"https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
             "menu_provider":"single_platform",
             "id":"starbucks-mountain-view-8",
             "is_closed":false,
             "location":{
                "city":"Mountain View",
                "display_address":[
                "750 Castro St",
                "Mountain View, CA 94041"
                ],
                "geo_accuracy":9.5,
                "postal_code":"94041",
                "country_code":"US",
                "address":[
                "750 Castro St"
                ],
                "coordinate":{
                   "latitude":37.3875860361358,
                   "longitude":-122.08306465162
               },
               "state_code":"CA"
           }
       },
       {
         "is_claimed":false,
         "rating":3,
         "mobile_url":"http://m.yelp.com/biz/bean-scene-cafe-mountain-view?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=jqzRyorgPw4t4nQ3StcSww",
         "rating_img_url":"https://s3-media3.fl.yelpcdn.com/assets/2/www/img/34bc8086841c/ico/stars/v1/stars_3.png",
         "review_count":86,
         "name":"Bean Scene Cafe",
         "rating_img_url_small":"https://s3-media3.fl.yelpcdn.com/assets/2/www/img/902abeed0983/ico/stars/v1/stars_small_3.png",
         "url":"http://www.yelp.com/biz/bean-scene-cafe-mountain-view?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=jqzRyorgPw4t4nQ3StcSww",
         "categories":[
         [
         "Sandwiches",
         "sandwiches"
         ],
         [
         "Coffee & Tea",
         "coffee"
         ]
         ],
         "phone":"6509034871",
         "snippet_text":"We were on our last day in the San Jose area and decided to check out the Mountain View area so we could get an idea just in case of a relocation to the...",
         "image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/Jn8sn3GmkCnnwP4TJZ4jUw/ms.jpg",
         "snippet_image_url":"http://s3-media2.fl.yelpcdn.com/photo/ciiU3h0VImZfPuo1lX0-cg/ms.jpg",
         "display_phone":"+1-650-903-4871",
         "rating_img_url_large":"https://s3-media1.fl.yelpcdn.com/assets/2/www/img/e8b5b79d37ed/ico/stars/v1/stars_large_3.png",
         "id":"bean-scene-cafe-mountain-view",
         "is_closed":false,
         "location":{
            "city":"Mountain View",
            "display_address":[
            "500 Castro St",
            "Mountain View, CA 94041"
            ],
            "geo_accuracy":9.5,
            "postal_code":"94041",
            "country_code":"US",
            "address":[
            "500 Castro St"
            ],
            "coordinate":{
               "latitude":37.390169862591,
               "longitude":-122.08196434027
           },
           "state_code":"CA"
       }
    },
    {
     "is_claimed":false,
     "rating":3.5,
     "mobile_url":"http://m.yelp.com/biz/posh-bagel-mountain-view?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=jqzRyorgPw4t4nQ3StcSww",
     "rating_img_url":"https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
     "review_count":222,
     "name":"Posh Bagel",
     "rating_img_url_small":"https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
     "url":"http://www.yelp.com/biz/posh-bagel-mountain-view?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=jqzRyorgPw4t4nQ3StcSww",
     "categories":[
     [
     "Bagels",
     "bagels"
     ],
     [
     "Breakfast & Brunch",
     "breakfast_brunch"
     ],
     [
     "Creperies",
     "creperies"
     ]
     ],
     "phone":"6509685308",
     "snippet_text":"This is my go-to stop whenever I don't bring lunch from home. It's right below my work office so it's super convenient. Workers here are friendly and...",
     "image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/EwqK2QFVjsJLBhQOD3vu1A/ms.jpg",
     "snippet_image_url":"http://s3-media1.fl.yelpcdn.com/photo/saOmDdu2YY0pKlXBlqLI1g/ms.jpg",
     "display_phone":"+1-650-968-5308",
     "rating_img_url_large":"https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
     "id":"posh-bagel-mountain-view",
     "is_closed":false,
     "location":{
        "city":"Mountain View",
        "display_address":[
        "444 Castro St",
        "Ste 120",
        "Mountain View, CA 94041"
        ],
        "geo_accuracy":9.5,
        "postal_code":"94041",
        "country_code":"US",
        "address":[
        "444 Castro St",
        "Ste 120"
        ],
        "coordinate":{
           "latitude":37.3906503844061,
           "longitude":-122.081228323491
       },
       "state_code":"CA"
    }
    },
    {
     "is_claimed":true,
     "rating":5,
     "mobile_url":"http://m.yelp.com/biz/mountain-view-tea-village-and-gallery-mountain-view-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=jqzRyorgPw4t4nQ3StcSww",
     "rating_img_url":"https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
     "review_count":14,
     "name":"Mountain View Tea Village and Gallery",
     "rating_img_url_small":"https://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
     "url":"http://www.yelp.com/biz/mountain-view-tea-village-and-gallery-mountain-view-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=jqzRyorgPw4t4nQ3StcSww",
     "categories":[
     [
     "Coffee & Tea",
     "coffee"
     ]
     ],
     "phone":"6502825690",
     "snippet_text":"I'm quite a tea fanatic and I support my local businesses when I can. This is the place to go! \n\nI came here about 2-3 years ago. The couple who runs the...",
     "image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/S0HEvUtRSYGz2y3IUr5JIw/ms.jpg",
     "snippet_image_url":"http://s3-media3.fl.yelpcdn.com/photo/ulYG_-yRo840cY6LtJBawA/ms.jpg",
     "display_phone":"+1-650-282-5690",
     "rating_img_url_large":"https://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
     "id":"mountain-view-tea-village-and-gallery-mountain-view-2",
     "is_closed":false,
     "location":{
        "city":"Mountain View",
        "display_address":[
        "361 Castro St",
        "Mountain View, CA 94041"
        ],
        "geo_accuracy":8,
        "postal_code":"94041",
        "country_code":"US",
        "address":[
        "361 Castro St"
        ],
        "coordinate":{
           "latitude":37.391548,
           "longitude":-122.08007
       },
       "state_code":"CA"
    }
    }
    ]
    }
          var newAry = [];
          var cafes = yelpJson.businesses.filter(function(item){
            var mergedCategories = [].concat.apply([], item.categories);
            return mergedCategories.find(function(j){
              return j === "Coffee & Tea" || j === "coffee";
          })
        })
          for (var i = 0; i < cafes.length; i++){
            newAry.push({
              businessId: cafes[i].id,
              businessName: cafes[i].name,
              businessAddress: cafes[i].location["address"][0],
              latitude: cafes[i].location["coordinate"]["latitude"],
              longitude: cafes[i].location["coordinate"]["longitude"],
              businessPhone: cafes[i].phone
            });
        }
            return newAry;
        }());

}});

})();
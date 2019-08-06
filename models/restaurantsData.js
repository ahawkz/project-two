const manyRestaurants = [
  {
    name: 'Ramayana',
    rating: 4,
    cuisine: 'Indonesian',
    comments: 'Heard it is cheap!',
    neighborhood: 'East Passyunk',
    img: 'https://cdn.vox-cdn.com/thumbor/knWThdFnhOd8f5xh_mVZeUXY6SY=/33x0:604x428/1220x813/filters:focal(33x0:604x428):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/42526802/Ramayana-2-640x428.0.0.jpg'
  },
  {
    name: 'Blue Corn',
    rating: 4,
    cuisine: 'Mexican',
    comments: 'Cannot wait to try it.',
    neighborhood: 'South Philly',
    img: 'http://www.passyunkpost.com/wp-content/uploads/2014/07/blue-corn1.jpg'
  },
  {
    name: 'Pho75',
    rating: 5,
    cuisine: 'Vietnamese',
    comments: 'My favorite!!!',
    neighborhood: 'South Philly',
    img: 'https://cdn10.phillymag.com/wp-content/uploads/sites/3/2015/01/pho-75-soup-vietnamese-square.jpg'
  },
  {
    name: 'Vietnam Restaurant',
    rating: 0,
    cuisine: 'Vietnamese',
    comments: 'Did someone say tiki drinks?!',
    neighborhood: 'Chinatown',
    img: 'https://cdn.vox-cdn.com/thumbor/ulpli46PWCrEw3nKMih3NoMSk0g=/0x0:2048x1365/1220x915/filters:focal(861x520:1187x846):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62574087/20690334_10155270214078580_4376570513777400845_o.1543522311.jpg'
  },
  {
    name: 'Tai Lake',
    rating: 4,
    cuisine: 'Chinese',
    comments: 'So many chefs in Philly go here.',
    neighborhood: 'Chinatown',
    img: 'https://cdn.vox-cdn.com/thumbor/HUeR_xifwcJhJ3ty56tazVlxHI4=/0x0:1000x686/1220x915/filters:focal(420x263:580x423):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62574080/tailake.0.0.jpg'
  },
  {
    name: 'Rocco\'s Sausages',
    rating: 4,
    cuisine: 'Food Truck',
    comments: 'Folks say to order with half-sweet, half-hot with onions and peppers.',
    neighborhood: 'South Philly',
    img: 'https://billypenn.com/wp-content/uploads/2019/03/roccos-homedepot.jpg'
  },
  {
    name: 'Saloon',
    rating: 4,
    cuisine: 'Italian',
    comments: 'Order the clams casino.',
    neighborhood: 'South Philly',
    img: 'https://assets3.thrillist.com/v1/image/1538604/size/tmg-venue_carousel_mobile.jpg'
  },
  {
    name: 'Nan Zhou',
    rating: 5,
    cuisine: 'Chinese',
    comments: 'Item to get: spicy pig ear.',
    neighborhood: 'Chinatown',
    img: 'http://midtownlunch.com/philadelphia/files/2012/11/n11-500x375.jpg'
  },
  {
    name: 'Baology',
    rating: 0,
    cuisine: 'Taiwanese',
    comments: 'I love bao buns!',
    neighborhood: 'Center City',
    img: 'https://images.squarespace-cdn.com/content/v1/5884f8e903596e667b2f4b27/1508382915109-80JGKCLGYBUUCV0KS18H/ke17ZwdGBToddI8pDm48kP2m0LSDaf1Q0412K8hCoBIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc7_hEXR6HDRXIeuclpnCVWc41LPxdLw-QT2Uulr3HICUTlt29C-qLVEygxJrdoZv4/Baology_October2017-PorkBellyBun2.jpg?format=1500w'
  },
  {
    name: 'Poi Dog',
    rating: 4,
    cuisine: 'Hawaiian',
    comments: 'So good! Would use this to cater a party.',
    neighborhood: 'Center City',
    img: 'https://images.squarespace-cdn.com/content/v1/558d7090e4b06a586d3396bb/1492645338313-IQEO9JTD1CRUFARVC716/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=1500w'
  },
  {
    name: 'ITV',
    rating: 5,
    cuisine: 'Cocktail Bar',
    comments: 'The drinks here are fantastic',
    neighborhood: 'East Passyunk',
    img: 'https://urbandiningguide.com/wp-content/uploads/2017/08/ITVWineBarphiladelphia.jpg'
  },
  {
    name: 'Square Pie',
    rating: 3,
    cuisine: 'Pizza',
    comments: 'Good but not great.',
    neighborhood: 'Queen Village',
    img: 'http://3.bp.blogspot.com/-oHSoArsoIzk/VHJw3Zfq-UI/AAAAAAAADMA/bMmtWKmlug8/s1600/Square%2BPie%2Bwhole.jpg'
  },
  {
    name: 'Little Fish',
    rating: 4,
    cuisine: 'Seafood',
    comments: 'None',
    neighborhood: 'Queen Village',
    img: 'https://cdn10.phillymag.com/wp-content/uploads/sites/3/2017/08/littlefish.jpg'
  },
  {
    name: 'Fermentery Form',
    rating: 5,
    cuisine: 'Brewery',
    comments: 'Great, great beer.',
    neighborhood: 'Kensington',
    img: 'https://images.ctfassets.net/qe08557i7rmu/3C7BZAFVf9UX1boSY0rw4a/e47f2d16ab91fc1598819d31769fd837/IMG_1779-HDR.jpg?w=1600&fm=jpg&fl=progressive'
  },
  {
    name: 'Seafood Unlimited',
    rating: 0,
    cuisine: 'Seafood',
    comments: 'None',
    neighborhood: 'Rittenhouse',
    img: 'https://cdn10.phillymag.com/wp-content/uploads/2012/09/seafood-480x360.jpg'
  },
  {
    name: 'Giorgio on Pine',
    rating: 0,
    cuisine: 'Italian',
    comments: 'None',
    neighborhood: 'Washington Square',
    img: 'https://cdn.vox-cdn.com/thumbor/dZVDqfBIAPJkrBZYU9nDrJIEXL0=/0x0:646x573/1220x813/filters:focal(334x226:436x328):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/53169841/Screen_Shot_2017_02_09_at_2.03.07_PM.0.png'
  },
  {
    name: 'Positano Coast',
    rating: 3,
    cuisine: 'Mediterannean',
    comments: 'Right across from Zahav, not my favorite but would go back.',
    neighborhood: 'Old City',
    img: 'http://www.positanocoast.net/images/photos/lg/F9RP3.jpg'
  },
  {
    name: 'Loco Pez',
    rating: 0,
    cuisine: 'Mexican',
    comments: 'Heard this is awesome.',
    neighborhood: 'Fishtown',
    img: 'https://media.phillyvoice.com/media/images/Screen_Shot_2018-07-30_at_3.03.32_.2e16d0ba.fill-735x490.png'
  },
  {
    name: 'North 3rd',
    rating: 4,
    cuisine: 'New American',
    comments: 'Wings!!!',
    neighborhood: 'Northern Liberties',
    img: 'https://assets3.thrillist.com/v1/image/1132287/size/tmg-venue_carousel_mobile.jpg'
  },
  {
    name: 'Memhpis Taproom',
    rating: 0,
    cuisine: 'New American',
    comments: 'Heard it\'s good for vegetarians',
    neighborhood: 'Kensington',
    img: 'https://memphistaproom.com/wp-content/uploads/2017/07/MG_0343.jpg'
  }
]

module.exports = manyRestaurants;

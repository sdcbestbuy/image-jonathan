
const faker = require('faker');
const { fake } = require('faker');
const createFakeProduct = () => ({
  customer_review_AVG: faker.random.number(5),
  customerReviewCount: faker.random.number(800),
  product_image: faker.image.image(),
  product_name: faker.lorem.sentence(),
  regularPrice: faker.random.number(),
  shortDescription: faker.lorem.sentence(),
  thumbnailImage: faker.image.image(),
  product_url: faker.image.image()
});

// const createFakeImages = () => {
//   var productImgs = {}; 
//   var j = 1;
//   for(i = 0; i < products.length; i+=10) {
//     if(i === 1000) {
//       i = 0;
//     }
//     if(j === 10000000) {
//       j = 1;
//     }

//     productImgs = {
//     product_image1: products[i],
//     product_image2: products[i++],
//     product_image3: products[i+=2],
//     product_image4: products[i+=3],
//     product_image5: products[i+=4],
//     product_image6: products[i+=5],
//     product_image7: products[i+=6],
//     product_image8: products[i+=7],
//     product_image9: products[i+=8],
//     product_image10: products[i+=9],
//     product_ID: j
//     };

//     j++;
//     return productImgs;
//   }
// };
exports.seed = async function(knex, Promise) {
  
  var fakeProducts = [];
  var desiredFakeProducts = 10000000;
  for(let i = 1; i < desiredFakeProducts; i+= 1) {
    fakeProducts.push(createFakeProduct());

    if(i % 1000 === 0) {
      await knex('products').insert(fakeProducts);
      fakeProducts = [];
    }
  }
  
  // var fakeImages = [];
  // const desiredFakeImages = 10000000;
  // var j = 1;
  // var i = 0;
  // for(let k = 1; k < desiredFakeImages; k+= 1) {

  //     if(i === products.length - 1) {
  //       i = 0;
  //     }
  //     if(j === 10000000) {
  //       j = 1;
  //     }
  
  //     var productImgs = {
  //     product_image1: products[i],
  //     product_image2: products[i++],
  //     product_image3: products[i++],
  //     product_image4: products[i++],
  //     product_image5: products[i++],
  //     product_image6: products[i++],
  //     product_image7: products[i++],
  //     product_image8: products[i++],
  //     product_image9: products[i++],
  //     product_image10: products[i++],
  //     product_ID: j
  //     };
  //     j++;
  //     fakeImages.push(productImgs);

  //   if(k % 1000 === 0) {
  //     await knex('images').insert(fakeImages);
  //     fakeImages = [];
  //   }
  // }
};




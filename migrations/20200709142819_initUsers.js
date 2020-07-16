
exports.up = async function(knex, Promise) {
    await knex.schema.createTable('products', table => {
        table
            .increments('product_id')
            .unsigned()
            .primary();
        table.integer('customer_review_AVG');
        table.integer('customerReviewCount');
        table.string('product_image');
        table.string('product_name');
        table.integer('regularPrice');
        table.string('shortDescription');
        table.string('thumbnailImage');
        table.string('product_url');
    });
    // await knex.schema.createTable('images', table => {
    //     table
    //         .increments('image_id')
    //         .unsigned()
    //         .primary();
    //     table.string('product_image1');
    //     table.string('product_image2');
    //     table.string('product_image3');
    //     table.string('product_image4');
    //     table.string('product_image5');
    //     table.string('product_image6');
    //     table.string('product_image7');
    //     table.string('product_image8');
    //     table.string('product_image9');
    //     table.string('product_image10');
    //     table.integer('product_ID');
    //     table.foreign('product_ID').references('products.product_id');
        
    // })
};

exports.down = function(knex) {

};

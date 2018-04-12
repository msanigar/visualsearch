
import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import { ProductFetcher } from './ProductFetcher';
var winston = require('winston');

export const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    attribute_set_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    base_video_url: {
      description: 'enter your description',
      type: GraphQLString,
    },
    bss_weight: {
      description: 'enter your description',
      type: GraphQLString,
    },
    care_details: {
      description: 'enter your description',
      type: GraphQLString,
    },
    celebstyle: {
      description: 'enter your description',
      type: GraphQLString,
    },
    colour: {
      description: 'enter your description',
      type: GraphQLString,
    },
    cost: {
      description: 'enter your description',
      type: GraphQLString,
    },
    country_of_manufacture: {
      description: 'enter your description',
      type: GraphQLString,
    },
    custom_design: {
      description: 'enter your description',
      type: GraphQLString,
    },
    custom_design_from: {
      description: 'enter your description',
      type: GraphQLString,
    },
    custom_design_to: {
      description: 'enter your description',
      type: GraphQLString,
    },
    custom_layout_update: {
      description: 'enter your description',
      type: GraphQLString,
    },
    description: {
      description: 'enter your description',
      type: GraphQLString,
    },
    dest_restriction_country: {
      description: 'enter your description',
      type: GraphQLString,
    },
    dest_restriction_enabled: {
      description: 'enter your description',
      type: GraphQLString,
    },
    entity_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    fabric_content: {
      description: 'enter your description',
      type: GraphQLString,
    },
    fashionmodel: {
      description: 'enter your description',
      type: GraphQLString,
    },
    filter_colour: {
      description: 'enter your description',
      type: GraphQLString,
    },
    gender: {
      description: 'enter your description',
      type: GraphQLString,
    },
    gift_message_available: {
      description: 'enter your description',
      type: GraphQLString,
    },
    gift_wrapping_available: {
      description: 'enter your description',
      type: GraphQLString,
    },
    gift_wrapping_price: {
      description: 'enter your description',
      type: GraphQLString,
    },
    harmonised_code: {
      description: 'enter your description',
      type: GraphQLString,
    },
    image_url: {
      description: 'url of the first image in the image set for the product',
      type: GraphQLString,
      args: {
        width: {
          type: GraphQLInt,
        },
        height: {
          type: GraphQLInt,
        },
      },
      resolve: (obj, {width, height}) => {
        return ProductFetcher.getImageURLStringForStyle(obj.style_number, width, height);
      },
    },
    images_url: {
      description: 'get the first 4 image urls ',
      type: GraphQLString,
      resolve: (obj) => {
        return ProductFetcher.getImageURLStringsForStyle(obj.style_number);
      },
    },
    is_imported: {
      description: 'enter your description',
      type: GraphQLString,
    },
    is_returnable: {
      description: 'enter your description',
      type: GraphQLString,
    },
    is_translated: {
      description: 'enter your description',
      type: GraphQLString,
    },
    manufacturer: {
      description: 'enter your description',
      type: GraphQLString,
    },
    meta_description: {
      description: 'enter your description',
      type: GraphQLString,
    },
    meta_keyword: {
      description: 'enter your description',
      type: GraphQLString,
    },
    meta_title: {
      description: 'enter your description',
      type: GraphQLString,
    },
    msrp: {
      description: 'enter your description',
      type: GraphQLString,
    },
    msrp_display_actual_price_type: {
      description: 'enter your description',
      type: GraphQLString,
    },
    msrp_enabled: {
      description: 'enter your description',
      type: GraphQLString,
    },
    name: {
      description: 'enter your description',
      type: GraphQLString,
      resolve: (obj) => {
        return obj.name;
      },
    },
    news_from_date: {
      description: 'enter your description',
      type: GraphQLString,
    },
    news_to_date: {
      description: 'enter your description',
      type: GraphQLString,
    },
    options_container: {
      description: 'enter your description',
      type: GraphQLString,
    },
    oscommerce_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    package_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    page_layout: {
      description: 'enter your description',
      type: GraphQLString,
    },
    pictured_size: {
      description: 'enter your description',
      type: GraphQLString,
    },
    price: {
      description: 'enter your description',
      type: GraphQLString,
    },
    product_type: {
      description: 'enter your description',
      type: GraphQLString,
    },
    product_watchers: {
      description: 'enter your description',
      type: GraphQLString,
    },
    productstyle: {
      description: 'enter your description',
      type: GraphQLString,
    },
    ready_for_translation: {
      description: 'enter your description',
      type: GraphQLString,
    },
    season: {
      description: 'enter your description',
      type: GraphQLString,
    },
    secondary_small_image: {
      description: 'enter your description',
      type: GraphQLString,
    },
    ship_depth: {
      description: 'enter your description',
      type: GraphQLString,
    },
    ship_height: {
      description: 'enter your description',
      type: GraphQLString,
    },
    ship_width: {
      description: 'enter your description',
      type: GraphQLString,
    },
    shoe_size: {
      description: 'enter your description',
      type: GraphQLString,
    },
    short_description: {
      description: 'enter your description',
      type: GraphQLString,
    },
    sku: {
      description: 'enter your description',
      type: GraphQLString,
    },
    special_from_date: {
      description: 'enter your description',
      type: GraphQLString,
    },
    special_price: {
      description: 'enter your description',
      type: GraphQLString,
    },
    special_to_date: {
      description: 'enter your description',
      type: GraphQLString,
    },
    specification: {
      description: 'enter your description',
      type: GraphQLString,
    },
    status: {
      description: 'enter your description',
      type: GraphQLString,
    },
    stock_location: {
      description: 'enter your description',
      type: GraphQLString,
    },
    style_number: {
      description: 'enter your description',
      type: GraphQLString,
    },
    tag_line: {
      description: 'enter your description',
      type: GraphQLString,
    },
    tax_class_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    type_id: {
      description: 'enter your description',
      type: GraphQLString,
    },
    url_key: {
      description: 'enter your description',
      type: GraphQLString,
    },
    visibility: {
      description: 'enter your description',
      type: GraphQLString,
    },
    weight: {
      description: 'enter your description',
      type: GraphQLString,
    }
  })
})

export const ProductBySKUQuery = {
  type: ProductType,
  args: {
    sku: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (obj, {sku}) => {
    return ProductFetcher.getProductBySKU(sku);
  },
};

export const ProductsByPageQuery = {
  type: new GraphQLList(ProductType),
  args: {
    page: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    limit: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: (obj, {page, limit}) => {
    return ProductFetcher.getProductsByPage(page, limit);
  },
};

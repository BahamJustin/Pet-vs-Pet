const { Post } = require("../models");

const postSeed = [{
    title: 'Donec posuere metus vitae ipsum.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    img: 'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://nasa.gov/donec.json',
    img: 'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    img: 'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
    user_id: 1
  }];

const seedPosts = () => Post.bulkCreate(postSeed);

module.exports = seedPosts;
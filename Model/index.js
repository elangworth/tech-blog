
const User = require('./user');
const Article = require('./article');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});
Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});
module.exports = { User, Article };
// Require our models -- these should register the model into mongoose
// so the rest of the application can simply call mongoose.model('User')
// anywhere the User model needs to be used.
require('./user');
require('./blog');  // blog schema, separates posts into different blogs
require('./post');  // post schema, manages post types
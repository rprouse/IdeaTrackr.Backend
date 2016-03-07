
var table = require('azure-mobile-apps').table();

// table.read(function (context) {
//     return context.execute();
// });

// table.read.use(customMiddleware, table.operation);

// Configure specific code when the client does a request
// READ - only return records belonging to the authenticated user
table.read(function (context) {
   context.query.where({ userId: context.user.id });
   return context.execute();
 });
 
// CREATE - add or overwrite the userId based on the authenticated user
 table.insert(function (context) {
   context.item.userId = context.user.id;
   return context.execute();
 });
 
// UPDATE - for this scenario, we don't need to do anything - this is
// the default version
table.update(function (context) {
  return context.execute();
});
 
// DELETE - for this scenario, we don't need to do anything - this is
// the default version
table.delete(function (context) {
  return context.execute();
});
 
module.exports = table;

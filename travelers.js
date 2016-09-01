
module.exports = {
    create: createAdventurer,
};


function createAdventurer(name){
   let content = {
       name: name,
       food: 25,
   }
   return content;
}
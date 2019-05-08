const data = [{
  id: 1, name: 'John Doe', email: 'jod@mail.com'
},{
  id: 2, name: 'Jane Doe', email: 'jad@mail.com'
}];

function find(){
  return new Promise(resolve => resolve(data));
}

function findOne(id){
  return new Promise(resolve => {
    const found = data.find(user => user.id === parseInt(id));
    resolve(found);
  });
}

function create(user){
  return new Promise(resolve => {
    const newUser = Object.assign({}, user, {id: data.length + 1})
    data.push(newUser);
    resolve(newUser);
  });
}

module.exports = {find, findOne, create};
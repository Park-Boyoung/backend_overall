const obj1 = {
  name: 'tetz',
};
const obj2 = {
  name: 'tetz',
};

const json1 = JSON.stringify(obj1);
const json2 = JSON.stringify(obj2);

console.log(json1 === json2);

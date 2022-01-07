const url = new URL(
  "http://127.0.0.1:3000/?id=myid&age=18"
);
let url1 = url.href
var arr = url1.split("?")
console.log(arr);

var newArr = arr[1].split("&")
console.log(newArr);

const obj = {}
for(let i = 0; i < newArr.length; i++){
  let cont = newArr[i].split("=")
  let key = cont[0]
  let value = cont[1]
  obj[key] = value
}
console.log(obj);
console.log(`姓名：${obj.id},年龄：${obj.age}`);
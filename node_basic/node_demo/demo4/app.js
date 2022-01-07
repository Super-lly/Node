// 引入mongodb
const { MongoClient } = require('mongodb')
// 定义数据库连接的地址
const url = 'mongodb://127.0.0.1:27017'
// 定义要操作的数据库
const dbName = 'test'
// 实例化MongoClient 传入数据库连接地址
const clinet = new MongoClient(url, { useUnifiedTopology: true })
// 连接数据库
clinet.connect((err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log("数据库连接成功");
  let db = clinet.db(dbName)
  // 查找数据
  db.collection('test').find({}).toArray((err, data) => {
    console.log(data);
    // 操作数据库完毕后关闭数据库连接
    clinet.close()
  })

})
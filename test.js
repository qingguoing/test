//闭包包装实例：
const SingletonP = (function() {
  let instance
  return class Singleton {

    constructor(name) {
      if (instance) {
        return instance
      } else {
        this.init(name)
        instance = this
        return this
      }
    }

    init(name) {
      this.name = name
      console.log('已初始化')
    }
  }
})()

const instanceA = new SingletonP('seven1')
const instanceB = new SingletonP('seven2')
// ES5 iife
var SingletonTester = (function () {
    function Singleton(args) {
        var args = args || {};
        //设置name参数
        this.name = 'SingletonTester';
    }
    //实例容器
    var instance;
    return {
        name: 'SingletonTester',
        getInstance: function (args) {
            if (instance === undefined) {
                instance = new Singleton(args);
            }
            return instance;
        }
    };
})();

var singletonTest = SingletonTester.getInstance({ pointX: 5 });
console.log(singletonTest.pointX); // 输出 5 
// 构造函数的属性
function Universe() {
    if (typeof Universe.instance === 'object') {
        return Universe.instance;
    }
    this.start_time = 0;
    this.bang = "Big";
    Universe.instance = this;
}
// 测试
var uni = new Universe();
var uni2 = new Universe();
console.log(uni === uni2); // true
// 重写构造函数
function Universe() {
    var instance = this;
    // 其它内容
    this.start_time = 0;
    this.bang = "Big";
    // 重写构造函数
    Universe = function () {
        return instance;
    };
}
// 测试
var uni = new Universe();
var uni2 = new Universe();
uni.bang = "123";
console.log(uni === uni2); // true
console.log(uni2.bang); // 123

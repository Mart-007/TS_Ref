var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("\n        User created! \n\n        Name: " + this.name + " \n        Email: " + this.email + " \n        Age: " + this.age);
    }
    User.prototype.register = function () {
        console.log(this.name + " is now registered!");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice!");
    };
    return User;
}());
var Members = /** @class */ (function (_super) {
    __extends(Members, _super);
    function Members(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Members.prototype.payIinvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Members;
}(User));
// let Kei = new User("Keimoto", "keimoto@gmail.com", 22);
// Kei.register();
var Kei = new Members(1, "KeiKeishi", "keimoto@gmail", 100);
Kei.payInvoice();

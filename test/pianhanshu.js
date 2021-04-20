function Foo() {
    getName = function () {
        alert(1);
    };
    return this;
}
var getName;
function getName() {
    alert(5);
}
Foo.getName = function () {
    alert(2);
};
Foo.prototype.getName = function () {
    alert(3);
};
getName = function () {
    alert(4)
};
getName();
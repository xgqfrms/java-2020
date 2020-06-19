// 找出 Int 数组平衡点
/**
 * 整形数组平衡点问题：平衡点指左边的整数和等于右边的整数和，
 * 求出平衡点位置，要求输入的数组可能是GB级
 *
 * 要求找出整型数组的一个平衡点（如果要找出所有平衡点的话，按此方法需要把每一个平衡点都存起来）
 */
var log = console.log;
// 'public' modifier cannot appear on a module or namespace element.ts
// public class IntArrayBalancePoint {
var IntArrayBalancePoint = /** @class */ (function () {
    function IntArrayBalancePoint(args) {
        log("args", args);
        // const a: Object = [- 7 , 1, 5, 2, -5, 1];
        // const b: Object = [2, 3, 4, 2, 4];
        // const c: Object = [2, 3, 4, 3, 2];
        // const a: Number[] = [- 7 , 1, 5, 2, -5, 1];
        // const b: Number[] = [2, 3, 4, 2, 4];
        // const c: Number[] = [2, 3, 4, 3, 2];
        // interface Number
        // An object that represents a number of any kind.
        // All JavaScript numbers are 64-bit floating-point numbers.
        // const a: number[] = [- 7 , 1, 5, 2, -5, 1];
        // const b: number[] = [2, 3, 4, 2, 4];
        // const c: number[] = [2, 3, 4, 3, 2];
        // const t = new IntArrayBalancePoint([]);
        // log(t.findBalancePoint(a));
        // log(t.findBalancePoint(b));
        // log(t.findBalancePoint(c));
    }
    IntArrayBalancePoint.prototype.findBalancePoint = function (a) {
        // findBalancePoint(a: number[]) {
        var len = a.length || 0;
        if (a === null) {
            return -1;
        }
        var sum = 0;
        var subSum = 0;
        for (var i = 0; i < len; i++) {
            sum += a[i];
        }
        for (var i = 0; i < len; i++) {
            if (subSum === sum - subSum - a[i]) {
                // log(a[i]);
                return a[i];
            }
            else {
                subSum += a[i];
            }
        }
        return -1;
    };
    return IntArrayBalancePoint;
}());
var a = [-7, 1, 5, 2, -5, 1];
var b = [2, 3, 4, 2, 4];
var c = [2, 3, 4, 3, 2];
var t = new IntArrayBalancePoint([]);
log(t.findBalancePoint(a));
log(t.findBalancePoint(b));
log(t.findBalancePoint(c));

package find_Int_array_balance_point;

// 找出 Int 数组平衡点

/**
 * 整形数组平衡点问题：平衡点指左边的整数和等于右边的整数和，
 * 求出平衡点位置，要求输入的数组可能是GB级
 *
 * 要求找出整型数组的一个平衡点（如果要找出所有平衡点的话，按此方法需要把每一个平衡点都存起来）
 */

public class IntArrayBalancePoint {
  public static void main(String[] args) {
    int[] a = { - 7 , 1, 5, 2, -5, 1};
    int[] b = {2, 3, 4, 2, 4};
    int[] c = {2, 3, 4, 3, 2};
    IntArrayBalancePoint t = new IntArrayBalancePoint();
    System.out.println(t.findBalancePoint(a));
    System.out.println(t.findBalancePoint(b));
    System.out.println(t.findBalancePoint(c));
    // t.findBalancePoint(a);
    // t.findBalancePoint(b);
    // t.findBalancePoint(c);
  }
  public int findBalancePoint(int[] a) {
    if (a == null) {
        return -1;
    }
    // 0l ???
    long sum = 0l;
    long subSum = 0l;
    for (int i = 0; i < a.length; i ++) {
        sum += a[i];
    }
    for (int i = 0; i < a.length; i ++) {
        if (subSum == sum - subSum - a[i]) {
            // System.out.println(a[i]);
            return a[i];
        } else {
            subSum += a[i];
        }
    }
    return -1;
  }
}

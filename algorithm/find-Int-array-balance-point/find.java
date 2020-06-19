public static void main(String[] args) {
  int[] a = { - 7 , 1, 5, 2, -5, 1} ;
  int[] b = {2, 3, 4, 2, 4} ;
  int[] c = {2, 3, 4, 3, 2} ;
  Test t = new Test();
  System.out.println(t.findBalancePoint(a));
  System.out.println(t.findBalancePoint(b));
  System.out.println(t.findBalancePoint(c));
  // t.findBalancePoint(a);
  // t.findBalancePoint(b);
  // t.findBalancePoint(c);
}

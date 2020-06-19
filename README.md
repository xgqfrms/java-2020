# java-2020

## cli

```sh
# version
$ javac --version
# javac 11.0.2


# .java to .class
$ java Main.java

```

## debug

```sh
/Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home/bin/java -agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:62512 -Dfile.encoding=UTF-8 -cp "/Users/xgqfrms-mbp/Library/Application Support/Code/User/workspaceStorage/7f7a497e30ee1478e2f1f6422fe17e7b/redhat.java/jdt_ws/java-2020_6169ed15/bin" Main


cd /Users/xgqfrms-mbp/Documents/GitHub/java-2020 ; /Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home/bin/java -agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:62623 -Dfile.encoding=UTF-8 -cp "/Users/xgqfrms-mbp/Library/Application Support/Code/User/workspaceStorage/7f7a497e30ee1478e2f1f6422fe17e7b/redhat.java/jdt_ws/java-2020_6169ed15/bin" Main
Hello world!

```

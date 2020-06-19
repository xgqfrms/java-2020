# java-2020

## cli

```sh
# version
$ javac --version
# javac 11.0.2


# .java to .class
$ java Main.java

# execute class
$ java Main

```

## debug

```sh
/Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home/bin/java -agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:62512 -Dfile.encoding=UTF-8 -cp "/Users/xgqfrms-mbp/Library/Application Support/Code/User/workspaceStorage/7f7a497e30ee1478e2f1f6422fe17e7b/redhat.java/jdt_ws/java-2020_6169ed15/bin" Main


cd /Users/xgqfrms-mbp/Documents/GitHub/java-2020 ; /Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home/bin/java -agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:62623 -Dfile.encoding=UTF-8 -cp "/Users/xgqfrms-mbp/Library/Application Support/Code/User/workspaceStorage/7f7a497e30ee1478e2f1f6422fe17e7b/redhat.java/jdt_ws/java-2020_6169ed15/bin" Main
Hello world!

```


## java path name bug

```sh
# ok
algorithm/find_Int_array_balance_point/IntArrayBalancePoint.java

# error
algorithm/find-Int-array-balance-point/IntArrayBalancePoint.java

```


## java package name


```java
// package === path folder name
package find_Int_array_balance_point;

```

```java
// default package === root path ???

```

## classpath of project bug

```sh
# Main.java is not on the classpath of project java-2020_6169ed15, only syntax errors are reportedJava

$ cat ./src/Main.java

```


/Users/xgqfrms-mbp/Library/Application Support/Code/User/workspaceStorage/7f7a497e30ee1478e2f1f6422fe17e7b/redhat.java/jdt_ws/java-2020_6169ed15/.classpath

```xml
<?xml version="1.0" encoding="UTF-8"?>
<classpath>
	<classpathentry kind="con" path="org.eclipse.jdt.launching.JRE_CONTAINER"/>
	<classpathentry kind="src" path="_/algorithm"/>
	<classpathentry kind="output" path="bin"/>
</classpath>

```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<classpath>
	<classpathentry kind="con" path="org.eclipse.jdt.launching.JRE_CONTAINER"/>
	<classpathentry kind="src" path="_/src"/>
	<classpathentry kind="output" path="bin"/>
</classpath>

```

IntArrayBalancePoint.java is not on the classpath of project java-2020_6169ed15, only syntax errors are reportedJava(32)


The declared package "find_Int_array_balance_point" does not match the expected package "algorithm.find_Int_array_balance_point"Java(536871240)

```sh
# package name === path folder names

# algorithm/find_Int_array_balance_point
package algorithm.find_Int_array_balance_point;

# find_Int_array_balance_point
package find_Int_array_balance_point;

```

# Setup Golang in Windows
* watch Youtube video
- [how to setup Golang](https://www.youtube.com/watch?v=1MXIGYrMk80)

## 1. what to install 
* vscode 
* Golang
* golang extension
* go mod init 

## 2. HelloWorld
* The first application: HelloWorld
* create a folder named HelloWorld
- in vscode, right click and create folder 
 - new folder 
  - named as HelloWorld
* create file main.go 
- under HelloWorld folder, create a file named as main.go 
- -- main.go --

```golang

package main
import "fmt"

func main() {
	fmt.Println("Hello, World")
}


```


* run the application 
- run it directly 

```cmd
 > cd HelloWorld

 > go run main.go 

```
- compile and run 

```cmd
 > go build

 > ./HelloWorld.exe 
```
## 3. call another function
* go application start from main() function 
* main() function could call another functions
* comment started with //, for programmer only, go ignore codes behind //
## 3.1 printMsg() function
* printMsg() function receives a string, and print it out to the console
* -- printMsg() --

```go
func printMsg(msg string){
 fmt.Println(msg)
}
```
* modify main.go as below
* -- main.go --

```golang

package main
import "fmt"

// main function, started point of go
func main() {
  // print out directly
	fmt.Println("Hello, World")

  // call printMsg() to print out 
  printMsg("Hello, World")

  // define a variable to store a string
  var str = "Hello, Gavin & Dylan"

  // pass the variable to printMsg()
  printMsg(str)

}

// print out a string 
func printMsg(msg string){
 fmt.Println(msg)
}

```

* run it again 

```cmd
 > go build 
 > ./HelloWorld.exe 
```

## 3.2 get current time 
* get current system time 
* import time package
* currentTime = time.Now(), get the time 
* getTime() function
-- getTime() --

```go
func getTime() string{
  var currentTime = time.Now()
  return currentTime
```

* modify main.go as below
-- main.go --

```go
package main

import (
	"fmt"
	"time"
)

// main function, started point of go
func main() {
  // print out directly
	fmt.Println("Hello, World -- directly")

  // call printMsg() to print out 
  printMsg("Hello, World -- call function")

  // define a variable to store a string
  var str = "Hello, Gavin & Dylan -- call function -- "

	//get current time and set in str2 variable
  var str2 = getCurrentTime()
  // pass the variable to printMsg(), print out string with timestamp
  printMsg(str + str2)

}

// print out a string 
func printMsg(msg string){
 fmt.Println(msg)
}

//get current time
func getCurrentTime() string{
	var currentTime = time.Now()
 	return currentTime.Format("2006-01-02 15:04:05")
}
```

## 4. calculator
* a calculator to add two numbers, or subtract, or multiply, or divide
* create a folder named as calc
* create main.go in the folder
* -- main.go --

```go
package main

import (
	"fmt"	
)

func main() {
	fmt.Println("Go calculator")
	cmd := readLine("Enter command: [a]dd, [s]ubtract, [m]ultiply, [d]ivide: ")
	fmt.Println(cmd)
}
```
* [how to create a simple calculator](https://www.youtube.com/watch?v=-GoCCBWGHhs)

* add more functions: add, subtract, multiply, divide
* scan user input two numbers 
* final main.go

```go
package main

import (
	"fmt"	
	"strconv"
)


func main() {
	fmt.Println("Go calculator")
	cmd := readLine("Enter command: [a]dd, [s]ubtract, [m]ultiply, [d]ivide: ")
	fmt.Println(cmd)
	if cmd == "a" {
		num1, num2 := getUserNumbers()
		result := num1 + num2
		sResult := fmt.Sprintf("%d", result )
		fmt.Println(sResult)
		
		} else if cmd == "s" {
		num1, num2 := getUserNumbers()
		result := num1 - num2
		sResult := fmt.Sprintf("%d", result )
		fmt.Println(sResult)
		} else if cmd == "m" {
		num1, num2 := getUserNumbers()
		result := num1 * num2
		sResult := fmt.Sprintf("%d", result )
		fmt.Println(sResult)
		} else if cmd == "d" {
		num1, num2 := getUserNumbers()
		result := float32(num1) / float32(num2)
		sResult := fmt.Sprintf("%f", result )
		fmt.Println(sResult)
	} else {
		fmt.Println("Invalid command")
	}
}
func readLine(message string) string{
	fmt.Print(message)
  var input string
	fmt.Scanln(&input)
	return input
}

func getUserNumbers() (int, int) {
	num1String := readLine("Enter first number: ")
  num1 ,err := strconv.Atoi(num1String)
	if err != nil {
		fmt.Println(err)
	}
	num2String := readLine("Enter second number: ")
  num2 ,err := strconv.Atoi(num2String)
	if err != nil {
		fmt.Println(err)
	}

	return num1, num2

}

```
* run it

```cmd
 > go build
 > ./calc.exe
```
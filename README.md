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
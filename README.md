# Python Programming

## 1. install vscode
* download from 
 https://code.visualstudio.com/Download#
* double click to install 

## 2. install Python
* download from 
 [https://www.python.org/ftp/python/3.11.0/python-3.11.0b5-amd64.exe]
+ tick "Add to Path"

* in vscode
-> Extension, search python and install

## 3. Python print()
* run in shell 
+ check version 
> python --version
+ if not working, goto settings -> Manage App execution aliases -> Python -> Off 
+ start python shell 
```python
> python 
>>> print("Hello world!")
>>> print( 4 + 5 )
>>> exit() 
```

* python script
+ create a file, hello.py
```python
print("Hello world!")
print(4 + 5)
```
+ run the script 
> python .\hello.py

## 4. MIT Python 6.0001 LECTURE 1
* what is computation
+ WHAT DOES A COMPUTER DO
- Fundamentally:
1. performs calculations
   a billion calculations per second!
2. remembers results
   100s of gigabytes of storage!
- What kinds of calculations?
1. built-in to the language
2.  ones that you define as the programmer
- computers only know what you tell them

+ TYPES OF KNOWLEDGE
- declarative knowledge is statements of fact. 
. someone will win a Google 
Cardboard before class ends
- imperative knowledge is a recipe or “how-to”. 
1) Students sign up for raffle
2) Ana opens her IDE
3) Ana chooses a random number between 1st and nth responder
4) Ana finds the number in the responders sheet. Winner!

+ A NUMERICAL EXAMPLE
- square root of a number x is y such that y*y = x
- recipe for deducing square root of a number x (16)
1) Start with a guess, g
2) If g*g is close enough to x, stop and say g is the answer 
3) Otherwise make a new guess by averaging g and x/g
4) Using the new guess, repeat process until close enough

g      g*g      x/g    (g+x/g)/2
3      9        16/3   4.17
4.17   17.36    3.837  4.0035
4.0035 16.0277  3.997  4.000002

+ WHAT IS A RECIPE
1) sequence of simple steps
2) flow of control process that specifies when each step is executed
3) a means of determining when to stop

1+2+3 = an algorithm!

+ COMPUTERS ARE MACHINES
- how to capture a recipe in a mechanical process
- fixed program computer
. calculator
- stored program computer
. machine stores and executes instructions

+ BASIC MACHINE ARCHITECTURE
          MEMORY
CONTROL            ARITHMETIC 
UNIT               LOGIC UNIT

      INPUT       OUTPUT

+ STORED PROGRAM COMPUTER
- sequence of instructions stored inside computer
. built from predefined set of primitive instructions
1) arithmetic and logic
2) simple tests
3) moving data
- special program (interpreter) executes each instruction in order
. use tests to change flow of control through sequence
. stop when done

+ BASIC PRIMITIVES
- Turing showed that you can compute anything using 6 
primitives
- modern programming languages have more 
convenient set of primitives
- can abstract methods to create new primitives
- anything computable in one language is computable in 
any other programming language

+ CREATING RECIPES
- a programming language provides a set of primitive 
operations
- expressions are complex but legal combinations of 
primitives in a programming language
- expressions and computations have values and 
meanings in a programming language

+ ASPECTS OF LANGUAGES
- primitive constructs
. English: words
. programming language: numbers, strings, simple 
operators

+ ASPECTS OF LANGUAGES
- syntax
. English: "cat dog boy" -- not syntactically valid
"cat hugs boy" -- syntactically valid
. programming language: "hi"5 -- not syntactically valid
3.2*5 -- syntactically valid

- static semantics is which syntactically valid strings have meaning
. English: "I are hungry" -- syntactically validbut static semantic error
. programming language: 3.2*5 -- syntactically valid
3+"hi" -- static semantic error

- semantics is the meaning associated with a 
syntactically correct string of symbols with no static semantic errors
. English: can have many meanings "Flying planes can be dangerous"
. programming languages: have only one meaning but may not be what programmer intended

WHERE THINGS GO WRONG
- syntactic errors
. common and easily caught
- static semantic errors
. some languages check for these before running program
. can cause unpredictable behavior
- no semantic errors but different meaning than what programmer intended
. program crashes, stops running
. program runs forever
. program gives an answer but different than expected


* PYTHON PROGRAMS
- a program is a sequence of definitions and commands
. definitions evaluated 
. commands executed by Python interpreter in a shell
- commands (statements) instruct interpreter to do 
something
- can be typed directly in a shell or stored in a file that 
is read into the shell and evaluated
. Problem Set 0 will introduce you to these in Anaconda

* OBJECTS
- programs manipulate data objects
- objects have a type that defines the kinds of things 
programs can do to them
. Ana is a human so she can walk, speak English, etc.
. Chewbacca is a wookie so he can walk, “mwaaarhrhh”, etc.
- objects are
. scalar (cannot be subdivided)
. non-scalar (have internal structure that can be accessed)

* SCALAR OBJECTS
- int – represent integers, ex. 5
- float – represent real numbers, ex. 3.27
- bool – represent Boolean values True and False
- NoneType – special and has one value, None
- can use type() to see the type of an object
>>> type(5)

int
>>> type(3.0)

float

* TYPE CONVERSIONS (CAST)
- can convert object of one type to another
- float(3) converts integer 3 to float 3.0
- int(3.9) truncates float 3.9 to integer 3

* PRINTING TO CONSOLE
- to show output from code to a user, use print command
In [11]: 3+2

Out[11]: 5

In [12]: print(3+2)

5

* EXPRESSIONS
- combine objects and operators to form expressions
- an expression has a value, which has a type
- syntax for a simple expression
object  operator   object

* OPERATORS ON ints and floats
- i+j -- the sum
- i-j -- the difference
- i*j -- the product
- i/j -- division
- i%j -- the remainder when i is divided by j
- i**j -- i to the power of j

* SIMPLE OPERATIONS
- parentheses used to tell Python to do these operations first
- operator precedence without parentheses
. **
. *
. /
. + and – executed left to right, as appear in expression

* BINDING VARIABLES AND VALUES
- equal sign is an assignment of a value to a variable name
pi = 3.14159
pi_approx = 22/7
- value stored in computer memory
- an assignment binds name to value
- retrieve value associated with name or variable by invoking the name, by typing pi

* ABSTRACTING EXPRESSIONS
- why give names to values of expressions?
- to reuse names instead of values
- easier to change code later
pi = 3.14159
radius = 2.2
area = pi*(radius**2)

* PROGRAMMING vs MATH
- in programming, you do not "solve for x"
```python
pi = 3.14159
radius = 2.2
# area of circle
area = pi*(radius**2)
radius = radius+1
```

* CHANGING BINDINGS
- can re-bind variable names using new assignment statements
- previous value may still stored in memory but lost the handle for it
- value for area does not change until you tell the computer to do the calculation again

pi --> 3.14
radius  2.2 --> 3.2
area --> 15.1976

pi = 3.14
radius = 2.2
area = pi*(radius**2)
radius = radius+1

* lec1.py, script file 

```Python
pi = 3.14159
radius = 2.2
# area of circle equation <- this is a comment
area = pi*(radius**2)
print(area)

# change values of radius <- another comment
# use comments to help others understand what you are doing in code
radius = radius + 1
print(area)     # area doesn't change
area = pi*(radius**2)
print(area)


#############################
#### COMMENTING LINES #######
#############################
# to comment MANY lines at a time, highlight all of them then CTRL+/
# do CTRL+/ again to uncomment them
# try it on the next few lines below!

#area = pi*(radius**2)
#print(area)
#radius = radius + 1
#area = pi*(radius**2)
#print(area)

#############################
#### AUTOCOMPLETE #######
#############################
# Tabnine can autocomplete names for you
# start typing a variable name defined in your program and hit tab 
# before you finish typing -- try it below

# define a variable
a_very_long_variable_name_dont_name_them_this_long_pls = 0

# below, start typing a_ve then hit tab... cool, right!
# use autocomplete to change the value of that variable to 1

# use autocomplete to write a line that prints the value of that long variable
# notice that Tabnine also automatically adds the closed parentheses for you!
```
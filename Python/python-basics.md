---
layout: default
title: Basic Python
parent: Python
nav_order: 1
---
## Basic Python
Python is an easy to learn high-level programming language that respects indentation to demarcate beginning and end of code blocks.

### Hello, World!
This is a simple program printing "Hello, World!"
```python
print("Hello, World!")
```
It can take optional parameters such as the following.
```python
print("Hello","how are you?", sep="--") # Hello--how are you?
print("Override the default linebreak end character.", end="")
print("Same line") #Override the default linebreak  end character.Same line
```

### Dynamic Typing
Python is a dynamic type language.  We can use the type() function to see the name of the type class.  And use the isinstance() function
to check if an object belongs to a class.
```python
a = 10
print(typeof(a)) # <class 'int'>
print(isinstance(a, int)) # True
a = 10.0
print(typeof(a)) # <class 'float'>
print(isinstance(a, float)) # True
a = 'abc'
print(typeof(a)) # <class 'str'>
print(isinstance(a, str)) # True
```

### Multiple Assignment
You can assign multiple variables on the same line!  But the number of variables must match the number of assignments.
```python
a, b, c = 10, "Hello", True
print(a,b,c) # 10 Hello True
x = y = z = 10
print(y) # 10
```

### Reading Input and Formatting Output with f-strings
There is a built-in function called input() that allows for console input from the user. Output is formatted using
f-strings, the newest way in python programming language.
```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```

### Concatenation of Strings
Python can concatenate strings using the '+' operator as well as using the join() function.
```python
var1 = "Hello"
var2 = "World!"
print(var1+var2) # HelloWorld!
result = " ".join([var1, var2])
print(result) # Hello World!
```

### Equality vs Identity
Values vs Reference.  Python can compare using equality with '==' or identity with 'is'.  The id() function will give
the relevant memory address of the variable.  In the following example, the two lists share the same memory address
reference, therefore, they are equal in terms of value, and identical in memory location.
```python
list_a = ["Grace", "Mary", "Anna"]
list_b = list_a
print(list_a == list_b) # True
print(list_a is list_b) # True
print(id(list_a) == id(list_b)) # True
```

### And Has Precedence Over Or
```python
False and False and True # True
True or False and False # True
```

### List
Lists are mutable and can contain items of different types (usually, they contain only 1 type).  They use zero-based
indexing to map against the items within it.  Lists are defined with square brackets.
```python
letters = ["a", "b", "c", "d"]

print(letters[1]) # b
print(letters[-1]) # d
print(letters[0]) # a
print(letters[1:]) # ['b', 'c', 'd']
print(letters[1:3]) # ['b','c']

# Traverse a list
for letter in letters:
    print(letter, end="..") # a..b..c..d..

if "b" in letters:
    print("b is in letters") # b is in letters

# Lists can be concatenated and multiplied
print([1,2,3] + [4,5,6]) # 1,2,3,4,5,6
print(letters * 4) # ['a','b','c','d','a','b','c','d','a','b','c','d','a','b','c','d']

# Add to a list
lst = [1,2]
lst.append(3)
print(lst)
```

### Remove an Item From a List
You can remove items from a list using a these methods if you know the index: pop(), del()
If you know the value of what you want to remove, try: remove()
```python
letters = ["a", "b", "c", "d"]
letters.pop(2) # the pop() function returns the element removed
print(letters) # ['a','b','d']
letters.pop()
print(letters) # ['a','b']

letters = ["a", "b", "c", "d"]
del letters[2] 
print(letters) # ['a','b','d']

letters = ["a", "b", "c", "d"]
letters.remove("d")
print(letters) # ['a','b','c']
```

### Tuple
Tuples are immutable (contents cannot be modified) but are hashable and comparable.  They use zero-based indexing and the values can be of any type. Note that tuples are defined with parenthesis (round brackets).
```python
t = (1, 2, 3)
```

### Range
The range() function is very useful to make a list of numbers that can be stepped.  For example, you can make a list from 1 to 100 that only contain odd numbers.
```python
for x in range(1, 100, 2): print(x, end=", ")
```

### String Literals
String literals can be in single/double/triple quotes.  With triple quotes, you can have multi-line output.
```python
print('''
Hello
World!''')
# Hello
# World!
```

### Dictionaries
Dictionaries contain key:value pairs (an item in python terms) where the key can be of (almost) any type, unlike lists with their zero-based index.
They are defined with curly braces.
```python
dict = {'Name':'John', 'age':20, 'occupation':'carpenter'}
print(dict['age']) # 20
del dict['Name'] # remove entry with key 'Name'
dict.clear() # clear the entire dictionary

dict = {'Name':'John', 'age':20, 'occupation':'carpenter'}
print(len(dict)) # 3
print('age' not in dict) # False

# Update key-value pair
dict.update({'age':25}) # Method 1
dict['age'] = 30 # Method 2

# Looping dictionary keys
for x in dict:
    print(x, "is", dict[x])

# Looping dictionary values
for value in dict.values():
    print(value)

# Looping dictionary key, values
for x, y in dict.items():
    print(x, y)

# Sort dictionary keys in alphabetical order
sorted = sorted(dict.keys())
```

# continued with module 3
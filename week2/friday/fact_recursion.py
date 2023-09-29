#write a program to calculate the factorial( using Recursion)
number=int(input("enter the number:"))
def factorial(number):
    if(number==1):
        return number
    else:
        return number*factorial(number-1)
print(factorial(number))
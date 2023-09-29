#Write a program to generate fibonacci series(using Recursion)
number=int(input("enter the number:"))
def fibnocci(number):
    if(number<=1):
        return number
    else:
        return (fibnocci(number-1)+(fibnocci(number-2)))
for i in range(number):
    print(fibnocci(i))
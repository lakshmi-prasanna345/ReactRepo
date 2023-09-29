#sum of natural numbers using recursion
number=int(input("enter the number:"))
def natural(number):
    if(number<=1):
        return number
    else:
        return number+natural(number-1)
print(natural(number))
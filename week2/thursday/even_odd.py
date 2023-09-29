number=int(input("enter the number:"))
even=[]
odd=[]
for i in range(number):
    if(i%2==0):
        even.append(i)
    else:
        odd.append(i)
print(even)
print(odd)

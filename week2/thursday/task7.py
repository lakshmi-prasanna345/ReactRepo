li1=[]
even=[]
odd=[]
for i in range(int(input("enter no. of elements:"))):
    ele=int(input(f"enter the element {i}:"))
    li1.append(ele)
print(li1)
for i in range(len(li1)):
    if(i%2==0):
        even.append(li1[i])
    else:
        odd.append(li1[i])
print(f"even:{even}\nodd:{odd}")
    
    
    

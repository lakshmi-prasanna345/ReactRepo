n=int(input("enter the no.of elements inthe list:"))
li=[]
sq=[]
for i in range(n):
    ele=int(input("enter the elements:"))
    li.append(ele)
print(li)
for i in range(n):
    if(li[i]%2==0):
        sq.append(li[i]*li[i])
print(sq)
            
       

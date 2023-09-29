li=[1,6,2,7,8,35]
range1=int(input("enter the range:"))
#push
for i in range(range1):
    ele=int(input("enter the number:"))
    li.insert(0,ele)
print(li)
#pop using index
li.pop(0)
print(li)


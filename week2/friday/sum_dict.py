#find sum of all values in a dictonary
num=int(input("enter the number of elements:"))
dict1={}
for i in range(num):
    ele=int(input("enter the number:"))
    dict1[i]=ele
print(dict1)
sum1=0
for i in dict1:
    sum1=sum1+dict1[i]
print(sum1)
#min max
print(max(dict1.items()))
print(min(dict1.items()))
#sort()
print(dict1.keys().sort())
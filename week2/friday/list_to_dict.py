#converting 2 lists to dictonary
keys=['ten','twenty','thirty']
values=[10,20,30]
dict1={}
for i in range(len(keys)):
    dict1[keys[i]]=values[i]
print(dict1)
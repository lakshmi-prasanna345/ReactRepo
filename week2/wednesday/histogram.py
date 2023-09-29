n=int(input("enter the no.of elements in a list:"))
histogram=[]
for i in range(n):
    ele=int(input("enter the value of the ele:"))
    histogram.append(ele)
print(histogram)
for i in histogram:
    #for j in range(i):
    print(i*"#")
    #print()


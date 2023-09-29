marks=int(input("enter the marks:"))
if(marks>=90 and marks<=100):
    print("grade A")
elif(marks>=80 and marks<90):
    print("grade b")
elif(marks>=70 and marks<80):
    print("grade c")
elif(marks<70):
    print("grade f")
else:
    print("enter the valid marks upto 100")

li=[]
while True:
    try:
        num = input("Enter a number:")
        if num == 'done':
            break;
        n = int(num)
        li.append(n)
    except:
        print("Invalid input")
        exit()
print("Maximum number is ", max(li))
print ("Minimum number is ", min(li))


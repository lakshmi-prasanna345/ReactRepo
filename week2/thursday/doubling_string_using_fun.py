def doubling_string():
    string="hello"
    li=[]
    for i in range(len(string)):
        li.append(string[i]+string[i])
    print("".join(li))
doubling_string()

    

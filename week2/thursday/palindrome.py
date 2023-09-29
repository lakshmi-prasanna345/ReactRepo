number=int(input("enter the number:"))
rev_number=0
temp = number
while(number>0):
    rev_number=rev_number*10+number%10
    number=number//10
print(rev_number,temp)
if(rev_number==temp):
    print("palindrome")
else:
    print("not a palindrome")

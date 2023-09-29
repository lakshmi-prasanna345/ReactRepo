numbers = [1, 2, 3, 4, 5]

# Using a regular function with map
#def cube(x):
    #return x ** 3
#cubed_list = list(map(cube, numbers))
#print(cubed_list)  # Output: [1, 4, 9, 16, 25]

# Using a lambda function with map
#squared_list_lambda = list(map(lambda x: x ** 2, numbers))
#print(squared_list_lambda)  # Output: [1, 4, 9, 16, 25]
cubed_list=list(map(lambda x:x**3,numbers))
print(cubed_list)
dict1={}
for i in range(len(numbers)):
    dict1[numbers[i]]=cubed_list[i]
print(dict1)
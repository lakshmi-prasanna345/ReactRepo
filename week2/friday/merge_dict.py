#merging 2 dictonaries
dict1={"ten":10,"twenty":20,"thirty":35}
dict2={"thirty":38,"fourty":40,"fifty":50}
dict2.update(dict1)
print(dict2)
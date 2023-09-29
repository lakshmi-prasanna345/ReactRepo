from itertools import combinations
li=['a','b','c','d','e']
res=[com for sub in range(len(li)) for com in combinations(li,sub+1)]
print(res)
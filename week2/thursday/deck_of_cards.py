import itertools,random
deck=list(itertools.product(range(1,11),['spade','heart','diamond','club']))
random.shuffle(deck)
for i in range(5):
    print(deck[i][0],deck[i][1])

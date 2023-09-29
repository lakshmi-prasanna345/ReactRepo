subjects = ["I", "You"]
verbs = ["Play", "Love"]
objects = ["Hockey", "Football"]

sentences = []

for subject in subjects:
    for verb in verbs:
        for obj in objects:
            sentences.append(subject+" "+verb+" "+obj)

for sentence in sentences:
    print(sentence)

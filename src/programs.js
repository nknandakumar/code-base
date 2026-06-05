const programs = [ 
    {
        id: 1,
        name: "",
        code: `
import random

distance_matrix = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]

def total_distance(path):
    total = 0
    for i in range(len(path) - 1):
        total += distance_matrix[path[i]][path[i + 1]]
    total += distance_matrix[path[-1]][path[0]]  # return to start
    return total

def hill_climbing_tsp(num_cities, max_iteration=10000):
    current_path = list(range(num_cities))
    current_distance = total_distance(current_path)
    for _ in range(max_iteration):
        neighbor_path = current_path.copy()
        i, j = random.sample(range(num_cities), 2)
        neighbor_path[i], neighbor_path[j] = neighbor_path[j], neighbor_path[i]
        neighbor_distance = total_distance(neighbor_path)

        if neighbor_distance < current_distance:
            current_path = neighbor_path
            current_distance = neighbor_distance
    return current_path

def main():
    num_cities = 4
    solution = hill_climbing_tsp(num_cities)
    print("Optimal Solution:", solution)
    print("Total Distance:", total_distance(solution))

if __name__ == "__main__":
    main()
        `
    },
    {
      id: 2,
      name: "",
      code: `
from collections import defaultdict

class graph:
    def __init__(self, vertices):
        self.V = vertices
        self.graph = defaultdict(list)

    def addEdge(self, u, v):
        self.graph[u].append(v)

    def DLS(self, src, target, maxDepth):
        if src == target: return True
        if maxDepth <= 0: return False

        for i in self.graph[src]:
            if(self.DLS(i, target, maxDepth - 1)):
                return True
        return False

    def IDDFS(self, src, target, maxDepth):
        for i in range(maxDepth):
            if(self.DLS(src, target, i)):
                return True
        return False

g = graph(7)
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(1, 4)
g.addEdge(2, 5)
g.addEdge(2, 6)

target = 6; maxDepth = 3; src = 0

if g.IDDFS(src, maxDepth, target) == True:
    print("Target is reachable from source within max depth")
else:
    print("Target is not reachable from source within max depth")
      `
    },
    {
      id: 3,
      name: "",
      code: `
def depthLimit_search(array, depthLimit):
    def dls_helper(arr, currentDepth):
        if currentDepth > depthLimit:
            return

        for element in arr:
            if isinstance(element, list):
                print(f"At depth {currentDepth}: encountered nested list, diving deeper...")
                dls_helper(element, currentDepth + 1)
            else:
                print(f"At depth {currentDepth}: processing element {element}")

    dls_helper(array, 0)

nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10, 11]]]]
depthLimit = 2

depthLimit_search(nestedArray, depthLimit)
      `
    },

    {
      id: 4,
      name: "",
      code: `
     def find_S_algorithm(examples):
    hypothesis = None 
    for features, label in examples:
        if label == 1:
            if hypothesis is None:
                hypothesis = features.copy()
            else:
                for i in range(len(hypothesis)):
                    if hypothesis[i] != features[i]:
                        hypothesis[i] = '?'
    return hypothesis   # <-- also moved return outside the loop

example = [
    (["sunny", "warm", "normal", "strong", "warm", "same"], 1),
    (["sunny", "warm", "high", "strong", "warm", "same"], 1),
    (["rainy", "cold", "high", "strong", "warm", "change"], 0), 
    (["sunny", "warm", "high", "strong", "cool", "change"], 1)
]

hypotheses = find_S_algorithm(example)
print("most specific hypothesis:", hypotheses)


      `
      },

      {id: 5,
      name: "",
      code: `
class Rule:
    def __init__(self, premises, conclusion):
        self.premises = premises
        self.conclusion = conclusion

rules = [
        Rule(["A"],"B"),        
        Rule(["B","C"],"D"),
        Rule(["D"],"E"),
        Rule(["F"],"C"),
    ]
def forword_chaining(kb,query):
    inferred = set()
    agenda = [query]
    while agenda:
        fact = agenda.pop(0)
        if fact not in inferred:
            inferred.add(fact)
            matching_rules = [rule for rule in kb if all(premise in inferred for premise in rule.premises)]
            for rule in matching_rules:
                agenda.append(rule.conclusion)
    return inferred

print("Forword Chaining")
print("inferred facts:", forword_chaining(rules, "A"))

      `},

      {id: 6,
      name: "",
      code: `
      class Rule:
    def __init__(self, premises, conclusion):
        self.premises = premises
        self.conclusion = conclusion

rules = [
    Rule(["A"], "B"),
    Rule(["B", "C"], "D"),
    Rule(["D"], "E"),
    Rule(["F"], "C"),
]

def backward_chaining(kb, query):
    inferred = set()

    def ask(fact):
        if fact in inferred:
            return True
        matching_rules = [rule for rule in kb if rule.conclusion == fact]
        for rule in matching_rules:
            if all(ask(premise) for premise in rule.premises):
                inferred.add(fact)
                return True
        return False   # <-- must be inside ask, not outside

    return ask(query)

print("Backward Chaining")
print("can prove E:", backward_chaining(rules, "A"))


      `},
      {
        id: 7,
        name: "",
        code: `
def chatbot_response(user_input):
    # Convert the input to lowercase to make the bot case-insensitive
    user_input = user_input.lower()
    
    # Simple keyword-based responses
    if "hello" in user_input or "hi" in user_input:
        return "Hello! How can I help you today?"
    elif "how are you" in user_input:
        return "I'm just a bot, but I'm here to help you! How can I assist you?"
    elif "name" in user_input:
        return "I am a chatbot created by OpenAI. What's your name?"
    elif "bye" in user_input or "goodbye" in user_input:
        return "Goodbye! Have a great day!"
    else:
        return "I'm sorry, I don't understand that. Can you rephrase?"

# Main loop to interact with the chatbot
print("Welcome to the simple chatbot. Type 'bye' to exit.")
while True:
    user_input = input("You: ")
    if user_input.lower() == "bye":
        print("Chatbot: Goodbye! Have a great day!")
        break
    response = chatbot_response(user_input)
    print("Chatbot:", response)
    
    

     ` },
    {
      id: 10,
      name: "",
      code: `
import numpy as np
import matplotlib as mpl
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt

def generate_dataset(n):
    x = []
    y = []
    random_x1 = np.random.rand()
    random_x2 = np.random.rand()
    for i in range(n):
        x1 = i
        x2 = i / 2 + np.random.rand() * n
        x.append([1, x1, x2])
        y.append(random_x1 * x1 + random_x2 * x2 + 1)
    return np.array(x), np.array(y)

# Generate dataset
x, y = generate_dataset(200)

# Plotting
mpl.rcParams['legend.fontsize'] = 12
fig = plt.figure()
ax = fig.add_subplot(projection='3d')
ax.scatter(x[:, 1], x[:, 2], y, label='y', s=5)
ax.legend()
ax.view_init(45, 0)
plt.show()
 `
    }

];
export default programs;

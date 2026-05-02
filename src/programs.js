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
      x <- c(10, 3, 5, 1, 9, 6)
x

quickSort <- function(arr) {
  mid <- sample(arr, 1)
  left <- c()
  right <- c()
  
  lapply(arr[arr != mid], function(d) {
    if (d < mid) {
      left <<- c(left, d)
    } else {
      right <<- c(right, d)
    }
  })
  
  if (length(left) > 1) {
    left <- quickSort(left)
  }
  if (length(right) > 1) {
    right <- quickSort(right)
  }
  
  c(left, mid, right)
}

RES <- quickSort(x)
RES

      `
      },

      {id: 5,
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
      `},

      {id: 7,
      name: "",
      code: `
      library(pracma)
library(psych)

# Create a 3x3 matrix
A <- matrix(
  c(6, 1, 1,
    4, -2, 5,
    2, 8, 7),
  nrow = 3,
  ncol = 3,
  byrow = TRUE
)

cat("The 3x3 matrix:\n")
print(A)

# Rank of matrix
cat("Rank of A:\n")
print(Rank(A))

# Trace of matrix A
cat("Trace of A:\n")
print(tr(A))

# Determinant of matrix A
cat("Determinant of A:\n")
print(det(A))

# Transpose of matrix A
cat("Transpose of A:\n")
print(t(A))

# Inverse of matrix A
cat("Inverse of A:\n")
print(inv(A))

      `},
    {
      id: 8,
      name: "",
      code: `
      
data("mtcars") # including data set



result = switch(x,
                
                "plot" = cat("Plot", plot(1, 3)),
                
                "histogram" = cat("Hist", hist(c(19, 23, 11, 5, 16, 21, 32, 14, 19,
                                                 27, 39, 120, 40, 70, 90), xlab = "No.of Articles ",
                                               col = "red", border = "black")),
                
                "line" = cat("Line", plot(c(1, 2, 3, 4, 5, 10), type = "l", col = "blue",
                                          main = "Line Chart", xlab = "X-axis", ylab = "Y-axis")),
                
                "pie" = cat("Pie", pie(c(10, 20, 30, 40),
                                       labels = c("Apples", "Bananas", "Cherries", "Dates"), main = "Fruits",
                                       col = c("blue", "yellow", "green", "orange"))),
                
                "scatter" = cat("Scatter", plot(mtcars$wt, mtcars$mpg,
                                                xlab = "Weight", ylab = "Mileage",
                                                xlim = c(1.5, 4), ylim = c(10, 25),
                                                main = "Weight vs Mileage")),
                
                "boxplot" = cat("Boxplot", boxplot(disp ~ gear, data = mtcars,
                                                   main = "Displacement by Gear",
                                                   xlab = "Gear", ylab = "Displacement"))
)

x = readline(prompt = "Enter graph type (plot/histogram/line/pie/scatter/boxplot): ")

      `
    },
    {
      id: 9,
      name: "",
      code: `
      installed.packages()

install.packages("dplyr")

library(dplyr)

# create a data frame

cricket <- data.frame(pname=c('S', 'V', 'D', 'R','A'),
                      
                      runs=c(5000, 5200, 4408, 3000,NA),
                      
                      wickets=c(17, 10, NA, 55,100),
                      
                      highestruns=c("yes","yes","yes","NA","NA"))

print("cricket Dataframe")

cricket

# fetch data in certain column

cricket["runs"]

cricket[2:3,c(1,2)]

cat("players - ")

cricket[1:3,1]

batsmens<-cricket[cricket$runs>100,]

batsmens

batsmens<-cricket[cricket$runs<300,]

batsmens

subset(x=cricket, subset=wickets>=15, select=c(pname,wickets))

cricket %>% filter(is.na(wickets))

cricket

cricket.pname<-arrange(cricket,wickets)

print(cricket.pname)

select(cricket,starts_with("run")) # column starts with run

select(cricket,-starts_with("run")) # column does not starts with run

select(cricket, 1:3)

select(cricket,contains("un")) # column includes the character "un"

cricket[3,2]<- 8000 # assigning new value to 3rd row , 2nd column

str(cricket) # structure of the data frame

      `
    }

];
export default programs;

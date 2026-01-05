const programs = [ 
    {
        id: 1,
        name: "",
        code: `
 def selection_sort(arr):
    for i in range(len(arr)):
        mid_idx = min(range(i,len(arr)), key=arr.__getitem__)
        arr[i],arr[mid_idx]= arr[mid_idx],arr[i]
        
arr = [-8,5,4,3,2,-1]
selection_sort(arr)
print("After Sorting : ",arr)




        `
    },
    {
      id: 2,
      name: "",
      code: `
     from itertools import permutations

def tsp(graph, start):

    return min(
        sum(graph[route[i]][route[i+1]]
        for i in range(len(route)-1)) + graph[route[-1]][route[0]]
        for route in permutations(range(len(graph)))
        if route[0] == start
    )
  

graph = [
    [0,10,35,20],
    [10,0,35,25],
    [15,25,0,30],
    [20,25,30,0]
]

print("Minimum Cost is =", tsp(graph, 0))
      
      `
    },
    {
      id: 3,
      name: "",
      code: `
    def knapsack(values,weight,capacity):
    ratio = sorted(zip(values,weight),key=lambda x:x[0]/x[1],reverse=True)
    total_value =0 
    
    for v,w in ratio:
        if capacity >=w:
            total_value+=v
            capacity -= w
        else:
            total_value += v*(capacity/w)
            break
    return total_value

values = [60,100,120]
weights = [10,20,30]
capacity = 50

print(knapsack(values, weights, capacity))
      `
    },

    {
      id: 4,
      name: "",
      code: `
 from collections import deque

def dfs(graph,start,visited=None,visited_order=None):
    if visited is None:
        visited = set()
        visited_order = []
    visited.add(start)
    visited_order.append(start)
    for neigbours in graph[start]:
        if neigbours not in visited:
            dfs(graph, neigbours,visited,visited_order)
    return visited_order

def bfs(graph,start):
    visited = set()
    queue = deque([start])
    visited_order = []
    while queue:
        vertex = queue.popleft()
        if vertex not in visited:
            visited.add(vertex)
            visited_order.append(vertex)
            queue.extend([neigbours for neigbours in graph[vertex] if neigbours not in visited ])
    return visited_order
            
graph = {
    'A':['B','C'],
    'B':['D','E'],
    'C':['F'],
    'D':[],
    'E':['F'],
    'F':[]
    }

dfs_result = dfs(graph, 'A')
bfs_result = bfs(graph,'A')

print(dfs_result)
print(bfs_result)



      `
      },

      {id: 5,
      name: "",
      code: `
     
def minmax(arr,low,high):
    if low == high:
        return arr[low],arr[high]
    elif high == low +1:
        return(min(arr[low],arr[high]),max(arr[low],arr[high]))
    mid = (low+high)//2
    min1,max1 = minmax(arr, low, mid)
    min2,max2 = minmax(arr, mid+1, high) 
    return min(min1,min2),max(max1,max2)

arr = [22,44,66,99,44,55,19]
min, max = minmax(arr, 0, len(arr)-1)

print("Minimum = ",min)
print("Maximum = ",max)

      `},
    {id: 6,
      name: "",
      code: `
     
def quickSort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr)//2]
    return quickSort([x for x in arr if x < pivot]) + [x for x in arr if x == pivot] + quickSort([x for x in arr if x > pivot])

arr = [55,7,2,4,-2,3,2,11]
print("After Sorting : ")
print(quickSort(arr))
      `},
      {id: 7,
      name: "",
      code: `
     def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr)//2
    left,right = merge_sort(arr[:mid]),merge_sort(arr[mid:])
    return sorted(left+right)

arr = [5,4,3,2,1]
print("After Sorting : ")
print(merge_sort(arr))
      `},
    {
      id: 8,
      name: "",
      code: `
      
 def an(graph):
    vertices = sorted(graph)
    n = len(graph)
    adjmatrix = [[0]*n for _ in range(n)]
    in_degree,out_fegree = {v:0 for v in vertices}, {v:0 for v in vertices}
    for i ,v in enumerate(vertices):
        out_fegree[v] = len(graph[v])
        for u in graph[v]:
            adjmatrix[i][vertices.index(u)]=1
            in_degree[v]+= 1
    print("In Degree = ",in_degree)
    print("Out Degree = ",out_fegree)
    for i in adjmatrix:
        print(i)
        
graph = {
    'A':['B','C'],
    'B':['D'],
    'C':['D'],
    'D':[]
    }

an(graph)

      `
    },
    {
      id: 9,
      name: "",
      code: `
     def optimal_bst(keys, freq):
    n = len(keys)
    cost = [[0] * n for _ in range(n)]

    # Base case: single keys
    for i in range(n):
        cost[i][i] = freq[i]

    # Chains of length 2 to n
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            cost[i][j] = float('inf')

            # Try making each key in interval [i..j] the root
            for r in range(i, j + 1):
                c = (
                    (cost[i][r - 1] if r > i else 0)
                    + (cost[r + 1][j] if r < j else 0)
                    + sum(freq[i:j + 1])
                )
                if c < cost[i][j]:
                    cost[i][j] = c

    return cost[0][n - 1]


keys = [10, 20, 30, 40]
freq = [4, 2, 6, 3]
print("Optimal cost:", optimal_bst(keys, freq))
      `
    },
    {
      id: 12,
      name: "",
      code: `
     def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)

    max_deadline = max(job[1] for job in jobs)
    slots = [-1] * max_deadline
    profit = 0

    for job in jobs:
        for i in range(job[1] - 1, -1, -1):
            if slots[i] == -1:
                slots[i] = job[0]
                profit += job[2]
                break

    return slots, profit


jobs = [('J1', 2, 100), ('J2', 1, 19), ('J3', 2, 27), ('J4', 1, 25), ('J5', 3, 15)]
result, max_profit = job_sequencing(jobs)

print("Selected jobs:", result)
print("Max Profit:", max_profit)
      `
    }

];
export default programs;

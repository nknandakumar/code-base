const programs = [ 
    {
        id: 1,
        name: "",
        code: `
        # Vectors 
v1 <- c(2,5,8,1,55,0,56,3)
v1
v2 <- c("DVS","college","of","Arts","and","Science")
v2

sort(v1)
sort(v2)

v1[3]
v2[4]

v2[5] <- "&"
v2

v4 = seq(from=10,to=30,by=3)
v4

#list

l1 = list("Cars","Bikes","jets")
l1 

l1[3]
l1[3] <- "Plane"
l1

length(l1)

"plan"%in%l1
"Plane"%in%l1

l1 = append(l1,"Ship",after = 3)
l1

n1 = l1[-4]
n1


#Array Implementation
a1 = c(1:14)
a1
a2 = c(11:24)
a2

a3 = array(a1,dim = c(4,3,2))
a3
a4 = array(a2,dim = c(4,3,2))
a4

length(a1)
a5 = a3+a4
a5
a6 = a3*a4
a5

#Matrix Implementation

m1 = matrix(c(1,2,3,4,5,6,11,12,13),nrow = 3, ncol = 3, byrow = TRUE)
m1
m2 = matrix(c(1,1,2,3,4,6,6,12,18),nrow = 3, ncol = 3, byrow = TRUE)
m2

m1[2,]
m1[,3]
m1[3,2]
m1[c(1,3),]
m1[,c(1,3)]

#rbind and cbind
m3 = m1+m2
m3
dim(m1)
length(m1)

#Data Frame Implementation
d = data.frame(
  empid = c(1:5),
  ename = c("Brad pit","Tom cruse","Ana de armas","will smith","keanu Reeves"),
  sal =  c(100000,90000,80000,70000,95000),
  desig = c("CEO","CTO","CFO","COO","Manager"),
  stringsAsFactors = FALSE
)
d
summary(d)
d[4]
d["sal"]
d$desig


        `
    },
    {
      id: 2,
      name: "",
      code: `
      l1 = TRUE
cat("Logical value of l1 is ", l1, "\n")
print(class(l1))

i1 = 4L
cat("Integer value of i1 is ", i1, "\n")
print(class(i1))

n1 = 44.4
cat("Numeric value of n1 is ", n1, "\n")
print(class(n1))

c1 = 1 + 2i
cat("Complex value of c1 is ", c1, "\n")
print(class(c1))

chr = "Programming"
cat("Character value of chr is ", chr, "\n")
print(class(chr))

typeof(57.9)
typeof(33L)
typeof("Internals")
typeof(TRUE)
typeof(1 + 2i)

print(LETTERS)
print(letters)
print(month.abb)
print(pi)
      
      `
    },
    {
      id: 3,
      name: "",
      code: `
      #Arthematic Operator
a = 2
b = 4
  paste("Addition = ",a+b)
  paste("Subtraction = ",a-b)
  paste("Multiplication = ",a*b)
  paste("Division = ",a/b)
  paste("Modulo = ",a%%b)
  paste("Power = ",a^b)

v1 = c(0,2)
v2 = c(2,3)
  cat("Addition of Vectors = ",v1+v2,"\n")
  cat("Subtraction of Vectors = ",v1-v2,"\n")
  cat("Multiplication of Vectors = ",v1*v2,"\n")
  cat("Division of Vectors = ",v1/v2,"\n")
  cat("Modulo of Vectors = ",v1%%v2,"\n")
  cat("Power of Vectors = ",v1^v2,"\n")
  

#Relational Operator 
  a = 10
  b = 14
    paste("Greater than = ",a>b)
    paste("Lesser than = ",a<b)
    paste("Greater than or equals = ",a>=b)
    paste("Lesser than or equals = ",a<=b)
    paste("Equals = ",a==b)
    paste("Not Equals = ",a!=b)
  
  v1 = c(2,2,4)
  v2 = c(2,3,6)
    cat("Greater than = ",v1>v2)
    cat("Lesser than = ",v1<v2)
    cat("Greater than or equals = ",v1>=v2)
    cat("Lesser than or equals = ",v1<=v2)
    cat("Equals = ",v1==v2)
    cat("Not Equals = ",v1!=v2)
#Logical Operator
  a = 5
  b = 3
    paste("AND : ",a&b)
    paste("OR : ",a|b)
    paste("Logical AND : ",a&&b)
    paste("Logical OR : ",a||b)
    paste("Negation : ",!b)
  
  
  vec1 = c(0,2)
  vec2 = c(TRUE,FALSE)
  vec11 = c(1)
  vec22 = (FALSE)
  x = c(1:10)
    cat ("Element wise AND :", vec1 & vec2, "\n")
    cat ("Element wise OR :", vec1 | vec2, "\n")
    cat ("Logical AND :", vec11&&vec22)
    cat ("Logical OR :", vec11 || vec22, "\n")
    cat ("Negation :", !vec1,"\n")
    x
    x[c(T,T,T,T,F,F,F,F,T,T)]

#miscellaneous Operator
    v1 = c(2,4,7)
    v2 = 7
    v3 = 22
    print(v2%in%v3)
    print(v2%in%v1)
    
# Control Structure
    # For Loop
    for (i in c(3, 16, 23,2, 19, 0, 6, 33, 21))
    {
      if (i == 2)
      { next }
      # print(i)
      if(i==33)
      { break }
      print(i)
    }
    print("Outside Loop")
    
    
    # While Loop
    x = 1
    # Print 1 to 5
    while(x <= 5) {
      print(x)
      x = x + 1 
    }
    
    Reactangle = function(length = 1, width = 4){
      area = length * width
      return(area)
    }
    print(Reactangle(2,2))
    print(Reactangle(length = 3,width = 4))
    print(Reactangle())
    
    #Retur complex objects
    x1 = (rep(1:4)+1i*(4:1))
    x1
    
    is.complex(x1)
    
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
      v <- c(1, -5, 6, -7, 8, 9)
cumulative_max <- cummax(v)
print("CUMULATIVE MAXIMA IS ")
print(cumulative_max)
print("CUMULATIVE sum = ")
print(cumsum(v))
print("CUMULATIVE PRODUCT = ")
print(cumprod(v))

s <- c(2, 4, 3, -5, -1, 7)
cumulative_min <- cummin(s)
print("CUMULATIVE MINIMA IS ")
print(cumulative_min)
print("CUMULATIVE sum = ")
print(cumsum(s))
print("CUMULATIVE PRODUCT = ")
print(cumprod(s))

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
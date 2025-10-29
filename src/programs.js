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
    }
];
export default programs;
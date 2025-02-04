### Vazifa 1:

**Savol:**  
Array ichidagi har bir objectni `age` fieldi 18 dan katta va `isActive` fieldi `true` bo'lganlarini filter qiling. Keyin ularning `name` va `age` fieldlarini o'zgartirib, yangi `info` fieldi yarating.

**Input:**

```javascript
const users = [
  { id: 1, name: "Alice", age: 25, isActive: true },
  { id: 2, name: "Bob", age: 17, isActive: true },
  { id: 3, name: "Charlie", age: 30, isActive: false },
  { id: 4, name: "David", age: 20, isActive: true },
];
```

**Output:**

```javascript
[
  { id: 1, name: "Alice", age: 25, info: "Alice is 25 years old" },
  { id: 4, name: "David", age: 20, info: "David is 20 years old" },
];
```

---

### Vazifa 2:

**Savol:**  
Array ichidagi har bir objectni `salary` fieldi 5000 dan katta va `department` fieldi `IT` bo'lganlarini filter qiling. Keyin ularning `name` va `salary` fieldlarini o'zgartirib, yangi `bonus` fieldi yarating.

**Input:**

```javascript
const employees = [
  { id: 1, name: "Alice", salary: 6000, department: "IT" },
  { id: 2, name: "Bob", salary: 4500, department: "HR" },
  { id: 3, name: "Charlie", salary: 7000, department: "IT" },
  { id: 4, name: "David", salary: 5500, department: "Finance" },
];
```

**Output:**

```javascript
[
  { id: 1, name: "Alice", salary: 6000, bonus: 1200 },
  { id: 3, name: "Charlie", salary: 7000, bonus: 1400 },
];
```

---

### Vazifa 3:

**Savol:**  
Array ichidagi har bir objectni `score` fieldi 50 dan katta va `passed` fieldi `false` bo'lganlarini filter qiling. Keyin ularning `name` va `score` fieldlarini o'zgartirib, yangi `status` fieldi yarating.

**Input:**

```javascript
const students = [
  { id: 1, name: "Alice", score: 60, passed: false },
  { id: 2, name: "Bob", score: 40, passed: false },
  { id: 3, name: "Charlie", score: 70, passed: true },
  { id: 4, name: "David", score: 55, passed: false },
];
```

**Output:**

```javascript
[
  { id: 1, name: "Alice", score: 60, status: "Alice passed with 60" },
  { id: 4, name: "David", score: 55, status: "David passed with 55" },
];
```

---

### Vazifa 4:

**Savol:**  
Array ichidagi har bir objectni `price` fieldi 100 dan katta va `category` fieldi `electronics` bo'lganlarini filter qiling. Keyin ularning `name` va `price` fieldlarini o'zgartirib, yangi `discount` fieldi yarating.

**Input:**

```javascript
const products = [
  { id: 1, name: "Laptop", price: 1200, category: "electronics" },
  { id: 2, name: "Phone", price: 800, category: "electronics" },
  { id: 3, name: "Tablet", price: 90, category: "electronics" },
  { id: 4, name: "Headphones", price: 150, category: "accessories" },
];
```

**Output:**

```javascript
[
  { id: 1, name: "Laptop", price: 1200, discount: 1080 },
  { id: 2, name: "Phone", price: 800, discount: 720 },
];
```

---

### Vazifa 5:

**Savol:**  
Array ichidagi har bir objectni `rating` fieldi 4 dan katta va `reviews` fieldi 100 dan ko'p bo'lganlarini filter qiling. Keyin ularning `title` va `rating` fieldlarini o'zgartirib, yangi `popularity` fieldi yarating.

**Input:**

```javascript
const movies = [
  { id: 1, title: "Inception", rating: 4.5, reviews: 200 },
  { id: 2, title: "Interstellar", rating: 4.8, reviews: 300 },
  { id: 3, title: "Dunkirk", rating: 3.9, reviews: 150 },
  { id: 4, title: "Tenet", rating: 4.2, reviews: 80 },
];
```

**Output:**

```javascript
[
  { id: 1, title: "Inception", rating: 4.5, popularity: "Highly Popular" },
  { id: 2, title: "Interstellar", rating: 4.8, popularity: "Highly Popular" },
];
```

---

### Vazifa 6:

**Savol:**  
Array ichidagi har bir objectni `age` fieldi 30 dan katta va `gender` fieldi `male` bo'lganlarini filter qiling. Keyin ularning `name` va `age` fieldlarini o'zgartirib, yangi `description` fieldi yarating.

**Input:**

```javascript
const people = [
  { id: 1, name: "Alice", age: 25, gender: "female" },
  { id: 2, name: "Bob", age: 35, gender: "male" },
  { id: 3, name: "Charlie", age: 40, gender: "male" },
  { id: 4, name: "David", age: 28, gender: "male" },
];
```

**Output:**

```javascript
[
  { id: 2, name: "Bob", age: 35, description: "Bob is 35 years old" },
  { id: 3, name: "Charlie", age: 40, description: "Charlie is 40 years old" },
];
```

---

### Vazifa 7:

**Savol:**  
Array ichidagi har bir objectni `price` fieldi 200 dan katta va `inStock` fieldi `true` bo'lganlarini filter qiling. Keyin ularning `name` va `price` fieldlarini o'zgartirib, yangi `total` fieldi yarating.

**Input:**

```javascript
const items = [
  { id: 1, name: "Sofa", price: 500, inStock: true },
  { id: 2, name: "Table", price: 150, inStock: true },
  { id: 3, name: "Chair", price: 250, inStock: false },
  { id: 4, name: "Lamp", price: 300, inStock: true },
];
```

**Output:**

```javascript
[
  { id: 1, name: "Sofa", price: 500, total: 550 },
  { id: 4, name: "Lamp", price: 300, total: 330 },
];
```

---

### Vazifa 8:

**Savol:**  
Array ichidagi har bir objectni `rating` fieldi 3 dan katta va `category` fieldi `drama` bo'lganlarini filter qiling. Keyin ularning `title` va `rating` fieldlarini o'zgartirib, yangi `review` fieldi yarating.

**Input:**

```javascript
const films = [
  { id: 1, title: "The Godfather", rating: 4.5, category: "drama" },
  { id: 2, title: "The Dark Knight", rating: 4.7, category: "action" },
  { id: 3, title: "Pulp Fiction", rating: 4.2, category: "drama" },
  { id: 4, title: "Fight Club", rating: 4.3, category: "drama" },
];
```

**Output:**

```javascript
[
  { id: 1, title: "The Godfather", rating: 4.5, review: "Excellent" },
  { id: 3, title: "Pulp Fiction", rating: 4.2, review: "Great" },
  { id: 4, title: "Fight Club", rating: 4.3, review: "Great" },
];
```

---

### Vazifa 9:

**Savol:**  
Array ichidagi har bir objectni `age` fieldi 20 dan katta va `city` fieldi `New York` bo'lganlarini filter qiling. Keyin ularning `name` va `age` fieldlarini o'zgartirib, yangi `address` fieldi yarating.

**Input:**

```javascript
const users = [
  { id: 1, name: "Alice", age: 25, city: "New York" },
  { id: 2, name: "Bob", age: 17, city: "Los Angeles" },
  { id: 3, name: "Charlie", age: 30, city: "New York" },
  { id: 4, name: "David", age: 20, city: "Chicago" },
];
```

**Output:**

```javascript
[
  { id: 1, name: "Alice", age: 25, address: "Alice lives in New York" },
  { id: 3, name: "Charlie", age: 30, address: "Charlie lives in New York" },
];
```

---

### Vazifa 10:

**Savol:**  
Array ichidagi har bir objectni `price` fieldi 1000 dan katta va `brand` fieldi `Apple` bo'lganlarini filter qiling. Keyin ularning `name` va `price` fieldlarini o'zgartirib, yangi `discountedPrice` fieldi yarating.

**Input:**

```javascript
const gadgets = [
  { id: 1, name: "iPhone 13", price: 1200, brand: "Apple" },
  { id: 2, name: "Galaxy S21", price: 1100, brand: "Samsung" },
  { id: 3, name: "MacBook Pro", price: 2000, brand: "Apple" },
  { id: 4, name: "iPad Air", price: 900, brand: "Apple" },
];
```

**Output:**

```javascript
[
  { id: 1, name: "iPhone 13", price: 1200, discountedPrice: 1080 },
  { id: 3, name: "MacBook Pro", price: 2000, discountedPrice: 1800 },
];
```

### Vazifa 11

**Savol**
Faol bo'lgan va yoshi 25 dan katta student larning barcha kurslarini qaytaring
**Input**
const input1 = [
  {
    id: 1,
    name: "Ali",
    age: 28,
    isActive: true,
    courses: ["JavaScript", "React", "Node.js"]
  },
  {
    id: 2,
    name: "Vali",
    age: 22,
    isActive: true,
    courses: ["Python", "Django"]
  },
  {
    id: 3,
    name: "Gani",
    age: 30,
    isActive: false,
    courses: ["Java", "Spring"]
  }
];
// Output: [["JavaScript", "React", "Node.js"]]

### Vazifa
**Savol**
**Input**Narxi 50000 dan yuqori va rating i 4 dan baland bo'lgan mahsulotlarni yangi 
format da qaytaring
const input2 = [
  {
    id: 1,
    name: "iPhone",
    price: 100000,
    rating: 4.8,
    specs: ["A15", "6GB RAM"]
  },
  {
    id: 2,
    name: "Samsung",
    price: 40000,
    rating: 4.5,
    specs: ["Snapdragon", "8GB RAM"]
  }
];
Output: [{title: "iPhone", cost: 100000, specifications: ["A15", "6GB RAM"], status: "Premium"}]

### Vazifa
**Savol**
**Input**
Tugallangan va muhim darajadagi task larning faqat title va deadline larini 
qaytaring

const input3 = [
  {
    id: 1,
    title: "Bug Fix",
    completed: true,
    priority: "high",
    deadline: "2024-02-01",
    subtasks: ["research", "implement"]
  },
  {
    id: 2,
    title: "Feature",
    completed: false,
    priority: "high",
    deadline: "2024-02-05",
    subtasks: ["plan"]
  }
];
 Output: [{title: "Bug Fix", deadline: "2024-02-01"}]

### Vazifa
**Savol**
**Input**Davomiyligi 2 soatdan ko'p va o'quvchilar soni 20 dan ortiq bo'lgan webinarlarni 
qaytaring
const input4 = [
  {
    id: 1,
    title: "JavaScript",
    duration: 3,
    students: 25,
    topics: ["DOM", "Events"]
  },
  {
    id: 2,
    title: "CSS",
    duration: 1.5,
    students: 30,
    topics: ["Flexbox"]
  }
];
// Output: [{name: "JavaScript", hours: 3, attendees: 25, content: ["DOM", "Events"]}]

### Vazifa
**Savol**
**Input**
Aktiv foydalanuvchilarning do'stlar ro'yxatidan yoshi 20-30 orasida bo'lganlarni 
qaytaring

```javascript
[
  {
    id: 1,
    name: "John",
    isActive: true,
    friends: [
      {name: "Mike", age: 25},
      {name: "Sarah", age: 35}
    ]
  },
  {
    id: 2,
    name: "Jane",
    isActive: false,
    friends: [
      {name: "Tom", age: 28},
      {name: "Lisa", age: 22}
    ]
  }
];
```

Output: ```[{userName: "John", friendsList: [{name: "Mike", age: 25}]}]```

### Vazifa 16

**Savol:**  
Online do'konning mahsulotlar bazasidan:

1. Narxi 50000 so'mdan yuqori
2. Yetkazib berish muddati 5 kundan kam
3. Reytingi 4 dan yuqori bo'lgan mahsulotlarni toping
   Va ularni quyidagi ko'rinishda qaytaring:

- Mahsulot nomi: title + brand
- Chegirmali narx: price \* (1 - discount)
- Yetkazib berish muddati + holati
- Reytingdan kelib chiqib maxsus belgi (**\***) qo'shing

**Input:**

```javascript
[
  {
    id: 1,
    title: "Smartfon",
    brand: "Samsung",
    category: {
      main: "Electronics",
      sub: "Phones",
      type: "Mobile",
    },
    price: 120000,
    delivery: {
      days: 3,
      company: "Express24",
      status: "available",
    },
    rating: {
      stars: 4.8,
      reviews: 150,
      verified: true,
    },
    discount: 0.1,
  },
  {
    id: 2,
    title: "Noutbuk",
    brand: "HP",
    category: {
      main: "Electronics",
      sub: "Computers",
      type: "Laptop",
    },
    price: 40000,
    delivery: {
      days: 7,
      company: "Post24",
      status: "pending",
    },
    rating: {
      stars: 4.2,
      reviews: 80,
      verified: true,
    },
    discount: 0.15,
  },
  {
    id: 3,
    title: "Televizor",
    brand: "LG",
    category: {
      main: "Electronics",
      sub: "TV",
      type: "Smart TV",
    },
    price: 200000,
    delivery: {
      days: 4,
      company: "Express24",
      status: "available",
    },
    rating: {
      stars: 4.9,
      reviews: 200,
      verified: true,
    },
    discount: 0.2,
  },
];
```
**OUTPUT:**
```javascript
[
  {
    fullName: "Smartfon Samsung",
    discountedPrice: 108000,
    deliveryInfo: "3 kun, available",
    ratingDisplay: "4.8 ****",
  },
  {
    fullName: "Televizor LG",
    discountedPrice: 160000,
    deliveryInfo: "4 kun, available",
    ratingDisplay: "4.9 ****",
  },
];
```
# JSON.parse()
>JSON.parse() হল একটি জাভাস্ক্রিপ্ট মেথড যা একটি JSON স্ট্রিংকে জাভাস্ক্রিপ্ট অবজেক্ট-এ রূপান্তর করে। এটি মূলত JSON ডেটা পেতে এবং তা প্রোগ্রামে ব্যবহারযোগ্য অবজেক্ট হিসেবে তৈরি করতে ব্যবহৃত হয়।

---

## সিনট্যাক্স
```
JSON.parse(text, reviver)

```
## কীভাবে কাজ করে?

```

JSON স্ট্রিং থেকে অবজেক্ট তৈরি করা: 

const jsonString = '{"name": "মো. রাজু", "age": 30, "isEmployed": true}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);


 আউটপুট:
 
    { name: 'মো. রাজু', age: 30, isEmployed: true }

```


```

অ্যারে রূপান্তর:

const jsonArray = '[1, 2, 3, 4]';
const array = JSON.parse(jsonArray);

console.log(array);
// আউটপুট:
// [1, 2, 3, 4]

```


```

নেস্টেড অবজেক্ট রূপান্তর:

const nestedJson = '{"student": {"name": "আফরিন", "roll": 101, "marks": [80, 90, 85]}}';
const nestedObject = JSON.parse(nestedJson);

console.log(nestedObject.student.name); 


// আউটপুট: আফরিন
console.log(nestedObject.student.marks); 

// আউটপুট: [80, 90, 85]

```


# কিছু গুরুত্বপূর্ণ বিষয়: 

> ### ভ্যালিড JSON স্ট্রিং:
JSON.parse() কাজ করার জন্য JSON স্ট্রিংটি ভ্যালিড হতে হবে। উদাহরণ:
```
// সঠিক JSON স্ট্রিং
JSON.parse('{"name": "মো. রাজু"}'); // কাজ করবে

// ভুল JSON স্ট্রিং
JSON.parse("{name: 'মো. রাজু'}"); // কাজ করবে না (কোটেশন দরকার)

```
### JSON স্ট্রিং শুধুমাত্র ডাবল কোটেশন ব্যবহার করে।
একক কোটেশন ব্যবহার করা যাবে না।


### ত্রুটি (Error):
যদি JSON স্ট্রিংটি অবৈধ হয়, তাহলে এটি একটি SyntaxError প্রদান করবে।

```
try {
    JSON.parse("invalid JSON string");
} catch (error) {
    console.error("JSON ত্রুটি:", error.message);
}

```
### API থেকে ডেটা প্রাপ্তি:
যখন API কলের মাধ্যমে JSON স্ট্রিং প্রাপ্ত হয়, তখন তা অবজেক্টে রূপান্তর করতে JSON.parse() ব্যবহার করা হয়।

### লোকাল স্টোরেজ:
ব্রাউজারের লোকাল স্টোরেজ থেকে JSON স্ট্রিং পড়ে অবজেক্টে রূপান্তর করার জন্য।

```
const userData = localStorage.getItem('user');
const userObject = JSON.parse(userData);

```

```
JSON.parse() বনাম eval()
JSON.parse() নিরাপদ এবং দ্রুত।
eval()-এর মাধ্যমে JSON রূপান্তর করা হলে নিরাপত্তা ঝুঁকি তৈরি হয়। তাই সর্বদা JSON.parse() ব্যবহার করুন।

JSON.parse() হল JSON ডেটার সাথে কাজ করার জন্য একটি স্ট্যান্ডার্ড এবং নিরাপদ পদ্ধতি। 😊
```
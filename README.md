<h1>Assingment 5 Question & Answer 👇</h1>

<h4>1. getElementById, getElementsByClassName, querySelector / querySelectorAll এর পার্থক্য</h4>

getElementById: DOM-এর ভিতর একটি নির্দিষ্ট ID-এর উপাদান খুঁজে বের করে। একটি element রিটার্ন করে; যদি না পাওয়া যায়, তাহলে null রিটার্ন করে। খুব দ্রুত কাজ করে।

getElementsByClassName: DOM-এর ভিতর একই class-এর সব উপাদান খুঁজে বের করে। HTMLCollection রিটার্ন করে; যদি কিছু না পাওয়া যায়, তাহলে খালি collection রিটার্ন করে।

querySelector: CSS selector ব্যবহার করে প্রথম matching element রিটার্ন করে। না পেলে null রিটার্ন করে।

querySelectorAll: CSS selector ব্যবহার করে সব matching element রিটার্ন করে। NodeList রিটার্ন করে; যদি কিছু না পাওয়া যায়, তাহলে খালি NodeList রিটার্ন করে।

<h4>2. How do you create and insert a new element into the DOM?</h4>

<ul>
<li>document.createElement() → create new element</li>

<li>textContent / innerHTML / setAttribute → add content or attributes</li>

<li>appendChild() or insertBefore() → insert into the DOM</li>
</ul>


<h4>3. What is Event Bubbling and how does it work?</h4>
<ul>
  <li> একটি child element (যেমন button) এ event trigger হলে প্রথমে child element এ event চলে।</li>

<li> এরপর event bubble হয়ে parent element, grandparent element এবং শেষ পর্যন্ত document এ পৌঁছায়।</li>
</ul>

<h4>4. What is Event Delegation in JavaScript? Why is it useful?</h4>
<ul>
  <li> Event Delegation হলো একটি পদ্ধতি যেখানে child element এ আলাদা listener না দিয়ে parent element এ listener বসানো হয়। Event bubbling ব্যবহার করে নির্দিষ্ট child element শনাক্ত করা হয়।</li>

<li>এটা ইউজফুল কারন কোড সহজ হয়, পারফরম্যান্স ভালো থাকে, এবং dynamic element গুলো handle করা যায়।</li>
</ul>

<h4>5. What is the difference between preventDefault() and stopPropagation() methods?
</h4>
<ul>
  <li> event.preventDefault(): ব্রাউজারের ডিফল্ট আচরণ বন্ধ করে। উদাহরণ: Form submit হলে পেজ reload হওয়া বন্ধ করা।</li>

<li>event.stopPropagation(): Event bubbling বন্ধ করে। Parent element এ event পৌঁছায় না।</li>
</ul>








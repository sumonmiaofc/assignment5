Assingment 5 Question & Answer 👇

<b>1. getElementById, getElementsByClassName, querySelector / querySelectorAll এর পার্থক্য</b>

getElementById: DOM-এর ভিতর একটি নির্দিষ্ট ID-এর উপাদান খুঁজে বের করে। একটি element রিটার্ন করে; যদি না পাওয়া যায়, তাহলে null রিটার্ন করে। খুব দ্রুত কাজ করে।

getElementsByClassName: DOM-এর ভিতর একই class-এর সব উপাদান খুঁজে বের করে। HTMLCollection রিটার্ন করে; যদি কিছু না পাওয়া যায়, তাহলে খালি collection রিটার্ন করে।

querySelector: CSS selector ব্যবহার করে প্রথম matching element রিটার্ন করে। না পেলে null রিটার্ন করে।

querySelectorAll: CSS selector ব্যবহার করে সব matching element রিটার্ন করে। NodeList রিটার্ন করে; যদি কিছু না পাওয়া যায়, তাহলে খালি NodeList রিটার্ন করে।

<b>2. How do you create and insert a new element into the DOM?</b>

<ul>
<li>document.createElement() → create new element</li>

<li>textContent / innerHTML / setAttribute → add content or attributes</li>

<li>appendChild() or insertBefore() → insert into the DOM</li>
</ul>


<b>What is Event Bubbling and how does it work?</b>
<ul>
  <li> একটি child element (যেমন button) এ event trigger হলে প্রথমে child element এ event চলে।</li>

<li> এরপর event bubble হয়ে parent element, grandparent element এবং শেষ পর্যন্ত document এ পৌঁছায়।</li>
</ul>




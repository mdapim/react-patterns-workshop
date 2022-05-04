---
theme: slidev-theme-nearform
layout: default
highlighter: shiki
lineNumbers: false
---

<img class=logo src="/images/nearform.svg">

# React Patterns Workshop

<img src="/images/react.svg" style="width: 15%;">

<div class="copyright">

© Copyright 2022 NearForm Ltd. All Rights Reserved.

</div>
---

# Introduction: React patterns 

<div class="dense">

- Solve common problems

- Etc.

</div>

---

# Introduction: Why React patterns

<div class="dense">

- No need to reinvent the wheel
</div>

---

# Getting setup

<div class="dense">

#### Requirements

- Node LTS
- npm >= 7

#### Setup

```bash
git clone https://github.com/nearform/react-patterns-workshop
npm i
npm start

# make sure you're all set
npm test
```

</div>

---

# Workshop structure

<div class="dense">

- This workshop is made of multiple, incremental modules
- Each module builds on top of the previous one
- At each step you are asked to add features and solve problems
- You will find the solution to each step in the `src/step-{n}-{name}` folder
- The 🏆 icon indicates bonus features
- The 💡 icon indicates hints

</div>

---

# Running the modules

- `cd src/step-{n}-{name}`

- Check out README.md

#### Example

```bash
cd src/step-01-hello-world

npm run start
```

---

# Step 1: Exercise 💻

<div class="dense">

Use react query to fetch the most popular action movies from 2022

- The url to call is "/api/discover?year=2022&genre=28&order_by=popularity.desc&page=1"
- The hook to use is useQuery and this takes an identifier key and an async function
- List the titles of the movies in a list
- Bonus: show an image of each movie

</div>

---

# Step 1: Solution

```tsx
// 01-server-state.jsx
const Step01HelloWorld = () => {
  return <div>Hello world</div>
}
export default Step01HelloWorld
```

---

# Step 1: Trying it out

### In the browser:

(image here...)

---

# Thanks For Having Us!

## 👏👏👏

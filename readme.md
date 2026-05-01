# 🚀 TypeScript Setup & Run Guide (Node.js + NVM)

A beginner-friendly guide to install, configure, and run TypeScript on your local machine using Node.js and NVM.

---

## 📌 Prerequisites

Before starting, make sure you:

* Have basic knowledge of JavaScript
* Are using Windows / Linux / macOS terminal

---

## 🧹 Step 1: Uninstall Existing Node.js

If Node.js is already installed on your system, uninstall it to avoid version conflicts.

---

## 🔧 Step 2: Install NVM (Node Version Manager)

NVM helps you manage multiple Node.js versions easily.

### 👉 Download NVM:

* Windows: Install **nvm-windows**
* Linux/macOS: Use terminal command

### 👉 Install Node using NVM:

```bash
nvm install 22.22.2
```

### 👉 Check installed versions:

```bash
nvm ls
```

### 👉 Use a specific version:

```bash
nvm use 24.08.4
```

---

## ⚡ Step 3: Run TypeScript Directly (Node v22.18.0+)

If you're using **Node.js v22.18.0 or later**, and your code contains only erasable TypeScript syntax:

```bash
node index.ts
```

✅ No extra configuration needed!

---

## 🧪 Step 4: For Older Node Versions (< v22.18.0)

Use the experimental flag:

```bash
node --experimental-strip-types index.ts
```

---

## 📦 Step 5: Install TypeScript

Install TypeScript globally or locally:

```bash
npm install typescript
```

OR (global install):

```bash
npm install -g typescript
```

---

## ⚙️ Step 6: Initialize TypeScript Config

Create a `tsconfig.json` file:

```bash
tsc --init
```

---

## 🛠️ Step 7: Configure Paths

Open `tsconfig.json` and update:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

👉 Make sure:

* TypeScript files → `src/`
* Compiled JavaScript → `dist/`

---

## ▶️ Step 8: Compile TypeScript

```bash
tsc
```

---

## 🏃 Step 9: Run Compiled JavaScript

```bash
node dist/index.js
```

---

## 📁 Example Project Structure

```
project/
│
├── src/
│   └── index.ts
│
├── dist/
│   └── index.js
│
├── tsconfig.json
└── package.json
```

---

## 💡 Tips

* Use **VS Code** for better TypeScript support
* Install extension: `TypeScript and JavaScript Language Features`
* Keep Node updated using NVM

---

## 🎯 Summary

| Task               | Command                  |
| ------------------ | ------------------------ |
| Install Node       | `nvm install <version>`  |
| Use Node version   | `nvm use <version>`      |
| Install TypeScript | `npm install typescript` |
| Init config        | `tsc --init`             |
| Compile            | `tsc`                    |
| Run                | `node dist/index.js`     |

---

## ⭐ Support

If you found this helpful:

* Give this repo a ⭐
* Share with your developer friends

---

Happy Coding! 💻🔥

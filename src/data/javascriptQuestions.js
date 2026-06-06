import { MDN } from './sources'

/* ── Basic JavaScript (15) ── */
export const basicQuestions = [
  {
    question: 'What is JavaScript, and how does it differ from Java?',
    answer:
      'JavaScript is a high-level, dynamic, interpreted programming language standardized as ECMAScript. It runs in browsers (client-side), on servers (Node.js), and in embedded runtimes. It is multi-paradigm — procedural, object-oriented, and functional.\n\nJava is a statically typed, compiled language on the JVM with class-based OOP. JavaScript is dynamically typed and prototype-based. Despite the similar name (a 1995 marketing decision), they are unrelated languages with different syntax, type systems, and execution models.\n\nIn QA automation: JavaScript powers Playwright, Cypress, and WebdriverIO; Java powers Selenium with TestNG/JUnit.',
    source: MDN('Web/JavaScript/Guide/Introduction'),
  },
  {
    question: 'What primitive data types does JavaScript provide?',
    answer:
      'JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, null, and symbol. Primitives are immutable and compared by value.\n\nEverything else is an object — including functions, arrays, dates, and regular expressions. typeof null returns "object" (a long-standing bug), so use value === null to test for null.\n\ntypeof undefined → "undefined". typeof 42n → "bigint". typeof Symbol() → "symbol".',
    code: [{ language: 'javascript', snippet: "typeof 'hello'     // 'string'\ntypeof 42          // 'number'\ntypeof true        // 'boolean'\ntypeof undefined   // 'undefined'\ntypeof null        // 'object' (historical quirk)\ntypeof {}          // 'object'\ntypeof []          // 'object'\ntypeof (() => {})  // 'function'" }],
    source: MDN('Web/JavaScript/Guide/Data_structures'),
  },
  {
    question: 'How do var, let, and const differ in scope, initialization, and reassignment?',
    answer:
      'var is function-scoped (or global-scoped), hoisted with initial value undefined, and can be redeclared and reassigned.\n\nlet and const are block-scoped ({ }), hoisted but uninitialized (temporal dead zone until declaration), and cannot be redeclared in the same scope. let allows reassignment; const does not allow rebinding the variable identifier (though object/array contents can still be mutated).\n\nModern code: prefer const by default, let when reassignment is needed, avoid var.',
    code: [{ language: 'javascript', snippet: "if (true) {\n  var a = 1;   // visible outside block\n  let b = 2;   // block-scoped\n  const c = 3; // block-scoped, no rebinding\n}\nconsole.log(a); // 1\n// console.log(b); // ReferenceError\n\nconst user = { name: 'Akash' };\nuser.name = 'Lead'; // OK — mutating object, not rebinding const" }],
    source: MDN('Web/JavaScript/Reference/Statements/let'),
  },
  {
    question: 'What is the difference between null and undefined?',
    answer:
      'undefined means a variable has been declared but not assigned a value, or a function parameter was omitted, or a property does not exist on an object. It is the default value of uninitialized let/const bindings.\n\nnull is an intentional absence of value — a programmer-assigned placeholder meaning "no object here." typeof undefined is "undefined"; typeof null is "object."\n\nLoose equality: null == undefined is true. Strict equality: null === undefined is false. Prefer === and explicit null/undefined checks in tests.',
    code: [{ language: 'javascript', snippet: "let x;\nconsole.log(x);              // undefined\nconsole.log(x === undefined); // true\n\nlet y = null;\nconsole.log(y === null);      // true\nconsole.log(null == undefined); // true\nconsole.log(null === undefined); // false" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/null'),
  },
  {
    question: 'What is the difference between == and ===?',
    answer:
      '== (loose equality) compares values after type coercion — e.g., "5" == 5 is true, null == undefined is true, 0 == false is true.\n\n=== (strict equality) compares without coercion — types and values must match. "5" === 5 is false.\n\nBest practice: always use === and !== to avoid subtle coercion bugs. Use Object.is() when you need SameValue semantics (distinguishes +0 and -0, treats NaN as equal to NaN).',
    code: [{ language: 'javascript', snippet: "console.log('5' == 5);   // true\nconsole.log('5' === 5);  // false\nconsole.log(0 == false); // true\nconsole.log(0 === false); // false\nconsole.log(NaN === NaN); // false\nconsole.log(Object.is(NaN, NaN)); // true" }],
    source: MDN('Web/JavaScript/Equality_comparisons_and_sameness'),
  },
  {
    question: 'What values are falsy in JavaScript?',
    answer:
      'A value is falsy if it coerces to false in a boolean context. The 8 falsy values are:\n\nfalse, 0, -0, 0n (BigInt zero), "" (empty string), null, undefined, and NaN.\n\nEverything else is truthy — including "0", "false", [], {}, and function references. In conditionals and assertions, explicitly check for null/undefined/empty rather than relying on truthiness when clarity matters.',
    code: [{ language: 'javascript', snippet: "const falsy = [false, 0, -0, 0n, '', null, undefined, NaN];\nfalsy.forEach(v => console.log(Boolean(v))); // all false\n\nconsole.log(Boolean('0'));    // true\nconsole.log(Boolean([]));       // true\nconsole.log(Boolean({}));       // true" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Boolean'),
  },
  {
    question: 'What is type coercion? Give examples of implicit and explicit coercion.',
    answer:
      'Type coercion converts a value from one type to another. Explicit coercion is intentional: Number("42"), String(42), Boolean(0).\n\nImplicit coercion happens automatically in operations: "5" + 1 → "51" (number coerced to string for concatenation), "5" - 1 → 4 (string coerced to number), if ([]) { ... } (value coerced to boolean).\n\nCoercion causes many interview bugs. Use strict equality, Number.parseInt/parseFloat with radix, and explicit conversions in test data handling.',
    code: [{ language: 'javascript', snippet: "// Explicit\nNumber('42');    // 42\nString(42);        // '42'\nBoolean(0);        // false\n\n// Implicit\n'5' + 1;           // '51'\n'5' - 1;           // 4\n!!'hello';         // true\nnull + 1;          // 1" }],
    source: MDN('Web/JavaScript/Guide/Equality_comparisons_and_sameness'),
  },
  {
    question: 'What is the difference between a function declaration and a function expression?',
    answer:
      'Function declaration: function greet() { } — hoisted entirely; can be called before its line in the source.\n\nFunction expression: const greet = function() { } or const greet = function named() { } — the variable is hoisted but not initialized until assignment; cannot be called before that line.\n\nNamed function expressions help stack traces. Arrow functions are always expressions. Declarations are invalid inside block scopes in sloppy mode but allowed in strict/module code.',
    code: [{ language: 'javascript', snippet: "sayHi(); // works — declaration hoisted\nfunction sayHi() { return 'hi'; }\n\n// sayBye(); // TypeError — const in TDZ\nconst sayBye = function () { return 'bye'; };" }],
    source: MDN('Web/JavaScript/Reference/Statements/function'),
  },
  {
    question: 'How do arrow functions differ from regular functions?',
    answer:
      'Arrow functions (() => {}) have lexical this — they inherit this from the enclosing scope, not from how they are called. They have no own arguments object, cannot be used as constructors (no new), and cannot be generator functions.\n\nRegular functions get dynamic this (method call, call/apply/bind, new). Arrow functions are concise for callbacks; regular functions are needed for object methods that need their own this, constructors, and prototype methods.',
    code: [{ language: 'javascript', snippet: "const obj = {\n  name: 'QA',\n  regular() { return this.name; },\n  arrow: () => this?.name,\n};\nconsole.log(obj.regular()); // 'QA'\nconsole.log(obj.arrow());   // undefined (lexical this)\n\nconst double = n => n * 2;" }],
    source: MDN('Web/JavaScript/Reference/Functions/Arrow_functions'),
  },
  {
    question: 'What is an object, and how can its properties be read, added, changed, and deleted?',
    answer:
      'An object is a collection of key-value properties. Keys are strings or symbols; values can be any type including functions (methods).\n\nRead: dot notation obj.name or bracket notation obj["name"] (required for dynamic keys). Add/change: assignment obj.key = value. Delete: delete obj.key (returns true if successful).\n\nOptional chaining obj?.prop and nullish coalescing obj?.prop ?? default safely handle missing values in automation configs.',
    code: [{ language: 'javascript', snippet: "const user = { name: 'Akash' };\nuser.role = 'QA';           // add\nuser['name'] = 'Akash K';  // change\nconsole.log(user.name);     // read\ndelete user.role;\nconsole.log(user?.team ?? 'N/A');" }],
    source: MDN('Web/JavaScript/Guide/Working_with_objects'),
  },
  {
    question: 'How do arrays differ from ordinary objects?',
    answer:
      'Arrays are specialized objects optimized for ordered, integer-indexed collections. Keys are automatic non-negative integer indices (0, 1, 2…). They have a length property and Array prototype methods (map, filter, push, etc.).\n\nObjects use arbitrary string/symbol keys and have no guaranteed order (though modern engines preserve insertion order for string keys). typeof [] is "object"; Array.isArray([]) reliably identifies arrays.\n\nUse arrays for ordered lists; objects for keyed records/maps.',
    code: [{ language: 'javascript', snippet: "const arr = ['a', 'b'];\narr.custom = true;       // arrays are objects too\nconsole.log(arr[0]);     // 'a'\nconsole.log(arr.length); // 2\nconsole.log(Array.isArray(arr)); // true" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Array'),
  },
  {
    question: 'What do map(), filter(), reduce(), find(), and forEach() do?',
    answer:
      'All are Array iteration methods that take a callback.\n\nforEach — runs callback for each element; returns undefined; cannot break early.\nmap — returns new array of callback return values (same length).\nfilter — returns new array of elements where callback returns truthy.\nfind — returns first element where callback returns truthy, else undefined.\nreduce — accumulates to a single value: arr.reduce((acc, cur) => ..., initial).\n\nmap/filter/reduce are non-mutating; prefer them over manual loops for readability in test data transforms.',
    code: [{ language: 'javascript', snippet: "const nums = [1, 2, 3, 4];\nnums.map(n => n * 2);           // [2, 4, 6, 8]\nnums.filter(n => n % 2 === 0);  // [2, 4]\nnums.find(n => n > 2);          // 3\nnums.reduce((s, n) => s + n, 0); // 10\nnums.forEach(n => console.log(n));" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Array/map'),
  },
  {
    question: 'What is destructuring, and how does it work with arrays and objects?',
    answer:
      "Destructuring unpacks values from arrays or properties from objects into distinct variables in one statement.\n\nArray: const [a, b, ...rest] = arr — position-based, rest collects remaining elements.\nObject: const { name, role = 'QA' } = user — key-based, rename with { name: userName }, defaults for missing keys.\n\nCommon in automation: extracting API response fields, swapping variables, function parameter unpacking.",
    code: [{ language: 'javascript', snippet: "const [first, second] = [10, 20, 30];\nconst { status, data: body } = { status: 200, data: { ok: true } };\n\nfunction login({ user, pass }) {\n  return `${user}:${pass}`;\n}\nlogin({ user: 'admin', pass: 'secret' });" }],
    source: MDN('Web/JavaScript/Reference/Operators/Destructuring'),
  },
  {
    question: 'What do the spread and rest syntaxes do?',
    answer:
      'Spread (...) expands an iterable into elements or object properties: [...arr1, ...arr2], { ...defaults, ...overrides }, fn(...args).\n\nRest collects remaining items into an array or object: function sum(...nums), const [head, ...tail] = arr. Same syntax, opposite direction — spread expands, rest collects.\n\nUse spread for shallow copies and merging configs; rest for variadic functions and partial destructuring.',
    code: [{ language: 'javascript', snippet: "const base = { timeout: 5000 };\nconst opts = { ...base, retries: 3 };\n\nconst nums = [1, 2, 3];\nconsole.log(Math.max(...nums)); // 3\n\nfunction logAll(level, ...messages) {\n  messages.forEach(m => console.log(level, m));\n}" }],
    source: MDN('Web/JavaScript/Reference/Operators/Spread_syntax'),
  },
  {
    question: 'What is the difference between synchronous and asynchronous code?',
    answer:
      'Synchronous code runs line by line — each statement blocks until it finishes. The call stack executes one function at a time to completion.\n\nAsynchronous code schedules work for later (timers, network I/O, file reads) and continues without waiting. Completion is handled via callbacks, promises, or async/await. JavaScript is single-threaded but non-blocking via the event loop.\n\nIn browser tests: clicking a button is sync; waiting for an API response or animation is async — use await, explicit waits, or promise-based helpers.',
    source: MDN('Web/JavaScript/Reference/Global_Objects/Promise'),
  },
]

/* ── Intermediate JavaScript (20) ── */
export const intermediateQuestions = [
  {
    question: 'What is lexical scope?',
    answer:
      'Lexical (static) scope means a function\'s accessible variables are determined by where the function is written in source code, not where it is called. Inner functions can access outer function variables, module-level bindings, and globals — but not sibling scopes.\n\nScope chain: inner → outer → … → global. Block statements with let/const create block scope. Closures and module privacy rely on lexical scope.',
    code: [{ language: 'javascript', snippet: "function outer() {\n  const secret = 'token';\n  function inner() {\n    console.log(secret); // lexical access to outer\n  }\n  return inner;\n}\nconst fn = outer();\nfn(); // 'token' — still in closure scope" }],
    source: MDN('Web/JavaScript/Guide/Closures'),
  },
  {
    question: 'What is a closure, and what are practical uses for closures?',
    answer:
      'A closure is a function plus its lexical environment — it retains access to outer variables even after the outer function returns.\n\nPractical uses:\n1. Data privacy — hide state behind factory functions\n2. Partial application / currying\n3. Event handlers that remember context\n4. Memoization caches\n5. Module pattern before ES modules\n\nClosures are powerful but can retain large objects if not careful (memory leaks in long-lived SPAs).',
    code: [{ language: 'javascript', snippet: "function createCounter() {\n  let count = 0;\n  return {\n    inc() { return ++count; },\n    get() { return count; },\n  };\n}\nconst c = createCounter();\nc.inc(); // 1\nc.get(); // 1" }],
    source: MDN('Web/JavaScript/Guide/Closures'),
  },
  {
    question: 'What is hoisting, and how does it affect var, let, const, functions, and classes?',
    answer:
      'Hoisting moves declarations to the top of their scope during compilation — before execution.\n\nvar: declaration and initialization hoisted as undefined; usable before assignment.\nlet/const: declaration hoisted but uninitialized (temporal dead zone until line runs).\nFunction declarations: fully hoisted — callable before definition line.\nFunction expressions / arrow functions: only variable hoisting applies.\nClasses: hoisted but in TDZ like let — ReferenceError if used before declaration.\n\nUnderstanding hoisting explains "Cannot access before initialization" errors.',
    code: [{ language: 'javascript', snippet: "console.log(typeof fnDecl); // 'function'\nfunction fnDecl() {}\n\n// console.log(fnExpr); // ReferenceError\nconst fnExpr = function () {};\n\n// console.log(MyClass); // ReferenceError\nclass MyClass {}" }],
    source: MDN('Web/JavaScript/Guide/Functions#function_hoisting'),
  },
  {
    question: 'What is the temporal dead zone?',
    answer:
      'The temporal dead zone (TDZ) is the period between entering a scope and the line where let, const, or class is declared. Accessing the binding in the TDZ throws ReferenceError.\n\nvar does not have a TDZ — it is initialized to undefined when hoisted. TDZ prevents using block-scoped variables before they are properly initialized, catching bugs that var allowed.\n\ntypeof undeclaredVariable → ReferenceError in modules; typeof x where let x exists in TDZ → ReferenceError.',
    code: [{ language: 'javascript', snippet: "{\n  // TDZ for `value` starts\n  // console.log(value); // ReferenceError\n  const value = 42;\n  // TDZ ends\n}" }],
    source: MDN('Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz'),
  },
  {
    question: 'How is this determined in a regular function, method, constructor, and arrow function?',
    answer:
      'this is determined by call site, not definition (except arrows):\n\n1. Simple call fn() — this is undefined (strict) or global object (sloppy)\n2. Method call obj.m() — this is obj\n3. Constructor new Fn() — this is the new instance\n4. call/apply/bind — this is explicitly set\n5. Arrow function — lexical this from enclosing scope; ignores call-site rules\n\nLosing this: const m = obj.method; m() drops object context — fix with bind or arrow in class fields.',
    code: [{ language: 'javascript', snippet: "const user = {\n  name: 'Akash',\n  greet() { return this.name; },\n  arrow: () => this?.name,\n};\nconsole.log(user.greet()); // 'Akash'\nconst loose = user.greet;\n// console.log(loose()); // undefined or error in strict" }],
    source: MDN('Web/JavaScript/Reference/Operators/this'),
  },
  {
    question: 'What do call(), apply(), and bind() do?',
    answer:
      'All three set the this value for a function invocation.\n\ncall(thisArg, arg1, arg2, …) — invokes immediately with individual arguments.\napply(thisArg, [args]) — invokes immediately with arguments as array-like.\nbind(thisArg, …) — returns a new function with permanently bound this (and optional partial args); does not invoke immediately.\n\nUse bind for event handlers, call/apply for borrowing methods (e.g., Array.prototype.slice.call(arguments)).',
    code: [{ language: 'javascript', snippet: "function greet(greeting) {\n  return `${greeting}, ${this.name}`;\n}\nconst user = { name: 'QA' };\ngreet.call(user, 'Hello');\ngreet.apply(user, ['Hi']);\nconst bound = greet.bind(user, 'Hey');\nbound();" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Function/bind'),
  },
  {
    question: 'How does prototype-based inheritance work?',
    answer:
      'Every object has an internal [[Prototype]] link (accessed via Object.getPrototypeOf or __proto__). When a property is read, JavaScript walks the prototype chain until found or null.\n\nFunctions have a prototype property used when called with new — new instance\'s [[Prototype]] links to Constructor.prototype. Methods on Constructor.prototype are shared by all instances.\n\nObject.create(proto) sets prototype directly. class syntax is syntactic sugar over this model.',
    code: [{ language: 'javascript', snippet: "function Animal(name) { this.name = name; }\nAnimal.prototype.speak = function () {\n  return `${this.name} speaks`;\n};\nconst dog = new Animal('Rex');\nconsole.log(dog.speak()); // Rex speaks\nconsole.log(Object.getPrototypeOf(dog) === Animal.prototype); // true" }],
    source: MDN('Web/JavaScript/Inheritance_and_the_prototype_chain'),
  },
  {
    question: 'How is class syntax related to JavaScript\'s prototype system?',
    answer:
      'class declarations define a constructor function and attach methods to prototype — same inheritance model as pre-ES6 patterns. class methods are non-enumerable on prototype. static methods live on the constructor.\n\nextends sets up prototype chain between prototypes and provides super keyword. class fields add instance properties in constructor body.\n\nClasses are not hoisted like function declarations (TDZ). They are cleaner syntax, not a new object model.',
    code: [{ language: 'javascript', snippet: "class Page {\n  constructor(url) { this.url = url; }\n  open() { return `Opening ${this.url}`; }\n}\nclass LoginPage extends Page {\n  login(user) { return super.open() + ` as ${user}`; }\n}" }],
    source: MDN('Web/JavaScript/Reference/Classes'),
  },
  {
    question: 'What is the difference between own and inherited properties?',
    answer:
      'Own properties exist directly on the object. Inherited properties come from the prototype chain.\n\nObject.hasOwn(obj, key) or obj.hasOwnProperty(key) — own only.\nkey in obj — own or inherited.\nObject.keys(obj) — enumerable own string keys only.\n\nWhen iterating test config objects, own properties avoid picking up prototype pollution or inherited methods.',
    code: [{ language: 'javascript', snippet: "const parent = { shared: 1 };\nconst child = Object.create(parent);\nchild.own = 2;\n\nObject.hasOwn(child, 'own');    // true\nObject.hasOwn(child, 'shared'); // false\n'shared' in child;              // true" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Object/hasOwn'),
  },
  {
    question: 'How do Object.freeze(), Object.seal(), and const differ?',
    answer:
      'const prevents rebinding a variable — the binding is constant, but the object it points to can still be mutated.\n\nObject.seal(obj) — cannot add/delete properties; existing properties can be changed if writable.\nObject.freeze(obj) — shallow freeze: cannot add, delete, or change properties (writable/configurable false).\n\nDeep immutability requires recursive freeze or immutable data libraries. freeze/seal are shallow — nested objects remain mutable.',
    code: [{ language: 'javascript', snippet: "const cfg = { retries: 3 };\ncfg.retries = 5; // OK — const does not freeze object\n\nconst frozen = Object.freeze({ retries: 3 });\n// frozen.retries = 5; // fails silently or throws in strict" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Object/freeze'),
  },
  {
    question: 'What are shallow copies, and why do spread syntax and Object.assign() not perform deep cloning?',
    answer:
      'A shallow copy duplicates top-level properties/elements but shares references to nested objects.\n\n[...arr], { ...obj }, Object.assign({}, obj), and Array.slice() all create shallow copies. Mutating nested.shared in the copy also mutates the original.\n\nDeep cloning requires recursion or structuredClone() (built-in, handles many types but not functions or DOM nodes). JSON.parse(JSON.stringify(obj)) works for plain JSON data only.',
    code: [{ language: 'javascript', snippet: "const orig = { meta: { env: 'prod' } };\nconst copy = { ...orig };\ncopy.meta.env = 'staging';\nconsole.log(orig.meta.env); // 'staging' — shared reference\n\nconst deep = structuredClone(orig);" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Object/assign'),
  },
  {
    question: 'What is a Promise, and what are its pending, fulfilled, and rejected states?',
    answer:
      'A Promise represents a future value from async work. States:\n\npending — initial; neither fulfilled nor rejected.\nfulfilled — operation succeeded; value available to .then handlers.\nrejected — operation failed; reason available to .catch handlers.\n\nOnce settled (fulfilled or rejected), a promise cannot change state. .then/.catch/.finally return new promises, enabling chains. Prefer async/await for readability; promises for parallel composition (Promise.all).',
    code: [{ language: 'javascript', snippet: "const p = fetch('/api/users')\n  .then(res => {\n    if (!res.ok) throw new Error(res.status);\n    return res.json();\n  })\n  .catch(err => console.error(err))\n  .finally(() => console.log('done'));" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Promise'),
  },
  {
    question: 'How do Promise.all(), allSettled(), race(), and any() differ?',
    answer:
      'Promise.all(iterable) — waits for all; rejects immediately on first rejection; resolves to array of results in order.\nPromise.allSettled(iterable) — waits for all; never short-circuits; each result is { status, value/reason }.\nPromise.race(iterable) — settles when first promise settles (fulfill or reject).\nPromise.any(iterable) — fulfills when first promise fulfills; rejects AggregateError only if all reject.\n\nUse all for parallel required steps, allSettled for independent reports, race for timeouts, any for fastest successful response.',
    code: [{ language: 'javascript', snippet: "await Promise.all([fetch('/a'), fetch('/b')]);\nconst results = await Promise.allSettled(tasks);\nconst winner = await Promise.race([fetch(url), timeout(5000)]);" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Promise/all'),
  },
  {
    question: 'How are async and await related to promises?',
    answer:
      'async marks a function as always returning a Promise — explicit return values are wrapped in Promise.resolve.\n\nawait pauses execution inside async functions until a promise settles, then unwraps the value or throws on rejection. await only works inside async functions (or modules/top-level await in modules).\n\nasync/await is syntactic sugar over .then chains — same microtask scheduling. Use try/catch for error handling; Promise.all inside async for concurrency.',
    code: [{ language: 'javascript', snippet: "async function loadUser(id) {\n  try {\n    const res = await fetch(`/api/users/${id}`);\n    if (!res.ok) throw new Error('Not found');\n    return await res.json();\n  } catch (err) {\n    console.error(err);\n    throw err;\n  }\n}" }],
    source: MDN('Web/JavaScript/Reference/Operators/await'),
  },
  {
    question: 'How does error propagation differ between synchronous code, promise chains, and async functions?',
    answer:
      'Synchronous: throw propagates up the call stack until caught by try/catch or becomes uncaught exception.\n\nPromise chains: throw or rejection inside .then becomes rejected promise; must .catch at end or unhandledrejection fires. Re-throw in catch continues rejection downstream.\n\nasync/await: rejected awaited promise throws synchronously inside async function — catch with try/catch around await. Unhandled throw in async function rejects returned promise.\n\nNever forget return await in nested try/catch when you need to catch downstream rejections in the same function.',
    code: [{ language: 'javascript', snippet: "// Sync\ntry { JSON.parse('bad'); } catch (e) { /* handle */ }\n\n// Promise\nPromise.resolve()\n  .then(() => { throw new Error('fail'); })\n  .catch(e => console.error(e));\n\n// async/await\nasync function run() {\n  try { await mightFail(); }\n  catch (e) { /* handle */ }\n}" }],
    source: MDN('Web/JavaScript/Guide/Using_promises#chaining'),
  },
  {
    question: 'What are ES modules, and how do named and default exports differ?',
    answer:
      "ES modules (import/export) are static, file-scoped, strict, and tree-shakeable. Browser and Node (with \"type\": \"module\") support them natively.\n\nNamed export: export const foo = 1; import { foo } from './mod.js' — must match export name (or alias with as).\nDefault export: export default function() {} — import anyName from './mod.js' — one per module.\n\nimport is hoisted and read-only live binding for named exports. CommonJS (require/module.exports) is dynamic and used in older Node code.",
    code: [{ language: 'javascript', snippet: "// utils.js\nexport const PI = 3.14;\nexport default function add(a, b) { return a + b; }\n\n// app.js\nimport add, { PI } from './utils.js';" }],
    source: MDN('Web/JavaScript/Guide/Modules'),
  },
  {
    question: 'What is event delegation, and when is it useful in browser applications?',
    answer:
      'Event delegation attaches one listener to a parent element instead of many on children. Events bubble — the handler checks event.target (or closest()) to identify which child was interacted with.\n\nBenefits: fewer listeners, works for dynamically added elements, lower memory. Useful for tables, lists, menus, and paginated UI in tests.\n\nUse event.target.matches(selector) or e.target.closest("button") for robust delegation. Remember blur/focus do not bubble; use capture phase if needed.',
    code: [{ language: 'javascript', snippet: "document.querySelector('#user-table').addEventListener('click', (e) => {\n  const row = e.target.closest('tr[data-id]');\n  if (!row) return;\n  console.log('Clicked user', row.dataset.id);\n});" }],
    source: MDN('Web/JavaScript/Event_delegation'),
  },
  {
    question: 'What is the difference between debouncing and throttling?',
    answer:
      'Debouncing delays execution until events stop for a wait period — only the last trigger runs. Ideal for search-as-you-type, resize handlers, form validation.\n\nThrottling limits execution to at most once per interval — first (or last) call in window runs. Ideal for scroll, mousemove, rate-limited API polling.\n\nBoth reduce expensive handler frequency. Debounce = wait for pause; throttle = cap frequency.',
    code: [{ language: 'javascript', snippet: "function debounce(fn, ms) {\n  let id;\n  return (...args) => {\n    clearTimeout(id);\n    id = setTimeout(() => fn(...args), ms);\n  };\n}\n\nfunction throttle(fn, ms) {\n  let last = 0;\n  return (...args) => {\n    const now = Date.now();\n    if (now - last >= ms) { last = now; fn(...args); }\n  };\n}" }],
    source: MDN('Web/API/Document/scroll_event'),
  },
  {
    question: 'What are iterators and generators?',
    answer:
      'An iterator is an object with next() returning { value, done }. Iterables (arrays, maps, sets, strings) implement Symbol.iterator.\n\nA generator function function* gen() uses yield to pause and resume, automatically returning an iterator. Generators simplify lazy sequences, infinite streams, and custom iteration.\n\nfor...of consumes iterables. Generators are single-use iterators. Useful for paginated API fetching one page at a time.',
    code: [{ language: 'javascript', snippet: "function* range(start, end) {\n  for (let i = start; i <= end; i++) yield i;\n}\nfor (const n of range(1, 3)) console.log(n);\n\nconst iter = [1, 2][Symbol.iterator]();\niter.next(); // { value: 1, done: false }" }],
    source: MDN('Web/JavaScript/Guide/Iterators_and_generators'),
  },
  {
    question: 'How do Map and Set differ from Object and Array for common lookup and uniqueness tasks?',
    answer:
      'Map: key-value store with any type as key, insertion order, size property, better performance for frequent add/delete. No key stringification like Object.\n\nSet: collection of unique values — add/has/delete are O(1) average. Deduping: [...new Set(arr)].\n\nObject: literal-friendly, JSON-serializable, prototype chain (use Object.create(null) for pure dict). Array: ordered list with index access; includes() for membership is O(n) — Set.has() is O(1).',
    code: [{ language: 'javascript', snippet: "const seen = new Set();\nseen.add('btn-submit');\nseen.has('btn-submit'); // true\n\nconst cache = new Map();\ncache.set(requestKey, response);\ncache.get(requestKey);" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Map'),
  },
]

/* ── Challenging JavaScript (20) ── */
export const challengingQuestions = [
  {
    question: 'Explain the call stack, job queues, and the event loop.',
    answer:
      'The call stack executes synchronous JavaScript — one frame per function call. When empty, the event loop checks job queues.\n\nMacrotask queue (task queue): setTimeout, setInterval, I/O callbacks — one macrotask per loop turn after microtasks drain.\n\nMicrotask queue: promise reactions (.then/catch/finally), queueMicrotask, MutationObserver — entire queue flushed after each macrotask before next macrotask.\n\nPattern: run sync code → drain all microtasks → render (browser) → next macrotask. This explains why promise callbacks run before setTimeout(0).',
    code: [{ language: 'javascript', snippet: "console.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');\n// 1, 4, 3, 2" }],
    source: MDN('Web/JavaScript/Event_loop'),
  },
  {
    question: 'What is the ordering relationship among synchronous code, promise jobs, queueMicrotask(), and timers?',
    answer:
      'Order within one event loop turn:\n\n1. Execute current synchronous call stack to completion.\n2. Drain the microtask queue completely (all promise jobs and queueMicrotask callbacks, including microtasks scheduled by other microtasks).\n3. (Browser) potentially render.\n4. Dequeue and run one macrotask (e.g., setTimeout callback).\n5. Return to step 2.\n\nqueueMicrotask and Promise.then share the microtask queue — FIFO among them. Timers always wait until microtasks after the triggering macrotask finish.',
    code: [{ language: 'javascript', snippet: "queueMicrotask(() => console.log('micro 1'));\nPromise.resolve().then(() => console.log('promise'));\nqueueMicrotask(() => console.log('micro 2'));\nsetTimeout(() => console.log('timer'), 0);\n// micro 1, promise, micro 2, then timer (after sync)" }],
    source: MDN('Web/API/Window/queueMicrotask'),
  },
  {
    question: 'Predict and explain the output of code that mixes Promise.then(), async/await, and setTimeout().',
    answer:
      'Rule: synchronous first, then all microtasks (promises/async continuations), then macrotasks (timers).\n\nasync function body runs synchronously until first await; awaited promise resolution schedules microtask. .then callbacks are microtasks. setTimeout is macrotask.\n\nClassic trap: async IIFE starts, hits await, resumes later as microtask; nested .then chains enqueue in order; setTimeout always after microtask drain of current turn.',
    code: [{ language: 'javascript', snippet: "console.log('A');\nsetTimeout(() => console.log('B'), 0);\n(async () => {\n  console.log('C');\n  await Promise.resolve();\n  console.log('D');\n})();\nPromise.resolve().then(() => console.log('E'));\nconsole.log('F');\n// A, C, F, D, E, B" }],
    source: MDN('Web/JavaScript/Event_loop'),
  },
  {
    question: 'Why can a long-running JavaScript callback make an application unresponsive even though asynchronous APIs are used?',
    answer:
      'Async APIs only offload waiting (network, disk) — their completion callbacks still run on the main thread. Any CPU-heavy synchronous work (large JSON parse, tight loop, DOM thrashing, complex regex on big strings) blocks the call stack.\n\nWhile blocked: UI cannot repaint, clicks queue up, animations freeze, promise microtasks and timers wait. fetch is async; processing 50MB response synchronously is not.\n\nFix: chunk work (requestAnimationFrame, setTimeout(0) slices), Web Workers for CPU work, virtualize large lists, profile with Performance tab.',
    source: MDN('Web/API/Web_Workers_API/Using_web_workers'),
  },
  {
    question: 'How do closures accidentally retain memory, and how would you investigate such a leak?',
    answer:
      'Closures keep references to outer variables alive. Common leaks:\n\n1. Event listeners holding DOM nodes in closures without removeEventListener\n2. Caches (Map) growing without eviction\n3. Timers/intervals capturing large state\n4. Detached DOM trees still referenced from JS\n\nInvestigation: Chrome DevTools Memory — heap snapshot diff, "Retainers" view tracing closure → object chain. Performance monitor for growing DOM node count. Fix: null references, WeakMap for caches, AbortController to cancel fetch, remove listeners on teardown.',
    source: MDN('Web/JavaScript/Guide/Closures'),
  },
  {
    question: 'Explain property descriptors and the differences among writable, enumerable, and configurable.',
    answer:
      'Every property has a descriptor from Object.getOwnPropertyDescriptor:\n\nvalue + writable — data property; writable false prevents value changes.\nget + set — accessor property.\nenumerable — if true, appears in for...in and Object.keys.\nconfigurable — if false, cannot delete or change descriptor (except writable true→false).\n\nObject.defineProperty sets descriptors. Array indices are enumerable by default; most built-in methods are non-enumerable. Frameworks use symbols/non-enumerable props to avoid iteration pollution.',
    code: [{ language: 'javascript', snippet: "const obj = {};\nObject.defineProperty(obj, 'id', {\n  value: 1,\n  writable: false,\n  enumerable: true,\n  configurable: false,\n});\n// obj.id = 2; // fails in strict mode" }],
    source: MDN('Web/JavaScript/Guide/Working_with_objects#defining_properties'),
  },
  {
    question: 'How do getters, setters, Proxy, and Reflect differ as metaprogramming tools?',
    answer:
      'Getters/setters (Object.defineProperty or class syntax) intercept access on specific properties — validation, computed values, lazy init.\n\nProxy wraps an object — trap handlers (get, set, has, deleteProperty) intercept many operations on the whole target. Powerful but no transparent this binding in methods.\n\nReflect provides forwarding methods matching Proxy traps (Reflect.get, Reflect.set) — used inside traps for default behavior.\n\nUse getters/setters for API ergonomics; Proxy for logging, reactivity (Vue 3), immutable wrappers; Reflect as Proxy companion.',
    code: [{ language: 'javascript', snippet: "const proxy = new Proxy(target, {\n  get(t, key, recv) {\n    console.log('get', key);\n    return Reflect.get(t, key, recv);\n  },\n});" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Proxy'),
  },
  {
    question: 'Explain the prototype lookup algorithm and the effects of changing an object\'s prototype at runtime.',
    answer:
      'Property lookup: check own property on object → if missing, follow [[Prototype]] → repeat until null → undefined if not found.\n\nAssignment (obj.x = 1): if own or prototype writable property exists on chain, set on that object; else create own property on original object (shadowing).\n\nObject.setPrototypeOf(obj, proto) mutates [[Prototype]] at runtime — slow on hot paths (deoptimizes JIT). Changing constructor.prototype affects future instances, not existing ones unless their [[Prototype]] pointed there.',
    code: [{ language: 'javascript', snippet: "const base = { greet() { return 'hi'; } };\nconst obj = Object.create(base);\nconsole.log(obj.greet()); // 'hi' via prototype\nObject.setPrototypeOf(obj, { greet() { return 'hello'; } });\nconsole.log(obj.greet()); // 'hello'" }],
    source: MDN('Web/JavaScript/Inheritance_and_the_prototype_chain'),
  },
  {
    question: 'What is the difference between SameValue, SameValueZero, strict equality, and loose equality?',
    answer:
      'Loose equality (==) applies type coercion then compares.\n\nStrict equality (===) uses SameValue: no coercion; NaN !== NaN; +0 === -0.\n\nSameValueZero: like SameValue except +0 and -0 are equal; NaN still not equal to NaN. Used by Map/Set key lookup.\n\nObject.is(): SameValue — distinguishes +0/-0, treats NaN equal to NaN.\n\nMap.set(NaN, 1); Map.get(NaN) works via SameValueZero. Use Object.is for NaN checks; === otherwise.',
    code: [{ language: 'javascript', snippet: "Object.is(NaN, NaN);        // true\nNaN === NaN;                 // false\nObject.is(+0, -0);           // false\n+0 === -0;                   // true\n\nconst m = new Map();\nm.set(NaN, 'ok');\nm.get(NaN); // 'ok'" }],
    source: MDN('Web/JavaScript/Equality_comparisons_and_sameness'),
  },
  {
    question: 'Why can instanceof fail across realms, and when is Array.isArray() safer?',
    answer:
      'instanceof checks whether Constructor.prototype appears anywhere on object\'s prototype chain. Each iframe/window/realm has its own global — Array from realm A !== Array from realm B.\n\nAn array from an iframe fails value instanceof Array in parent window.\n\nArray.isArray(value) uses internal [[Class]] tag — realm-independent. Prefer Array.isArray for cross-frame tests and serialized/rehydrated data. instanceof still useful for custom class instances in same realm.',
    code: [{ language: 'javascript', snippet: "// Same realm\n[] instanceof Array;     // true\nArray.isArray([]);      // true\n\n// Cross-realm (conceptual)\n// iframeArray instanceof window.Array; // often false\nArray.isArray(iframeArray);            // true" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Array/isArray'),
  },
  {
    question: 'What are common problems with floating-point arithmetic, and how would you handle money accurately?',
    answer:
      'IEEE 754 doubles cannot represent all decimals exactly: 0.1 + 0.2 === 0.3 is false (0.30000000000000004). Accumulated rounding breaks financial calculations.\n\nMitigations:\n1. Integer minor units — store cents as integers (1999 = $19.99)\n2. Decimal libraries — decimal.js, big.js\n3. BigInt for whole minor units at scale\n4. Round at display boundaries with explicit policy (bankers rounding)\n\nNever use raw float equality for money — compare with tolerance or use integers.',
    code: [{ language: 'javascript', snippet: "0.1 + 0.2; // 0.30000000000000004\n\nconst cents = 1999;\nconst display = (cents / 100).toFixed(2); // '19.99'\n\n// Or: (0.1 * 10 + 0.2 * 10) / 10 with integer math" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Number/EPSILON'),
  },
  {
    question: 'How do AbortController and AbortSignal support cancellation in asynchronous workflows?',
    answer:
      'AbortController creates an AbortSignal via controller.signal. Pass signal to fetch, streams, or custom async APIs. controller.abort(reason) sets signal.aborted and fires abort event.\n\nListeners check signal.aborted or use signal.throwIfAborted(). Combine with Promise.race for timeout patterns. One controller per operation; AbortSignal.timeout(ms) (modern) creates timed signals.\n\nEssential for cancelling in-flight requests on route change, test teardown, or user cancel — prevents leaks and stale UI updates.',
    code: [{ language: 'javascript', snippet: "const controller = new AbortController();\nconst { signal } = controller;\n\nconst req = fetch('/api/data', { signal });\n\ncontroller.abort('User cancelled');\n// req rejects with AbortError" }],
    source: MDN('Web/API/AbortController'),
  },
  {
    question: 'How would you limit concurrency when processing thousands of promise-returning tasks?',
    answer:
      'Promise.all on thousands of tasks spawns all at once — exhausts sockets, memory, and rate limits. Use a concurrency pool:\n\nMaintain active count ≤ limit. Queue remaining tasks. On each settlement, dequeue next task. Implement with async pool function, p-limit library, or manual worker loop.\n\nPattern: async function pool(limit, tasks, fn) with semaphore. For batch E2E API checks: concurrency 5–10, retry failed, aggregate results.',
    code: [{ language: 'javascript', snippet: "async function mapPool(items, limit, worker) {\n  const ret = [];\n  const executing = new Set();\n  for (const [i, item] of items.entries()) {\n    const p = Promise.resolve().then(() => worker(item, i));\n    ret.push(p);\n    executing.add(p);\n    const clean = () => executing.delete(p);\n    p.then(clean, clean);\n    if (executing.size >= limit) await Promise.race(executing);\n  }\n  return Promise.all(ret);\n}" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Promise'),
  },
  {
    question: 'How would you implement retries with exponential backoff, jitter, cancellation, and a maximum attempt limit?',
    answer:
      'Retry loop: attempt work, on failure wait delay then retry until maxAttempts. Exponential backoff: delay = base * 2^attempt. Jitter: delay += random(0, jitter) to avoid thundering herd.\n\nRespect AbortSignal — abort between attempts. Retry only transient errors (network, 429, 503), not 4xx client errors.\n\nReturn last error after exhaustion. Log attempt count for observability.',
    code: [{ language: 'javascript', snippet: "async function retry(fn, { max = 5, base = 200, signal } = {}) {\n  let attempt = 0;\n  while (attempt < max) {\n    signal?.throwIfAborted();\n    try { return await fn(attempt); }\n    catch (err) {\n      attempt++;\n      if (attempt >= max) throw err;\n      const jitter = Math.random() * base;\n      const delay = base * 2 ** (attempt - 1) + jitter;\n      await new Promise((r, t) => {\n        const id = setTimeout(r, delay);\n        signal?.addEventListener('abort', () => { clearTimeout(id); t(signal.reason); });\n      });\n    }\n  }\n}" }],
    source: MDN('Web/API/AbortSignal'),
  },
  {
    question: 'What race conditions can occur in a single-threaded JavaScript application?',
    answer:
      'Single-threaded means no parallel memory access, but async interleaving still causes races:\n\n1. Check-then-act — if (!cache) cache = await fetch() — two callers both miss and duplicate fetch\n2. Stale closures — event handler uses old state after rapid updates\n3. Out-of-order responses — slower request overwrites newer data\n4. Shared mutable module state across parallel async flows\n5. DOM read/write interleaving with async gaps causing inconsistent UI\n\nFix: dedupe in-flight requests, version tokens on responses, functional state updates, mutex-like promise chains for critical sections.',
    source: MDN('Web/JavaScript/Event_loop'),
  },
  {
    question: 'How do Web Workers or worker threads change JavaScript\'s concurrency model?',
    answer:
      'Web Workers run JavaScript on separate threads with no shared DOM access. Communication via postMessage / onmessage (structured clone) or Transferable objects.\n\nWorker threads (Node.js worker_threads) share memory optionally via SharedArrayBuffer with Atomics.\n\nMain thread stays responsive for UI; workers handle parsing, crypto, image processing. Cost: serialization overhead, no direct DOM — coordinate results back to main. Service Workers add offline/network intercept layer.',
    source: MDN('Web/API/Web_Workers_API/Using_web_workers'),
  },
  {
    question: 'What are SharedArrayBuffer and Atomics, and what risks arise when sharing memory?',
    answer:
      'SharedArrayBuffer (SAB) is fixed-length raw binary buffer shared across workers — true shared memory. Atomics provide atomic read-modify-write (add, compareExchange, wait/notify) for safe coordination without locks in some patterns.\n\nRisks: data races if reads/writes lack synchronization — torn reads, corrupted state. Spectre/Meltdown led browsers to require cross-origin isolation (COOP/COEP headers) for SAB.\n\nPrefer message passing unless profiling proves need. When using SAB, design clear memory layout and use Atomics or locks.',
    source: MDN('Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer'),
  },
  {
    question: 'How do circular ES module dependencies behave, and how can initialization order cause failures?',
    answer:
      'Modules A imports B, B imports A — cycles are allowed. ES modules create live bindings. During evaluation, module bodies run depth-first; exports exist but may be in temporal dead zone (uninitialized) when cycle partner reads them during top-level execution.\n\nFailure mode: const fn = () => helper(); where helper from cycle is undefined at module init time.\n\nFix: defer access to runtime (functions called after all modules evaluated), move shared API to third module, or use dynamic import() to break cycle. Avoid top-level side effects that depend on cyclic imports.',
    code: [{ language: 'javascript', snippet: "// a.js\nimport { b } from './b.js';\nexport const a = 'a' + (b ?? '');\n\n// b.js\nimport { a } from './a.js';\nexport const b = 'b';\n// `a` may throw or be partial during init — defer reads" }],
    source: MDN('Web/JavaScript/Guide/Modules#cyclic_imports'),
  },
  {
    question: 'How would you design a deep-clone utility, and which values make general-purpose cloning difficult?',
    answer:
      'Approach: recursive walk with WeakMap for cycle detection (map original → clone). Branch on type: Date, RegExp, Map, Set, Array, plain Object, typed arrays. Copy prototype chain or treat as plain object per policy.\n\nHard cases: functions (usually copy by reference), symbols as keys, DOM nodes, window objects, class instances with private fields, properties with getters with side effects, prototypes with custom behavior.\n\nstructuredClone() handles many built-ins and cycles but not functions. JSON clone loses types. Document what your clone supports.',
    code: [{ language: 'javascript', snippet: "function deepClone(val, seen = new WeakMap()) {\n  if (val === null || typeof val !== 'object') return val;\n  if (seen.has(val)) return seen.get(val);\n  if (val instanceof Date) return new Date(val);\n  if (val instanceof Map) {\n    const c = new Map();\n    seen.set(val, c);\n    val.forEach((v, k) => c.set(deepClone(k, seen), deepClone(v, seen)));\n    return c;\n  }\n  const c = Array.isArray(val) ? [] : {};\n  seen.set(val, c);\n  for (const k of Reflect.ownKeys(val)) {\n    c[k] = deepClone(val[k], seen);\n  }\n  return c;\n}" }],
    source: MDN('Web/API/Web_Workers_API/Structured_clone_algorithm'),
  },
  {
    question: 'Design a cache for asynchronous requests that deduplicates in-flight work, expires results, and avoids caching failures.',
    answer:
      'Data structure: Map<key, { promise, expiresAt, status }>.\n\nOn get(key):\n1. If valid cached fulfilled entry (now < expiresAt), return resolved value.\n2. If in-flight promise exists for key, return same promise (dedupe).\n3. Else start fetch, store promise immediately, on success set expiresAt = now + TTL and store value; on failure delete entry (do not cache errors) and rethrow.\n\nOptional: stale-while-revalidate, max size with LRU eviction, AbortSignal per key for invalidation. Key = serialized URL + params.',
    code: [{ language: 'javascript', snippet: "function createCache({ ttl = 60_000 } = {}) {\n  const store = new Map();\n  return function cached(key, fetcher) {\n    const hit = store.get(key);\n    if (hit?.value && hit.expires > Date.now()) return Promise.resolve(hit.value);\n    if (hit?.promise) return hit.promise;\n    const promise = fetcher()\n      .then(v => { store.set(key, { value: v, expires: Date.now() + ttl }); return v; })\n      .catch(e => { store.delete(key); throw e; });\n    store.set(key, { promise });\n    return promise;\n  };\n}" }],
    source: MDN('Web/JavaScript/Reference/Global_Objects/Promise'),
  },
]

const GFG = (path) => ({
  name: 'GeeksForGeeks',
  url: `https://www.geeksforgeeks.org/${path}/`,
})

const TUTORIALS = (path) => ({
  name: 'TutorialsPoint',
  url: `https://www.tutorialspoint.com/${path}`,
})

/* ── Basic Python (26) ── */
export const basicQuestions = [
  {
    question: 'Difference between list, tuple, set, dictionary.',
    answer:
      'List: ordered, mutable, allows duplicates, uses []. Tuple: ordered, immutable, allows duplicates, uses (). Set: unordered, mutable, no duplicates, uses {}. Dictionary: ordered (Py3.7+), mutable key-value pairs, keys unique, uses {key: val}.\n\nUse lists for sequences you modify, tuples for fixed records, sets for unique collections/membership tests, dicts for labeled data.',
    source: GFG('python-list-vs-tuple-vs-dict-vs-set'),
  },
  {
    question: 'Mutable vs immutable objects.',
    answer:
      'Mutable objects can be changed in-place after creation (list, dict, set, bytearray). Immutable objects cannot be changed — a new object is created on modification (int, float, str, tuple, frozenset, bytes).\n\nImmutability makes objects hashable (usable as dict keys) and safer to share across threads.',
    source: GFG('mutable-vs-immutable-in-python'),
  },
  {
    question: 'What is slicing?',
    answer:
      'Slicing extracts a sub-sequence using [start:stop:step]. start is inclusive, stop is exclusive, step controls increment. Omitting start defaults to 0, omitting stop defaults to end, omitting step defaults to 1.\n\nWorks on strings, lists, tuples. Negative indices count from the end. [::−1] reverses a sequence.',
    code: [{ language: 'python', snippet: "s = 'Interview'\nprint(s[0:5])    # Inter\nprint(s[::-1])   # weivretnI\nprint([1,2,3,4][1:3])  # [2, 3]" }],
    source: GFG('python-list-slicing'),
  },
  {
    question: 'Difference between append() and extend().',
    answer:
      'append(x) adds a single element to the end of the list (even if x is a list, it becomes one nested element). extend(iterable) adds each element from the iterable individually.\n\nExample: [1,2].append([3,4]) → [1,2,[3,4]]. [1,2].extend([3,4]) → [1,2,3,4].',
    code: [{ language: 'python', snippet: "a = [1, 2]\na.append([3, 4])   # [1, 2, [3, 4]]\n\nb = [1, 2]\nb.extend([3, 4])   # [1, 2, 3, 4]" }],
    source: GFG('append-extend-python'),
  },
  {
    question: 'What is unpacking?',
    answer:
      'Unpacking assigns elements of an iterable to multiple variables in one statement. Tuple unpacking: a, b, c = [1, 2, 3]. The * operator collects remaining items: first, *rest = [1, 2, 3, 4]. ** unpacks dictionaries into keyword arguments.\n\nCommonly used to swap variables: a, b = b, a.',
    code: [{ language: 'python', snippet: "a, b, c = (10, 20, 30)\nfirst, *middle, last = [1, 2, 3, 4, 5]\n# first=1, middle=[2,3,4], last=5" }],
    source: GFG('packing-unpacking-python'),
  },
  {
    question: 'Difference between deep copy and shallow copy.',
    answer:
      'Shallow copy creates a new object but references nested objects inside the original (copy.copy() or list slicing). Changes to nested objects affect both copies.\n\nDeep copy recursively copies all nested objects, creating fully independent copies (copy.deepcopy()). Use deep copy when nested mutability matters.',
    code: [{ language: 'python', snippet: "import copy\noriginal = [[1, 2], [3, 4]]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)\nshallow[0][0] = 99  # also changes original[0][0]\ndeep[0][0] = 99     # original unchanged" }],
    source: GFG('copy-python'),
  },
  {
    question: 'What are lambda functions?',
    answer:
      'A lambda is an anonymous one-expression function: lambda args: expression. Used for short throwaway functions, often with map(), filter(), sorted(key=...).\n\nLimitations: single expression only, no statements, no annotations. For complex logic, use def instead.',
    code: [{ language: 'python', snippet: "square = lambda x: x ** 2\nnums = [3, 1, 4]\nsorted(nums, key=lambda x: -x)  # [4, 3, 1]" }],
    source: GFG('python-lambda-anonymous-functions'),
  },
  {
    question: 'What are decorators?',
    answer:
      'A decorator is a function that wraps another function (or class) to extend its behavior without modifying its source. Syntax @decorator above def is shorthand for func = decorator(func).\n\nCommon uses: logging, timing, authentication, retry logic, and pytest fixtures.',
    code: [{ language: 'python', snippet: "def log_calls(fn):\n    def wrapper(*args, **kwargs):\n        print(f'Calling {fn.__name__}')\n        return fn(*args, **kwargs)\n    return wrapper\n\n@log_calls\ndef greet(name):\n    return f'Hello {name}'" }],
    source: GFG('decorators-in-python'),
  },
  {
    question: 'What are generators?',
    answer:
      'Generators produce values lazily using yield instead of return, pausing execution and resuming on next(). Created with generator functions or generator expressions (x*2 for x in range(5)).\n\nMemory-efficient for large datasets — values generated one at a time, not stored all at once.',
    code: [{ language: 'python', snippet: "def count_up_to(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\nfor num in count_up_to(3):\n    print(num)  # 1, 2, 3" }],
    source: GFG('generators-in-python'),
  },
  {
    question: 'Difference between is and ==.',
    answer:
      '== compares values (equality). is compares object identity (same memory address).\n\nUse == for value comparison. Use is only for singletons like None, True, False. Two lists with same content are == but not is. Small integers (−5 to 256) may be cached and appear identical with is.',
    code: [{ language: 'python', snippet: "a = [1, 2]\nb = [1, 2]\nprint(a == b)  # True\nprint(a is b)  # False\n\nx = None\nprint(x is None)  # True — preferred over x == None" }],
    source: GFG('difference-between-is-and-in-python'),
  },
  {
    question: 'Explain *args and **kwargs.',
    answer:
      '*args collects extra positional arguments as a tuple. **kwargs collects extra keyword arguments as a dictionary. Names are convention — only * and ** matter.\n\nUsed in functions that accept variable arguments and when forwarding args to another function.',
    code: [{ language: 'python', snippet: "def demo(a, *args, **kwargs):\n    print(a, args, kwargs)\n\ndemo(1, 2, 3, x=10, y=20)\n# 1 (2, 3) {'x': 10, 'y': 20}" }],
    source: GFG('args-kwargs-python'),
  },
  {
    question: 'What is list comprehension?',
    answer:
      'List comprehension creates a list in a single concise line: [expression for item in iterable if condition]. Faster and more readable than equivalent for-loop + append for simple transforms.\n\nDict and set comprehensions use similar syntax with {} or {key: val}.',
    code: [{ language: 'python', snippet: "squares = [x**2 for x in range(6)]\nevens = [x for x in range(10) if x % 2 == 0]\nword_lens = {w: len(w) for w in ['hi', 'hello']}" }],
    source: GFG('list-comprehension-in-python'),
  },
  {
    question: 'What is exception handling?',
    answer:
      'Exception handling manages runtime errors gracefully using try, except, else, finally. try runs risky code; except catches specific exceptions; else runs if no exception; finally always runs (cleanup).\n\nAlways catch specific exceptions, not bare except. Use raise to re-throw or custom exceptions.',
    code: [{ language: 'python', snippet: "try:\n    result = 10 / int(input_val)\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nexcept ValueError:\n    print('Invalid number')\nfinally:\n    print('Done')" }],
    source: GFG('python-exception-handling'),
  },
  {
    question: 'Difference between compile-time and runtime errors.',
    answer:
      'Python is interpreted — compile-time errors occur before execution: SyntaxError, IndentationError (parser cannot understand code). Runtime errors occur during execution: TypeError, ValueError, ZeroDivisionError, IndexError.\n\nPython has no traditional compile step like C++; "compile-time" here means parse/bytecode-compile phase before the code runs.',
    source: GFG('errors-python'),
  },
  {
    question: 'Explain Python memory management.',
    answer:
      'Python uses private heap memory managed by the Python memory manager. Key mechanisms:\n\n1. Reference counting — object deleted when count hits 0.\n2. Garbage collector — detects and breaks reference cycles.\n3. Memory pools — small object allocator (pymalloc) for efficiency.\n\nObjects are accessed via references; assignment never copies data unless explicitly copied.',
    source: GFG('memory-management-in-python'),
  },
  {
    question: 'What are modules and packages?',
    answer:
      'A module is a single .py file containing reusable code. A package is a directory of modules with __init__.py, allowing hierarchical imports (e.g., os.path).\n\nImport with import module or from package import module. Python searches sys.path for modules.',
    source: GFG('python-modules'),
  },
  {
    question: 'What is __init__.py?',
    answer:
      '__init__.py marks a directory as a Python package (Py3.3+ namespace packages can omit it, but it is still best practice). It runs on package import and can initialize package-level variables or expose a public API via __all__.\n\nCan be empty — its presence alone tells Python to treat the folder as a package.',
    source: GFG('python-package-init-py-file'),
  },
  {
    question: 'Explain OOP concepts in Python.',
    answer:
      'Python supports Object-Oriented Programming with four pillars:\n\n1. Encapsulation — bundling data + methods, hiding internals.\n2. Inheritance — child class inherits parent attributes/methods.\n3. Polymorphism — same interface, different implementations.\n4. Abstraction — hiding complexity, exposing essentials.\n\nEverything in Python is an object, including functions and classes.',
    source: GFG('object-oriented-programming-oops-concept-in-python'),
  },
  {
    question: 'Method overloading vs overriding.',
    answer:
      'Overriding: subclass provides its own implementation of a parent method with the same name — resolved at runtime (polymorphism).\n\nOverloading: multiple methods with same name but different parameters. Python does NOT support traditional overloading — last def wins. Simulate with default args or @functools.singledispatch.',
    code: [{ language: 'python', snippet: "class Animal:\n    def speak(self):\n        return '...'\n\nclass Dog(Animal):\n    def speak(self):  # overriding\n        return 'Woof'" }],
    source: GFG('method-overloading-vs-method-overriding-in-python'),
  },
  {
    question: 'What is inheritance?',
    answer:
      'Inheritance lets a child class (derived) acquire attributes and methods from a parent class (base). Syntax: class Child(Parent). Supports code reuse and is-a relationships.\n\nPython supports single, multilevel, hierarchical, and multiple inheritance. Use super() to call parent methods.',
    code: [{ language: 'python', snippet: "class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Employee(Person):\n    def __init__(self, name, emp_id):\n        super().__init__(name)\n        self.emp_id = emp_id" }],
    source: GFG('inheritance-in-python'),
  },
  {
    question: 'Multiple inheritance in Python?',
    answer:
      'A class can inherit from multiple parents: class Child(A, B). Python resolves method lookup using MRO (C3 linearization) — visible via ClassName.__mro__ or mro().\n\nDiamond problem is handled by MRO order. Mixins are a common pattern for adding behavior without deep hierarchies.',
    code: [{ language: 'python', snippet: "class A:\n    def show(self): return 'A'\nclass B:\n    def show(self): return 'B'\nclass C(A, B): pass\n\nprint(C().show())       # A\nprint(C.__mro__)        # method resolution order" }],
    source: GFG('multiple-inheritance-in-python'),
  },
  {
    question: 'What is polymorphism?',
    answer:
      'Polymorphism means "many forms" — same method name behaves differently based on the object. Python achieves this via duck typing (if it walks and quacks...) and method overriding.\n\nExample: len() works on str, list, dict. Different classes implement __len__ differently.',
    source: GFG('polymorphism-in-python'),
  },
  {
    question: 'Static method vs class method vs instance method.',
    answer:
      'Instance method: first param is self, operates on instance data.\n\nClass method (@classmethod): first param is cls, operates on class-level data, can be used as alternative constructors.\n\nStatic method (@staticmethod): no self/cls, behaves like a plain function inside the class namespace — utility functions related to the class.',
    code: [{ language: 'python', snippet: "class Demo:\n    count = 0\n    def inst(self): return 'instance'\n    @classmethod\n    def cls_method(cls): return cls.count\n    @staticmethod\n    def util(x, y): return x + y" }],
    source: GFG('difference-between-static-method-class-method-and-instance-method-in-python'),
  },
  {
    question: 'What is encapsulation?',
    answer:
      'Encapsulation bundles data (attributes) and methods that operate on it into a class, restricting direct access to internals. Python uses naming conventions: _single underscore (internal use), __double underscore (name mangling to _ClassName__attr).\n\nUse @property for controlled getter/setter access without breaking the interface.',
    source: GFG('encapsulation-in-python'),
  },
  {
    question: 'What is abstraction?',
    answer:
      'Abstraction hides complex implementation details and exposes only essential features. In Python, achieved via abstract base classes (abc module) and interfaces.\n\n@abstractmethod forces subclasses to implement specific methods — you cannot instantiate the abstract class directly.',
    code: [{ language: 'python', snippet: "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def area(self):\n        return 3.14 * self.r ** 2" }],
    source: GFG('abstract-classes-in-python'),
  },
  {
    question: 'Explain MRO (Method Resolution Order).',
    answer:
      'MRO is the order Python searches base classes when resolving a method. Calculated using C3 linearization algorithm. View with ClassName.mro() or ClassName.__mro__.\n\nCritical in multiple inheritance — ensures predictable, consistent method lookup. super() follows MRO, not just the direct parent.',
    code: [{ language: 'python', snippet: "class A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass\n\nprint(D.__mro__)\n# D, B, C, A, object" }],
    source: GFG('method-resolution-order-in-python-inheritance'),
  },
]

/* ── Python Coding (23) ── */
export const codingQuestions = [
  {
    question: 'Reverse a string.',
    answer: 'Slice with step −1 is the Pythonic approach. Also works with reversed() + join for readability.',
    code: [{ language: 'python', snippet: "s = 'hello'\nprint(s[::-1])              # olleh\nprint(''.join(reversed(s))) # olleh" }],
    source: GFG('python-program-to-reverse-a-string'),
  },
  {
    question: 'Reverse a number.',
    answer: 'Extract digits using modulo and build the reversed integer. Handle negative numbers by preserving sign.',
    code: [{ language: 'python', snippet: "def reverse_number(n):\n    sign = -1 if n < 0 else 1\n    n = abs(n)\n    rev = 0\n    while n:\n        rev = rev * 10 + n % 10\n        n //= 10\n    return sign * rev\n\nprint(reverse_number(12345))  # 54321" }],
    source: GFG('python-program-to-reverse-a-number'),
  },
  {
    question: 'Palindrome program.',
    answer: 'A palindrome reads the same forwards and backwards. Compare string with its reverse, or use two-pointer approach.',
    code: [{ language: 'python', snippet: "def is_palindrome(s):\n    s = s.lower().replace(' ', '')\n    return s == s[::-1]\n\nprint(is_palindrome('madam'))  # True\nprint(is_palindrome('hello'))  # False" }],
    source: GFG('python-program-to-check-if-a-string-is-palindrome-or-not'),
  },
  {
    question: 'Prime number check.',
    answer: 'A prime is divisible only by 1 and itself. Check divisibility up to √n for efficiency.',
    code: [{ language: 'python', snippet: "def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nprint(is_prime(17))  # True" }],
    source: GFG('python-program-to-check-whether-a-number-is-prime-or-not'),
  },
  {
    question: 'Fibonacci series.',
    answer: 'Each number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8... Generate iteratively or recursively (with memoization for large n).',
    code: [{ language: 'python', snippet: "def fib(n):\n    a, b = 0, 1\n    result = []\n    for _ in range(n):\n        result.append(a)\n        a, b = b, a + b\n    return result\n\nprint(fib(8))  # [0, 1, 1, 2, 3, 5, 8, 13]" }],
    source: GFG('python-program-for-nth-fibonacci-number'),
  },
  {
    question: 'Factorial.',
    answer: 'Factorial of n (n!) = n × (n−1) × ... × 1. Use loop or math.factorial(). 0! = 1 by definition.',
    code: [{ language: 'python', snippet: "def factorial(n):\n    result = 1\n    for i in range(2, n + 1):\n        result *= i\n    return result\n\nprint(factorial(5))  # 120" }],
    source: GFG('python-program-to-find-factorial-of-a-number'),
  },
  {
    question: 'Armstrong number.',
    answer: 'An Armstrong number equals the sum of its digits each raised to the power of the number of digits. Example: 153 = 1³ + 5³ + 3³.',
    code: [{ language: 'python', snippet: "def is_armstrong(n):\n    s = str(n)\n    power = len(s)\n    return n == sum(int(d) ** power for d in s)\n\nprint(is_armstrong(153))   # True\nprint(is_armstrong(123))   # False" }],
    source: GFG('python-program-to-check-armstrong-number'),
  },
  {
    question: 'Anagram check.',
    answer: 'Two strings are anagrams if they contain the same characters in the same frequency. Sort both strings and compare, or use Counter.',
    code: [{ language: 'python', snippet: "from collections import Counter\n\ndef is_anagram(a, b):\n    return Counter(a.lower()) == Counter(b.lower())\n\nprint(is_anagram('listen', 'silent'))  # True" }],
    source: GFG('python-program-to-check-if-two-strings-are-anagram-or-not'),
  },
  {
    question: 'Count vowels in string.',
    answer: 'Iterate through the string and count characters in the vowel set a, e, i, o, u (case-insensitive).',
    code: [{ language: 'python', snippet: "def count_vowels(s):\n    vowels = 'aeiouAEIOU'\n    return sum(1 for c in s if c in vowels)\n\nprint(count_vowels('Interview Prep'))  # 5" }],
    source: GFG('python-program-to-count-vowels-in-a-string'),
  },
  {
    question: 'Find duplicate characters.',
    answer: 'Use a dictionary or Counter to track character frequency. Characters with count > 1 are duplicates.',
    code: [{ language: 'python', snippet: "from collections import Counter\n\ndef duplicates(s):\n    counts = Counter(s)\n    return {ch: cnt for ch, cnt in counts.items() if cnt > 1}\n\nprint(duplicates('programming'))  # {'r': 2, 'g': 2, 'm': 2}" }],
    source: GFG('python-program-to-find-duplicates-in-a-string'),
  },
  {
    question: 'Remove duplicates from list.',
    answer: 'Convert to set (loses order) or use dict.fromkeys() (preserves insertion order in Py3.7+). List comprehension with seen set also works.',
    code: [{ language: 'python', snippet: "nums = [1, 2, 2, 3, 1, 4]\nunique = list(dict.fromkeys(nums))\nprint(unique)  # [1, 2, 3, 4]" }],
    source: GFG('python-remove-duplicates-from-a-list'),
  },
  {
    question: 'Find largest/smallest element.',
    answer: 'Use built-in max() and min(), or iterate manually. For empty lists, handle ValueError.',
    code: [{ language: 'python', snippet: "nums = [3, 7, 2, 9, 1]\nprint(max(nums))  # 9\nprint(min(nums))  # 1\n\n# manual\nlargest = nums[0]\nfor n in nums:\n    if n > largest:\n        largest = n" }],
    source: GFG('python-program-to-find-largest-and-smallest-element-in-an-array'),
  },
  {
    question: 'Sort list without using sort().',
    answer: 'Implement bubble sort, selection sort, or insertion sort. Bubble sort repeatedly swaps adjacent out-of-order elements.',
    code: [{ language: 'python', snippet: "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nprint(bubble_sort([5, 3, 1, 4, 2]))" }],
    source: GFG('bubble-sort-in-python'),
  },
  {
    question: 'Swap two numbers.',
    answer: 'Python allows tuple unpacking swap without a temp variable: a, b = b, a. Also works with arithmetic or XOR (not recommended in Python).',
    code: [{ language: 'python', snippet: "a, b = 10, 20\na, b = b, a\nprint(a, b)  # 20 10" }],
    source: GFG('python-program-to-swap-two-numbers'),
  },
  {
    question: 'Count frequency of characters.',
    answer: 'Use collections.Counter for a one-liner, or a dict with get/chars as keys.',
    code: [{ language: 'python', snippet: "from collections import Counter\n\nfreq = Counter('mississippi')\nprint(dict(freq))  # {'m': 1, 'i': 4, 's': 4, 'p': 2}" }],
    source: GFG('python-program-to-count-the-characters-frequency-in-a-string'),
  },
  {
    question: 'Find missing number in array.',
    answer: 'Given n distinct numbers from 1 to n+1, one is missing. Use sum formula: expected = n*(n+1)/2, subtract actual sum. Or XOR all indices and values.',
    code: [{ language: 'python', snippet: "def missing_number(nums):\n    n = len(nums)\n    expected = n * (n + 1) // 2\n    return expected - sum(nums)\n\nprint(missing_number([1, 2, 4, 5, 6]))  # 3" }],
    source: GFG('find-the-missing-number-in-python'),
  },
  {
    question: 'Merge two lists.',
    answer: 'Use + operator, extend(), or list unpacking [*a, *b]. For sorted merge (merge step of merge sort), use two pointers.',
    code: [{ language: 'python', snippet: "a = [1, 3, 5]\nb = [2, 4, 6]\nmerged = a + b\nprint(merged)  # [1, 3, 5, 2, 4, 6]\n\n# sorted merge\ni, j = 0, 0\nresult = []\nwhile i < len(a) and j < len(b):\n    if a[i] <= b[j]:\n        result.append(a[i]); i += 1\n    else:\n        result.append(b[j]); j += 1\nresult += a[i:] + b[j:]" }],
    source: GFG('python-program-to-merge-two-sorted-arrays'),
  },
  {
    question: 'Find second largest number.',
    answer: 'Sort and pick second element, or track largest and second_largest in one pass (more efficient).',
    code: [{ language: 'python', snippet: "def second_largest(nums):\n    unique = sorted(set(nums), reverse=True)\n    return unique[1] if len(unique) >= 2 else None\n\nprint(second_largest([10, 5, 20, 8, 20]))  # 10" }],
    source: GFG('python-program-to-find-second-largest-number-in-a-list'),
  },
  {
    question: 'Check if number is perfect/disarium/automorphic.',
    answer:
      'Perfect number: sum of proper divisors equals the number (6 = 1+2+3).\nDisarium number: sum of digits raised to power of their position equals the number (135 = 1¹+3²+5³).\nAutomorphic number: square ends with the number itself (25² = 625).',
    code: [{ language: 'python', snippet: "def is_perfect(n):\n    return sum(i for i in range(1, n) if n % i == 0) == n\n\ndef is_automorphic(n):\n    sq = str(n * n)\n    return sq.endswith(str(n))\n\nprint(is_perfect(6))       # True\nprint(is_automorphic(25))  # True" }],
    source: GFG('perfect-number-in-python'),
  },
  {
    question: 'Binary to decimal conversion.',
    answer: 'Use int(binary_string, 2) built-in, or manual: multiply each bit by 2^position and sum.',
    code: [{ language: 'python', snippet: "binary = '1011'\nprint(int(binary, 2))  # 11\n\n# manual\ndecimal = sum(int(bit) * 2**i for i, bit in enumerate(reversed(binary)))\nprint(decimal)  # 11" }],
    source: GFG('python-program-to-convert-binary-to-decimal'),
  },
  {
    question: 'Decimal to binary.',
    answer: 'Use bin(n)[2:] to strip 0b prefix, or repeatedly divide by 2 collecting remainders.',
    code: [{ language: 'python', snippet: "n = 11\nprint(bin(n)[2:])  # 1011\n\n# manual\nnum, bits = n, ''\nwhile num:\n    bits = str(num % 2) + bits\n    num //= 2\nprint(bits)  # 1011" }],
    source: GFG('python-program-to-convert-decimal-to-binary'),
  },
  {
    question: 'String compression logic.',
    answer: 'Run-length encoding: replace consecutive duplicates with char + count. Example: aaabb → a3b2. Only compress if result is shorter.',
    code: [{ language: 'python', snippet: "def compress(s):\n    if not s:\n        return s\n    result, count = [], 1\n    for i in range(1, len(s)):\n        if s[i] == s[i-1]:\n            count += 1\n        else:\n            result.append(s[i-1] + str(count))\n            count = 1\n    result.append(s[-1] + str(count))\n    compressed = ''.join(result)\n    return compressed if len(compressed) < len(s) else s\n\nprint(compress('aaabbcc'))  # a3b2c2" }],
    source: GFG('string-compression-in-python'),
  },
  {
    question: 'Find repeated words in sentence.',
    answer: 'Split sentence into words, use Counter or dict to find words appearing more than once. Normalize case and strip punctuation for accuracy.',
    code: [{ language: 'python', snippet: "from collections import Counter\nimport re\n\ndef repeated_words(sentence):\n    words = re.findall(r'\\b\\w+\\b', sentence.lower())\n    counts = Counter(words)\n    return [w for w, c in counts.items() if c > 1]\n\nprint(repeated_words('the cat and the dog and the bird'))  # ['the', 'and']" }],
    source: GFG('python-program-to-count-words-in-a-sentence'),
  },
]

/* ── Advanced Python (16) ── */
export const advancedQuestions = [
  {
    question: 'Explain multithreading.',
    answer:
      'Multithreading runs multiple threads within one process, sharing the same memory space. In Python, use the threading module. Good for I/O-bound tasks (network, file, waiting for UI).\n\nDue to the GIL, threads do not achieve true parallel CPU execution for CPU-bound work — use multiprocessing instead for that.',
    code: [{ language: 'python', snippet: "import threading\n\ndef task(name):\n    print(f'Thread {name} running')\n\nt1 = threading.Thread(target=task, args=('A',))\nt2 = threading.Thread(target=task, args=('B',))\nt1.start(); t2.start()\nt1.join(); t2.join()" }],
    source: GFG('multithreading-python'),
  },
  {
    question: 'Multithreading vs multiprocessing.',
    answer:
      'Multithreading: multiple threads, one process, shared memory, GIL limits CPU parallelism — best for I/O-bound.\n\nMultiprocessing: multiple processes, separate memory, true parallel CPU usage — best for CPU-bound (heavy computation, data processing).\n\nIn test automation: parallel browser tests often use multiprocessing or pytest-xdist, not threads.',
    source: GFG('difference-between-multiprocessing-and-multithreading-in-python'),
  },
  {
    question: 'What is GIL?',
    answer:
      'The Global Interpreter Lock (GIL) is a mutex that allows only one thread to execute Python bytecode at a time in CPython. It simplifies memory management but prevents true multi-core parallelism for CPU-bound threads.\n\nI/O operations release the GIL, so threads still help for I/O-bound work. Alternatives: multiprocessing, or other Python implementations (Jython, IronPython) without GIL.',
    source: GFG('global-interpreter-lock-in-python'),
  },
  {
    question: 'What is concurrency?',
    answer:
      'Concurrency is structuring a program to handle multiple tasks in overlapping time periods — tasks make progress without necessarily running simultaneously. Parallelism means tasks run at the same time on multiple cores.\n\nPython achieves concurrency via threading (I/O-bound), asyncio (async/await), or multiprocessing (CPU-bound parallelism).',
    source: GFG('concurrency-in-python'),
  },
  {
    question: 'Async programming?',
    answer:
      'Async programming uses async/await syntax with an event loop (asyncio module). Coroutines yield control while waiting for I/O instead of blocking the thread.\n\nIdeal for many concurrent network requests or API calls. Not faster for CPU-heavy work. In automation, useful for parallel API testing without threads.',
    code: [{ language: 'python', snippet: "import asyncio\n\nasync def fetch():\n    await asyncio.sleep(1)  # non-blocking wait\n    return 'done'\n\nasync def main():\n    results = await asyncio.gather(fetch(), fetch())\n    print(results)\n\nasyncio.run(main())" }],
    source: GFG('asyncio-in-python'),
  },
  {
    question: 'File handling in Python.',
    answer:
      'Use open() with a context manager (with statement) for safe automatic close. Modes: r (read), w (write), a (append), b (binary), + (read/write).\n\nread(), readline(), readlines() for reading; write(), writelines() for writing. pathlib.Path is the modern approach for file paths.',
    code: [{ language: 'python', snippet: "with open('data.txt', 'r', encoding='utf-8') as f:\n    content = f.read()\n\nwith open('out.txt', 'w') as f:\n    f.write('Hello')" }],
    source: GFG('file-handling-python'),
  },
  {
    question: 'CSV/Excel reading.',
    answer:
      'CSV: use csv module or pandas.read_csv(). Excel: use openpyxl or pandas.read_excel() (requires openpyxl/xlrd).\n\nPandas is standard in test automation for data-driven testing — read test data from spreadsheets and feed to pytest parametrization.',
    code: [{ language: 'python', snippet: "import csv\nimport pandas as pd\n\n# CSV\nwith open('tests.csv') as f:\n    rows = list(csv.DictReader(f))\n\n# Excel\ndf = pd.read_excel('testdata.xlsx', sheet_name='Login')\nprint(df.head())" }],
    source: GFG('reading-csv-files-in-python'),
  },
  {
    question: 'Logging implementation.',
    answer:
      'Use the logging module instead of print(). Levels: DEBUG, INFO, WARNING, ERROR, CRITICAL. Configure once with basicConfig or dictConfig.\n\nIn frameworks: log to file + console, include timestamp and level. log = logging.getLogger(__name__) in each module.',
    code: [{ language: 'python', snippet: "import logging\n\nlogging.basicConfig(\n    level=logging.INFO,\n    format='%(asctime)s [%(levelname)s] %(message)s',\n    handlers=[\n        logging.FileHandler('test.log'),\n        logging.StreamHandler()\n    ]\n)\nlogging.info('Test started')" }],
    source: GFG('logging-in-python'),
  },
  {
    question: 'Regex questions.',
    answer:
      'Regular expressions match patterns in text. Use re module: re.search() (first match), re.findall() (all matches), re.sub() (replace), re.compile() (reusable pattern).\n\nCommon patterns: \\d+ (digits), \\w+ (word), .* (any), ^ $ (start/end). Raw strings r"pattern" avoid escape issues.',
    code: [{ language: 'python', snippet: "import re\n\ntext = 'Order ID: 12345, Status: PASS'\nid_match = re.search(r'ID: (\\d+)', text)\nprint(id_match.group(1))  # 12345\n\nemails = re.findall(r'[\\w.-]+@[\\w.-]+', 'a@b.com c@d.com')" }],
    source: GFG('python-regex-re-module'),
  },
  {
    question: 'JSON parsing.',
    answer:
      'json.loads() parses JSON string to Python dict/list. json.dumps() serializes Python object to JSON string. json.load() / json.dump() for file I/O.\n\nEssential for API test automation — parse responses and assert on fields.',
    code: [{ language: 'python', snippet: "import json\n\ndata = '{\"name\": \"test\", \"status\": 200}'\nparsed = json.loads(data)\nprint(parsed['status'])  # 200\n\nprint(json.dumps(parsed, indent=2))" }],
    source: GFG('json-in-python'),
  },
  {
    question: 'API response handling.',
    answer:
      'Use requests library: response = requests.get/post(url, headers=..., json=...). Key attributes: status_code, json(), text, headers, elapsed.\n\nAssert status code and response body in tests. Handle timeouts, auth tokens, and session cookies via requests.Session().',
    code: [{ language: 'python', snippet: "import requests\n\nresp = requests.post(\n    'https://api.example.com/login',\n    json={'user': 'admin', 'pass': 'secret'},\n    timeout=10\n)\nassert resp.status_code == 200\ndata = resp.json()\nassert data['token']" }],
    source: GFG('python-requests-tutorial'),
  },
  {
    question: 'Database connection using Python.',
    answer:
      'Use DB-API drivers: sqlite3 (built-in), psycopg2 (PostgreSQL), pymysql/mysql-connector (MySQL). Pattern: connect → cursor → execute → fetch → commit → close.\n\nIn test automation: verify DB state after API/UI actions, seed test data, cleanup after tests.',
    code: [{ language: 'python', snippet: "import sqlite3\n\nconn = sqlite3.connect('test.db')\ncur = conn.cursor()\ncur.execute('SELECT * FROM users WHERE id = ?', (1,))\nrows = cur.fetchall()\nconn.close()" }],
    source: GFG('python-database-connection'),
  },
  {
    question: 'Virtual environment.',
    answer:
      'A virtual environment (venv) isolates project dependencies from system Python. Create: python -m venv venv. Activate: venv\\Scripts\\activate (Windows) or source venv/bin/activate (Mac/Linux).\n\nAlways use a venv per project — avoids version conflicts between automation projects.',
    source: TUTORIALS('python/python_venv.htm'),
  },
  {
    question: 'Pip requirements.',
    answer:
      'pip install package installs dependencies. pip freeze > requirements.txt captures exact versions. pip install -r requirements.txt installs all dependencies for a project.\n\nPin versions in CI/CD for reproducible builds. Common in automation: selenium, pytest, requests, openpyxl, allure-pytest.',
    code: [{ language: 'text', snippet: "# requirements.txt example\nselenium==4.15.0\npytest==7.4.3\nrequests==2.31.0\nopenpyxl==3.1.2" }],
    source: GFG('how-to-use-pip-requirements-file-in-python'),
  },
  {
    question: 'Pytest fixtures.',
    answer:
      'Fixtures provide setup/teardown and shared test data. Defined with @pytest.fixture. Tests request fixtures by name as parameters. scope controls lifetime: function, class, module, session.\n\nconftest.py holds shared fixtures. yield fixtures run teardown after yield.',
    code: [{ language: 'python', snippet: "import pytest\n\n@pytest.fixture\ndef browser():\n    driver = webdriver.Chrome()\n    yield driver\n    driver.quit()\n\ndef test_login(browser):\n    browser.get('https://example.com')\n    assert 'Login' in browser.title" }],
    source: GFG('pytest-fixtures'),
  },
  {
    question: 'Parametrization in pytest.',
    answer:
      '@pytest.mark.parametrize runs the same test with multiple input sets. Pass arg names as string and list of tuples.\n\nIdeal for data-driven UI/API tests — one test function, many data rows from a list, CSV, or Excel.',
    code: [{ language: 'python', snippet: "import pytest\n\n@pytest.mark.parametrize('user,password,expected', [\n    ('admin', 'pass123', 200),\n    ('guest', 'wrong',   401),\n    ('',      '',        400),\n])\ndef test_login(user, password, expected):\n    resp = api_login(user, password)\n    assert resp.status_code == expected" }],
    source: GFG('parameterized-testing-with-pytest'),
  },
]

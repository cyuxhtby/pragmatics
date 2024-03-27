Static Scope variables are bound to their scopes at compile time based on their lexical context. This means the scope is determined by the physical structure of the code.
They are easier to understand and predict behavior because the scope of variables is determined by their placement in the code.
Python, Java, and C++, are some example of languages with static scoping


Dynamic Scope variables are bound to their scopes at runtime. The scope is determined by the call stack at the time a variable is accessed, not by the lexical structure of the program.
The value of a variable can change based on the call sequence leading up to its use.
This is more rarely used in modern programming languages
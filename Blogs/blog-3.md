Blog no -3 : Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Answer: Type guards refers a mechanism in typescript that helps the compiler make different conditions and make a guard since it dont make any noise in various type of variables within a particular scope. 

why Necessary:  
  1. Type guards allow user to narrow down the types of variable acording to conditional block and make safely access in properties or several methods.
  2. Help ensuring that operations are performed upon correct types and conditions. It prevent common runtime errors. 
  3. It works also with union types, enable user to handle every possible types.

  Various types of Type Guards in Typescript & their use case:
  1. typeof - Type guard .
     use case:To check primitive data types like string, bololean or can be number.
  2. instanceof - Type guard.
     use case: To check if an object with properties is an instance of a particular class.
  3. in operator - Type guard.
     use case: To check if a property specifically exist on an objectand work with types that share similar properties and as well as have some unique properties .
  4. Discriminated Unions - Type Guard.
     use case: It operates with multiple types in a union that each contains a literal property. It make easy to differentiate between without additional checks.

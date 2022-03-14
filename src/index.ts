// This is the usual way to define any structured data (using interface)
/**
 * A doughnut
 */
interface Doughnut {
  type: "doughnut";
  shape: string;
  optionalField?: number; // all fields you specify are required by default
}

// Take note of the common field `type`
/**
 * A candy
 */
interface Candy {
  type: "candy";
  flavour: string;
}

// Type aliases can do some cool stuff interfaces cannot do.
// This one is called a union type.
// It is for types whose value can be either this or that.
/**
 * A union type of available snacks
 */
type Snack = Doughnut | Candy;

// Thanks to the type definition above, we can get some cool completions.
// We also (generally) don't have to worry about the input having a totally
// different structure. The exception is the user input.
/**
 * Extract the trait description of the given snack
 */
function extractTrait(input: Snack): string {
  switch (input.type) {
    case "doughnut":
      return input.shape;
    case "candy":
      return input.flavour;
  }
}

// A type can also represent a function
/**
 * The type of a snack generator
 */
type SnackGenerator = () => Snack;

// This is one example of how function types can be used.
// You get nice error reports and completions which is not possible in plain js.
/**
 * Generate a random type of snack
 */
const snackGenerator: SnackGenerator = () => {
  if (Math.random() < 0.5) {
    return { type: "candy", flavour: "strawberry" };
  }
  // Removing the line below will give you error because without the line below,
  // this function's return value cannot be of type Snack.
  return { type: "doughnut", shape: "toroid" };
};

// If you hover over the identifier `snack`, you can see that its type is Snack
const snack = snackGenerator();
console.log(`I got a snack for ya, a ${extractTrait(snack)} ${snack.type}`);

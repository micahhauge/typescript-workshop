/**
 * You can create your own Literal types using the 'type' keyword.
 * In this example, "Hello World" is the only valid value for a Greeting
 */
type Greeting = "Hello World";
const greeting: Greeting = "Hello World";

/**
 * A literal type on its own isn't very useful, but when
 * Literal Types are combined with Union types you can begin
 * to see the value.
 *
 * Notice the powerful auto completion when you set a value for method.
 */
type HttpMethod = "GET" | "PUT" | "POST" | "PATCH" | "DELETE";

let method: HttpMethod;
method = "GET";
method = "PUT";
method = "badString";

/**
 * You can use a type you defined with the type keyword just like
 * any of the builtin types.
 *
 * Notice the provided auto completion when you start typing the method argument.
 */
function makeHttpRequest(method: HttpMethod, url: string) {}
makeHttpRequest("GET", "/users/1234");
makeHttpRequest("badString", "/users/1234");

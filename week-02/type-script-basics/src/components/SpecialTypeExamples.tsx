export default function SpecialTypesExample() {
  // any → TypeScript turns off type checking
  let flexible: any = "Hello";
  flexible = 42; // ✅ allowed
  flexible = { key: "value" }; // ✅ allowed

  // unknown → must check type before use
  let maybeValue: unknown = "TypeScript";
  // console.log(maybeValue.toUpperCase()); ❌ Error
  if (typeof maybeValue === "string") {
    console.log(maybeValue.toUpperCase()); // ✅ Safe
  }
  // throwError("Something went wrong!");

  // void → function returns nothing
  function logMessage(msg: string): void {
    console.log("Log:", msg);
  }
  logMessage("This function has no return value");

  // null and undefined
  let maybeNull: string | null = null;
  let maybeUndefined: string | undefined = undefined;

  // object → any non-primitive value
  let person: object = { name: "Ferdin", role: "Developer" };
  // person.name ❌ Error (object is too generic)
  // Better: type or interface for structure

  return (
    <div>
      <h2>Special Types Example</h2>
      <p>
        <strong>any</strong>: {JSON.stringify(flexible)}
      </p>
      <p>
        <strong>unknown</strong>: {String(maybeValue)}
      </p>
      <p>
        <strong>void</strong>: check console log
      </p>
      <p>
        <strong>null</strong>: {String(maybeNull)}
      </p>
      <p>
        <strong>undefined</strong>: {String(maybeUndefined)}
      </p>
      <p>
        <strong>object</strong>: {JSON.stringify(person)}
      </p>
      <p>
        <strong>never</strong>: example in code (throws error)
      </p>
    </div>
  );
}

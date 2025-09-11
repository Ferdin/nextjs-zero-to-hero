// import TypeSCriptBasics from "@/components/TypeScriptBasics";
// import TypeScriptProps from "@/components/TypeScriptProps";
import SpecialTypesExample from "@/components/SpecialTypeExamples";
import Card from "@/components/TypeScriptChildren";

export default function Home() {
  //const year: number = new Date().getFullYear();
  return (
    <div>
      {/* <TypeSCriptBasics /> */}
      {/* <TypeScriptProps
        name="Ferdin"
        placesVisited={["Lisbon", "Rome", "London"]}
        year={year}
      /> */}
      <Card title="Ferdin">
        <p>This is some content inside the card.</p>
      </Card>
      <Card title="Norbert">
        <p>This is some content inside the card.</p>
      </Card>

      <SpecialTypesExample />
    </div>
  );
}

// import TypeSCriptBasics from "@/components/TypeScriptBasics";
// import TypeScriptProps from "@/components/TypeScriptProps";
//import SpecialTypesExample from "@/components/SpecialTypeExamples";
// import ClickEventComponent from "@/components/EventHandlingComponents/ClickEventComponent";
// import CheckboxListWithoutKey from "@/components/KeyPropComponents/CheckBoxComponents";
// import Greetings from "@/components/StateExamples/Greetings";
// import State from "@/components/StateExamples/State";
// import TodoList from "@/components/StateExamples/TodoList";
// import UserProfile from "@/components/StateExamples/UserProfile";
//import Card from "@/components/TypeScriptChildren";
import TypingEventHandlers from "@/components/EventHandlingComponents/TypingEventHandlers";

import ControlledComponent from "@/components/EventHandlingComponents/ControlledComponent";

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
      {/* <Card title="Ferdin">
        <p>This is some content inside the card.</p>
      </Card>
      <Card title="Norbert">
        <p>This is some content inside the card.</p>
      </Card>

      <SpecialTypesExample /> */}
      {/* <State />
      <Greetings />
      <UserProfile />
      <TodoList />
      <CheckboxListWithoutKey />
      <ClickEventComponent movieName="Titanic" /> */}
      <TypingEventHandlers />
      {/* <ControlledComponent /> */}
    </div>
  );
}

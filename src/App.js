import "./App.css";
import Card from "./Card";
function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card  h2="First Card's H2" h3="First Card's H3"/>
      <Card h2="Second Card's H2" h3="Second Card's H3"/>
      <Card h2="Third Card's H2" h3="Third Card's H3"/>

    </div>
  );
}

export default App;

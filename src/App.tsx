import Die from "./components/Die";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center text-3xl">
      <h1 className="text-4xl font-bold text-white">Dice Roller</h1>
      <Die value={3} />
    </div>
  );
}

export default App;

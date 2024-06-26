import Layout from "./components/Layout";
import TicTacToe from "./components/TicTacToe";

export default function App() {
  return (
    <>
      <Layout>
        <h1 className="text-4xl font-bold mb-8 text-blue-400">
          Tic-Tac-Toe (Human vs Agent)
        </h1>
        <TicTacToe />
      </Layout>
    </>
  );
}

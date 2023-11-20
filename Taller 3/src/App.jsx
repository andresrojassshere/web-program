import { AppRouter } from "./AppRouter";
import { CharacterProvider } from "./context/CharacterProvider";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <CharacterProvider>
          <AppRouter />
        </CharacterProvider>
      </AuthProvider>
    </>
  );
}

export default App;

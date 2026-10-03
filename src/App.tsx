import { ThemeProvider } from "./lib/theme-context";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-950">
        <Navbar />
        <main id="main-content" className="pt-16">
          <Home />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
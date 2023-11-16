import { Routes,Route } from "react-router-dom"
import LoginAuth from "./pages/auth/LoginAuth";
import TrackPage from "./pages/components/TrackPage";
import { DataContextProvider } from "./hooks/DataContext";
// import ProtectedRoute from "./pages/components/ProtectedRoute";
// ;


function App() {
  return (
    <div className="App">
      <DataContextProvider>
          <Routes>
            <Route path="/" exact element={<LoginAuth/>}/>
            <Route path="/tracker" element={
              
                    <TrackPage/>
             
      }/>
          </Routes>
      </DataContextProvider>
    </div>
  );
}

export default App;

import { Routes,Route } from "react-router-dom"
import LoginAuth from "./pages/auth/LoginAuth";
import TrackPage from "./pages/components/TrackPage";
import { DataContextProvider } from "./hooks/DataContext";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
// import { Container, Row, Col } from 'react-bootstrap'
import SignUpAuth from "./pages/auth/SignUpAuth";
import Header from "./pages/components/Header";


function App() {
  return (
    <>
        <DataContextProvider>
          <Header className="header"/>
          <Routes>
            <Route path="/" exact element={<LoginAuth/>}/>
            <Route path="/signup" element={<SignUpAuth/>}/>
            <Route path="/tracker" element={
                    <ProtectedRoute>
                        <TrackPage/>
                    </ProtectedRoute>
      }/>
          </Routes>
      </DataContextProvider>
      </>
  
  );
}

export default App;

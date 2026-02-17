import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import PortfolioPage from './pages/PortfolioPage'
import ExperiencePage from './pages/ExperiencePage'

function App() {
  return (
    <Box className="app-shell">
      <Header />
      <Nav />

      <Container component="main" maxWidth="lg" className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>

      <canvas id="demo-canvas" />
      <Footer />
    </Box>
  )
}

export default App

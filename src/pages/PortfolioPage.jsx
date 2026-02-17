import { Typography } from '@mui/material'
import Projects from '../components/Projects'

function PortfolioPage() {
  return (
    <>
      <Typography variant="h3" component="h1" fontWeight={800} sx={{ mb: 3, color: '#e2e8f0' }}>
        Portfolio
      </Typography>
      <Projects />
    </>
  )
}

export default PortfolioPage

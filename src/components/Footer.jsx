import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Typography variant="body2" className="mb-0">
        © 2025 Álvaro García Martín. Todos los derechos reservados.
      </Typography>
    </Box>
  )
}

export default Footer

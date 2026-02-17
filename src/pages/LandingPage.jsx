// Importa componentes de Material UI para maquetar la landing.
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
// Icono de flecha para el desplegable de "Sobre mí".
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// Componente de página principal (Landing).
function LandingPage() {
  return (
    // Contenedor principal en vertical con separación entre bloques.
    <Stack spacing={3}>
      {/* Título principal del portfolio */}
      <Typography variant="h3" component="h1" className="text-center mb-4" sx={{ color: '#fff' }}>
        Portafolio de Álvaro García Martín
      </Typography>

      {/* Foto principal */}
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: '2%' }}>
        <img
          src="/images/mv/imagen1.png"
          alt="Álvaro García Martín"
          style={{ maxWidth: '200px', borderRadius: '30%', display: 'block' }}
        />
      </Box>

      {/* Subtítulo breve con rol profesional */}
      <Typography className="text-center" sx={{ color: '#fff' }}>
        Administrador de base de datos y Desarrollador web especializado en frontend.
      </Typography>

      {/* Bloque desplegable con descripción personal */}
      <Accordion defaultExpanded={false} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff' }}>
        {/* Cabecera del acordeón */}
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
          <Typography id="sobre-mi-titulo" sx={{ width: '100%', textAlign: 'center' }}>
            Sobre mí
          </Typography>
        </AccordionSummary>
        {/* Contenido que se muestra al desplegar */}
        <AccordionDetails>
          {/* Distribución en columnas: texto + gif */}
          <Grid container spacing={2} alignItems="center">
            {/* Columna de texto */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography sx={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
                {`Me llamo Álvaro García Martín, tengo 34 años y actualmente vivo en Almería.

Desde pequeño el mundo de la informática siempre me ha apasionado. En 2018 terminé SMR y en 2020 comencé a encontrarle el encanto al desarrollo web, maquetando formularios para ayuntamientos y haciéndolos responsive.

En 2024 comencé mi formación en DAW, desarrollando más mi pasión por el frontend y las bases de datos. Me gustan los sistemas, las bases de datos, la ingeniería de negocio y seguir aprendiendo en un sector que evoluciona constantemente.

En este portafolio puedes ver algunos proyectos y mi experiencia profesional.`}
              </Typography>

              {/* Enlace a LinkedIn */}
              <Typography sx={{ mt: 2 }}>
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/alvaro-garcia-martin-99492116b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Perfil de LinkedIn
                </a>
              </Typography>
              {/* Enlace a GitHub */}
              <Typography>
                GitHub:{' '}
                <a href="https://github.com/AlvaroGarciaMartin/" target="_blank" rel="noreferrer">
                  Perfil de GitHub
                </a>
              </Typography>
            </Grid>

            {/* Columna visual con GIF */}
            <Grid size={{ xs: 12, md: 4 }} className="text-center">
              <img src="/images/mundo.gif" alt="Mundo" className="img-fluid" style={{ maxWidth: '100%' }} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      {/* Bloque de contacto */}
      <Box>
        <Typography variant="h5" id="contacto-titulo" sx={{ color: '#fff', mb: 2 }}>
          Contacto
        </Typography>
        {/* Formulario de contacto visual (sin lógica de envío) */}
        <form className="row g-3">
          <div className="col-md-6">
            {/* Campo nombre */}
            <label htmlFor="nombre" className="form-label text-white">
              Nombre
            </label>
            <input type="text" className="form-control" id="nombre" name="nombre" />
          </div>
          <div className="col-md-6">
            {/* Campo email */}
            <label htmlFor="email" className="form-label text-white">
              Email
            </label>
            <input type="email" className="form-control" id="email" name="email" />
          </div>
          <div className="col-12">
            {/* Campo mensaje */}
            <label htmlFor="mensaje" className="form-label text-white">
              Mensaje
            </label>
            <textarea className="form-control" id="mensaje" name="mensaje" rows="4" />
          </div>
          <div className="col-12">
            {/* Botón de envío */}
            <Button variant="contained" color="success" type="submit">
              Enviar
            </Button>
          </div>
        </form>
      </Box>

      {/* Chips de habilidades destacadas */}
      <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
        <Chip label="Frontend (HTML, CSS, JS, React)" color="primary" />
        <Chip label="Bases de datos (SQL Server, PostgreSQL, MySQL)" color="primary" />
        <Chip label="Sistemas (Windows Server, VMware, Azure)" color="primary" />
      </Stack>
    </Stack>
  )
}

// Exporta la página para usarla en las rutas de la app.
export default LandingPage

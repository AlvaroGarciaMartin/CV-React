import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function ExperienceItem({ role, place, dates, details, logo, entities = [] }) {
  return (
    <Accordion
      sx={{
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: '#fff',
        borderRadius: '10px',
        '&::before': { display: 'none' },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
          {logo ? (
            <img src={logo} alt={place} style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
          ) : null}
          <Box>
            <Typography variant="h6">{role}</Typography>
            <Typography variant="subtitle2">{place}</Typography>
            <Typography variant="body2">{dates}</Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>{details}</Typography>

        {entities.length > 0 ? (
          <Box component="ul" sx={{ mt: 2 }}>
            {entities.map((entity) => (
              <li key={entity.url}>
                <a href={entity.url} target="_blank" rel="noreferrer">
                  {entity.name}
                </a>
              </li>
            ))}
          </Box>
        ) : null}
      </AccordionDetails>
    </Accordion>
  )
}

export default ExperienceItem

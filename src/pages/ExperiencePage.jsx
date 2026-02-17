import { Stack, Typography } from '@mui/material'
import experiences from '../data/experience.json'
import ExperienceItem from '../components/ExperienceItem'

function ExperiencePage() {
  return (
    <>
      <Typography variant="h4" component="h1" id="experiencia-titulo" sx={{ mb: 3, color: '#fff' }}>
        Experiencia Laboral
      </Typography>

      <Stack spacing={2.5}>
        {experiences.map((experience) => (
          <ExperienceItem
            key={`${experience.role}-${experience.place}`}
            role={experience.role}
            place={experience.place}
            dates={experience.dates}
            details={experience.details}
            logo={experience.logo}
            entities={experience.entities}
          />
        ))}
      </Stack>
    </>
  )
}

export default ExperiencePage

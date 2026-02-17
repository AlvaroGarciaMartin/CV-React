import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Collapse,
  Stack,
  Typography,
} from '@mui/material'

function ProjectCard({ title, description, image, link, tags }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        color: '#e2e8f0',
        border: '1px solid rgba(148, 163, 184, 0.28)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 14px 28px rgba(0,0,0,0.35)',
        },
      }}
    >
      <CardMedia component="img" height="180" image={image} alt={title} />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
          {description}
        </Typography>

        <Collapse in={expanded}>
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 1, color: '#67e8f9' }}>
              Tecnologías usadas
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    color: '#fff',
                    '& .MuiChip-label': { color: '#fff' },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Collapse>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          variant="contained"
          href={link}
          target="_blank"
          rel="noreferrer"
          size="small"
        >
          Ver proyecto
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => setExpanded((prev) => !prev)}
          sx={{ color: '#67e8f9', borderColor: '#67e8f9' }}
        >
          {expanded ? 'Ocultar stack' : 'Mostrar stack'}
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard

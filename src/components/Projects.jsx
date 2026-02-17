import { Grid, Typography } from '@mui/material'
import projects from '../data/projects.json'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <>
      <Typography variant="h4" component="h2" fontWeight={700} sx={{ mb: 3, color: '#e2e8f0' }}>
        Proyectos destacados
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid key={project.title} size={{ xs: 12, md: 6 }}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tags={project.tags}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Projects

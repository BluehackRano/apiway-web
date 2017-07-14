<template>
</template>

<script>
import {Projects} from './mixins/Projects'
import {ProjectCard} from './mixins/ProjectCard'
import {AddProjectCard} from './mixins/AddProjectCard'

export default {
  name: 'projects',
  mixins: [Projects],
  components: {
    ProjectCard,
    AddProjectCard
  }
}
</script>

<style>
</style>

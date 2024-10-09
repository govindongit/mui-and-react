import React from 'react'
import NavBar from '../../components/nav/NavBar'
import FloatingActionButtons from '../../components/floatingactionbuttons/FloatingActionButtons'
import BlogCard from '../../components/blogcard/BlogCard'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import {Container, Box } from '@mui/material';

function Home() {
  return (
    <div>

      <NavBar/>
      <div style={{ textAlign: 'center', fontWeight:'bold'}}><h1>MUI - React UI Framework</h1></div>
      <Container>
      <Box m={2}>
  <BreadCrumb/>
</Box>

      <BlogCard/>
      </Container>
<FloatingActionButtons/>
    </div>
  )
}

export default Home
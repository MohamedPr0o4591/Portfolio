import React from 'react'
import './ProjectsComponent.css'
import SectionTitle from '../SectionTitle'
import { Box, IconButton, Stack } from '@mui/material'
import cruds from '../../assets/img1.webp'
import photoEditor from '../../assets/img2.jpg'
import misterProgramming from '../../assets/img3.jpg'
import adminDashbaord from '../../assets/img4.avif'
import { LaunchOutlined } from '@mui/icons-material'
import Card from './Card'

export default function ProjectsComponent() {
    return (
        <div className='latest-projects d-flex flex-column gap-3' id='projects'>
            <SectionTitle
                title1='Latest'
                title2='Projects'
            />
            <Stack direction={'row'} flexWrap={'wrap'} width={100 + '%'} gap={2}>
                <Card
                    img={cruds}
                    title='CRUDS'
                    link='https://cruds-project.web.app'
                />
                <Card
                    img={photoEditor}
                    title='Photo Editor'
                    link='https://photoeditor-project.web.app'
                />
                <Card
                    img={misterProgramming}
                    title='MisterProgramming'
                    link='https://misterprogramming.com'
                />
                <Card
                    img={adminDashbaord}
                    title='Admin Dashbaord'
                    link='https://admin-dashboard-459.web.app/'
                />
            </Stack>
        </div>
    )
}

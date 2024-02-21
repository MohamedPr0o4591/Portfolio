import { LaunchOutlined } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'

export default function Card(props) {
    return (
        <Box className='box'>
            <div className="overlay p-2" >
                <h2 className='fw-bold'>
                    {props.title} Project
                </h2>

                <span className='fs-4'>
                    To read more and view the project ,please visit our project link
                </span>

                <IconButton
                    sx={{
                        background: '#0e0e0e'
                    }}
                >
                    <a href={props.link} target='_blank'>
                        <LaunchOutlined
                            sx={{
                                fontSize: 3 + 'rem',
                                color: '#efef',
                            }}
                        />
                    </a>
                </IconButton>
            </div>
            <img src={props.img} alt="CRUDS" />
        </Box>
    )
}

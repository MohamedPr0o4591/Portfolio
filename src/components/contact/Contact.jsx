import React, { useRef, useState } from 'react'
import './Contact.css'
import SectionTitle from '../SectionTitle'
import { Alert, Box, Button, Stack } from '@mui/material'
import emailjs from '@emailjs/browser';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function Contact() {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    const form = useRef()

    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3birgdt', 'template_c9imdoh', form.current, {
                publicKey: 'D4Z9I3jewjCxeVQ1T',
            })
            .then(
                () => {
                    handleClick()
                    setFullName('');
                    setPhoneNumber('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className='contact-component' id='contact'>

            <Snackbar
                open={open}
                autoHideDuration={2500}
                onClose={handleClose}
                action={action}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    severity="success"
                >
                    The message was sent successfully
                </Alert>
            </Snackbar>

            <SectionTitle
                title1='Contact'
                title2='Me'
            />

            <form className='w-100 d-flex flex-column gap-4 align-items-center' ref={form} onSubmit={handleSubmit}>

                <div className="input-box">
                    <Stack gap={2} className='inner-box'>
                        <input
                            type='text'
                            placeholder='Full Name'
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                            name='from_name'
                        />

                        <input
                            type='number'
                            placeholder='Phone Number'
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                            name='phone_number'
                        />
                    </Stack>
                </div>

                <div className="input-box">
                    <input
                        required
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name='from_email'
                    />
                </div>

                <div className="input-box">
                    <textarea
                        required
                        placeholder='Your Message'
                        cols={30}
                        rows={10}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        name='message'
                    />
                </div>

                <Box
                    className='box-btn'
                >
                    <Button
                        type='submit'
                        sx={{
                            background: 'rgb(149, 64, 8)',
                            p: '10px 30px'
                        }}
                        color='inherit'
                    >
                        Send Message
                    </Button>
                </Box>

            </form >
        </div >
    )
}

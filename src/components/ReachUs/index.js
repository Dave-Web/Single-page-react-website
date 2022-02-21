import React from 'react'
import { Container, FormButton, FormContent, FormInput, FormLabel, FormWrap, Form, FormH1, Text,Icon } from './ReachUsElements'

const ReachUs = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Tech Company</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1> Reach Us</FormH1>
                            <FormLabel htmlFor='for'>Name</FormLabel>
                            <FormInput type='text'required />
                            <FormLabel htmlFor='for'>Phone Number</FormLabel>
                            <FormInput type='number'required />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email'required />
                            <FormLabel htmlFor='for'>Message</FormLabel>
                            <FormInput type='textbox'required />
                            <FormButton type='submit'required>Send</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default ReachUs

import React from 'react';
import { Container, Form, FormButton, FormH1, FormInput, Icon, FormLabel, FormWrap, Text, FormContent } from './SigninElements';


const Signin = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>the taoist</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Sign in</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>

        </>
    )
}

export default Signin
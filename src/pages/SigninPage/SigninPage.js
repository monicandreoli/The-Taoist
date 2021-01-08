import React from 'react'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll'
import Signin from '../../components/Signin/Signin'


const SigninPage = () => {
    return (
        <>
        <scrollToTop />
            <Signin />
        </>
    )
}

export default SigninPage

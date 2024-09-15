import React, { useState } from 'react'
import './login.scss';
import { common_Text, loginText } from '../../Constants/StaticText/text';
import { Imagepaths } from '../../Constants/Imagepaths/Images';

interface loginState {
    register: boolean;
    firstName: string;
    lastname: string;
    mobileNumber: string;
    email: string;
    password: string;
    userName: string;
}

export const LoginScreen = () => {
    let [state, setState] = useState<loginState>({
        register: false, firstName: '', lastname: '', mobileNumber: '', email: '', password: '', userName: ''
    })

    const onChangeSigninHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const onSubmitSigninHandler = () => {
        console.log(state)
    }
    return (
        <div className='log-container'>
            <div className='log-card'>
                {state.register ? <>
                    <div className='log-signin-card'>
                        <div style={{ marginBottom: '1dvw' }}><label className='log-top-label'>{loginText.sign_up_welcome_text}</label></div>
                        <form className='log-signin-content'>
                            <div className='log-input-card'>
                                <input
                                    className='input-text-box-md'
                                    placeholder={common_Text.first_name_text}
                                    value={state.firstName}
                                    name='firstName'
                                    onChange={onChangeSigninHandler}
                                />
                            </div>
                            <div className='log-input-card'>
                                <input
                                    className='input-text-box-md'
                                    placeholder={common_Text.last_name_text}
                                    value={state.lastname}
                                    name='lastname'
                                    onChange={onChangeSigninHandler}
                                />
                            </div>
                            <div className='log-input-card'>
                                <input
                                    className='input-text-box-md'
                                    placeholder={common_Text.user_name_text}
                                    value={state.userName}
                                    name='userName'
                                    onChange={onChangeSigninHandler}
                                />
                            </div>
                            <div className='log-input-card'>
                                <input
                                    className='input-text-box-md'
                                    placeholder={common_Text.mobile_number_text}
                                    value={state.mobileNumber}
                                    name='mobileNumber'
                                    onChange={onChangeSigninHandler}
                                />
                            </div>
                            <div className='log-input-card'>
                                <input
                                    className='input-text-box-md'
                                    placeholder={common_Text.email_text}
                                    value={state.email}
                                    name='email'
                                    onChange={onChangeSigninHandler}
                                />
                            </div>
                            <div className='log-input-card'>
                                <input
                                    className='input-text-box-md'
                                    placeholder={common_Text.password_text}
                                    value={state.password}
                                    name='password'
                                    onChange={onChangeSigninHandler}
                                />
                            </div>
                        </form>
                        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <button className='btn-style-xl'
                                onClick={onSubmitSigninHandler}
                            >{loginText.register_here}</button>
                            <div style={{ marginTop: '0.5dvw', textAlign: 'center' }}>
                                <label className='log-span-text' onClick={() => { setState({ ...state, register: false }) }}>{`${loginText.sign_in_text}`}</label>
                            </div>
                        </div>
                    </div></> :
                    <>
                        <div className='log-signin-card'>
                            <div style={{ marginBottom: '1dvw' }}><label className='log-top-label'>{loginText.sign_in_welcome_text}</label></div>
                            <div className='log-signin-content'>
                                <div className='log-input-card'>
                                    <input
                                        className='input-text-box-md'
                                        placeholder={common_Text.email_text}
                                        value={state.email}
                                        name='email'
                                        onChange={onChangeSigninHandler}
                                    />
                                </div>
                                <div className='log-input-card'>
                                    <input
                                        className='input-text-box-md'
                                        placeholder={common_Text.password_text}
                                        value={state.password}
                                        name='password'
                                        onChange={onChangeSigninHandler}
                                    />
                                </div>
                            </div>
                            <div style={{ marginBottom: '1dvw', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <button className='btn-style-xl'
                                    onClick={onSubmitSigninHandler}
                                >{loginText.sign_in_btn_text}</button>
                                <div style={{ marginTop: '0.5dvw', textAlign: 'center' }}>
                                    <label className='log-span-text'
                                        onClick={() => { setState({ ...state, register: true }) }}>{`${loginText.sign_up_text}`}</label>
                                </div>
                            </div>
                        </div></>
                }
            </div>
        </div >
    )
}

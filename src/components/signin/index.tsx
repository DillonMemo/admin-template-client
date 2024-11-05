'use client'

import { Wrapper } from '@/styles/signin'
import { Button, Input } from 'antd'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'
import Image from 'next/image'

interface SigninForm {
  id: string
  password: string
}
export default function SignInWrapper() {
  const {
    getValues,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<SigninForm>({
    mode: 'onChange',
  })

  const onSubmit = async () => {
    const { id, password } = getValues()

    await signIn('credentials', {
      id,
      password,
      redirect: true,
      callbackUrl: '/',
    })
  }
  return (
    <Wrapper>
      <Link href="/login" className="logo"></Link>
      <div className="content">
        <div className="content-item">이미지가 들어갑니다.</div>
      </div>
      <div className="wrapper">
        <div className="container">
          <h2 style={{ marginBottom: '2.5rem' }}>Welcom to MiraclePlay CMS 👋</h2>
          <h4>Dummy Site</h4>
          <div style={{ marginBottom: '1.5rem' }}>
            <p>ID : dummy</p>
            <p>PW : dummy</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-item">
              <div className="form-group">
                <Controller
                  render={({ field }) => (
                    <Input {...field} className="input" placeholder="Enter your ID" />
                  )}
                  control={control}
                  name="id"
                  rules={{
                    required: 'ID 입력은 필수입니다',
                    pattern: {
                      value: /^[a-zA-Z0-9!@#~%^&*(),]+$/,
                      // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // 이메일 정규식
                      message: 'ID 형식이 아닙니다',
                    },
                  }}
                />
              </div>
              {errors.id?.message && (
                <div className="form-message">
                  <span>{errors.id.message}</span>
                </div>
              )}
            </div>
            <div className="form-item">
              <div className="form-group">
                <Controller
                  render={({ field }) => (
                    <Input.Password {...field} className="input" placeholder="Password" />
                  )}
                  control={control}
                  name="password"
                  rules={{
                    required: '비밀번호 입력은 필수입니다',
                  }}
                />
              </div>
              {errors.password?.message && (
                <div className="form-message">
                  <span>{errors.password.message}</span>
                </div>
              )}
            </div>
            <div className="form-item">
              <Button
                type="primary"
                role="button"
                htmlType="submit"
                className="submit-button"
                disabled={!isValid}>
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

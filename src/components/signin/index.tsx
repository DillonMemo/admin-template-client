'use client'

import { Wrapper } from '@/styles/signin'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'

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

    console.log('1️⃣ submit', id, password)
    debugger
    await signIn('credentials', {
      id: 'dillon',
      password: '1234',
      redirect: true,
      callbackUrl: '/',
    })
  }
  return (
    <Wrapper>
      <Link href="/login" className="logo"></Link>
      <div className="content">
        <div className="content-item">
          <img src="/static/svgs/pixeltrue-data-analyse-1.svg" alt="이미지가 들어갑니다." />
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <h2 style={{ marginBottom: '2.5rem' }}>Welcom to MiraclePlay CMS 👋</h2>
          <h4>Dummy Site</h4>
          <div style={{ marginBottom: '1.5rem' }}>
            <p>ID : dummy@test.com</p>
            <p>PW : dummy</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              render={({ field }) => (
                <label>
                  id
                  <input {...field} name="id" type="text" />
                </label>
              )}
              control={control}
              name="id"
            />
            <Controller
              render={({ field }) => (
                <label>
                  Password
                  <input {...field} name="password" type="password" />
                </label>
              )}
              control={control}
              name="password"
            />
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

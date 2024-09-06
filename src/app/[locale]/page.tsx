'use client'

import { useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('HomePage')
  const { data: session, status } = useSession()
  console.log('✅', session, status)

  const getAPI = async () => {
    try {
      const response = await fetch('https://dev-api.mplay.info/')
      const json = await response.json()
      console.log('get', json)
    } catch (error) {
      console.error(error)
    }
  }

  /** 국가별 로컬 시간 테스트 */
  console.log('??', new Date(new Date('2024-09-09T14:00:00+12:00').getTime()))
  return (
    <main>
      <div>{t('title')}</div>
      <button type="button" onClick={getAPI}>
        API CLICK
      </button>
    </main>
  )
}

'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { CountryOption, CountrySelect, HeaderWrapper, SidebarWrapper } from './styles'
import { useRecoilValue } from 'recoil'
import { themeModeState } from '@/recoil/theme-atom'
import Link from 'next/link'
import { Badge, Skeleton, Space } from 'antd'
import useNetworkStatus from '@/hooks/useNetworkStatus'
import HamburgerSvg from '@/icons/hamburger-svg'
import { delay } from 'lodash'
import { useLocale } from 'next-intl'
import DarkModeToggle from './dark-mode-toggle'
import { usePathname, useRouter } from '@/i18n/routing'
import Image from 'next/image'
import NoneProfileImage from '../../../static/imgs/none-profile.png'
import { SkeletonStyle } from '@/styles/styles'

export default function Header() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const { networkStatus } = useNetworkStatus()

  const themeMode = useRecoilValue(themeModeState)
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<{ my: boolean }>({ my: true })

  const hamburgerRef = useRef<HTMLDivElement>(null)

  /**
   * @description `side navigator` 마우스 이벤트 핸들러 입니다.
   */
  const onNavigator = useCallback((isNav: boolean) => () => setIsNavOpen(isNav), [setIsNavOpen])
  /**
   * @description `햄버거` 버튼 클릭 이벤트 핸들러 입니다.
   */
  const onHamburgerClick = useCallback(() => setIsNavOpen(!isNavOpen), [isNavOpen])

  const onClickItem = ({ currentTarget }: React.MouseEvent<HTMLAnchorElement>) => {
    const nodes = document.querySelectorAll('.has-sub')
    const parentNode = currentTarget.parentNode as HTMLLIElement

    nodes.forEach((node) => {
      if (!node.contains(parentNode)) {
        if (!node.classList.contains('open')) {
          node.classList.remove('open')

          const subNode = node.querySelector('.menu-content > .collapse')
          subNode?.classList.contains('show') && subNode.classList.remove('show')
        }
      }
    })

    const subNode: HTMLDivElement | null | undefined = currentTarget.parentNode?.querySelector(
      '.menu-content > .collapse'
    )
    if (subNode) {
      if (subNode.classList.contains('show')) {
        parentNode.classList.remove('open')
        subNode.classList.remove('show')
      } else {
        parentNode.classList.add('open')
        subNode.classList.add('show')
      }
    }
  }

  useEffect(
    /** Dummy handler */
    () => {
      delay(() => {
        setIsLoading((prev) => ({ ...prev, my: false }))
      }, 1000)
    },
    []
  )

  return (
    <>
      <SidebarWrapper
        className={['navigator', isNavOpen ? 'expanded' : ''].join(' ')}
        onMouseOver={onNavigator(true)}
        onMouseLeave={onNavigator(false)}
        theme={themeMode}>
        <div className="navbar-header">
          <ul className="nav">
            <li className="nav-item logo">
              <Link href="/">
                <div className="status">
                  {networkStatus ? (
                    <Badge status="success" className="network-badge" />
                  ) : (
                    <Badge status="error" className="network-badge" />
                  )}
                </div>
                <div className="logo"></div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="shadow-bottom"></div>
        <div className="navbar-container">
          <ul className="nav">
            <li className="nav-item flex">
              <button className="logout">
                <span className="icon">→</span>
                <span className="text">로그아웃</span>
              </button>
              <div className="nav-close" onClick={onNavigator(false)}>
                ✕
              </div>
            </li>
            <li className={`nav-item has-sub`}>
              <Link href="/" locale={locale} onClick={onClickItem}>
                <span className="icon">→</span>
                <span className="text">Home</span>
              </Link>
              <ul className="menu-content">
                <div className={`collapse ${pathname.includes('/page1') ? 'show' : ''}`}>
                  <li className="nav-item">
                    <Link href="/page1" locale={locale}>
                      <span className="icon">→</span>
                      <span>Page1</span>
                    </Link>
                  </li>
                </div>
              </ul>
              <ul className="menu-content">
                <li className="nav-item-header">
                  <span className="icon">■</span>
                  <span className="text">MEMBER</span>
                </li>
                <li className="nav-item">
                  <Link href="/" locale={locale}>
                    <span className="icon">→</span>
                    <span className="text">관리</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/" locale={locale}>
                    <span className="icon">→</span>
                    <span className="text">추가</span>
                  </Link>
                </li>
              </ul>
              <ul className="menu-content">
                <li className="nav-item-header">
                  <span className="text">Miracle 2.0</span>
                </li>
                <li className="nav-item">
                  <Link href="#" locale={locale}>
                    <span className="icon">→</span>
                    <span className="text">{locale === 'ko' ? '준비중' : 'Comming soon'}</span>
                  </Link>
                </li>
                <li className="nav-item has-sub">
                  <Link href="#" locale={locale} onClick={onClickItem}>
                    <span className="icon">→</span>
                    <span className="text">{locale === 'ko' ? '준비중' : 'Comming soon'}</span>
                  </Link>
                  <ul className="menu-content">
                    <div className="collapse">
                      <li className="nav-item">
                        <Link href="#" locale={locale}>
                          <span className="icon">→</span>
                          <span>{locale === 'ko' ? '서브1' : 'SUB1'}</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="#" locale={locale}>
                          <span className="icon">→</span>
                          <span>{locale === 'ko' ? '서브2' : 'SUB2'}</span>
                        </Link>
                      </li>
                    </div>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </SidebarWrapper>
      <HeaderWrapper>
        <div className="header-group-start">
          <div ref={hamburgerRef} className="header-item hamburger" onClick={onHamburgerClick}>
            <HamburgerSvg />
          </div>
        </div>
        {isLoading.my ? (
          <Space className="header-group-end">
            <div className="header-item">
              <Skeleton.Button
                active
                size={'default'}
                shape="square"
                rootClassName="skeleotn-theme"
                {...SkeletonStyle}
              />
            </div>
            <div className="header-item">
              <Skeleton.Button
                active
                size={'default'}
                shape="round"
                className="skeleton-theme"
                {...SkeletonStyle}
              />
            </div>
            <div className="header-item">
              <Skeleton.Button
                active
                size={'default'}
                shape="square"
                className="skeleton-theme"
                {...SkeletonStyle}
              />
            </div>
          </Space>
        ) : (
          <div className="header-group-end">
            <div className="header-item">
              <div className="country">
                <CountrySelect
                  defaultValue={locale}
                  placeholder="Select a country"
                  variant="borderless"
                  suffixIcon={null}
                  onChange={(value) => router.push(pathname, { locale: value as 'en' | 'ko' })}
                  options={[
                    {
                      value: 'en',
                      label: (
                        <CountryOption>
                          <Image
                            src={
                              'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/us.svg'
                            }
                            typeof="svg"
                            alt="US"
                            width={16}
                            height={16}
                          />
                          <span>English</span>
                        </CountryOption>
                      ),
                      className: 'flex align-center m-p-0!',
                    },
                    {
                      value: 'ko',
                      label: (
                        <CountryOption>
                          <Image
                            src={
                              'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/kr.svg'
                            }
                            typeof="svg"
                            alt="KR"
                            width={16}
                            height={16}
                          />
                          <span>Korea</span>
                        </CountryOption>
                      ),
                      className: 'flex align-center m-p-0!',
                    },
                  ]}
                />
              </div>
              {/* @todo isHide */}
              <div className="header-item">
                <DarkModeToggle />
              </div>
              <div className="header-item profile">
                <div className="info">
                  <span className="user-name">Dummy</span>
                  <span className="user-role">Member</span>
                </div>
                <div className="img">
                  <Image src={NoneProfileImage} alt="profile" />
                </div>
              </div>
            </div>
          </div>
        )}
      </HeaderWrapper>
    </>
  )
}

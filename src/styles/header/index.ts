import { EXPANDED_WIDTH, lg, ThemeMode, WIDTH, xs } from '@/styles/styles'
import { Select } from 'antd'
import styled from 'styled-components'

export const SidebarWrapper = styled.aside<{ theme: ThemeMode }>`
  @keyframes statusIndicatorPulsePositive {
    0% {
      box-shadow: 0 0 0 0 rgb(75 210 143 / 50%);
      box-shadow: 0 0 0 0 var(--status-indicator-color-positive-semi);
    }
    70% {
      box-shadow: 0 0 0 10px rgb(75 210 143 / 0%);
      box-shadow: 0 0 0 var(--status-indicator-size)
        var(--status-indicator-color-positive-transparent);
    }
    100% {
      box-shadow: 0 0 0 0 rgb(75 210 143 / 0%);
      box-shadow: 0 0 0 0 var(--status-indicator-color-positive-transparent);
    }
  }
  @keyframes statusIndicatorPulseNegative {
    0% {
      box-shadow: 0 0 0 0 rgb(255 77 79 / 50%);
      box-shadow: 0 0 0 0 var(--status-indicator-color-negative-semi);
    }
    70% {
      box-shadow: 0 0 0 10px rgb(255 77 79 / 0%);
      box-shadow: 0 0 0 var(--status-indicator-size)
        var(--status-indicator-color-negative-transparent);
    }
    100% {
      box-shadow: 0 0 0 0 rgb(255 77 79 / 0%);
      box-shadow: 0 0 0 0 var(--status-indicator-color-negative-transparent);
    }
  }
  color: var(--color-primary-most);
  background-color: var(--color-primary-contrast);

  width: 100%;
  height: 100%;
  z-index: 9;
  box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;
  backface-visibility: hidden;

  position: fixed;
  display: table-cell;

  max-width: ${EXPANDED_WIDTH};

  ${lg} {
    max-width: ${WIDTH};
  }
  ${xs} {
    max-width: ${EXPANDED_WIDTH};
    left: ${`-${EXPANDED_WIDTH}`};
  }

  ul {
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--color-primary-most);
  }

  &:focus {
    background-color: gray;
  }

  .navbar-header {
    padding: 0.35rem 1rem 0.3rem 1rem;
    width: 16.25rem;
    height: 4.45rem;
    position: relative;
    transition: all 0.3s ease, background 0s;

    .nav {
      border-radius: 0.25rem;

      display: flex;
      flex-direction: column;

      height: 100%;

      .nav-item {
        width: 100%;

        &.logo {
          flex: 1;
        }

        &.flex {
          display: flex;
          flex-flow: row nowrap;
        }

        a {
          outline: none;
          display: flex;
          align-items: center;
          font-size: inherit;
          height: 100%;

          *:first-child {
            flex: 0 0 20%;
          }

          .status {
            display: inline-flex;
            justify-content: center;

            ${xs} {
              flex: 0;
            }

            .network-badge {
              ${xs} {
                flex: 0;
                display: initial;
              }

              .ant-badge-status-dot {
                width: 0.75rem;
                height: 0.75rem;

                &:after {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  border: 1px solid;
                  border-radius: 50%;

                  content: '';
                }

                &.ant-badge-status-success:after {
                  border-color: #52c41a;
                  animation: statusIndicatorPulsePositive 1s infinite ease-in-out !important;
                }
                &.ant-badge-status-error:after {
                  border-color: #ff4d4f;
                  animation: statusIndicatorPulseNegative 1s infinite ease-in-out !important;
                }
              }

              .ant-badge-status-text {
                margin: 0;
              }
            }
          }

          div.logo {
            height: 70%;

            ${lg} {
              display: none;
            }

            display: inline;
            background: ${({ theme }) =>
              theme === 'light'
                ? `url('/imgs/logo.png') no-repeat center/contain`
                : `url('/imgs/logo.png') no-repeat center/contain`};

            margin-left: 1.64rem;

            flex: 0 0 50%;

            ${xs} {
              flex: 1;
              margin: 0;
            }
          }
        }
      }
    }
  }

  .shadow-bottom {
    background: ${({ theme }) =>
      theme === 'dark'
        ? `linear-gradient(180deg,#283046 44%,rgba(40,48,70,.51) 73%,rgba(40,48,70,0))`
        : `linear-gradient(#fff 41%,hsla(0,0%,100%,.11) 95%,hsla(0,0%,100%,0))`};

    margin-top: -0.7rem;

    display: none;
    position: absolute;
    z-index: 2;
    height: 3.125rem;
    width: 100%;
    pointer-events: none;
    filter: blur(5px);
  }

  .navbar-container {
    height: calc(100% - 4.5rem);
    position: relative;

    ${lg} {
      overflow: hidden;
    }
    overflow: auto;
    overflow-anchor: none;
    touch-action: auto;

    color: var(--text-color-normal);

    direction: ltr;
    text-align: left;

    .nav {
      background-color: var(--color-primary-contrast);
      padding-bottom: 0.75rem;

      font-size: 1.2rem;
      font-weight: 400;
      letter-spacing: -0.0325rem;

      li {
        position: relative;
        white-space: nowrap;
      }

      .nav-item-header {
        margin: 0 1rem;
        padding: 2.286rem 1rem 0.8rem;
        color: var(--text-color-normal);
        background-color: var(--color-primary-contrast);
        line-height: 1.5;
        letter-spacing: 0.075rem;
        text-transform: uppercase;
        font-size: 1.125rem;
        font-weight: 500;

        display: flex;
        justify-content: flex-start;

        ${lg} {
          justify-content: center;
        }
        ${xs} {
          font-size: 1rem;
        }

        .text {
          display: block !important;

          ${lg} {
            display: none !important;
          }
        }

        .icon {
          width: 1.125rem;
          height: 1.125rem;

          ${lg} {
            display: block;
          }
          display: none;
        }
      }

      .nav-item {
        color: var(--text-color-normal);
        background-color: var(--color-primary-contrast);
        margin: 0 !important;

        a,
        button {
          cursor: pointer;
          outline: none;
          border: 0;
          text-overflow: inherit;
          margin: 0 0.9375rem;
          padding: 0.625rem 0.9375rem;

          background-color: var(--color-primary-contrast);
          color: var(--text-color-normal);
          line-height: 1.45;

          overflow: hidden;
          outline: none;

          display: flex;

          > * {
            transition: transform 0.25s ease;

            font-size: 1rem;

            ${xs} {
              font-size: 0.875rem;
            }
          }

          .icon {
            margin-right: 1.25rem;

            width: 1.25rem;
            height: 1.25rem;
            font-size: 1rem;

            position: relative;
            top: 1px;
            left: 2px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            ${xs} {
              margin-right: 0.875rem;
              left: 0;
            }
          }
          .text {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            line-height: 1.75;

            display: inline-flex;
            align-items: center;
          }

          &:hover {
            transition: all 0.5s ease, background 0s, color 0s;
            > * {
              transform: translate(5px);
              transition: transform 0.25s ease;
            }
          }
        }

        button.logout {
          margin: 0 auto;
          padding-right: 2rem;
          font-family: var(--font-pretendard-std);
          ${lg} {
            padding-right: initial;
          }
          .text {
            ${lg} {
              display: none;
            }
            display: flex;
          }
        }

        .nav-close {
          display: none;
        }

        .menu-content {
          > .collapse {
            transition: max-height 0.5s, visibility 0.3s;
          }
          > .collapse.show {
            max-height: 100vh;
            visibility: visible;
          }
          > .collapse:not(.show) {
            max-height: 0;
            visibility: hidden;
            li:not(.has-sub) {
              margin: 0.4375rem 0.9375rem 0;
              background: transparent;
              color: var(--text-color-normal);
            }
          }
        }

        &.has-sub {
          &.open {
            > a {
              background-color: var(--color-body);
              border-radius: 0.375rem;

              &:after {
                transform: rotate(90deg) !important;
              }
            }
            .menu-content {
              background-color: var(--color-primary-contrast);
            }
          }
        }
      }
    }
  }

  &.expanded {
    max-width: ${EXPANDED_WIDTH};

    ${xs} {
      transform: ${`translate3d(${EXPANDED_WIDTH}, 0, 0)`};
    }

    .navbar-header {
      .nav {
        .nav-item {
          a {
            outline: none;
            div.logo {
              display: inline-flex;
              align-items: center;
            }
          }
        }
      }
    }

    .navbar-container {
      overflow: auto;

      .nav {
        .nav-item-header {
          justify-content: flex-start;

          .text {
            display: block !important;
          }

          .icon {
            display: none;
          }
        }

        .nav-item {
          button.logout {
            margin: 0 auto;
            padding-right: 2rem;

            .text {
              display: flex;
            }
          }
          .nav-close {
            display: none;

            cursor: pointer;

            ${xs} {
              display: inline-flex;
              align-items: center;
              justify-content: center;

              padding: 0.625rem 0.9375rem;
            }
          }
          &.has-sub {
            > a::after {
              content: '';
              height: 1rem;
              width: 1rem;
              font-size: 1rem;
              display: inline-block;
              position: absolute;
              top: 0.875rem;
              right: 1.25rem;
              transition: 0.2s ease-out;

              background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E");
              background-repeat: no-repeat;
              background-position: 50%;
              background-size: 1rem;
              transform: rotate(0deg);
            }
          }
        }
      }
    }
  }
`

export const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  right: 0;
  z-index: 7;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);

  padding: 0.8rem 1rem;
  margin: 1.3rem 2rem 0;

  background-color: var(--color-primary-contrast);
  border-radius: 0.428rem;

  width: calc(100% - 15.4rem - 74px);
  min-height: ${WIDTH};

  ${lg} {
    width: calc(100% - 4.4rem - 74px);
  }

  ${xs} {
    margin: 1.3rem auto 0;
    width: calc(100% - 2.4rem);
    left: 0;
  }

  .header-group-start,
  .header-group-end {
    display: flex;
    justify-content: center;
  }

  .header-group-start {
    color: var(--color-primary-assistive);
    .hamburger {
      display: none;

      ${xs} {
        display: inline-flex;
      }
    }
  }

  .header-item {
    cursor: pointer;
    display: inline-flex;
    align-items: center;

    font-size: 0.875rem;

    ${xs} {
      font-size: 0.75rem;
    }

    &.profile {
      margin-left: 1rem;

      ${xs} {
        margin-left: 0.5rem;
      }
      .info {
        margin-right: 0.425rem;

        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        ${xs} {
          display: none;
        }
        > * {
          display: inline-block;
          line-height: 1;
          color: var(--text-color-normal);
        }
        .user-name {
          font-weight: 500;
          margin-bottom: 0.435rem;
          letter-spacing: 1px;

          max-width: 7.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .user-role {
          font-size: smaller;
        }
      }
      .img {
        img {
          border-radius: 5rem;
        }
      }
    }
  }
`

export const CountrySelect = styled(Select)`
  width: auto;

  text-align: center;
`

export const CountryOption = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  padding: 0;

  font-size: 0.875rem;
  min-width: 5rem;

  color: var(--text-color-normal);

  ${xs} {
    justify-content: center;

    font-size: 0.75rem;
    min-width: auto;
  }

  img {
    display: inline-block;
    width: 1rem;
    height: 1rem;

    margin-right: 0.4rem;

    ${xs} {
      margin-right: 0;
    }
  }

  span {
    ${xs} {
      display: none;
    }
  }
`

export const Toggle = styled.input`
  cursor: pointer;
  position: relative;
  width: 4rem;
  height: 2rem;
  outline: none;
  appearance: none;
  background-color: rgba(224, 224, 224, 1);
  transition: all 0.5s;
  border: 1.5px solid rgba(40, 40, 40, 1);
  border-radius: 1.25rem;

  ${xs} {
    width: 3rem;
    height: 1.5rem;
    border-width: 1px;
  }
  &:checked {
    background-color: rgba(40, 40, 40, 1);
    border-color: rgba(224, 224, 224, 1);
    transition: all 0.5s;
  }
  &::before {
    content: '';
    background: url('/svgs/sun.svg') no-repeat center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 3px;
    left: 4px;
    background-color: transparent;
    border-radius: 2rem;
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
    transition: all 0.25s;

    ${xs} {
      width: 1rem;
      height: 1rem;
    }
  }
  &:checked::before {
    content: '';
    background: url('svgs/moon.svg') no-repeat center/cover;
    left: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    ${xs} {
      left: 1.625rem;
    }
  }
`

import styled from 'styled-components'
import { $2xl, $2xs, md, sm, ThemeMode } from '../styles'

export const Wrapper = styled.div<{ theme: ThemeMode }>`
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);

  display: flex;
  flex-wrap: wrap;

  overflow-y: hidden;

  .logo {
    position: absolute;
    top: 2rem;
    left: 2rem;

    background: ${({ theme }) =>
        theme === 'light' ? `url('/imgs/logo.png')` : `url('/imgs/logo.png')`}
      no-repeat center/contain;
    width: 3rem;
    height: 3rem;

    ${md} {
      width: 2rem;
      height: 2rem;
    }
  }

  .content {
    flex: 0 0 66.66667%;
    max-width: 66.6667%;

    padding: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    ${md} {
      display: none;
    }

    .content-item {
      padding: 0 4rem;

      img {
        border-style: none;
        max-width: 100vh;
        height: auto;
      }
    }
  }

  .wrapper {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;

    background-color: var(--color-primary-contrast);

    padding: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    ${md} {
      flex: 0 0 100%;
      max-width: 100%;

      padding: 2rem;
    }

    .container {
      flex: 0 0 70%;
      max-width: 70%;
      padding: 0 1.5rem;
      margin: 0 auto;
      color: var(--text-color-normal);
      ${$2xl} {
        flex: 0 0 100%;
        max-width: 100%;
      }

      ${md} {
        flex: 0 0 50%;
        max-width: 50%;
      }

      ${sm} {
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
      }

      ${$2xs} {
        flex: 0 0 100%;
        max-width: 100%;
        padding: 0;
      }

      h2 {
        font-size: 1.74rem;
        font-weight: 300;
        text-align: center;
        margin-bottom: 1rem;
      }

      form {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        .form-item {
          .input {
            height: 2.714rem;
          }

          .submit-button {
            /* color: var(--text-color-normal); */
            padding: 0.786rem 1.5rem;
            border: 1px solid transparent;
            box-shadow: none;
            width: 100%;
            min-height: 2.714rem;

            display: inline-flex;
            justify-content: center;
            align-items: center;

            &:disabled {
              background: rgba(128, 128, 128, 0.4);
              /* color: var(--text-color-normal); */
            }
          }

          .form-message {
            color: red;
            font-size: 0.75rem;
          }
        }
      }
    }
  }
`

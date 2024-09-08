import { AuthOptions, getServerSession } from 'next-auth'
import 'next-auth/jwt'
import Credentials from 'next-auth/providers/credentials'

const combineCredentials = Credentials({
  name: 'Miracle Credentials',
  credentials: {
    id: {
      label: 'ID',
      placeholder: 'your ID',
      type: 'text',
    },
    password: {
      label: 'Password',
      placeholder: 'your Password',
      type: 'password',
    },
  },
  /**
   * auth callback
   */
  async authorize(credentials) {
    try {
      if (credentials?.id && credentials?.password) {
        if (credentials.id !== 'dummy' && credentials.password !== 'dummy') return null

        // Add you backend code here
        // let loginRes = await backendLogin(credentials.id, credentials.password)

        let loginRes = {
          success: true,
          data: {
            user: {
              ID: credentials.id,
              NAME: 'Jang Dillon',
            },
          },
        }

        // Failed logging in

        if (!loginRes.success) return null

        // Successful log in

        const user = {
          id: loginRes.data.user.ID ?? '',
          name: loginRes.data.user.NAME ?? '',
        }

        return user
      }
      return null
    } catch (error) {
      console.error(error)

      return null
    }
  },
})

const authOptions: AuthOptions = {
  providers: [combineCredentials],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }

      return token
    },
    async session({ session, token }) {
      session.user = token
      return session
    },
  },
  debug: process.env.NODE_ENV !== 'production',
  secret: 'c72527aae5db839ce0a0c55183b305bb', // process.env.NEXTAUTH_SECRET
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
}

const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }

// declare module 'next-auth' {
//   interface Session {
//     jwtToken?: string
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT {
//     jwtToken?: string
//   }
// }

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
      console.log('2️⃣', credentials)
      if (credentials?.id && credentials?.password) {
        // Add you backend code here
        // let loginRes = await backendLogin(credentials.id, credentials.password)

        // let loginRes = {
        //   success: true,
        //   data: {
        //     user: {
        //       ID: 'Dillon',
        //       NAME: 'Jang Dillon',
        //       EMAIL: 'dillon@sevenlinelabs.com',
        //     },
        //   },
        // }

        // Failed logging in

        // if (!loginRes.success) return null

        // Successful log in

        // const user = {
        //   id: loginRes.data.user.ID ?? '',
        //   name: loginRes.data.user.NAME ?? '',
        //   email: loginRes.data.user.EMAIL ?? '',
        // }

        return { id: 'dillon', password: '1234' }
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
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token
      return session
    },
  },
  debug: process.env.NODE_ENV !== 'production',
  secret: '512c47b6dcff7b302d1e71989ffd724f', // process.env.NEXTAUTH_SECRET
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

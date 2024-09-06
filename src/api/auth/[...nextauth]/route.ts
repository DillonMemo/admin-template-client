// in app/api/auth/[...nextauth]/route.ts
import { authOptions } from '@/services/auth'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions)
}

export { handler as GET, handler as POST }

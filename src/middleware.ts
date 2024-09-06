import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  return intlMiddleware(request)
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/((?!api|_next|.*\\..*).*)'],
}

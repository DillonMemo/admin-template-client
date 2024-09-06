import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request)
  response.headers.set('x-current-path', request.nextUrl.pathname)
  return response
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/((?!api|_next|.*\\..*).*)'],
}

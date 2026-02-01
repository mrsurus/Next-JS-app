import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const userdata = {
    role: 'user',
    email: 'example@gmail.com'
  }
  const pathName =  request.nextUrl.pathname.startsWith('/service')
  const isAdmin = userdata.role === 'admin'
  if(pathName && !isAdmin){
    return NextResponse.rewrite(new URL('/', request.url))
  }

  
  return NextResponse.next()
}
 

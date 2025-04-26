import { NextResponse } from 'next/server';

export function middleware(request) {
  // Fetch the API key stored in cookies
  const adminKey = request.cookies.get('admin_key')?.value;

  // Log for debugging purposes
  // console.log('Admin Key in Cookies:', adminKey);
  // console.log('Environment API Key:', process.env.KEY);

  // Check if the admin API key in cookies matches the stored environment key
  if (
    request.nextUrl.pathname.startsWith('/admin') &&
    request.nextUrl.pathname !== '/admin/login' &&
    adminKey !== process.env.NEXT_PUBLIC_KEY
  ) {
    console.log('Redirecting to login...');
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Proceed to the next response if authenticated
  return NextResponse.next();
}

// Configure middleware to run on all admin-related paths
export const config = {
  matcher: ['/admin/:path*'],
};

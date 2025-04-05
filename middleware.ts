import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware handles CORS for the application
export function middleware(request: NextRequest) {
  // Get the origin from the request headers
  const origin = request.headers.get('origin') || '';

  // Create a response object from the incoming request
  const response = NextResponse.next();

  // List of allowed origins
  const allowedOrigins = ['http://192.168.100.183', 'http://192.168.100.183:3000', 'https://192.168.100.183'];
  
  // Add CORS headers only if the origin is in our allowed list
  if (allowedOrigins.includes(origin)) {
    // Set CORS headers
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Max-Age', '86400'); // 24 hours
  }

  // Handle preflight OPTIONS requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { 
      status: 204,
      headers: response.headers
    });
  }

  return response;
}

// Specify which paths this middleware should run on
export const config = {
  matcher: '/api/:path*',
};


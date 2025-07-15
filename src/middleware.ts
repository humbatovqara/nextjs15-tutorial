import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;

  //   return NextResponse.redirect(new URL("/", request.url));

  //   if (request.nextUrl.pathname === "/about") {
  //     return NextResponse.redirect(new URL("/hello", request.nextUrl)); // rewrite
  //   }
}

// export const config = {
//   matcher: "/about",
// };

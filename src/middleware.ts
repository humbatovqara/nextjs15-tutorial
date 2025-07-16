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

/*
  ----- RENDERING -----
  1. Server-side Rendering (SSR) - async komponent → SSR
  2. Static site generation (SSG) - export const dynamic = 'force-static' → SSG
  3. Client-side Rendering (CSR) - use client olan komponent → CSR
  4. Streaming & Partial Rendering (Server components + Suspense)

  ----- Server-side Rendering (SSR) -----
  Komponent hər request zamanı serverdə render olunur, sonra HTML olaraq browser-a göndərilir. 
  async component = SSR
  + SEO üçün uyğundur
  - Hər dəfə server çağırışı var (yavaş ola bilər)
 
  Example:
  export default async function Page() {
    const data = await getData(); // SSR
    return <div>{data.title}</div>;
  }

  ----- Static Site Generation (SSG) -----
  Component build zamanı render olunur və HTML faylı kimi saxlanılır.
  + Sürətli
  - Data dinamik deyilsə uyğundur

  Example:
  export const dynamic = 'force-static';

  export default async function Page() {
    const data = await getData();
    return <div>{data.title}</div>;
  }


  ----- Client-side Rendering (CSR) -----
  Component browser-də render olunur. Əsasən useEffect və useState ilə işləyən dinamik komponentlərdə.
  + Real-time interaktivlik
  - SEO üçün zəifdir

  Example:
  'use client'; // Vacib!

  import { useEffect, useState } from 'react';

  export default function Page() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('/api/data').then(res => res.json()).then(setData);
    }, []);

    return <div>{data?.title}</div>;
  }

  ----- Streaming & Partial Rendering (Server components + Suspense) -----
  Böyük səhifələrə hissə-hissə yükləmə, React Server Components və Suspense ilə olur

  Example:
  export default function Page() {
    return (
      <div>
        <h1>Main Content</h1>
        <Suspense fallback={<p>Loading sidebar...</p>}>
          <Sidebar />
        </Suspense>
      </div>
    );
  }
*/

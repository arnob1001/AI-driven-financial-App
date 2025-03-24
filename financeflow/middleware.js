import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

// Create base Clerk middleware
const clerk = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // Allow CORS headers
  const res = NextResponse.next();
  res.headers.set("Access-Control-Allow-Origin", req.headers.get("origin") || "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return res;
});

// Export Clerk middleware
export default clerk;

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

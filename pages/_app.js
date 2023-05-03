import "@/styles/globals.css";
import { Suspense } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...pageProps} />
    </Suspense>
  );
}

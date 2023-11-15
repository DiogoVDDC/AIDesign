import { type AppType } from "next/app";
import { api } from "~/utils/api";

import "~/styles/globals.css";
import config from "../../tailwind.config";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useRouter } from "next/router";
import Head from "next/head";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

const Footer = () => {
  const router = useRouter();

  return (
    <div className="absolute bottom-0 h-[100px] w-full bg-slate-800">
      <div className="container">
        <div className="flex justify-between pt-8">
          <p
            className="cursor-pointer font-serif text-white"
            onClick={() => router.push("/")}
          >
            {/* Independent FAIR Marking Agency */}
            Independent FAIR Rating Agency
          </p>
          <i className="bi bi-linkedin cursor-pointer text-white"></i>
        </div>
        <hr className="mt-2" />
      </div>
    </div>
  );
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Independent FAIR rating agency</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Work+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative min-h-[100vh]">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>

    // <ClerkProvider {...pageProps}>
    // </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);

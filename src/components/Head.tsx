import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <div>
      <Helmet>
        <title>Cephas Naweji</title>
        <meta name="description" content="I'm build awesome website" />
        <meta
          name="keywords"
          content="react, web development, javascript, Front-end development, Web design, Responsive design, Cross-browser compatibility, Full-stack developement, UI, UX, Computer programming"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/icons/site.webmanifest" />
        <link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="Cephas Naweji" />
        <meta name="application-name" content="Cephas Naweji" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
    </div>
  );
};

export default Head;

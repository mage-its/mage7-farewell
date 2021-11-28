import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: "MAGE | Multimedia And Game Event",
  siteName: 'mage-its.com',
  description:
    'MAGE(Multimedia and Game Event) adalah serangkaian acara dibidang IT yang diadakan oleh Departemen Teknik Komputer - FTEIC ITS sebagai wadah bagi generasi muda dalam berkreasi, berekspresi, dan berkompetisi untuk menuangkan inovasi sekaligus menyelesaikan permasalahan dengan memanfaatkan berbagai macam teknologi melalui serangkaian kegiatan seperti Development Competition (Apps, IoT, Games), Olimpiade, Workshop, dan Webinar.',
  url: 'https://mage-its.com',
  image: 'https://mage-its.com/seo/og-image.png',
  type: 'website',
  robots: 'follow, index',
  googlebot: 'follow, index',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

const Seo = (props: SeoProps) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@mage_its' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#000000' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/mstile-150x150.png'
      />
      <meta name='theme-color' content='#000000' />
    </Head>
  );
};

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/apple-touch-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-chrome-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
  {
    rel: 'manifest',
    href: '/favicon/site.webmanifest',
  },
];

export default Seo;

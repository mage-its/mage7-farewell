import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiMail } from 'react-icons/fi';
import { SiFacebook, SiInstagram, SiLine, SiTwitter, SiYoutube } from 'react-icons/si';

const mail = 'mage.ce.its@gmail.com';
const accounts = [
  {
    label: 'Facebook',
    SocialIcon: SiFacebook,
    link: 'https://www.facebook.com/mageits',
  },
  {
    label: 'Instagram',
    SocialIcon: SiInstagram,
    link: 'https://www.instagram.com/mage_its/',
  },
  {
    label: 'Line Messenger',
    SocialIcon: SiLine,
    link: 'https://page.line.me/?accountId=rio5948f',
  },
  {
    label: 'Twitter',
    SocialIcon: SiTwitter,
    link: 'https://twitter.com/mage_its',
  },
  {
    label: 'YouTube',
    SocialIcon: SiYoutube,
    link: 'https://www.youtube.com/channel/UCO1SuldERZu0jgBBDzzOkoQ',
  }
];

const Footer = () => {
  const [copyStatus, setCopyStatus] = useState('Click to copy');

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} id="contact">
      {
        accounts.map(({SocialIcon, link, label}, i) => (
          <Grid item key={i}>
            <Link href={link} target="_blank" rel="noopener" aria-label={label}>
              <SocialIcon className='text-mwhite hover:text-mred transition-all duration-300 w-6 h-6 cursor-ne-resize hover:animate-bounce' />
            </Link>
          </Grid>
        ))
      }
      <Grid item>
        <Tippy
          animation="scale-subtle"
          interactive
          hideOnClick={false}
          content={(
            <span className="inline-flex flex-col items-center p-2 bg-dark rounded-md shadow-md border-thin">
              { copyStatus }
              <span className="inline-block font-bold text-mred">
                { mail }
              </span>
            </span>
        )}
        >
          <div>
            <CopyToClipboard
              text={mail}
              onCopy={() => {
                setCopyStatus('Copied to clipboard !');
                setTimeout(
                  () => setCopyStatus('Click to copy'),
                  1469,
                );
              }}
            >
              <span>
                <FiMail className='text-mwhite hover:text-mred transition-all duration-300 w-7 h-7 hover:animate-bounce' />
              </span>
            </CopyToClipboard>
          </div>
        </Tippy>
      </Grid>
    </Grid>
  );
};

export default Footer;

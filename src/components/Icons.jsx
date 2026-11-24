import { FaGithub, FaLinkedinIn, FaSpotify, FaSteam } from 'react-icons/fa6';
import { SiGooglescholar, SiOrcid, SiAcm } from 'react-icons/si';
import { LuMail } from 'react-icons/lu';

const MAP = {
  email: LuMail,
  scholar: SiGooglescholar,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  orcid: SiOrcid,
  acm: SiAcm,
  spotify: FaSpotify,
  steam: FaSteam,
};

export function SocialIcon({ id, ...rest }) {
  const Icon = MAP[id] ?? LuMail;
  return <Icon aria-hidden="true" {...rest} />;
}

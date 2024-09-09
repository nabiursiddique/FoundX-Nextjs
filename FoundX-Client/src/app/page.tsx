import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';

import { siteConfig } from '@/src/config/site';
import { title, subtitle } from '@/src/components/primitives';
import { GithubIcon } from '@/src/components/icons';

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <h1>FoundX</h1>
    </section>
  );
}

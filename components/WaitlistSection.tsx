import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { AvatarCircles } from '@/components/magicui/avatar-circles';

// Social icons (inline SVGs for portability)
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M20.947 8.305a6.53 6.53 0 00-.419-2.216 4.61 4.61 0 00-2.633-2.633 6.606 6.606 0 00-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 00-2.185.42 4.607 4.607 0 00-2.633 2.633 6.554 6.554 0 00-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 002.634 2.632 6.584 6.584 0 002.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 002.186-.419 4.615 4.615 0 002.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 010 9.246zm4.807-8.339a1.077 1.077 0 01-1.078-1.078 1.077 1.077 0 112.155 0c0 .596-.482 1.078-1.077 1.078z" />
    <circle cx="11.994" cy="11.979" r="3.003" />
  </svg>
);
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M14.82 4.26a10.14 10.14 0 00-.53 1.1 14.66 14.66 0 00-4.58 0 10.14 10.14 0 00-.53-1.1 16 16 0 00-4.13 1.3 17.33 17.33 0 00-3 11.59 16.6 16.6 0 005.07 2.59A12.89 12.89 0 008.23 18a9.65 9.65 0 01-1.71-.83 3.39 3.39 0 00.42-.33 11.66 11.66 0 0010.12 0q.21.18.42.33a10.84 10.84 0 01-1.71.84 12.41 12.41 0 001.08 1.78 16.44 16.44 0 005.06-2.59 17.22 17.22 0 00-3-11.59 16.09 16.09 0 00-4.09-1.35zM8.68 14.81a1.94 1.94 0 01-1.8-2 1.93 1.93 0 011.8-2 1.93 1.93 0 011.8 2 1.93 1.93 0 01-1.8 2zm6.64 0a1.94 1.94 0 01-1.8-2 1.93 1.93 0 011.8-2 1.92 1.92 0 011.8 2 1.92 1.92 0 01-1.8 2z" />
  </svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
  </svg>
);
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 110-3.096 1.548 1.548 0 010 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
  </svg>
);

const Avatar = ({ initials, index }: { initials: string; index: number }) => {
  const colors = [
    'bg-purple-600',
    'bg-blue-600',
    'bg-blue-700',
  ];
  return (
    <div className={`w-10 h-10 rounded-full border border-white/20 ${colors[index % colors.length]} flex items-center justify-center text-white font-semibold text-sm`}>
      {initials}
    </div>
  );
};

const SocialIcon = ({ href, "aria-label": ariaLabel, icon, target, rel }: { href: string; "aria-label": string; icon: React.ReactNode; target?: string; rel?: string }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    target={target}
    rel={rel}
    className="text-gray-400 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110"
  >
    {icon}
  </a>
);

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

export default function WaitlistSection() {
  const [waitlistCount, setWaitlistCount] = useState(1000); // Static fallback

  // Simulate async fetch for demo
  useEffect(() => {
    setTimeout(() => setWaitlistCount(1123), 1000);
  }, []);

  const [email, setEmail] = useState('');
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setTimeout(() => {
      setPending(false);
      setSuccess(true);
      setEmail('');
      setWaitlistCount((c) => c + 1);
    }, 1200);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-2 sm:px-8 py-8 flex flex-col items-center relative" style={{ zIndex: 1 }}>
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 text-center">Join the Waitlist</h1>
        <p className="text-[14px] font-light text-white/80 text-center mb-8 max-w-xl">
          Be part of something truly extraordinary. Join thousands of others already gaining early access to our revolutionary new platform.
        </p>
        <form onSubmit={handleSubmit} className="w-full space-y-4 mb-8">
          <div className="flex overflow-hidden rounded-xl p-1 border border-[rgba(200,200,220,0.15)] focus-within:border-[rgba(200,200,220,0.35)] transition-colors duration-200">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="email-error"
              className="w-full border-0 bg-transparent text-white placeholder:text-white/60 focus:ring-0 focus:border-transparent focus-visible:border-transparent focus:outline-none active:ring-0 active:outline-none focus-visible:ring-0 focus-visible:outline-none active:border-transparent focus-visible:ring-offset-0"
              style={{ boxShadow: 'none' }}
            />
            <Button
              type="submit"
              disabled={pending}
              className="bg-white text-black font-semibold px-4 rounded-xl transition-all duration-300 ease-in-out focus:outline-none w-[120px] hover:bg-gray-100 hover:text-black border border-white/20 shadow-sm"
            >
              {pending ? 'Loading...' : 'Get Notified'}
            </Button>
          </div>
          {success && <div className="text-green-600 text-sm text-center">You have been added to the waitlist!</div>}
        </form>
        <div className="flex items-center justify-center mt-2 mb-6 gap-4">
          <AvatarCircles numPeople={waitlistCount - avatars.length} avatarUrls={avatars} />
          <p className="text-white font-semibold">{waitlistCount}+ people on the waitlist</p>
        </div>
      </div>
    </div>
  );
} 
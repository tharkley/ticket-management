import './SocialIcons.css';

const SocialIcons = () => {
  const socialProviders = [
    {
      label: 'Google',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M20.5 12.3A8.5 8.5 0 0 1 12 20.5a8.5 8.5 0 1 1 0-17 8.2 8.2 0 0 1 6.1 2.5L16.2 8A4.8 4.8 0 0 0 12 5.8a6.2 6.2 0 0 0 0 12.4 6.1 6.1 0 0 0 5.7-4.1H12v-2.8h8.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M14.5 21v-7.3h2.6l.4-3h-3V8.8c0-1 .3-1.6 1.7-1.6h1.8V4.4c-.3-.1-1.4-.2-2.6-.2-2.7 0-4.4 1.7-4.4 4.8v2.2H7v3h2.5V21h5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 .9A11.1 11.1 0 0 0 8.2 22.8c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.6-1.3-5.6-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.6-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.7-2.9 5.7-5.7 6 .4.3.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="social-row" aria-label="Social login options">
      {socialProviders.map(({ label, icon }) => (
        <button key={label} className="social-btn" type="button" aria-label={label}>
          {icon}
        </button>
      ))}
    </div>
  );
};

export default SocialIcons;

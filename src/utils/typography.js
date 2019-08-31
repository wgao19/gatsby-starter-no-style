import T from 'typography';

export default new T({
  baseFontSize: '18px',
  baseLineHeight: 1.7,
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['800']
    },
    {
      name: 'IBM Plex Mono',
      styles: ['400', '400i']
    }
  ],
  bodyFontFamily: ['IBM Plex Mono', 'monospace'],
  headerFontFamily: ['Nunito', 'sans-serif'],
  overrideStyles: ({ rhythm }) => {
    return {
      ':root': {
        '--spacing': '2rem',
        '--footer-height': '72px',
        '--navbar-height': '96px',
        '--round-corner': '2px'
      },
      h1: {
        paddingTop: rhythm(1.2),
        paddingBottom: rhythm(1.2),
        lineHeight: 1.8,
        fontStyle: 'italic'
      },
      h2: {
        paddingTop: rhythm(1),
        paddingBottom: rhythm(0.8)
      },
      a: {
        color: '#222',
        textDecoration: 'none',
        borderBottom: '3px solid gold',
        paddingBottom: '2px',
        transition: 'all .2s ease'
      },
      'a:hover, a:active, a:focus': {
        borderBottom: '1.5px solid gold'
      }
    };
  }
});

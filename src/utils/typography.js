import T from 'typography';

const typography = new T({
  baseFontSize: '18px',
  baseLineHeight: 1.7,
  googleFonts: [
    {
      name: 'IBM Plex Mono',
      styles: ['400', '400i', '600', '600i']
    }
  ],
  headerFontFamily: ['IBM Plex Mono', 'monospace'],
  bodyFontFamily: ['IBM Plex Mono', 'monospace'],
  overrideStyles: ({ rhythm }) => {
    return {
      ':root': {
        '--spacing': '2rem'
      },
      h1: {
        marginTop: rhythm(1.2),
        marginBottom: rhythm(1.2),
        lineHeight: 1.8,
        fontStyle: 'italic'
      },
      a: {
        color: '#222',
        textDecoration: 'none',
        borderBottom: '1.5px solid gold',
        paddingBottom: '2px',
        transition: 'all .1s ease'
      },
      'a:hover, a:active, a:focus': {
        borderBottom: '3px solid gold'
      }
    };
  }
});

export default typography;

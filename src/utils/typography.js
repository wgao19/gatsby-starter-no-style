import T from 'typography';

const typography = new T({
  baseFontSize: '18px',
  baseLineHeight: 1.7,
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['800']
    },
    {
      name: 'IBM Plex Sans',
      styles: ['400', '400i']
    }
  ],
  headerFontFamily: ['Nunito', 'sans-serif'],
  bodyFontFamily: ['IBM Plex Sans', 'monospace'],
  overrideStyles: ({ rhythm }) => {
    return {
      h1: {
        marginTop: rhythm(1.2),
        marginBottom: rhythm(1.2),
        lineHeight: 1.8
      },
      h2: {
        marginTop: rhythm(1),
        marginBottom: rhythm(0.8)
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

export default typography;

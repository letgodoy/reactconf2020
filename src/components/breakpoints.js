/* Extra small devices (phones, 600px and down) */
export const SmallScreen = '@media only screen and (max-width: 600px)'

/* Small devices (portrait tablets and large phones, 600px and up) */
export const BiggerThanSmall = '@media only screen and (min-width: 600px)'

/* Medium devices (landscape tablets, 768px and up) */
export const BiggerThanMedium = '@media only screen and (min-width: 768px)'

/* Large devices (laptops/desktops, 992px and up) */
export const BiggerThanLarge = '@media only screen and (min-width: 992px)'

/* Extra large devices (large laptops and desktops, 1200px and up) */
export const BiggerThanXLarge = '@media only screen and (min-width: 1200px)'

export const Colors = {
    Black: '#111',
    BlackTransp: '#111A',
    BlackText: '#424242',
    Pink: '#e71576',
    Yellow: '#FAEA27',
    Blue: '#28ABE3',
    White: '#fafafa',
    DarkBlue: '#167da9',
    LightBlue: '#6cc5ec',
    DarkPink: '#a10f52',
    LightPink: '#f0599e',
    DarkYellow: '#d0c005',
    LightYellow: '#fcf172'
}

export const GradientBorder = `
  border: 10px solid;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
`

export const ButtonStyle = `
    font-size: 16px;
    text-transform: uppercase;
    margin: 2em auto;
    letter-spacing: 3px;
    color: ${Colors.White};
    padding: 1em 3em;
    ${GradientBorder};
    background: linear-gradient(to left, #743ad5, #d53a9d);
    text-align: center;

    &:hover {
        background: #111b;
    }
`

// /* For desktop: */
// .col-1 {width: 8.33%;}
// .col-2 {width: 16.66%;}
// .col-3 {width: 25%;}
// .col-4 {width: 33.33%;}
// .col-5 {width: 41.66%;}
// .col-6 {width: 50%;}
// .col-7 {width: 58.33%;}
// .col-8 {width: 66.66%;}
// .col-9 {width: 75%;}
// .col-10 {width: 83.33%;}
// .col-11 {width: 91.66%;}
// .col-12 {width: 100%;}

// @media only screen and (max-width: 768px) {
//   /* For mobile phones: */
//   [class*="col-"] {
//     width: 100%;
//   }
// }

// /* For mobile phones: */
// [class*="col-"] {
//     width: 100%;
//   }
  
//   @media only screen and (min-width: 768px) {
//     /* For desktop: */
//     .col-1 {width: 8.33%;}
//     .col-2 {width: 16.66%;}
//     .col-3 {width: 25%;}
//     .col-4 {width: 33.33%;}
//     .col-5 {width: 41.66%;}
//     .col-6 {width: 50%;}
//     .col-7 {width: 58.33%;}
//     .col-8 {width: 66.66%;}
//     .col-9 {width: 75%;}
//     .col-10 {width: 83.33%;}
//     .col-11 {width: 91.66%;}
//     .col-12 {width: 100%;}
//   }

//   /* For mobile phones: */
// [class*="col-"] {
//     width: 100%;
//   }
  
//   @media only screen and (min-width: 600px) {
//     /* For tablets: */
//     .col-s-1 {width: 8.33%;}
//     .col-s-2 {width: 16.66%;}
//     .col-s-3 {width: 25%;}
//     .col-s-4 {width: 33.33%;}
//     .col-s-5 {width: 41.66%;}
//     .col-s-6 {width: 50%;}
//     .col-s-7 {width: 58.33%;}
//     .col-s-8 {width: 66.66%;}
//     .col-s-9 {width: 75%;}
//     .col-s-10 {width: 83.33%;}
//     .col-s-11 {width: 91.66%;}
//     .col-s-12 {width: 100%;}
//   }
  
//   @media only screen and (min-width: 768px) {
//     /* For desktop: */
//     .col-1 {width: 8.33%;}
//     .col-2 {width: 16.66%;}
//     .col-3 {width: 25%;}
//     .col-4 {width: 33.33%;}
//     .col-5 {width: 41.66%;}
//     .col-6 {width: 50%;}
//     .col-7 {width: 58.33%;}
//     .col-8 {width: 66.66%;}
//     .col-9 {width: 75%;}
//     .col-10 {width: 83.33%;}
//     .col-11 {width: 91.66%;}
//     .col-12 {width: 100%;}
//   }
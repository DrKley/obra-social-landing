const logos = import.meta.glob(
  '../assets/img/agencies/*.{png,jpg,jpeg,webp,svg}',
  { eager: true,
    
   }
);

export const agencies = [
  {
    nombre: 'Medicare',
    logo: logos['../assets/img/agencies/dptpublichealth.png'].default,
  },
  {
    nombre: 'Medicaid',
    logo: logos['../assets/img/agencies/cms.png'].default,
  },
  {
    nombre: 'VA',
    logo: logos['../assets/img/agencies/achc.png'].default,
  },
    {
    nombre: 'VA',
    logo: logos['../assets/img/agencies/hcs.png'].default,
  },
];


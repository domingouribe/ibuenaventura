// Main menu elements
const menuItems = [
  { label: "Somos", link: "/somos" },
  { label: "Proyectos", link: "/proyectos" },
  { label: "Recibimos tu propiedad", link: "/recibimos-tu-propiedad" },
  { label: "Postventa", link: "/postventa" },
];

//Hero bar items
const heroBar = [
  {
    icon: "assets/icons/dollar.svg",
    title: "Paga tu pie en cuotas",
    text: "con tarjeta de crédito sin intereses",
  },
  {
    icon: "assets/icons/percent-svgrepo-com.svg",
    title: "Descuentos exclusivos",
    text: "en unidades seleccionadas",
  },
  {
    icon: "assets/icons/home-svgrepo-com.svg",
    title: "Recibimos tu propiedad",
    text: "como parte de pago",
  },
  {
    icon: "assets/icons/360-degrees-svgrepo-com.svg",
    title: "Recorre",
    text: "piloto 360°",
  },
]

// Projects items
const projectsItems = [
  {
    link: "nuestra-senora-del-rosario",
    thumbnail: "assets/featured-builds/fachada1.jpg",
    title: "1590 NUestra Señora Del Rosario",
    info: {
      number: "2 o 3 dormitorios",
      surface: "Superficie desde 177 m2",
      since: "Desde UF 14.990",
    },
    ctaButton: {
      label: "Ver proyecto",
      link: "#",
    },
  },
  {
    link: "espoz-vitacura",
    thumbnail: "assets/featured-builds/fachada1.jpg",
    title: "4150 Espoz, Vitacura",
    info: {
      number: "2, 3 y 4 dormitorios",
      surface: "Superficie desde 177 m2",
      since: "Desde  UF 20.940",
    },
    ctaButton: {
      label: "Ver proyecto",
      link: "#",
    },
  },
  {
    link: "las-violetas-providencia",
    thumbnail: "assets/featured-builds/fachada1.jpg",
    title: "2165 Las Violetas Providencia",
    info: {
      number: "1, 2 y 3 dormitorios",
      surface: "Superficie desde 68 m2",
      since: "Desde  UF 7.110",
    },
    ctaButton: {
      label: "Ver proyecto",
      link: "#",
    },
  },
  {
    link: "duble",
    thumbnail: "assets/featured-builds/fachada1.jpg",
    title: "3800 Duble, Ñuñoa",
    info: {
      number: "2 y 3  dormitorios",
      surface: "Superficie desde 58 m2",
      since: "Desde  UF 7.790",
    },
    ctaButton: {
      label: "Ver proyecto",
      link: "#",
    },
  },
  {
    link: "puerto-varas",
    thumbnail: "assets/featured-builds/fachada1.jpg",
    title: "Casa Lago, Puerto Varas",
    info: {
      number: "Departamentos y Towhouses",
      surface: "Superficie desde 58 m2",
      since: "Desde  UF 7.100",
    },
    ctaButton: {
      label: "Ver proyecto",
      link: "#",
    },
  },
  
];


const footerInfo = {
  claim:
    "Las imágenes, textos y fotografías han sido elaborados con fines ilustrativos y descriptivos de las características generales del proyecto y producto ofrecido, por lo que no puede ni debe entenderse que constituyen necesariamente una representación exacta de la realidad. La disponibilidad, precio, especificaciones y características pueden cambiar. Lo anterior se informa en virtud de lo señalado en la Ley 19.472.",
  contact: {
    address: "Hendaya 263, Las Condes, Santiago",
    phoneIcon: "assets/icons/dollar.svg",
    phone: "+56 9 2211 7800",
  },
  social: [
    {
      icon: "assets/icons/facebook.svg",
      link: "https://www.facebook.com/ibuenaventura",
      title: "Facebook",
    },
    {
      icon: "assets/icons/instagram.svg",
      link: "https://www.instagram.com/inmobiliaria_buenaventura/",
      title: "Instagram",
    },
    {
      icon: "assets/icons/vimeo.svg",
      link: "https://vimeo.com/user99719971",
      title: "Vimeo",
    },
  ],
};

export { menuItems, heroBar, projectsItems, footerInfo };

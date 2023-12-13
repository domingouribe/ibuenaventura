import { v4 as uuidv4 } from "uuid";

const data = {
  
  somos: {
    claim:
      "Las imágenes, textos y fotografías han sido elaborados con fines ilustrativos y descriptivos de las características generales del proyecto y producto ofrecido. La disponibilidad, precio, especificaciones y características pueden cambiar. Lo anterior se informa en virtud de lo señalado en la Ley 19.472.",

    contact: {
      address: "Hendaya 263, Las Condes, Santiago",
      phoneIcon: "assets/icons/dollar.svg",
      phone: "+56 9 2211 7800",
    },

    social: [
      {
        id: uuidv4(),
        icon: "assets/icons/facebook.svg",
        link: "https://www.facebook.com/ibuenaventura",
        title: "Facebook",
      },
      {
        id: uuidv4(),
        icon: "assets/icons/instagram.svg",
        link: "https://www.instagram.com/inmobiliaria_buenaventura/",
        title: "Instagram",
      },
      {
        id: uuidv4(),
        icon: "assets/icons/vimeo.svg",
        link: "https://vimeo.com/user99719971",
        title: "Vimeo",
      },
    ],
  },
};

export default data;

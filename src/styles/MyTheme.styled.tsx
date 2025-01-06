// глобальная темы для всего приложения  
// -светлый/темный бэкграунд
// -палитра
// btnOnHover:{}
// отступы
// тени
// фонт сайз
// острые углы или тупые
// медиа запросы

export const MyTheme = {
  colors: {
    primary: '#4e71fe',
    secondary: '#804efe',
    third: '#feec4e',
    fourth: '#a92cad',

    hoverColors: {
      primaryHover: '#828ebe',
      secondaryHover: '#8e76cb',
      thirdHover: '#b4ad6e',
      fourthHover: '#975f99',
    },

    grey: {
      dark: '#131314',
      light: '#a4a4aa',
    }

  },

  media:{
    laptop: 'screen and (max-width: 980px)',
    tablet: 'screen and (max-width: 648px)',
    mobile: 'screen and (max-width: 576px)',
  }
}
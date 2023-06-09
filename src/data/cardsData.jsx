import bootcampImage from '../assets/bootcamp.png'
import bootcamp2Image from '../assets/bootcamp2.png'
import bootcamp3Image from '../assets/bootcamp3.png'
import asesoria from '../assets/asesoria.png'
import asesoria2Image from '../assets/asesoria2.png'
import asesoria3Image from '../assets/asesoria3.png'
import asesoria4Image from '../assets/asesoria4.png'

export const cards = [
    {
    id: 1,
    type: 'bootcamp',
    objetive: 'preparacion',
    method: 'tecnica',
    bgColor: '#fe7542',
    list: false,
    elements: [],
    center: false,
    fontMedium: false,
    description: 'Entrenamiento y capacitacion para responder efectivamente entrevistas tecnicas y de reclutamiento en el area de TI.',
    image: bootcampImage,
    cameraRed: false,
    url: 'https://www.facebook.com',
    miniDescription: 'Bootcamp Preparación Técnica para el área TI',
    price: 'S/100.00',
    },
    {
    id: 2,
    type: 'bootcamp',
    objetive: 'desarrollo',
    method: 'web',
    bgColor: '#fe7542',
    list: true,
    elements: ['Enfoque practico', 'Temas de Chrome DevTools, Extensiones, Puppeteer, React.js y Node.js'],
    center: false,
    fontMedium: false,
    description: 'Entrenamiento y capacitacion para responder efectivamente entrevistas tecnicas y de reclutamiento en el area de TI.',
    image: bootcamp2Image,
    cameraRed: false,
    url: 'https://www.facebook.com',
    miniDescription: 'Bootcamp de Desarrollo Web: Enfoque práctico',
    price: 'S/200.00'
    },
    {
    id: 3,
    type: 'asesoria personalizada',
    objetive: 'entrevistas',
    method: 'star',
    bgColor: '#df321a',
    list: false,
    elements: [],
    center: true,
    fontMedium: true,
    description: 'Reserva hoy y preparate para el exito profesional',
    image: asesoria,
    cameraRed: true,
    url: 'bootcamp1',
    miniDescription: 'Asesoría Personalizada para Entrevistas (Métodología STAR)',
    price: 'S/300.00'
    },
    {
    id: 4,
    type: 'asesoria personalizada',
    objetive: 'creacion',
    method: 'de cv',
    bgColor: '#df321a',
    list: false,
    elements: [],
    center: true,
    fontMedium: true,
    description: 'Reserva hoy y preparate para el exito profesional',
    image: asesoria2Image,
    cameraRed: true,
    url: 'https://www.facebook.com',
    miniDescription: 'Asesoría Personalizada para Creación de CV',
    price: 'S/250.00'
    },
]

export const cardsBootcamp = [
    {
        id: 1,
        mediumSize: true,
        type: 'bootcamp',
        objetive: 'preparacion',
        method: 'tecnica',
        bgColor: '#fe7542',
        list: false,
        elements: [],
        center: false,
        fontMedium: true,
        description: 'Entrenamiento y capacitacion para responder efectivamente entrevistas tecnicas y de reclutamiento en el area de TI.',
        image: bootcampImage,
        imageLarge: true,
        extraLarge: false,
        cameraRed: false,
        url: 'https://www.facebook.com',
        miniDescription: 'Bootcamp Preparación Técnica para el área TI',
        price: 'S/100.00'
        },
        {
        id: 2,
        mediumSize: true,
        type: 'bootcamp',
        objetive: 'desarrollo',
        method: 'web',
        bgColor: '#fe7542',
        list: true,
        elements: ['Enfoque practico', 'Temas de Chrome DevTools, Extensiones, Puppeteer, React.js y Node.js'],
        center: false,
        fontMedium: false,
        description: 'Entrenamiento y capacitacion para responder efectivamente entrevistas tecnicas y de reclutamiento en el area de TI.',
        image: bootcamp2Image,
        imageLarge: true,
        extraLarge: false,
        cameraRed: false,
        url: 'https://www.facebook.com',
        miniDescription: 'Bootcamp de Desarrollo Web: Enfoque práctico',
        price: 'S/200.00'
        },
        {
        id: 3,
        mediumSize: true,
        type: 'curso intensivo',
        objetive: 'cloud',
        method: 'specialist',
        bgColor: '#fe7542',
        list: false,
        elements: [],
        center: true,
        fontMedium: true,
        description: 'reserva hoy y preparate para este curso intensivo personalizado',
        image: bootcamp3Image,
        imageLarge: false,
        extraLarge: false,
        cameraRed: false,
        url: 'https://www.facebook.com',
        miniDescription: 'Curso Intensivo Cloud Specialist  Modalidad Online ',
        price: 'S/300.00'
        },
]

export const cardsAsesorias = [
        {
        id: 1,
        mediumSize: true,
        type: 'asesoria personalizada',
        objetive: 'creacion',
        method: 'de cv',
        bgColor: '#df321a',
        list: false,
        elements: [],
        center: true,
        fontMedium: true,
        description: 'Reserva hoy y preparate para el exito profesional',
        image: asesoria2Image,
        imageLarge: true,
        extraLarge: true,
        cameraRed: true,
        url: 'https://www.facebook.com',
        miniDescription: 'Asesoría Personalizada para creación de CV (con Exp/sin Exp)',
        price: 'S/100.00'
        },
        {
        id: 2,
        mediumSize: true,
        type: 'asesoria personalizada',
        objetive: 'entrevistas',
        method: 'grupales',
        bgColor: '#df321a',
        list: false,
        elements: [],
        center: true,
        fontMedium: true,
        description: 'Reserva hoy y preparate para el exito profesional',
        image: asesoria3Image,
        imageLarge: false,
        extraLarge: false,
        cameraRed: true,
        url: 'https://www.facebook.com',
        miniDescription: 'Asesoría Personalizada Preparación en Entrevistas Grupales',
        price: 'S/200.00'
        },
        {
        id: 3,
        mediumSize: true,
        type: 'asesoria personalizada',
        objetive: 'entrevistas en',
        method: 'ingles',
        bgColor: '#df321a',
        list: false,
        elements: [],
        center: false,
        fontMedium: true,
        description: 'Reserva hoy y preparate para el exito profesional',
        image: asesoria4Image,
        imageLarge: true,
        extraLarge: false,
        cameraRed: true,
        url: 'https://www.facebook.com',
        miniDescription: 'Asesoría Personalizada Preparación en Entrevistas en Inglés',
        price: 'S/300.00'
        },
]




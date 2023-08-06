import { ILaboratorio, Laboratorio } from "src/app/shared/models/laboratorio.model";

// Mock de 5 registros de laboratorios
export const mockLaboratorios: ILaboratorio[] = [
    new Laboratorio(
      1,
      'Laboratorio de Fisica',
      'Laboratorio de ondas',
      'https://ejemplo.com/1',
      'https://th.bing.com/th/id/OIP.JzRUEuudXxMUuqbwl-u4mQHaE8?pid=ImgDet&rs=1',
      'Experimentos de ondas con modificadores de frecuencia y amplitud.',
      true,
      true
    ),
    new Laboratorio(
      2,
      'Laboratorio de Robotica',
      'Laboratorio de Arduino',
      'https://ejemplo.com/2',
      'https://th.bing.com/th/id/R.74c803723d04add45981d4e35eaec72a?rik=e6w6ogDfP3McAQ&riu=http%3a%2f%2fwww.nacion.com%2fresizer%2f2RxIGhM1KZ3x4jK0PKsYwnp2wS8%3d%2f1200x0%2fcenter%2fmiddle%2ffilters%3aquality(100)%2farc-anglerfish-arc2-prod-gruponacion.s3.amazonaws.com%2fpublic%2fWMQJT7KWCFCEBJ6ZWZRJXC6VRM.jpg&ehk=xSjYHoB9zb1J%2bwJVeuC2G2nHedK4Fr1U3WsqThcskpk%3d&risl=&pid=ImgRaw&r=0',
      'Experimentos con Arduino y Raspberry Pi.',
      true,
      true
    ),
    new Laboratorio(
      3,
      'Laboratorio de Quimica',
      'Laboratorio de Soluciones y Mezclas',
      'https://ejemplo.com/3',
      'https://www.utadeo.edu.co/sites/tadeo/files/collections/node/gallery/field_image/laboratorio.quimica.utadeo.2_0.jpg',
      'Experimentos de soluciones y mezclas con reactivos quimicos, etc.',
      false,
      true
    ),
    new Laboratorio(
      4,
      'Laboratorio de Redes',
      'Laboratorio de Redes',
      'https://ejemplo.com/4',
      'https://th.bing.com/th/id/OIP.klSyQqYBzJrlheGBbubNsgHaFj?pid=ImgDet&rs=1',
        'Experimentos de redes con Cisco, Mikrotik, etc.', 
      false,
      false
    ),
    new Laboratorio(
      5,
      'Laboratorio de Software',
      'Laboratorio de Programación',
      'https://ejemplo.com/5',
      null,
      'Experimentos de programación con Java, C#, Python, PHP, JavaScript, etc.',
      true,
      true
    ),
  ];

// Mock de un registro de laboratorio
export const mockLaboratorio: ILaboratorio = new Laboratorio(1, "Laboratorio 1", "Titulo 1", "https://www.google.com", "https://th.bing.com/th/id/OIP.19n7McAwF8deW9DiCgdInQHaH_?pid=ImgDet&rs=1", "Descripcion 1", true, true);
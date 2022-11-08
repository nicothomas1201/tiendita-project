import limon from '../images/products/Limon.jpg'
import tomate from '../images/products/Tomate.jpg'
import aguacate from '../images/products/Aguacate.jpg'
import nopal from '../images/products/Nopal.jpg'
import tomateVerde from '../images/products/Tomate-verde.jpg'
import cocaSinAzucar from '../images/products/Cocacola-sin-azucar.jpg'
import cocaCola from '../images/products/Cocacola.jpg'
import fabuloso from '../images/products/Fabuloso.jpg'
import huevos from '../images/products/Huevos.jpg'
import colgate from '../images/products/Colgate.jpg'
import mayonesa from '../images/products/Mayonesa.jpg'
import bimbo from '../images/products/Pan-Bimbo.jpg'
import pechuga from '../images/products/Pechuga-pavo.jpg'

const db = [
  {
    name: 'Limon con semilla',
    price: {
      offert: 26.82,
      before_offert: 39.9,
      percentage: '32%'
    },
    url: limon,
  },
  {
    name: 'Tomate',
    price: {
      offert: 21.79,
      before_offert: 32.9,
      percentage: '32%'
    },
    url: tomate,
  },
  {
    name: 'Aguacate Hass',
    price: {
      offert: 56.8,
      before_offert: 69.9,
      percentage: '18%'
    },
    url: aguacate,
  },
  {
    name: 'Nopal Limpio',
    price: {
      offert: 25.8,
      before_offert: 29.9,
      percentage: '13%'
    },
    url: nopal,
  },
  {
    name: 'Tomate verde sin cascara',
    price: {
      offert: 22.89,
      before_offert: 24.9,
      percentage: '8%'
    },
    url: tomateVerde,
  },
  {
    name: 'Coca-Cola Sin Azucar',
    price: {
      offert: 26,
      before_offert: 28,
      percentage: '7%'
    },
    url: cocaSinAzucar,
  },
  {
    name: 'Coca-Cola',
    price: {
      offert: 12.9,
      before_offert: 14,
      percentage: '7%'
    },
    url: cocaCola,
    popular: true,
  },
  {
    name: 'Fabuloso Limpiador Antibacterial',
    price: {
      offert: 26,
      before_offert: 28,
      percentage: null
    },
    url: fabuloso,
    details: '2 L ($18.95/l)',
    popular: true,
  },
  {
    name: 'Huevos San Juan',
    price: '$37.5',
    url: huevos,
    details: '18 Und ($2.08/u)',
    popular: true,
  },
  {
    name: 'Colgate Pasta Dental Triple Familiar 2 U',
    price: 35.5,
    url: colgate,
    details: '125 ml ($0.28/ml)',
    popular: true,
  },
  {
    name: 'Mc Cormick Mayonesa',
    price: 48.5,
    url: mayonesa,
    details: '507 g ($0.1/gr)',
    popular: true,
  },
  {
    name: 'Bimbo Pan Blanco Grande',
    price: 38.9,
    url: bimbo,
    details: '680 g ($0.6/gr)',
    popular: true,
  },
  {
    name: 'San Rafael pechuga de pavoBimbo Pan Blanco Grande',
    price: 62.5,
    url: pechuga,
    details: '250 g ($0.25/gr)',
    popular: true,
  },
]



export default db
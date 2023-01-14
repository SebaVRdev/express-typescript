// CREAREMOS DISTINTOS TIPOS PARA EL MANEJO DE LOS DATOS
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

import { Visibility, Weather } from './enums'

// Creamos interface (CLASE)
/* La interfaz esta pensada paraluego ir modificndola o hacer otras en base a ella */
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type DiaryToNewEntry = Omit<DiaryEntry, 'id'>

/* interface SpecialDiatyEntry extends DiaryEntry {
  // Tendra todo de lo de DiaryEntry y agregamos otras
  flightNumber: number
} */

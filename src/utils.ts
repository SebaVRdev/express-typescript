// Cajon desastre en la que meteremos todo el codigo que pueda fallar
import { Visibility, Weather } from './enums'
import { DiaryToNewEntry } from './types'

// Validar si es un string
const isString = (string: string): boolean => {
  return typeof string === 'string'
}

// Validar si es una fecha
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

// Validar si es weather
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

// Validar si es visibility
const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

/* Validar el comentario */
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

/* Validar date */
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

/* Validar weather */
const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}

/* Validar visibility */
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

/* Le llega cualquier cosa porque es lo que manda el usuario, pero lo que si debe
devolver es el objeto con sus datos correspondiente */
const toNewDiaryEntry = (object: any): DiaryToNewEntry => {
  const newEntry: DiaryToNewEntry = {
    // ...
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry

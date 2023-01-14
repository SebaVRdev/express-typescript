// Crearemos rutas de nuestra API
import express from 'express'
import * as diaryService from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitveInfo())
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  const diary = diaryService.findById(+id)
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryService.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Exportamos las rutas
export default router

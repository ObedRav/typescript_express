import { DiaryEntry, NewDairyEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restDiary } = entry
    return restDiary
  }
  return undefined
}

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (diaryEntry: NewDairyEntry): DiaryEntry => {
  const newDairyEntry = {
    id: diaries.length + 1,
    ...diaryEntry
  }

  diaries.push(newDairyEntry)
  return newDairyEntry
}

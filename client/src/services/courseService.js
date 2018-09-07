import axios from 'axios'

export const getCourse = async (pathToMd) => {
  const file = await axios.get(pathToMd)
  return file.data
}

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Pages are statically generated at build time; read fresh (non-CDN) data so builds reflect the latest CMS state
})

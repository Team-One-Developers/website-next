import { defineQuery } from "next-sanity"

export const QUERY_ALL_CAREERS = defineQuery(`*[_type == 'career']`)
export const QUERY_SPECIFIC_CAREER = defineQuery(`*[_type == 'career' && slug.current == $slug]`)

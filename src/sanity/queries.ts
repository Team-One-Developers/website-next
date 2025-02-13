import { defineQuery } from "next-sanity"

export const QUERY_ALL_CAREERS = defineQuery(
    `*[_type == 'career' && defined(slug) && defined(slug.current) && !(division in ["", "null"])]`
)
export const QUERY_SPECIFIC_CAREER = defineQuery(`*
  [_type == 'career' && slug.current == $slug][0]
  {
    ...,
    content
  }`)

export const QUERY_ALL_BLOGS = defineQuery(`*[_type == 'blog' && defined(slug) && defined(slug.current)]{...,author->}`)
export const QUERY_SPECIFIC_BLOG = defineQuery(`*
    [_type == 'blog' && slug.current == $slug][0]
    {
      ...,
      author->{
        ...,
        profileImg{
          asset->
        }
      },
      heroImage{
        asset->,
      },
      content[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      }
    }
    `)

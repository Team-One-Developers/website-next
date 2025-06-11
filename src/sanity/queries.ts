import { defineQuery } from "next-sanity"

export const QUERY_ALL_CAREERS_DANGER_ONLY_FOR_STATIC_PARAMS = defineQuery(`*
  [_type == 'career' && defined(slug) && defined(slug.current) && division != null && !(division in [""])]
`)

export const QUERY_ALL_PUBLIC_CAREERS = defineQuery(`*
  [_type == 'career' && defined(slug) && defined(slug.current) && visibility == 'Public']
`)

export const QUERY_SPECIFIC_CAREER = defineQuery(`*
  [_type == 'career' && slug.current == $slug][0]
`)

export const QUERY_ALL_LEADCAPTURES = defineQuery(`*
  [_type == 'leadcapture' && defined(slug) && defined(slug.current)]
  {
    ...,
    heroImage{
      asset->
    }
  }
`)

export const QUERY_ALL_BLOGS_DANGER_ONLY_FOR_STATIC_PARAMS = defineQuery(`*
  [_type == 'blog' && defined(slug) && defined(slug.current)]
  {
    ...,
    author->,
    heroImage{
      asset->
    }
  }
`)

export const QUERY_ALL_PUBLIC_BLOGS = defineQuery(`*
  [_type == 'blog' && defined(slug) && defined(slug.current) && visibility == 'Public']
  {
    ...,
    author->{
      ...,
      profileImg{
        asset->
      }
    },
    heroImage{
      asset->
    },
  }
`)

export const QUERY_NEWEST_BLOGS = defineQuery(`*
  [_type == 'blog' && defined(slug) && defined(slug.current) && visibility == 'Public']
  | order(_createdAt desc)[0...3]
  {
    ...,
    heroImage{
      asset->
    },
   
  }
`)

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
      asset->
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

export const QUERY_SPECIFIC_LEADCAPTURE = defineQuery(`*
  [_type == 'leadcapture' && slug.current == $slug][0]
  {
    ...,
    heroImage{
      asset->
    }

  }
`)

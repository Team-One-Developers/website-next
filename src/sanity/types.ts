/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
    _type: "sanity.imagePaletteSwatch"
    background?: string
    foreground?: string
    population?: number
    title?: string
}

export type SanityImagePalette = {
    _type: "sanity.imagePalette"
    darkMuted?: SanityImagePaletteSwatch
    lightVibrant?: SanityImagePaletteSwatch
    darkVibrant?: SanityImagePaletteSwatch
    vibrant?: SanityImagePaletteSwatch
    dominant?: SanityImagePaletteSwatch
    lightMuted?: SanityImagePaletteSwatch
    muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
    _type: "sanity.imageDimensions"
    height?: number
    width?: number
    aspectRatio?: number
}

export type SanityFileAsset = {
    _id: string
    _type: "sanity.fileAsset"
    _createdAt: string
    _updatedAt: string
    _rev: string
    originalFilename?: string
    label?: string
    title?: string
    description?: string
    altText?: string
    sha1hash?: string
    extension?: string
    mimeType?: string
    size?: number
    assetId?: string
    uploadId?: string
    path?: string
    url?: string
    source?: SanityAssetSourceData
}

export type Geopoint = {
    _type: "geopoint"
    lat?: number
    lng?: number
    alt?: number
}

export type Career = {
    _id: string
    _type: "career"
    _createdAt: string
    _updatedAt: string
    _rev: string
    title?: string
    slug?: Slug
    path?: string
    description?: string
    location?: "Stuttgart"
    schedule?: "Vollzeit" | "Teilzeit"
    employmentType?: "Festanstellung" | "Praktikum" | "Werkstudent"
    division?: "Software Engineering" | "AI & Data Analytics" | "Strategy & Transformation" | "Marketing" | "Operations"
    tags?: Array<string>
    date?: string
    content?: Array<
        | {
              children?: Array<{
                  marks?: Array<string>
                  text?: string
                  _type: "span"
                  _key: string
              }>
              style?: "normal" | "h4" | "h5" | "blockquote"
              listItem?: "bullet" | "number"
              markDefs?: Array<{
                  href?: string
                  _type: "link"
                  _key: string
              }>
              level?: number
              _type: "block"
              _key: string
          }
        | {
              asset?: {
                  _ref: string
                  _type: "reference"
                  _weak?: boolean
                  [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
              }
              hotspot?: SanityImageHotspot
              crop?: SanityImageCrop
              _type: "image"
              _key: string
          }
        | ({
              _key: string
          } & Code)
    >
    visibility?: "Draft" | "Public"
    link?: string
}

export type Blog = {
    _id: string
    _type: "blog"
    _createdAt: string
    _updatedAt: string
    _rev: string
    title?: string
    slug?: Slug
    path?: string
    author?: {
        _ref: string
        _type: "reference"
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: "author"
    }
    language?: "Deutsch" | "Englisch"
    tags?: Array<string>
    category?: "SOFTWARE ENGINEERING" | "BUSINESS TECHNOLOGY" | "METHODOLOGY" | "NEWS" | "CULTURE" | "EXPERIENCE"
    descriptionShort?: string
    descriptionLong?: string
    date?: string
    heroImage?: {
        asset?: {
            _ref: string
            _type: "reference"
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: "image"
    }
    toc?: boolean
    content?: Array<
        | {
              children?: Array<{
                  marks?: Array<string>
                  text?: string
                  _type: "span"
                  _key: string
              }>
              style?: "normal" | "h2" | "h3" | "h4" | "blockquote"
              listItem?: "bullet" | "number"
              markDefs?: Array<{
                  href?: string
                  _type: "link"
                  _key: string
              }>
              level?: number
              _type: "block"
              _key: string
          }
        | {
              asset?: {
                  _ref: string
                  _type: "reference"
                  _weak?: boolean
                  [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
              }
              hotspot?: SanityImageHotspot
              crop?: SanityImageCrop
              _type: "image"
              _key: string
          }
        | ({
              _key: string
          } & Code)
    >
    cta?: "CONTACT" | "CAREER" | "BLOG" | "NONE"
    visibility?: "Draft" | "Public"
    link?: string
}

export type Author = {
    _id: string
    _type: "author"
    _createdAt: string
    _updatedAt: string
    _rev: string
    name?: string
    surname?: string
    position?: string
    profileImg?: {
        asset?: {
            _ref: string
            _type: "reference"
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: "image"
    }
    about?: Array<{
        children?: Array<{
            marks?: Array<string>
            text?: string
            _type: "span"
            _key: string
        }>
        style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote"
        listItem?: "bullet" | "number"
        markDefs?: Array<{
            href?: string
            _type: "link"
            _key: string
        }>
        level?: number
        _type: "block"
        _key: string
    }>
}

export type SanityImageCrop = {
    _type: "sanity.imageCrop"
    top?: number
    bottom?: number
    left?: number
    right?: number
}

export type SanityImageHotspot = {
    _type: "sanity.imageHotspot"
    x?: number
    y?: number
    height?: number
    width?: number
}

export type SanityImageAsset = {
    _id: string
    _type: "sanity.imageAsset"
    _createdAt: string
    _updatedAt: string
    _rev: string
    originalFilename?: string
    label?: string
    title?: string
    description?: string
    altText?: string
    sha1hash?: string
    extension?: string
    mimeType?: string
    size?: number
    assetId?: string
    uploadId?: string
    path?: string
    url?: string
    metadata?: SanityImageMetadata
    source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
    _type: "sanity.assetSourceData"
    name?: string
    id?: string
    url?: string
}

export type SanityImageMetadata = {
    _type: "sanity.imageMetadata"
    location?: Geopoint
    dimensions?: SanityImageDimensions
    palette?: SanityImagePalette
    lqip?: string
    blurHash?: string
    hasAlpha?: boolean
    isOpaque?: boolean
}

export type MediaTag = {
    _id: string
    _type: "media.tag"
    _createdAt: string
    _updatedAt: string
    _rev: string
    name?: Slug
}

export type Slug = {
    _type: "slug"
    current?: string
    source?: string
}

export type Code = {
    _type: "code"
    language?: string
    filename?: string
    code?: string
    highlightedLines?: Array<number>
}

export type AllSanitySchemaTypes =
    | SanityImagePaletteSwatch
    | SanityImagePalette
    | SanityImageDimensions
    | SanityFileAsset
    | Geopoint
    | Career
    | Blog
    | Author
    | SanityImageCrop
    | SanityImageHotspot
    | SanityImageAsset
    | SanityAssetSourceData
    | SanityImageMetadata
    | MediaTag
    | Slug
    | Code
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ./src/sanity/queries.ts
// Variable: QUERY_ALL_CAREERS
// Query: *[_type == 'career' && defined(slug) && defined(slug.current) && !(division in ["", "null"])]
export type QUERY_ALL_CAREERSResult = Array<{
    _id: string
    _type: "career"
    _createdAt: string
    _updatedAt: string
    _rev: string
    title?: string
    slug?: Slug
    path?: string
    description?: string
    location?: "Stuttgart"
    schedule?: "Teilzeit" | "Vollzeit"
    employmentType?: "Festanstellung" | "Praktikum" | "Werkstudent"
    division?: "AI & Data Analytics" | "Marketing" | "Operations" | "Software Engineering" | "Strategy & Transformation"
    tags?: Array<string>
    date?: string
    content?: Array<
        | ({
              _key: string
          } & Code)
        | {
              children?: Array<{
                  marks?: Array<string>
                  text?: string
                  _type: "span"
                  _key: string
              }>
              style?: "blockquote" | "h4" | "h5" | "normal"
              listItem?: "bullet" | "number"
              markDefs?: Array<{
                  href?: string
                  _type: "link"
                  _key: string
              }>
              level?: number
              _type: "block"
              _key: string
          }
        | {
              asset?: {
                  _ref: string
                  _type: "reference"
                  _weak?: boolean
                  [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
              }
              hotspot?: SanityImageHotspot
              crop?: SanityImageCrop
              _type: "image"
              _key: string
          }
    >
    visibility?: "Draft" | "Public"
    link?: string
}>
// Variable: QUERY_SPECIFIC_CAREER
// Query: *  [_type == 'career' && slug.current == $slug][0]  {    ...,    content  }
export type QUERY_SPECIFIC_CAREERResult = {
    _id: string
    _type: "career"
    _createdAt: string
    _updatedAt: string
    _rev: string
    title?: string
    slug?: Slug
    path?: string
    description?: string
    location?: "Stuttgart"
    schedule?: "Teilzeit" | "Vollzeit"
    employmentType?: "Festanstellung" | "Praktikum" | "Werkstudent"
    division?: "AI & Data Analytics" | "Marketing" | "Operations" | "Software Engineering" | "Strategy & Transformation"
    tags?: Array<string>
    date?: string
    content: Array<
        | ({
              _key: string
          } & Code)
        | {
              children?: Array<{
                  marks?: Array<string>
                  text?: string
                  _type: "span"
                  _key: string
              }>
              style?: "blockquote" | "h4" | "h5" | "normal"
              listItem?: "bullet" | "number"
              markDefs?: Array<{
                  href?: string
                  _type: "link"
                  _key: string
              }>
              level?: number
              _type: "block"
              _key: string
          }
        | {
              asset?: {
                  _ref: string
                  _type: "reference"
                  _weak?: boolean
                  [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
              }
              hotspot?: SanityImageHotspot
              crop?: SanityImageCrop
              _type: "image"
              _key: string
          }
    > | null
    visibility?: "Draft" | "Public"
    link?: string
} | null
// Variable: QUERY_ALL_BLOGS
// Query: *[_type == 'blog' && defined(slug) && defined(slug.current)]{...,author->}
export type QUERY_ALL_BLOGSResult = Array<{
    _id: string
    _type: "blog"
    _createdAt: string
    _updatedAt: string
    _rev: string
    title?: string
    slug?: Slug
    path?: string
    author: {
        _id: string
        _type: "author"
        _createdAt: string
        _updatedAt: string
        _rev: string
        name?: string
        surname?: string
        position?: string
        profileImg?: {
            asset?: {
                _ref: string
                _type: "reference"
                _weak?: boolean
                [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
            }
            hotspot?: SanityImageHotspot
            crop?: SanityImageCrop
            _type: "image"
        }
        about?: Array<{
            children?: Array<{
                marks?: Array<string>
                text?: string
                _type: "span"
                _key: string
            }>
            style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal"
            listItem?: "bullet" | "number"
            markDefs?: Array<{
                href?: string
                _type: "link"
                _key: string
            }>
            level?: number
            _type: "block"
            _key: string
        }>
    } | null
    language?: "Deutsch" | "Englisch"
    tags?: Array<string>
    category?: "BUSINESS TECHNOLOGY" | "CULTURE" | "EXPERIENCE" | "METHODOLOGY" | "NEWS" | "SOFTWARE ENGINEERING"
    descriptionShort?: string
    descriptionLong?: string
    date?: string
    heroImage?: {
        asset?: {
            _ref: string
            _type: "reference"
            _weak?: boolean
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: "image"
    }
    toc?: boolean
    content?: Array<
        | ({
              _key: string
          } & Code)
        | {
              children?: Array<{
                  marks?: Array<string>
                  text?: string
                  _type: "span"
                  _key: string
              }>
              style?: "blockquote" | "h2" | "h3" | "h4" | "normal"
              listItem?: "bullet" | "number"
              markDefs?: Array<{
                  href?: string
                  _type: "link"
                  _key: string
              }>
              level?: number
              _type: "block"
              _key: string
          }
        | {
              asset?: {
                  _ref: string
                  _type: "reference"
                  _weak?: boolean
                  [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
              }
              hotspot?: SanityImageHotspot
              crop?: SanityImageCrop
              _type: "image"
              _key: string
          }
    >
    cta?: "BLOG" | "CAREER" | "CONTACT" | "NONE"
    visibility?: "Draft" | "Public"
    link?: string
}>
// Variable: QUERY_SPECIFIC_BLOG
// Query: *    [_type == 'blog' && slug.current == $slug][0]    {      ...,      author->{        ...,        profileImg{          asset->        }      },      heroImage{        asset->,      },      content[]{        ...,        _type == "image" => {          ...,          asset->        }      }    }
export type QUERY_SPECIFIC_BLOGResult = {
    _id: string
    _type: "blog"
    _createdAt: string
    _updatedAt: string
    _rev: string
    title?: string
    slug?: Slug
    path?: string
    author: {
        _id: string
        _type: "author"
        _createdAt: string
        _updatedAt: string
        _rev: string
        name?: string
        surname?: string
        position?: string
        profileImg: {
            asset: {
                _id: string
                _type: "sanity.imageAsset"
                _createdAt: string
                _updatedAt: string
                _rev: string
                originalFilename?: string
                label?: string
                title?: string
                description?: string
                altText?: string
                sha1hash?: string
                extension?: string
                mimeType?: string
                size?: number
                assetId?: string
                uploadId?: string
                path?: string
                url?: string
                metadata?: SanityImageMetadata
                source?: SanityAssetSourceData
            } | null
        } | null
        about?: Array<{
            children?: Array<{
                marks?: Array<string>
                text?: string
                _type: "span"
                _key: string
            }>
            style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal"
            listItem?: "bullet" | "number"
            markDefs?: Array<{
                href?: string
                _type: "link"
                _key: string
            }>
            level?: number
            _type: "block"
            _key: string
        }>
    } | null
    language?: "Deutsch" | "Englisch"
    tags?: Array<string>
    category?: "BUSINESS TECHNOLOGY" | "CULTURE" | "EXPERIENCE" | "METHODOLOGY" | "NEWS" | "SOFTWARE ENGINEERING"
    descriptionShort?: string
    descriptionLong?: string
    date?: string
    heroImage: {
        asset: {
            _id: string
            _type: "sanity.imageAsset"
            _createdAt: string
            _updatedAt: string
            _rev: string
            originalFilename?: string
            label?: string
            title?: string
            description?: string
            altText?: string
            sha1hash?: string
            extension?: string
            mimeType?: string
            size?: number
            assetId?: string
            uploadId?: string
            path?: string
            url?: string
            metadata?: SanityImageMetadata
            source?: SanityAssetSourceData
        } | null
    } | null
    toc?: boolean
    content: Array<
        | {
              children?: Array<{
                  marks?: Array<string>
                  text?: string
                  _type: "span"
                  _key: string
              }>
              style?: "blockquote" | "h2" | "h3" | "h4" | "normal"
              listItem?: "bullet" | "number"
              markDefs?: Array<{
                  href?: string
                  _type: "link"
                  _key: string
              }>
              level?: number
              _type: "block"
              _key: string
          }
        | {
              _key: string
              _type: "code"
              language?: string
              filename?: string
              code?: string
              highlightedLines?: Array<number>
          }
        | {
              asset: {
                  _id: string
                  _type: "sanity.imageAsset"
                  _createdAt: string
                  _updatedAt: string
                  _rev: string
                  originalFilename?: string
                  label?: string
                  title?: string
                  description?: string
                  altText?: string
                  sha1hash?: string
                  extension?: string
                  mimeType?: string
                  size?: number
                  assetId?: string
                  uploadId?: string
                  path?: string
                  url?: string
                  metadata?: SanityImageMetadata
                  source?: SanityAssetSourceData
              } | null
              hotspot?: SanityImageHotspot
              crop?: SanityImageCrop
              _type: "image"
              _key: string
          }
    > | null
    cta?: "BLOG" | "CAREER" | "CONTACT" | "NONE"
    visibility?: "Draft" | "Public"
    link?: string
} | null

// Query TypeMap
import "@sanity/client"
declare module "@sanity/client" {
    interface SanityQueries {
        '*[_type == \'career\' && defined(slug) && defined(slug.current) && !(division in ["", "null"])]': QUERY_ALL_CAREERSResult
        "*\n  [_type == 'career' && slug.current == $slug][0]\n  {\n    ...,\n    content\n  }": QUERY_SPECIFIC_CAREERResult
        "*[_type == 'blog' && defined(slug) && defined(slug.current)]{...,author->}": QUERY_ALL_BLOGSResult
        "*\n    [_type == 'blog' && slug.current == $slug][0]\n    {\n      ...,\n      author->{\n        ...,\n        profileImg{\n          asset->\n        }\n      },\n      heroImage{\n        asset->,\n      },\n      content[]{\n        ...,\n        _type == \"image\" => {\n          ...,\n          asset->\n        }\n      }\n    }\n    ": QUERY_SPECIFIC_BLOGResult
    }
}

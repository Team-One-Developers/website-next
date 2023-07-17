interface Icon {
  name: 'Instagram' | 'LinkedIn'
  className?: string
  width?: string | number
  height?: string | number
}

export const Icon = ({
  name,
  className,
  height = 28,
  width = 28,
}: Icon) => {
  const svg = (name: string) => {
    switch (name) {
      case 'Instagram':
        return (
          <>
            <g clipPath="url(#a)">
              <path d="M14.39 5.386c2.795 0 3.127.012 4.226.061 1.022.045 1.573.217 1.941.36.487.188.838.417 1.202.78.368.369.593.716.78 1.202.144.368.315.924.36 1.942.05 1.103.062 1.434.062 4.226 0 2.796-.013 3.127-.062 4.226-.045 1.022-.216 1.573-.36 1.941a3.236 3.236 0 0 1-.78 1.202 3.218 3.218 0 0 1-1.202.78c-.367.144-.923.315-1.941.36-1.104.05-1.435.062-4.226.062-2.796 0-3.127-.013-4.226-.062-1.022-.045-1.574-.216-1.942-.36a3.236 3.236 0 0 1-1.201-.78 3.22 3.22 0 0 1-.78-1.202c-.144-.367-.316-.923-.36-1.941-.05-1.104-.062-1.435-.062-4.226 0-2.796.012-3.127.061-4.226.045-1.022.217-1.574.36-1.942.188-.486.417-.837.78-1.201a3.218 3.218 0 0 1 1.202-.78c.368-.144.924-.316 1.942-.36 1.1-.05 1.43-.062 4.226-.062Zm0-1.884c-2.84 0-3.196.012-4.312.061-1.112.05-1.876.23-2.538.487-.69.27-1.275.625-1.856 1.21a5.127 5.127 0 0 0-1.21 1.85c-.257.667-.437 1.427-.486 2.539-.049 1.12-.061 1.476-.061 4.316s.012 3.196.061 4.312c.05 1.112.229 1.876.486 2.538.27.69.626 1.275 1.21 1.856.58.58 1.165.94 1.852 1.205.666.258 1.426.438 2.538.487 1.116.049 1.471.061 4.312.061 2.84 0 3.196-.012 4.312-.061 1.111-.05 1.876-.23 2.538-.487a5.114 5.114 0 0 0 1.851-1.205c.58-.58.94-1.165 1.206-1.852.258-.666.437-1.426.486-2.538.05-1.116.062-1.471.062-4.312 0-2.84-.013-3.196-.062-4.312-.049-1.112-.229-1.876-.486-2.538a4.9 4.9 0 0 0-1.198-1.86 5.114 5.114 0 0 0-1.851-1.205c-.666-.258-1.426-.438-2.538-.487-1.12-.053-1.476-.065-4.316-.065Z" />
              <path d="M14.39 8.59a5.376 5.376 0 0 0-5.374 5.374 5.376 5.376 0 0 0 5.374 5.375 5.376 5.376 0 0 0 5.375-5.375A5.376 5.376 0 0 0 14.39 8.59Zm0 8.86a3.487 3.487 0 1 1 .001-6.973 3.487 3.487 0 0 1 0 6.974ZM21.231 8.378a1.255 1.255 0 1 1-2.51 0 1.255 1.255 0 0 1 2.51 0Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path d="M3.926 3.502h20.926v20.926H3.926z" />
              </clipPath>
            </defs>
          </>
        )

      case 'LinkedIn':
        return (
          <>
            <g clipPath="url(#a)">
              <path d="M23.23 3.502H5.399c-.854 0-1.544.674-1.544 1.508v17.906c0 .834.69 1.512 1.544 1.512h17.833c.854 0 1.549-.678 1.549-1.508V5.01c0-.834-.695-1.508-1.55-1.508ZM10.063 21.334H6.956v-9.989h3.106v9.99ZM8.509 9.984a1.8 1.8 0 1 1-.007-3.598 1.8 1.8 0 0 1 .007 3.598Zm13.177 11.35h-3.102V16.48c0-1.157-.02-2.649-1.615-2.649-1.614 0-1.86 1.263-1.86 2.567v4.937h-3.098v-9.989h2.976v1.365h.04c.414-.785 1.427-1.614 2.935-1.614 3.143 0 3.724 2.068 3.724 4.757v5.481Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path d="M3.926 3.502h20.926v20.926H3.926z" />
              </clipPath>
            </defs>
          </>
        )
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={"currentColor"}
      className={className}
    >
      {svg(name)}
    </svg>
  )
}

export default Icon

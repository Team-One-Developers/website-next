import { notFound } from 'next/navigation'

const NotFoundCatchAll = () => notFound()

export default NotFoundCatchAll

// hacky solution to prevent "bug" that not-found page reloads every 3sec when developing

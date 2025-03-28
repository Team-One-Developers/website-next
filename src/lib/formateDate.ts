import { format, parseISO } from "date-fns"

export const formatDate = (date: string) => {
    return format(parseISO(date), "dd.MM.yyyy")
}

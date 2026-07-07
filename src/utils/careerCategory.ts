import { Career } from "@/sanity/types"

type CareerCategoryFields = Pick<Career, "business" | "division" | "inframotiveCategory">

/**
 * Returns the effective category for a job opening, resolving the correct field
 * based on the job's business (Team One uses `division`, Inframotive uses
 * `inframotiveCategory`).
 */
export function getCareerCategory(career: CareerCategoryFields): string | undefined {
    return career.business === "Inframotive" ? career.inframotiveCategory : career.division
}

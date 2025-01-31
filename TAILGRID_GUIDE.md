# Tailgrid Component Import Guide

## Step 1: Creating the Base Component File

1. Visit [Tailgrids Components](https://tailgrids.com/components).
2. Select the desired component for import.
3. Navigate to the `React` tab on the Tailgrid component page.
4. Identify the component's name in the displayed code (e.g., `About1()`).
5. Create a file named `About1.tsx` under `src/components/tailgrid`.
6. Copy the code provided on the Tailgrid website.
7. Paste the copied code into the newly created file.

## Step 2: Adapting the Component

### General Errors or Improvements

- Correct any common errors, such as:
    - Change `for` to `htmlFor` in `<label>` tags.
    - Convert `<textarea rows="6">` to `<textarea rows={6}>`.
- Replace <img> tags with Next `<Image>` components. Adjust he src if necessary.

### Styling Adjustments

- Remove all `dark:` prefixed classes. (e.g. `dark:bg-dark-6`)
    - We implement dark mode via the `data-theme` attribute on the HTML tag and adjust CSS variables accordingly, rather than using Tailwind's `dark:` classes.
- Look for explicit color names like `white` or `dark`. Use `background` and `foreground` classes instead:

    - Replace instances of:
    - `bg-white` with `bg-background`.
    - `text-white` with `text-background`.
    - `text-dark` with `text-foreground`.
    - `bg-dark` with `bg-foreground`.

- Look for more `-dark` or `-dark-x` color classes:

    - evaluate their purpose:
    - Remove or replicate using equivalent color classes.
    - Example replacements:
        - Change `hover:bg-dark-6` to `hover:bg-foreground-hover` for hover functionality.
        - Substitute `placeholder-dark-5` with `placeholder-foreground/50`.

- Use the search function to ensure there are no more instances of `dark` or `white`. In nearly all cases there should not be a single one anymore
- text styling:
    - Use our <Typography> component for all text if possible. It applies the correct font and styling to fit our design system. Make sure to remove tailgrids text based stylings so that it does not override our classes.

### Content Adjustments

- Update all text and content (german translation e.g.) to align with requirements.

## Step 3: Component Usage

- Import the component in your desired file.
- Implement it as you would any other component.
- Validate and rectify any styling discrepancies to ensure expected functionality.

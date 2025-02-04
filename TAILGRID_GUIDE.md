# Tailgrid Component Import Guide

## Step 1: Creating the Base Component File

1. Visit [Tailgrids Components](https://tailgrids.com/components).
2. Select the desired component for import.
3. Navigate to the `React` tab on the Tailgrid component page.
4. Identify the component's name in the displayed code (e.g., `About1()`).
5. Create a file named `About1.tsx` under `src/components/tailgrid`.
6. Click on the filter/settings button to the right of the Copy button and disable the "Copy code with dark: classes" option.
7. Click copy to copy
8. Paste the copied code into the newly created file.

## Step 2: Adapting the Component

### General Errors or Improvements

- Correct any common errors, such as:
    - Change `for` to `htmlFor` in `<label>` tags.
    - Convert `<textarea rows="6">` to `<textarea rows={6}>`.
- Replace <img> tags with Next `<Image>` components. Adjust he src if necessary.

### Styling Adjustments

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
- prettier/eslint:
    - Run prettier on the file to ensure it is formatted correctly.
    - Run eslint on the file to ensure it is free of warnings if possible

### Content Adjustments

- Update all text and content (german translation e.g.) to align with requirements.

## Step 3: Component Usage

- Import the component in your desired file.
- Implement it as you would any other component.
- Validate and rectify any styling discrepancies to ensure expected functionality.

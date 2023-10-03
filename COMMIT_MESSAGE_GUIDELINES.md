# Commit Message Guidelines

Good commit messages are essential for maintaining a clean and informative Git history. This document provides guidelines for writing clear and meaningful commit messages in this repository.

## Commit Message Structure

A commit message should have a clear and concise structure:

**``<type>(<scope>): <subject>``**

- `<type>`: Describes the purpose of the commit. Common types include:
  - `feat`: A new feature or functionality.
  - `fix`: A bug fix.
  - `docs`: Documentation changes.
  - `style`: Code style changes (e.g., formatting, whitespace).
  - `refactor`: Code refactoring without changing functionality.
  - `test`: Adding or modifying tests.
  - `chore`: Routine tasks, maintenance, or housekeeping.
- `<scope>` (optional): Describes the context or component of the project that the commit affects.
- `<subject>`: A concise one-line description of the commit. It should start with a verb in the imperative mood (e.g., "Fix typo" instead of "Fixed typo" or "Fixes typo").

## Examples

Here are some examples of well-formatted commit messages:

| Type       | Commit Message with Scope                            | Commit Message without Scope                        |
|------------|-----------------------------------------------------|-----------------------------------------------------|
| `feat`     | `feat(user-auth): Add user registration functionality` | `feat: Add user registration functionality`         |
| `fix`      | `fix(api): Handle null values in response`         | `fix: Handle null values in response`               |
| `docs`     | `docs(readme): Update installation instructions`   | `docs: Update installation instructions`            |
| `style`    | `style(css): Format code according to style guide` | `style: Format code according to style guide`       |
| `refactor` | `refactor(database): Optimize query performance`   | `refactor: Optimize query performance`              |
| `test`     | `test(unit): Add tests for authentication`        | `test: Add tests for authentication`                |
| `chore`    | `chore(release): Bump version to 1.0.0`            | `chore: Bump version to 1.0.0`                      |

## Additional Guidelines

- Keep commit messages concise and focused on a single change.
- Use present tense (e.g., "Add feature" not "Added feature").
- Capitalize the first letter of the subject.
- Use imperative mood for the subject (e.g., "Fix bug" not "Fixing bug").
- Use an empty line between the subject and the body (if the body is present).
- Use the body of the commit message to provide additional context and details if necessary.

## Summary

Writing clear and consistent commit messages helps everyone involved in the project understand the purpose and context of each commit. Following these guidelines will lead to a more organized and understandable Git history.

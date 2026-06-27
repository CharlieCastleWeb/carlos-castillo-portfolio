# Development workflow

This project follows a simple branch-based workflow inspired by professional frontend development practices.

## Branch strategy

The `main` branch represents the stable version of the portfolio.

All changes should be made from task-specific branches using the following naming convention:

```txt
feature/CCP-000
chore/CCP-000
fix/CCP-000
docs/CCP-000
test/CCP-000
ci/CCP-000
```

Examples:

```txt
feature/CCP-008
chore/CCP-004
docs/CCP-022
```

## Pull requests

Each task should be completed through a pull request into `main`.

Pull request titles should follow Conventional Commits:

```txt
type(scope): description
```

Example:

```txt
chore(ccp-004): configure repository workflow
```

## Merge strategy

Pull requests should be merged using squash merge to keep the `main` history clean.

After a pull request is merged, the source branch should be deleted.

## Validation

Before opening or merging a pull request, run the relevant checks locally when applicable:

```bash
npm run format:check
npm run lint
npm run build
```

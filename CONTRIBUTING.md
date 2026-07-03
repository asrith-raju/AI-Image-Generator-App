# 🤝 Contributing to AI Image Generator

Thank you for considering contributing to **AI Image Generator**! 🎉 We welcome all contributions, whether it's bug fixes, new features, documentation improvements, UI enhancements, performance improvements, or ideas.

## 🚀 How to Contribute

### Fork the Repository

Click the **Fork** button on the top right of the original repository.

Clone your fork locally:

```bash
git clone https://github.com/<your-username>/AI-Image-Generator.git
cd AI-Image-Generator
```

### Create a New Branch

For a new feature:

```bash
git checkout -b feature/your-feature-name
```

For a bug fix (referencing issue number if available):

```bash
git checkout -b fix/issue-123-short-title
```

### Make Your Changes

* Follow the project's coding style.
* Keep components reusable and maintainable.
* Update documentation if necessary.

### Commit Your Changes

```bash
git commit -m "feat: add your feature description"
```

### Push to Your Branch

```bash
git push origin feature/your-feature-name
```

### Open a Pull Request

* Go to your forked repository on GitHub.
* Click **New Pull Request**.
* Clearly explain your changes and their purpose.

---

# 🧑‍💻 Development Guidelines

## Branching Strategy

Always create a separate branch for your work:

```bash
git checkout -b feature/your-feature-name
git checkout -b fix/your-fix-name
```

Do not commit directly to the `main` branch.

---

## Code Style

* Use Functional Components and Hooks.
* Use **PascalCase** for component names.
* Use **camelCase** for variables and functions.
* Keep components modular and reusable.
* Follow the existing folder structure.

---

## 📝 Commit Messages

Use the **Conventional Commits** format:

* `feat:` → New feature
* `fix:` → Bug fix
* `docs:` → Documentation updates
* `style:` → Formatting changes
* `refactor:` → Code restructuring
* `perf:` → Performance improvements
* `test:` → Testing-related changes

---

## 🧪 Testing & Validation

Before submitting a Pull Request:

### Frontend

```bash
cd client
npm run dev
```

### Backend

```bash
cd server
npm run server
```

Make sure:

* The application runs successfully.
* No console errors are present.
* Existing functionality remains unaffected.
* AI image generation works as expected.
* New features work as intended.

---

## 📦 Dependencies

Avoid adding unnecessary npm packages.

If a new dependency is required:

* Justify its usage.
* Mention it in the Pull Request description.

---

## 🔄 Pull Requests (PRs)

Please ensure your PR:

* Is focused on a single feature or fix.
* Includes a clear description.
* Includes screenshots for UI changes.
* References related issues when applicable.

---

## 🐛 Reporting Issues

If you find a bug or have a feature request:

* Open an Issue.
* Provide clear steps to reproduce (for bugs).
* Suggest a possible solution if you have one.

---

## ❤️ Code of Conduct

Please be respectful, constructive, and inclusive in all interactions. Together, we can make **AI Image Generator** better for everyone.

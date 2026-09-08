# To-Do List App

A simple and interactive to-do list built with **React** and **Vite**. Tasks persist across page reloads using `localStorage`.

## Features

- **Add tasks** — create a task with a text and a priority value.
- **Edit tasks** — update the text and priority of an existing task.
- **Delete tasks** — remove a task from the list.
- **Mark as done** — toggle a task's completed state with a checkbox (completed tasks are shown with a strikethrough).
- **Show only incomplete** — filter the list to display only unfinished tasks.
- **Sort by priority** — reorder tasks by their priority value.
- **Persistence** — tasks are saved to `localStorage` and restored on reload.

## Tech Stack

- [React](https://reactjs.org/) 19
- [Vite](https://vitejs.dev/) 8
- [lucide-react](https://lucide.dev/) for icons
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) for linting

## Project Structure

```
src/
├── App.jsx                 # Root component — state, handlers, layout
├── main.jsx                # Entry point
├── App.css                 # Global styles
├── components/
│   ├── TaskForm.jsx        # Form to add a new task
│   ├── TaskControls.jsx    # Filter and sort controls
│   ├── TaskList.jsx        # Renders the list of tasks
│   ├── TaskItem.jsx        # Single task row (view mode)
│   └── EditTaskForm.jsx    # Inline edit form for a task
└── utils/
    └── localStorageUtils.js # localStorage read/write helpers
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/)

### Installation

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
pnpm build
```

### Preview the production build

```bash
pnpm preview
```

### Lint the code

```bash
pnpm lint
```

## How It Works

State (the list of tasks) is managed in `App` with React hooks. Every mutation — add, edit, delete, toggle done, and sort — updates React state and immediately persists the updated array to `localStorage` via the helpers in `src/utils/localStorageUtils.js`.

A task is stored with the shape:

```js
{
  id: Date.now(),
  text: 'Buy groceries',
  priority: 1,
  done: false
}
```

- `priority` is a numeric value; lower numbers sort to the top.
- `done` tracks whether the task is complete.

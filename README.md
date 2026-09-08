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
- **Default tasks** — the app starts with 5 sample tasks on first load (until you save your own).

## Tech Stack

- [React](https://reactjs.org/) 19
- [Vite](https://vitejs.dev/) 8
- [lucide-react](https://lucide.dev/) for icons
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) for linting

## Project Structure

```
src/
├── App.jsx                 # Root component — wiring, layout, local UI state
├── main.jsx                # Entry point
├── App.css                 # Global styles
├── components/
│   ├── TaskForm.jsx        # Form to add a new task
│   ├── TaskControls.jsx    # Filter and sort controls
│   ├── TaskList.jsx        # Renders the list of tasks
│   ├── TaskItem.jsx        # Single task row (view mode)
│   └── EditTaskForm.jsx    # Inline edit form for a task
├── reducers/
│   └── taskReducer.js      # useReducer — all task mutations & persistence
└── utils/
    └── localStorageUtils.js # localStorage read/write helpers + default tasks
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

Task state is managed with a `useReducer` hook. `App.jsx` declares the reducer and dispatches actions (add, edit, delete, toggle done, sort) from the UI, while all state-transition logic — and the immediate `localStorage` persistence — lives in `src/reducers/taskReducer.js`. The reducer handles these action types:

- `ADD` — append a new task
- `REMOVE` — delete a task by id
- `UPDATE` — change a task's text and priority
- `TOGGLE_DONE` — flip a task's completed state
- `SORT` — order tasks by priority (ascending)

On first load, `src/utils/localStorageUtils.js` reads saved tasks; if none are saved (or the saved list is empty), it returns a set of 5 `defaultTasks`.

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

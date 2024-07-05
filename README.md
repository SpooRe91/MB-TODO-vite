# MB-TODO
**A simple Vite-React TO DO app**

Access the app here: [MB-TODO App](https://mb-todo.vercel.app)

![MB-TODO App](https://github.com/SpooRe91/MB-TODO-vite/assets/85784810/7734ce30-0c8e-46cd-9a08-6a618a3468a0)

## Technologies and Libraries Used
- **React.js** ![React](https://raw.githubusercontent.com/SpooRe91/icons-and-graphs/main/icons-and-graphics-main/icomoon/programming/PNG/react.png?raw=true)
- **TypeScript** ![TypeScript](https://raw.githubusercontent.com/SpooRe91/icons-and-graphs/main/icons-and-graphics-main/icomoon/programming/PNG/typescript.png?raw=true)
- **Redux** ![Redux](https://github.com/SpooRe91/icons-and-graphics/blob/main/icons-and-graphics-main/icomoon/programming/SVG/redux%2Boriginal-1324760569678085188.png?raw=true)
- **Vite** ![Vite](https://github.com/SpooRe91/icons-and-graphics/blob/main/icons-and-graphics-main/icomoon/programming/SVG/vite-svgrepo-com.svg?raw=true)
- **SASS (SCSS)** ![SASS](https://raw.githubusercontent.com/SpooRe91/icons-and-graphs/main/icons-and-graphics-main/icomoon/programming/PNG/sass.png?raw=true)

## Features

### Add a New Task
1. Click the **"Show task form"** button to open the form.
2. Enter the task details and click **"Submit"**.
   - **Error Handling:** If the task name already exists, a red error message will appear under the task name input.
   - **Success:** If the task is added successfully, it will be pinned to the "Your tasks" board, and a green confirmation message with an "OK" button will appear.

![Adding a Task](https://github.com/SpooRe91/MB-TODO-vite/assets/85784810/a9bf8e55-5efb-4983-8bb8-2e7e59ec3eff)

### Task Management
3. Each task has two main options:
   - **"Show more info":** Reveals additional task details (task body, start/end dates, issued by). The button will change to **"Show less info"**, which hides the details when clicked again.
   - **"Delete task":** Prompts a confirmation dialog with "tick" and "cross" buttons.
     - **Confirm (tick):** Deletes the task.
     - **Cancel (cross):** Cancels the deletion and returns to the initial state.

![Managing a Task](https://github.com/SpooRe91/MB-TODO-vite/assets/85784810/28bc8468-3606-4d7a-a836-9713c7d250f0)

### Bulk Task Actions
- **"Delete all tasks"**: Prompts a dialog to confirm deletion of all tasks.
  - **Yes:** Deletes all tasks.
  - **No:** Cancels the deletion.
  - Clicking **"Delete all tasks"** again hides the dialog.

![Deleting All Tasks](https://github.com/SpooRe91/MB-TODO-vite/assets/85784810/b8f081ff-e669-439d-982b-e42fa6b620e1)

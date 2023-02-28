# vite-react-todo
A simple Vite-React TO DO app
available at https://mb-todo.vercel.app/

USED:
TypeScript <img src="https://raw.githubusercontent.com/SpooRe91/icons-and-graphs/main/icons-and-graphics-main/icomoon/programming/PNG/typescript.png?raw=true">
React.js <img src="https://raw.githubusercontent.com/SpooRe91/icons-and-graphs/main/icons-and-graphics-main/icomoon/programming/PNG/react.png?raw=true">
Vite <img src="https://github.com/SpooRe91/icons-and-graphics/blob/main/icons-and-graphics-main/icomoon/programming/SVG/vite-svgrepo-com.svg?raw=true">
SASS (SCSS) <img src="https://raw.githubusercontent.com/SpooRe91/icons-and-graphs/main/icons-and-graphics-main/icomoon/programming/PNG/sass.png?raw=true"> 

1. Use the "show task form" button to open up the form and then enter the task details.
2. Once done, you can press the "submit" button  to pin the new task to the "Your tasks" board.
    - If the task name already exists - there will be an error message with red color under the task name input field.
    - If the taks was added successfully, you will be able to see it pinned to the "Your tasks" board and also a green message will appear at the top part of the form with an "OK" button confirming the taks was added susccessfully.

3. Each task has two buttons - "Show more info" and "Delete task"
  - "Show more info" - opens up a second section of the task and show the remaining information such as - task body, task start and end dates and issued by. The button then changes name to "Show less info", and once clicked again, the additional information hides again.
  - "Delete task" - reveals two buttons which inditicate your confirmation or cancellation of the taks deletion. 
    *Pressing the button with the "tick circle" - will confirm the deletion and remove the task from the board.
    *Pressing the button with the "cross circle" - will cancel the deletion and will bring back the "Delete task" button.
  - "Delete all tasks" will bring up a dialog with buttons asking you whether you are sure you wish to delete all tasks, with available "Yes" and "No" buttons.
        * Pressing "Yes" will delete all tasks from the board
        * Pressing "No" will hide the dialog
        * Pressing the "Delete all tasks" button again, will hide the dialog as well
  

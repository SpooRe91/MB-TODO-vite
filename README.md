# MB-TODO
A simple Vite-React TO DO app
available at <a href="https://mb-todo.vercel.app" rel="nofollow" target=_blank>MB-TODO App</a>
</br>
![image](https://github.com/SpooRe91/MB-TODO-vite/assets/85784810/7734ce30-0c8e-46cd-9a08-6a618a3468a0)

</br>
**Technologies and libraries used:**
</br>
React.js <img src="https://raw.githubusercontent.com/SpooRe91/icons-and-graphs/main/icons-and-graphics-main/icomoon/programming/PNG/react.png?raw=true">
</br>
TypeScript <img src="https://raw.githubusercontent.com/SpooRe91/icons-and-graphs/main/icons-and-graphics-main/icomoon/programming/PNG/typescript.png?raw=true">
</br>
Redux <img src="https://github.com/SpooRe91/icons-and-graphics/blob/main/icons-and-graphics-main/icomoon/programming/SVG/redux%2Boriginal-1324760569678085188.png?raw=true">
</br>
Vite <img src="https://github.com/SpooRe91/icons-and-graphics/blob/main/icons-and-graphics-main/icomoon/programming/SVG/vite-svgrepo-com.svg?raw=true">
</br>
SASS (SCSS) <img src="https://raw.githubusercontent.com/SpooRe91/icons-and-graphs/main/icons-and-graphics-main/icomoon/programming/PNG/sass.png?raw=true"> 
</br>
1. Use the "show task form" button to open up the form and then enter the task details.

![image](https://github.com/SpooRe91/MB-TODO-vite/assets/85784810/a9bf8e55-5efb-4983-8bb8-2e7e59ec3eff)


2. Once done, you can press the "submit" button to pin the new task to the "Your tasks" board.
    * If the task name already exists - there will be an error message with red color under the task name input field.
    * If the task was added successfully, you will be able to see it pinned to the "Your tasks" board and also a green message will appear on the bottom part of the form with an "OK" button confirming the task was added successfully.

![image](https://github.com/SpooRe91/MB-TODO-vite/assets/85784810/28bc8468-3606-4d7a-a836-9713c7d250f0)

3.	Each task has two buttons - "Show more info" and "Delete task"
    - "Show more info" - opens up a second section of the task and show the remaining information such as - task body, task start and end dates and issued by. 
         The button then changes name to "Show less info", and once clicked again, the additional information hides again.
    - "Delete task" - reveals two buttons which indicate your confirmation or cancellation of the task deletion. 
        * Pressing the button with the "tick circle" - will confirm the deletion and remove the task from the board. 
        * Pressing the button with the "cross circle" - will cancel the deletion and will bring back the "Delete task" button.
    - "Delete all tasks" will bring up a dialog with buttons asking you whether you are sure you wish to delete all tasks, with available "Yes" and "No" buttons. 
        * Pressing "Yes" will delete all tasks from the board 
        * Pressing "No" will hide the dialog 
        * Pressing the "Delete all tasks" button again, will hide the dialog as well
![image](https://github.com/SpooRe91/MB-TODO-vite/assets/85784810/b8f081ff-e669-439d-982b-e42fa6b620e1)

  

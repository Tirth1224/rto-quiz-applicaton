
# RTO Quiz Exam Application

This project is an interactive quiz application designed to help users prepare for the RTO (Regional Transport Office) driving license exam. The application presents multiple-choice questions to users and provides immediate feedback on their answers.

## Features

- **Multiple Choice Questions:** Each question has four options, with only one correct answer.
- **Immediate Feedback:** Users receive instant feedback on their answers.
- **Score Tracking:** The application keeps track of the user's score.
- **User-Friendly Interface:** Simple and intuitive interface for a smooth user experience.
- **Responsive Design:** Built using Bootstrap for mobile responsiveness.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/rto-quiz-exam.git
   cd rto-quiz-exam
   ```

2. **Set up the database:**
   - Create a database named `rto_quiz`.
   - Run the following SQL script to create the necessary table:
     ```sql
     CREATE TABLE quiz_questions (
         Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
         question VARCHAR(555) NOT NULL,
         option1 VARCHAR(255),
         option2 VARCHAR(255),
         option3 VARCHAR(255),
         option4 VARCHAR(255),
         correctanswer VARCHAR(10)
     );
     ```
     ```sql
     CREATE TABLE quiz_result (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      score INT NOT NULL,
      result VARCHAR(50) NOT NULL
      );

     ```

3. **Start the application:**
   - Open `index.html` in your web browser.

## Usage

1. **Navigate to the quiz:**
   - Open the application in your web browser.
   
2. **Start the quiz:**
   - Select the "Start Quiz" button to begin the quiz.
   
3. **Answer questions:**
   - Select one of the four options for each question.
   - Receive immediate feedback on whether your answer is correct or incorrect.
   
4. **Track your score:**
   - The application will keep track of your score throughout the quiz.
   
5. **Finish the quiz:**
   - At the end of the quiz, view your total score and review any incorrect answers.

## Database Schema

The database consists of a single table, `quiz_questions`, with the following structure:

```sql
CREATE TABLE quiz_questions (
    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(555) NOT NULL,
    option1 VARCHAR(255),
    option2 VARCHAR(255),
    option3 VARCHAR(255),
    option4 VARCHAR(255),
    correctanswer VARCHAR(10)
);
```

 ```sql
     CREATE TABLE quiz_result (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      score INT NOT NULL,
      result VARCHAR(50) NOT NULL
      );

 ```

## Screenshots

Below are some screenshots of the application in action:

![image](https://github.com/user-attachments/assets/8ab592c5-d254-4c1d-8707-e28d8e44c616)

![image](https://github.com/user-attachments/assets/90b3653c-c90e-4252-b080-6871514c9d10)

![image](https://github.com/user-attachments/assets/41d5dfc5-d07a-4f6b-8c27-d348589733bd)

![image](https://github.com/user-attachments/assets/2c56dde9-3e64-4735-ba08-146463776e41)


## Credits

- This project was created by Tirth Patel.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Layout Builder - Built with (React + TypeScript + Vite)

Developed minimal version of layout builder in this repository which can drag and drop elements on to the home screen.
Hosted here - [Layout Builder Application](https://astonishing-cactus-26933d.netlify.app/)

Currently, this application has the below features:
- Add Rows with columns
- There is a **MEDIA EDITOR** by which you can add data to the elements post adding them to the columns.
- A wrapper is developed around each column / row and has the below functionalities.
  Row
  - Wrapper is only visible and actionable on hover
  - Re-arrange the rows up and down using arrows on row wrapper
  - Delete a row by clicking on delete icon on row wrapper
  - Add a row by clicking on add icon on row wrapper
  - Blue bordered wrapper indicates row element in the application
  - Min one row should be there. Cannot delete all the rows.
    
  Column
  - Wrapper is only visible and actionable on hover
  - **DRAG AND DROP** elements directly into columns
  - Columns are of **4 types - 3 text and 1 image**
  - Difference of font, font-weight indicates the type of text. for example: Heading, Sub-Heading, Paragraph
  - Add a column by clicking the plus icon on the wrapper.
  - Delete a column by clicking the delete icon on the wrapper.
  - Orange bordered wrapper indicates column in the application.

 There is no CSS library used for styling the application. ==Plain CSS== has been used for development.
 Written in pure **TYPESCRIPT** by adding interfaces and return types wherever required.

 Choosed Vite as it is faster due to its module bundling process when compared to CRA(Create React App).

 Steps to follow while running code for the first time in machine:

  - `yarn` - for installing all the necessary packages
  - `yarn dev` - for starting the application
  - `yarn lint` - for linting the application


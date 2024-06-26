<p align="center"> <img width="953" alt="Screenshot 2024-04-18 at 15 44 23" src="https://github.com/Jean-005/Capstone_Project/assets/132017960/7bc31133-d1ed-4ca2-a94a-176572ee7108">

                    
<h1 align="center" id="title">Capstone Project</h1>

## Table of Contents
1. [Project Description](#project-description)
2. [Business Planning](#business-planning)
3. [Project MVPs and Extensions](#project-mvps-and-extensions)
4. [API routes](#api-routes)
5. [Planning Diagrams](#planning-diagrams)
6. [Installation instructions](#installation-instructions)
7. [Contributing Instructions](#contributing-instructions)
8. [Credits and Acknowledgements](#credits-and-acknowledgements)
9. [Licences](#licences)

## Project Description

**Project Aims:**

This project aims to improve delivery logistics by implementing an efficient route planning system for drivers. Currently, the delivery fleet is underutilised due to fixed routes and inefficient assignment practices that do not consider package quantities, leading to unreliable delivery times. By developing a dynamic route planning system, this project aims to optimise delivery routes, ensuring efficient vehicle utilisation and timely deliveries. The project's goal is to revolutionise delivery operations within RainforestRetail, maximising fleet efficiency and delivering a superior customer experience.


![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)



**The names and versions of libraries used:**

| Back-end| Front-end               | 
|-------------|---------------------------|
| - Maven Project         | - React.js        |
| - Spring Boot: Ver. 3.2.3        | - React Router DOM         |
| - Spring Boot Dev Tools         | - Bootstrap         |
| - Spring Web        | - Material-UI          |
| - PostgreSQL Driver         | 
| - Spring Data JPA        | 
 
## Business Planning

**Business case**

[Link](https://docs.google.com/document/d/1Dwi3r5okjL_KaYhb1pgz5VXAs-lPhW75e9ivnyG0zX8/edit)

**Risk register**

[Link](https://docs.google.com/spreadsheets/d/1zadLMozuzAw5l-dovoioiaGYB4mqGuj3Vnu7KwqJPCk/edit#gid=578357748)

**Legal and Ethical Standards**

[Link](https://docs.google.com/document/d/19pYbzZjOPUX5-IniUgaeaoEL9Yq0Ssj4ty4eZUdIZ80/edit?usp=sharing) 

## Project MVPs and Extensions

### MVP
-  A landing page that that allows drivers and admins to login or register. :white_check_mark:
-  A navbar that is shared across all pages. :white_check_mark:
-  A Routes page that diplay the list of all the orders to be delivered by a driver and also the route for each driver on the map. :white_check_mark:
-  Ability off tick offf delivered orders. :white_check_mark:
-  A profile page that displays users personal and contact information. :white_check_mark:

### Extensions
- Ability to add a profile picture to the profile page
- Being able to display and update the driver's vehicle details
- Being able to display a driver's total deliveries since joining the company and their average rating from customers.
- Create an admin login to view a list of all drivers

## API Routes

### List of Example Routes:

[Link](https://github.com/Jean-005/Capstone_Project/blob/main/capstone_backend/Capstone_backend.postman_collection.json)


## Planning Diagrams

### Project Timeline

[Link](https://docs.google.com/spreadsheets/d/1hkHIXX6JbjZRdN_dqWqyAgj5Pg9uPYHRgv4Cyg2a0Vk/edit#gid=0)


### Entity Relationship Diagrams

![Screenshot 2024-04-18 at 14 38 05](https://github.com/Jean-005/Capstone_Project/assets/156360394/11ff6c70-54c6-43dd-9967-5d0869ca1714)

### Class Diagrams

![Screenshot 2024-04-18 at 15 15 54](https://github.com/Jean-005/Capstone_Project/assets/156360394/ec900b5f-7e77-4fca-8f43-c82d57eeabe9)


### Component diagram

![Screenshot 2024-04-17 at 09 01 19](https://github.com/Jean-005/Capstone_Project/assets/132017960/de006a71-f33b-4916-abe8-145f9afc579e)

### Wireframe

![Capstone_Wireframe](https://github.com/Jean-005/Capstone_Project/assets/132017960/5068cc4a-ef31-493a-b3c4-e4c41148144b)


### The URL of the GitHub repository that contains the code:

[Link](https://github.com/Jean-005/Capstone_Project)

## Installation instructions

**Server-side**

- Install Postman, Postico, PostgreSQL and your preferred IDE.
- In terminal or Gitbash, navigate to the directory you want to copy the repository into. 
- Run the command ```git clone git@github.com:Jean-005/Capstone_Project.git```
- In the terminal or Gitbash, create the database called delivery_db by running the command ```createdb delivery_db```.
- In the terminal run the command ```./mvnw spring-boot:run```

**Client-side**

- Install Node.js and npm.
- In terminal or Gitbash, navigate to the directory you want to copy the repository into. 
- Run the command ```git clone git@github.com:Jean-005/Capstone_Project.git
- Run the command **git pull** to ensure you have the latest version.
- Open the react project in the preferred IDE such as Visual Studio Code.
- Open the intergrate terminal and run the command ```npm install``` followed by ```npm start```

**How to generate a GeoAPIFY key needed to this project:**

To use GeoAPIFY's mapping services with our project, you'll need to get a GeoAPIFY API key. Here's how to get one:

1. Sign up for a GeoAPIFY Account by visiting the following link: [GeoAPIFY](https://www.geoapify.com/) .
2. Click on ```"Sign Up"```. Fill out the registration form and create your free account.
3. Obtain your API key by following these instructions:
- Once logged in to your GeoAPIFY account, navigate to your profile settings.
- In your profile settings, you'll find your unique API key.

4. Storing your API key securely:
**- Important: Never share your API key publicly.** This is because it grants access to your GeoAPIFY account and should therefore be treated like a password.
- Store this API key securely within the project's environment variables - typically an ```.env``` file at the root of your project (outside the ```src``` directory.


## Contributing Instructions

We appreciate your interest in contributing to the Capstone Project. We welcome contributions of all kinds, from bug reports and documentation improvements to new features and code changes.

Find below our contributing guidelines. By following these guidelines, you'll help us to maintain a high quality codebase and make the review process smoother for everyone.

**1. Fork the Repository:** Create a fork of the Capstone Project repository on GitHub.

**2. Create a Branch:** Clone the forked repository to your local machine & create a new branch for your contribution.

**3. Make Changes:** Make your changes to the code & ensure your changes follow our coding style.

**4. Commit Your Changes:** Commit your changes to your local branch with a descriptive commit message.

**5. Push Your Changes:** Push your changes to your forked repository on GitHub.
     
**6. Create a Pull Request:** Open a pull request from your branch to the main branch of the upstream repository.

**7. Review and Feedback:** We will review your pull request and provide feedback.


## Credits and Acknowledgements
### The Jeanius ReactAebels:

|  👁️  |  Name    |         Github                   |
|----|----------|--------------------------------- |
|  👨‍🚀  | Aebel    | https://github.com/Aebel-Shajan  |
|:woman_scientist:    | Jean     | https://github.com/Jean-005      |
|:technologist:    | Sahil    | https://github.com/sahilpatel1906|
|:woman_mechanic:    | Yesica   | https://github.com/ney601        |
|:rofl:    | Tommy    | https://github.com/Tommybui28    |


### Special thanks to:

- Anna Henderson
- Colin Farquhar
- Richard Sneyd
- Thibyaa Mahasivam
- Zsolt Podoba-Szalai

**For their invaluable guidance and assistance with this project.**

## Licences

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

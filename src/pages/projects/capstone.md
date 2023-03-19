---
layout: '@/templates/BasePost.astro'
title: Capstone
description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi.
pubDate: 2020-02-05T00:00:00Z
imgSrc: '/assets/images/image-post2.jpeg'
imgAlt: 'Image post 2'
---

# CS50W Final Project

## Overview

My final project for CS50W is a website portfolio that showcase projects and
also includes a blogpost. I decided to built a portfolio website because I
needed a personal website to showcase my projects for future job hunting purpose.
The blog post will serve as a note taking app as well as a backup for my
development work flow, this is where I will document my text-editor/terminal
configurations, dotfiles, etc.

## Distinctiveness and Complexity

### Summarized keypoints

* Frontend and backend is isolated from each other with their own development server
* Styles are completely handled by tailwindcss
* Generated the frontend folder using "create react app" and used other useful
reactjs packages to optimized the frontend
* Used django-restframework for creating API endpoints and utilize some of its
useful modules like serializer, decorator, status and response
* Used django package markdownx to be able to add markdown styled documents in
the database and use react-markdown to convert the data to html to render in the
frontend
* Serialized every data the api returns by using the django restframework serializer
* Setting up frameworks and connecting them altogether needs some time to configure.
* Implemented error handling and CORS headers.
* This project comes from my personal need of a portfolio website and a todo-like
app that will serve as documentation/backup of my development setup/workflow.

### Why I think it's sufficiently distinct from other projects

When building this project, I've used this [Astro-boilerplate](https://github.com/ixartz/Astro-boilerplate).
When I saw the demo version of the boilerplate, I liked the minimalistic overall
design by just displaying blogposts and projects. Since at that moment, I already
have intention of creating my own portfolio with some todo notes functionality,
I then decided to just use the boilerplate for this final project. This project
was built using reactjs components and tailwindcss to handle the styling in the
frontend, in the backend using django rest framework to manage API endpoints. The
frontend can only communicate to the backend by sending request through API endpoints,
therefore it is isolated from the backend. Throughout the course it was always the
django project that handles the rendering of the frontend static files, before creating
this final project I wanted to challenge myself and learn how to do it seperately.
Therefore the architecture of this project is the primary reason it is distinct
from all the previous projects in this course.

### Why I think this project is more complex than other projects in this course

Originally, the boilerplate was designed for astrojs and react-typescript
so I spent some time understanding typescript to be able to convert components
to jsx. With the help of reactjs documentation I was able to create a reactjs app
to transfer the converted components. I also refer to the documentation of tailwindcss
to configure it inside the reactjs app which will act as the frontend of my final
project. After I finally got the bare bones of the frontend working, I then created
the backend using django so that I'll be able to create api for data fetching. The
boilerplate seems to get it's data from static files and then processed by astrojs
to be rendered using appropriate react components. To implement the backend, I started
by creating models and figuring out what fields I needed in those models, created
some api in urls.py, and created their corresponding views function as well. When
the django backend and the api in the urls.py were setup I then tried to fetch from
the frontend. I then realized that it wasn't that straightforward and that I needed
to add or change things in the settings.py. After watching tutorials online, reading
documentations and checking stackoverflow somehow I finally got it to work. I also
realized that I have to use djangorestframework to take advantage of what it can
offer in building rest API endpoints. With all of these problems I've faced when
building this project, I can just simply say this is yet the most complex project
I have built. The challenges I have to overcome and errors I have to debug just
to be able to make the frontend and backend working together was pretty tiresome
but was also fulfilling.

## Project structure (What’s contained in each file I created)

```
PROJECT_ROOT
├── capstone
│   ├── __pycache__     # django generated file
│   ├── asgi.py         # django generated file
│   ├── __init__.py     # django generated file
│   ├── settings.py     # django backend settings
│   ├── urls.py         # django project urls
│   └── wsgi.py         # django generated file
├── frontend
│   ├── .gitignore      # list of files not to be included in the git repository
│   ├── public
│   │   ├── assets
│   │   │   └── images      # static images used in the frontend
│   │   ├── index.html      # reactjs index html file
│   ├── src
│   │   ├── components                  # react components directory
│   │   │   ├── Avatar.jsx              # avatar in introduction section of the page
│   │   │   ├── Content.jsx             # renders markdown content
│   │   │   ├── Footer.jsx              # handles the footer of the page
│   │   │   ├── GalleryHeader.jsx       # header for gallery container of post
│   │   │   ├── GradientText.jsx        # add colors to caption
│   │   │   ├── Header.jsx              # handles the header of the page
│   │   │   ├── Intro.jsx               # introduction section of the page
│   │   │   ├── Navbar.jsx              # handles the navigation heading of the page
│   │   │   ├── PageTitle.jsx           # dynamically change the document title
│   │   │   ├── Pagination.jsx          # handles pagination in /posts route
│   │   │   ├── PostCard.jsx            # renders card-styled post
│   │   │   ├── PostGallery.jsx         # gallery container for card-styled post
│   │   │   ├── PostHeader.jsx          # handles the post header
│   │   │   ├── PostsRecent.jsx         # renders last 3 post (card-style)
│   │   │   ├── ProjectCard.jsx         # renders card-styled project
│   │   │   ├── ProjectGallery.jsx      # gallery container for card-styled projects
│   │   │   ├── ProjectHeader.jsx       # handles the project header
│   │   │   ├── ProjectsRecent.jsx      # all projects in reverse chronological order
│   │   │   ├── Section.jsx             # acts as container for components when rendered
│   │   │   ├── SocMedIcons.jsx         # social media site icons
│   │   │   └── Tags.jsx                # handles the colortags for technology stacks
│   │   ├── pages               # pages directory
│   │   │   ├── App.jsx         # handles the main page, defines all the routes
│   │   │   ├── Post.jsx        # handles the /post route
│   │   │   ├── Posts.jsx       # handles the /posts and /posts/{page} routes
│   │   │   ├── Project.jsx     # handles the /project route
│   │   │   └── Projects.jsx    # handles the /projects route
│   │   ├── index.css   # tailwindcss directives
│   │   └── index.jsx   # reactjs index javascript file
│   ├── package.json        # dependencies (javascript packages)
│   ├── postcss.config.js   # tailwindcss postprocessor
│   ├── README.md           # reactjs README file
│   └── tailwind.config.js  # tailwindcss config file
├── portfolio
│   ├── fixtures
│   │   └── fixtures.json   # data to prepopulated database
│   ├── migrations      # django generated file
│   ├── __pycache__     # django generated file
│   ├── admin.py        # django app admin
│   ├── apps.py         # django apps
│   ├── __init__.py     # django generated file
│   ├── models.py       # django database models file
│   ├── serializers.py   # django model serializers
│   ├── tests.py        # django app test file
│   ├── urls.py         # urls/api endpoints file
│   └── views.py        # controller functions file
├── db.sqlite3          # sqlite3 database
├── manage.py           # manage django commands
├── notes.md            # todo notes
├── README.md           # this README file
└── requirements.txt    # dependencies (python packages)

```

## How to run the application

1. You need atleast python3 and nodejs >= 14 installed in your machine, make sure
to have ```pip``` (python package manager) and ```npm``` (javascript package manager)
installed as well. If not you can check this links on how to install
[Pip](https://pip.pypa.io/en/stable/installation/),
[Nodejs and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
2. Install all the python dependencies, inside your terminal go to project's root
directory ```PROJECT_ROOT``` then run ```pip install -r requirements.txt```.
3. While still inside the project's root directory try to pre-populate the database,
by running the command ```python manage.py loaddata fixtures```.
4. To install javascript dependencies, I suggest to open another instance of terminal
and go to frontend's directory ```PROJECT_ROOT/frontend/``` then run ```npm install```.
5. Start the django development server, inside your terminal go to project's
root directory ```PROJECT_ROOT``` and run ```python manage.py runserver```. I suggest
to use the first terminal you opened since it probably still inside the projects
root directory.
6. Start the reactjs development server, inside your terminal go to ```PROJECT_ROOT/frontend/```
and run this command ```npm run start```, you can use the second terminal for this.
After running "npm run start" it will open your default browser automatically and
render the web application.

### Additional information

* The django and reactjs development server will use ```localhost:8000``` and
```localhost:3000``` respectively, so make sure those two ports are available.

#### Future improvements (TODO)

* Implement authentication and use tokens
* Add new components to be able to create new post or project in the frontend
* Personalize icons/images

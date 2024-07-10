---
layout: '@/templates/BasePost.astro'
title: Portfolio - CS50W Capstone
description: My final project for CS50W is a website portfolio that showcase projects and also includes a blogpost.
pubDate: 2020-02-05T00:00:00Z
imgSrc: '/assets/images/image-post2.jpeg'
imgAlt: 'Image post 2'
tags: ["Javascript", "Bootstrap", "Tailwindcss", "Python", "Django", "Reactjs" ]
---

# CS50W Final Project

### Github repository: <https://github.com/rodvicj/CS50W-Capstone>

### Video demo: <https://youtu.be/mBsxNuPVDmA>

# CS50W Final Project

## Overview

Final project for CS50W, a website portfolio that showcase projects and
also includes a blogpost.

### Stack

* Django-restframework
* Reactjs
* Tailwindcss

## Project structure (What’s contained in each file I created)

```
PROJECT_ROOT
├── backend             # api, django files
├── frontend            # reactjs files
├── README.md           # this README file
└── requirements.txt    # dependencies (python packages)
```

## How to run the application
1. Install python packages and javascript packages dependencies.
2. ```make runserver``` command to start backend(api) server
3. ```make npm-start``` command to start frontend server
NOTE: You can load initial posts and projects data by running ```make load-fixtures```.

#### Future improvements (TODO)

* Implement authentication and use tokens
* Add new components to be able to create new post or project in the frontend
* Personalize icons/images

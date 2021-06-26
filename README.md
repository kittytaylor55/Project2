# Fitness Nuts ![Node.js](https://img.shields.io/badge/License-Node.js-blue.svg) ![MIT](https://img.shields.io/badge/License-MIT-red.svg)

GITHUB Source
[GitHub Repo](https://github.com/kittytaylor55/Project2.git)

[Heroku Deployed APP]()

## Application Screenshots

![Fitness Nuts Prfile](https://user-images.githubusercontent.com/76461629/123502901-6e14c400-d604-11eb-8912-b8b74fecfad6.png)

![Fitness Nuts Homepage](https://user-images.githubusercontent.com/76461629/123502904-710fb480-d604-11eb-9b48-e32d552dc1cb.png)

## Description

---

Fitness Nuts allows users to register and keep track of their physical condition and find workouts to do! Users will be able to see their age, weight, and height in their profile, and then find a workout at random to get their fitness routine started. The randomized workout helps keeps the user’s routine different and unexpected, rather than following the same workout set week after week.

Future updates: More workouts, the ability to update age, and weight, and feature to select workouts based on time duration.

## Technologies

---

### Node.js/Express

- Installed Node.js packages and dependencies (Express, MySQL2, Bcrypt, etc.)
- Set up server.js file with packages to get server running
- The connection.js file utilizes Sequelize and Dotenv to get database configured
- The controllers folder has route structure set up with GET and POST methods in mainRoutes.js and userRoutes.js
- Routes handle signup, log in, log out, and page render functionality

### MySQL/Sequelize

- Created database 'fitness_db'
- Set up models: User and Exercise
- Created seed data and seeded data into database
- index.js file sets up foreign key relationships

### Handlebars.js

- Using Handlebars.js framework to set up HTML structure
- Linking Sequelize database with Express to display data dynamically in 'views' folder

### Bulma.io

- Bulma CSS styling for Handlebars.js pages
- Created polished UI for app

## Contact

Crystal Taylor: <kittytaylor@gmail.com>

Greg Romero: <>

Jessie Guadarrama: <jesguadarrama98@gmail.com>

## License

[Node.js License](https://raw.githubusercontent.com/nodejs/node/master/LICENSE)

Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.

---

The MIT License (MIT)

Copyright (c) 2011-2021 Twitter, Inc.

Copyright (c) 2020 Jeremy Thomas (Bulma.io)

Copyright (c) 2009-2014 TJ Holowaychuk <tj@vision-media.ca> (Express.js)

Copyright (c) 2013-2014 Roman Shtylman <shtylman+expressjs@gmail.com> (Express.js)

Copyright (c) 2014-2015 Douglas Christopher Wilson <doug@somethingdoug.com> (Express.js)

Copyright (C) 2011-2019 by Yehuda Katz (Handlebars.js)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

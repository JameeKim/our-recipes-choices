# A Guide on the Tools We Can Use

_Disclaimer_: This is soley written by me and thus is very subjective.

- [A Guide on the Tools We Can Use](#a-guide-on-the-tools-we-can-use)
  - [Foundational Components](#foundational-components)
    - [Assumptions](#assumptions)
    - [Overview](#overview)
    - [Backend Only](#backend-only)
    - [MERN/MEAN Stack](#mernmean-stack)
    - [Full Stack Framework](#full-stack-framework)
  - [Optional Tools](#optional-tools)
    - [Typescript](#typescript)
    - [ESLint](#eslint)

## Foundational Components

In this section, I'll talk about the main tools our application will utilize.

### Assumptions

The assumptions I'm making here about our decisions so far are:

- we are setting up a web server running on or able to be developed on `node.js`,
- we are using `mongoose` as our database connection library,
- and we are using `bootstrap` for our client-side styling.

I'm also assuming about our team's web development experience as follows:

- everyone has taken a course on using Express and EJS to run a web server and render HTML pages to be sent to the client,
- some of us are taking COMP308 Emerging Technologies which teaches how to use React, but not everyone knows about or has used React before,
- a couple of us are familiar with using Angular,
- and not a lot of us have used any full stack frameworks (or some of so-called meta-frameworks) like Next.js, Angular Universal, or Nuxt.js. (Tell me if Angular Universal does not belong here because, again, I don't know that well about Angular.)

The things above are just my wild guess, so please correct me if I got something wrong.

### Overview

I'm bringing here basically 3 choices to choose from. Generally speaking, the 3 categories are ordered in regards to how much it's advised to know about web app development to fully utilize the tools, but I would like to say that Remix is a little bit of an exception due to its design principles. But more on that later.

Below is a general overview of the 3 choices.

1. **Backend only**: We only set up a server that sends HTML, and that's the end. Just like the Express + EJS combination.
1. **MERN/MEAN stack**: We have 2 parts, the server and the client. The code on the browser (client) drives the main interaction with the user, and the server is just there to mostly process any data loading or data mutation.
1. **Full stack framework**: We use a framework that takes care of some boilerplate for communicating between our server and client.

Now, let's look into each option in more detail.

### Backend Only

We set up a web server that responds to various client requests, most likely confined to navigation (requesting an HTML page for a url) or form requests. I have something that I want to make it clear here. **This is a very simple and solid way to build a web application** that has been used since way back in time. Just because it's an old methodology, it doesn't necessarily mean that it's outdated or performs poorly. In fact, this is the easiest way to make a web application that can run on all platforms and provide maximum accessibility.

Of course, there are some limitations. The biggest one is that **we cannot provide users with interactive dynamic data unless the browser makes another round trip of navigation request**, receiving another full HTML page. This experience does not feel that interactive, and this is what all those client-side javascript libraries and frameworks try to solve. Another thing to note here, though, is that we can still provide *some* interactivity on the client-side; we can utilize `bootstrap` to easily create interactive modals and all that good stuff. It is just the *data* that we cannot provide dynamically without reloading the page. If you'd like to use some client-side javascript to send requests to and receive responses from our server, you're just better off with one of the other 2 options. It's just not worth it to spend your time writing all the basic functionalities for it like sending requests, handling responses, handling error cases, and displaying the state to the user.

Good things:

- One thing to take care of (only the server) - confined responsibilities to fulfill and less confusion like "Where does this code run?"
- Everyone has the experience of using this toolset (I think?)

Meh things:

- Providing interactive dynamic data without a page reload/refresh is difficult (you can fake it, but ultimately, you're confined to what you have in the HTML the server sent for that one request)
- It **is** possible to write client-side javascript, but it becomes really inefficient unless you only write small things

### MERN/MEAN Stack

### Full Stack Framework

## Optional Tools

### Typescript

### ESLint

Actively use quick fix menu.

ts-node, nodemon, node-dev, ts-node-dev

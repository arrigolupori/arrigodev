---
title: 'Why I chose NestJS & Next.js [SaaS series]'
meta_title: 'The most productive tech stack to build your SaaS in 2022'
date: 'Dec 10, 2021'
excerpt: "Want to learn the most user-friendly tech to build a SaaS? Here's why I chose NestJS & Next.js for the SaaS series."
cover_image: '/images/posts/img3.jpg'
category: 'Python'
author: 'Sam Smith'
author_image: 'https://randomuser.me/api/portraits/men/12.jpg'
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->

Building a SaaS from scratch is not easy.

There are multiple reasons why you can't find a single video on YouTube that shows you the process from beginning to end:

1. Businesses don't have an incentive to teach others
2. The requirements differ from project to project
3. There is no "end"—a SaaS constantly evolves

Although the odds of creating a successful SaaS business are stacked against non-technical founders, the web has changed.

You can now create entire web experiences without touching a single line of code (aptly named the no-code movement).

Yet the limitations of no-code are (and will always be) significant compared to developing an app from scratch.

This is where modern frameworks come in.

## The rise of development frameworks

As a business concept, SaaS has been around for more than 20 years now. But not many people talked about it pre-2010.

Just as SaaS was taking shape, so were frameworks like Ruby on Rails—making the process of development less painful.

The idea was to remove as much of the friction as possible and let developers build features that delivered returns.

Back then, too much time was being spent on:

-   Fiddling with configurations & low-level code
-   Fixing unexpected bugs across browsers
-   Preparing assets for deployment

In the early 2000s, coding was painful. Architecture took a backdrop compared to getting stuff out there, and it showed.

Yet in 2022, new developers (like me) still face similar challenges; not because of lack of technology but because of lack of resources on how to build features that matter in a cohesive way.

## Why I chose NestJS & Next.js

Frustrated with the vast number of resources talking about why technology X is better than technology Y, I took a step back and looked at the big picture—the app's architecture.

There are a multitude of software architectures for the web, but you really only have to worry about 2 as a start:

1. The monolith
2. Decoupling

Both are valid to build a SaaS, and both have their pros and cons. I chose to go with the latter because it's where most companies are investing for the future, making it the most forward-looking.

### What is a monolith?

A monolith is an application for which both the backend (server) and frontend (client) code live within the same codebase.

The major pro of a monolith is that you only have one directory to work from, making it simple to manage long-term.

The major con is that the more features you build, the more bug-prone the codebase becomes due to unexpected behavior between legacy code and newer code.

Once your codebase becomes large enough, a monolith also becomes a nightmare to deploy to production—but you don't have to worry about that if you're just starting out.

### What does "decoupling" mean?

Decoupling is the act of separating the server and client into two different codebases and pass data between them via HTTP.

# Project Brief, The Collab Lab
## Smart Shopping List

### Overview
The goal of this project is to work together to build a “smart” shopping list that learns your shopping habits over time, putting items you are most likely to need to buy in the near future at the top.

This project is based on [iNeedToBuy.xyz](https://app.ineedtobuy.xyz/), a mobile web app I built for my own use last year. I’ve invited you to the [private GitHub repo for that site](https://github.com/segdeha/ineedtobuy.xyz) in case you get stuck and want a hint!

### Locations for things
* Site: {link to cohort live site}
* Repo: {link to cohort repo}
* Clone URL: {clone URL}
* Issue list: {link to cohort repo issues}
* Database: {link to cohort firebase database}

### Project cadence & duration
The project is expected to take 40 hours per participant, spread over 8 weeks.

Each week, the team of 4 developers will split into 2 pairs of 2 developers each. Each pair will take on a story or task from the issues list to work on together that week.

Pairings will go as follows:

#### Week 1, {start date - end date}
1. {Name} & {Name}
2. {Name} & {Name}

#### Week 2, {start date - end date}
1. {Name} & {Name}
2. {Name} & {Name}

#### Week 3, {start date - end date}
1. {Name} & {Name}
2. {Name} & {Name}

#### Week 4, {start date - end date}
1. {Name} & {Name}
2. {Name} & {Name}

#### Week 5, {start date - end date}
1. {Name} & {Name}
2. {Name} & {Name}

#### Week 6, {start date - end date}
1. {Name} & {Name}
2. {Name} & {Name}

#### Week 7, {start date - end date}
1. {Name} & {Name}
2. {Name} & {Name}

#### Week 8, {start date - end date}
1. {Name} & {Name}
2. {Name} & {Name}

### How to know what to do
The project is organized in GitHub as a set of epics, each broken down into various tasks and/or stories. You can find the epics, tasks, and stories in the [Issues section of the project]({link to cohort repo issues}) on GitHub.

An “epic” describes the work needed to implement a high-level feature or set of related features. Each of the epics contains some number of either tasks or [user stories](https://www.mountaingoatsoftware.com/agile/user-stories). Each of these include [acceptance criteria](https://www.leadingagile.com/2014/09/acceptance-criteria/) (AC) that describe how you know whether the task or story is complete.

A task or story is “done” when the following are all true:

* The AC have been met
* Tests have been written to validate the “[happy path](https://en.wikipedia.org/wiki/Happy_path)”
* In the case of a UI feature, it has been reviewed for accessibility
* The code to complete the task or implement the feature has been reviewed and approved by the other pair of developers
* The [Product Owner](https://www.agilealliance.org/glossary/product-owner/) (i.e. Andrew or 1 of the mentors) has accepted the work as adequately meeting the requirements

The “backlog” (the collection of epics, stories, and tasks) represents the work needed to complete the project. At the point when all of the stories and tasks are done, we should have a working app!

### Development process
Work will be done on feature branches in git. Branches should be named in the following way:

	<initials of person 1>-<initials of person 2>-<short description>

For example:

	stc-an-connect-to-firestore

The hypothetical example above has Stacie Taylor-Cima and Alejandro Nanez working together on connecting the app to Firestore. Each of them will be able to work on the feature branch independently, but only one of them will submit the merge request when the work is ready (described in more detail below).

When you’re ready to start work on a feature, one person in your pair should create a local branch following the naming convention above, then push the branch to GitHub so your pair buddy can pull it down to their local environment. The following steps should work to do just this:

	git checkout -b an-example-feature-branch
	git push -u origin an-example-feature-branch

When you and your pair partner have working code that you believe is ready to be merged to master and deployed, you will follow the following steps:

1. Create a “[pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)”.
2. Let the other pair team know in Slack that you have a new merge request for them to review.
3. Incorporate feedback from the other pair team into your work until both you and they are satisfied the code is ready to be merged.
4. Request that Andrew or one of the mentors review the merge request for final approval.
5. Once approved, merge the merge request into master. (Your code will be built and deployed to production automatically thanks to [Netlify](https://www.netlify.com/).
6. Check your work on the [production site]({link to cohort live site}).
7. Celebrate! 🥳

### What else?
I’m around 💯% sure I’m forgetting or glossing over something important, so please be noisy on Slack as things come up. The mentors and I will do our best to get you unstuck. Also, lean on each other for help as well! Finally, work in the open so everyone can benefit from your questions.

![gif of a My Little Pony pulling on goggles, with a determined look on their face, saying, "Let's do this".](http://giphygifs.s3.amazonaws.com/media/PuWNMebKGIKNG/giphy.gif)
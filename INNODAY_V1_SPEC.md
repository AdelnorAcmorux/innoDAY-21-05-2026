# InnoDAY V1 Specification

## Goal

Create a secure internal hub for Kontron employees to propose ideas, react to them, join challenges, and browse past InnoDAY editions.

## Product framing

The site is not just a "box of ideas". It is an action hub with three core actions:

1. Propose an idea
2. Join or support an idea
3. Review and reuse past InnoDAY content

## Primary users

- Kontron employees
- Admin users (organizers): can create and archive InnoDAY editions, moderate ideas, promote ideas to challenges

## Technical stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js App Router + TypeScript | |
| Hosting | Vercel | Portable to Azure later |
| Database | Neon (serverless Postgres) + Prisma ORM | Swap connection string for Azure PostgreSQL if migrating |
| Auth | Auth.js v5 with Microsoft Entra ID provider | |
| UI components | shadcn/ui + Tailwind CSS | Desktop-first, responsive to screen size |
| Email | Resend + React Email | Primary notification channel |
| Design | Corporate clean, Kontron brand colours | Initials-based avatars, no Microsoft profile photo |

## Authentication

The product must use Microsoft 365 authentication through Entra ID / Microsoft identity.

Rules:
- Only Kontron employees with company accounts can access the app
- No consumer or external emails
- No homemade password system in V1
- Sessions must be secure and expire appropriately
- Implementation: Auth.js v5 with the built-in Microsoft Entra ID provider
- Admin role: `isAdmin` boolean flag on the User model in the database, seeded manually at bootstrap

## Idea categories

The V1 must support the following categories:

- Problem Solving & Brainstorming
- Improvement & Realization
- Experimentation & Exploration

## Idea reactions

Replace the generic like with two explicit signals:

- Fire: the idea feels exciting, motivating, or worth backing
- Gear: the idea feels innovative, clever, or technically interesting

Rules:
- Both reactions are independent toggles — click to add, click again to remove
- A user can apply both Fire and Gear to the same idea simultaneously
- The UI must show both counters clearly
- Ideas can be sorted by Fire count, Gear count, or newest

## Event cadence

InnoDAY runs quarterly. Each quarter produces a named edition (e.g. InnoDAY Q2 2026) with a defined start and end date. When the edition closes, an admin archives it and creates the next one.

- Ideas can only be submitted when an active edition exists
- Between editions (edge case), the home page shows a message and a link to the last archived edition
- The platform is always open for browsing archives and reading content
- Home page message when no active edition: *"Happy to see you eager to innovate, but no InnoDAY is currently running. Check out what was built before!"*

## Ideas vs Challenges

These are two distinct concepts:

- **Idea**: a suggestion submitted freely by any employee. An employee can submit multiple ideas.
- **Challenge**: an idea that has been elevated into an active group effort. Any employee can start a challenge from any idea — not just the idea's author, and not just admins.

### Challenge rules

- An idea can have at most one active challenge. Once a challenge exists for an idea, the "Start Challenge" button is hidden.
- Any employee can start a challenge from any idea.
- The employee who starts the challenge becomes the challenge initiator.
- The initiator can leave the challenge at any time:
  - If they are the only participant, the challenge is dissolved and the idea returns to its normal state.
  - If other participants have joined, the challenge continues without the initiator.
- All employees who had already joined the idea receive an email when a challenge is started:
  > Subject: "[Name] has decided to take on a challenge — are you in?"
  > Body: "[Name] has decided to take on the challenge for '[Idea title]'. Do you want to tackle it with them?"
  > CTA: [ Yes, join the challenge ] | [ View the challenge ]
- Email is the primary notification channel. The platform is not assumed to have high daily traffic.

### Joining an idea vs joining a challenge

- **Join idea** — soft interest signal. "This is interesting, I could work on this." Silent toggle, no confirmation needed.
- **Join challenge** — hard commitment. "I will work on this during InnoDAY." Requires a confirmation dialog.
- Leaving a challenge requires confirmation. If the user is alone, the challenge is dissolved. If others are present, it continues.
- No limit on the number of challenges a user can join, but a warning is shown when joining a second or more: *"You have already committed to tackling [X challenge]. Are you sure you want to take on another?"*

### Challenge completion report

- Any challenge participant can submit a completion report (free text) at any time, including after the edition is archived.
- Multiple reports can be submitted by different participants — all are preserved and displayed with the author and date.
- The last report does not overwrite previous ones.
- Admins can also submit reports.

## Admin role

Admins have elevated permissions:
- Create a new InnoDAY edition
- Archive a closed edition
- Delete any idea or comment regardless of interactions
- Submit or edit any challenge completion report

Admins do NOT control challenge creation. Any employee can start a challenge.

Admin role is stored as an `isAdmin` boolean on the User model, seeded manually.

## Core V1 features

- Microsoft 365 sign-in
- Lightweight employee profile using first name and last name only, optionally team or department later
- Browse ideas by category
- Create a new idea
- View idea details
- Comment on an idea
- React with Fire and Gear
- Join a challenge
- Browse archived InnoDAY editions
- Admin panel for edition and content management

## Idea fields in V1

Minimum fields:
- Title
- Description
- Category
- Author
- Reactions count
- Comments
- Participants
- InnoDAY edition or event association

Optional later:
- Tags
- Team
- Status
- Attachments

## Out of scope for V1

- Full public profiles
- Rich social networking features
- Direct messaging
- Advanced approval workflows
- Heavy gamification
- Strong recommendation engine
- Complex duplicate detection

## Comments

- Any authenticated user can comment on an idea or challenge
- Comment author can edit or delete their own comment
- Admin can delete any comment
- Comments support threaded replies (Reddit-style, unlimited depth)
- Comments support a simple 👍 like (not Fire/Gear)
- Archived editions are read-only — no new comments allowed

## Email notifications

All notifications are sent by email (Resend + React Email). There are no in-app notifications in V1.

Trigger points:
1. **Challenge started** — sent to all users who joined the source idea
2. **Idea or challenge modified** — sent to all users who joined that idea or challenge

## Archiving behaviour

When an admin archives an edition:
- All ideas and challenges become read-only
- No new reactions, comments, joins, or challenges allowed
- Challenge completion reports can still be submitted at any time by participants

## Idea ownership rules

- Author can edit their idea (title, description, category) at any time while the edition is active
- Author can delete their idea only if no one has joined it (0 joiners)
- Admin can delete any idea at any time
- Soft duplicate warning shown at creation time if another idea in the same edition shares significant title overlap (non-blocking)

## UX principles

- Language: English only
- Desktop-first, responsive to screen size
- Avatars: coloured initials (no Microsoft profile photos)
- Ideas list: filter by category, sort by Fire count / Gear count / Newest, Load more pagination
- No character limits on title, description, or comments
- Make the main action obvious within 30 seconds
- Reduce clutter
- Keep navigation shallow
- Make the difference between Fire and Gear visually clear
- Show recent ideas and active challenges first

## Information architecture

The V1 should stay shallow and predictable. A user should never wonder where to go next.

Recommended top-level pages:

1. Home
2. Ideas
3. Create idea
4. Archives
5. Profile

Optional organizer-only areas can come later, but they should not complicate the employee flow in V1.

### Home

The home page should answer three questions immediately:

- What ideas are active now?
- What can I join?
- What should I do next?

It should surface:

- featured or recent ideas
- active challenges
- clear call to action to propose an idea
- quick access to past editions

### Ideas list

The ideas list should support browsing and sorting by:

- category
- Fire count
- Gear count
- newest first

The list should make it easy to scan ideas without opening each one.

### Idea detail

The idea detail page should show:

- title and description
- author
- category
- Fire and Gear counters
- comments
- participants
- join action
- shareable context for the challenge

### Create idea

The create flow should be short and focused:

- title
- description
- category
- optional context or challenge link

If the form becomes too long, it should be split later, but not in V1.

### Archives

Archive pages should make it easy to revisit older InnoDAY editions, then drill into the ideas that belonged to each edition.

### Profile

The profile page should stay minimal:

- first name
- last name
- company email
- ideas created
- ideas joined

No rich public profile is needed in V1.

## Primary user journeys

### Journey 1: sign in and start exploring

1. Employee signs in with Microsoft 365
2. Lands on home
3. Sees active ideas and challenges
4. Opens an idea or starts creating one

### Journey 2: propose an idea

1. Employee clicks create idea
2. Fills title, description, and category
3. Submits the idea
4. Idea appears in the active list

### Journey 3: support an idea

1. Employee opens an idea
2. Adds Fire and/or Gear reaction
3. Leaves a comment if needed
4. Joins the challenge if relevant

### Journey 4: revisit past editions

1. Employee opens archives
2. Chooses a past InnoDAY edition
3. Browses the ideas from that edition
4. Reuses or references previous work

## Success criteria

The V1 is successful if:
- An employee can sign in without confusion
- An employee can submit an idea in under 2 minutes
- An employee can join or support an idea in one or two clicks
- People can understand the three categories quickly
- Past InnoDAY content is easy to find

## Suggested next step

Sitemap and wireframes are defined in SITEMAP.md. Next step is to scaffold the Next.js App Router project and implement authentication with Microsoft Entra ID.

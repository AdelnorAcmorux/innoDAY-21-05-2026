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
- Secondary internal users later: organizers, moderators, and event owners

## Authentication

The product must use Microsoft 365 authentication through Entra ID / Microsoft identity.

Rules:
- Only Kontron employees with company accounts can access the app
- No consumer or external emails
- No homemade password system in V1
- Sessions must be secure and expire appropriately

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
- An employee can react once per idea per reaction type
- A user may use both reactions on the same idea if allowed by the product rules
- The UI must show both counters clearly
- Ideas can be sorted by Fire count, Gear count, or a combined ranking later if needed

## Core V1 features

- Microsoft 365 sign-in
- Lightweight employee profile using first name and last name only, optionally team or department later
- Browse ideas by category
- Create a new idea
- View idea details
- Comment on an idea
- React with Fire and Gear
- Join an idea or challenge
- Browse archived InnoDAY editions

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

## Duplicate idea handling

Do not block V1 on perfect duplicate detection.

Recommended V1 behavior:
- Optional soft warning when an idea looks similar to another one
- Non-blocking suggestion only
- No aggressive auto-merge

Later improvement:
- Similarity-based duplicate detection using name overlap and shared vocabulary
- Only if false positives are manageable

## UX principles

- Make the main action obvious within 30 seconds
- Reduce clutter
- Keep navigation shallow
- Make the difference between Fire and Gear visually clear
- Show recent ideas and active challenges first
- Keep archive browsing simple and searchable

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

Define the information architecture and the main pages for the V1 before starting the UI implementation.

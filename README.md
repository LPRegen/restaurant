# restaurant

Restaurant page for The Odin Project.

icons8
image of coffee cup.

## createTabs()

Will create three tabs with the content.

- create li element
- tabs arr with Home, Menu, Contact
- listedItems array, empty
- iterate tabs arr

  - set textContent to tabs[i]
  - add class list tab
  - push item to listedItems

- **return listedItems**

## createHeader

- create the header element.
- create img element for the logo.
- create ul container element for tabs.

- add id for logo
- add id for tabs.
- add alt att logo

- createTabs().forEach((tab) => {
  ul.appendChild(tab);
  })

- header.appendChild(img);
- header.appendChild(ul);

**return header**

## createFooter

- create footer element
- create anchor element
- create img element

- anchor

  - add id
  - add href
  - add target
  - add rel ?
  - add textContent

- img

  - add src
  - add alt

- append elements.
- append footer

toggleActiveClass

- if e.target !== this
  - let selectedTab = e.target.textContext;

## createContent

Depending on which tab is selected call corresponding function.

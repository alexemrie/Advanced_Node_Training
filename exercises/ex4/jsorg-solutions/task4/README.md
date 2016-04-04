# Organizing JavaScript Functionality

In this exercise, you will modify and extend existing code to wire up some basic interactivity for a simple "cool site". The objective of this challenge is to exercise skills with basic JavaScript, including events and DOM interactions (using jQuery), as well as using basic best practices for organizing your code.

We will break this exercise into four tasks.

**Note:** The Ajax calls in this exercise will only work over `file://...` protocol if you're in Firefox. If you're using Chrome or IE, you'll need to run a local fileserver (like python's `SimpleHTTPServer`, Apache, IIS, etc) in the coding challenge directory, and load it into the browser using `http://localhost...` instead.

## Task 1

1. Open "header.js". In this file, you will attach event handlers for the header links. Use a jQuery "document-ready" event handler for this code.
2. When the links are clicked, use Ajax to fetch the contents of the file referenced by the link's `href`, and load that content into the `#modal` element.
3. Finally, make the modal visible.
4. No other interaction is necessary, for now. We'll revisit the header links in Task #2.

## Task 2

1. Add a close button to the modal and behavior to make it work (hint: also need html and css).
2. Add behavior so the header's "register" and "login" links also close the modal.
3. Open "carousel.js" and "details.js":
	- "carousel.js": add event handlers for the left and right carousel buttons.
	- "details.js": add an event handler to listen for clicks on the items in the carousel.
4. Whichever carousel item is clicked, pull out the "ID" from the HTML `rel` attribute.
5. With this "ID", make an Ajax request to load the file `details/{ID}.html` and put its contents into the `$content` div (hint: copy the Ajax loading from header.js).

## Task 3

1. Refactor "header.js", "carousel.js", and "details.js" to use the "classic module pattern". Each file should expose one module name (`Header`, `Carousel`, and `Details`, respectively).
2. Each module's API should have at a minimum one method called `init()`, which you should wire up to be called by the jQuery "document ready" event.
3. What do you notice about the click handling of carousel items? Which module is that in, and does that make sense for it to be there?
4. Refactor so the "click" handling from `Details` is moved into `Carousel`, but keep the Ajax content loading in `Details`.
   - **Hint:** Add a public API method on `Details` which takes the "ID" and does the Ajax file loading; put the event handling in `Carousel` for clicks on the carousel items, wired to call the method you added to `Details`.
5. Refactor so there is only one jQuery "document ready" event (in its own file, such as "app.js") that calls the `init()` method on each of the three respective modules.

## Task 4

1. In "app.js", create a global "pubsub" event-hub (call it `EVT` for instance) using the included `eventemitter2` utility.
2. In the document-ready event handler, publish an `"init"` event (using `EVT.emit(..)`) to the hub, and have each module listen (using `EVT.on(..)`) for this "init" event to run its own `init()` method.
3. Remove the load-person method from `Details`. Instead, use `EVT` in `Carousel` to `emit(..)` a person-selecting event with the "ID" of the person selected. Then have `Details` listen (via `EVT.on(..)`) for this event by name, to select the person with the ID provided.
4. Add a link/button in one of the details listings that fires the person-selecting event (same as the carousel) to load another person.

## Extra Credit

1. The `"person-selected"` event (or whatever you called it) should scroll the carousel to show the person that's been selected.
2. Highlight the selected person in the carousel.

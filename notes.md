      NOTE - BUTTONS ARE A TAGS NOT ACTUAL BUTTONS & hover changes color
      Add Contact Button
      Search Bar
      side by side if fits, else stacked - greyish bg for this div
      IF NO CONTACTS - div box same color saying no contacts and add contact button
      IF CONTACTS - div no bg ul list of contacts no bullet each li is a box of name heading with phone number: number, email: email, edit button and delete button, new line for each
      if contacts fit - eack li is next to each other w/ no line - else stacked w/ line separating at bottom
      Empty search contacts placeholder - no content until searching
      IF SEARCH BRINGS UP CONTACT - show only matching contacts
      IF NO CONTACT MATCHES - show box same color as other with message showing search input updated as typing
      searches name only
      ADDING CONTACT
      is its own route - /#contacts/new
      slides up from bottom
      create contact heading - full name, email, number labels and inputs, submit and cancel button
      cancel slides home screen back from bottom
      submitting contact slides home back up from bottom
      submitting invalid form does not move away from page - highlights missing input with message below input box
      email must have @ and domain.com
      no checks for duplicates
      EDIT CONTACT
      is its own route - /#contacts/edit/contactId
      similar to new contact just with input filled in
      DELETE CONTACT
      brings up alert asking to confirm deletion
      deleting all contacts brings back original home page with no contacts info box
      deleting contact frees up contactId number
      FOOTER
      line separating body divs from footer
      One line Developed by xxx and xxx.
      
      OBJECTS
      Contact - id, name, email, number, tags properties
      Tags - collection of tags on each contact
      List - collection of contacts
      BEHAVIORS
      search, add, edit, delete, filter tags
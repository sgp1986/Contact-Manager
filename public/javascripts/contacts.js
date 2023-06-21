/*
home page rendering - HTML

JS JOBS
render new contact page, edit page
render no contacts placeholder / contacts list
  change class based on empty contacts list or not
slide transition
alert for delete
form input verification
create new contact object on form submission
update list collection of contacts
render search results
  change search results div class based on results






*/

document.addEventListener('DOMContentLoaded', () => {
  let contacts = [];

  fetch('./scripts.hbs')
    .then(response => response.text())
    .then(source => {
      let template = Handlebars.compile(source);

      let data = {
        contacts: contacts
      };

      let renderedHtml = template(data);
      document.getElementById("output").innerHTML = renderedHtml;
    })
    .catch(error => console.error(error));

  
  

  




});

// insertAdjacentElement Example
function insertElement() {
  const parent = document.querySelector('.filter');
  const h2 = document.createElement('h2');
  h2.textContent = "insertElement() here";

  parent.insertAdjacentElement("beforebegin", h2);
}
// insertAdjacentText Example
function insertText() {
  const parent = document.querySelector('li:nth-child(2)');
  const h2 = "insertText() here";

  parent.insertAdjacentText("afterbegin", h2);
}
// insertAdjacentHTML example
function insertHTML() {
  const parent = document.querySelector('li:nth-child(3)');
  const p = "<p><strong>insertHTML() here</strong></p>";

  parent.insertAdjacentHTML("beforeend", p);
}
// insertBefore Example
function insertSomethingBefore() {
  const parent = document.querySelector('#item-form');
  const h2 = document.createElement('h2');
  h2.textContent = "insertBefore() here";

  parent.insertBefore(h2, document.querySelector('.form-control'));
}

// Execution of examples:
insertElement();
insertText();
insertHTML();
insertSomethingBefore();

// RULES (excluding insertBefore):
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/

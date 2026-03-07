const form = document.getElementById('item-form');
console.log(form);

// You can listen to a "submit" action (input of type='submit') by using the "submit" event handler
form.addEventListener('submit', (e) => {
    // Normally, a form submits to the SAME PAGE if an action is not specified. So it becomes BASE_URL?input_1=value_1&input_2=value_2..etc. However, when we do preventDefault(), we prevent the page from sending the values to the same page/action and we can handle stuff ourselves.
    e.preventDefault();
    console.log("Submitted");

    // One way to get the values of the inputs is to first querySelect the elements of the inputs then using input.value:
    const item = form.querySelector('#item-input');
    const priority = form.querySelector('#priority-input');

    // Validation (NOTE: priority.value's initial value is 0, check the index.html)
    if (item.value === '' || priority.value === '0') {
        alert("Please fill in all fields!");
        // Early return
        return;
    }

    // Of course, javascript is stupid enough to not know about the property "value" since item is a niche type of "Element"
    console.log("Item = ", item.value);

});

// Another way to do things is use the FormData constructor:

const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // formData.entries() will return an iterator. An iterator, by itself, will serve us no purpose. It only allows us to loop through it. We shall use for..of here (to loop over the values per index)
    const entries = formData.entries();
    // console.log(entries);

    for (const entry of entries) {
        console.log(entry[1]);
    }
};

form.addEventListener('submit', onSubmit);
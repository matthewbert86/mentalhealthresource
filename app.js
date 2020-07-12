/*****     Filter through input to display list items based upon what the user enters     *****/


// Step 1 -  Lets create a variable for the input
    // document.getElementById() will grab any tag by its id
let filterInput = document.getElementById('filterInput');
// Step 2 - Add an event listener for that 
    // keyup is the type of event
    // when this happens, we add a function called filterNames
    filterInput.addEventListener('keyup', filterNames);

// Step 3 - Set up the function below for filterNames

    function filterNames(){
// Step 4 -  lets get the value of the input
        // setup another variable called filterValue
        // we want to get the value for this as well
        // toUpperCase will convert it to uppercase
        let filterValue = document.getElementById
        ('filterInput').value.toUpperCase();
        // we can set up to this point by using - console.log(filterValue);

// Step 5 - get names ul and create a variable for it

        let ul = document.getElementById('names');
        // next we want to get all the collection items in the ul, which will be all the li
        // querySelectorAll() is a function that can select anything based on class names/etc.
        let li = document.querySelectorAll('li.collection-item');

// Step 6 - loop through collection-item lis
        // The following after let 1 = 0 means as long as i is greater than li.length, then we want to increment by 1, which is i++
        for(let i = 0; i < li.length;i++){
            // lets get the names, which are wrapped in <a> tags
            // getElementByTagName will help us get the names into our variable
            // the current iteration of the look will have us use li[i]
            // [0] is used because we only want the current link
            let a = li[i].getElementsByTagName('button')[0];
            // lets check to see if what the user types in has a match in our list

            // innerHTML will grab whatever is inside the <a> tag
            // if its greater than > -1, it means one of the letters matched one of the names
            if(a.innerHTML.toUpperCase().indexOf(filterValue)> -1){
                // if it matches, we want to set the css style to nothing
                li[i].style.display = '';
            } else {
                // if it doesnt match, we will set it to none
                li[i].style.display = 'none';
            }

        }

    }

// ADD ACCORDION TO EACH LIST ITEM
    // We dont want the user to see the link, I just want them to be able to see the accordion so they can click on that for it to drop down. I have those links set to hidden for now in html

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
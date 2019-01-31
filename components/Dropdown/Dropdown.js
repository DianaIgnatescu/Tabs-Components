class Dropdown {
  constructor(element) {
    TweenMax.to('.dropdown-content', 0, { y: -100 });
    TweenMax.to('.dropdown-content', 0, { opacity: 0 });
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
    // this.element.style.transition = 'all 1s';
    TweenMax.to('.dropdown-content', 1, { y: 0 });
    TweenMax.to('.dropdown-content', 1, { opacity: 1, delay: 0.5 });
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
const dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));
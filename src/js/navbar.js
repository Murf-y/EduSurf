import CalculatorTab from "./Tabs/calculatorTab.js";
import DictionaryTab from "./Tabs/dictionaryTab.js";
import NotesTab from "./Tabs/notesTab.js";
import NumbersTab from "./Tabs/numberTab.js";
import SearchBookTab from "./Tabs/searchBooksTab.js";
import TranslateTab from "./Tabs/translateTab.js";
import { setCssVariable , removeClassFromElement, addClassFromElement} from "./utils.js";


const navbarMaxWidth = "7rem";

var is_navbar_closed = true;
function OpenNavBar(){
    // Called in navbar-controller-icon click event

    is_navbar_closed = false;

    // increase the navbar width
    setCssVariable("--navbar-width", navbarMaxWidth);

    // change the icon class for styling to take place
    removeClassFromElement(".navbar-controller-icon","right-icon");
    addClassFromElement(".navbar-controller-icon","left-icon");

    // change the icon
    document.querySelector(".navbar-controller-icon").src = "../assets/icons/arrow-left.svg";

    //change the logo size
    document.querySelector(".navbar-logo").style.width = "50%";

    // change the navbar items to their original state
    ChangeNavBarItems();

}

function CloseNavBar(){
    // Called in navbar-controller-icon click event

    is_navbar_closed = true;

    // decrease the navbar width
    setCssVariable("--navbar-width", "2rem");

    // change the icon class for styling to take place
    removeClassFromElement(".navbar-controller-icon","left-icon");
    addClassFromElement(".navbar-controller-icon","right-icon");

    // change the icon
    document.querySelector(".navbar-controller-icon").src = "../assets/icons/arrow-right.svg";

    //change the logo size
    document.querySelector(".navbar-logo").style.width = "80%";

    // change the navbar items to their original state
    ChangeNavBarItems();
}


function ChangeNavBarItems(){
    // Called When the navbar is opened or closed

    // change the navbar items
    var navItems= document.querySelectorAll(".navbar-item");

    navItems.forEach(item => {
        // check if the navbar is closed, and toggle it while doing so
        if(!is_navbar_closed){
            // wait 0.1 second to gradually open the navbar
            setTimeout(() => {
                // change classes for styling
                item.classList.remove("closed");
                item.classList.add("opened");
            }, 100);
            
        }
        else{
            // wait 0.1 second to gradually close the navbar
            setTimeout(() => {
                // change classes for styling
                item.classList.remove("opened");
                item.classList.add("closed");
            }, 100);
        }
    });
    setTimeout(() => {
        if(is_navbar_closed){
            var navBarIcons = document.querySelectorAll(".navbar-item-icon");
            navBarIcons.forEach(icon => {
                icon.classList.remove("hidden")
            });
            var navBarText = document.querySelectorAll(".navbar-item-text");
            navBarText.forEach(text => {
                text.classList.add("hidden")
            });
    
        }
        else{
            var navBarIcons = document.querySelectorAll(".navbar-item-icon");
            navBarIcons.forEach(icon => {
                icon.classList.add("hidden")
            });
            var navBarText = document.querySelectorAll(".navbar-item-text");
            navBarText.forEach(text => {
                text.classList.remove("hidden")
            });
        }
    }, 200);


    
}

// Listen for the click event on the navbar-controller-icon
document.querySelector(".navbar-controller-icon").addEventListener("click", function(){
    // if it contains the left icon then the navbar is open and we need to close it
    if(!is_navbar_closed){
        CloseNavBar();
    } 
    // if it contains the right icon then the navbar is closed and we need to open it
    else {
        OpenNavBar();
    }
});

// Add event listener for each navbarTab

document.getElementById("DictionaryTab").addEventListener("click", function(event){
    if(!is_navbar_closed){
        CloseNavBar();
    }
    DictionaryTab();
    event.preventDefault();
});

document.getElementById("CalculatorTab").addEventListener("click", function(event){
    if(!is_navbar_closed){
        CloseNavBar();
    }
    CalculatorTab();
    event.preventDefault();
});

document.getElementById("SearchBooksTab").addEventListener("click", function(event){
    if(!is_navbar_closed){
        CloseNavBar();
    }
    SearchBookTab();
    
    event.preventDefault();
});

document.getElementById("NotesTab").addEventListener("click", function(event){
    if(!is_navbar_closed){
        CloseNavBar();
    }
    NotesTab();
    
    event.preventDefault();
});

document.getElementById("TranslateTab").addEventListener("click", function(event){
    if(!is_navbar_closed){
        CloseNavBar();
    }
    TranslateTab();
    
    event.preventDefault();
    
});

document.getElementById("NumbersTab").addEventListener("click", function(event){
    if(!is_navbar_closed){
        CloseNavBar();
    }
    NumbersTab();
    event.preventDefault();
    
});
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const secetions=document.querySelectorAll('.asection');
const Myul=document.querySelector('#navbar__list');

const frag=document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/* function bulid_nav_bar() is to build navigation bar with links */
function bulid_nav_bar(){
    secetions.forEach( function (element)
    {  const sec_datanav=element.getAttribute('data-nav');
       const newli=document.createElement('li');
       const newlink=document.createElement('a');
       const textNode=document.createTextNode(sec_datanav);
        newlink.appendChild(textNode);
        newli.classList.add("navbar__list");
        newli.appendChild(newlink);
        frag.appendChild(newli);
    });
    Myul.appendChild(frag);

}

/* function AddClassActiveTopOfView() is to define active section to use later */
function AddClassActiveTopOfView()
{
    secetions.forEach( function (sec){
        const rect= sec.getBoundingClientRect();
        if(rect.top >= -50 && rect.top <= 200)
        {  
            sec.classList.add("active");
            sec.style.background='blue';
            
        }
        else if(sec.classList.contains("active"))
        {
            sec.classList.remove("active");
            sec.style.background=000000;
        }
            
    

});
}
/* function scrollToSectionWhenLinkClick() is to scroll sectio when anchor link in navigation bar */
function scrollToSectionWhenLinkClick()
{ const allLinks=document.querySelectorAll('a');
    secetions.forEach(function (sec)
    {   
        allLinks.forEach(function(link){
        if(sec.getAttribute('data-nav')== link.textContent)
        link.addEventListener('click',function(){
        sec.scrollIntoView({behavior:'smooth'});
        sec.style.background='blue';
    }
    );
});
    });
}

/*function  Sections_Active_State() is to  define which link section is active in navigation bar and highlighted when scroll*/
function Sections_Active_State(){
    window.addEventListener('scroll',function(){  
        AddClassActiveTopOfView();
        secetions.forEach(function(sec){
           
            const allLinks=document.querySelectorAll('a');
           
            allLinks.forEach(function(link){
                
                if(sec.getAttribute('data-nav')== link.textContent  && sec.classList.contains("active"))
                {  allLinks.forEach(function(removelink){
                    removelink.style.background='black';
                    
                });
                    
                    link.style.background='blue';
                  
                   
                   
                }
                
               
            });
        
        });
        
    }
    
    );
    }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

bulid_nav_bar();
// Add class 'active' to section when near top of viewport

AddClassActiveTopOfView();





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to section on link click
scrollToSectionWhenLinkClick();


// Set sections as active

Sections_Active_State();




















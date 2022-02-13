function lockedProfile() {
    Array.from(document.querySelectorAll(".profile button")).forEach(button=>button.addEventListener('click',onClick));
    
    function onClick(event){
        let profile =event.target.parentElement;
        let isActive=profile.querySelectorAll("input[value='unlocked']").checked;
        console.log(isActive);
        if(!isActive){
            let info=Array.from(profile.querySelectorAll("div")).find(p=>p.id.includes("HiddenFields"));
            if(event.target.textContent="Show more"){
                event.target.textContent="Hide it";
                info.style.display="block";
            }else{
                event.target.textContent="Show more";
                info.style.display="none";
            }
        }
    }
}
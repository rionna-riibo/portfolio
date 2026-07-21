const items = document.querySelectorAll(".trip-item");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

items.forEach(item=>{
    observer.observe(item);
});
const doc=document.documentElement,startData=()=>{const e=window.innerHeight;doc.style.setProperty("--header-height",`${e}px`),window.innerWidth<1100?doc.classList.add("burger"):doc.classList.remove("burger")};window.addEventListener("resize",startData),startData();const i=new Image;i.onload=i.onerror=function(){doc.classList.add(1==i.height?"webp":"no-webp")},i.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
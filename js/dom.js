const allHeading = document.getElementsByTagName('h1');

        for(const h1 of allHeading){
            // console.log(h1.innerText) 
        }

        const allListing = document.getElementsByTagName('li');
        for(let li of allListing){
            // console.log(li.innerText);
        }

        const getId = document.getElementById('foods')
    //    console.log(getId.innerText);
      const changeTheName = document.getElementById('work-hard');
      changeTheName.innerText = 'This Name change by js'
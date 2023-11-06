(() => {
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    const hotspotBoxes = [
        {
            title: "Multi-function button",
            text: "The multi-function button lets you play, pause, skip, and adjust volume with the touch of a finger",
            image: "images/touch.svg"
        },

        {
            title: "Ultra comfortable silicone",
            text: "Silicone tips that come in different sizes to fit all ears and made of premium materials for guaranteed comfort",
            image: "images/ear.svg"
        },

        {
            title: "Lightning fast charging",
            text: "Wireless magnetic charging delivers quick power to the long-lasting battery, so you never miss a beat",
            image: "images/battery.svg"
        },

        {
            title: "Adaptive sound",
            text: "Adaptive sound technology adjusts volume and EQ based on your environment",
            image: "images/audio.svg"
        },

    ]
  
    //functions
    function modelLoaded() {
      console.log("hotspots loaded");
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    modelLoaded();

    function loadInfo() {
  
      hotspotBoxes.forEach((hotBox, index) => {
          let hotTarget = document.querySelector(`#hotspot-${index+1}`);
          console.log(hotTarget);
          document.createElement("h2");
          textContent = hotBox.title;
  
          document.createElement("p");
          textContent = hotBox.text;
  
          hotTarget.appendChild();
          hotTarget.appendChild();
  
          console.log(hotBox.title);
          console.log(hotBox.text);
      });
    }
  
    loadInfo();
  
    function showInfo() {
      console.log(this.slot);
      console.log(`#${this.slot}`);
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      console.log(this.slot);
      console.log(`#${this.slot}`);
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    //Event Listener
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  })();
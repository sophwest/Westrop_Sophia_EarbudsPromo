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

    // SCROLLING ANIMATION 
    const canvas = document.querySelector("#scroll-video");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 600;

    const images = [];

    const buds = { frame: 0 }

    for(let i=0; i<frameCount; i++) {
      const img = new Image();
      img.src = `images/images_scrolling/VOIDEarbuds_Scrolling_${(i+1).toString().padStart(5, '0')}.jpg`;
      images.push(img);
    }

    gsap.to(buds, {
      frame: 599,
      snap: "frame",
      scrollTrigger: {
          trigger: "#scroll-video",
          pin: true,
          scrub: 1,
          markers: false,
          start: "top, top"
      },
      onUpdate: render
    })

  images[0].addEventListener("onload", render);
  frames[0].addEventListener("load", render);

  function render() {
      context.clearRect(0,0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame],0,0);
  }
  
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
          let selected = document.querySelector(`#hotspot-${index+1}`);
          console.log(selected);
          const titleElement = document.createElement("h2");
          titleElement.textContent = hotBox.title;
  
          const textElement = document.createElement("p");
          textElement.textContent = hotBox.text;

          const imageElement = document.createElement("img");
          imageElement.src = hotBox.image;
  
          selected.appendChild(imageElement);
          selected.appendChild(titleElement);
          selected.appendChild(textElement);
  
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
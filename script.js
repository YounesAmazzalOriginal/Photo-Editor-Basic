// Swip
let swipSwitcher = false;
function swipBtn() {
  swipSwitcher = !swipSwitcher;
  const controls = document.querySelector(".controls");
  const singleFilter = document.querySelectorAll(".single-filter");
  const btnsContainer = document.querySelector(".btns-container");
  const swipButton = document.querySelector(".swip-button");
  const uploadImageContainer = document.querySelector(
    ".upload-image-container"
  );

  controls.style.width = swipSwitcher ? "0%" : "350px";
  controls.style.paddingInline = swipSwitcher ? "0%" : "20px";
  singleFilter.forEach((eachsingleFilter) => {
    eachsingleFilter.style.opacity = swipSwitcher ? "0" : "1";
    eachsingleFilter.style.visibility = swipSwitcher ? "hidden" : "visible";
  });
  btnsContainer.style.opacity = swipSwitcher ? "0" : "1";
  btnsContainer.style.visibility = swipSwitcher ? "hidden" : "visible";
  btnsContainer.style.width = swipSwitcher ? "0px" : "300px";
  swipButton.style.right = swipSwitcher ? "-50px" : "-30px";
  uploadImageContainer.style.width = swipSwitcher ? "0px" : "100%";
  uploadImageContainer.style.opacity = swipSwitcher ? "0" : "1";
}
// /Swip

// Upload Image
function uploadImageInput() {
  const uploadImageInput = document.querySelector("#upload-image");
  const preview_img = document.querySelector(".preview-img");
  preview_img.src = URL.createObjectURL(uploadImageInput.files[0]);
  localStorage.setItem("image-added", preview_img.src);
}
// /Upload Image

// Range Filter
function rangeInput(target) {
  const preview_img = document.querySelector(".preview-img");
  const singleFilter = target.parentElement;
  const filterValue = singleFilter.querySelector(".filter-value");

  filterValue.innerHTML = target.value;

  const brightness = document.querySelector(".brightness");
  const contrast = document.querySelector(".contrast");
  const saturation = document.querySelector(".saturation");
  const grayscale = document.querySelector(".grayscale");
  const sepia = document.querySelector(".sepia");
  const invert = document.querySelector(".invert");
  const blur = document.querySelector(".blur");
  const hueRotate = document.querySelector(".hue-rotate");
  const opacity = document.querySelector(".opacity");

  const filterX = {
    brightness: `brightness(${brightness.value}%)`,
    contrast: `contrast(${contrast.value}%)`,
    saturation: `saturate(${saturation.value}%)`,
    grayscale: `grayscale(${grayscale.value}%)`,
    sepia: `sepia(${sepia.value}%)`,
    invert: `invert(${invert.value}%)`,
    blur: `blur(${blur.value}px)`,
    hue: `hue-rotate(${hueRotate.value}deg)`,
    opacity: `opacity(${opacity.value / 100})`,
  };

  preview_img.style.filter = `
    ${filterX.brightness}
    ${filterX.contrast}
    ${filterX.saturation}
    ${filterX.grayscale}
    ${filterX.sepia}
    ${filterX.invert}
    ${filterX.blur}
    ${filterX.hue}
    ${filterX.opacity}
  `.trim();

  localStorage.setItem("brightness-image", filterX.brightness);
  localStorage.setItem("contrast-image", filterX.contrast);
  localStorage.setItem("saturation-image", filterX.saturation);
  localStorage.setItem("grayscale-image", filterX.grayscale);
  localStorage.setItem("sepia-image", filterX.sepia);
  localStorage.setItem("invert-image", filterX.invert);
  localStorage.setItem("blur-image", filterX.blur);
  localStorage.setItem("hue-image", filterX.hue);
  localStorage.setItem("opacity-image", filterX.opacity);

  // SetItem
  localStorage.setItem("brightness-item", brightness.value);
  localStorage.setItem("contrast-item", contrast.value);
  localStorage.setItem("saturation-item", saturation.value);
  localStorage.setItem("grayscale-item", grayscale.value);
  localStorage.setItem("sepia-item", sepia.value);
  localStorage.setItem("invert-item", invert.value);
  localStorage.setItem("blur-item", blur.value);
  localStorage.setItem("hueRotate-item", hueRotate.value);
  localStorage.setItem("opacity-item", opacity.value);
}
// /Range Filter

// Reset Filters
function resetFilters() {
  localStorage.clear();
  window.location.reload();
}
// /Reset Filters

// Download Image
function downloadImage() {
  //
}
// /Download Image

// Save Data To LocalStorage
window.onload = function () {
  const brightness_Saved = localStorage.getItem("brightness-item");
  const contrast_Saved = localStorage.getItem("contrast-item");
  const saturation_Saved = localStorage.getItem("saturation-item");
  const grayscale_Saved = localStorage.getItem("grayscale-item");
  const sepia_Saved = localStorage.getItem("sepia-item");
  const invert_Saved = localStorage.getItem("invert-item");
  const blur_Saved = localStorage.getItem("blur-item");
  const hueRotate_Saved = localStorage.getItem("hueRotate-item");
  const opacity_Saved = localStorage.getItem("opacity-item");

  // Saved image Effect

  const brightnessImageSaved = localStorage.getItem("brightness-image");
  const contrastImageSaved = localStorage.getItem("contrast-image");
  const saturationImageSaved = localStorage.getItem("saturation-image");
  const grayscaleImageSaved = localStorage.getItem("grayscale-image");
  const sepiaImageSaved = localStorage.getItem("sepia-image");
  const invertImageSaved = localStorage.getItem("invert-image");
  const blurImageSaved = localStorage.getItem("blur-image");
  const hueImageSaved = localStorage.getItem("hue-image");
  const opacityImageSaved = localStorage.getItem("opacity-image");

  // Filters-Range
  const brightness = document.querySelector(".brightness");
  const contrast = document.querySelector(".contrast");
  const saturation = document.querySelector(".saturation");
  const grayscale = document.querySelector(".grayscale");
  const sepia = document.querySelector(".sepia");
  const invert = document.querySelector(".invert");
  const blur = document.querySelector(".blur");
  const hueRotate = document.querySelector(".hue-rotate");
  const opacity = document.querySelector(".opacity");

  const imageAddedSaved = localStorage.getItem("image-added");

  const preview_img = document.querySelector(".preview-img");

  if (
    brightness_Saved &&
    contrast_Saved &&
    saturation_Saved &&
    grayscale_Saved &&
    sepia_Saved &&
    invert_Saved &&
    blur_Saved &&
    hueRotate_Saved &&
    opacity_Saved &&
    // Saved image Effect
    brightnessImageSaved &&
    contrastImageSaved &&
    saturationImageSaved &&
    grayscaleImageSaved &&
    sepiaImageSaved &&
    invertImageSaved &&
    blurImageSaved &&
    hueImageSaved &&
    opacityImageSaved &&
    imageAddedSaved
  ) {
    brightness.value = brightness_Saved;
    contrast.value = contrast_Saved;
    saturation.value = saturation_Saved;
    grayscale.value = grayscale_Saved;
    sepia.value = sepia_Saved;
    invert.value = invert_Saved;
    blur.value = blur_Saved;
    hueRotate.value = hueRotate_Saved;
    opacity.value = opacity_Saved;

    preview_img.style.filter = `
    ${brightnessImageSaved}
    ${contrastImageSaved}
    ${saturationImageSaved}
    ${grayscaleImageSaved}
    ${sepiaImageSaved}
    ${invertImageSaved}
    ${blurImageSaved}
    ${hueImageSaved}
    ${opacityImageSaved}
  `.trim();

    preview_img.src = imageAddedSaved;
  }
};
// /Save Data To LocalStorage
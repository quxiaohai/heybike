let interval = null
let domWorks = () => {
     let ds = document.querySelector('recently-viewed motion-list .color-swatch')
     if(ds){
        var colorSwatches = document.querySelectorAll('recently-viewed .color-swatch');
        document.querySelectorAll('recently-viewed .color-swatch').forEach(function(swatch) {
        swatch.addEventListener('click', function() {
        var imageUrl = this.getAttribute('data-image');
     
        var variantId = this.getAttribute('data-variantid');
        var swatchName = this.getAttribute('data-swatchname');
        var productCard = this.closest('.product-card');
       
        var swatchElement = productCard.querySelectorAll('.swatches li a');
        swatchElement.forEach(function(item) {
          item.classList.remove('active')
        });
        this.classList.add('active')
        var anchorTag = productCard.querySelector('a');
        productCard.querySelector('.quick-add button').setAttribute('data-swatchcolorname',swatchName)
        productCard.querySelector('quick-view').setAttribute('data-swatchcolorname',swatchName)
        var originalHref = anchorTag.getAttribute('href');
        var newURL;
        if (originalHref.includes('?variant=')) {
            newURL = originalHref.replace(/(variant=)[^\&]+/, '$1' + variantId);
        } else {
            newURL = originalHref + (originalHref.includes('?') ? '&' : '?') + 'variant=' + variantId;
        }

        anchorTag.setAttribute('href', newURL);
        var MainimgElement = productCard.querySelector('.product-card__media img');
        if (imageUrl) {
            var allImages = productCard.querySelectorAll('.variant-images img');
            productCard.querySelector('.variant-images').style.display = 'block';
            productCard.querySelector('.product-card__media img').style.display = 'none';
            let findImage = false
            allImages.forEach(function(imgElement) {
                var imgSrc = imgElement.getAttribute('data-image');
                if (imgSrc === imageUrl && !findImage) {
                    imgElement.style.display = 'block';
                    findImage = true
                } else {
                    imgElement.style.display = 'none';
                }
            });
        }
    });
});
       clearInterval(interval) // Change it via reference
     }
}

interval = setInterval(domWorks, 100)

//#region slider Array Object
let models = [

    {
        name: 'İlk Görüntü',
        image: 'img/resim1.png',
        link: 'https://iasbh.tmgrup.com.tr/3f8e00/650/344/0/33/650/375?u=https://isbh.tmgrup.com.tr/sbh/2018/10/31/deneme-nedir-ve-nasil-yazilir-1540990804971.jpg'

    },
    {
        name: 'İkinci Görüntü',
        image: 'img/resim2.png',
        link: 'https://iasbh.tmgrup.com.tr/3f8e00/650/344/0/33/650/375?u=https://isbh.tmgrup.com.tr/sbh/2018/10/31/deneme-nedir-ve-nasil-yazilir-1540990804971.jpg'

    },
    {
        name: 'üçüncü Görüntü',
        image: 'img/resim3.png',
        link: 'https://iasbh.tmgrup.com.tr/3f8e00/650/344/0/33/650/375?u=https://isbh.tmgrup.com.tr/sbh/2018/10/31/deneme-nedir-ve-nasil-yazilir-1540990804971.jpg'

    },
    {
        name: 'Dördüncü Görüntü',
        image: 'img/resim1.png',
        link: 'https://iasbh.tmgrup.com.tr/3f8e00/650/344/0/33/650/375?u=https://isbh.tmgrup.com.tr/sbh/2018/10/31/deneme-nedir-ve-nasil-yazilir-1540990804971.jpg'

    },

];
//#endregion

var index = 0;
var slideCount = models.length;
var settings = {
    duration: '1000',
    random: true
}


_init(settings);



function _showSlide(i) {
    index = i;
    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-link').setAttribute('href', models[index].link);
    document.querySelector('.fa-arrow-circle-left').addEventListener('click', _leftClick)
    document.querySelector('.fa-arrow-circle-right').addEventListener('click', _rightClick)

}

function _init() {
    setInterval(function () {
        var previousVar;

        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slideCount); /* Math.floor ile 1 aşağıya yuvarladık. */
            
            } while (index == previousVar) {
                previousVar = index;
            }  
        }
        else {
            if(slideCount == index+1)
            {
                index = 0;
            }
            _showSlide(index);
            index++;
        }
        console.log(index);
        _showSlide(index);

    }, settings.duration)
}

function _rightClick() {
    index++;
    _showSlide(index);
    console.log(index);

}

function _leftClick() {
    index--;
    _showSlide(index);
    console.log(index);
}
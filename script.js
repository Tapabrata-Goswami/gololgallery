$(document).ready(function () {
    $('.slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      customPaging: function(slider, i) {
        // For small skin color dots
        const skinColors = ['#f1c27d', '#a76d4d']; // Two specific colors
        return `<div style="width: 10px; height: 10px; background-color: ${skinColors[i]}; border-radius: 50%;"></div>`;
      }
    }).show(); // Ensure the slider becomes visible.
  });


const timelineData = {
    '1992': {
        title: 'The Great Beginning',
        image: './random1.jpg',
        text: 'Lorem ipsum has been the industry standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make type specimen book.'
    },
    '1994': {
        title: 'Innovation Era',
        image: '/api/placeholder/600/400',
        text: 'Our company reached new heights with groundbreaking innovations and expansions into new markets.'
    },
    '1995': {
        title: 'Global Expansion',
        image: '/api/placeholder/600/400',
        text: 'We expanded our operations globally, reaching new markets and establishing international partnerships.'
    },
    '2000': {
        title: 'Millennium Achievement',
        image: '/api/placeholder/600/400',
        text: 'The turn of the century marked a significant milestone in our journey with remarkable achievements.'
    },
    '2008': {
        title: 'Digital Revolution',
        image: '/api/placeholder/600/400',
        text: 'We embraced the digital age with new technologies and modern solutions.'
    },
    '2012': {
        title: 'Future Forward',
        image: '/api/placeholder/600/400',
        text: 'Setting new standards and preparing for the future with innovative approaches.'
    }
};

const timelineYears = document.querySelectorAll('.timeline-year');
const prevBtn = document.querySelector('.timeline-prev-btn');
const nextBtn = document.querySelector('.timeline-next-btn');
const timelineImage = document.getElementById('timelineImage');
const timelineTitle = document.getElementById('timelineTitle');
const timelineText = document.getElementById('timelineText');

function updateTimelineContent(year) {
    const data = timelineData[year];
    timelineImage.src = data.image;
    timelineTitle.textContent = data.title;
    timelineText.textContent = data.text;
}

function setActiveTimelineYear(yearElement) {
    timelineYears.forEach(y => y.classList.remove('active'));
    yearElement.classList.add('active');
    updateTimelineContent(yearElement.dataset.year);
}

timelineYears.forEach(year => {
    year.addEventListener('click', () => setActiveTimelineYear(year));
});

function getActiveTimelineYearIndex() {
    return Array.from(timelineYears).findIndex(year => year.classList.contains('active'));
}

prevBtn.addEventListener('click', () => {
    const currentIndex = getActiveTimelineYearIndex();
    if (currentIndex > 0) {
        setActiveTimelineYear(timelineYears[currentIndex - 1]);
    }
});

nextBtn.addEventListener('click', () => {
    const currentIndex = getActiveTimelineYearIndex();
    if (currentIndex < timelineYears.length - 1) {
        setActiveTimelineYear(timelineYears[currentIndex + 1]);
    }
});
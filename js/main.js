$(document).ready(function () {

   const mb = new Swiper('.mb', {
        // 옵션
        speed: 1000,  // 슬라이드 동작 속도
        loop: true,  // 슬라이드 반복 여부
        // 자동 슬라이드 설정, 비활성화 false
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 3000=3초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        // 페이저 버튼 지정
        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true,  // 버튼 클릭 여부
        },
        // 방향 버튼 지정
        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },


    });

    $('.btn_play').hide();
    $('.btn_pause').click(function () {
        mb.autoplay.stop(); //mb : 슬라이드의 변수명
        $('.btn_pause').hide();
        $('.btn_play').show();
    });

    $('.btn_play').click(function () {
        mb.autoplay.start(); //mb : 슬라이드의 변수명
        $('.btn_play').hide();
        $('.btn_pause').show();
    });




    const prd_list = new Swiper('.prd_list', {
        // 옵션
        speed: 1000,  // 슬라이드 동작 속도
        loop: true,  // 슬라이드 반복 여부
        // 자동 슬라이드 설정, 비활성화 false
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 3000=3초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        // 페이저 버튼 지정
        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true,  // 버튼 클릭 여부
        },
        centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: 1,
        spaceBetween: 50,
        // 스크롤바 여부
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,        //기본으로 숨겨져 있음
        },
        breakpoints: {
            1024: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1400: {  // 가로해상도가 1400px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    

    const event_list = new Swiper('.event_list', {
        // 옵션
        speed: 1000,  // 슬라이드 동작 속도
        loop: true,  // 슬라이드 반복 여부
        // 자동 슬라이드 설정, 비활성화 false
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 3000=3초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        // 페이저 버튼 지정
        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true,  // 버튼 클릭 여부
        },
        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: 2,
        spaceBetween: 50,
        // 스크롤바 여부
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,        //기본으로 숨겨져 있음
        },
        breakpoints: {
            1024: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1400: {  // 가로해상도가 1400px 이상일 경우
                slidesPerView: 6,
                spaceBetween: 50,
            },
        },
    });
    

    
}); //문서준비
// 제품 정보 객체
const products = {
    'original': {
        image: 'images/음료 제품/오리지널_그린.png',
        description: '지구상에서 가장 쿨한 에너지 음료인 몬스터 에너지를 만나보세요. 몬스터 에너지만의 강력함을 부드럽고 상쾌한 블렌드에 담아, 넘치는 에너지를 선사합니다!',
        buyLink: 'https://brand.naver.com/monsterenergy/products/6697647421',
        mallLink: 'https://smartstore.naver.com/monsterenergy'
    },

    'zero': {
        image: 'images/음료 제품/오리지널_제로 슈거.png',
        description: '오리지널 몬스터 에너지의 맛을 그대로 제로 슈거로 담았습니다. 설탕은 뺐지만 넘치는 에너지는 그대로 담았으니 몬스터 에너지 제로 슈거와 함께 피로를 날려보세요.',
        buyLink: 'https://brand.naver.com/monsterenergy/products/6829387585',
        mallLink: 'https://smartstore.naver.com/monsterenergy'
    },

    'ultra': {
        '울트라': {
            image: 'images/음료 제품/울트라_울트라.png',
            description: '몬스터 에너지 울트라는 가볍고 시원한 맛으로 무엇을 기대하시든 그 이상의 경험을 선사합니다. 낮은 칼로리에 제로 슈거, 그리고 몬스터 에너지만의 강력함으로 일상에서 에너지를 느껴보세요.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/6697660209',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '울트라 피치 킨': {
            image: 'images/음료 제품/울트라_피치 킨.png',
            description: '울트라 시리즈의 새로운 라인업, 저칼로리 & 제로 슈거의 몬스터 에너지 울트라 피치 킨의 풍부한 복숭아 향을 느껴보세요.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/10069303464',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '울트라 시트라': {
            image: 'images/음료 제품/울트라_시트라.png',
            description: '오직 한국에서만 만날 수 있는 몬스터 에너지 울트라 시트라는 칼로리 걱정 없이 온세상 상큼함을 가득 담은 특별한 맛을 선사합니다.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/6697679078',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '울트라 선라이즈': {
            image: 'images/음료 제품/울트라_선라이즈.png',
            description: '아침부터 밤까지 당신의 일상을 책임져주는 몬스터 에너지 울트라 선라이즈는 가볍고 톡톡 터지는 상큼한 오렌지 맛을 낮은 칼로리에 담았습니다.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/8283060956',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '울트라 스트로베리': {
            image: 'images/음료 제품/울트라_스트로베리.png',
            description: '제로 슈거로 만나는 꿈 같은 맛! 몬스터 에너지 울트라 스트로베리 드림즈',
            buyLink: 'https://brand.naver.com/monsterenergy/products/11383350611',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
    },

    'juice': {
        '오지 스타일': {
            image: 'images/음료 제품/주스_오지 스타일.png',
            description: '클래식한 레모네이드에 몬스터만의 방식으로 상큼함과 달콤함의 이상적인 밸런스를 찾아 시트러스 향을 더했습니다.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/10334689054',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '파피용': {
            image: 'images/음료 제품/주스_파피용.png',
            description: '작은 나비의 뜻을 가진 몬스터 파피용은 향긋한 복숭아 맛이 조화롭게 어우러진 섬세한 맛을 자랑합니다.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/11746006278',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '파이프라인 펀치': {
            image: 'images/음료 제품/주스_파이프라인 펀치.png',
            description: '하와이를 대표하는 과일들인 패션후르츠, 오렌지, 구아바에 우리의 대표적인 에너지 블렌드를 더해 몬스터화 해냈습니다.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/6697664509',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '망고 로코': {
            image: 'images/음료 제품/주스_망고 로코.png',
            description: '신비한 분위기 속의 메리골드 꽃과 추억들은 떠난 이들을 축제로 이끕니다. 누구나 매혹될 이국적인 천상의 주스 블렌드, 망고 로코 환상적인 맛과 몬스터 에너지 만의 마법으로 파티는 계속될 것입니다.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/6697666533',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        }
    }
};


// 제품 탭 버튼들에 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    const productTabs = document.querySelectorAll('.product-tabs button');
    
    productTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 모든 탭에서 active 클래스 제거
            productTabs.forEach(t => t.classList.remove('active'));
            // 클릭된 탭에 active 클래스 추가
            this.classList.add('active');
            
            // 현재 페이지가 어떤 라인인지 확인
            const isUltraLine = window.location.pathname.includes('ultra_line');
            const isJuiceLine = window.location.pathname.includes('juice_line');
            
            if (isUltraLine) {
                // 울트라 라인 페이지인 경우
                const productName = this.textContent.replace('몬스터 에너지 ', '');
                const productInfo = products.ultra[productName];
                if (productInfo) {
                    document.getElementById('productImage').src = productInfo.image;
                    document.getElementById('productDescription').textContent = productInfo.description;
                    document.getElementById('buyBtn').href = productInfo.buyLink;
                    document.getElementById('mallBtn').href = productInfo.mallLink;
                }
            } else if (isJuiceLine) {
                // 주스 라인 페이지인 경우
                const productName = this.textContent.replace('몬스터 에너지 ', '');
                const productInfo = products.juice[productName];
                if (productInfo) {
                    document.getElementById('productImage').src = productInfo.image;
                    document.getElementById('productDescription').textContent = productInfo.description;
                    document.getElementById('buyBtn').href = productInfo.buyLink;
                    document.getElementById('mallBtn').href = productInfo.mallLink;
                }
            } else {
                // 오리지널 라인 페이지인 경우
                const productType = this.textContent.includes('제로') ? 'zero' : 'original';
                document.getElementById('productImage').src = products[productType].image;
                document.getElementById('productDescription').textContent = products[productType].description;
                document.getElementById('buyBtn').href = products[productType].buyLink;
                document.getElementById('mallBtn').href = products[productType].mallLink;
            }
        });
    });

    // 페이지 로드시 기본 버튼 링크도 세팅
    if(document.getElementById('buyBtn') && document.getElementById('mallBtn')) {
        // 현재 페이지가 어떤 라인인지 확인
        const isUltraLine = window.location.pathname.includes('ultra_line');
        const isJuiceLine = window.location.pathname.includes('juice_line');
        if (isUltraLine) {
            document.getElementById('buyBtn').href = products.ultra['울트라'].buyLink;
            document.getElementById('mallBtn').href = products.ultra['울트라'].mallLink;
        } else if (isJuiceLine) {
            document.getElementById('buyBtn').href = products.juice['오지 스타일'].buyLink;
            document.getElementById('mallBtn').href = products.juice['오지 스타일'].mallLink;
        } else {
            document.getElementById('buyBtn').href = products.original.buyLink;
            document.getElementById('mallBtn').href = products.original.mallLink;
        }
    }
});

// 메뉴 토글 함수
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('active');
}

// 모든 스크롤 관련 효과를 한 번에 처리
document.addEventListener('DOMContentLoaded', function() {
    // army-title 아래에서 위로 등장 효과
    const armyTitle = document.querySelector('.army-title');
    if (armyTitle) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.3 });
        observer.observe(armyTitle);
    }

    // moments-section 아래에서 위로 등장 효과
    const momentsSection = document.querySelector('.moments-section');
    if (momentsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.3 });
        observer.observe(momentsSection);
    }

    // animate-on-scroll (기존 스크롤 애니메이션)
    const observerOptions = {
        threshold: 0.3,
        rootMargin: "0px"
    };
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach(el => {
        scrollObserver.observe(el);
    });
});

// 제품 네비게이션 스크롤 효과
document.addEventListener('DOMContentLoaded', function() {
    const productNav = document.querySelector('.product-nav');
    const brandPhilosophySection = document.querySelector('#brand-philosophy');
    
    function handleScroll() {
        const sectionTop = brandPhilosophySection.offsetTop;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop) {
            productNav.style.opacity = '1';
            productNav.style.visibility = 'visible';
        } else {
            productNav.style.opacity = '0';
            productNav.style.visibility = 'hidden';
        }
    }

    // 초기 상태 설정
    productNav.style.opacity = '0';
    productNav.style.visibility = 'hidden';
    productNav.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
});
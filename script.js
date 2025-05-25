// Sample content data (in a real application, this would come from a backend)
const contentData = {
    netflix: {
        movies: [
            {
                title: 'Stranger Things',
                image: 'https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
                year: '2016',
                rating: '8.7/10',
                description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
                type: 'movie'
            },
            {
                title: 'The Witcher',
                image: 'https://th.bing.com/th/id/OIP.Ip4Xas7rAjFHoA7Lk_7J0AHaHZ?cb=iwp2&rs=1&pid=ImgDetMain',
                year: '2019',
                rating: '8.2/10',
                description: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
                type: 'movie'
            },
            {
                title: 'Extraction',
                image: 'https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                year: '2020',
                rating: '6.7/10',
                description: 'A hardened mercenary\'s mission becomes a soul-searching race to survive when he\'s sent into Bangladesh to rescue a drug lord\'s kidnapped son.',
                type: 'movie'
            },
            {
                title: 'The Irishman',
                image: 'https://th.bing.com/th/id/OIP.YBeNQg0JmXFm3gG0To0_dQHaLH?w=126&h=189&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3',
                year: '2019',
                rating: '7.8/10',
                description: 'A mob hitman recalls his possible involvement with the slaying of Jimmy Hoffa.',
                type: 'movie'
            },
            {
                title: 'Bird Box',
                image: 'https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_.jpg',
                year: '2018',
                rating: '6.6/10',
                description: 'Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.',
                type: 'movie'
            }
        ],
        series: [
            {
                title: 'Breaking Bad',
                image: 'https://th.bing.com/th/id/OIP.etbIMRvwzK0c2W_qwBvAhQHaK_?cb=iwp2&rs=1&pid=ImgDetMain',
                year: '2008-2013',
                rating: '9.5/10',
                description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family\'s financial future.',
                type: 'series'
            },
            {
                title: 'The Crown',
                image: 'https://th.bing.com/th/id/OIP.3hX8zdVlcCE4CqQezOabVwHaK-?cb=iwp2&rs=1&pid=ImgDetMain',
                year: '2016-Present',
                rating: '8.7/10',
                description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.',
                type: 'series'
            },
            {
                title: 'Money Heist',
                image: 'https://th.bing.com/th/id/OIP.D4d76RNSVVnHQEWxGpBFYwHaJ4?w=132&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3',
                year: '2017-2021',
                rating: '8.2/10',
                description: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
                type: 'series'
            },
            {
                title: 'Dark',
                image: 'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg',
                year: '2017-2020',
                rating: '8.7/10',
                description: 'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',
                type: 'series'
            },
            {
                title: 'The Queen\'s Gambit',
                image: 'https://th.bing.com/th/id/OIP.TIYoXEPYXVcjoKebQpR7QQHaJ4?w=137&h=183&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3',
                year: '2020',
                rating: '8.6/10',
                description: 'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA.',
                type: 'series'
            }
        ]
    },
    hotstar: {
        movies: [
            {
                title: 'Avengers: Endgame',
                image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
                year: '2019',
                rating: '8.4/10',
                description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.',
                type: 'movie'
            },
            {
                title: 'Loki',
                image: 'https://th.bing.com/th/id/OIP.XzJ_xt1RMPGyYFKcSVDBpgHaJQ?w=138&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3',
                year: '2021',
                rating: '8.2/10',
                description: 'The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of "Avengers: Endgame."',
                type: 'movie'
            },
            {
                title: 'Black Widow',
                image: 'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
                year: '2021',
                rating: '6.7/10',
                description: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.',
                type: 'movie'
            },
            {
                title: 'Shang-Chi',
                image: 'https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
                year: '2021',
                rating: '7.4/10',
                description: 'Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.',
                type: 'movie'
            },
            {
                title: 'Eternals',
                image: 'https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg',
                year: '2021',
                rating: '6.3/10',
                description: 'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.',
                type: 'movie'
            }
        ],
        series: [
            {
                title: 'The Mandalorian',
                image: 'https://th.bing.com/th/id/OIP.0i4SZwhajk43F1JP4KXY7wHaLH?w=123&h=185&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3',
                year: '2019-Present',
                rating: '8.7/10',
                description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
                type: 'series'
            },
            {
                title: 'WandaVision',
                image: 'https://th.bing.com/th/id/OIP.N1M8viHCIF23R2AlqRuS0AHaLH?w=115&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3',
                year: '2021',
                rating: '7.9/10',
                description: 'Blends the style of classic sitcoms with the MCU in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives.',
                type: 'series'
            },
            {
                title: 'The Falcon and the Winter Soldier',
                image: 'https://th.bing.com/th/id/OIP.xPp87LK_emNpr1SjY-nAJwHaKO?w=115&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3',
                year: '2021',
                rating: '7.2/10',
                description: 'Following the events of "Avengers: Endgame," Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and patience.',
                type: 'series'
            },
            {
                title: 'Hawkeye',
                image: 'https://th.bing.com/th/id/OIP.Wa5O5XD3TNAo_FhMzNxJ8AHaKX?w=129&h=181&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3',
                year: '2021',
                rating: '7.5/10',
                description: 'Series based on the Marvel Comics superhero Hawkeye, centering on the adventures of Young Avenger, Kate M. Bishop.',
                type: 'series'
            },
            {
                title: 'What If...?',
                image: 'https://th.bing.com/th/id/OIP.GUS9aVencG11UmQ71iK1gwAAAA?w=115&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3',
                year: '2021',
                rating: '7.4/10',
                description: 'Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head, leading the audience into uncharted territory.',
                type: 'series'
            }
        ]
    },
    prime: {
        movies: [
            {
                title: 'The Boys',
                image: 'https://flxt.tmsimg.com/assets/p16826253_b_v13_ab.jpg',
                year: '2019-Present',
                rating: '8.7/10',
                description: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
                type: 'movie'
            },
            {
                title: 'The Expanse',
                image: 'https://www.themoviedb.org/t/p/original/lLidDKUYF5pcmH7zaM6J6nyRQGG.jpg',
                year: '2015-2022',
                rating: '8.5/10',
                description: 'In the 24th century, a group of humans untangle a vast plot which threatens the Solar System\'s fragile state of detente.',
                type: 'movie'
            },
            {
                title: 'The Tomorrow War',
                image: 'https://www.themoviedb.org/t/p/original/h01JCIJ9tlQgMSLaJ7P7B08rOK7.jpg',
                year: '2021',
                rating: '6.6/10',
                description: 'A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.',
                type: 'movie'
            },
            {
                title: 'Coming 2 America',
                image: 'https://th.bing.com/th/id/OIP.z0vqBqUKhwmn5hkic3WniAHaLH?cb=iwp2&rs=1&pid=ImgDetMain',
                year: '2021',
                rating: '6.2/10',
                description: 'The African monarch Akeem learns he has a long-lost son in the United States and must return to America to meet this unexpected heir.',
                type: 'movie'
            },
            {
                title: 'Without Remorse',
                image: 'https://media2.firstshowing.net/firstshowing/img12/withoutremorsenewpostermain59901.jpg',
                year: '2021',
                rating: '5.7/10',
                description: 'An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.',
                type: 'movie'
            }
        ],
        series: [
            {
                title: 'The Marvelous Mrs. Maisel',
                image: 'https://people.com/thmb/Sx0s9a_UYHhCPbpQ72b6QPQhOAk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(693x0:695x2)/the-marvelous-mrs-maisel-season-5-key-art-030223-2-2000-3b54b0c70902457aab8c35f1f9466d04.jpg',
                year: '2017-Present',
                rating: '8.7/10',
                description: 'A housewife in the 1950s decides to become a stand-up comedian.',
                type: 'series'
            },
            {
                title: 'Jack Ryan',
                image: 'https://th.bing.com/th/id/OIP.7QZP8wRlzrc_elDREEJb2QHaK-?cb=iwp2&rs=1&pid=ImgDetMain',
                year: '2018-Present',
                rating: '8.0/10',
                description: 'Up-and-coming CIA analyst Jack Ryan is thrust into a dangerous field assignment as he uncovers a pattern in terrorist communication.',
                type: 'series'
            },
            {
                title: 'The Wheel of Time',
                image: 'https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/10/12203813/WOFT_S1_OneSheet_HeroesVillains_PRE_27x40_THA_FINAL_en-US.jpg',
                year: '2021-Present',
                rating: '7.2/10',
                description: 'Set in a high fantasy world where magic exists, but only women can use it, the story follows Moiraine, a member of the shadowy and influential all-female organization.',
                type: 'series'
            },
            {
                title: 'Upload',
                image: 'https://th.bing.com/th/id/OIP.im8XdHQcZXXkk2oJ1dlY8wAAAA?cb=iwp2&rs=1&pid=ImgDetMain',
                year: '2020-Present',
                rating: '7.9/10',
                description: 'In 2033, people who are near death can be "uploaded" into virtual reality hotels run by 6 tech firms. Cash-strapped Nora lives in Brooklyn and works customer service for the luxurious "Lakeview" digital afterlife.',
                type: 'series'
            },
            {
                title: 'The Wilds',
                image: 'https://images.plex.tv/photo?size=large-1280&scale=1&url=https:%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FgRNKrpVLnDjco5g2ooL2FZomijA.jpg',
                year: '2020-Present',
                rating: '7.4/10',
                description: 'A group of teen girls from different backgrounds must fight for survival after a plane crash strands them on a deserted island.',
                type: 'series'
            }
        ]
    }
};

// DOM Elements
const loginContainer = document.getElementById('loginContainer');
const mainContainer = document.getElementById('mainContainer');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginBox = document.getElementById('loginBox');
const signupBox = document.getElementById('signupBox');
const showSignupLink = document.getElementById('showSignup');
const showLoginLink = document.getElementById('showLogin');
const logoutBtn = document.getElementById('logoutBtn');
const contentSection = document.getElementById('contentSection');
const sectionTitle = document.getElementById('sectionTitle');
const contentGrid = document.getElementById('contentGrid');

// Show signup form
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.style.display = 'none';
    signupBox.style.display = 'block';
});

// Show login form
showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupBox.style.display = 'none';
    loginBox.style.display = 'block';
});

// Login functionality
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Simple validation (in a real app, this would be handled by a backend)
    if (email && password) {
        loginContainer.style.display = 'none';
        mainContainer.style.display = 'block';
    }
});

// Signup functionality
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;

    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (fullName && email && password) {
        // In a real app, this would send data to a backend
        alert('Account created successfully! Please login.');
        signupBox.style.display = 'none';
        loginBox.style.display = 'block';
        signupForm.reset();
    }
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    loginContainer.style.display = 'flex';
    loginForm.reset();
});

// Handle platform content display
document.querySelectorAll('.platform-card').forEach(card => {
    const platform = card.id;
    
    card.querySelector('.movies-btn').addEventListener('click', () => {
        showContent(platform, 'movies');
    });

    card.querySelector('.series-btn').addEventListener('click', () => {
        showContent(platform, 'series');
    });
});

// Function to display content
function showContent(platform, contentType) {
    contentSection.style.display = 'block';
    sectionTitle.textContent = `${platform.charAt(0).toUpperCase() + platform.slice(1)} ${contentType.charAt(0).toUpperCase() + contentType.slice(1)}`;
    
    // Clear previous content
    contentGrid.innerHTML = '';
    
    // Add new content
    contentData[platform][contentType].forEach(item => {
        const contentCard = document.createElement('div');
        contentCard.className = 'content-card';
        contentCard.innerHTML = `
            <div class="content-image">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/200x300'">
                <div class="content-overlay">
                    <span class="rating">${item.rating ? item.rating : ''}</span>
                    <span class="year">${item.year ? item.year : ''}</span>
                </div>
            </div>
            <div class="content-info">
                <h3>${item.title}</h3>
                <p class="description">${item.description ? item.description : 'No description available.'}</p>
            </div>
        `;
        contentGrid.appendChild(contentCard);
    });

    // Scroll to content section
    contentSection.scrollIntoView({ behavior: 'smooth' });
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Language and Caption Settings
const languageSettings = document.getElementById('languageSettings');
const captionSettings = document.getElementById('captionSettings');
const dropdownLinks = document.querySelectorAll('.dropdown-content a');

// Add overlay div
const overlay = document.createElement('div');
overlay.className = 'settings-overlay';
document.body.appendChild(overlay);

// Handle language and caption settings
dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        
        if (target === '#language') {
            languageSettings.style.display = 'block';
            captionSettings.style.display = 'none';
            overlay.style.display = 'block';
        } else if (target === '#caption') {
            captionSettings.style.display = 'block';
            languageSettings.style.display = 'none';
            overlay.style.display = 'block';
        }
    });
});

// Close settings when clicking overlay
overlay.addEventListener('click', () => {
    languageSettings.style.display = 'none';
    captionSettings.style.display = 'none';
    overlay.style.display = 'none';
});

// Close settings when clicking close button
document.querySelectorAll('.settings-section').forEach(section => {
    section.addEventListener('click', (e) => {
        if (e.target === section) {
            section.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
});

// Handle language selection
document.querySelectorAll('input[name="language"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        console.log('Selected language:', selectedLanguage);
        // Here you would typically update the video player's audio track
    });
});

// Handle caption selection
document.querySelectorAll('input[name="caption"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const selectedCaption = e.target.value;
        console.log('Selected caption:', selectedCaption);
        // Here you would typically update the video player's caption track
    });
}); 
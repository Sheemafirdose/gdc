const events = [
    {
        title: 'Ripples 2024',
        date: '2024-12-30',
        location: 'Main Auditorium',
        description: 'Technical workshops and competitions.',
        category: 'Ripples',
        image: 'hack1.jpg',
        link: 'ripples.html'  // Navigation link
    },
    {
        title: 'Expo',
        date: '2024-12-27',
        location: 'Exhibition Hall D',
        description: 'Showcasing innovative projects and startup ideas.',
        category: 'Expo',
        image: 'expo.jpg',
        link: 'expo.html'  // Navigation link
    },
    {
        title: 'Hackathon 2024',
        date: '2024-12-28',
        location: 'Coding Lab',
        description: '24-hour coding competition with various challenges.',
        category: 'Hackathons',
        image: 'hack.jpg',
        link: 'hackathon.html'  // Navigation link
    },
    {
        title: 'Freshers Party 2024',
        date: '2024-12-27',
        location: 'Campus Grounds',
        description: 'Welcome party for new students with cultural performances.',
        category: 'Freshers',
        image: 'freshers.jpg',
        link: 'fresher.html'  // Navigation link
    },
    {
        title: 'Farewell 2024',
        date: '2024-12-26',
        location: 'Auditorium',
        description: 'Farewell event for graduating students with speeches and performances.',
        category: 'Farewell',
        image: 'farewell.jpg',
        link: 'farewell.html'  // Navigation link
    }
];

// Function to display events
function displayEvents(eventList) {
    const eventContainer = document.getElementById('eventList');
    eventContainer.innerHTML = '';

    eventList.forEach(event => {
        const eventCard = 
            `<div class="event-card">
                <img src="${event.image}" alt="${event.title}">
                <h3>${event.title}</h3>
                <p>${event.date}</p>
                <p>${event.location}</p>
                <p>${event.description}</p>
                ${event.link ? `<a href="${event.link}" class="event-link">View More</a>` : ''}
            </div>`;
        eventContainer.innerHTML += eventCard;
    });
}

// Filter and Search functionality
document.getElementById('searchBar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredEvents = events.filter(event => 
        event.title.toLowerCase().includes(searchTerm)
    );
    displayEvents(filteredEvents);
});

document.getElementById('categoryFilter').addEventListener('change', function() {
    const category = this.value;
    const filteredEvents = category ? events.filter(event => event.category === category) : events;
    displayEvents(filteredEvents);
});

// Initial display of events
displayEvents(events);

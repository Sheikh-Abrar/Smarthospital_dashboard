   // sidebar dropdown
   document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const header = dropdown.querySelector('.dropdown-header');

        header.addEventListener('click', () => {
            const isOpen = dropdown.classList.contains('open');
            closeAllDropdowns();
            if (!isOpen) {
                dropdown.classList.add('open');
            }
        });
    });

    function closeAllDropdowns() {
        dropdowns.forEach(d => d.classList.remove('open'));
    }
});



// hover dropdown
document.addEventListener('DOMContentLoaded', function() {
const sidebar = document.querySelector('.sidebar');
const toggleSidebarButton = document.getElementById('toggleSidebar');
const dropdowns = document.querySelectorAll('.dropdown');

// Toggle sidebar collapse/expand
toggleSidebarButton.addEventListener('click', function() {
sidebar.classList.toggle('collapsed');
});

// Manage dropdown opening/closing
dropdowns.forEach(dropdown => {
const toggle = dropdown.querySelector('.dropdown-toggle');
const content = dropdown.querySelector('.dropdown-content');

toggle.addEventListener('click', function(event) {
    if (!sidebar.classList.contains('collapsed')) {
        event.preventDefault();
        dropdown.classList.toggle('open');
    }
});
});
});

// sidebar togler 
const toggler = document.querySelector('.togler-btn');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

toggler.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
    toggler.classList.toggle('rotated');  // Add this line to toggle rotation class
});

// mobile menu 
$(document).on("click", '.mobile-togler', function () {
    $('.mobile-menu').addClass('active');
});

$(document).on("click", '.close-mobile-menu', function () {
    $('.mobile-menu').removeClass('active');
});



// script.js
document.addEventListener('DOMContentLoaded', function () {
    const dropdownMain = document.querySelector('.dropdow-main');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownMain.addEventListener('click', function () {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        if (!dropdownMain.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});


// tabs slider 
// script.js
// script.js
let currentIndex = 0;

function slideTabs(direction) {
    const tabs = document.querySelector('.tabs');
    const tabsContainer = document.querySelector('.tabs-container');
    const tabWidth = tabs.querySelector('.tab').offsetWidth + 10; // tab width + margin

    currentIndex += direction;

    const maxIndex = Math.max(0, tabs.children.length - Math.floor(tabsContainer.offsetWidth / tabWidth));
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

    tabs.style.transform = `translateX(${-currentIndex * tabWidth}px)`;

    updateArrows(maxIndex);
}

function updateArrows(maxIndex) {
    document.querySelector('.arrow.left').disabled = currentIndex === 0;
    document.querySelector('.arrow.right').disabled = currentIndex === maxIndex;
}

// Initial update to set arrow states
document.addEventListener('DOMContentLoaded', () => {
    const tabWidth = document.querySelector('.tab').offsetWidth + 10;
    const tabsContainerWidth = document.querySelector('.tabs-container').offsetWidth;
    const maxIndex = Math.max(0, document.querySelector('.tabs').children.length - Math.floor(tabsContainerWidth / tabWidth));
    updateArrows(maxIndex);
});

// chart script 
window.addEventListener('load', function () {
    const ctx = document.getElementById('myDonutChart').getContext('2d');
    const myDonutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['16', '31', '53'],
            datasets: [{
                data: [16, 31, 53],
                backgroundColor: [
                    '#00ADEF', // 16%
                    '#00EFD9', // 31%
                    '#0066CC'  // 53%
                ],
                borderColor: [
                    '#00ADEF', // 16%
                    '#00EFD9', // 31%
                    '#0066CC'  // 53%
                ],
                borderWidth: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                        }
                    }
                },
                datalabels: {
                    color: '#fff',
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    },
                    font: {
                        weight: 'bold',
                        size: '16'
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});

// dropdown 



function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
}

function selectOption(option) {
    const input = document.getElementById('dropdownInput');
    input.value = option;
    toggleDropdown(); // Close the dropdown after selection
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#dropdownInput') && !event.target.matches('.dropdown-icon')) {
        const dropdownMenu = document.getElementById('dropdownMenu');
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        }
    }
}


// update confirmation










// row popup 

document.addEventListener('DOMContentLoaded', function () {
    const rows = document.querySelectorAll('.discharge-table tbody tr');
    const popup = document.getElementById('popup');
    let selectedRow = null;

    rows.forEach(row => {
        row.addEventListener('click', function (event) {
            const rect = row.getBoundingClientRect();
            const isVisible = popup.style.display === 'block';

            if (selectedRow) {
                selectedRow.classList.remove('selected');
            }

            if (isVisible && selectedRow === row) {
                popup.style.display = 'none';
                selectedRow = null;
            } else {
                row.classList.add('selected');
                popup.style.top = `${rect.bottom + window.scrollY}px`;
                popup.style.left = `${rect.left + window.scrollX}px`;
                popup.style.display = 'block';
                selectedRow = row;
            }
        });
    });

    window.addEventListener('click', function (event) {
        if (!event.target.closest('.discharge-table tbody tr') && !event.target.closest('#popup')) {
            popup.style.display = 'none';
            if (selectedRow) {
                selectedRow.classList.remove('selected');
                selectedRow = null;
            }
        }
    });
});


// all attenders js




// create appoinment popup
$(document).on("click", '.createAppointmentBtn', function () {
    $('.create-appoin-main').addClass('active');
});

$(document).on("click", '.create-appoin-closetBtn', function () {
    $('.create-appoin-main').removeClass('active');
});
$(document).on("click", '.create-appoin-cancelBtn', function () {
    $('.create-appoin-main').removeClass('active');
});



// tabs
function showTab(tabId) {
    // Hide all tab contents
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function (content) {
        content.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Remove active class from all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Add active class to the clicked tab
    var clickedTab = document.querySelector('.tab[onclick="showTab(\'' + tabId + '\')"]');
    clickedTab.classList.add('active');
}







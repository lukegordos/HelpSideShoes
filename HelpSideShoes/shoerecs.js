document.addEventListener('DOMContentLoaded', () => {
    // Function to handle single-select options
    function setupSingleSelectOptions(containerSelector, optionSelector, selectedClass) {
        const containers = document.querySelectorAll(containerSelector);
        
        containers.forEach(container => {
            const options = container.querySelectorAll(optionSelector);
            
            options.forEach(option => {
                option.addEventListener('click', () => {
                    // Remove selected class from all options in this container
                    options.forEach(opt => {
                        opt.classList.remove(...selectedClass.split(' '));
                    });
                    
                    // Add selected class to clicked option
                    option.classList.add(...selectedClass.split(' '));
                });
            });
        });
    }

    // Setup quiz options
    setupSingleSelectOptions(
        '.quiz-section', 
        '.quiz-option', 
        'bg-blue-100 border-blue-500'
    );

    // Setup filter options
    setupSingleSelectOptions(
        '.bg-white', 
        '.filter-option', 
        'bg-gray-100 border-blue-500'
    );

    // Clear all filters functionality
    const clearFiltersButton = document.querySelector('.text-right');
    if (clearFiltersButton) {
        clearFiltersButton.addEventListener('click', () => {
            const filterOptions = document.querySelectorAll('.filter-option');
            filterOptions.forEach(option => {
                option.classList.remove('bg-gray-100', 'border-blue-500');
            });
        });
    }

    // Quiz recommendations generation (based on previous implementation)
    const recommendButton = document.querySelector('div[role="main"] > :last-child');
    if (recommendButton) {
        recommendButton.addEventListener('click', () => {
            const quizSections = document.querySelectorAll('.quiz-section');
            const selections = {};

            quizSections.forEach(section => {
                const selectedOption = section.querySelector('.bg-blue-100.border-blue-500');
                if (selectedOption) {
                    const question = selectedOption.getAttribute('question');
                    const answer = selectedOption.getAttribute('answer');
                    selections[question] = answer;
                }
            });

            // Check if all questions are answered
            const allQuestionsAnswered = Object.keys(selections).length === quizSections.length;
            
            if (!allQuestionsAnswered) {
                alert('Please answer all questions before getting recommendations');
                return;
            }

            // Generate and display recommendations
            const recommendations = recommendShoes(selections);
            displayRecommendations(recommendations);
        });
    }
});

// Include the existing recommendShoes and displayRecommendations functions from the previous implementation
(function() {
    // Shoe Database (copied from previous implementation)
    const shoeDatabase = [
        { 
            id: 1, 
            name: 'Nike G.T. Cut 3', 
            sizing: 'true-to-size', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'low', 
            shoeWidth: 'narrow', 
            traction: 'high', 
            comfort: 'moderate', 
            durability: 'high', 
            price: 245.00,
            recommended: true
        },
        { 
            id: 2, 
            name: 'Giannis Freak 6', 
            sizing: 'slightly-snug', 
            archSupport: 'high', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'medium', 
            traction: 'very-high', 
            comfort: 'high', 
            durability: 'very-high', 
            price: 180.00,
            recommended: true
        },
        { 
            id: 3, 
            name: 'LeBron XXII \'Crown Jewel\'', 
            sizing: 'true-to-size', 
            archSupport: 'high', 
            ankleSupportLevel: 'high', 
            shoeWidth: 'wide', 
            traction: 'high', 
            comfort: 'very-high', 
            durability: 'high', 
            price: 260.00,
            recommended: true
        },
        { 
            id: 4, 
            name: 'Air Jordan XXXIX \'Lumière\'', 
            sizing: 'true-to-size', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'narrow', 
            traction: 'high', 
            comfort: 'high', 
            durability: 'moderate', 
            price: 260.00,
            recommended: true
        },
        { 
            id: 5, 
            name: 'LeBron Witness 8', 
            sizing: 'true-to-size', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'medium', 
            traction: 'high', 
            comfort: 'moderate', 
            durability: 'high', 
            price: 145.00,
            recommended: false
        },
        { 
            id: 6, 
            name: 'Nike Kyrie Infinity', 
            sizing: 'true-to-size', 
            archSupport: 'high', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'narrow', 
            traction: 'very-high', 
            comfort: 'high', 
            durability: 'high', 
            price: 160.00,
            recommended: true
        },
        { 
            id: 7, 
            name: 'Nike PG 6', 
            sizing: 'slightly-snug', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'medium', 
            traction: 'high', 
            comfort: 'moderate', 
            durability: 'high', 
            price: 120.00,
            recommended: true
        },
        { 
            id: 8, 
            name: 'Curry One \'Underdog\'', 
            sizing: 'true-to-size', 
            archSupport: 'high', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'narrow', 
            traction: 'high', 
            comfort: 'high', 
            durability: 'high', 
            price: 130.00,
            recommended: true
        },
        { 
            id: 9, 
            name: 'Curry Flow 10', 
            sizing: 'slightly-snug', 
            archSupport: 'high', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'narrow', 
            traction: 'high', 
            comfort: 'very-high', 
            durability: 'high', 
            price: 160.00,
            recommended: true
        },
        { 
            id: 10, 
            name: 'UA HOVR Havoc 4', 
            sizing: 'true-to-size', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'high', 
            shoeWidth: 'medium', 
            traction: 'moderate', 
            comfort: 'high', 
            durability: 'high', 
            price: 140.00,
            recommended: true
        },
        { 
            id: 11, 
            name: 'Under Armour Spawn 4', 
            sizing: 'true-to-size', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'wide', 
            traction: 'high', 
            comfort: 'moderate', 
            durability: 'high', 
            price: 120.00,
            recommended: false
        },
        { 
            id: 12, 
            name: 'Under Armour Curry 9', 
            sizing: 'true-to-size', 
            archSupport: 'high', 
            ankleSupportLevel: 'high', 
            shoeWidth: 'narrow', 
            traction: 'high', 
            comfort: 'very-high', 
            durability: 'high', 
            price: 200.00,
            recommended: true
        },
        { 
            id: 13, 
            name: 'Under Armour Lockdown 6', 
            sizing: 'true-to-size', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'low', 
            shoeWidth: 'wide', 
            traction: 'moderate', 
            comfort: 'high', 
            durability: 'moderate', 
            price: 70.00,
            recommended: false
        },
        { 
            id: 14, 
            name: 'Under Armour Jet \'21', 
            sizing: 'true-to-size', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'medium', 
            traction: 'high', 
            comfort: 'high', 
            durability: 'high', 
            price: 110.00,
            recommended: true
        },
        { 
            id: 15, 
            name: 'Adidas Dame 8', 
            sizing: 'true-to-size', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'medium', 
            traction: 'moderate', 
            comfort: 'high', 
            durability: 'high', 
            price: 140.00,
            recommended: true
        },
        { 
            id: 16, 
            name: 'Adidas Trae Young 2', 
            sizing: 'true-to-size', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'high', 
            shoeWidth: 'medium', 
            traction: 'high', 
            comfort: 'high', 
            durability: 'high', 
            price: 160.00,
            recommended: true
        },
        { 
            id: 17, 
            name: 'Adidas Harden Vol. 7', 
            sizing: 'runs-large', 
            archSupport: 'high', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'wide', 
            traction: 'very-high', 
            comfort: 'high', 
            durability: 'high', 
            price: 180.00,
            recommended: true
        },
        { 
            id: 18, 
            name: 'Adidas Pro Boost', 
            sizing: 'true-to-size', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'medium', 
            traction: 'moderate', 
            comfort: 'moderate', 
            durability: 'moderate', 
            price: 120.00,
            recommended: false
        },
        { 
            id: 19, 
            name: 'Adidas Crazy BYW X', 
            sizing: 'true-to-size', 
            archSupport: 'high', 
            ankleSupportLevel: 'moderate', 
            shoeWidth: 'wide', 
            traction: 'very-high', 
            comfort: 'very-high', 
            durability: 'high', 
            price: 190.00,
            recommended: true
        },
        { 
            id: 20, 
            name: 'Adidas Donovan Mitchell D.O.N. Issue 4', 
            sizing: 'true-to-size', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'high', 
            shoeWidth: 'medium', 
            traction: 'very-high', 
            comfort: 'high', 
            durability: 'moderate', 
            price: 130.00,
            recommended: true
        },
        { 
            id: 21, 
            name: 'Adidas Exhibit A', 
            sizing: 'runs-large', 
            archSupport: 'moderate', 
            ankleSupportLevel: 'low', 
            shoeWidth: 'narrow', 
            traction: 'high', 
            comfort: 'moderate', 
            durability: 'high', 
            price: 100.00,
            recommended: false
        }
    ];

    // PREFERENCE_MAPPINGS (copied from previous implementation)
    const PREFERENCE_MAPPINGS = {
        sizing: {
            'true-to-size': ['true to size', 'true-to-size'],
            'runs-large': ['runs slightly big'],
            'slightly-large': ['runs slightly big'],
            'slightly-snug': ['runs slightly small']
        },
        archSupport: {
            'high': ['high'],
            'medium': ['moderate'],
            'low': ['low']
        },
        ankleSupport: {
            'high': ['high'],
            'medium': ['moderate'],
            'low': ['low']
        },
        shoeWidth: {
            'narrow': ['narrow'],
            'standard': ['medium'],
            'wide': ['wide']
        },
        traction: {
            'indoor': ['moderate'],
            'indoor-outdoor': ['high'],
            'outdoor': ['very high']
        },
        comfort: {
            'very-high': ['very high'],
            'high': ['high'],
            'comfortable': ['high'],
            'firm': ['moderate']
        },
        durability: {
            'very-high': ['very high'],
            'high': ['high'],
            'medium': ['moderate']
        }
    };

    // Existing recommendShoes function
    window.recommendShoes = function(userPreferences) {
        const matchedShoes = shoeDatabase.filter(shoe => {
            let matchScore = 0;
            const maxScore = 7;

            Object.keys(userPreferences).forEach(key => {
                const preferenceValue = userPreferences[key];
                const mappedValues = PREFERENCE_MAPPINGS[key][preferenceValue] || [];
                
                const shoeValue = shoe[key].toLowerCase();
                if (mappedValues.some(val => shoeValue.includes(val))) {
                    matchScore++;
                }
            });

            return shoe.recommended && matchScore >= 4;
        });

        return matchedShoes
            .sort((a, b) => b.price - a.price)
            .slice(0, 3);
    };

    // Existing displayRecommendations function
    window.displayRecommendations = function(recommendations) {
        const recommendationsGrid = document.getElementById('recommendations-grid');
        recommendationsGrid.innerHTML = '';

        recommendations.forEach(shoe => {
            const shoeElement = document.createElement('div');
            shoeElement.classList.add('shoe-item', 'bg-white', 'rounded-xl', 'shadow-md', 'overflow-hidden', 'hover:shadow-xl', 'transition');
            shoeElement.innerHTML = `
                <img src="/api/placeholder/300/300?text=${encodeURIComponent(shoe.name)}" 
                     class="w-full h-64 object-cover" 
                     alt="${shoe.name}">
                <div class="p-4">
                    <h3 class="text-xl font-bold text-blue-900 mb-2">${shoe.name}</h3>
                    <p>
                        ${shoe.sizing.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}, 
                        ${shoe.archSupport.replace(/\b\w/g, l => l.toUpperCase())} Arch Support
                    </p>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-green-600 font-bold">$${shoe.price.toFixed(2)}</span>
                        <a href="#" class="text-blue-600 hover:text-blue-800">View Details</a>
                    </div>
                </div>
            `;
            recommendationsGrid.appendChild(shoeElement);
        });

        // Show recommendations section
        document.getElementById('recommendations').classList.remove('hidden');
    };
})();
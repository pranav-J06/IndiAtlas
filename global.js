// global.js - Master Script for IndiAtlas

document.addEventListener("DOMContentLoaded", function() {
    
    // Feature 1: Highlight the active navigation link
    const navLinks = document.querySelectorAll('.nav a');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (currentUrl.includes(link.getAttribute('href'))) {
            link.style.backgroundColor = '#138808'; 
            link.style.color = '#ffffff';
        }
    });

    // Feature 2: Smooth fade-in effect for the content
    const contentArea = document.querySelector('.content');
    if (contentArea) {
        contentArea.style.opacity = '0';
        contentArea.style.transition = 'opacity 0.6s ease-in-out';
        setTimeout(() => {
            contentArea.style.opacity = '1';
        }, 100);
    }

    // Feature 3 & 4: Smart Map Interaction Engine
    const tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    tooltip.style.color = '#ffffff';
    tooltip.style.padding = '8px 12px';
    tooltip.style.borderRadius = '6px';
    tooltip.style.pointerEvents = 'none'; // Crucial: Stops tooltip from blocking clicks!
    tooltip.style.display = 'none';
    tooltip.style.fontSize = '14px';
    tooltip.style.fontWeight = '500';
    tooltip.style.zIndex = '1000';
    document.body.appendChild(tooltip);

    // The exact list of valid states
    const stateIds = [
        "Andaman_Nicobar", "Lakshadweep", "Assam", "Arunachal_Pradesh",
        "West_Bengal", "Nagaland", "Manipur", "Mizoram", "Tripura",
        "Meghalaya", "Sikkim", "Kerala", "Tamil_Nadu", "Andhra_Pradesh",
        "Goa", "Chhattisgarh", "Karnataka", "Orissa", "Maharashtra",
        "Jharkhand", "Bihar", "Madhya_Pradesh", "Uttar_Pradesh",
        "Gujarat", "Rajasthan", "Delhi", "Haryana", "Uttarakhand",
        "Punjab", "Himachal_Pradesh", "Puducherry", "Chandigarh",
        "Jammu_and_Kashmir", "Daman_And_Diu"
    ];

    const mapContainer = document.querySelector('.map-container svg');
    let activeStateId = null; // Keeps track of what is currently hovered

    if (mapContainer) {
        
        // --- 🌟 SMART HOVER LOGIC 🌟 ---
        mapContainer.addEventListener('mousemove', function(e) {
            let target = e.target;
            let foundState = null;

            // Traverse upwards to see if the mouse is over a valid state shape
            while (target && target !== mapContainer) {
                if (target.id && stateIds.includes(target.id)) {
                    foundState = target.id;
                    break;
                }
                target = target.parentNode;
            }

            // Cleanup the previous state's hover animation if we moved to a new one
            if (activeStateId && activeStateId !== foundState) {
                document.getElementById(activeStateId).classList.remove('state-hover');
            }

            if (foundState) {
                // 1. We are directly over a State
                activeStateId = foundState;
                document.getElementById(foundState).classList.add('state-hover');
                
                tooltip.innerText = foundState.replace(/_/g, " ");
                tooltip.style.display = 'block';
                e.target.style.cursor = 'pointer';

            } else if (e.target.closest('#layer1') || e.target.id === 'layer1') {
                // 2. We are over the India background (layer1), but NOT a specific state
                activeStateId = null;
                tooltip.innerText = "India";
                tooltip.style.display = 'block';
                e.target.style.cursor = 'pointer';

            } else {
                // 3. We are over empty white space
                activeStateId = null;
                tooltip.style.display = 'none';
                e.target.style.cursor = 'default';
            }

            // Make the tooltip follow the mouse
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY + 15) + 'px';
        });

        // Ensure the tooltip hides when the mouse leaves the map entirely
        mapContainer.addEventListener('mouseleave', function() {
            if (activeStateId) {
                document.getElementById(activeStateId).classList.remove('state-hover');
                activeStateId = null;
            }
            tooltip.style.display = 'none';
        });

        
        mapContainer.addEventListener('click', function(e) {
            let target = e.target;
            let foundState = null;

            while (target && target !== mapContainer) {
                if (target.id && stateIds.includes(target.id)) {
                    foundState = target.id;
                    break;
                }
                target = target.parentNode;
            }

            if (foundState) {
                window.location.href = foundState + ".html"; // Go to State Page
            } else if (e.target.closest('#layer1') || e.target.id === 'layer1') {
                window.location.href = "About.html"; // Go to About India Page
            }
        });
    }
});
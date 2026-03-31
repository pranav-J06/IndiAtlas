var states = {
    Andaman_Nicobar: { capital: "Port Blair", year: "1956", districts: 3, population: 0.38, area: 8249, literacy: 86.6, lang: "Hindi, English", gdp: 0.1 },
    Andhra_Pradesh: { capital: "Amaravati", year: "1956", districts: 26, population: 49.5, area: 162975, literacy: 67.4, lang: "Telugu", gdp: 13.0 },
    Arunachal_Pradesh: { capital: "Itanagar", year: "1987", districts: 26, population: 1.38, area: 83743, literacy: 65.3, lang: "English", gdp: 0.3 },
    Assam: { capital: "Dispur", year: "1950", districts: 35, population: 31.2, area: 78438, literacy: 72.1, lang: "Assamese", gdp: 4.9 },
    Bihar: { capital: "Patna", year: "1912", districts: 38, population: 104.1, area: 94163, literacy: 61.8, lang: "Hindi", gdp: 7.5 },
    Chhattisgarh: { capital: "Raipur", year: "2000", districts: 33, population: 25.5, area: 135192, literacy: 70.2, lang: "Hindi", gdp: 4.6 },
    Delhi: { capital: "New Delhi", year: "1992", districts: 11, population: 16.8, area: 1484, literacy: 86.2, lang: "Hindi, English", gdp: 10.4 },
    Goa: { capital: "Panaji", year: "1987", districts: 2, population: 1.46, area: 3702, literacy: 88.7, lang: "Konkani", gdp: 0.9 },
    Gujarat: { capital: "Gandhinagar", year: "1960", districts: 33, population: 60.0, area: 196024, literacy: 78.0, lang: "Gujarati", gdp: 22.0 },
    Haryana: { capital: "Chandigarh", year: "1966", districts: 22, population: 25.4, area: 44212, literacy: 75.5, lang: "Hindi", gdp: 10.0 },
    Himachal_Pradesh: { capital: "Shimla", year: "1971", districts: 12, population: 6.9, area: 55673, literacy: 82.8, lang: "Hindi", gdp: 1.9 },
    Jharkhand: { capital: "Ranchi", year: "2000", districts: 24, population: 32.9, area: 79716, literacy: 66.4, lang: "Hindi", gdp: 3.8 },
    Karnataka: { capital: "Bengaluru", year: "1956", districts: 31, population: 61.1, area: 191791, literacy: 75.3, lang: "Kannada", gdp: 22.5 },
    Kerala: { capital: "Thiruvananthapuram", year: "1956", districts: 14, population: 33.4, area: 38863, literacy: 94.0, lang: "Malayalam", gdp: 10.0 },
    Lakshadweep: { capital: "Kavaratti", year: "1956", districts: 1, population: 0.06, area: 32, literacy: 91.8, lang: "Malayalam", gdp: 0.03 },
    Madhya_Pradesh: { capital: "Bhopal", year: "1956", districts: 52, population: 72.6, area: 308252, literacy: 69.3, lang: "Hindi", gdp: 12.5 },
    Maharashtra: { capital: "Mumbai", year: "1960", districts: 36, population: 112.3, area: 307713, literacy: 82.3, lang: "Marathi", gdp: 35.0 },
    Manipur: { capital: "Imphal", year: "1972", districts: 16, population: 2.8, area: 22327, literacy: 76.9, lang: "Meitei", gdp: 0.4 },
    Meghalaya: { capital: "Shillong", year: "1972", districts: 12, population: 2.9, area: 22429, literacy: 74.4, lang: "English", gdp: 0.4 },
    Mizoram: { capital: "Aizawl", year: "1987", districts: 11, population: 1.09, area: 21081, literacy: 91.3, lang: "Mizo", gdp: 0.3 },
    Nagaland: { capital: "Kohima", year: "1963", districts: 16, population: 1.9, area: 16579, literacy: 79.5, lang: "English", gdp: 0.3 },
    Orissa: { capital: "Bhubaneswar", year: "1936", districts: 30, population: 41.9, area: 155707, literacy: 72.8, lang: "Odia", gdp: 7.7 },
    Puducherry: { capital: "Pondicherry", year: "1954", districts: 4, population: 1.2, area: 490, literacy: 85.8, lang: "Tamil, French", gdp: 0.2 },
    Punjab: { capital: "Chandigarh", year: "1966", districts: 23, population: 27.7, area: 50362, literacy: 75.8, lang: "Punjabi", gdp: 6.8 },
    Rajasthan: { capital: "Jaipur", year: "1956", districts: 50, population: 68.5, area: 342239, literacy: 66.1, lang: "Hindi", gdp: 14.2 },
    Sikkim: { capital: "Gangtok", year: "1975", districts: 6, population: 0.61, area: 7096, literacy: 81.4, lang: "Nepali", gdp: 0.4 },
    Tamil_Nadu: { capital: "Chennai", year: "1950", districts: 38, population: 72.1, area: 130060, literacy: 80.0, lang: "Tamil", gdp: 24.8 },
    Telangana: { capital: "Hyderabad", year: "2014", districts: 33, population: 35.0, area: 112077, literacy: 66.5, lang: "Telugu", gdp: 13.0 },
    Tripura: { capital: "Agartala", year: "1972", districts: 8, population: 3.7, area: 10486, literacy: 87.2, lang: "Bengali", gdp: 0.7 },
    Uttar_Pradesh: { capital: "Lucknow", year: "1950", districts: 75, population: 199.8, area: 240928, literacy: 67.6, lang: "Hindi", gdp: 22.6 },
    Uttarakhand: { capital: "Dehradun", year: "2000", districts: 13, population: 10.1, area: 53483, literacy: 78.8, lang: "Hindi", gdp: 3.0 },
    West_Bengal: { capital: "Kolkata", year: "1956", districts: 23, population: 91.3, area: 88752, literacy: 76.2, lang: "Bengali", gdp: 15.3 },
    DNH_DD: { capital: "Daman", year: "2020", districts: 3, population: 0.59, area: 603, literacy: 76.2, lang: "Gujarati", gdp: 0.2 }
};

function compareStates() {
    var s1 = document.getElementById("state1").value;
    var s2 = document.getElementById("state2").value;
    var viewMode = document.getElementById("viewMode").value;

    if (s1 === "" || s2 === "") {
        alert("Please select both states to compare!");
        return;
    }

    if (s1 === s2) {
        alert("Please select two different states to compare!");
        return;
    }

    var data1 = states[s1];
    var data2 = states[s2];
    var name1 = s1.replace(/_/g, " ");
    var name2 = s2.replace(/_/g, " ");

    if (viewMode === "tabular") {
        document.getElementById("tabularSection").style.display = "block";
        document.getElementById("visualSection").style.display = "none";

        document.getElementById("name1").innerText = name1;
        document.getElementById("name2").innerText = name2;
        document.getElementById("capital1").innerText = data1.capital;
        document.getElementById("capital2").innerText = data2.capital;
        document.getElementById("year1").innerText = data1.year;
        document.getElementById("year2").innerText = data2.year;
        document.getElementById("lang1").innerText = data1.lang;
        document.getElementById("lang2").innerText = data2.lang;
        document.getElementById("districts1").innerText = data1.districts;
        document.getElementById("districts2").innerText = data2.districts;
        document.getElementById("population1").innerText = data1.population + " Million";
        document.getElementById("population2").innerText = data2.population + " Million";
        document.getElementById("area1").innerText = data1.area.toLocaleString() + " km²";
        document.getElementById("area2").innerText = data2.area.toLocaleString() + " km²";
        document.getElementById("literacy1").innerText = data1.literacy + "%";
        document.getElementById("literacy2").innerText = data2.literacy + "%";
        document.getElementById("gdp1").innerText = "₹" + data1.gdp + " Lakh Cr";
        document.getElementById("gdp2").innerText = "₹" + data2.gdp + " Lakh Cr";
        
    } else if (viewMode === "visual") {
        document.getElementById("tabularSection").style.display = "none";
        document.getElementById("visualSection").style.display = "block";

        var density1 = Math.round((data1.population * 1000000) / data1.area);
        var density2 = Math.round((data2.population * 1000000) / data2.area);

        drawBarChart("popChart", "Population", data1.population, data2.population, name1, name2, "M");
        drawBarChart("areaChart", "Area (sq km)", data1.area, data2.area, name1, name2, "");
        drawBarChart("litChart", "Literacy Rate (%)", data1.literacy, data2.literacy, name1, name2, "%", 100);
        drawBarChart("densityChart", "Density (per km²)", density1, density2, name1, name2, "");
        drawBarChart("distChart", "Number of Districts", data1.districts, data2.districts, name1, name2, "");
        drawBarChart("gdpChart", "GDP (Lakh Cr)", data1.gdp, data2.gdp, name1, name2, "", null, "₹");
    }
}

function drawBarChart(canvasId, title, val1, val2, name1, name2, suffix, fixedMax = null, prefix = "") {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var maxVal = fixedMax ? fixedMax : Math.max(val1, val2); 
    if (maxVal === 0) maxVal = 1; 

    var chartHeight = 150;
    var barWidth = 50;
    
    var bar1Height = (val1 / (maxVal * 1.1)) * chartHeight; 
    var bar2Height = (val2 / (maxVal * 1.1)) * chartHeight;

    ctx.fillStyle = "#0056b3"; 
    ctx.font = "bold 15px Poppins, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(title, canvas.width / 2, 25);

    ctx.beginPath();
    ctx.moveTo(30, 210); 
    ctx.lineTo(300, 210); 
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#333";
    ctx.stroke();

    ctx.fillStyle = "#ff9933"; 
    ctx.fillRect(75, 210 - bar1Height, barWidth, bar1Height);

    ctx.fillStyle = "#138808"; 
    ctx.fillRect(205, 210 - bar2Height, barWidth, bar2Height);

    ctx.fillStyle = "#333";
    ctx.font = "bold 12px Poppins, sans-serif";
    var display1 = name1.length > 10 ? name1.substring(0, 8) + "..." : name1;
    var display2 = name2.length > 10 ? name2.substring(0, 8) + "..." : name2;
    ctx.fillText(display1, 100, 230); 
    ctx.fillText(display2, 230, 230); 

    ctx.font = "12px Poppins, sans-serif";
    var text1 = prefix + (val1 > 1000 ? val1.toLocaleString() : val1) + suffix;
    var text2 = prefix + (val2 > 1000 ? val2.toLocaleString() : val2) + suffix;
    ctx.fillText(text1, 100, 200 - bar1Height);
    ctx.fillText(text2, 230, 200 - bar2Height);
}
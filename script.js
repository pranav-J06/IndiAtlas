window.onload = function () {

    function linkState(id) {
        var el = document.getElementById(id);
        if (el) {
            el.onclick = function () {
                window.location.href = id + ".html";
            };
        }
    }

    linkState("Andaman_Nicobar");
    linkState("Lakshadweep");
    linkState("Assam");
    linkState("Arunachal_Pradesh");
    linkState("West_Bengal");
    linkState("Nagaland");
    linkState("Manipur");
    linkState("Mizoram");
    linkState("Tripura");
    linkState("Meghalaya");
    linkState("Sikkim");
    linkState("Kerala");
    linkState("Tamil_Nadu");
    linkState("Andhra_Pradesh");
    linkState("Goa");
    linkState("Chhattisgarh");
    linkState("Karnataka");
    linkState("Orissa");
    linkState("Maharashtra");
    linkState("Jharkhand");
    linkState("Bihar");
    linkState("Madhya_Pradesh");
    linkState("Uttar_Pradesh");
    linkState("Gujarat");
    linkState("Rajasthan");
    linkState("Delhi");
    linkState("Haryana");
    linkState("Uttarakhand");
    linkState("Punjab");
    linkState("Himachal_Pradesh");
    linkState("Puducherry");
    linkState("Chandigarh");
    linkState("Jammu_and_Kashmir");
    linkState("Daman_And_Diu");
    linkState("About");

};

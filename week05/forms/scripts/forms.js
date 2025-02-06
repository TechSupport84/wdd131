document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
        { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
    ];


    const productSelect = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    let reviewCount = localStorage.getItem("reviewCount") || 0;
    document.getElementById("reviewCounter").textContent = `Reviews Submitted: ${reviewCount}`;


    document.getElementById("reviewForm").addEventListener("submit", function (event) {
        event.preventDefault(); 


        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
        document.getElementById("reviewCounter").textContent = `Reviews Submitted: ${reviewCount}`;


        const messageDiv = document.createElement("div");
        messageDiv.textContent = "Thanks for Submitting!";
        messageDiv.style.color = "#fff";
        messageDiv.style.backgroundColor = "#28a745";
        messageDiv.style.fontSize = "1.2rem";
        messageDiv.style.fontWeight = "bold";
        messageDiv.style.textAlign = "center";
        messageDiv.style.padding = "10px";
        messageDiv.style.marginTop = "15px";
        messageDiv.style.borderRadius = "5px";
        document.getElementById("reviewForm").parentNode.insertBefore(messageDiv, document.getElementById("reviewForm"));

 
        document.getElementById("reviewForm").reset();

     
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    });
});

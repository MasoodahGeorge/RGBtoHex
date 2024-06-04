document.addEventListener("DOMContentLoaded", function () {
    let convertBtn = document.getElementById("convertBtn2");
    let clearBtn = document.getElementById("clearBtn2");
    let rgbInputs = document.querySelectorAll("input[type='text']");
    let resultSpan = document.getElementById("days");

    convertBtn.addEventListener("click", function () {
        let r = parseInt(rgbInputs[0].value);
        let g = parseInt(rgbInputs[1].value);
        let b = parseInt(rgbInputs[2].value);

        if (isValidRGB(r) && isValidRGB(g) && isValidRGB(b)) {
            let hex = `#${eval("r.toString(16).padStart(2, '0')")}${eval("g.toString(16).padStart(2, '0')")}${eval("b.toString(16).padStart(2, '0')")}`;
            resultSpan.textContent = hex.toUpperCase(); // Convert to uppercase for consistency
        } else {
            resultSpan.textContent = "Invalid RGB values";
        }
    });

    clearBtn.addEventListener("click", function () {
        rgbInputs.forEach(input => input.value = "");
        resultSpan.textContent = "";
    });

    function isValidRGB(value) {
        return Number.isInteger(value) && value >= 0 && value <= 255;
    }
});
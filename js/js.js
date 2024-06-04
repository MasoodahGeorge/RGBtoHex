document.addEventListener("DOMContentLoaded", function() {
    const convertBtn = document.getElementById("convertBtn2");
    const clearBtn = document.getElementById("clearBtn2");
    const rgbInputs = document.querySelectorAll("input[type='text']");
    const resultSpan = document.getElementById("days");

    convertBtn.addEventListener("click", function() {
        const r = parseInt(rgbInputs[0].value);
        const g = parseInt(rgbInputs[1].value);
        const b = parseInt(rgbInputs[2].value);

        if (isValidRGB(r) && isValidRGB(g) && isValidRGB(b)) {
            const hex = rgbToHex(r, g, b);
            resultSpan.textContent = hex;
        } else {
            resultSpan.textContent = "Invalid RGB values";
        }
    });

    clearBtn.addEventListener("click", function() {
        rgbInputs.forEach(input => input.value = "");
        resultSpan.textContent = "";
    });

    function isValidRGB(value) {
        return Number.isInteger(value) && value >= 0 && value <= 255;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
});

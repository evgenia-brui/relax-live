const maskPhone = () => {
    const inputsPhone = document.querySelectorAll('input[name="phone"]');

    inputsPhone.forEach((input) => {
        let keyCode;
        
        const mask = (event) => {
            event.keyCode && (keyCode = event.keyCode);
            let pos = input.selectionStart;
        
            if (pos < 3) {
                event.preventDefault();
            }

            let matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = input.value.replace(/\D/g, ""),
                newValue = matrix.replace(/[_\d]/g, (a) => {
                    if (i < val.length) {
                        return val.charAt(i++) || def.charAt(i);
                    } else {
                        return a;
                    }
                });

            i = newValue.indexOf("_");
            
            if (i != -1) {
                i < 5 && (i = 3);
                newValue = newValue.slice(0, i);
            }

            let reg = matrix
                .substr(0, input.value.length)
                .replace(/_+/g, (a) => {
                    return "\\d{1," + a.length + "}";
                })
                .replace(/[+()]/g, "\\$&");

            reg = new RegExp("^" + reg + "$");

            if (
                !reg.test(input.value) ||
                input.value.length < 5 ||
                (keyCode > 47 && keyCode < 58)
            ) {
                input.value = newValue;
            }

            if (event.type == "blur" && input.value.length < 5) {
                input.value = "";
            }
        };

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });
};

export default maskPhone;
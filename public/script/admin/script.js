let image = document.getElementById('imagem_sobremesa');
let file = document.getElementById('input_imagem');
image.addEventListener('click', () => 
    {
        file.click()
    })

file.addEventListener('change', () => 
    {
        if (file.files.length == 0) {
            return;
        }

        let reader = new FileReader();
    
        reader.readAsDataURL(file.files[0]);
        
        reader.onload = () => {
            image.src = reader.result
        }
    })


function addItem() {
            
            let name = document.getElementById('name').value;
            let price = document.getElementById('price').value;
            let products = document.getElementById('tbody');

            products.innerHTML +=`
            <tr>
            <td>${name}</td>
            <td>${price}</td>
            </tr>
            ` ;

            document.getElementById('name').value = '';
            document.getElementById('price').value = '';
        }

window.onload = function() {
  handleModelChange(document.getElementById('model').value);
}
document.querySelector('form').addEventListener('submit', function(e) {
  document.getElementById('backdrop').style.display = 'block';
  document.getElementById('loader').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', (event) => {
        if (localStorage.getItem('form_data')) {
            let savedData = JSON.parse(localStorage.getItem('form_data'));
            document.getElementById('api_key').value = savedData.api_key || '';
            document.getElementById('question').value = savedData.question || '';
            document.getElementById('model').value = savedData.model || '';
            document.getElementById('product').value = savedData.product || '';
            document.getElementById('internet').value = savedData.internet || '';
        }
    });

    // Save form data to localStorage when the form changes
    document.querySelector('form').addEventListener('change', (event) => {
        let formData = {
            api_key: document.getElementById('api_key').value,
            question: document.getElementById('question').value,
            model: document.getElementById('model').value,
            product: document.getElementById('product').value,
            internet: document.getElementById('internet').value
        };
        localStorage.setItem('form_data', JSON.stringify(formData));
    });
function handleModelChange(value) {
  document.getElementById('productContainer').style.display = value === 'amazon' ? 'block' : 'none';
  document.getElementById('internetContainer').style.display = value === 'chat' ? 'block' : 'none';
}

function updateProductValue(value) {
  document.getElementById('productValue').innerText = value;
}
function updateProductValue(value) {
  document.getElementById('productValue').innerText = value;
}

function copyOutput() {
  event.preventDefault();
    var responseHTML = document.querySelector('.output pre').innerHTML;
    var textarea = document.createElement('textarea');
    textarea.innerHTML = responseHTML;
    textarea.style.position = 'fixed';  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
        return document.execCommand('copy');  // Security exception may be thrown by some browsers.
    } catch (ex) {
        console.warn('Copy to clipboard failed.', ex);
        return false;
    } finally {
        document.body.removeChild(textarea);
    }
}

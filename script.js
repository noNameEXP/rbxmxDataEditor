document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('fileContent').value = e.target.result;
        };
        reader.readAsText(file);
    }
});

document.getElementById('saveButton').addEventListener('click', function() {
    const content = document.getElementById('fileContent').value;
    const blob = new Blob([content], { type: 'application/xml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'new_file.rbxmx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

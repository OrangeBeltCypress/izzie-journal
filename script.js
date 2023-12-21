function addEntry() {
    var name = document.getElementById('name').value;
    var entry = document.getElementById('entry').value;

    if (name && entry) {
        var entrySection = document.getElementById('entries');

        var newEntry = document.createElement('div');
        newEntry.className = 'gratitude-entry';
        newEntry.innerHTML = `<h3>${name}</h3><p>${entry}</p>`;

        entrySection.appendChild(newEntry);

        // Clear the form after adding an entry
        document.getElementById('entry-form').reset();
    } else {
        alert('Please fill in both fields before submitting.');
    }
}

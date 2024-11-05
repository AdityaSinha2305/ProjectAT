const iframe = document.getElementById('iframe');
const popover = document.getElementById('popoverContent');

iframe.addEventListener('mouseover', function () {
    const rect = iframe.getBoundingClientRect();
    popover.style.left = `${rect.left + window.scrollX}px`;
    popover.style.top = `${rect.top + window.scrollY - popover.offsetHeight}px`;
    popover.style.display = 'block';
});

iframe.addEventListener('mouseout', function () {
    popover.style.display = 'none';
});

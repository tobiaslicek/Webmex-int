document.querySelector('.aktualizovat').addEventListener('click', function () {
  document.getElementById('popupNotification').style.display = 'block';

  setTimeout(function () {
    document.getElementById('popupNotification').style.display = 'none';
  }, 2000);
});

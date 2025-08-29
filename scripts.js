<script>
  // Initial count
  let clickCounter = 0;
  let copyCount = 2;

  // Heart icons
  const hearts = document.querySelectorAll('[id$="-heart"]');
  const clickCounterSpan = document.getElementById('click-counter');

  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      clickCounter++;
      clickCounterSpan.textContent = clickCounter;
      heart.innerHTML = '<i class="fa-solid fa-heart text-red-500"></i>';
    });
  });

  // Copy buttons
  const copyButtons = document.querySelectorAll('[id$="-copy-icon"], [id$="-copy"]');
  const copyCountSpan = document.getElementById('Copy-count');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const numberId = btn.id.replace('-copy-icon', '-service-num').replace('-copy', '-num');
      const numberText = document.getElementById(numberId)?.textContent || '';
      navigator.clipboard.writeText(numberText);

      copyCount++;
      copyCountSpan.textContent = copyCount;
      alert(numberText + ' copied to clipboard');
    });
  });

  // Call buttons
  const callButtons = document.querySelectorAll('[id$="-call"]');
  const historyContent = document.getElementById('history-content');

  callButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      const serviceName = card.querySelector('h3').textContent;
      const serviceNum = card.querySelector('h2').textContent;
      const time = new Date().toLocaleTimeString();

      const entry = document.createElement('div');
      entry.className = 'p-2 border-b border-gray-200';
      entry.textContent = `${serviceName}: ${serviceNum} at ${time}`;
      historyContent.prepend(entry);
    });
  });

  // Clear button
  document.getElementById('clear-button').addEventListener('click', () => {
    historyContent.innerHTML = '';
  });
</script>

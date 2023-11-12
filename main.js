scrollButton.addEventListener('click', () => {
    scrollableBlock.scrollIntoView();
  });

scrollableBlock.addEventListener('scroll', () => {
    if (scrollableBlock.scrollTop > 0) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });
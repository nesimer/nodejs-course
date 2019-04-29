const showPanel = id => {
  document.getElementById(id).classList.add('active');
};

const setActiveButton = item => {
  item.classList.add('active');
};

const removeActived = () => {
  const elements = document.getElementsByClassName('active');
  Array.from(elements).forEach(item => {
    item.classList.remove('active');
  });
};

const setActive = item => {
  removeActived();
  setActiveButton(item);
  showPanel(item.dataset.panelId);
};
